export interface ListHotlineRecordDetailResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回数据。
     */
    ResultData: {
        /**
         * 当前页。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 总记录数。
         * @example `945`
         */
        TotalResults: number;
        /**
         * 总页数。
         * @example `10`
         */
        TotalPage: number;
        /**
         * 每页大小。
         * @example `100`
         */
        OnePageSize: number;
        /**
         * 查询数据结果。
         */
        Data: {
            /**
             * 客服账号。
             * @example `123@123.com`
             */
            ServicerName: string;
            /**
             * 热线开始时间。
             * @example `1614578400000`
             */
            StartTime: number;
            /**
             * 热线结束时间。
             * @example `1614578410000`
             */
            EndTime: number;
            /**
             * 热线通话录音地址。
             * @example `http://xxx.xxxxx/xx.wav`
             */
            OssUrl: string;
        }[];
    };
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
