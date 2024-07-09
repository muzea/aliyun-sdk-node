export interface DeleteDataServiceApiAuthorityResponse {
    /**
     * 取消授权是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EF****`
     */
    RequestId: string;
}
