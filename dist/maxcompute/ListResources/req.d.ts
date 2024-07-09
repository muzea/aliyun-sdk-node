export interface ListResourcesRequest {
    /**
     * MaxCompute项目名称
     * @example `projectA`
     */
    "projectName": string;
    /**
     * schema名称。
     * @example `default`
     */
    "schemaName"?: string;
    /**
     * 资源名称。
     * @example `res
    `
     */
    "name"?: string;
    /**
     * 设定结果从marker之后按字母排序的第一个开始返回。
     * @example `cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==`
     */
    "marker"?: string;
    /**
     * 每页返回的最大结果数。
     * @example `10`
     */
    "maxItem"?: number;
}
