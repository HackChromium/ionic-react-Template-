import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = (props: any) => (
	<div className="pin">
		<Icon height={50} color="black" icon={locationIcon} className="pin-icon" />
		<p className="pin-text">{props.text}</p>
	</div>
);

export default LocationPin;
