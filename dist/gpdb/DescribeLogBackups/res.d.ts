export interface DescribeLogBackupsResponse {
    /**
     * 符合时间范围内的总日志大小，单位为Byte。
     * @example `386748`
     */
    TotalLogSize: number;
    /**
     * 本页备份集个数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `24B9FCAF-2CBC-51C3-B563-F1C70D750187`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 备份集列表。
     */
    Items: {
        /**
         * 备份日志文件大小，单位：Byte。
         * @example `77350`
         */
        LogFileSize: number;
        /**
         * 日志时间戳。
         * @example `2022-12-12T02:14:26Z`
         */
        LogTime: string;
        /**
         * 节点名称。
         * @example `segment-0`
         */
        SegmentName: string;
        /**
         * 日志文件名（OSS路径）。
         * @example `000000010000000400000012`
         */
        LogFileName: string;
        /**
         * 实例的Master节点ID。
         * @example `gp-bp12ga6v69h86****-master`
         */
        DBInstanceId: string;
        /**
         * 备份集ID。
         * @example `12413721782`
         */
        BackupId: string;
    }[];
}
