export interface GetProblemPreviewRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 故障id
         * @example `12312`
         */
        problemId: number;
        /**
         * 通告类型 PROBLEM_NOTIFY：故障通告 PROBLEM_UPDATE：故障更新 PROBLEM_UPGRADE：故障升级 PROBLEM_DEGRADE：故障降级 PROBLEM_RECOVER：故障恢复 PROBLEM_REISSUE：
         * 故障补发 PROBLEM_CANCEL：故障取消
         * @example `PROBLEM_NOTIFY`
         */
        problemNotifyType: string;
        /**
         * 故障等级
         * @example `P2`
         */
        problemLevel: string;
        /**
         * 影响服务
         */
        effectServiceIds: number[];
        /**
         * 关联服务Id
         * @example `21312`
         */
        relatedServiceId: number;
        /**
         * 事件id
         * @example `213123`
         */
        incidentId: number;
        /**
         * 协同组Id
         */
        serviceGroupIds: number[];
        /**
         * 幂等Token
         * @example `4361a0e1-6747-4834-96ce-0c4840f13812`
         */
        clientToken: string;
    };
}
