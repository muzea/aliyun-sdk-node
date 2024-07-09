export interface CheckKMSAuthorizedResponse {
    /**
     * 授权状态。取值范围如下：
     * - **0**：未授权。
     * - **1**：已授权。
     * @example `0`
     */
    AuthorizationState: number;
    /**
     * 请求ID。
     * @example `A7E6A8FD-C50B-46B2-BA85-D8B8D3******`
     */
    RequestId: string;
    /**
     * 角色的全局资源描述符，用来指定具体角色。详情请参见[RAM角色概览](~~93689~~)。
     * @example `acs:ram::1406926*****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    RoleArn: string;
    /**
     * 集群ID。
     * @example `pc-************`
     */
    DBClusterId: string;
}
