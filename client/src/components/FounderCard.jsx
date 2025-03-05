const FounderCard = ({ info }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-8 text-white">
      <img
        src={info.img}
        alt="Our Founder Sandeep Patel"
        className="w-80 h-auto rounded-2xl"
      />
      <h4 className="p-4 text-2xl font-medium">{info.name}</h4>
      <p className="w-80 text-center">{info.about}</p>
    </div>
  );
};

export default FounderCard;
