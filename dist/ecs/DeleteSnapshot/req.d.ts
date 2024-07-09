export interface DeleteSnapshotRequest {
    /**
     * 快照ID。
     * @example `s-bp1c0doj0taqyzzl****`
     */
    "SnapshotId": string;
    /**
     * 是否强制删除已经被用于创建云盘的快照。取值范围：
     * - true：强制删除。强制删除后该磁盘无法重新初始化。
     * - false：不强制删除。
     * 默认值：false
     * @example `false`
     */
    "Force"?: boolean;
}
