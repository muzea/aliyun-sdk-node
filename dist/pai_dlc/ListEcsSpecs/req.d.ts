export interface ListEcsSpecsRequest {
    /**
     * 按加速器类型过滤。取值如下：
     * - CPU
     * - GPU
     * @example `GPU`
     */
    "AcceleratorType"?: string;
    /**
     * 按返回字段排序。取值如下：
     * - CPU
     * - GPU
     * - Memory
     * - GmtCreateTime
     * @example `Gpu`
     */
    "SortBy"?: string;
    /**
     * 排序顺序，取值如下：
     * - desc：逆序排列。
     * - asc 升序排列。
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 查询第几页数据，起始值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 需要查询机器规格列表，以逗号分隔
     * @example `ecs.g6.large,ecs.g6.xlarge`
     */
    "InstanceTypes"?: string;
    /**
     * 资源类型，可选值：ECS、Lingjun
     * @example `ECS`
     */
    "ResourceType"?: string;
}
