import { NextResponse } from "next/server";

export async function GET() {
    const jobs = [
        {
            id: 1,
            title: "AI Engineer",
            dept: "Artificial Intelligence",
            type: "Full-Time",
            location: "Remote",
            link: "mailto:careers@magnelox.com?subject=Application for AI Engineer"
        },
        {
            id: 2,
            title: "Cybersecurity Analyst",
            dept: "Cybersecurity",
            type: "Full-Time",
            location: "Remote",
            link: "mailto:careers@magnelox.com?subject=Application for Cybersecurity Analyst"
        },
        {
            id: 3,
            title: "Backend Developer",
            dept: "Software Development",
            type: "Full-Time",
            location: "Hybrid - Dubai",
            link: "mailto:careers@magnelox.com?subject=Application for Backend Developer"
        },
        {
            id: 4,
            title: "UI/UX Designer",
            dept: "Design",
            type: "Contract",
            location: "Remote",
            link: "mailto:careers@magnelox.com?subject=Application for UI/UX Designer"
        }
    ];

    return NextResponse.json(jobs);
}
