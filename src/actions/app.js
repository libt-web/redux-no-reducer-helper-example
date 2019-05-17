import { getCountService } from '../services/appService';


export function addCount() {
    this.update('count', old => old + 1).commit();
}

function setExampleLoading({ set, update, inject }, isLoading) {
    set('example/prefix', 'the count from server is ').update('example/loading', old => !old);
}

export async function getCountFromServer() {
    this.fork(setExampleLoading, true).commit();
    const serverCount = await getCountService();
    this.inject({
        'example/loading': old => !old,
        'count': serverCount,
    }).commit();
}

export function resetCount() {
    const oldCount = this.getState(state => state.app.count);
    alert(`old count is ${oldCount}`);
    this.set('count', 0).commit();
}

export function resetCountAndLoadServer() {
    this.call(resetCount);
    alert('Continue to get count from server');
    this.call(getCountFromServer);
}