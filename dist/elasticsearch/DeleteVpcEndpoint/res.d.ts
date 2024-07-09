export interface DeleteVpcEndpointResponse {
    /**
     * 是否删除成功，取值含义如下：
     * - true：成功删除。
     * - false：删除失败。
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
}
