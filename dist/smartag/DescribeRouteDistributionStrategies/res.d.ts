export interface DescribeRouteDistributionStrategiesResponse {
    /**
     * 总共的路由条目数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 分页展示时，每个分页包含的列表条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `944C2533-1BB7-4578-B6EB-DA05BB61C02A`
     */
    RequestId: string;
    /**
     * 当前分页的页码数。
     * @example `1`
     */
    PageNumber: number;
    Strategies: {
        /**
         * 路由策略列表。
         */
        Strategy: {
            /**
             * 路由状态：
             * - **normal**：正常。
             * - **revoked**：已撤销。
             * @example `normal`
             */
            Status: string;
            /**
             * 路由发布状态：
             * - **publish**：已发布。
             * - **not_publish**：未发布。
             * @example `publish`
             */
            StrategyPublishStatus: string;
            /**
             * 路由发布策略：
             * - **publish**：发布。
             * - **no_publish**：不发布。
             * - **no_publish_and_publish_on_health_success**：不发布-健康检查成功时发布。
             * - **no_publish_and_publish_on_health_fail**：不发布-健康检查失败时发布。
             * - **publish_and_revoke_on_health_success**：发布-健康检查成功时撤销。
             * - **publish_and_revoke_on_health_fail**：发布-健康检查失败时撤销。
             * 更多详情请参见[关联健康检查](~~163971~~)和[路由发布](~~163973~~)。
             * @example `publish`
             */
            RouteDistribution: string;
            /**
             * 健康检查实例的创建时间戳，单位为毫秒。
             * @example `1622617250000`
             */
            CreateTime: number;
            /**
             * 智能接入网关实例ID。
             * @example `sag-erx3qta5xg5zyq****`
             */
            SmartAGId: string;
            /**
             * 路由类型：
             * - **cloud**：云上路由。
             * - **local**：线下路由。
             * @example `cloud`
             */
            SourceType: string;
            /**
             * 是否存在路由冲突：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            IsConflict: boolean;
            /**
             * 目标网段。
             * @example `192.168.3.0/24`
             */
            DestCidrBlock: string;
            /**
             * 路由冲突信息。
             * @example `"10.90.6.0/24":"vbr-wz900pom71qyr6x67qz65,vbr-wz9f8icxnlcom7riz0gfx"`
             */
            ConflictInfo: string;
            /**
             * 健康检查实例ID。
             * @example `hc-sztovuprqzgm50****`
             */
            HcInstanceId: string;
            /**
             * 路由来源：
             * - **云上路由**
             *     - **专有网络（VPC）实例ID**：通过VPC学来的路由。
             *     - **虚拟边界路由器（VBR）实例ID**：通过VBR学来的路由。
             *     - **智能接入网关（SAG）实例ID**：通过SAG学来的路由。
             * - **线下路由**
             *     - **STATIC**：通过管理控制台添加的静态路由。
             *     - **OSPF**：通过OSPF路由协议学习来的路由。
             *     - **BGP**：通过BGP路由协议学习来的路由。
             * @example `STATIC`
             */
            RouteSource: string;
        }[];
    };
}
