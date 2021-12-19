var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function Who_Wins(is_there_kryptonite,enemies)
{
if (!is_there_kryptonite)
{
    return "Superman beats " + enemies + ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyname + " could possibly win this one.";
}
}

for (var i = 0 ; i < enemies.length ; i)
{
    var is_there_kryptonite
    if (i % 2 === 0) {
        is_there_kryptonite = true;
    } else {
        is_there_kryptonite = false;
    }
    console.log(Who_Wins(is_there_kryptonite,enemies[i]));
}