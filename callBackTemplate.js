export default class {
    onSuccess = () => {}
    onFail = () => {}
    success (onSuccess) {
        if (onSuccess) {
            this.onSuccess = onSuccess
        }
        return this
    }
    fail (onFail) {
        if (onFail) {
            this.onFail = onFail
        }
        return this
    }
    complete (onComplete) {
        if (onComplete) {
            this.onComplete = onComplete
        }
        return this
    }
    /**
     * 
     * @param {number} t timeId 定时器ID
     */
    getCallbackObj (t) {
        return {
            success: res => {
                this.onSuccess && this.onSuccess(res)
                if (t) {
                    clearTimeout(t)
                }
            },
            complete: res => this.onComplete && this.onComplete(res),
            fail: err => this.onFail && this.onFail(err)
        }
    }
}