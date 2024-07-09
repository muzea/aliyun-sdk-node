export interface AssessCompositionResponse {
    /**
     * 请求ID。
     * @example `CCAD9435-AEDB-49E4-BCCC-99B65ECC6693`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 图像构图美学评分，取值0~5。评分越高，构图效果越好，推荐评分3.8以上为较好构图得分。
         * @example `4.2551436`
         */
        Score: number;
    };
}
