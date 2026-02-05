import React, { useEffect, useState } from 'react';
import IconCard from '../components/IconCard'

const GridIconCard = ({ icons, cardSize = 90, cardMargin = 16 }) => {
    const [iconsPerRow, setIconsPerRow] = useState(5); 
    useEffect(() => {
        const calculateIconsPerRow = () => {
            const totalCardWidth = cardSize + (2 * cardMargin);
            const containerWidth = window.innerWidth;
            const fit = Math.floor((containerWidth - 40) / totalCardWidth) - 2; 
            setIconsPerRow(Math.max(1, fit));
        };

        calculateIconsPerRow();
        window.addEventListener("resize", calculateIconsPerRow);
        return () => window.removeEventListener("resize", calculateIconsPerRow);
    }, [cardSize, cardMargin]);

    const rows = [];

    for (let i = 0; i < icons.length; i += iconsPerRow) {
        const row = icons.slice(i, i + iconsPerRow);

            for(let padCount = 1; row.length < iconsPerRow; padCount++ ) {
                if(padCount % 2 === 1){
                    row.push(null);
                }else{
                    row.unshift(null);
                }
            }

        // cadre gauche/droite
        rows.push([null, ...row, null]);
    }


    const rowLengthWithPadding = iconsPerRow + 2;
    const emptyRow = Array(rowLengthWithPadding).fill(null);
    const paddedRows = [emptyRow, ...rows, emptyRow];

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