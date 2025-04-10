

function TextImage({ title, text, image, altText, reverse = false }) {
    return (
      <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-between gap-8 mt-12`}>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-4 text-gray-600">{text}</p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={image} alt={altText} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    );
  }
  
  export default TextImage;