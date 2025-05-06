// CalendarComponent.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './Calendar.css' 
import {
  Layout,Card
} from 'antd';
const { Content } = Layout;
const Calendar = () => {
  const events = [
    {
      title: "EtudesXXX",
      start: "2025-10-03",
      color: "#b37feb",
    },
    {
      title: "EtudesXXX",
      start: "2025-10-16",
      color: "#f759ab",
    },
    {
      title: "Etudes XX",
      start: "2025-10-24",
      color: "#69c0ff",
    },
    {
      title: "Reunion",
      start: "2025-10-20",
      end: "2025-10-23", // end is exclusive, so use +1 day
      color: "#ffc069",
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '24px 16px' }}>
        <Card
          title="Calendar"
          bordered={false}
          headStyle={{ fontSize: '20px', fontWeight: 'bold' ,textDecoration:'#1890ff underline'}}
        >
    <div style={{ padding: "20px", background: "#fff", borderRadius: "10px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialDate="2025-10-01"
        events={events}
        height="auto"
      />
    </div>
    </Card>
    </Content>
    </Layout>
  );
};

export default Calendar;
