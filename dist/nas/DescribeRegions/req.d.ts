export interface DescribeRegionsRequest {
    /**
     * 分页查询时，每页包含的地域数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 文件系统类型。
     * 取值范围：
     * 取值：
     * - all：所有类型
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * - cpfs：CPFS
     * >仅中国站支持CPFS文件系统。
     * @example `standard`
     */
    "FileSystemType"?: string;
}
