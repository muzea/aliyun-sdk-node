export interface DescribePreCheckProgressListResponse {
    /**
     * 预检查状态，返回值如下：
     * - **running**：运行中
     * - **failed**：失败
     * - **finish**：完成
     * @example `finish`
     */
    Status: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `C4A45FE1-A903-470D-B113-F12A4DF942AB`
     */
    RequestId: string;
    /**
     * 预检查进度，返回值范围：0~100。
     * @example `100`
     */
    Progress: number;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 返回是否成功，返回值如下：
     * - **true**：返回成功
     * - **false**：返回失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.     `
     */
    ErrMessage: string;
    Items: {
        /**
         * 进度明细列表。
         */
        PreCheckProgressDetail: {
            /**
             * 完成时间，格式为Unix时间戳。
             * @example `1704351396000`
             */
            FinishTime: number;
            /**
             * 进度状态，返回值如下：
             * - **init**：初始化
             * - **warning**：警告
             * - **catched**：异常
             * - **running**：运行中
             * - **failed**：失败
             * - **finish**：完成
             * @example `warning`
             */
            State: string;
            /**
             * 启动时间，格式为Unix时间戳。
             * @example `1704351395000`
             */
            BootTime: number;
            /**
             * 进度ID。
             * @example `qxwmxh2b****`
             */
            JobId: string;
            /**
             * 检查项编码。
             * @example `CHECK_BINLOG_ON`
             */
            Item: string;
            /**
             * 异常信息。
             * @example `java.lang.RuntimeException: Could not find any schema ......`
             */
            ErrMsg: string;
            /**
             * 序号。
             * @example `30`
             */
            OrderNum: string;
            /**
             * 检查项分组。
             * @example `CHECK_BINLOG_ON_DETAIL`
             */
            Names: string;
        }[];
    };
}
