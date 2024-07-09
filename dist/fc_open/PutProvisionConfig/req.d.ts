export interface PutProvisionConfigRequest {
    /**
     * 服务名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 服务别名或LATEST，不支持版本。
     * @example `prod`
     */
    "qualifier": string;
    /**
     * 函数名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 预留实例的配置。
     */
    "body"?: {
        /**
         * 预留的目标资源个数。取值范围为[0,10000]。
         * @example `1`
         */
        target: number;
        /**
         * 定时策略配置。
         */
        scheduledActions: any[];
        /**
         * 指标追踪伸缩策略配置。
         */
        targetTrackingPolicies: any[];
        /**
         * 是否始终分配CPU，默认为true。
         * @example `true`
         */
        alwaysAllocateCPU: boolean;
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID。
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
