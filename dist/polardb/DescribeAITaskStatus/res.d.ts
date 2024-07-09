export interface DescribeAITaskStatusResponse {
    /**
     * 请求ID。
     * @example `9B7BFB11-C077-4FE3-B051-F69CEB******`
     */
    RequestId: string;
    /**
     * PolarDB for AI功能状态。取值：
     * - **1**：开启
     * - **2**：关闭
     * @example `1`
     */
    Status: string;
    /**
     * 集群ID。
     * @example `pc-xxxxxxxxxx`
     */
    DBClusterId: string;
    /**
     * PolarDB for AI功能状态描述。
     * @example `关闭状态`
     */
    StatusName: string;
}
