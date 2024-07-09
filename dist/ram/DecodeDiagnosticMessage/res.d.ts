export interface DecodeDiagnosticMessageResponse {
    /**
     * 请求ID。
     * @example `D2331703-AADF-5564-BA9B-26CD51A33BA0`
     */
    RequestId: string;
    /**
     * 解码的诊断信息。
     */
    DecodedDiagnosticMessage: {
        /**
         * 是否是显式拒绝。
         * @example `true`
         */
        ExplicitDeny: boolean;
        /**
         * 产生无权限的策略类型。
         * @example `AccountLevelIdentityBasedPolicy`
         */
        NoPermissionPolicyType: string;
        /**
         * 用户请求中用于鉴权的操作信息。
         * @example `ram:DecodeDiagnosticMessage`
         */
        AuthAction: string;
        /**
         * 用户请求中用于鉴权的资源信息。
         * @example `*`
         */
        AuthResource: string;
        /**
         * 用户请求中用于鉴权的主体信息。
         */
        AuthPrincipal: {
            /**
             * 用户请求中用于鉴权的身份类型。
             * @example `SubUser`
             */
            AuthPrincipalType: string;
            /**
             * 用户请求中用于鉴权的身份所属的阿里云账号UID信息。
             * @example `196813200012****`
             */
            AuthPrincipalOwnerId: string;
            /**
             * 用户请求中用于鉴权的身份标识。具体如下：
             * - RAM用户：提供的是RAM用户的UID信息。
             * - RAM角色：提供的是角色名称和角色会话名称（例如：RoleName:RoleSessionName）。
             * - SSO联合身份：提供的是身份提供商类型和身份提供商名称（例如：saml-provider/AzureAD）。
             * @example `28877424437521****`
             */
            AuthPrincipalDisplayName: string;
        };
        /**
         * 用户请求中用于鉴权的条件列表。
         */
        AuthConditions: {
            /**
             * 鉴权条件Key。
             * @example `acs:SourceIp`
             */
            ConditionKey: string;
            /**
             * 鉴权条件Key对应的值列表。
             */
            ConditionValues: string[];
        }[];
        /**
         * 鉴权命中的策略列表。
         */
        MatchedPolicies: {
            /**
             * 策略效果。
             * @example `Deny`
             */
            Effect: string;
            /**
             * 策略名称信息。具体如下：
             * - 管控策略：管控策略ID。
             * - RAM权限策略：权限策略名称。
             * @example `MyPolicyName`
             */
            PolicyIdentifier: string;
            /**
             * 策略类型。
             * @example `Custom`
             */
            PolicyType: string;
            /**
             * 策略版本号。
             * > 仅自定义策略有版本号。
             * @example `v1`
             */
            PolicyVersion: string;
            /**
             * 策略授权的实体类型。
             * @example `RamUser`
             */
            AttachedEntityType: string;
            /**
             * 策略授权范围。
             * @example `Account`
             */
            AttachedScope: string;
        }[];
    };
}
