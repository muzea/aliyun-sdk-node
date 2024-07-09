export interface DescribeTrafficControlsRequest {
    /**
     * 流控策略ID
     * @example `tf123456`
     */
    "TrafficControlId"?: string;
    /**
     * 指定的分组编号，必须和**ApiId**、**StageName**一起查询
     * @example `0009db9c828549768a200320714b8930`
     */
    "GroupId"?: string;
    /**
     * 指定的API编号，必须和**GroupId**、**StageName**一起查询
     * @example `3b81fd160f5645e097cc8855d75a1cf6`
     */
    "ApiId"?: string;
    /**
     * 环境名称，必须和**GroupId**、**ApiId**一起查询 ，可选值：
     * - **RELEASE**：线上
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName"?: string;
    /**
     * 流控策略名称
     * @example `流控测试`
     */
    "TrafficControlName"?: string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
}
