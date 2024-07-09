export interface DescribeTagsResponse {
    /**
     * 返回数据总量。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 页面大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `9EA7F720-B7C0-45C1-9CF4-B6A5A1179B68`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 资源标签列表。
     */
    Tags: {
        /**
         * 资源标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值列表。
         */
        Values: string[];
    }[];
}
