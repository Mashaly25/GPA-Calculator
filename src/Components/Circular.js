import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Circular(props) {
    const percentage = props.finalDegree;
    const GPA = props.finalGPA;
    return (
        <CircularProgressbar
            value={percentage}
            text={GPA.toFixed(3)}
            styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                    // Path color
                    stroke: `rgba(0, 84, 48, ${percentage / 100})`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                // Customize the text
                text: {
                    // Text color
                    fill: '#000704',
                    // Text size
                    fontSize: '16px',
                },
                // Customize background - only used when the `background` prop is true
                background: {
                    fill: '#3e98c7',
                },
            }}
        />
    )
}

export default Circular