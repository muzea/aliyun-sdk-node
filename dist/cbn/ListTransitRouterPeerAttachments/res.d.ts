export interface ListTransitRouterPeerAttachmentsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `dd20****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `AA97AFA3-8E48-4BD7-9F3E-A9F6176018A0`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 跨地域连接信息列表。
     */
    TransitRouterAttachments: {
        /**
         * 跨地域连接的创建时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mmZ`。
         * @example `2021-06-16T02:50Z`
         */
        CreationTime: string;
        /**
         * 跨地域连接的状态。
         * - **Attached**：已加载。
         * - **Attaching**：加载中。
         * - **Detaching**：卸载中。
         * - **Detached**：已卸载。
         * @example `Attached`
         */
        Status: string;
        /**
         * 跨地域连接ID。
         * @example `tr-attach-5u4qbayfv2io5v****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 带宽的分配方式。取值：
         * - **BandwidthPackage**：从带宽包中分配带宽。
         * - **DataTransfer**：不为跨地域连接分配带宽，按使用流量计费。
         * @example `BandwidthPackage`
         */
        BandwidthType: string;
        /**
         * 跨地域连接绑定的带宽包ID。
         * @example `cenbwp-3xrxupouolw5ou****`
         */
        CenBandwidthPackageId: string;
        /**
         * 跨地域连接的描述信息。
         * @example `testdesc`
         */
        TransitRouterAttachmentDescription: string;
        /**
         * 企业版转发路由器所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 对端转发路由器实例ID。
         * @example `tr-m5eq27g6bndum7e88****`
         */
        PeerTransitRouterId: string;
        /**
         * 企业版转发路由器实例ID。
         * @example `tr-bp1su1ytdxtataupl****`
         */
        TransitRouterId: string;
        /**
         * 对端转发路由器实例所属地域ID。
         * @example `cn-qingdao`
         */
        PeerTransitRouterRegionId: string;
        /**
         * 连接所关联的资源类型。
         * - **VPC**：专有网络实例。
         * - **CCN**：云连接网实例。
         * - **VBR**：边界路由器实例。
         * - **TR**：转发路由器实例。
         * @example `TR`
         */
        ResourceType: string;
        /**
         * 跨地域连接的带宽值。单位：Mbps。
         * - 当**BandwidthType**取值为**BandwidthPackage**时，该参数表示跨地域连接可使用的带宽值。
         * - 当**BandwidthType**取值为**DataTransfer**时，该参数表示跨地域连接的限速带宽值。
         * @example `2`
         */
        Bandwidth: number;
        /**
         * 带宽包的互通区域。
         * @example `china_china`
         */
        GeographicSpanId: string;
        /**
         * 对端转发路由器实例所属账号ID。
         * @example `253460731706911258`
         */
        PeerTransitRouterOwnerId: number;
        /**
         * 企业版转发路由器实例是否自动发布跨地域连接的路由到对端地域。
         * - **false**（默认值）：否。
         * - **true**：是。
         * @example `false`
         */
        AutoPublishRouteEnabled: boolean;
        /**
         * 跨地域连接的名称。
         * @example `test`
         */
        TransitRouterAttachmentName: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `tag_A1`
             */
            Key: string;
            /**
             * 标签值。
             * @example `test`
             */
            Value: string;
        }[];
        /**
         * 云企业网实例ID。
         * @example `cen-j3jzhw1zpau2km****
        `
         */
        CenId: string;
        /**
         * 默认链路类型。
         * - **Gold**（默认值）：金。
         * - **Platinum**：铂金。
         * @example `Gold`
         */
        DefaultLinkType: string;
    }[];
}
