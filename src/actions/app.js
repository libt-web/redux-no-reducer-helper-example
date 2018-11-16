import { getCountService } from '../services/appService';


export function addCount() {
    this.update('count', old => old + 1);
    this.commit();
}

export async function getCountFromServer() {
    this.set('example/loading', true);
    this.commit();
    const serverCount = await getCountService();
    this.set('example/loading', false);
    this.set('count', serverCount);
    this.commit();
}

export function resetCount() {
    const oldCount = this.getState(state => state.app.count);
    alert(`old count is ${oldCount}`);
    this.set('count', 0);
    this.commit();
}

export function resetCountAndLoadServer() {
    this.call(resetCount);
    alert('Continue to get count from server');
    this.call(getCountFromServer);
}