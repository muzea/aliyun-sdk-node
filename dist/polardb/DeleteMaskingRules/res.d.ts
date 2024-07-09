export interface DeleteMaskingRulesResponse {
    /**
     * 请求ID。
     * @example `2BCEE25B-797C-426B-BA7B-D28CCF******`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回`Successful`，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求结果。取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
