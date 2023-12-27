import { makeAutoObservable } from "mobx"


class AppStore {
  data: any = {}

  constructor() {
    makeAutoObservable(this)
  }

  setData = (data: any) => (this.data = data)
} 

export default new AppStore()