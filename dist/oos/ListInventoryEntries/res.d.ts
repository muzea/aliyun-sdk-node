export interface ListInventoryEntriesResponse {
    /**
     * 翻页标记的Token
     * @example `gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `A81E4B2E-6B33-4BAE-9856-55DB7C893E01`
     */
    RequestId: string;
    /**
     * 组件版本号
     * @example `1.0`
     */
    SchemaVersion: string;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 同步配置清单信息时间
     * @example `2020-09-17T12:28:13Z`
     */
    CaptureTime: string;
    /**
     * 组件名称
     * @example `ACS:InstanceInformation`
     */
    TypeName: string;
    /**
     * ECS实例ID
     * @example `i-bp1cpoxxxwxxxxxxxxxx`
     */
    InstanceId: string;
    /**
     * 某个实例下查询组件的详细配置属性列表。
     */
    Entries: any[];
}
