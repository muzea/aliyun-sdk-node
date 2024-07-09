export interface ResetDiskRequest {
    /**
     * 待回滚数据的云盘ID。
     * @example `d-bp199lyny9b3****`
     */
    "DiskId": string;
    /**
     * 需要恢复到某一云盘阶段的历史快照ID。
     * @example `sp-bp199lyny9b3****`
     */
    "SnapshotId": string;
}
