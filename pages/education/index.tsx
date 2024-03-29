import { useEffect, useState } from "react";
import { AppContext } from "next/app";
import { EducationSection, TierEducation } from "../../service/type";
// import Loading from "../../components/element/Loading";
import { mockEducation } from "../../service/mockEducation";
import styles from './style.module.css';

export default function Education() {
  const [tierEducation, setTierEducation] = useState<TierEducation[]>([]);
  const [levelEducation, setLevelEducation] = useState<EducationSection[]>([]);
  const [tierTitle, setTierTitle] = useState<string>("");
  const [levelTitle, setLevelTitle] = useState<string>("");
  const [isOpenSelectTier, setOpenSelectTier] = useState<boolean>(false);
  const [isOpenSelectLevel, setOpenSelectLevel] = useState<boolean>(false);

  useEffect(() => {
    setTierEducation(mockEducation.tierEducation);
  }, [mockEducation]);

  const handleOpenSelectTier = () => {
    if (isOpenSelectTier) {
      setOpenSelectTier(false);
    } else {
      setOpenSelectTier(true);
    }
  }

  const handleOpenSelectLevel = () => {
    if (isOpenSelectLevel) {
      setOpenSelectLevel(false);
    } else {
      setOpenSelectLevel(true);
    }
  }

  const handleSelectTier = (name: string, pre: string) => {
    setTierTitle(name);
    const data: any = mockEducation.levelEducation.find((level) => pre === level.preSchool );
    console.log('data', data);
    setLevelEducation(data?.eduLevelName);
    setOpenSelectTier(!isOpenSelectTier);
  }

  const handleSelectLevel = (name: string) => {
    setLevelTitle(name);
    setOpenSelectLevel(!isOpenSelectTier);
  }

  return (
    <div className="bg-white py-10 px-0 md:p-10">
      <div className="container">
        <div className={`p-4 text-center rounded-lg ${styles.shadow}`}>
          <div className="text-md font-semibold w-full md:w-[21.3rem] text-[#6912D8] bg-[#F4F2FF] py-2 px-5 rounded-2xl ">
            Dropdown Select Education
          </div>

          <div className="cursor-pointer block md:flex items-center py-5">
            <div className="w-full h-[250px] px-0 py-2 md:px-4">
              <div
                onClick={handleOpenSelectTier}
                className="w-full relative text-center rounded-md py-2 px-4 md:py-4 md:px-6 font-semibold text-xs md:text-sm bg-[#3A8339] text-white">
                <div className="flex justify-center">
                  <div>{tierTitle ? tierTitle : 'Pilih jenjang'}</div>
                  <div className="flex items-center ml-1">
                    {isOpenSelectTier ? <div className={styles.triangleUp}></div> : <div className={styles.triangleDown}></div>}
                  </div>
                </div>
              </div>
              {isOpenSelectTier && (
                <div className={`bg-white text-black w-full py-2 ${styles.shadow}`}>
                  {tierEducation.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`line-height-4 cursor-pointer px-0 py-2 md:px-4 text-sm text-left font-semibold hover:bg-gray-200 ${tierTitle === item.eduTierName && 'bg-gray-200'}`}
                        onClick={() => handleSelectTier(item.eduTierName, item.preSchool)}
                      >
                        {item.eduTierName}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="w-full h-[250px] px-0 py-2 md:px-4">
              <div
                onClick={handleOpenSelectLevel}
                className="w-full relative text-center rounded-md py-2 px-4 md:py-4 md:px-6 font-semibold text-xs md:text-sm bg-[#CA403D] text-white">
                <div className="flex justify-center">
                  <div>{!tierTitle && isOpenSelectLevel ? 'Pilih jenjang dulu!' : levelTitle ? levelTitle : 'Pilih tingkatan'}</div>
                  <div className="flex items-center ml-1">
                    {isOpenSelectLevel ? <div className={styles.triangleUp}></div> : <div className={styles.triangleDown}></div>}
                  </div>
                </div>
              </div>
              {tierTitle && isOpenSelectLevel && (
                <div className={`bg-white text-black w-full ${styles.shadow}`}>
                  <div className="pointer-events-none opacity-50 bg-gray-300 cursor-not-allowed line-height-4 px-0 py-2 md:p-4 text-sm text-left font-semibold">
                    Jenjang {tierTitle}
                  </div>
                  {levelEducation.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`line-height-4 cursor-pointer px-0 py-2 md:px-4 text-sm text-left font-semibold hover:bg-gray-200 ${levelTitle === item.eduName && 'bg-gray-200'}`}
                        onClick={() => handleSelectLevel(item.eduName)}
                      >
                        {item.eduName}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <Loading /> */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: AppContext) {
  return {
    props: {},
  }
}
