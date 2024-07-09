export interface ListTransitRouterEcrAttachmentsResponse {
    /**
     * 分批次查询时，下一次查询的Token。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `461EC1B5-04A8-4706-8764-8F5BCEF48A6F`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * ECR实例连接信息列表。
     */
    TransitRouterAttachments: {
        /**
         * ECR实例连接的创建时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
         * @example `2021-06-15T02:14Z`
         */
        CreationTime: string;
        /**
         * ECR连接的状态。
         * - **Attached**：已加载。
         * - **Attaching**：加载中。
         * - **Detaching**：卸载中。
         * @example `Attached`
         */
        Status: string;
        /**
         * ECR实例连接ID。
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
         * 仅取值：**ECR**，表示专线网关实例。
         * @example `ECR`
         */
        ResourceType: string;
        /**
         * 转发路由器所属的地域ID。
         * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID代表的地域信息。
         * @example `cn-shanghai`
         */
        TransitRouterRegionId: string;
        /**
         * ECR连接的描述信息。
         * @example `desctest`
         */
        TransitRouterAttachmentDescription: string;
        /**
         * ECR实例所属阿里云账号（主账号）ID。
         * @example `1210123456123456`
         */
        EcrOwnerId: number;
        /**
         * 企业版转发路由器是否自动发布路由到ECR实例。
         * 仅取值： **true**，表示自动发布路由。
         * @example `true`
         */
        AutoPublishRouteEnabled: boolean;
        /**
         * 关联的专线网关实例ID。
         * @example `ecr-n78omt2qsko06y****`
         */
        EcrId: string;
        /**
         * ECR连接的名称。
         * @example `testname`
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
         * 网络实例的付费方。取值：
         * - **PayByCenOwner**：表示ECR实例的连接费和流量处理费由转发路由器实例所属的账号承担。
         * - **PayByResourceOwner**：表示ECR实例的连接费和流量处理费由ECR实例所属的账号承担。
         * @example `PayByCenOwner`
         */
        OrderType: string;
    }[];
}
