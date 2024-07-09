export interface GetCommercialStatusRequest {
    /**
     * 地域ID。例如cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 商品Code：
     * - arms_app_post
     * - arms_web_post
     * - arms_promethues_public_cn
     * - prometheus_pay_public_cn
     * - xtrace
     * - arms_serverless_public_cn
     * - arms_rumserverless_public_cn
     * - prometheus_serverless_public_cn
     * - xtrace_serverless_public_cn
     * @example `arms_app_post`
     */
    "CommodityCode": string;
}
