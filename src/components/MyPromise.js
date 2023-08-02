
const PROMISE_STATE={
    PENDING:0,
    FULLFILLED:1,
    REJECTED:2
}
class MyPromise{
    #result
    
    #callbacks=[]
    #state=PROMISE_STATE.PENDING

    constructor(executor){
        executor(this.#resolve.bind(this),this.#reject.bind(this))
    }

    #resolve(value){
        if(this.#state!==PROMISE_STATE.PENDING)return
        this.#result=value
        this.#state=PROMISE_STATE.FULLFILLED
        queueMicrotask(()=>{
            this.#callbacks.forEach(cb=>{
                cb()
            })
        })
    }

    #reject(reason){

    }
    then(onFullfilled,onRejected){
        return new MyPromise((resolve,reject)=>{
            if(this.#state===PROMISE_STATE.PENDING){
                this.#callbacks.push(()=>{
                    resolve(onFullfilled(this.#result))
                })
            }else if(this.#state===PROMISE_STATE.FULLFILLED){
                queueMicrotask(()=>{
                    resolve(onFullfilled(this.#result))
                })
            }
        })
    }
}

new MyPromise((resolve,reject)=>{
    setTimeout(() => {
        resolve(999)
    }, 1000);
}).then(r=>{
    return r+10
}).then(r=>{
    console.log(r);
})