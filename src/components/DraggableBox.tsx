// DraggableBox.tsx
import React, { useEffect, useRef, useState } from 'react';
import Draggable, { DraggableEvent, DraggableData, ControlPosition } from 'react-draggable';
import { Resizable } from 'react-resizable';
import '../styles/resizable.css'

interface DraggableBoxProps {
    parentRef: React.RefObject<HTMLDivElement>;
    isMoveable: boolean;
}

const DraggableBox: React.FC<DraggableBoxProps> = ({ parentRef, isMoveable }) => {
    const [position, setPosition] = useState<ControlPosition | null>(null);
    const [boxSize, setBoxSize] = useState({ width: 80, height: 80 });
    const [isResizing, setIsResizing] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const parentContainer = parentRef.current;
        const boxContainer = boxRef.current;

        if (parentContainer && boxContainer) {
            const parentRect = parentContainer.getBoundingClientRect();
            const initialX = (parentRect.width - boxSize.width) / 2;
            const initialY = (parentRect.height - boxSize.height) / 2;
            setPosition({ x: Math.round(initialX), y: Math.round(initialY) * -1 });
        }
    }, [parentRef, boxSize]);

    const handleResize = (event: any, { node, size, handle }: any) => {
        setBoxSize({ width: size.width, height: size.height });
    };

    const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    return (
        <Draggable
            bounds="parent"
            onStop={handleDragStop}
            disabled={!isMoveable}
            position={position || undefined}
        >
            <Resizable
                width={boxSize.width}
                height={boxSize.height}
                onResize={handleResize}
                onResizeStart={() => { }}
                onResizeStop={() => { }}
                className="max-w-[300px] max-h-[200px] min-w-[50px] min-h-[50px]"
            >
                <div
                    ref={boxRef}
                    className={isMoveable ? "border-solid border-4 border-gray-500 absolute" :
                        "border-solid border-4 border-blue-500 absolute"}
                    style={{
                        width: `${boxSize.width}px`,
                        height: `${boxSize.height}px`,
                        transform: 'translate(0, 0)',
                    }}
                />
            </Resizable>
        </Draggable>
    );
};

export default DraggableBox;
