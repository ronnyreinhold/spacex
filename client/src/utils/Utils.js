export default {
    setDateToString(date){
        let d = new Date(date);
        return [d.getDate(), d.getMonth()+1, d.getFullYear()]
                .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
    }
}
