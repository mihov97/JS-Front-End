function solve(input) {
    const heroesArray = [];

    for (const row of input) {
        const [name, level, items] = row.split (' / ');
        const hero = {
            name,
            level: Number(level),
            items
        };

        heroesArray.push(hero);
    }

    heroesArray.sort((a, b) => a.level - b.level);
    
    for (const hero of heroesArray) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

