export interface ModifyInstanceVpcAttributeRequest {
    /**
     * 实例ID。
     * @example `i-bp1iudwa5b1tqag1****`
     */
    "InstanceId": string;
    /**
     * 虚拟交换机ID。
     * - 传入的ID为实例的当前虚拟交换机时，表明实例不变更虚拟交换机。
     * - 传入的ID为一台新的虚拟交换机，并且参数`VpcId`为空时，新旧虚拟交换机必须属于同一个可用区、同一个专有网络VPC。
     * - 当参数`VpcId`不为空时，该参数传入的虚拟交换机ID必须属于VpcId，并且和原虚拟交换机属于同一个可用区。
     * @example `vsw-bp1s5fnvk4gn3tw12****`
     */
    "VSwitchId": string;
    /**
     * 新的私网IP地址。
     * >`PrivateIpAddress`依赖于`VSwitchId`，指定的IP地址必须在虚拟交换机子网网段中。
     * 默认值：当不传该值时，从虚拟交换机子网网段中随机分配。
     * @example `172.17.**.**`
     */
    "PrivateIpAddress"?: string;
    /**
     * 目标VPC ID。
     * @example `vpc-bp1vwnn14rqpyiczj****`
     */
    "VpcId"?: string;
    /**
     * 实例修改VPC后加入的安全组ID列表。当且仅当传入`VpcId`参数时，需要同时传入该参数。
     * - 安全组类型必须一致。
     * - 指定实例修改后加入的安全组列表，可以是一个或者多个。参数中N的取值范围与实例能够加入安全组的限制有关。更多信息，请参见[使用限制](~~25412~~)。
     * - 专有网络类型ECS实例的安全组必须属于`VpcId`所在的VPC。
     * @example `sg-o6w9l8bc8dgmkw87****`
     */
    "SecurityGroupId"?: string[];
}
