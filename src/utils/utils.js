export default {

    /**
     * 格式化时间
     * @param {Date} time 时间
     */
    formateDate(time){
        if(time==null)return null;

        let date=new Date(time);

        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate())+'  '+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }


}