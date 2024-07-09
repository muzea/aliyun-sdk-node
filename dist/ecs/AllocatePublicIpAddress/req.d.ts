export interface AllocatePublicIpAddressRequest {
    /**
     * 需要分配IP地址的实例ID。
     * @example `i-bp1gtjxuuvwj17zr****`
     */
    "InstanceId": string;
    /**
     * 实例的公网IP地址。如果该参数值为空，则默认由系统随机分配IP地址。
     * @example `112.124.**.**`
     */
    "IpAddress"?: string;
    /**
     * 实例的VLAN ID。
     * > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
     * @example `720`
     */
    "VlanId"?: string;
}
