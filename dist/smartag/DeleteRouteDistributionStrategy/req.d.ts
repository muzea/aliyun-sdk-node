export interface DeleteRouteDistributionStrategyRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-gyat6giidkvyk****`
     */
    "SmartAGId": string;
    /**
     * 目标网段。
     * @example `192.XX.XX.0/24`
     */
    "DestCidrBlock": string;
    /**
     * 路由来源类型：
     * - **cloud**：云上路由。
     * - **local**：线下路由。
     * @example `local`
     */
    "SourceType": string;
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
    "RouteSource": string;
}
