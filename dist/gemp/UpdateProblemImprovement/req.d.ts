export interface UpdateProblemImprovementRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障ID
         * @example `12312`
         */
        problemId: number;
        /**
         * 故障原因
         * @example `故障原因A`
         */
        problemReason: string;
        /**
         * 最近活动码表：PROBLEM_RECENT_ACTIVITY
         * @example `2`
         */
        recentActivity: string;
        /**
         * 注入方式码表：PROBLEM_INJECTION_MODE
         * @example `1`
         */
        injectionMode: string;
        /**
         * 恢复方式码表：PROBLEM_RECOVERY_MODE
         * @example `2`
         */
        recoveryMode: string;
        /**
         * 发现来源码表：PROBLEM_DISCOVER_SOURCE
         * @example `1`
         */
        discoverSource: number;
        /**
         * 用户上报码表：PROBLEM_USER_REPORT
         * @example `10`
         */
        userReport: number;
        /**
         * 监控源
         * @example `Zabbix`
         */
        monitorSourceName: string;
        /**
         * 关联变更
         * @example `关联变更`
         */
        relationChanges: string;
        /**
         * 故障责任人id
         * @example `1231`
         */
        dutyUserId: number;
        /**
         * 复盘负责人id
         * @example `1213`
         */
        replayDutyUserId: number;
        /**
         * 部门名称
         * @example `服务组A`
         */
        dutyDepartmentName: string;
        /**
         * 部门Id（服务组Id）
         * @example `123123`
         */
        dutyDepartmentId: number;
        /**
         * 备注
         * @example `备注`
         */
        remark: string;
        /**
         * 幂等校验
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3813`
         */
        clientToken: string;
        customProblemReason: string;
    };
}
