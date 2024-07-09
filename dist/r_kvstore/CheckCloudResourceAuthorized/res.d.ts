export interface CheckCloudResourceAuthorizedResponse {
    /**
     * 授权状态，返回值：
     * * **0**：未授权。
     * * **1**：已授权。
     * * **2**：未开通密钥管理服务，具体操作，请参见[开通密钥管理服务](~~153781~~)。
     * @example `1`
     */
    AuthorizationState: number;
    /**
     * 请求ID。
     * @example `A501A191-BD70-5E50-98A9-C2A486A82****`
     */
    RequestId: string;
}
