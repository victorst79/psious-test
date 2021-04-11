export default function exportAction(allFiles) {
    let result = [];
    Object.keys(allFiles).forEach((key, index)=> {            
        result.push(allFiles[key].x + allFiles[key].width)
    });
    return Number(Math.max(...result) / 60).toFixed(2)
}