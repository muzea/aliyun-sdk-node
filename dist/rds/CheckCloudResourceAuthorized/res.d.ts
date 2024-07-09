export interface CheckCloudResourceAuthorizedResponse {
    /**
     * 请求ID。
     * @example `8B993DA9-5272-5414-94E3-4CA8BA0146C2`
     */
    RequestId: string;
    /**
     * 角色的全局资源描述符，用来指定具体角色。详情请参见[RAM角色概览](~~93689~~)。
     * @example `acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    RoleArn: string;
    /**
     * 授权状态，取值：
     * - **1**：已授权
     * - **0**：未授权
     * @example `1`
     */
    AuthorizationState: number;
}
