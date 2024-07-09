export interface DescribeAccessRulesRequest {
    /**
     * 权限组名称。
     * @example `classic-test`
     */
    "AccessGroupName": string;
    /**
     * 权限规则ID。
     * @example `1`
     */
    "AccessRuleId"?: string;
    /**
     * 分页查询时，每个分页包含的文件系统个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 文件系统列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * @example `standard`
     */
    "FileSystemType"?: string;
}
