import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-white rounded-lg px-4 py-2 m-4 relative hover:shadow-xl text-white">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg text-black">
        {book.publishYear}
      </h2>
      <div className="flex justify-center items-center gap-x-2">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="max-h-40 max-w-40 object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-300 hover:text-white cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-300 hover:text-white" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-300 hover:text-white" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-300 hover:text-white" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
