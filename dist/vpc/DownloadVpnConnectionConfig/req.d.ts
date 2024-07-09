export interface DownloadVpnConnectionConfigRequest {
    /**
     * IPsec连接所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     *  IPsec连接的ID。
     * @example `vco-bp1bbi27hojx80nck****`
     */
    "VpnConnectionId": string;
}
