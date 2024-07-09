export interface DescribeBinlogFilesResponse {
    /**
     * 日志文件总大小。
     * @example `2269410`
     */
    TotalFileSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `ED169A3E-1657-4104-82AB-24EA8CD0DB75`
     */
    RequestId: string;
    /**
     * 当前页日志文件个数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 日志文件总数。
     * @example `100`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 日志文件明细列表。
         */
        BinLogFile: {
            /**
             * OSS的存储状态。
             * 返回值：
             * * **Uploading**：上传中
             * * **Completed**：上传完成
             * @example `Completed`
             */
            RemoteStatus: string;
            /**
             * 内网下载链接URL。
             * @example `http://****.oss-cn-hangzhou-internal.aliyuncs.com/****`
             */
            IntranetDownloadLink: string;
            /**
             * 日志文件记录的开始时间。
             * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）
             * @example `2019-02-09T17:45:21Z`
             */
            LogBeginTime: string;
            /**
             * URL过期时间。
             * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）
             * @example `2013-06-09T18:00:00Z`
             */
            LinkExpiredTime: string;
            /**
             * 支持HTTP协议的下载链接URL，NULL表示没有下载链接。
             * @example `http://****.oss.aliyuncs.com/****`
             */
            DownloadLink: string;
            /**
             * 日志文件名称。
             * @example `000000040000000000000019`
             */
            LogFileName: string;
            /**
             * 校验和，采用CRC64算法。
             * @example `18358304393468701857`
             */
            Checksum: string;
            /**
             * 日志文件记录的结束时间。
             * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）
             * @example `2019-02-15T13:10:28Z`
             */
            LogEndTime: string;
            /**
             * 日志文件所在实例编号，用户区分该日志文件中日志产生于主实例或备实例。
             * > 您可以前往RDS管理控制台，进入实例详情页，然后在左侧导航栏单击**服务可用性**，查看**主库编号**和**备库编号**。
             * @example `584****`
             */
            HostInstanceID: string;
            /**
             * 日志文件大小。
             * 单位：Byte
             * @example `2269410`
             */
            FileSize: number;
        }[];
    };
}
