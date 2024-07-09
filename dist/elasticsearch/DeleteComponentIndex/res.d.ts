export interface DeleteComponentIndexResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
    /**
     * 返回结果：
     * - true：删除成功
     * - false：删除失败
     * @example `true`
     */
    Result: boolean;
}
