// import listReactFiles from 'list-react-files'

import getURLParams from "./getURLParams";
import objectsJSON from './Objects.json';
const images = require.context('../../assets/objects', true);
const objectList = importAll(require.context('../../assets/objects', false, /\.(png|jpe?g|svg|gif)$/));
const backgroundList = importAll(require.context('../../assets/backgrounds', false, /\.(png|jpe?g|svg|gif)$/));
const backgroundMusicList = importAll(require.context('../../assets/backgroundSounds', false, /\.(mp3)$/));
const soundEffectsEnglish = importAll(require.context('../../assets/soundEffects/english', false, /\.(mp3|wav)$/));
const soundEffectsUrdu = importAll(require.context('../../assets/soundEffects/urdu', false, /\.(mp3|wav)$/));

const writeJSON = () => {
    let objects = [];
    objects = objectList.map((item, idx) => {

    })
}

const generateRandom = (min, max) => {
    const index = (Math.random() * (max - min) + min)
    return parseInt(index)
}

const fetchRelevantObject = (background, objectList) => {
    // const objects = objectList[generateRandom(0, objectList.length - 1)]
    const backgroundIndex = parseInt(background.split('/')[3].split('.')[0])
    let releventObjects = []
    objectList.map((item, index) => {
        item.split('/')[3].split('_')[0].split('.').map((itm, idx) => {
            if (backgroundIndex == parseInt(itm)) {
                releventObjects.push(item)
            }
        })
    })
    return releventObjects
}
const getRandomTheme = () => {
    console.log()
    const background = backgroundList[generateRandom(0, backgroundList.length)]
    const objects = fetchRelevantObject(background, objectList)
    const backgroundMusic = backgroundMusicList[generateRandom(0, backgroundMusicList.length)]
    const soundEffect = getSoundEffects()
    return { background, objects, backgroundMusic, soundEffect }
}
const getSoundEffects = () => {
    const lang = getURLParams.lang
    if (lang == 'u') {
        return soundEffectsUrdu
    }
    return soundEffectsEnglish
}
const getObjectByProperty = (property) => {

    let personalization = true
    if (property.includes('|n')) {
        personalization = false
    }
    const properties = property.replace("|n", "").split("|")

    var objects = objectsJSON.objects
    properties.map(prop => {
        objects = objects.filter(item => {
            const splitItem = item.properties.split('|')
            if (splitItem.indexOf(prop) >= 0) return true
            return false
        })
    })
    // console.log(properties,personalization)
    if (personalization) {
        const filteredObjects = objects.filter(item => {
            if (item.properties.split("|").indexOf(getURLParams.gender == 'm' ? 'male' : 'female') >= 0) {
                return true
            }
            return false
        })
        if (filteredObjects.length > 0) {
            return images('./' + filteredObjects[parseInt(Math.random() * filteredObjects.length)].name)
        }
    }
    return images('./' + objects[parseInt(Math.random() * objects.length)].name)
}
const getObjectListByProperty = (property) => {
    var objects = objectsJSON.objects
    const properties = property.replace("|n", "").split("|")

    var objects = objectsJSON.objects
    properties.map(prop => {
        objects = objects.filter(item => {
            const splitItem = item.properties.split('|')
            if (splitItem.indexOf(prop) >= 0) return true
            return false
        })
    })
    console.log(objects)
    return objects
}
//https://translate.google.com.vn/translate_tts?ie=UTF-8&client=tw-ob&q=Bye%20Learner&ie=UTF-8&tl=en-US&total=1&idx=0&textlen=5&prev=input
function importAll(r) {
    return r.keys().map(r);
}
export default {
    getRandomTheme,
    getObjectByProperty,
    getObjectListByProperty
}