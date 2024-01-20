import { Navbar } from "@/modules/app/componets/navbar/navbar";
import { searchMovies } from "@/modules/dashboard/services/serachMovies";
import { useRouter } from "next/router";
import { use, useEffect } from "react";
export default function Dashboard() {   
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
        const getMovie=async()=>{
            searchMovies(id);
    },[id]);
    return (
        <>
            <Navbar />
            <h1>Dashboard</h1>
        </>
    );
}