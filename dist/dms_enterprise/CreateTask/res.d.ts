export interface CreateTaskResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `CFD8FE00-36D9-4C1B-940D-65A7B73D9066`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `InvalidParameterValid`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InvalidParameterValid`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 创建成功时，返回的任务节点ID。
     * @example `3***`
     */
    NodeId: number;
}
