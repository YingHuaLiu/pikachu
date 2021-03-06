const string = `
*{box-sizing: border-box;margin: 0;padding: 0;}
*::before,*::after{box-sizing: border-box}

.skin{
    position: relative;
    background: rgb(254,230,1);
    min-height: 100vh;
}
.nose-outer{
    position: absolute;
    width: 16px;
    height: 16px;
    left: 50%;
    margin-left: -8px;
    top: 125px;
    z-index: 10;
}
.nose {
    width: 16px;
    height: 16px;
    background: black;
    border-radius: 16px 0 0;
    transform: rotate(45deg);
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose-outer:hover{
    transform-origin: 8px 19.3137085px;
    animation: wave 300ms infinite linear;
}
.eye {
    position: absolute;
    border: 2px solid black;
    width: 64px;
    height: 64px;
    left: 50%;
    margin-left: -32px;
    top: 75px;
    background: rgb(45, 46, 43);
    border-radius: 50%;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.eye:before {
    content: '';
    display: block;
    border: 1px solid black;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}

.face{
    position: absolute;
    border: 2px solid black;
    width: 80px;
    height: 80px;
    left:50%;
    margin-left: -40px;
    border-radius: 50%;
    background: rgb(254,0,0);
}
.face.left{
    transform: translateX(-150px);
    top:200px;
}
.face.right{
    transform: translateX(150px);
    top:200px;

}

.mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    top:170px;
    left: 50%;
    margin-left: -100px;
}
.mouth .up .lip{
    border: 2px solid black;
    width: 100px;
    height: 60px;
    position: absolute;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    top:-25px;
    z-index: 2;
    background: rgb(254,230,1);
}
.mouth .up .lip.left{
    border-radius: 30px 70px 70px 30px / 30px;
    transform: rotate(-15deg);
    right:50%;
    margin-right: -11px;
}
.mouth .up .lip.right{
    border-radius: 70px 30px 30px 70px / 30px;
    transform: rotate(15deg);
    left: 50%;
    margin-left: -10px;
}

.down{
    height: 150px;
    position: absolute;
    top:0;
    width: 100%;
    overflow: hidden;
}
.down .yuan1{
    border: 1px solid black;
    position: absolute;
    bottom: 0;
    height: 1000px;
    width: 140px;
    left: 50%;
    margin-left: -70px;
    border-radius: 70px/300px;
    background: rgb(155,1,10);
    overflow: hidden;
}
.down .yuan1 .yuan2{
    position: absolute;
    border:1px solid black;
    width: 100px;
    height: 300px;
    bottom: -200px;
    left: 50%;
    margin-left: -50px;
    border-radius: 100px;
    background: rgb(255,72,95);
}
`;
export default string;