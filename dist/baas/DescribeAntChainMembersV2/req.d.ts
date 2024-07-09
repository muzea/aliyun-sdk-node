export interface DescribeAntChainMembersV2Request {
    /**
     * 页面包含条例数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页面编号，从1开始
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId": string;
}
