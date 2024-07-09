export interface DescribeCenChildInstanceRouteEntriesRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 网络实例ID。
     * @example `vpc-bp18sth14qii3pnvo****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例的类型。取值：
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * - **ECR**：专线网关实例。
     * @example `VPC`
     */
    "ChildInstanceType": string;
    /**
     * 路由条目的状态。取值：
     * - **Active**：可用。
     * - **Candidate**：备份。
     * - **Rejected**：拒绝。
     * - **Prohibited**：禁止。
     * - **All**（默认值）：表示查询网络实例下所有状态的路由条目信息。
     * @example `Active`
     */
    "Status"?: string;
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值为**10**，取值范围：**1**~**500**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 网络实例所在的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "ChildInstanceRegionId"?: string;
    /**
     * 网络实例的路由表ID。
     * 在您查询VPC实例路由表下的路由条目信息时，如果您不指定路由表ID，系统默认查询VPC实例系统路由表下的路由条目信息。
     * @example `vtb-p0wxx3apzgn6uqp3r****`
     */
    "ChildInstanceRouteTableId"?: string;
}
