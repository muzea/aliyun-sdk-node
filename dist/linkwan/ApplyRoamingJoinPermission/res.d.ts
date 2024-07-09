export interface ApplyRoamingJoinPermissionResponse {
    /**
     * 泛在凭证的ID。
     * @example `1234`
     */
    Data: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097	`
     */
    RequestId: string;
    /**
     * 是否调用成功。返回值：
     * -  **true**：调用成功。
     * - ** false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
