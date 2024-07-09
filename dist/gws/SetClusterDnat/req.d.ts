export interface SetClusterDnatRequest {
    /**
     * 集群 id。
     * @example `gws-xxx`
     */
    "ClusterId": string;
    /**
     * 网关 id。
     * * 取值非空时，代表将待关联 NAT id；此 NAT 与云桌面集群必须处在同一个VPC中
     * * 此值空时，如果当前集群已关联了某个 NAT，将解除集群与此 NAT 的关联
     * @example `ngw-xxx`
     */
    "NatId": string;
    /**
     * * 当 NatId 非空时，如果此参数
     *     * 非空，将使用此 EIP 来与集群做关联
     *     * 为空值，将从 NAT 中状态为 Idle 或 UsedByForwardTable 的 EIP 中自动选择
     * * 当 NatId 为空值时，此参数无效
     * @example `1.2.3.4`
     */
    "NatEip"?: string;
}
