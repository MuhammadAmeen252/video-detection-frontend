'use client';

import React from 'react';
import CustomButton from './Button';

interface TableProps {
    headers: string[];
    rows: any;
    onPageChange: (pageNumber: number) => void;
    isNextPage: boolean;
    isPreviousPage: boolean;
    currentPage: number;
    handleRowSelect: (rowData: any) => void;
}

const CustomTable: React.FC<TableProps> = 
({ headers = [], rows = [], onPageChange, isNextPage, isPreviousPage, currentPage, handleRowSelect }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 max-h-[250px]">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((rowData: any, rowIndex: number) => (
                        <tr key={rowData?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {Object.keys(rowData).map((key, cellIndex) => {
                                return (
                                    <td className="p-4" key={rowIndex + cellIndex}>
                                        {(key === "img" || key === "imageSrc") ?
                                            (
                                                <img src={rowData[key]}
                                                    className="w-16 md:w-32 max-w-full max-h-full" alt="Image" />
                                            ) :
                                            rowData[key]
                                        }
                                    </td>
                                )
                            })}
                            <td className="px-6 py-4">
                                <CustomButton 
                                    styleClass="font-medium text-blue-600 dark:text-red-500 hover:underline" 
                                    text='View' 
                                    handleOnclick={()=>{handleRowSelect(rowData)}}    
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
                {/* Pagination */}
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    {/* Display pagination info */}
                    Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">{rows.length}</span>
                </span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    {/* Previous Page Button */}
                    <a href="#" onClick={() => onPageChange(-1)} className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${!isPreviousPage ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        Previous
                    </a>

                    {/* Render Page Numbers */}
                    {[...Array(3)].map((_, index) => (
                        <li key={index}>
                            <a href="#" onClick={() => onPageChange(index + 1)} className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === index + 1 ? 'font-semibold' : ''}`}>
                                {index + 1}
                            </a>
                        </li>
                    ))}

                    {/* Next Page Button */}
                    <a href="#" onClick={() => onPageChange(1)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${!isNextPage ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        Next
                    </a>
                </ul>
            </nav>
        </div>
    );
};

export default CustomTable;
