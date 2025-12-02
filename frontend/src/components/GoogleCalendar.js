import React from 'react';

const GoogleCalendar = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Google Calendar</h2>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia/Jerusalem"
        style={{ border: 0 }}
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        className="rounded-lg shadow-inner"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
