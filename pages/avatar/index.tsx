import { useState } from "react";
import Image from "next/image";
import Loading from "../../components/element/Loading";

export default function Avatar() {
  let [tempImage, setTempImage] = useState<string>("");
  const [keywordAvatar, setKeywordAvatar] = useState<string>("");
  const [keywordEmpty, setKeywordEmpty] = useState<boolean>(false);
  const [loadingAvatar, setLoadingAvatar] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordAvatar(e.target.value);
    setLoadingAvatar(true);
    if (e.target.value === "") {
      setKeywordEmpty(true);
    } else {
      setKeywordEmpty(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTempImage(keywordAvatar);
    setLoadingAvatar(false);
  };

  return (
    <div className="bg-[#E0FFFF] pt-[2rem] md:pt-[8rem] pb-[10rem] md:pb-[15rem]">
      <div className="container">
        <form onSubmit={e => handleSubmit(e)} className="p-[0.5rem]">
          <div className="flex justify-center">
            <input
              type="text"
              name="avatar"
              onChange={handleInputChange}
              placeholder="Ketik nama Anda..."
              className="form-control form-input"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-[#28A745] text-md text-white p-2 rounded-lg px-4">Buat Profil Picture!</button>
          </div>
        </form>
        
        <div className="flex justify-center pt-5">
          {!loadingAvatar ? (
            <>
              {tempImage && (
                <div className="bg-white p-2 rounded-full">
                  <Image
                    src={`https://robohash.org/${tempImage}?200x200`}
                    alt="gambar"
                    className="rounded-full bg-cover"
                    width={200}
                    height={200}
                  />
                </div>
              )}
            </>
          ) : keywordEmpty ? (
            <div className="px-8 md:px-0 pt-2 text-center text-xs">
              *Silahkan masukan nama Anda lalu tekan enter atau klik button "Buat Profil Picture!
            </div>
          ) : (
            <div className="block">
              <Loading />
              <div className="pt-2 text-center text-xs">
                Silahkan tekan enter atau klik button "Buat Profil Picture!" agar avatar muncul
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
