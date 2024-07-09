export interface SearchTraceAppByPageRequest {
    /**
     * 应用名称。
     * @example `test-app`
     */
    "TraceAppName"?: string;
    /**
     * 查询结果的页码，如果不填写则默认为`1`。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询结果的每页项目数量，如果不填写则默认为`10`。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组 ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签的键(key)。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签的值(value)。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
