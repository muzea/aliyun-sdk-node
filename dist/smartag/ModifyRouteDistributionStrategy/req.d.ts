export interface ModifyRouteDistributionStrategyRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-erx3qta5xg5zyq****`
     */
    "SmartAGId": string;
    /**
     * 健康检查实例ID。
     * @example `hc-sztovuprqzgm50****`
     */
    "HcInstanceId"?: string;
    /**
     * 路由来源类型：
     * - **cloud**：云上路由。
     * - **local**：线下路由。
     * @example `local`
     */
    "SourceType": string;
    /**
     * 目标网段。
     * @example `172.XX.XX.0/24`
     */
    "DestCidrBlock": string;
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
     * @example `OSPF`
     */
    "RouteSource": string;
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
    "RouteDistribution": string;
}
