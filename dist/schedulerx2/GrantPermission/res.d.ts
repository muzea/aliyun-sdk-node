export interface GrantPermissionResponse {
    /**
     * 返回码
     * @example `400`
     */
    Code: number;
    /**
     * 错误信息，仅出错时返回错误信息。
     * @example `Your request is denied as lack of ssl protect.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `false`
     */
    Success: boolean;
}
