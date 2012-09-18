// JavaScript Document
var  arithmetic_x 		 = [0,1,2,3,4,5,6,7,8,9];
var  arithmetic_y 		 = [0,1,2,3,4,5,6,7,8,9];
var  arithmetic_operator = ["-","+"]; 
var  arithmetic_level = 1;
//生成一个算术表达式
function arithmetic_onclick(){
		
	var return_array = [];	
	var s_list		 = false;
	var true_off	 = true;	


	while(true_off){

		var rand_x_i =  Math.floor(Math.random()*9+1);	
		var rand_y_i =	Math.floor(Math.random()*9+1);
		var rand_z_i  = Math.floor(Math.random()*2);	
		
		if(arithmetic_operator[rand_z_i] == '-' && arithmetic_x[rand_x_i] - arithmetic_y[rand_y_i] > 0 ){
				return_array	= 	[arithmetic_x[rand_x_i] + "-" + arithmetic_y[rand_y_i],arithmetic_x[rand_x_i] - arithmetic_y[rand_y_i] ];
				true_off		= false;
		}
		
		if(arithmetic_operator[rand_z_i] == '+' && arithmetic_x[rand_x_i] + arithmetic_y[rand_y_i] < 10 ){
			return_array	= 	[ arithmetic_x[rand_x_i] + "+" + arithmetic_y[rand_y_i],arithmetic_x[rand_x_i] + arithmetic_y[rand_y_i] ];
			true_off		= false;
		}
		
		
	}
	return return_array;
}	

/**  **/
function arithmetic_list(level){
	
	var level = 20 + level ;
	
	var arith_list	= [];
	
	for(i = 0; i < level; i++){
		arith_list.push(arithmetic_onclick());
	}
	return arith_list;
}


/** 开始进行 **/
function start(){
	
					
	
}


