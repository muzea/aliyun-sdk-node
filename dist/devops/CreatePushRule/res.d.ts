export interface CreatePushRuleResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 推送规则ID
         * @example `2077`
         */
        id: number;
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
             * @example `ForcePushChecker`
             */
            checkerName: string;
            /**
             * 该字段作用于代码属主检查下的限制级别设置，仅检查作者和检查提交者有效，其他规则可不传值，可选值：
             * - warn：仅警告，允许推送
             * - block：禁止推送
             * @example `warn`
             */
            checkerType: string;
            /**
             * 在提交说明、提交邮箱、检查作者、检查提交人以及禁止强制推送时有效：
             * - 提交说明规则，extraMessage传入检查的正则表达式
             * - 提交邮箱规则，extraMessage传入检查的邮箱正则表示
             * - 禁止强制推送，extraMessage传入 "disabled"
             * - 检查作者规则，extraMessage传入 "on"，若不需要则不传值
             * - 检查提交人规则，extraMessage传入 "on"，若不需要则不传值
             * @example `disabled`
             */
            extraMessage: string;
            /**
             * 该字段仅作用于提交文件限制，传入正则表达式，支持多条正则限制
             */
            fileRuleRegexes: string[];
        }[];
        /**
         * 创建时间
         * @example `2023-09-03T18:20:06+08:00`
         */
        gmtCreate: string;
        /**
         * 修改时间
         * @example `2023-09-03T18:20:06+08:00`
         */
        gmtModified: string;
    };
}
