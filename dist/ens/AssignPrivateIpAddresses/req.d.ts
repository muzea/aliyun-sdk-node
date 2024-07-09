export interface AssignPrivateIpAddressesRequest {
    /**
     * 弹性网卡ID。
     * @example `eni-uf6533jbifugr5fo2j1w`
     */
    "NetworkInterfaceId": string;
    /**
     * 交换机ID。
     * @example `vsw-5rllcjb3ol6duzjdnbm1ombn7`
     */
    "VSwitchId"?: string;
}
