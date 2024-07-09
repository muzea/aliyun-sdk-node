export interface ListProvisionConfigsResponse {
    /**
     * 下次查询的起始Token。
     * @example `demoNextToken`
     */
    nextToken: string;
    /**
     * 预留实例列表。
     */
    provisionConfigs: {
        /**
         * 资源描述。
         * @example `12345#servierName#qualifier#functionName`
         */
        resource: string;
        /**
         * 目标资源个数。
         * @example `5`
         */
        target: number;
        /**
         * 实际资源个数。
         * @example `5`
         */
        current: number;
        /**
         * 定时策略配置。
         */
        scheduledActions: any[];
        /**
         * 指标追踪伸缩策略配置。
         */
        targetTrackingPolicies: any[];
        /**
         * 预留实例创建失败时的错误信息。
         * @example `image not found`
         */
        currentError: string;
        /**
         * 是否始终分配CPU给函数实例。
         * @example `true`
         */
        alwaysAllocateCPU: boolean;
    }[];
}
