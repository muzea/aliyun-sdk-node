export interface DescribeBackupStorageResponse {
    /**
     * 请求ID。
     * @example `D648B367-15B6-1B42-BD4B-4XXXXXXXXX`
     */
    RequestId: string;
    /**
     * 实例全量备份数据内置存储量，单位为字节（B）。
     * > 云盘版实例使用快照备份，当前全量的备份的大小为快照链的大小。
     * @example `789221621`
     */
    FullStorageSize: number;
    /**
     * 实例日志备份数据内置存储量，单位为字节（B）。
     * @example `7892216`
     */
    LogStorageSize: number;
    /**
     * 实例免费备份数据额度，单位为字节（B）。
     * @example `42949672960`
     */
    FreeSize: number;
}
