export interface VerifyCheckResultResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7C0A3FA0-AA32-5660-8989-85A5582F****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 云产品配置检测任务操作码。取值：
         * - **Throttling**：频率限制
         * - **ActionTrialUnauthorized**：未授权错误
         * @example `Throttling`
         */
        OperateCode: string;
    };
}
