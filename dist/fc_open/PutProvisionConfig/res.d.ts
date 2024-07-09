export interface PutProvisionConfigResponse {
    /**
     * 资源描述。
     * @example `"12345#servierName#qualifier#functionName"`
     */
    resource: string;
    /**
     * 目标资源个数。
     * @example `5`
     */
    target: number;
    /**
     * 实际资源个数。
     * @example `1`
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
     * 是否始终分配CPU给函数实例。
     * @example `true`
     */
    alwaysAllocateCPU: boolean;
}
