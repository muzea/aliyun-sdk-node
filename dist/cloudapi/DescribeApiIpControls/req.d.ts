export interface DescribeApiIpControlsRequest {
    /**
     * 指定要查询的环境。
     * - **RELEASE**: 线上
     * - **TEST**: 测试
     * @example `test`
     */
    "StageName": string;
    /**
     * 指定要查询的分组
     * @example `0009db9c828549768a200320714b8930`
     */
    "GroupId": string;
    /**
     * 指定要查询的API编号，支持输入多个，半角逗号（,）分隔，最多支持100个
     * @example `123,234`
     */
    "ApiIds"?: string;
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
