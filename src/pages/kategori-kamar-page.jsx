import { useState } from "react";
import { useContext } from "react";
import { global } from "../assets/context";

// import db_hotel from "../db_hotel.json";
import KategoriTable from "../Components/kategori-table";
import KategoriTambah from "../Components/kategori-tambah";
import KategoriCari from "../Components/kategori-cari";

export default function KategoiKamarPage() {
  const [database, setDatabase] = useState(useContext(global).database);
  const func = useContext(global).func;

  const tambah = (value) => {
    setDatabase(value.map((el) => el));
    func(value);
  };

  const cari = (value) => {
    alert(value);
  };
  const hapus = (value) => {
    setDatabase(value.map((el) => el));
    func(value);
  };

  return (
    <div className="w-full">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">
          Kategori Kamar
        </h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            <KategoriTambah database={database} tambah={tambah} />
            <KategoriCari database={database} cari={cari} />
          </div>
          <KategoriTable database={database} dbHapus={hapus} />
        </form>
      </div>
    </div>
  );
}
