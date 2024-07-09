export interface GetPhysicalConnectionServiceStatusRequest {
    /**
     * 要查询是否开通出方向流量费的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
