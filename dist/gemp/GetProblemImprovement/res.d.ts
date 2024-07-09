export interface GetProblemImprovementResponse {
    /**
     * Id of the request
     * @example `4361a0e1-6747-4834-96ce-0c4840fd3811`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 故障ID
         * @example `231231`
         */
        problemId: string;
        /**
         * 故障原因
         * @example `故障的原因`
         */
        problemReason: string;
        /**
         * 最近活动码表：PROBLEM_RECENT_ACTIVITY
         * @example `2`
         */
        recentActivity: string;
        /**
         * 注入方式码表：PROBLEM_INJECTION_MODE
         * @example `3`
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
        discoverSource: string;
        /**
         * 用户上报码表：PROBLEM_USER_REPORT
         * @example `1`
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
         * @example `231`
         */
        dutyUserId: number;
        /**
         * 复盘负责人id
         * @example `23123`
         */
        replayDutyUserId: number;
        /**
         * 复盘负责人手机号
         * @example `1308787****`
         */
        replayDutyUserPhone: string;
        /**
         * 故障责任部门
         * @example `12312`
         */
        dutyDepartmentId: string;
        /**
         * 故障责任人名称
         * @example `小明`
         */
        dutyUserName: string;
        /**
         * 故障责任人手机号
         * @example `13098898****`
         */
        dutyUserPhone: string;
        /**
         * 复盘负责人名称
         * @example `小花`
         */
        replayDutyUserName: string;
        /**
         * 备注
         * @example `备注`
         */
        remark: string;
        /**
         * 是否手动
         * @example `true`
         */
        isManual: boolean;
        /**
         * 故障责任部门名称
         * @example `服务组B`
         */
        dutyDepartmentName: string;
        /**
         * 改进措施列表
         */
        measureList: {
            /**
             * 改进措施ID用于删除或更新
             * @example `12312`
             */
            measureId: number;
            /**
             * 措施类型码表PROBLEM_REPLAY_IMPROVEMENT
             * @example `2`
             */
            type: number;
            /**
             * 措施内容
             * @example `内容A`
             */
            content: string;
            /**
             * 验收标准
             * @example `验收标准A`
             */
            checkStandard: string;
            /**
             * 验收人id
             * @example `12`
             */
            checkUserId: number;
            /**
             * 验收人名称
             * @example `小军`
             */
            checkUserName: string;
            /**
             * 负责人名称
             * @example `小张`
             */
            directorName: string;
            /**
             * 跟踪人名称
             * @example `小李`
             */
            stalkerName: string;
            /**
             * 计划完成时间
             * @example `2021-05-01 00:00:00`
             */
            planFinishTime: string;
            /**
             * 负责人id
             * @example `212`
             */
            directorId: number;
            /**
             * 跟踪人id
             * @example `3121`
             */
            stalkerId: number;
            /**
             * UNIMPROVED	状态 IMPROVED 改进 2 未改进UNIMPROVED
             * @example `UNIMPROVED`
             */
            status: string;
            checkUserIsValid: number;
            directorIsValid: number;
            stalkerIsValid: number;
        }[];
        customProblemReason: string;
        replayDutyUserIsValid: number;
        dutyUserIsValid: number;
    };
}
