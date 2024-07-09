export interface VerifyCheckInstanceResultResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 云产品配置检测任务操作码。取值：
         * - **Throttling**：频率限制
         * - **ActionTrialUnauthorized**：未授权错误
         * @example `ActionTrialUnauthorized`
         */
        OperateCode: string;
        /**
         * 检查失败的实例列表。
         */
        FailInstances: string[];
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B869E3A0-1147-539D-9920-47580700****`
     */
    RequestId: string;
}
