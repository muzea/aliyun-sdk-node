export interface ListTransitRouterPrefixListAssociationRequest {
    /**
     * 转发路由器实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 转发路由器实例ID。
     * @example `tr-6ehx7q2jze8ch5ji0****`
     */
    "TransitRouterId": string;
    /**
     * 转发路由器路由表ID。
     * @example `vtb-6ehgc262hr170qgyc****`
     */
    "TransitRouterTableId"?: string;
    /**
     * 前缀列表ID。
     * @example `pl-6ehtn5kqxgeyy08fi****`
     */
    "PrefixListId"?: string;
    /**
     * 前缀列表所属的阿里云账号（主账号）ID。
     * @example `1210123456123456`
     */
    "OwnerUid"?: number;
    /**
     * 待查询的列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。最大值：**100**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 下一跳连接ID。
     * > 如果您需要查询生成黑洞路由的前缀列表的信息，本参数需输入**BlackHole**。
     * @example `tr-attach-flbq507rg2ckrj****`
     */
    "NextHop"?: string;
    /**
     * 下一跳类型。取值：
     * - **BlackHole**：表示查询生成黑洞路由的前缀列表的信息。
     * - **VPC**：表示查询下一跳为专有网络VPC（Virtual Private Cloud）连接的前缀列表的信息。
     * - **VBR**：表示查询下一跳为边界路由器VBR（Virtual Border Router）连接的前缀列表的信息。
     * - **TR**：表示查询下一跳为跨地域连接的前缀列表的信息。
     * @example `VPC`
     */
    "NextHopType"?: string;
    /**
     * 下一跳连接关联的网络实例ID。
     * @example `vpc-6eh7fp9hdqa2wv85t****`
     */
    "NextHopInstanceId"?: string;
    /**
     * 前缀列表的状态。
     * - **Active**：已生效。
     * - **Updating**：更新中。
     * @example `Active`
     */
    "Status"?: string;
}
