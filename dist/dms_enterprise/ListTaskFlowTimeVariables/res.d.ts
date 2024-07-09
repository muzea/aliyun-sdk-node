export interface ListTaskFlowTimeVariablesResponse {
    /**
     * 请求ID。
     * @example `EC12A3BE-149F-5365-AF33-12CC8C963923`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    TimeVariables: {
        TimeVariable: {
            Name: string;
            Pattern: string;
        }[];
    };
}
