export interface DescribeAntChainsV2Request {
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页号
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId": string;
}
