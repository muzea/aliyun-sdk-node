export interface GetDirectoryStatisticsResponse {
    /**
     * 请求ID。
     * @example `7B7228B0-A435-5D27-A6B2-ED3571F0654B`
     */
    RequestId: string;
    /**
     * 目录的统计信息。
     */
    DirectoryStatistics: {
        /**
         * 用户数量。
         * @example `16`
         */
        UserCount: number;
        /**
         * 用户组数量。
         * @example `4`
         */
        GroupCount: number;
        /**
         * 用户配额。
         * @example `1000`
         */
        UserQuota: number;
        /**
         * 用户组配额。
         * @example `500`
         */
        GroupQuota: number;
        /**
         * 访问配置配额。
         * @example `1000`
         */
        AccessConfigurationQuota: number;
        /**
         * 授权数量。
         * @example `5`
         */
        AccessAssignmentCount: number;
        /**
         * SCIM同步密钥数量。
         * @example `2`
         */
        SCIMServerCredentialCount: number;
        /**
         * 目录ID。
         * @example `d-00fc2p61****`
         */
        DirectoryId: string;
        /**
         * 是否已启用SSO登录。取值：
         * - true：已启用。
         * - false：未启用。
         * @example `false`
         */
        SSOEnabled: boolean;
        /**
         * 目录所在的地域ID。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 访问配置数量。
         * @example `6`
         */
        AccessConfigurationCount: number;
        /**
         * 目录名称。
         * @example `new-example`
         */
        DirectoryName: string;
        /**
         * 执行中的任务数量。
         * @example `0`
         */
        InProgressTaskCount: number;
        /**
         * 是否已启用SCIM同步。取值：
         * - true：已启用。
         * - false：未启用。
         * @example `true`
         */
        SCIMSyncEnabled: boolean;
        /**
         * 访问配置绑定的系统策略配额。
         * @example `20`
         */
        SystemPolicyPerAccessConfigurationQuota: number;
        /**
         * 访问配置绑定的内置策略配额。
         * @example `1`
         */
        InlinePolicyPerAccessConfigurationQuota: number;
    };
}
