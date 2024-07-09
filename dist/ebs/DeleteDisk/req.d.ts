export interface DeleteDiskRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~354276~~)查询块存储数据洞察支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云盘ID。
     * @example `d-cd4************`
     */
    "DiskId": string;
}
