export interface ListSavedSearchRequest {
    /**
     * Project名称。
     * @example `aliyun-test-project`
     */
    "project": string;
    /**
     * 查询开始行。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。最大值为500。
     * @example `10`
     */
    "size"?: number;
}
