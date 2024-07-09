export interface DescribePropertyCronItemRequest {
    /**
     * 设置是否强制刷新待查询数据。取值：
     * - **true**：强制刷新
     * - **false**：不强制刷新
     * @example `false`
     */
    "ForceFlush"?: boolean;
    /**
     * 要查询的任务路径。
     * @example `/data`
     */
    "Source"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * @example `20`
     */
    "PageSize"?: number;
}
