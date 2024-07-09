export interface ValidateVpcConnectivityResponse {
    /**
     * 请求ID
     * @example `9A591B5B-0EC2-5463-B8B8-1984AE3AEBF1`
     */
    RequestId: string;
    /**
     * API网关实例到指定VPC授权网络是否连通
     * - **true**：网络连通
     * - **false**：网络不连通
     * @example `True`
     */
    Connected: boolean;
    /**
     * 当VPC授权中实例ID填写为IP时，表示IP的实例类型
     * - **ECS**：IP对应的实例为ECS
     * - **SLB**：IP对应的实例为ECS
     * - **INVALID**：IP对应的实例类型非法
     * @example `ECS`
     */
    IpType: string;
}
