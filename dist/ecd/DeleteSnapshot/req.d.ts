export interface DeleteSnapshotRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 快照ID数组。可设置1~100个。
     * @example `s-2ze81owrnv9pity4****`
     */
    "SnapshotId": string[];
}
