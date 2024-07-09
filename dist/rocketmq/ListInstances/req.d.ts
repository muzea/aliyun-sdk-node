export interface ListInstancesRequest {
    /**
     * 查询的过滤条件，若不输入则查询所有实例。
     * @example `rmq-cn-7e22ody****`
     */
    "filter"?: string;
    /**
     * 分页页码，查询第几页的返回结果。
     * 取值范围：1~100000000。
     * 若您设置的参数值小于1，则系统默认按照参数值为1处理；若您设置的参数值大于100000000，则系统默认按照参数值为100000000处理。
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 分页大小，每页最多显示的返回结果数量。
     * 取值范围：10~200。
     * 若您设置的参数值小于10，则系统默认按照参数值为10处理；若您设置的参数值大于200，则系统默认按照参数值为200处理。
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 实例所属的资源组ID。
     * @example `rg-acfmx7caj******`
     */
    "resourceGroupId"?: string;
    /**
     * 资源标签列表，用于筛选实例。
     * @example `[{"key": "rmq-test", "value": "test"}]`
     */
    "tags"?: string;
}
