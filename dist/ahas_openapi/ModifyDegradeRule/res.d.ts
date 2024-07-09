export interface ModifyDegradeRuleResponse {
    /**
     * 错误信息
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3FEEAD12-CE22-4EDE-A729-CE94EC070610`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 慢调用RT
         * @example `5000`
         */
        SlowRtMs: number;
        /**
         * 熔断恢复阶段数
         * @example `2`
         */
        HalfOpenRecoveryStepNum: number;
        /**
         * 命名空间
         * @example `default`
         */
        Namespace: string;
        /**
         * 统计窗口时长
         * @example `2000`
         */
        StatDurationMs: number;
        /**
         * 规则ID
         * @example `123`
         */
        RuleId: number;
        /**
         * 阈值类型
         * @example `0`
         */
        Strategy: number;
        /**
         * 资源名
         * @example `handleService`
         */
        Resource: string;
        /**
         * 应用名，若为EDAS应用，则AppName为EDAS中的App ID，可在EDAS控制台“应用管理>基本信息”中查看对应的ID。
         * @example `ahas-demo`
         */
        AppName: string;
        /**
         * 熔断恢复每步最小通过数目，默认值为5。
         * @example `3`
         */
        HalfOpenBaseAmountPerStep: number;
        /**
         * 熔断时长
         * @example `2000`
         */
        RecoveryTimeoutMs: number;
        /**
         * 触发熔断的最小请求数
         * @example `10`
         */
        MinRequestAmount: number;
        /**
         * 阈值
         * @example `0.5`
         */
        Threshold: number;
        /**
         * 是否开启
         * @example `true`
         */
        Enable: boolean;
    };
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
