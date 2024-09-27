import { BookCard } from "./ui/book-card";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function BookCataloge(): JSX.Element {
    return (
      <div className="flex justify-left w-full flex-col px-20 pt-20 mt-20 mb-10">
         <TextGenerateEffect words={"Availible Books"} />
         <div className="justify-center grid grid-cols-4 gap-16 span-4">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
         </div>   
      </div>
  
    );
  }
  
  export default BookCataloge;