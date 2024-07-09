export interface DescribeMonitorGroupInstanceAttributeRequest {
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId": number;
    /**
     * 分页页码。
     * 取值范围：1~1000000000。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示记录条数。
     * 取值范围：1~1000000000。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否返回指定应用分组内的资源总数。取值：
     * - true（默认值）：返回。
     * - false：不返回。
     * @example `true`
     */
    "Total"?: boolean;
    /**
     * 云服务名称缩写。
     * 关于如何获取云服务名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
     * @example `ecs`
     */
    "Category"?: string;
    /**
     * 资源的搜索关键字。
     * @example `portal`
     */
    "Keyword"?: string;
    /**
     * 资源ID。多个资源ID之间用半角逗号（,）分隔，最多支持20个资源。
     * @example `i-m5e0k0bexac8tykr****`
     */
    "InstanceIds"?: string;
}
