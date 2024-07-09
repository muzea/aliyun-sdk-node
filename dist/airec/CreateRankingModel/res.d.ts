export interface CreateRankingModelResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 排序模型ID。
         * @example `testRankingId`
         */
        rankingModelId: string;
        /**
         * 最后修改时间的UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtModified: string;
        /**
         * 创建时间的UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: string;
        /**
         * 模型Meta原信息。
         * @example `map`
         */
        meta: any;
    };
    /**
     * 状态码。
     * @example `200`
     */
    code: string;
    /**
     * 请求ID。
     * @example `829F38F6-E2D6-4109-90A6-888160BD16C2`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `success`
     */
    message: string;
}
