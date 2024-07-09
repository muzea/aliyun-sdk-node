export interface ListTransitRoutersResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `68521297-5FA6-46CB-B4EB-658F1C68C8CC`
     */
    RequestId: string;
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
     * 转发路由器实例信息列表。
     */
    TransitRouters: {
        /**
         * 转发路由器实例的创建时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mmZ`。
         * @example `2021-03-15T09:39Z`
         */
        CreationTime: string;
        /**
         * 转发路由器实例的类型。
         * - **Enterprise**：企业版。
         * - **Basic**：基础版。
         * @example `Enterprise`
         */
        Type: string;
        /**
         * 转发路由器实例的状态。
         * - **Creating**：创建中。
         * - **Active**：可用。
         * - **Modifying**：修改中。
         * -  **Deleting**：删除中。
         * -  **Upgrading**：升级中。
         * @example `Active`
         */
        Status: string;
        /**
         * 转发路由器实例ID。
         * @example `tr-bp1su1ytdxtataupl****`
         */
        TransitRouterId: string;
        /**
         * 转发路由器实例的描述信息。
         * @example `testdesc`
         */
        TransitRouterDescription: string;
        /**
         * 转发路由器实例的名称。
         * @example `testname`
         */
        TransitRouterName: string;
        /**
         * 云企业网实例ID。
         * @example `cen-j3jzhw1zpau2km****`
         */
        CenId: string;
        /**
         * 云企业网实例所属阿里云账号（主账号）ID。
         * @example `1210123456123456`
         */
        AliUid: number;
        /**
         * 转发路由器实例所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 转发路由器实例是否开启了组播功能。
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `false`
         */
        SupportMulticast: boolean;
        /**
         * 转发路由器地址段列表。
         */
        TransitRouterCidrList: {
            /**
             * 转发路由器地址段。
             * @example `192.168.1.0/24`
             */
            Cidr: string;
            /**
             * 转发路由器地址段的名称。
             * @example `CIDRname`
             */
            Name: string;
            /**
             * 转发路由器地址段的描述信息。
             * @example `CIDRdesc`
             */
            Description: string;
            /**
             * 转发路由器地址段ID。
             * @example `cidr-46p5ceg21e8152****`
             */
            TransitRouterCidrId: string;
            /**
             * 是否允许系统自动在转发路由器路由表中添加转发路由器地址段的路由。
             * - **true**：允许。
             *      如果当前参数返回值为**true**，则在您创建了私网网关类型的VPN连接，并为私网网关类型的VPN连接创建了路由学习关系后，系统自动在与VPN连接建立路由学习关系的转发路由器路由表中添加一条路由条目：
             *   目标网段为转发路由器地址段的黑洞路由，其中转发路由器地址段指已为IPsec连接分配网关IP地址的地址段。
             *
             *   该黑洞路由仅会被传播至转发路由器下VBR实例的路由表中。
             * - **false**：不允许。
             * @example `true`
             */
            PublishCidrRoute: boolean;
        }[];
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `TagKey`
             */
            Key: string;
            /**
             * 标签值。
             * @example `TagValue`
             */
            Value: string;
        }[];
    }[];
}
