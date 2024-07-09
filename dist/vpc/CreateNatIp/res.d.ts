export interface CreateNatIpResponse {
    /**
     * 创建的NAT IP地址。
     * @example `192.168.0.34`
     */
    NatIp: string;
    /**
     * 请求ID。
     * @example `E9AD97A0-5338-43F8-8A80-5E274CCBA11B`
     */
    RequestId: string;
    /**
     * 创建的NAT IP地址实例ID。
     * @example `vpcnatip-gw8y7q3cpk3fggs8****`
     */
    NatIpId: string;
}
