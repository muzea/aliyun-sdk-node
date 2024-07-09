export interface DescribeGroupedTagsResponse {
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `151F6EB6-D5F3-417A-AF7B-4D84975DB586`
     */
    RequestId: string;
    /**
     * 数据请求是否成功。取值：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 该参数已废弃，无需关注。
     * @example `0`
     */
    Count: number;
    /**
     * 资产标签的统计信息。
     */
    GroupedFileds: {
        /**
         * 标签名称。
         * @example `InternetIp`
         */
        Name: string;
        /**
         * 标签对应的资产数量。
         * @example `152`
         */
        Count: string;
        /**
         * 标签ID。
         * @example `3252366`
         */
        TagId: number;
    }[];
}
