export interface DescribeEtlJobLogsResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `224DB9F7-3100-4899-AB9C-C938BCCB43E7`
     */
    RequestId: string;
    /**
     * 传入的ETL任务ID错误，找不到对应的任务。
     * @example `InvalidJobId`
     */
    ErrCode: string;
    /**
     * 请求是否成功，如果失败则返回false。
     * @example `true`
     */
    Success: boolean;
    /**
     * 传入的ETL任务ID错误，找不到对应的任务（任务可能已删除）。
     * @example `The specified dts job id %s is not exists.`
     */
    ErrMessage: string;
    /**
     * 与本次请求相关的动态错误信息。
     * @example `present environment is not support,so skip.`
     */
    DynamicMessage: string;
    /**
     * 与本次请求相关的动态错误码。
     * @example `403`
     */
    DynamicCode: string;
    /**
     * 返回ETL任务运行日志对象数组。
     */
    EtlRunningLogs: {
        /**
         * ETL任务的ID。
         * @example `u**********5`
         */
        EtlId: string;
        /**
         * 用户ID。
         * @example `121323*******454512`
         */
        UserId: string;
        /**
         * 状态，即产生日志的模块名，比如ETL任务的转换模块。
         * @example `DTS-ETL`
         */
        ContentKey: string;
        /**
         * ETL任务运行状态描述。
         * @example `Starting DTS-ETL...`
         */
        Content: string;
        /**
         * 日志等级，有ERROR、WARN、INFO、DEBUG4种等级。
         * @example `INFO`
         */
        Status: string;
        /**
         * 记录时间戳（产生日志的时间）。
         * @example `1637306503000`
         */
        LogDatetime: string;
    }[];
}
