export interface DescribeLogAnalysisRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时，每个分页包含的文件系统个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 文件系统列表的分页页码。默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 文件系统类型。
     * 取值：
     * - standard：通用型NAS
     * - extreme：极速型NAS
     * - all（默认值）：所有类型
     * @example `all`
     */
    "FileSystemType"?: string;
}
