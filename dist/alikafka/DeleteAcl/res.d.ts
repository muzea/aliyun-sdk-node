export interface DeleteAclResponse {
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B0740227-AA9A-4E14-8E9F-36ED665****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
