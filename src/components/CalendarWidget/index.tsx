import React from 'react'
import "./calendar-widget.scss"

const CalendarWidget: React.FC = () => (
	<div className="calendly-inline-widget-wrapper">
		<div className="calendly-inline-widget-wrapper__inner">
			<div
				className="calendly-inline-widget"
				id="calendly-inline-widget"
				data-url="https://calendly.com/maxdk/demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=89bb1e"
				style={{ minWidth: '320px', height: '700px' }}
			/>
		</div>
	</div>
)

export default CalendarWidget;
