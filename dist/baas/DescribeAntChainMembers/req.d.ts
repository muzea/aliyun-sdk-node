export interface DescribeAntChainMembersRequest {
    /**
     * 页面包含条例数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页面编号
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 联盟ID
     * @example `q0oWq92P`
     */
    "ConsortiumId": string;
}
