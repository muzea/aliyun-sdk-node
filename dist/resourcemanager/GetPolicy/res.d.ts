export interface GetPolicyResponse {
    /**
     * 权限策略信息。
     */
    Policy: {
        /**
         * 权限策略默认版本。
         * @example `v1`
         */
        DefaultVersion: string;
        /**
         * 权限策略更新时间。
         * @example `2016-01-23T12:33:18Z`
         */
        UpdateDate: string;
        /**
         * 权限策略描述。
         * @example `OSS管理员权限`
         */
        Description: string;
        /**
         * 权限策略内容。
         * @example ` { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}`
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
         * 权限策略创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * 权限策略类型。取值：
         * - Custom：自定义策略。
         * - System：系统策略。
         * @example `Custom`
         */
        PolicyType: string;
    };
    /**
     * 请求ID。
     * @example `697852FB-50D7-44D9-9774-530C31EAC572`
     */
    RequestId: string;
}
