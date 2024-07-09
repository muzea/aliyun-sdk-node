export interface CheckCloudResourceAuthorizedResponse {
    /**
     * 授权状态，取值说明：
     * - **0**：未授权。
     * - **1**：已授权。
     * - **2**：用户未开启KMS。
     * @example `1`
     */
    AuthorizationState: number;
    /**
     * 请求ID。
     * @example `A0181AC4-F186-46ED-87CA-100C70B86729`
     */
    RequestId: string;
    /**
     * 已授权阿里云资源的角色信息。
     * > 当**AuthorizationState**返回值为**1**时，才会返回本参数。
     * @example `acs:ram::140****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    RoleArn: string;
}
