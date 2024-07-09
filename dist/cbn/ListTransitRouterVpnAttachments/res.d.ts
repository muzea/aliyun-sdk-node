export interface ListTransitRouterVpnAttachmentsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `3D5530D2-3BBB-524E-8E98-59AB06A250E4`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * VPN连接信息列表。
     */
    TransitRouterAttachments: {
        /**
         * 创建VPN连接的时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
         * @example `2022-07-08T08:45Z`
         */
        CreationTime: string;
        /**
         * VPN连接的状态。
         * - **Attached**：已加载。
         * - **Attaching**：加载中。
         * - **Detaching**：卸载中。
         * @example `Attached`
         */
        Status: string;
        /**
         * VPN连接ID。
         * @example `tr-attach-a6p8voaodog5c0****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 转发路由器实例ID。
         * @example `tr-p0wm740vjnbaprv0m****`
         */
        TransitRouterId: string;
        /**
         * VPN连接所属的资源类型。
         * 仅取值：**VPN**，表示转发路由器连接了IPsec连接。
         * @example `VPN`
         */
        ResourceType: string;
        /**
         * IPsec连接所属的阿里云账号（主账号）ID。
         * @example `1210123456123456`
         */
        VpnOwnerId: number;
        /**
         * IPsec连接ID。
         * @example `vco-p0wtu1xgd0l7fjo7k****`
         */
        VpnId: string;
        /**
         * VPN连接的描述信息。
         * @example `desctest`
         */
        TransitRouterAttachmentDescription: string;
        /**
         * IPsec连接所属的地域ID。
         * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
         * @example `cn-hangzhou`
         */
        VpnRegionId: string;
        /**
         * 是否允许转发路由器实例自动向IPsec连接发布路由条目。取值：
         * - **true**：允许。
         * - **false**：不允许。
         * @example `true`
         */
        AutoPublishRouteEnabled: boolean;
        /**
         * VPN连接的名称。
         * @example `nametest`
         */
        TransitRouterAttachmentName: string;
        /**
         * 部署VPN连接的可用区列表。
         */
        Zones: {
            /**
             * 可用区ID。
             * 您可以通过调用[DescribeZones](~~36064~~)接口查询可用区ID对应的可用区的信息。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
        }[];
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `test`
             */
            Key: string;
            /**
             * 标签的值。
             * @example `value_A1`
             */
            Value: string;
        }[];
        /**
         * VPN连接的付费类型。
         * 仅取值：POSTPAY，表示按使用量后付费。
         * @example `POSTPAY`
         */
        ChargeType: string;
        /**
         * 云企业网实例ID。
         * @example `cen-j3jzhw1zpau2km****
        `
         */
        CenId: string;
        /**
         * 网络实例的付费方。取值：
         * - **PayByCenOwner**：表示网络实例产生的费用由云企业网实例所属的账号承担。
         * - **PayByResourceOwner**：表示网络实例产生的费用由网络实例所属的账号承担。
         * @example `PayByCenOwner`
         */
        OrderType: string;
    }[];
}
