export interface CreateServiceIdentityRoleResponse {
    /**
     * 请求ID。
     * @example `C03B2680-AC9C-59CD-93C5-8142B92537FA`
     */
    RequestId: string;
    /**
     * 服务账户角色名称。
     * @example `AliyunServiceRoleForFeatureStore`
     */
    RoleName: string;
    /**
     * 错误码。
     * @example `ServiceLinkedRoleAlreadyExistsErrorProblem`
     */
    Code: string;
}
