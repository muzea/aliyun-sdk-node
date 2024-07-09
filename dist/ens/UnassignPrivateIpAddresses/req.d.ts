export interface UnassignPrivateIpAddressesRequest {
    /**
     * 弹性网卡ID。
     * @example `eni-f8z57orgmt6d144t****`
     */
    "NetworkInterfaceId": string;
    /**
     * 一个或多个需要删除的辅助私有IP地址。
     */
    "PrivateIpAddress": string[];
}
