export interface ListFunctionsRequest {
    /**
     * 项目名称。
     * @example `odps_project`
     */
    "projectName": string;
    /**
     * schema名称。
     * @example `default`
     */
    "schemaName"?: string;
    /**
     * 限定返回的资源名称，名称必须以Prefix作为前缀，例如Prefix是a，则返回的资源名均是以a开始的。
     * @example `a`
     */
    "prefix"?: string;
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
