export default function http (config){
	if(typeof config == 'string'){
		config = {
			url: config
		}
	}
	if(!config.url) config.url='';
	window.http ={ 
		post: (url, doc, callback=(resp:any) => {}, opts:any={})=>{
			fetch(config.url+url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(doc)
			})
			.then((resp)=>{
				return resp.json() }) 
			.then(callback)
			.then((resp) =>{
				console.log('Created Type is sent successfully');
			})
			.catch(err => {
				console.log('Type send failed', err);
			})
		},
		get: (url, callback=(resp:any) => {}, opts:any={})=>{
			fetch(config.url+url, {
				method: 'GET'
			}).then((resp)=>{
				return resp.json();
			}).then(callback);
		}
	}
	return null;
}