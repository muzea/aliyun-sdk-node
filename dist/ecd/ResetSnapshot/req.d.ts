export interface ResetSnapshotRequest {
    /**
     * 地域ID。
     * @example `cn-hzngahou`
     */
    "RegionId": string;
    /**
     * 用来恢复磁盘数据的快照ID。
     * @example `s-2zeipxmnhej803x7****`
     */
    "SnapshotId": string;
}
