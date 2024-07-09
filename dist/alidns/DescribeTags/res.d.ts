export interface DescribeTagsResponse {
    /**
     * 总计数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 分页数，默认值：200。
     * @example `200`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `89184F33-48A1-4401-9C0F-40E45DB091AB`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 标签列表。
     */
    Tags: {
        /**
         * 标签键。
         * @example `abc`
         */
        Key: string;
        /**
         * 标签值列表。
         */
        Values: string[];
    }[];
}
