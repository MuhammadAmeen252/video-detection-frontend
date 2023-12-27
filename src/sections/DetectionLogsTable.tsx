'use client';

import React, { useState } from 'react';
import CustomTable from "@/components/Table";
import Modal from "@/components/Modal";
import { LogsDetectionTableData } from "@/utils/mockData";
import { logsTableHeaders } from "@/utils/constants";
import styles from "@/styles";
import CustomButton from '@/components/Button';

export default function DetectionLogsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectedRow = (data: any) => {
    setSelectedRow(data);
    openModal();
  }

  return (
    <div className={`flex flex-col ${styles.innerWidth} mt-5`}>
      <CustomTable
        headers={logsTableHeaders}
        rows={LogsDetectionTableData}
        currentPage={1}
        isNextPage={true}
        isPreviousPage={false}
        onPageChange={() => null}
        handleRowSelect={handleSelectedRow}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        widthClass="w-full md:w-3/4 lg:w-2/4"
        heightClass="h-full md:h-auto"
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Detection Details</h2>
          <div className="mb-4">
            <img src={selectedRow?.imageSrc} alt="Image" className="w-[60px] h-[30px]" />
          </div>
          <div className="flex justify-between flex-col gap-2">
            <p>Date: {selectedRow?.date}</p>
            <p>Time: {selectedRow?.time}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
