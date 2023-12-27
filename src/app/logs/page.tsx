'use client';

import CustomButton from "@/components/Button";
import DetectionLogsTable from "@/sections/DetectionLogsTable";
import styles from "@/styles";
import { useRouter } from 'next/navigation'

export default function Logs() {

    const router = useRouter()

    return (
        <div className={`flex flex-col ${styles.innerWidth} ${styles.paddings}`}>
            <CustomButton
                text="Back"
                handleOnclick={() => {
                    router.push('/')
                }} 
                styleClass="w-[60px]"/>
            <DetectionLogsTable />
        </div>
    )
}
