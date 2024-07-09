export interface DescribeBinaryLogListResponse {
    /**
     * 请求ID。
     * @example `2DFF784E-DC31-5BBC-9B25-9261CD9E0AA9`
     */
    RequestId: string;
    /**
     * 当前查询的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前页显示的binlog数量。
     * @example `30`
     */
    PageSize: number;
    /**
     * 查询到的binlog文件总数。
     * @example `100`
     */
    TotalNumber: number;
    /**
     * binlog文件列表。
     */
    LogList: {
        /**
         * 当前binlog结束时间。
         * @example `2021-11-09 10:27:46`
         */
        EndTime: string;
        /**
         * 最后更新时间。
         * @example `2021-11-09 10:27:46`
         */
        ModifiedTime: string;
        /**
         * 备份host。
         * @example `10.110.88.9`
         */
        UploadHost: string;
        /**
         * 备份状态：
         * - 0：未备份；
         * - 1：备份中；
         * - 2：已备份。
         * @example `2`
         */
        UploadStatus: number;
        /**
         * 文件下载链接，2天内有效。
         * @example `http://polarx-cdc-binlog-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/polardbx_cdc/pxc-hzfd132143sfds1/binlog.000001?Expires=1636469502&OSSAccessKeyId=LT13fds12dsafddsf&Signature=fdpm%bdsfadsa%2F%bdsafdsaf%3D`
         */
        DownloadLink: string;
        /**
         * 日志开始时间。
         * @example `2021-09-09 10:27:46`
         */
        BeginTime: string;
        /**
         * 当前日志文件大小。
         * @example `536870912`
         */
        LogSize: number;
        /**
         * binlog文件名称。
         * @example `binlog.000001`
         */
        FileName: string;
        /**
         * 文件创建时间。
         * @example `2021-09-09 10:27:46`
         */
        CreatedTime: string;
        /**
         * 清理状态：
         * - 0：未删除；
         * - 1：已删除。
         * @example `0`
         */
        PurgeStatus: number;
        /**
         * 当前记录的唯一ID。
         * @example `100`
         */
        Id: number;
    }[];
}
