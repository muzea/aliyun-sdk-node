export interface GetDhcpOptionsSetRequest {
    /**
     * 要查询DHCP选项集所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询DHCP选项集的ID。
     * @example `dopt-o6w0df4epg9zo8isy****`
     */
    "DhcpOptionsSetId": string;
}
