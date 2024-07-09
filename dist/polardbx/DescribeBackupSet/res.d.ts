export interface DescribeBackupSetResponse {
    /**
     * 错误信息。
     * @example `successs`
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
     * 数据列表。
     */
    Data: {
        /**
         * 备份结束时间。
         * @example `1650251308000`
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
        BackupSetId: number;
        /**
         * 备份类型：
         * - **0**：快速备份；
         * - **1**：一致性备份。
         * @example `1`
         */
        BackupType: number;
        /**
         * 备份开始时间。
         * @example `1650250861754`
         */
        BeginTime: number;
        /**
         * 备份模式：
         * - **0**：自动备份；
         * - **1**：手动备份。
         * @example `0`
         */
        BackupModel: number;
        /**
         * 备份集OSS信息列表。
         */
        OSSList: {
            /**
             * OSS文件名。
             * @example `hins3084_data_20220418110623_qp.xb`
             */
            BackupSetFile: string;
            /**
             * OSS文件链接过期时间。
             * @example `2022-04-20T08:01:37Z`
             */
            LinkExpiredTime: string;
            /**
             * 内网OSS下载地址。
             * @example `http://pre-rdsbak-cn-beijing.oss-cn-beijing-internal.aliyuncs.com/custins2255/hins3084_data_20220418110623_qp.xb?`
             */
            IntranetDownloadLink: string;
            /**
             * 外网下载地址。
             * @example `https://pre-rdsbak-cn-xxx.oss-cn-beijing.aliyuncs.com/custins2255/hins3084_data_20220418110623_qp.xb?OSSAccessKeyId=LTAI5tJEmRFdJ8aBPDR7****&Expires=1650441697&dd=7KJzkUSbXf6dwy`
             */
            DownloadLink: string;
        }[];
    }[];
}
