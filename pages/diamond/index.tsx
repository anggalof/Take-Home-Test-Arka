import { useEffect, useState } from 'react';

export default function DiamondCounter() {
  let [tempNumber, setTempNumber] = useState(1);

  useEffect(() => {
    handleDiamondArrangement();
  }, []);

  const handleDiamondArrangement = () => {
    const container: any = document.getElementById('diamond-wrapper');
    const sizeColumn = 3;
    const widthDiamond = 30;
    const heightDiamond = 30;
  
    for (let i = 0; i < sizeColumn; i++) {
      for (let j = 0; j < sizeColumn; j++) {
        const diamond = document.createElement('div');
        diamond.classList.add('diamond');
        if (tempNumber % 2 === 0) {
          diamond.style.background = '#72BE21';
        } else {
          diamond.style.background = '#0BA30A';
        }
        diamond.style.top = i * heightDiamond - Math.abs(sizeColumn - 1 - i) * heightDiamond / 2 + 'px';
        diamond.style.left = j * widthDiamond - Math.abs(sizeColumn - 1 - j) * widthDiamond / 2 + 'px';
        container.appendChild(diamond);
        setTempNumber(tempNumber++);
      }
    }
  }

  return (
    <div className="bg-[#FEFF9C] pt-[8rem] pb-[5rem] md:py-[8rem]">
      <div className="w-full h-[180px] flex justify-center">
        <div
          className="relative m-[0 auto] transform rotate-45 w-[100px] h-[100px]"
          id="diamond-wrapper"></div>
      </div>
      <div className="w-full text-center font-semibold italic">
        <div>.: Selamat Hari Raya Idul Fitri :.</div>
        <div>Mohon maaf lahir dan batin (&#x1F5A4;)</div>
      </div>
    </div>
  );
}
