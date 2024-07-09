export interface DescribeClusterOperateLogsResponse {
    /**
     * 监控统计信息。
     */
    DataPoints: {
        /**
         * 日志记录表的主键。
         * @example `237827`
         */
        Id: string;
        /**
         * 时间戳，单位毫秒。
         * @example `1642077211574`
         */
        LogDatetime: number;
        /**
         * 操作类型。
         * @example `modify-oversold-ratio`
         */
        OperationName: string;
        /**
         * 操作人。
         * @example `null`
         */
        OperationUser: string;
        /**
         * 操作类型是修改时，旧的参数值。
         * @example `100`
         */
        OldValue: string;
        /**
         * 操作类型是修改时，新的参数值。
         * @example `105`
         */
        NewValue: string;
        /**
         * 其他备注信息。
         * @example `null`
         */
        Content: string;
        /**
         * 调用结果，是否成功，**1**代表成功。
         * @example `1`
         */
        Success: number;
    }[];
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前每页显示的数量。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 记录的总数。
     * @example `100`
     */
    TotalRecordCount: number;
    /**
     * 调用结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 后端错误码，数字递增。
     * @example `500`
     */
    Code: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 异常对应的状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
}
