export interface ModifyInterceptionTargetResponse {
    /**
     * 请求处理结果。取值：
     * - **true**：处理成功
     * - **false**：处理失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `16CB4467-56AE-546C-BF19-AD4584C0DD03`
     */
    RequestId: string;
}
