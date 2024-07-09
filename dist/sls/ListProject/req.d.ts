export interface ListProjectRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "projectName"?: string;
    /**
     * 查询开始行，默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。默认值为100，最多返回500个Project信息。
     * @example `10`
     */
    "size"?: number;
    /**
     * 资源组ID。
     * @example `rg-aekzf******sxby`
     */
    "resourceGroupId"?: string;
    "fetchQuota"?: boolean;
}
