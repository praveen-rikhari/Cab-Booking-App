import MapboxMap from "@/components/Map/MapboxMap";
import Booking from "@/components/Booking/Booking";

export default function Home() {
  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
      <div>
        <Booking />

      </div>
      <div className='col-span-2'>
        <MapboxMap />
      </div>
    </div>
  );
}
