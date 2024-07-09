export interface ConfirmVirusEventsResponse {
    /**
     * 请求处理结果。取值：
     * - true：处理成功
     * - false：处理失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `5DFD6277-CC36-57F7-ACE6-F5952XXXXXXXX`
     */
    RequestId: string;
}
