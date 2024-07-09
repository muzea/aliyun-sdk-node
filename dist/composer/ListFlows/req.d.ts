export interface ListFlowsRequest {
    /**
     * 每页大小，最大 100，默认值为 10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页码。起始值：1默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 工作流的名称
     * @example `test`
     */
    "FlowName"?: string;
    /**
     * 过滤条件，json格式：{"key1":"value1"}
     * @example `{\"tags\":[{\"key\":\"acs:lc:Solution:AliyunSSO\",\"value\":\"test\"}]}`
     */
    "Filter"?: string;
    /**
     * 资源组ID，不传该参数则查询本账号下所有工作流。指定资源组ID后只会查询该资源组下的工作流
     * @example `rg-acfmzy6dzs6qtqa`
     */
    "ResourceGroupId"?: string;
}
