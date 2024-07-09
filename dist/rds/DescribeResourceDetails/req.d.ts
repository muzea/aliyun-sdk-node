export interface DescribeResourceDetailsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 地域ID。可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `rm-bp1ul2y10grt91m68`
     */
    "DBInstanceId": string;
    /**
     * 资源组ID。
     * @example `rg-acfm3kyoa2wqhyy`
     */
    "ResourceGroupId"?: string;
}
