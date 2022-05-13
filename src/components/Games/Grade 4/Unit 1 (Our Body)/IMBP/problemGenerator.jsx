const generateOptions = () => {
    const options = ['Brain', 'Nose', 'Respiratory', 'Neck', 'Lungs', 'Liver', 'Stomach', 'Hand', 'Intestines']
    return options.sort(() => Math.random() > 0.5)
}
const positons = ['brain', 'nose', 'respiratory', 'neck', 'lungs', 'liver', 'stomach', 'hand', 'intestines']

export default {
    positons,
    generateOptions
}