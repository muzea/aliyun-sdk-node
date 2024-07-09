export interface DescribeActiveOperationTaskTypeRequest {
    /**
     * 是否返回历史运维任务。取值：
     * - **0**（默认值）：仅返回当前待处理的运维任务。
     * - **1**：返回历史运维任务。
     * @example `0`
     */
    "IsHistory"?: number;
    /**
     * 资源组ID。您可以调用[DescribeSecurityGroupConfiguration](~~146130~~)接口查询。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
}
