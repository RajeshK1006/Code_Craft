import Image from "next/image";
import Header from "./_components/Header";
import EditorPanel from "./_components/EditorPanel";
import Outputpanel from "./_components/Outputpanel";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <Outputpanel />
        </div>
      </div>
    </div>
  );
}
