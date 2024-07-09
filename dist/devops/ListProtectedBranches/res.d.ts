export interface ListProtectedBranchesResponse {
    /**
     * 请求ID
     * @example `313A1BF6-63B7-52D4-A098-952221A65254`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 保护分支规则ID
         * @example `19285`
         */
        id: number;
        /**
         * 保护分支名称
         * @example `protectedBranch`
         */
        branch: string;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 更新时间
         * @example `2022-03-18 14:24:54`
         */
        updatedAt: string;
        /**
         * 允许推送角色列表
         */
        allowPushRoles: number[];
        /**
         * 允许推送用户ID
         */
        allowPushUserIds: number[];
        /**
         * 允许推送的用户列表
         */
        allowPushUsers: {
            /**
             * Codeup的用户ID
             * @example `19238`
             */
            id: number;
            /**
             * 用户名称
             * @example `阿里云云效`
             */
            name: string;
            /**
             * 用户昵称
             * @example `codeup-test`
             */
            username: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatar: string;
        }[];
        /**
         * 允许合并角色列表
         */
        allowMergeRoles: number[];
        /**
         * 允许合并用户ID
         */
        allowMergeUserIds: number[];
        /**
         * 允许合并的用户信息列表
         */
        allowMergeUsers: {
            /**
             * Codeup的用户ID
             * @example `19238`
             */
            id: number;
            /**
             * 用户名称
             * @example `阿里云云效`
             */
            name: string;
            /**
             * 用户昵称
             * @example `codeup-test`
             */
            username: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatar: string;
        }[];
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
             * general：普通
             * codeowner：CodeOwner模式
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
             * 允许合并请求的角色列表
             */
            allowMergeRequestRoles: number[];
            /**
             * 默认评审人
             */
            defaultAssignees: {
                /**
                 * Codeup的用户ID
                 * @example `19238`
                 */
                id: number;
                /**
                 * 用户昵称
                 * @example `codeup-test`
                 */
                username: string;
                /**
                 * 用户名称
                 * @example `阿里云云效`
                 */
                name: string;
                /**
                 * 用户邮箱
                 * @example `username@example.com`
                 */
                email: string;
                /**
                 * 头像地址
                 * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
                 */
                avatar: string;
            }[];
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
                 * 配置项
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
        /**
         * 保护分支匹配列表
         */
        matches: string[];
    }[];
}
