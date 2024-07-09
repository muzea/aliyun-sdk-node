export interface DeleteSnapshotGroupRequest {
    /**
     * 实例快照所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 快照一致性组ID。您可以调用[DescribeSnapshotGroups](~~210940~~)查询快照一致性组ID。
     * @example `ssg-j6c9lpuyxo2uxxny****`
     */
    "SnapshotGroupId": string;
}
