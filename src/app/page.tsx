import Card from '../components/Card'

export default function Home() {
  return (
    <div className="flex justify-center py-8">
      <div className="bg-gray-100 rounded-md shadow-lg p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Participating Hospitals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            hospitalName="Chulalongkorn Hospital" 
            imgSrc="/img/chula.jpg"
          />
          <Card 
            hospitalName="Rajavithi Hospital" 
            imgSrc="/img/rajavithi.jpg"
          />
          <Card 
            hospitalName="Thammasat University Hospital" 
            imgSrc="/img/thammasat.jpg"
          />
        </div>
      </div>
    </div>
  )
}
