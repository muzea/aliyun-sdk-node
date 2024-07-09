export interface ListPolicyVersionsResponse {
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    PolicyVersions: {
        /**
         * 权限策略版本信息。
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
             * @example `2015-02-26T01:25:52Z`
             */
            CreateDate: string;
        }[];
    };
}
