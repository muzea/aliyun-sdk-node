export interface CreateAccessAssignmentRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置ID。
     * @example `ac-00jhtfl8thteu6uj****`
     */
    "AccessConfigurationId": string;
    /**
     * 任务目标类型。取值：RD-Account，表示任务目标类型为RD账号。
     * @example `RD-Account`
     */
    "TargetType": string;
    /**
     * 部署目标ID。
     * @example `114240524784****`
     */
    "TargetId": string;
    /**
     * 云SSO身份类型。取值：
     * - User：用户。
     * - Group：用户组。
     * @example `User`
     */
    "PrincipalType": string;
    /**
     * 云SSO身份ID。具体如下：
     * - 当`PrincipalType`为`User`时，`PrincipalId`为云SSO用户ID。
     * - 当`PrincipalType`为`Group`时，`PrincipalId`为云SSO用户组ID。
     * @example `u-00q8wbq42wiltcrk****`
     */
    "PrincipalId": string;
}
