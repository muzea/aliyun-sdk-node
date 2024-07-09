export interface ListBenchmarkTaskRequest {
    /**
     * 过滤参数。如果指定，将分别查找EAS服务名和压测任务名中和指定参数匹配的记录。
     * @example `test_bench`
     */
    "Filter"?: string;
    /**
     * 压测任务对应的EAS服务名称。如何查询服务名称，请参见[ListServices](~~412109~~)。
     * @example `test_bench_srv`
     */
    "ServiceName"?: string;
    /**
     * 压测任务列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页显示的压测任务数量，默认为100。
     * @example `10`
     */
    "PageSize"?: string;
}
