import FounderCard from "./FounderCard"
const founderList = [{name: "Sandeep Patel", about: "The people person, our representative and co-founder. With extensive experience travelling across the India, Sandeep ensures that each trip we plan is the best it can be.", img: "/jaydev_kings_college-scaled.jpg"}, {name: "Jaydev Singh Rao", about: "The tech/research guy and co-founder. Having a knack for solving problems, Jaydev works on the technological solutions needed to help us achieve our common vision", img: "/sandeep.jpeg"}]
const FounderSection = () => {
    return (
        <div className="bg-black pb-14">
            <p className="flex flex-col items-center text-white">
                <h3 className="p-8 text-2xl">Meet Our Team</h3>
                <div className="max-w-96 text-center">We are a pair of friends passionate about traveling and sharing the love of travelling with others through this company.</div>
            </p>
            <div className="flex justify-around flex-wrap">
                <FounderCard info={founderList[0]} />
                <FounderCard info={founderList[1]} />
            </div>
        </div>
    )
}

export default FounderSection