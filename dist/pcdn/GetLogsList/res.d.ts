export interface GetLogsListResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `B40C0B7C-C90E-43CD-963A-1B6AC6BCF6FF`
     */
    RequestId: string;
    LogList: {
        /**
         * 返回日志的信息列表。
         */
        Log: {
            /**
             * 链接路径。
             * @example `http://pcdn-log.oss-cn-shanghai.aliyuncs.com/xxxx/2017-05-07/xxxx`
             */
            Url: string;
            /**
             * 开始时间。
             * @example `2017-05-07 21:00:00`
             */
            StartDate: string;
            /**
             * 结束时间。
             * @example `2017-05-07 21:59:59`
             */
            EndDate: string;
            /**
             * 文件名称。
             * @example `ccd_cdn.xxxx.com.cn_2017-05-03_07.tar.gz`
             */
            FileName: string;
        }[];
    };
}
