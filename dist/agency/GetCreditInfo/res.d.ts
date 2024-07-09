export interface GetCreditInfoResponse {
    /**
     * 结果代码:
     * - 200 OK
     * - 1109 系统错误
     * @example `200`
     */
    Code: string;
    /**
     * message信息
     * @example `成功`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后续 业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 子账号消费的信用额度，并且这些额度还没有偿付
         * @example `200`
         */
        OutstandingBalance: string;
        /**
         * 子账号信控额度
         * @example `1000`
         */
        CreditLine: string;
        /**
         * 子账号信控状态，取值范围:
         *  1. normal 正常
         * 2. arrearsNotShutdown 欠费未停机
         *  3. shutdown 停机
         * @example `normal`
         */
        AccountStatus: string;
        /**
         * 可用额度
         * @example `800`
         */
        AvailableCredit: string;
        /**
         * 百分比值，当可用额度降到信控额度的这个百分比
         * 之下的时候，就会触发给主账号邮件提醒。
         * @example `20`
         */
        AlarmThreshold: string;
        /**
         * 用来管理可用额度在0以及更少的时候，系统对资 源管控的策略。取值范围:
         * 1: delayStop 延迟停机, 阿里巴巴接管资源，延停 额度耗尽实例停机，再15天还未付费，则会释放 存储资源。
         * 2: noStop欠费不停机, 系统不会管理子账号的资 源生命周期。伙伴需要手工完成。
         *  3.immediatelyStop 立即停机，账号进入欠费状态 触发实例停机。
         * @example `delayStop`
         */
        ZeroCreditShutdownPolicy: string;
        /**
         * 用来管理客户的下单动作。
         * ban 禁止新购
         * cancelBan 正常状态
         * @example `ban`
         */
        newBuyStatus: string;
        /**
         * 获取模拟抵扣前虚账单未结清总额
         * @example `0.000000`
         */
        ConsumedUndeductedValue: string;
    };
    /**
     * request ID，阿里云会根据这个进行错误跟踪
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
