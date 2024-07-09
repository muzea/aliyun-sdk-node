export interface DescribeDBResourceManagementModeResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 资源管理模式。取值：
     * - resourceGroup：资源组
     * - resourceQueue：资源队列
     * @example `resourceGroup`
     */
    ResourceManagementMode: string;
}
