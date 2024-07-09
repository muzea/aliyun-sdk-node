export interface DescribeTasksResponse {
    /**
     * 动态消息。
     * @example `msg`
     */
    DynamicMessage: string;
    /**
     * 请求Id
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误代码
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 结果
     */
    Result: {
        /**
         * 操作
         * @example `action`
         */
        Action: string;
        /**
         * 结果
         * @example `result`
         */
        Result: string;
        /**
         * 发送者
         * @example `sender`
         */
        Sender: string;
        /**
         * 操作类型
         * @example `type`
         */
        OperationType: string;
        /**
         * 是否已操作
         * @example `false`
         */
        Handled: boolean;
        /**
         * 响应时间
         * @example `1533025590`
         */
        ResponseTime: string;
        /**
         * 接收者
         * @example `target`
         */
        Target: string;
        /**
         * 任务Id
         * @example `33`
         */
        TaskId: number;
        /**
         * 请求时间
         * @example `1533025590`
         */
        RequestTime: number;
    }[];
}
