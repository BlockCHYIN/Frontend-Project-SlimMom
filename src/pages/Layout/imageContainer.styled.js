import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

export const StrawberryImg=styled.img`
  @media screen and (max-width: 767px){
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};

  @media screen and (max-width: 1279px){
    bottom:140px ;
    right:10px;
  }

  @media screen and (min-width: 1280px){
    bottom:0px ;
    right:0px;
  }
  z-index: -1;
`

export const BananaImg=styled.img`
  @media screen and (max-width: 767px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px){
    bottom:0px ;
    right:0px;
  }
  @media screen and (min-width: 1280px){
    top:0px;
    right: 0px;
  }
  z-index: -1;
`

export const LeavesImg=styled.img`
  @media screen and (max-width: 767px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  top: ${props=>(props.desktop ? '0px' : '50%')};
  left:${props=>(props.desktop ? '200px' : '20px')};
  z-index: -1;
`

export const VectorImg=styled.img`
  @media screen and (max-width: 767px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  bottom: ${props=>(props.desktop ? '0px' : '0px')};
  right:${props=>(props.desktop ? '0px' : '0px')};
  z-index: -1;
`

export const LeafSide=styled.img`
  @media screen and (max-width: 1279px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  bottom: 0px;
  right:0px;
  z-index: -1;
`
export const LeafFooter=styled.img`
  @media screen and (min-width: 1280px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  bottom: 0px;
  right:0px;
  z-index: -1;
`



