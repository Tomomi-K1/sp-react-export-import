const choice = (items) => {
    return items[Math.floor(Math.random()*items.length)]
}

const remove = (items,item) => {
    if(items.includes(item)){
        let idx = items.indexOf(item);
        return [...items.slice(0,idx), ...items.slice(idx+1)]
    }else{
        return undefined;
    }

}

export {choice, remove}