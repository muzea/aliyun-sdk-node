export interface ListTransitRouterVbrAttachmentsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `dd20****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `F42D9616-29EB-4E75-8CA8-9654D4E07501`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时，每次显示的最大条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * VBR连接信息列表。
     */
    TransitRouterAttachments: {
        /**
         * VBR连接的创建时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
         * @example `2021-06-15T15:20Z`
         */
        CreationTime: string;
        /**
         * VBR连接的状态。
         * - **Attached**：已加载。
         * - **Attaching**：加载中。
         * - **Detaching**：卸载中。
         * @example `Attached`
         */
        Status: string;
        /**
         * VBR连接ID。
         * @example `tr-attach-oyf70wfuorwx87****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 企业版转发路由器实例ID。
         * @example `tr-bp1su1ytdxtataupl****`
         */
        TransitRouterId: string;
        /**
         * 连接所属的资源类型。
         * 仅取值：**VBR**，表示边界路由器实例。
         * @example `VBR`
         */
        ResourceType: string;
        /**
         * VBR实例所属地域ID。
         * @example `cn-hangzhou`
         */
        VbrRegionId: string;
        /**
         * VBR连接的描述信息。
         * @example `testdesc`
         */
        TransitRouterAttachmentDescription: string;
        /**
         * VBR实例所属账号ID。
         * @example `1688111111111111`
         */
        VbrOwnerId: number;
        /**
         * 企业版转发路由器是否自动发布路由到VBR实例。
         * - **false**：否。
         * - **true**：是。
         * @example `false`
         */
        AutoPublishRouteEnabled: boolean;
        /**
         * VBR实例ID。
         * @example `vbr-bp1svadp4lq38janc****`
         */
        VbrId: string;
        /**
         * VBR连接的名称。
         * @example `testa`
         */
        TransitRouterAttachmentName: string;
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
             * 标签值。
             * @example `value_A1`
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
         * 网络实例的付费方。取值：
         * - **PayByCenOwner**：表示VBR实例的连接费和流量处理费由转发路由器实例所属的账号承担。
         * - **PayByResourceOwner**：表示VBR实例的连接费和流量处理费由VBR实例所属的账号承担。
         * @example `PayByCenOwner`
         */
        OrderType: string;
    }[];
}
