export interface ListIndexTemplatesRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif24adwc0082****`
     */
    "InstanceId": string;
    /**
     * 索引模板名称。
     * @example `my-template`
     */
    "indexTemplate"?: string;
    /**
     * 实例列表的页码。起始值：1，默认值：1。
     * @example `5`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。最大值：100，默认值：20。
     * @example `50`
     */
    "size"?: number;
}
