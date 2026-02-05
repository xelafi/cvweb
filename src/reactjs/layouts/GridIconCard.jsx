import React, { useEffect, useState } from 'react';
import IconCard from '../components/IconCard'

const GridIconCard = ({ icons, cardSize = 90, cardMargin = 16 }) => {
    const [iconsPerRow, setIconsPerRow] = useState(5);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const calculateIconsPerRow = () => {
            const containerWidth = window.innerWidth;
            const mobile = containerWidth <= 768;
            const fit = mobile 
                ? 3
                : Math.floor((containerWidth - 40) / (cardSize + (2 * cardMargin))) - 2;
            setIconsPerRow(Math.max(1, fit));
            setIsMobile(mobile);
        };

        calculateIconsPerRow();
        window.addEventListener("resize", calculateIconsPerRow);
        return () => window.removeEventListener("resize", calculateIconsPerRow);
    }, [cardSize, cardMargin]);

    const rows = [];

    for (let i = 0; i < icons.length; i += iconsPerRow) {
        const row = icons.slice(i, i + iconsPerRow);

        if (!isMobile) {
            for(let padCount = 1; row.length < iconsPerRow; padCount++ ) {
                if(padCount % 2 === 1){
                    row.push(null);
                }else{
                    row.unshift(null);
                }
            }
            // cadre gauche/droite
            rows.push([null, ...row, null]);
        } else {
            rows.push(row);
        }
    }

    let paddedRows;
    if (!isMobile) {
        const rowLengthWithPadding = iconsPerRow + 2;
        const emptyRow = Array(rowLengthWithPadding).fill(null);
        paddedRows = [emptyRow, ...rows, emptyRow];
    } else {
        const emptyRow = Array(iconsPerRow).fill(null);
        paddedRows = [emptyRow, ...rows, emptyRow];
    }

    return (
        <div className="grid-icon">
            {paddedRows.map((row, rowIndex) => (
                <div
                    className={`grid-icon--row ${rowIndex % 2 === 1 ? "grid-icon--row--offset" : ""}`}
                    key={rowIndex}
                >
                    {row.map((icon, index) => (
                        <IconCard key={index} iconType={icon?.type} href={icon?.href} />
                    ))}
                </div>
            ))}
        </div>
    );
};


export default GridIconCard;