export interface TransferClusterBackupResponse {
    /**
     * 是否已切换成集群备份模式。**1**表示已完成切换。
     * @example `1`
     */
    AlreadyDone: string;
    /**
     * 请求ID。
     * @example `3C4A2494-85C4-45C5-93CF-548DB3375193`
     */
    RequestId: string;
}
