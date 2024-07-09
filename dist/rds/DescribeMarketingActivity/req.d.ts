export interface DescribeMarketingActivityRequest {
    /**
     * 地域ID。可调用[DescribeRegions](~~26243~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * - 国内：26842
     * - 国际：26888
     * @example `26842`
     */
    "Bid"?: string;
    /**
     * 产品名称。
     * @example `series`
     */
    "UpgradeCode": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 阿里云账号ID。
     * @example `20725049`
     */
    "AliUid": number;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
