export interface GetServiceIdentityRoleResponse {
    /**
     * 请求ID。
     * @example `6F629E92-F64D-502D-85AA-A9C54894CA3D`
     */
    RequestId: string;
    /**
     * 服务账户角色名称。
     * @example `AliyunServiceRoleForPaiFeatureStore`
     */
    RoleName: string;
    /**
     * 关联策略。
     * @example `{
    "Version": "1",
    "Statement":[]
    }`
     */
    Policy: string;
}
