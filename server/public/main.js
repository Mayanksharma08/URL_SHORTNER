new Vue({
   el: '#app',
   data: {
       error:'',
       success:false,
       name:'',
       url:'',
   },
    methods: {
        createTigna(){
            const body={
                name: this.name,
                url: this.url
            };
            
            fetch('/api/tigna',{
                method: 'POST',
                body: JSON.stringify(body),
                headers:{
                'content-type':'application/json'
            }
            }).then(response => {
                console.log(response)
                return response.json();
            }).then(result=>{
                if(result.isJoi){
                    this.error = result.details.map(detail => detail.message).join('. ');
                }else{
                    this.success = true;
                }
            });
        }
    }
});
