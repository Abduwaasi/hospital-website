import React,{useState,useEffect} from 'react'
import {MdRateReview} from "react-icons/md"
import { peoples } from '../../data';
import { IconContext } from 'react-icons/lib';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import { ReviewWrapper,ReviewContainer,TitleCenter,PersonCard,Text,Image,Name,Title,IconButton,PersonArticle,PrevButton,NextButton } from './Review.elements';

const Review = () => {
    const [people, setPeople] = useState(peoples);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
    return (
        <ReviewWrapper>
            <ReviewContainer>   
            <TitleCenter>
            <IconContext.Provider value={{style:{fontSize:"2rem"}}}>
                <MdRateReview/>
                </IconContext.Provider>
            <h2>Clients Testimonial</h2>
            </TitleCenter>
            <PersonCard>
            {people.map((person, personIndex)=>{
                    const{id, image, name,title,quote} =person
                    
                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return <PersonArticle className={position} key={id}>
                        <Text>{quote}</Text>
                        <Image src={image} alt={name}/>
                        <Name>{name}</Name>
                        <Title>{title}</Title>
                    </PersonArticle>
                })}
            </PersonCard>
            <PrevButton onClick={()=>setIndex(index-1)}>
               <FiChevronLeft />
              </PrevButton>
               <NextButton className="next" onClick={()=>setIndex(index+1)}>
               <FiChevronRight />
               </NextButton>
        
            </ReviewContainer>

        </ReviewWrapper>
    )
}

export default Review
