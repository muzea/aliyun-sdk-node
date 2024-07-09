export interface GetPolicyResponse {
    /**
     * 权限策略的基本信息。
     */
    Policy: {
        /**
         * 默认版本。
         * @example `v1`
         */
        DefaultVersion: string;
        /**
         * 修改时间。
         * @example `2015-01-23T12:33:18Z`
         */
        UpdateDate: string;
        /**
         * 权限策略描述。
         * @example `OSS管理员权限`
         */
        Description: string;
        /**
         * 已废弃。
         * @example `N/A`
         */
        PolicyDocument: string;
        /**
         * 引用次数。
         * @example `0`
         */
        AttachmentCount: number;
        /**
         * 权限策略名称。
         * @example `OSS-Administrator`
         */
        PolicyName: string;
        /**
         * 创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * 权限策略类型。
         * @example `Custom`
         */
        PolicyType: string;
    };
    /**
     * 请求ID。
     * @example `697852FB-50D7-44D9-9774-530C31EAC572`
     */
    RequestId: string;
    /**
     * 权限策略的默认版本。
     */
    DefaultPolicyVersion: {
        /**
         * `DefaultPolicyVersion`返回的数据结构固定为默认版本，因此`IsDefaultVersion`的取值固定为`true`。
         * @example `true`
         */
        IsDefaultVersion: boolean;
        /**
         * 权限策略内容。
         * @example `{ "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}`
         */
        PolicyDocument: string;
        /**
         * 权限策略版本。
         * @example `v1`
         */
        VersionId: string;
        /**
         * 创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
    };
}
