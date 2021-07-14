const groupByAgeRange = users.reduce((p, c) => {

    if(c.age >=10 && c.age <=19){
        if(p[1] === undefined){
            p[1] = [];
        }
        p[1].push(c);
    }else if(c.age >=20 && c.age <=29){
        if(p[2] === undefined){
            p[2] = [];
        }
        p[2].push(c);
    }else if(c.age >=30 && c.age <=39){
        if(p[3] === undefined){
            p[3] = [];
        }
        p[3].push(c);
    }else {
        if(p[4] === undefined){
            p[4] = [];
        }
        p[4].push(c);
    }
    return p

}, {});

console.log(groupByAgeRange);