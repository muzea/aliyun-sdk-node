export interface DescribeAccessGroupsRequest {
    /**
     * 权限组名称。
     * 限制：
     * - 长度为3~64个字符。
     * - 必须以大小写字母开头，可以包含英文字母、数字、下划线（_）或者短划线（-）。
     * @example `DEFAULT_VPC_GROUP_NAME`
     */
    "AccessGroupName"?: string;
    /**
     * 每个分页包含的权限组个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定返回的时间是否按照UTC标准格式表示。
     * 取值：
     * - true（默认值）：返回的时间为UTC标准格式。
     * - false：返回的时间为非UTC标准格式。
     * @example `true`
     */
    "UseUTCDateTime"?: boolean;
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * - cpfs：CPFS
     * >仅中国站支持cpfs文件系统。
     * @example `standard`
     */
    "FileSystemType"?: string;
}
