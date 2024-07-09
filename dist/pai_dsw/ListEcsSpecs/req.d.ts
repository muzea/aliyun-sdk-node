export interface ListEcsSpecsRequest {
    /**
     * 加速器类型。
     * - CPU：无计算加速，只使用CPU计算。
     * - GPU：使用GPU进行计算加速。
     * @example `CPU`
     */
    "AcceleratorType": string;
    /**
     * ECS规格列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的EC规格数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 按排序字段gmtCreate排序。
     * @example `gmtCreate`
     */
    "SortBy"?: string;
    /**
     * 排序顺序。取值如下：
     * - ASC：升序。
     * - DESC：降序。
     * @example `DESC`
     */
    "Order"?: string;
}
