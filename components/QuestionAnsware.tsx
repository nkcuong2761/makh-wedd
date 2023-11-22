import Container from "./Container";

const QuestionAnsware = () => {
  return (
    <div id="question_answare" className=" py-10 xl:py-14">
      <Container>
        <h2 className="text-center font-pacifico text-[3rem] xl:text-[6rem]">
          Q&A
        </h2>
        <div className=" max-w-[670px] space-y-5 mx-auto px-2">
          <div>
            <h3 className="text-[2.2rem]  font-black xl:text-[4rem] text-center font-poppinss text-skin-darkbrown-50">
              Where and when?
            </h3>
            <p className=" text-center text-[1rem]  font-poppinss text-skin-darkbrown-800 font-normal">
            Date: Sunday, December 24, 2023<br></br>

            Time: 11:00am<br></br>

            Location:<br></br>
            Trong Dong Linh Dam<br></br>
            Hanoi, Vietnam<br></br>
            </p>
          </div>
          <div>
            <h3 className="text-[2.2rem] font-black  xl:text-[4rem] text-center font-poppinss text-skin-darkbrown-50">
              How did we meet?
            </h3>
            <p className=" text-center text-[1rem]  font-poppinss text-skin-darkbrown-800 font-normal">
              We met 8 years ago and became close friends in high school. Until one day, we came to a realization we&apos;re meant for each other? And started planning our whole lives together in 3 hours. Ask us for more details ;)
            </p>
          </div>
          <div>
            <h3 className="text-[2.2rem] font-black  xl:text-[4rem] text-center font-poppinss text-skin-darkbrown-50">
              What else to do?
            </h3>
            <p className=" text-center text-[1rem]  font-poppinss text-skin-darkbrown-800 font-normal">
              If you&apos;re wondering what to do in Hanoi, a street food tour is highly recommended.  Bun cha, pho, rolled cake, green sticky rice.. are must-try dishes. Explore Hoan Kiem Lake, the Temple of Literature, Ho Chi Minh Mausoleum, Dong Xuan market or wander around Hanoi Old Quarter. And more!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuestionAnsware;
