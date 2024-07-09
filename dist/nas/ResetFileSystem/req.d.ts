export interface ResetFileSystemRequest {
    /**
     * 指定的极速型NAS高级型文件系统ID。
     * @example `extreme-012dd****`
     */
    "FileSystemId": string;
    /**
     * 需要恢复到指定文件系统某一阶段的历史快照ID。
     * @example `s-extreme-snapsho****`
     */
    "SnapshotId": string;
}
