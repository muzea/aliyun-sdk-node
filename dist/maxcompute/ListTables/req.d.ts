export interface ListTablesRequest {
    /**
     * MaxCompute项目名称。
     * @example `projectA`
     */
    "projectName": string;
    /**
     * 限定返回的资源名称，名称必须以Prefix作为前缀，例如Prefix是a，则返回的资源名均是以a开始的。
     * @example `a`
     */
    "prefix"?: string;
    /**
     * 设定结果从marker之后按字母排序的第一个开始返回。
     * @example `Y29tbWlzc2lvbl9leHRlcm5hbF91cmdlXzFfd3Ih`
     */
    "marker"?: string;
    /**
     * 每页返回的最大结果数。
     * @example `10`
     */
    "maxItem"?: number;
    /**
     * 表类型。
     * @example `internal`
     */
    "type"?: string;
    /**
     * Schema名称。
     * @example `default`
     */
    "schemaName"?: string;
}
