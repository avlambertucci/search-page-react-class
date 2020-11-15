import styled from 'styled-components';

export const VideoItemCard = styled.div`
  background: #181818;
  padding: 10px;
  color: #fff;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover{
    background: #414141;
    transition: 0.3s;
    font-size: 40px;
  }
  .imgContainer{
    width: 140px;
    margin: auto 10px 
  }

  .videoItemContainer{
    display: flex;
  }
  img{
    max-width: 140px;
  }
  p{
    font-size: 10px;
    color: #efeded;
  }
  

`