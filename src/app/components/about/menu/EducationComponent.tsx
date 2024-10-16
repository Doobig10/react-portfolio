export default function EducationComponent() {
    return (
        <div>
            <h2
                className={`
                font-semibold text-lg
                pb-2
                `}
            >
                Loughborough University, Oct 2021 – July 2024
            </h2>
            <ul
                className={"child:pb-2"}
            >
                <li> • BSc Computer Science and Maths, First Class Honours</li>
            </ul>
            <br/>
            <h2
                className={`
                font-semibold text-lg
                pb-2
                `}
            >
                Hardenhuish Sixth Form, Sept 2019 – July 2021
            </h2>
            <ul
                className={"child:pb-2"}
            >
                <li> • Computer Science, Grade A</li>
                <li> • Mathematics, Grade A</li>
                <li> • Further Mathematics, Grade B</li>
                <li> • Psychology, Grade C</li>
            </ul>
            <br/>
            <h2
                className={`
                font-semibold text-lg
                pb-2
                `}
            >
                Hardenhuish Secondary School, Sept 2014 – July 2019
            </h2>
            <ul
                className={"child:pb-2"}
            >
                <li> • Mathematics, Grade 8</li>
                <li> • Computer Science, Grade 7</li>
                <li> • Physics, Grade 7</li>
                <li> • Chemistry, Grade 7</li>
                <li> • Biology, Grade 6</li>
                <li> • Business, Grade 5</li>
            </ul>
        </div>
    );
}
