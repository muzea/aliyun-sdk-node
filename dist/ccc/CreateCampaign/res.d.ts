export interface CreateCampaignResponse {
    /**
     * 请求ID。
     * @example `7CC6523B-0E51-1B62-8DA5-6A9831CAE315`
     */
    RequestId: string;
    /**
     * 预测式外呼活动ID。
     * @example `c58b9719-3bc3-441d-a4d3-fc0309ef7066`
     */
    Data: string;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
