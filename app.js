const helperCaveConfig = { serverId: 5899, active: true };

const helperCaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5899() {
    return helperCaveConfig.active ? "OK" : "ERR";
}

console.log("Module helperCave loaded successfully.");