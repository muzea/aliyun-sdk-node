export interface UpdatePushRuleRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2709413`
     */
    "repositoryId": number;
    /**
     * 推送规则ID
     * @example `2077`
     */
    "pushRuleId": number;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 规则信息列表
         */
        ruleInfos: {
            /**
             * 规则名称，可选值：
             * - CommitMessageChecker：提交说明规则
             * - CommitAuthorEmailChecker：提交邮箱规则
             * - CommitAuthorChecker：提交作者检查
             * - CommitCommitterChecker：提交人检查
             * - ForcePushChecker：禁止强制推送检查
             * - CommitFilesChecker：提交文件限制规则
             * @example `CommitAuthorChecker`
             */
            checkerName: string;
            /**
             * 在提交说明、提交邮箱、检查作者、检查提交人以及禁止强制推送时有效：
             * - 提交说明规则，extraMessage传入检查的正则表达式
             * - 提交邮箱规则，extraMessage传入检查的邮箱正则表示
             * - 禁止强制推送，extraMessage传入 "disabled"
             * - 检查作者规则，extraMessage传入 "on"，若不需要则不传值
             * - 检查提交人规则，extraMessage传入 "on"，若不需要则不传值
             * @example `on`
             */
            extraMessage: string;
            /**
             * 该字段作用于代码属主检查下的限制级别设置，仅检查作者和检查提交者有效，其他规则可不传值，可选值：
             * - warn：仅警告，允许推送
             * - block：禁止推送
             * @example `warn`
             */
            checkerType: string;
            /**
             * 该字段仅作用于提交文件限制，传入正则表达式，支持多条正则限制
             */
            fileRuleRegexes: string[];
        }[];
    };
}
