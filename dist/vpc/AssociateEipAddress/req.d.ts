export interface AssociateEipAddressRequest {
    /**
     * 要绑定云产品实例的EIP所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 绑定云产品实例的EIP的ID。
     * @example `eip-2zeerraiwb7ujsxdc****`
     */
    "AllocationId": string;
    /**
     * 要绑定EIP的实例ID。
     * 支持输入NAT网关实例ID、传统型负载均衡CLB实例ID、云服务器ECS实例ID、辅助弹性网卡实例ID、高可用虚拟IP实例ID、IP地址。
     * @example `i-2zebb08phyczzawe****`
     */
    "InstanceId": string;
    /**
     * 要绑定EIP的实例的类型，取值：
     * - **Nat**：NAT网关。
     * - **SlbInstance**：传统型负载均衡CLB。
     * - **EcsInstance**（默认值）：云服务器ECS。
     * - **NetworkInterface**：辅助弹性网卡。
     * - **HaVip**：高可用虚拟IP。
     * - **IpAddress**：IP地址。
     * > 默认要绑定EIP的实例类型为**EcsInstance**，如果您需要绑定EIP的实例类型不为**EcsInstance**，则该值必填。
     * @example `EcsInstance`
     */
    "InstanceType"?: string;
    /**
     * 要绑定EIP的实例所属地域的ID。
     * >仅在EIP加入到带宽共享型全球加速实例后，才需要填写该参数。
     * @example `cn-hangzhou`
     */
    "InstanceRegionId"?: string;
    /**
     * 交换机网段内的一个IP地址。
     * 如果不输入该参数，系统根据VPC ID和交换机ID自动分配一个私网IP地址。
     * > 当**InstanceType**配置为**NetworkInterface**时，该参数必填，需输入要绑定的私网IP。
     * @example `192.168.XX.XX`
     */
    "PrivateIpAddress"?: string;
    /**
     * 绑定模式，取值：
     * - **NAT**（默认值）：NAT模式（普通模式）。
     * - **MULTI_BINDED**：多EIP网卡可见模式。
     * - **BINDED**：EIP网卡可见模式。
     * > 仅**InstanceType**配置为**NetworkInterface**时，才需要配置该参数。
     * @example `NAT`
     */
    "Mode"?: string;
    /**
     * 开通了IPv4网关功能且与EIP同地域的VPC ID。
     * EIP绑定IP地址时，系统可以根据该VPC的路由配置，使绑定的IP地址具备公网访问能力。
     * > **InstanceType**取值为**IpAddress**时，即要绑定EIP的实例类型为IP地址时，该参数必填。
     * @example `vpc-257gqcdfvx6n****`
     */
    "VpcId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
}
