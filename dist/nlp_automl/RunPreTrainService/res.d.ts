export interface RunPreTrainServiceResponse {
    /**
     * 模型预测结果。
     * @example `{"cost":"21.812ms","imprs":[{"aspect":"款式","clause":"这件衣服真好看","neg_prob":0.0,"pos_prob":0.566100001335144,"position":"0,7","sentiment":"正"}]},"message":"SUCCESS","tracerId":"7973b50e31dcbea8323460e0134d3226"}`
     */
    PredictResult: string;
    /**
     * 请求ID。
     * @example `7310FFCF-9FE8-4257-AE38-0E1AD828C2CC`
     */
    RequestId: string;
    /**
     * 计费次数，对应抵扣资源包数量
     * @example `1`
     */
    BillingCount: number;
}
