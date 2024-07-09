export interface CreateHotParamItemsRequest {
    /**
     * 热点规则ID
     * @example `123`
     */
    "RuleId": number;
    /**
     * 热点例外项
     * @example `[{"itemType":"String","itemValue":"apple","threshold":50.0},{"itemType":"String","itemValue":"orange","threshold":20.0}]`
     */
    "Items": string;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
