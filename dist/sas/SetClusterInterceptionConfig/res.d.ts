export interface SetClusterInterceptionConfigResponse {
    /**
     * 请求处理结果。取值：
     * - **true**：处理成功
     * - **false**：处理失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `74AB990C-539B-579B-9239-B8A2036B7337`
     */
    RequestId: string;
}
