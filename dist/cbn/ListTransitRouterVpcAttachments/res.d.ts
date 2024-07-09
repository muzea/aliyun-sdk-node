export interface ListTransitRouterVpcAttachmentsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `C97FF53F-3EF8-4883-B459-60E171924B23`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * VPC连接信息列表。
     */
    TransitRouterAttachments: {
        /**
         * VPC连接的创建时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
         * @example `2021-06-15T02:14Z`
         */
        CreationTime: string;
        /**
         * VPC连接的状态。
         * - **Attached**：已加载。
         * - **Attaching**：加载中。
         * - **Detaching**：卸载中。
         * @example `Attached`
         */
        Status: string;
        /**
         * VPC实例ID。
         * @example `vpc-bp1h8vbrbcgohcju5****`
         */
        VpcId: string;
        /**
         * VPC连接ID。
         * @example `tr-attach-nls9fzkfat8934****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 企业版转发路由器实例ID。
         * @example `tr-bp1su1ytdxtataupl****`
         */
        TransitRouterId: string;
        /**
         * 连接所属的资源类型。
         * 仅取值：**VPC**，表示专有网络实例。
         * @example `VPC`
         */
        ResourceType: string;
        /**
         * VPC连接的描述信息。
         * @example `testdesc`
         */
        TransitRouterAttachmentDescription: string;
        /**
         * VPC实例所属账号ID。
         * @example `1250123456123456`
         */
        VpcOwnerId: number;
        /**
         * VPC实例所属地域ID。
         * @example `cn-hangzhou`
         */
        VpcRegionId: string;
        /**
         * VPC连接的名称。
         * @example `testname`
         */
        TransitRouterAttachmentName: string;
        /**
         * VPC连接的可用区信息及其关联的VPC实例的交换机和弹性网卡的信息。
         */
        ZoneMappings: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 交换机ID。
             * @example `vsw-bp1a214sbus8z3b54****`
             */
            VSwitchId: string;
            /**
             * 企业版转发路由器在交换机中创建的弹性网卡的ID。
             * @example `eni-bp149hmyaqegerml****`
             */
            NetworkInterfaceId: string;
        }[];
        /**
         * 企业版转发路由器是否自动发布路由到VPC实例。
         * - **false**：否。
         * - **true**：是。
         * @example `true`
         */
        AutoPublishRouteEnabled: boolean;
        /**
         * VPC连接的付费类型。
         * 仅取值：**POSTPAY**，表示按使用量后付费。
         * @example `POSTPAY`
         */
        ChargeType: string;
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `test`
             */
            Key: string;
            /**
             * 标签值。
             * @example `test`
             */
            Value: string;
        }[];
        /**
         * 网络实例的付费方。取值：
         * - **PayByCenOwner**：表示网络实例产生的费用由云企业网实例所属的账号承担。
         * - **PayByResourceOwner**：表示网络实例产生的费用由网络实例所属的账号承担。
         * @example `PayByCenOwner`
         */
        OrderType: string;
        /**
         * 云企业网实例ID。
         * @example `cen-j3jzhw1zpau2km****
        `
         */
        CenId: string;
    }[];
}
