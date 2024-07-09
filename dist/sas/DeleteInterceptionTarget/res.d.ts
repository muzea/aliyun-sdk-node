export interface DeleteInterceptionTargetResponse {
    /**
     * 删除网络对象是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D81DD78E-E006-5C65-A171-C8CB09XXXXX`
     */
    RequestId: string;
}
