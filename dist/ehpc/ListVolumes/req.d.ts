export interface ListVolumesRequest {
    /**
     * 当前页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。取值范围：1~50
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
