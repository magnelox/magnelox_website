"use client";

import { useEffect, useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

interface Job {
    id: number;
    title: string;
    dept: string;
    type: string;
    location: string;
    link: string;
}

export default function CareersList() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/jobs")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch jobs:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center text-gray-400 py-20">Loading open positions...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {jobs.map((job) => (
                <div key={job.id} className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-card transition-all duration-300 group flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-black mb-2">{job.title}</h3>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{job.dept}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl text-black group-hover:bg-black group-hover:text-white transition-colors">
                            <Briefcase size={20} />
                        </div>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-500 mb-8 mt-auto">
                        <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={16} /> {job.type}</span>
                    </div>

                    <a
                        href={job.link}
                        className="w-full py-4 rounded-full bg-gray-50 text-black font-medium hover:bg-black hover:text-white transition-colors text-center flex items-center justify-center gap-2 group-hover:translate-x-1"
                    >
                        Apply Now <ArrowRight size={16} />
                    </a>
                </div>
            ))}
        </div>
    );
}
