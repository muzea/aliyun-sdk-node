export interface DescribeCenRegionDomainRouteEntriesRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6j****`
     */
    "CenId": string;
    /**
     * 地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "CenRegionId": string;
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
     * 路由条目的状态。取值：
     * - **Active**（默认值）：可用。
     * - **Candidate**：备份。
     * - **Rejected**：拒绝。
     * - **Prohibited**：禁用。
     * - **All**：表示查询当前地域下所有状态的路由条目信息。
     * @example `Active`
     */
    "Status"?: string;
}
