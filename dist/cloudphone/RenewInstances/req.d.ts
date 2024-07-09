export interface RenewInstancesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 续费实例列表。列表最大 20 个元素
     * @example `cp-xxxx`
     */
    "InstanceId": string[];
    /**
     * 周期，默认值1
     * @example `1`
     */
    "Period"?: number;
    /**
     * 续费周期单位，支持
     * - Year 包年包月，支持年：1, 2, 3, 4, 5
     * - Month 包年包月，支持月：1, 2, 3, 6
     * - Hour 按量，支持小时：1
     * 默认Month
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 自动支付，默认true
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见如何保证幂等性。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    "ClientToken"?: string;
}
