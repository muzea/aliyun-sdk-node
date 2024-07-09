export interface ListScaleOutEcuRequest {
    /**
     * 命名空间ID。
     * - 自定义命名空间ID格式为：`地域ID:命名空间标示符`，例如：cn-beijing:test。
     * - 默认命名空间ID格式为：`地域ID`，例如：cn-beijing。
     * @example `cn-beijing:test`
     */
    "LogicalRegionId"?: string;
    /**
     * 以集群为查询条件，查询该集群内可用的ECU列表。
     * >  ClusterId与AppId需要至少填入一个作为查询参数。
     * @example `52984524-6d48-4bbd-******************`
     */
    "ClusterId"?: string;
    /**
     * 以应用为查询条件，查询该应用所在集群内可用的ECU列表。
     * > ClusterId与AppId需要至少填入一个作为查询参数。
     * @example `b93024fd-8a9d-4ef7-99f1-5f0d65cc****`
     */
    "AppId"?: string;
    /**
     * 查询该应用分组所在集群内可用的ECU列表。
     * @example `8123db90-880f-486f-****-****`
     */
    "GroupId"?: string;
    /**
     * 查询满足CPU核数要求的ECU。
     * @example `1`
     */
    "Cpu"?: number;
    /**
     * 查询满足剩余可用内存要求的ECU，单位为MB。
     * @example `200`
     */
    "Mem"?: number;
    /**
     * 查询并列出指定数量的ECU，如果不设置则代表列出所有满足筛查结果的ECU列表。
     * @example `1`
     */
    "InstanceNum"?: number;
}
