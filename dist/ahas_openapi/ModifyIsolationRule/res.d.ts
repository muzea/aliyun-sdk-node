export interface ModifyIsolationRuleResponse {
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
         * 统计维度
         * @example `0`
         */
        RelationStrategy: number;
        /**
         * 资源名
         * @example `handleServiceA`
         */
        Resource: string;
        /**
         * 应用名，若为EDAS应用，则AppName为EDAS中的App ID。
         * @example `ahas-demo`
         */
        AppName: string;
        /**
         * 关联接口名、callstack入口名
         * @example `handleServiceB`
         */
        RefResource: string;
        /**
         * 命名空间
         * @example `default`
         */
        Namespace: string;
        /**
         * 来源应用
         * @example `default`
         */
        LimitOrigin: string;
        /**
         * 并发数阈值
         * @example `10`
         */
        Threshold: number;
        /**
         * 规则ID
         * @example `123`
         */
        RuleId: number;
        /**
         * 规则是否开启
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
