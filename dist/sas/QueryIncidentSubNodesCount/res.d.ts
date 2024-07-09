export interface QueryIncidentSubNodesCountResponse {
    /**
     * 本次调用返回的子节点数目实例。
     */
    SubNodesCount: any;
    /**
     * 本地调用请求是否成功。取值：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F****`
     */
    RequestId: string;
}
