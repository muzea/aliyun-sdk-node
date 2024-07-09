export interface AssociateEnsEipAddressRequest {
    /**
     * 待绑定EIP的ID。
     * @example `eip-5sc1sgcrsrwgwdvx44hru3p63`
     */
    "AllocationId": string;
    /**
     * 绑定EIP的云产品ID。
     * >支持负载均衡（ELB）实例ID。
     * @example `lb-5saivuir6b1mupxjfbhmk1xkb`
     */
    "InstanceId": string;
    /**
     * EIP实例的类型，取值：
     * - **Nat**：NAT网关。
     * - **SlbInstance**：负载均衡（ELB）。
     * - **NetworkInterface**：辅助弹性网卡。
     * - **NatSlbInstance**：ELB绑定多EIP时，需要选此值。
     * - **EnsInstance**（默认值）：ENS实例。
     * @example `SlbInstance`
     */
    "InstanceType"?: string;
    /**
     * 是否备用EIP。取值：
     * - true：备用。
     * - false：非备用。
     * @example `true`
     */
    "Standby"?: boolean;
}
