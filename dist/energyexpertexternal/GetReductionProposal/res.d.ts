export interface GetReductionProposalResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 主动减碳建议
         * @example `主动减碳建议的文本`
         */
        reduction: string;
        /**
         * 主动减碳评估
         * @example `主动减碳评估的文本`
         */
        reductionEvaluation: string;
    };
}
