export interface GetProblemResponse {
    /**
     * 详情
     */
    data: {
        /**
         * ID
         * @example `1`
         */
        problemId: number;
        /**
         * 创建时间
         * @example `2010-03-09 15:53:45`
         */
        createTime: string;
        /**
         * 事件编号
         * @example `I3443835000012016260833157948165`
         */
        incidentNumber: string;
        /**
         * 事件id
         * @example `130000032`
         */
        incidentId: number;
        /**
         * 故障编号
         * @example `P34438300010030116260833538987481`
         */
        problemNumber: string;
        /**
         * 故障名称
         * @example `故障`
         */
        problemName: string;
        /**
         * 故障状态
         * HANDLING 处理中
         * RECOVERED 已恢复
         * REPLAYING 复盘中
         * REPLAYED 已复盘
         * CANCEL 已取消
         * @example `HANDLING`
         */
        problemStatus: number;
        /**
         * 故障等级 1=P1 2=P2 3=P3 4=P4
         * @example `P1`
         */
        problemLevel: number;
        /**
         * 发现时间
         * @example `2010-03-09 15:53:45`
         */
        discoverTime: string;
        /**
         * 恢复时间
         * @example `2010-03-09 15:53:45`
         */
        recoveryTime: string;
        /**
         * 关联服务ID
         * @example `1`
         */
        relatedServiceId: number;
        /**
         * 关联服务名称
         * @example `服务`
         */
        serviceName: string;
        /**
         * 进展摘要
         * @example `进展摘要`
         */
        progressSummary: string;
        /**
         * 初步原因
         * @example `初步原因`
         */
        preliminaryReason: string;
        /**
         * 主要处理人
         * @example `小王`
         */
        mainHandler: number;
        /**
         * 主要处理人ID
         * @example `2000`
         */
        mainHandlerId: number;
        /**
         * 主要处理人手机号
         * @example `1308987****`
         */
        mainHandlerPhone: string;
        /**
         * 舆情反馈
         * @example `feedback`
         */
        feedback: string;
        /**
         * 取消原因描述
         * @example `取消原因描述`
         */
        cancelReasonDescription: string;
        /**
         * 取消原因
         * @example `取消原因`
         */
        cancelReason: number;
        /**
         * 持续时间
         * @example `300000`
         */
        durationTime: number;
        /**
         * 进展摘要富文本id
         * @example `1231231`
         */
        progressSummaryRichTextId: number;
        /**
         * 处理中故障操作日志
         */
        handingProblemOperateLogs: {
            /**
             * 操作人
             * @example `小王`
             */
            operator: string;
            /**
             * 用户id
             * @example `233`
             */
            userId: number;
            /**
             * 动作名称
             * @example `取消故障`
             */
            actionName: string;
            /**
             * 操作名称
             * @example `2010-03-09 15:53:45`
             */
            actionTime: string;
            /**
             * 用户是否合法
             * @example `1`
             */
            userIsValid: number;
        }[];
        /**
         * 已恢复故障操作日志
         */
        restoredProblemOperateLogs: {
            /**
             * 操作人
             * @example `小王`
             */
            operator: string;
            /**
             * 用户id
             * @example `3232`
             */
            userId: number;
            /**
             * 动作名称
             * @example `恢复故障`
             */
            actionName: string;
            /**
             * 操作名称
             * @example `2020-08-08 15:39:39`
             */
            actionTime: string;
            /**
             * 用户是否合法
             * @example `1`
             */
            userIsValid: number;
        }[];
        /**
         * 复盘中故障操作日志
         */
        replayingProblemOperateLogs: {
            /**
             * 操作人
             * @example `小杰`
             */
            operator: string;
            /**
             * 用户id
             * @example `用户id`
             */
            userId: number;
            /**
             * 动作名称
             * @example `复盘故障`
             */
            actionName: string;
            /**
             * 操作名称
             * @example `2020-08-08 15:39:39`
             */
            actionTime: string;
            /**
             * 用户是否合法
             * @example `1`
             */
            userIsValid: number;
        }[];
        /**
         * 已复盘故障操作日志
         */
        replayProblemOperateLogs: {
            /**
             * 操作人
             * @example `小王`
             */
            operator: string;
            /**
             * 用户id
             * @example `2323`
             */
            userId: number;
            /**
             * 动作名称
             * @example `复盘故障`
             */
            actionName: string;
            /**
             * 操作名称
             * @example `2020-08-08 15:39:39`
             */
            actionTime: string;
            /**
             * 用户是否合法
             * @example `1`
             */
            userIsValid: number;
        }[];
        /**
         * 影响服务
         */
        effectionServices: {
            /**
             * 服务ID
             * @example `1`
             */
            effectionServiceId: number;
            /**
             * 影响等级 P1 . P2 P3 P4
             * @example `P1`
             */
            effectionLevel: number;
            /**
             * 影响服务状态  RECOVERED 已经恢复 ,UN_RECOVERED 未恢复
             * @example `RESTORED`
             */
            effectionStatus: number;
            /**
             * 影响描述
             * @example `描述`
             */
            description: string;
            /**
             * 服务名称
             * @example `购物车`
             */
            serviceName: string;
            /**
             * 服务删除字段 1正常 0删除
             * @example `1`
             */
            serviceDeleteType: number;
        }[];
        /**
         * 应急协同组
         */
        coordinationGroups: {
            /**
             * 服务组ID
             * @example `1`
             */
            serviceGroupId: number;
            /**
             * 服务组名字
             * @example `冲上云霄`
             */
            serviceGroupName: string;
            /**
             * 是否合法
             * @example `1`
             */
            isValid: number;
        }[];
        /**
         * 故障操作时间线
         */
        timelines: {
            /**
             * 关键节点码表：PROBLEM_KEY_NODE (逗号分隔)
             * @example `1,2,3,4,5,7,6,8,9,10`
             */
            keyNode: string;
        }[];
        /**
         * 已取消故障操作日志
         */
        cancelProblemOperateLogs: {
            /**
             * 操作人
             * @example `小王`
             */
            operator: string;
            /**
             * 动作名称
             * @example `取消故障`
             */
            actionName: string;
            /**
             * 操作时间
             * @example `2020-09-08 15:38:38`
             */
            actionTime: string;
            /**
             * 用户ID
             * @example `66666`
             */
            userId: number;
        }[];
        /**
         * serviceDeleteType
         * @example `1`
         */
        serviceDeleteType: number;
        /**
         * 主要处理人生效状态，1生效，0失效
         * @example `1`
         */
        mainHandlerIsValid: number;
        /**
         * 是否规则触发 1 是 0不是
         * @example `1`
         */
        isRuleTrigger: boolean;
    };
    /**
     * 请求ID
     * @example `C4BE3837-1A13-41VB-A225-2C88188E8A43`
     */
    requestId: string;
}
