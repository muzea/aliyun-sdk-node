export interface DescribeContainerAppsRequest {
    /**
     * 要查询的应用值，支持模糊匹配。
     * @example `cas-adad-qeqwe`
     */
    "FieldValue"?: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `200`
     */
    "PageSize": number;
    /**
     * 容器集群的ID。
     * @example `ca0a686115432429ca26cf780f5e9fff5`
     */
    "ClusterId"?: string;
}
