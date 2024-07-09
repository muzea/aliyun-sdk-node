export interface GetJobResourceUsageResponse {
    /**
     * 请求id
     * @example `0b57ff7616612271051086500ea3ce`
     */
    requestId: string;
    /**
     * 业务成功与否。如果非空且不是200，那么表示业务处理失败。
     * @example `200`
     */
    httpCode: number;
    /**
     * 错误码
     * @example `success`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `0A3B1E82006A23A918C70905BF08AEC7`
     */
    errorMsg: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 返回的数据列表
         */
        jobResourceUsageList: {
            /**
             * 日程开始日期，格式：yyyy-MM-dd。
             * @example `2023-05-09`
             */
            date: string;
            /**
             * 作业的执行者
             * @example `ALIYUN$xxx@test.aliyunid.com`
             */
            jobOwner: string;
            /**
             * 配额昵称
             * @example `my_quota`
             */
            quotaNickname: string;
            /**
             * cu使用总量
             * @example `1185100`
             */
            cuUsage: number;
            /**
             * 内存使用总量
             * @example `15169536`
             */
            memoryUsage: number;
        }[];
        /**
         * 返回结果的总数量。
         * @example `64`
         */
        totalCount: number;
        /**
         * 当前页码。
         * @example `2`
         */
        pageNumber: number;
        /**
         * 每页显示条数。
         * @example `10`
         */
        pageSize: number;
    };
}
