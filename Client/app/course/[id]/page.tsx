'use client';

import { use } from 'react'; // ✅ correctly importing 'use'
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params); // ✅ correct unwrapping

    return (
        <div>
            <CourseDetailsPage id={id} />
        </div>
    );
};

export default Page;
