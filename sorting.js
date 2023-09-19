class algo{

    constructor(size,speed){
        this.size=size;
        this.speed=speed;
        console.log("sorting started");
        this.arr = document.querySelectorAll(".bar");
        console.log(this.arr);
    }



transitions = async() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, this.speed);
    });
}

async curr(j){
    this.arr[j].setAttribute("class", "bar curr_bar");
}

async nocurr(j){
    this.arr[j].setAttribute("class", "bar");
}

async small(curr_min){
    this.arr[curr_min].setAttribute("class", "bar curr_min");
}
async min(i,j){
    await this.transitions();
    let height1 = Number(this.arr[i].getAttribute("bar_height"));
    let height2 = Number(this.arr[j].getAttribute("bar_height"));
    if(height1<=height2){
        return i;
    }else{
        return j;
    }
}

async swap(i,j){
    // console.log(this.arr[i]);
    // console.log(this.arr[j]);
     await this.transitions();
    let height1 = this.arr[i].getAttribute("bar_height");
    let height2 = this.arr[j].getAttribute("bar_height");
  //  console.log("hsddf");
    this.arr[i].setAttribute("bar_height",height2);
    this.arr[j].setAttribute("bar_height",height1);
    this.arr[i].style.height = `${3.8*height2}px`;
    this.arr[j].style.height = `${3.8*height1}px`;
    // console.log(this.arr[i]);
}

async SelectionSort(){
   // console.log("here");
    for(let i=0;i<this.size;i++){
        let min_pos=i;
        for(let j=i+1;j<this.size;j++){
            await this.curr(j);
            let intial=min_pos;
            await this.small(min_pos);
           // this.arr[intial].style.background="black";
         //   this.arr[j].style.background="red";
            min_pos= await this.min(min_pos,j);
           // this.arr[intial].style.background="blue";
          //  this.arr[j].style.background="blue";
            // console.log(min_pos);
            
            if(intial!=min_pos){
                await this.small(min_pos);
                await this.nocurr(intial);
             //   this.arr[intial].style.background="blue";
            }
            await this.nocurr(j);
        }

        await this.curr(i);
        await this.transitions();
        await this.swap(min_pos,i);
        await this.nocurr(min_pos);
       // this.arr[i].style.background="green";
        // console.log("hsddf");
        // console.log(min_pos);
     this.arr[i].setAttribute("class", "bar done");        
    }
}

//1 2 3 4 5 6 7 8 9 10 11
// 1 5 6 8 9
// 2 3 4 7 8 10 11

async merge(){
    await this.MergeSort(0, this.size-1);
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.arr[counter].setAttribute("class", "bar done");
        }
}

async merge(){
    await this.MergeSort(0, this.size-1);
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.arr[counter].setAttribute("class", "bar done");
        }
}

async Merge(start,mid,end){
    let newList = new Array();
        let frontcounter = start;
        let midcounter = mid + 1;
        
        while(frontcounter <= mid && midcounter <= end) {
            let fvalue = Number(this.arr[frontcounter].getAttribute("bar_height"));
            let svalue = Number(this.arr[midcounter].getAttribute("bar_height"));
            if(fvalue >= svalue) {
                newList.push(svalue);
                ++midcounter;
            }
            else {
                newList.push(fvalue);
                ++frontcounter;
            }
        }
        while(frontcounter <= mid) {
            newList.push(Number(this.arr[frontcounter].getAttribute("bar_height")));
            ++frontcounter;
        }
        while(midcounter <= end) {
            newList.push(Number(this.arr[midcounter].getAttribute("bar_height")));
            ++midcounter;
        }

        for(let c = start ; c <= end ; ++c) {
            this.arr[c].setAttribute("class", "bar curr_bar");
        }
        for(let c = start, point = 0 ; c <= end && point < newList.length; 
            ++c, ++point) {
                await this.transitions();
                this.arr[c].setAttribute("bar_height", newList[point]);
                this.arr[c].style.height = `${3.5*newList[point]}px`;
        }
        for(let c = start ; c <= end ; ++c) {
            this.arr[c].setAttribute("class", "bar");
        }
    
}

async MergeSort(l,r){
    if(l<r){
        let mid = l + Math.floor((r - l)/2);
        await this.MergeSort(l,mid);
        await this.MergeSort(mid+1,r);
        await this.Merge(l,mid,r);
    }
}

async bubble(){
    for(let i=0;i<this.size-1;i++){
        for(let j=0;j<this.size-i-1;j++){
            let a = Number(this.arr[j].getAttribute("bar_height"));
            let b = Number(this.arr[j+1].getAttribute("bar_height"));
            await this.curr(j);
            await this.curr(j+1);
            await this.transitions();
            if(a>b){
                await this.swap(j,j+1);
            }
            await this.nocurr(j);
            await this.nocurr(j+1);    
        }
        this.arr[this.size - i - 1].setAttribute("class", "bar done");
    }
    this.arr[0].setAttribute("class", "bar done");
}

async insertion(){
    let i,key,j;
    for(i=1;i<this.size;i++){
        key = Number(this.arr[i].getAttribute("bar_height"));
        j=i-1;
       //await this.curr(i);
      // await this.nocurr(i);
        let temp = Number(this.arr[j].getAttribute("bar_height"));
        await this.transitions();
        while(j>=0&&temp>key){
            
            await this.curr(j);
            await this.curr(j+1);
            await this.transitions();
            this.arr[j+1].setAttribute("bar_height",String(temp));
            this.arr[j+1].style.height = `${3.8*temp}px`;
            //        this.swap(j+1,j);
            await this.nocurr(j+1);
            await this.nocurr(j);
            j--;
            if(j>=0)temp = Number(this.arr[j].getAttribute("bar_height"));
        }
        await this.curr(j+1);
        await this.transitions();
        this.arr[j+1].setAttribute("bar_height",String(key));
        this.arr[j+1].style.height = `${3.8*key}px`;
      //  await this.transitions();
        await this.nocurr(j+1);
    }
    for(let counter = 0 ; counter < this.size ; ++counter) {
        this.arr[counter].setAttribute("class", "bar done");
    }
}

async quick(){
    await this.QuickSort(0, this.size-1);
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.arr[counter].setAttribute("class", "bar done");
        }  
}

async partition(start,end){
    // for(let c = start ; c <= end ; ++c) {
    //     this.arr[c].setAttribute("class", "bar curr_bar");
    // }
    let pivot = Number(this.arr[end].getAttribute("bar_height"));
    let i = start-1;
    await this.small(end);
    for(let j=start;j<end;j++){
        let h1 = Number(this.arr[j].getAttribute("bar_height"));
        await this.curr(j);
       // let h2 = Number(this.arr[i].getAttribute("bar_height"));
       await this.transitions();
        if(h1<pivot){
            i++;
            await this.curr(i);
            await this.swap(i,j);
            await this.nocurr(i);
        }
        await this.nocurr(j);
    }

    await this.swap(i+1,end); 
    await this.nocurr(end);
    // for(let c = start ; c <= end ; ++c) {
    //     this.arr[c].setAttribute("class", "bar");
    // }

    return i+1;
}

async QuickSort(l,r){
    if(l<r){
        let piv = await this.partition(l,r);
        await this.QuickSort(l,piv-1);
        await this.QuickSort(piv+1,r);      
    }
}

};