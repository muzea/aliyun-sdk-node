export interface ListFileSystemWithMountTargetsRequest {
    /**
     * 分页查询的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。取值范围：1~50默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
