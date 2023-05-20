export const state = {
  clickedOne: [],
  listenersClicks: [],

  getClicked() {
    return this.clickedOne;
  },

  setClicked(idComponente: number) {   

    if (this.clickedOne.length <= 1) {
      this.clickedOne.push(idComponente);

      for (const cb of this.listenersClicks) {
        cb();
      }
    }
  },

  subscribeClicked(callback: (any) => any) {
    this.listenersClicks.push(callback);
  },
};
