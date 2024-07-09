export interface UpdateProblemRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障id
         * @example `213432`
         */
        problemId: number;
        /**
         * 故障名称
         * @example `故障2`
         */
        problemName: string;
        /**
         * 故障等级
         * @example `P1`
         */
        level: string;
        /**
         * 关联服务
         * @example `123`
         */
        relatedServiceId: number;
        /**
         * 进展摘要
         * @example `进展摘要xxxx`
         */
        progressSummary: string;
        /**
         * 初步原因
         * @example `原因是服务宕机`
         */
        preliminaryReason: string;
        /**
         * 主要处理人
         * @example `678`
         */
        mainHandlerId: number;
        /**
         * 舆情反馈
         * @example `影响恶劣`
         */
        feedback: string;
        /**
         * 应急协同组
         */
        serviceGroupIds: number[];
        /**
         * 富文本字段id
         * @example `23232`
         */
        progressSummaryRichTextId: number;
    };
}
