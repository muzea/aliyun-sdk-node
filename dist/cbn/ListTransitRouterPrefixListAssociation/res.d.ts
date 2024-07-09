export interface ListTransitRouterPrefixListAssociationResponse {
    /**
     * 请求ID。
     * @example `6005CA94-676E-1FEE-985E-7602EFAADD6A`
     */
    RequestId: string;
    /**
     * 符合查询条件的列表总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询的列表页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 前缀列表的信息。
     */
    PrefixLists: {
        /**
         * 前缀列表ID。
         * @example `pl-6ehtn5kqxgeyy08fi****`
         */
        PrefixListId: string;
        /**
         * 前缀列表所属的阿里云账号（主账号）ID。
         * @example `1210123456123456`
         */
        OwnerUid: number;
        /**
         * 前缀列表的状态。
         * - **Active**：已生效。
         * - **Updating**：更新中。
         * @example `Active`
         */
        Status: string;
        /**
         * 下一跳连接ID。
         * > 如果返回值为**BlackHole**，则表示前缀列表下的所有网段均为黑洞路由，所有去往前缀列表下网段的流量均会被丢弃。
         * @example `tr-attach-flbq507rg2ckrj****`
         */
        NextHop: string;
        /**
         * 下一跳连接关联的网络实例ID。
         * @example `vpc-6eh7fp9hdqa2wv85t****`
         */
        NextHopInstanceId: string;
        /**
         * 下一跳类型。
         * - **BlackHole**：表示前缀列表下的网段均为黑洞路由，所有去往前缀列表下网段的流量均会被丢弃。
         * - **VPC**：表示前缀列表下网段的下一跳为专有网络VPC（Virtual Private Cloud）连接。
         * - **VBR**：表示前缀列表下网段的下一跳为边界路由器VBR（Virtual Border Router）连接。
         * - **TR**：表示前缀列表下网段的下一跳为跨地域连接。
         * @example `VPC`
         */
        NextHopType: string;
        /**
         * 转发路由器路由表ID。
         * @example `vtb-6ehgc262hr170qgyc****`
         */
        TransitRouterTableId: string;
        /**
         * 转发路由器实例ID。
         * @example `tr-6ehx7q2jze8ch5ji0****`
         */
        TransitRouterId: string;
    }[];
}
