export interface CreatePolicyVersionResponse {
    /**
     * 新建的权限策略版本的信息。
     */
    PolicyVersion: {
        /**
         * 是否默认版本。
         * @example `false`
         */
        IsDefaultVersion: boolean;
        /**
         * 权限策略内容。
         * @example `{ "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}`
         */
        PolicyDocument: string;
        /**
         * 权限策略标识。
         * @example `v3`
         */
        VersionId: string;
        /**
         * 创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
    };
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
}
