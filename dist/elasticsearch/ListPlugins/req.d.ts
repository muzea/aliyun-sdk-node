export interface ListPluginsRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif1q9o8r0008****`
     */
    "InstanceId": string;
    /**
     * 插件名称。
     * @example `analysis-ik`
     */
    "name"?: string;
    /**
     * 分页数。
     * @example `1`
     */
    "page"?: string;
    /**
     * 每页记录数。
     * @example `10`
     */
    "size"?: number;
    /**
     * 插件来源类型，仅支持SYSTEM（系统插件）。
     * @example `SYSTEM`
     */
    "source"?: string;
}
