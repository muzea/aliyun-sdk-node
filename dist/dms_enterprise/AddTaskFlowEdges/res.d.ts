export interface AddTaskFlowEdgesResponse {
    /**
     * 请求ID。请求的唯一标识，用于定位日志，排查问题。
     * @example `E5EE2B9E-2F95-57FA-B284-CB441CEE49D6`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    EdgeIds: {
        /**
         * 任务流边ID列表。
         */
        EdgeId: number[];
    };
}
