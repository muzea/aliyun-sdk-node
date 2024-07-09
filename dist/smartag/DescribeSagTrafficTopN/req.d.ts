export interface DescribeSagTrafficTopNRequest {
    /**
     * 智能接入网关实例地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 查询智能接入网关实例的数量。默认值：**10**，且不支持修改。
     * @example `10`
     */
    "Size"?: number;
}
