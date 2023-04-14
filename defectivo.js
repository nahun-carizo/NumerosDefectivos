function seraDefectivo(n){
	let a1,a2;

	for(let k=1; k<n+1; k++){
		a1=0;
		for(let j=1; j<k; j++){
			a2=j+1;
			if(k%j==0){
				a1+=j;
				//document.write(k+' - '+j+' - '+aux+' - '+aux2+'<br>');
			}
			if((a2==k)&&(a1<k)){
				document.write(k+'<br>');
			}
		}
	}
}
