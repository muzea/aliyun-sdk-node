export interface GetScoreInfoResponse {
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `106C6CA0-282D-4AF7-85F0-D2D24***`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 详细返回数据。
         */
        ScorePo: {
            /**
             * 评分大项ID。
             * @example `34`
             */
            ScoreId: number;
            /**
             * 评分大项名称。
             * @example `服务规范`
             */
            ScoreName: string;
            ScoreInfos: {
                /**
                 * 评分小项信息。
                 */
                ScoreParam: {
                    /**
                     * 评分小项名称。
                     * @example `回复生硬`
                     */
                    ScoreSubName: string;
                    /**
                     * 分数值。
                     * @example `32`
                     */
                    ScoreNum: number;
                    /**
                     * 评分小项ID。
                     * @example `3422`
                     */
                    ScoreSubId: number;
                    /**
                     * 分值类型，加分或减分，可能值：1加分；3减分。
                     * @example `1`
                     */
                    ScoreType: number;
                }[];
            };
        }[];
    };
}
