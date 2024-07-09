export interface DeleteNetworkInterfaceRequest {
    /**
     * 所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡的ID。
     * @example `eni-bp14v2sdd3v8htln****`
     */
    "NetworkInterfaceId": string;
}
