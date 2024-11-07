const showTime = () => {
    const time = (new Date()).toLocaleTimeString();
    let hour = (new Date()).getHours();
    return hour;
} 

console.log(showTime());