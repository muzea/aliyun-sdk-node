export interface CreateProtectdBranchResponse {
    /**
     * 请求ID
     * @example `C2F153F6-BB43-50C4-9F4F-40593203E19A`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 保护分支规则ID
         * @example `5240`
         */
        id: number;
        /**
         * 保护分支名称
         * @example `protectBranch`
         */
        branch: string;
        /**
         * 允许推送角色列表
         */
        allowPushRoles: number[];
        /**
         * 允许推送用户ID列表
         */
        allowPushUserIds: number[];
        /**
         * 允许合并角色列表
         */
        allowMergeRoles: number[];
        /**
         * 允许合并用户ID
         */
        allowMergeUserIds: number[];
        /**
         * 合并前的代码评审设置
         */
        mergeRequestSetting: {
            /**
             * 是否开启
             * @example `true`
             */
            isRequired: boolean;
            /**
             * 评审模式
             * - general：普通
             * - codeowner：CodeOwner模式
             * @example `general`
             */
            mrMode: string;
            /**
             * 是否允许创建者通过代码评审
             * @example `true`
             */
            isAllowSelfApproval: boolean;
            /**
             * 是否要求评审全部已解决
             * @example `true`
             */
            isRequireDiscussionProcessed: boolean;
            /**
             * 是否在有新的提交时重置评审
             * @example `false`
             */
            isResetApprovalWhenNewPush: boolean;
            /**
             * 评审通过的最少人数
             * 注：仅普通模式生效
             * @example `1`
             */
            minimumApproval: number;
            /**
             * 允许合并请求角色列表
             */
            allowMergeRequestRoles: number[];
            /**
             * 默认评审人ID
             */
            defaultAssignees: string[];
            /**
             * 评审文件白名单
             * 注意：加入白名单的文件不受「评审通过的最少人数」限制，无需强制人工评审
             * @example `**.java`
             */
            whiteList: string;
        };
        /**
         * 合并前的自动化状态检查设置
         */
        testSettingDTO: {
            /**
             * 是否开启
             * @example `false`
             */
            isRequired: boolean;
            /**
             * 代码规约扫描
             */
            codeGuidelinesDetection: {
                /**
                 * 是否开启
                 * @example `false`
                 */
                enabled: boolean;
                /**
                 * 描述信息
                 * @example `test_code_guide_lines`
                 */
                message: string;
            };
            /**
             * 敏感信息扫描
             */
            sensitiveInfoDetection: {
                /**
                 * 是否开启
                 * @example `false`
                 */
                enabled: boolean;
                /**
                 * 描述信息
                 * @example `test_code_sensitive_info`
                 */
                message: string;
            };
            /**
             * 代码质量检测
             */
            checkTaskQualityConfig: {
                /**
                 * 是否开启
                 * @example `false`
                 */
                enabled: boolean;
                /**
                 * 任务流水号
                 * @example `123456`
                 */
                bizNo: string;
                /**
                 * 任务名称
                 * @example `biz-task-quality`
                 */
                taskName: string;
                /**
                 * 描述信息
                 * @example `test_task_quality`
                 */
                message: string;
            };
            /**
             * MR卡点流水线配置
             */
            checkConfig: {
                /**
                 * 配置项列表
                 */
                checkItems: {
                    /**
                     * 流水线名称
                     * @example `测试流水线`
                     */
                    name: string;
                    /**
                     * 是否卡点
                     * @example `false`
                     */
                    isRequired: boolean;
                }[];
            };
        };
    };
}
