export interface DeleteRankingModelResponse {
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
         * 模型Meta原信息。
         */
        meta: any;
    };
    /**
     * 错误码。
     * @example `200`
     */
    code: string;
    /**
     * 请求ID。
     * @example `D486768B-8BF8-4D80-B491-43DC3D0AF8AB`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    message: string;
}
