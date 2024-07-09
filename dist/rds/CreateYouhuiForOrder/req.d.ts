export interface CreateYouhuiForOrderRequest {
    /**
     * 创建的工单ID。
     * @example `1711510887086126`
     */
    "ActivityId": number;
    /**
     * 优惠ID。可通过GetResourcePrice接口获取。
     * @example `2000001996009`
     */
    "PromotionId": number;
    /**
     * 地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
