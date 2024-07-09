export interface ListSimQuestionResponse {
    /**
     * 请求ID
     * @example `15CD94CC-CBEB-4189-806C-A132D1F45D51`
     */
    RequestId: string;
    /**
     * 相似问列表
     */
    SimQuestions: {
        /**
         * 相似问ID
         * @example `30001979424`
         */
        SimQuestionId: number;
        /**
         * 修改时间（UTC 时间）
         * @example `2022-05-13T03:49:28Z`
         */
        ModifyTime: string;
        /**
         * 创建时间（UTC 时间）
         * @example `2022-05-30T02:08:33Z`
         */
        CreateTime: string;
        /**
         * 相似问标题
         * @example `相似问`
         */
        Title: string;
    }[];
}
