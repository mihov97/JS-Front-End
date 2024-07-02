function solve(input){
    
    let characters = []
 
    inputLines = input[0]
    restOfAllCounter = 1
 
    while(restOfAllCounter <= inputLines){
        const [name, health, bullets] = input[restOfAllCounter].split(' ');
        characters.push({name: name, health: Number(health), bullets: Number(bullets)});
        restOfAllCounter += 1
    }
 
    
    function returningPerson(name){
        return characters.find(heroName => heroName.name === name)
    }
 
    
    while(input[restOfAllCounter] !== 'Ride Off Into Sunset'){
        
        
        const [command, name, firstArg, secondArg] = input[restOfAllCounter].split(' - ')
 
        if(command === 'FireShot'){
            let person = returningPerson(name)
            
            if(person.bullets > 0){
                console.log(`${name} has successfully hit ${firstArg} and now has ${person.bullets - 1} bullets!`);
                person.bullets -= 1
            
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${firstArg}!`);
            }
        
        } else if (command === 'TakeHit'){
            
           
            let person = returningPerson(name)
            person.health -= Number(firstArg)
            
            let personName = `${person.name}`
            
           
            if(person.health > 0){
                console.log(`${name} took a hit for ${firstArg} HP from ${secondArg} and now has ${person.health} HP!`);
           
            } else {
                console.log(`${name} was gunned down by ${secondArg}!`);
                characters = characters.filter(person => person.name != personName);
            }
       
        
        } else if (command === 'Reload'){
            let person = returningPerson(name)
            
            if (person.bullets < 6){
                console.log(`${name} reloaded ${6 - person.bullets} bullets!`);
            
            person.bullets = 6
            
        } else if (person.bullets == 6){
                console.log(`${name}'s pistol is fully loaded!`);
            }
       
        } else if (command ==='PatchUp'){
            let person = returningPerson(name)
            
            
            if (person.health + Number(firstArg) > 100){
                console.log(`${name} patched up and recovered ${100 - person.health} HP!`);
                person.health = 100
            
            
            } else if (person.health + Number(firstArg) <= 100) {
                console.log(`${name} patched up and recovered ${firstArg} HP!`);
                
                person.health += Number(firstArg)
           
            } else {
                console.log(`${name} is in full health!`);
            }
        }
        
        restOfAllCounter += 1
    }
    
    for(let charecter of characters){
        console.log(`${charecter.name}\n HP: ${charecter.health}\n Bullets: ${charecter.bullets}`);
    }
} 

