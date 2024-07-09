export interface DescribeTemplatesRequest {
    /**
     * 模板类型，值可以是任意值。
     * - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。
     * - 当取值是`compose`时将不在控制台的编排模板页面展示该模板。
     * 默认值：`kubernetes`。
     * @example `kubernetes`
     */
    "template_type"?: string;
    /**
     * 对查询结果进行分页处理，指定返回第几页的数据。
     * 默认值： 1。
     * @example `1`
     */
    "page_num"?: number;
    /**
     * 对查询结果进行分页处理，指定每页包含的数据条数。
     * 默认值：10。
     * @example `10`
     */
    "page_size"?: number;
}
