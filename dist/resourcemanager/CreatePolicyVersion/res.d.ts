export interface CreatePolicyVersionResponse {
    /**
     * 权限策略版本信息。
     */
    PolicyVersion: {
        /**
         * 是否为权限策略默认版本。
         * @example `false`
         */
        IsDefaultVersion: boolean;
        /**
         * 权限策略版本标识。
         * @example `v3`
         */
        VersionId: string;
        /**
         * 权限策略版本创建时间。
         * @example `2015-01-23T12:33:18`
         */
        CreateDate: string;
    };
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
}
