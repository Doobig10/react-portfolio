export default function ExperienceComponent() {
    return (
        <div>
            <h2
                className={`
                font-semibold text-lg
                pb-2
                `}
            >
                Loughborough University - Final Year Project
            </h2>
            <ul className={"child:pb-2"}>
                <li> • Implemented an agent-based system utilising evolutionary algorithms to optimise strategy </li>
                <li> • Effectively utilised a distributed architecture, achieving notably better performance, consistency and results than similar systems without such an approach. </li>
                <li> • Designed and implemented a small scale, fit-for-purpose request Application Programming Interface (API), ensuring scalability and consistency remained at the forefront of design across potentially large deployments with various hardware requirements. </li>
                <li> • Analysed my project results using a variety of tools including MATLAB scripts and python programs, producing clear and helpful representations and statistical measures. </li>
            </ul>
            <h2
                className={`
                font-semibold text-lg
                pb-2
                `}
            >
                Loughborough University - Videogames and Esports Society
            </h2>
            <ul className={"child:pb-2"}>
                <li> • Spent three years developing interpersonal skills and working alongside a committee of up to 16 other members. </li>
                <li> • Gained firsthand experience in minute taking for society meetings as well as other relevant skills including effective communication and cohesive teamwork. </li>
                <li> • Planned and hosted a variety of events for upwards of 100 society members during first year on committee as ‘Community Gaming Officer’, ranging from short regular events to multi-day LAN (Local Area Network) events. </li>
                <li> • Was in charge of maintaining and upgrading most, if not all, of the society server infrastructure during second and third years as ‘Technical Officer’. </li>
                <li> • Migrated society infrastructure from physical hardware to a cloud-based solution during a time sensitive transition without compromising on availability. </li>
                <li> • Learnt how to approach and resolve problems of a more technical nature, documenting procedures and solutions where existing documentation did not exist or was lacking. </li>
                <li> • Developed skills in Linux operating systems such as Ubuntu and Debian, specifically at a command line level, including many of the standard tools used when working with these systems. </li>
                <li> • Handled the migration of many assets to a Docker based deployment strategy, including the use and modification of existing images where appropriate, as well as the development of bespoke images where a sufficient solution did not already exist. </li>
                <li> • Handled networking and setup for LAN events; including producing power plans, providing network connection and managing a group of volunteers to implement both in a timely fashion. </li>
            </ul>
        </div>
    );
}
