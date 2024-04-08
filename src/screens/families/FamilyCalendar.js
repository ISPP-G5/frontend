import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import '../../styles/styles.css';
import LayoutProfiles from '../../components/LayoutProfiles';
import { ToastContainer } from 'react-toastify';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const localizer = momentLocalizer(moment);

const FamilyCalendar = () => {
    const [activities, setActivities] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        volunteerId: ''
    });
    const userId = parseInt(localStorage.getItem('userId'));

    useEffect(() => {
        axios.get(`${API_ENDPOINT}user/`)
        .then(response => {
            const userWithUserId = response.data.find(user => user.id === userId);
            if (userWithUserId) {
            setCurrentUser({
                volunteerId: userWithUserId.volunteer
            });
            } else {
            console.error('No user found with the provided user ID.');
            }
        })
        .catch(error => {
            console.error(error);
        });

        axios.get(`${API_ENDPOINT}event/`)
        .then(response => {
            const filteredActivities = response.data.filter(activity => moment(activity.start_date).isAfter(moment()));
            setActivities(prevActivities => [...prevActivities.filter(event => event.lesson), ...filteredActivities.map(activity => ({
            title: activity.name,
            start: new Date(activity.start_date),
            end: new Date(activity.end_date),
            id: activity.id,
            description: activity.description,
            place: activity.place,
            max_volunteers: activity.max_volunteers,
            max_attendees: activity.max_attendees,
            price: activity.price,
            attendees: activity.attendees,
            volunteers: activity.volunteers,
            url: activity.url
            }))]);
        })
        .catch(error => {
            console.error(error);
        });

        axios.get(`${API_ENDPOINT}lesson-event/`)
        .then(response => {
            const filteredActivities = response.data.filter(activity => moment(activity.start_date).isAfter(moment()));
            setActivities(prevActivities => [...prevActivities.filter(event => !event.lesson), ...filteredActivities.map(activity => ({
            id: activity.id,
            title: activity.name,
            description: activity.description,
            place: activity.place,
            max_volunteers: activity.max_volunteers,
            start: new Date(activity.start_date),
            end: new Date(activity.end_date),          
            lesson: activity.lesson,
            price: activity.price,
            educators: activity.educators,
            attendees: activity.attendees,
            volunteers: activity.volunteers,
            url: activity.url
            }))]);
        })
        .catch(error => {
            console.error(error);
        });
    }, [userId]);

    return (
        <LayoutProfiles profile={'familia'} selected={'Calendario'}>
        <ToastContainer />
        <Calendar
            localizer={localizer}
            events={activities}
            startAccessor="start"
            endAccessor="end"
            className='calendar'            
        />
        </LayoutProfiles>
    );
};

export default FamilyCalendar;