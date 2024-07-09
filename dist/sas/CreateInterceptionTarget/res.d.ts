export interface CreateInterceptionTargetResponse {
    /**
     * 返回结果。
     * @example `true`
     */
    Result: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5B9ECCC0-38F7-***`
     */
    RequestId: string;
}
