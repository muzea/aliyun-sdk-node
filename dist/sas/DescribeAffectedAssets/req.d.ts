export interface DescribeAffectedAssetsRequest {
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，pagesize参数值为空时，将默认返回20条数据。
     * >建议pagesize取值不要为空。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 当前页。
     * @example `1`
     */
    "Current"?: string;
    /**
     * 紧急程度。多个采用英文半角逗号隔开，取值：
     * - serious：紧急
     * - suspicious：可疑
     * - remind：提醒
     * @example `serious,suspicious,remind`
     */
    "Levels"?: string;
}
