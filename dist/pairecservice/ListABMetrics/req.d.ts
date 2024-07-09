export interface ListABMetricsRequest {
    /**
     * 指标类型过滤。
     * - Single-单一指标。
     * - Derived-衍生指标。
     * @example `Single`
     */
    "Type"?: string;
    /**
     * 是否指标实时类型过滤。
     * @example `false`
     */
    "Realtime"?: boolean;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 名称过滤。
     * @example `home`
     */
    "Name"?: string;
    /**
     * 数据表ID，可通过ListTableMetas获取。
     * @example `1`
     */
    "TableMetaId"?: string;
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
    /**
     * 场景ID，来源于[ListScenes](~~2402581~~)接口。
     * @example `1`
     */
    "SceneId"?: string;
}
