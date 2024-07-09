export interface InsertScoreForApiResponse {
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID
     * @example `96138D8D-8D26-4E41-BFF4-77AED1088BBD`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：**true**表示成功；**false/null**表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 用户信息
     */
    Data: {
        /**
         * 评分ID
         * @example `5728`
         */
        ScoreId: number;
        /**
         * 评分大项名称
         * @example `评分大项`
         */
        ScoreName: string;
    };
}
