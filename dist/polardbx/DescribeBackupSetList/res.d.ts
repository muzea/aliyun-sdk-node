export interface DescribeBackupSetListResponse {
    /**
     * 返回信息，成功为success，错误返回错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1A6D328C-84B8-40DC-BF49-6C73984D7494`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 备份结束时间。
         * @example `1635706960956`
         */
        EndTime: number;
        /**
         * 备份集状态：
         * - **0**： 备份中；
         * - **1**：备份成功；
         * - **2**：备份失败。
         * @example `1`
         */
        Status: number;
        /**
         * 备份集大小， 单位为byte。
         * @example `88803195`
         */
        BackupSetSize: number;
        /**
         * 备份集ID。
         * @example `111`
         */
        BackupSetId: string;
        /**
         * 备份类型：
         * - **0**：快速备份；
         * - **1**：一致性备份。
         * @example `1`
         */
        BackupType: number;
        /**
         * 备份开始时间。
         * @example `1635706960956`
         */
        BeginTime: number;
        /**
         * 备份模式：
         * - **0**：自动备份；
         * - **1**：手动备份。
         * @example `0`
         */
        BackupModel: number;
    }[];
}
