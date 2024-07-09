export interface CreateProblemRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 故障名称
         * @example `故障A`
         */
        problemName: string;
        /**
         * 幂等校验token
         * @example `E789D869-DB13-4913-BAA8-A1F56F94B94D`
         */
        clientToken: string;
        /**
         * 	故障状态 HANDLING 处理中 RECOVERED 已恢复 REPLAYING 复盘中 REPLAYED 已复盘 CANCEL 已取消
         * @example `HANDLING`
         */
        problemStatus: string;
        /**
         * 	故障等级 1=P1 2=P2 3=P3 4=P4
         * @example `P2`
         */
        problemLevel: string;
        /**
         * 进展摘要
         * @example `进展摘要`
         */
        progressSummary: string;
        /**
         * 服务Id
         * @example `123122`
         */
        relatedServiceId: number;
        /**
         * 主要处理人
         * @example `32121`
         */
        mainHandlerId: number;
        /**
         * 初步原因
         * @example `初步原因`
         */
        preliminaryReason: string;
        /**
         * 发现时间 (XXXX-XX-XX 00:00:00)
         * @example `2020-10-02 00:00:00`
         */
        discoverTime: string;
        /**
         * 恢复时间
         * @example `2020-10-02 00:00:00`
         */
        recoveryTime: string;
        /**
         * 影响服务列表
         */
        affectServiceIds: number[];
        /**
         * 应急协同组
         */
        serviceGroupIds: number[];
        /**
         * 事件Id
         * @example `123221`
         */
        incidentId: number;
        /**
         * 通告类型
         * @example `PROBLEM_NOTIFY`
         */
        problemNotifyType: string;
        /**
         * 进展描述富文本ID
         * @example `343`
         */
        progressSummaryRichTextId: number;
    };
}
