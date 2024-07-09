export interface DescribeResourceUsageResponse {
    /**
     * 请求返回状态。
     * - success：成功。
     * - failed：失败。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `SpaceNotExist`
     */
    Message: string;
    /**
     * HTTP请求返回的响应状态码，200表示请求成功。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 唯一请求ID。
     * @example `C293BB03-B6AD-46C2-80D1-19C8FB573916`
     */
    RequestId: string;
    /**
     * 请求返回状态。
     * - true：成功。
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    DataList: {
        /**
         * 获取资源用量起始时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ， 默认返回今天的数据。
         * @example `2021-10-01T15:00:00Z`
         */
        StartTime: string;
        /**
         * 获取资源用量结束时间。结束时间需晚于起始时间。
         * @example `2021-10-01T16:00:00Z`
         */
        EndTime: string;
        /**
         * 云存储。
         */
        CloudStorage: {
            /**
             * 容量 （单位字节）。
             * @example `0`
             */
            DataSize: number;
            /**
             * 流量（单位字节）。
             * @example `0`
             */
            Traffic: number;
            /**
             * 上传次数。
             * @example `0`
             */
            Upload: number;
            /**
             * 下载次数。
             * @example `0`
             */
            Download: number;
        };
        /**
         * 云数据库。
         */
        CloudDB: {
            /**
             * 容量 （单位字节）。
             * @example `0`
             */
            DataSize: number;
            /**
             * 写次数。
             * @example `0`
             */
            Write: number;
            /**
             * 读次数。
             * @example `0`
             */
            Read: number;
        };
        /**
         * 云函数。
         */
        CloudFunction: {
            /**
             * 计算量（单位 GBS）。
             * @example `0`
             */
            Compute: number;
            /**
             * 调用次数。
             * @example `0`
             */
            Count: number;
            /**
             * 流量（单位字节）。
             * @example `0`
             */
            Traffic: number;
        };
        /**
         * 静态网站托管
         */
        StaticWeb: {
            /**
             * 容量 （单位字节）。
             * @example `0`
             */
            DataSize: number;
            /**
             * 流量（单位字节）。
             * @example `0`
             */
            Traffic: number;
        };
    }[];
    /**
     * 分页信息。
     */
    Paginator: {
        /**
         * 当前页面总数。
         * @example `3`
         */
        PageCount: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 分页大小。
         * @example `100`
         */
        PageSize: number;
        /**
         * 总数
         * @example `255`
         */
        Total: number;
    };
}
