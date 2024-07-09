export interface GetTrainModelResponse {
    /**
     * 请求ID。
     * @example `63CB30AA-224C-05CA-B9EB-24CEA68B5E71`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * JSON串，返回模型效果信息。
         * @example `[     {         "id":"TOP1_ACC",         "name":"top1准确率",         "value":100     },     {         "id":"TOP5_ACC",         "name":"top5准确率",         "value":100     }`
         */
        SimpleEvaluate: number;
    };
}
