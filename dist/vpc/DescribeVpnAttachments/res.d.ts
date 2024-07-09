export interface DescribeVpnAttachmentsResponse {
    /**
     * 请求ID。
     * @example `9F0725BB-186A-3564-91C3-AAE48042F853`
     */
    RequestId: string;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 已绑定转发路由器实例的IPsec连接的信息列表。
     */
    VpnAttachments: {
        /**
         * IPsec连接ID。
         * @example `vco-p0w2jpkhi2eeop6q6****`
         */
        InstanceId: string;
        /**
         * IPsec连接的名称。
         * @example `nametest1`
         */
        Name: string;
        /**
         * IPsec连接的描述信息。
         * @example `desctest`
         */
        Description: string;
        /**
         * IPsec连接绑定的资源类型。仅取值：**CEN**，表示当前IPsec连接绑定了转发路由器实例。
         * @example `CEN`
         */
        AttachType: string;
        /**
         * IPsec连接绑定的转发路由器实例ID。
         * @example `tr-p0wkh4yryb1dnanqw****`
         */
        TransitRouterId: string;
        /**
         * 转发路由器实例的名称。
         * @example `nametest2`
         */
        TransitRouterName: string;
        /**
         * IPsec连接是否绑定了跨账号的转发路由器实例。
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        CrossAccountAuthorized: boolean;
    }[];
}
