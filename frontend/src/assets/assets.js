import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import header_img2 from './header_img2.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import car1 from './car1.png'
import car2 from './car2.png'
import car3 from './car3.png'
import clean1 from './clean1.png'
import clean2 from './clean2.png'
import elec1 from './elec1.png'
import elec2 from './elec2.png'
import mason1 from './mason1.png'
import mason2 from './mason2.png'
import paint1 from './paint1.png'
import paint2 from './paint2.png'
import plum1 from './plum1.png'
import plum2 from './plum2.png'
import plum3 from './plum3.png'
import elec3 from './elec3.png'
import carpenter from './carpenter.png'
import cleaner from './cleaner.png'
import Electrician from './Electrician.png'
import painter from './painter.png'
import mason from './mason.png'
import plumber from './plumber.png'


export const assets = {
    appointment_img,
    header_img,
    header_img2,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Electrician',
        image: Electrician
    },
    {
        speciality: 'Plumber',
        image: plumber
    },
    {
        speciality: 'Carpenter',
        image: carpenter
    },
    {
        speciality: 'Cleaner',
        image: cleaner
    },
    {
        speciality: 'Painter',
        image: painter
    },
    {
        speciality: 'Mason',
        image: mason
    },
]

export const workers = [
    {
        _id: 'elec1',
        name: 'Richard James',
        image: elec1,
        speciality: 'Electrician',
        degree: 'Lineman',
        experience: '4 Years',
        about: 'James has a strong commitment to ensuring reliable electrical service, with a focus on preventive maintenance, early fault detection, and efficient repair strategies. This proactive approach minimizes downtime and extends the lifespan of critical systems. Larson’s dedication to excellence ensures safety, performance, and customer satisfaction at every level.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'elec2',
        name: 'Emily Larson',
        image: elec2,
        speciality: 'Electrician',
        degree: 'Wireman',
        experience: '3 Years',
        about: 'Larson has a strong commitment to ensuring reliable electrical service, with a focus on preventive maintenance, early fault detection, and efficient repair strategies.This proactive approach minimizes downtime and extends the lifespan of critical systems. Larson’s dedication to excellence ensures safety, performance, and customer satisfaction at every level.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'elec3',
        name: 'Sarah Patel',
        image: elec3,
        speciality: 'Electrician',
        degree: 'Solar Technician',
        experience: '1 Years',
        about: 'Patel has a strong commitment to ensuring reliable electrical service, with a focus on preventive maintenance, early fault detection, and efficient repair strategies. This proactive approach minimizes downtime and extends the lifespan of critical systems. Larson’s dedication to excellence ensures safety, performance, and customer satisfaction at every level.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'car1',
        name: 'Christopher Lee',
        image: car1,
        speciality: 'Carpenter',
        degree: 'Furniture',
        experience: '2 Years',
        about: 'Lee This proactive approach minimizes downtime and extends the lifespan of critical systems. Larson’s dedication to excellence ensures safety, performance, and customer satisfaction at every level. This proactive approach minimizes downtime and extends the lifespan of critical systems. Larson’s dedication to excellence ensures safety, performance, and customer satisfaction at every level.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'car2',
        name: 'Jennifer Garcia',
        image: car2,
        speciality: 'Carpenter',
        degree: 'Window Fitter',
        experience: '4 Years',
        about: 'Garcia has a strong commitment to ensuring reliable electrical service, with a focus on preventive maintenance, early fault detection, and efficient repair strategies. This proactive approach minimizes downtime and extends the lifespan of critical systems. Larson’s dedication to excellence ensures safety, performance, and customer satisfaction at every level.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'car3',
        name: 'Andrew Williams',
        image: car3,
        speciality: 'Carpenter',
        degree: 'Interior',
        experience: '4 Years',
        about: 'Andre has a strong commitment to ensuring reliable electrical service, with a focus on preventive maintenance, early fault detection, and efficient repair strategies. This proactive approach minimizes downtime and extends the lifespan of critical systems. Larson’s dedication to excellence ensures safety, performance, and customer satisfaction at every level.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'clean1',
        name: 'Christopher Davis',
        image: clean1,
        speciality: 'Cleaner',
        degree: 'Bathroom Cleaner',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'clean2',
        name: 'Timothy White',
        image: clean2,
        speciality: 'Cleaner',
        degree: 'Kitchen Cleaner',
        experience: '3 Years',
        about: 'White has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mason1',
        name: 'Ava Mitchell',
        image: mason1,
        speciality: 'Mason',
        degree: 'Rajmistri',
        experience: '1 Years',
        about: 'Ava has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'mason2',
        name: 'Jeffrey King',
        image: mason2,
        speciality: 'Mason',
        degree: 'Plaster Mistri',
        experience: '2 Years',
        about: 'King has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'paint1',
        name: 'Zoe Kelly',
        image: paint1,
        speciality: 'Painter',
        degree: 'Spray painter',
        experience: '4 Years',
        about: 'Kelly a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'paint2',
        name: 'Patrick Harris',
        image: paint2,
        speciality: 'Painter',
        degree: 'Exterior',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'plum1',
        name: 'Chloe Evans',
        image: plum1,
        speciality: 'Plumber',
        degree: 'Drainage',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'plum2',
        name: 'Ryan Martinez',
        image: plum2,
        speciality: 'Plumber',
        degree: 'Pipe Fitter',
        experience: '3 Years',
        about: 'Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'plum3',
        name: 'Amelia Hill',
        image: plum3,
        speciality: 'Plumber',
        degree: 'Kitchen plumber',
        experience: '1 Years',
        about: 'Hill has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]