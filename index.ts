import InMemoryModel from "./models/model.inMemory";
import MuscleGroupModel from "./models/muscleGroup.model";
import { deepCopy } from "./utils/object.helper";

const eu = {nome:"carlos", job : {name:"dev"}};
const normalCopy = eu
const spreadCopy = {...eu}
const deep = deepCopy(eu); 
eu.nome = "carlos2"
eu.job.name = "developer"

console.log({eu, normalCopy, spreadCopy, deep}) 