export interface ListStackInstancesRequest {
    /**
     * 资源栈组所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈组名称。名称在单个地域内唯一。
     * 长度不超过255个字符，必须以数字或英文字母开头，可以包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyStackGroup`
     */
    "StackGroupName": string;
    /**
     * 资源栈所属目标账号ID。
     * - 自助管理权限模式下，该账号是阿里云账号。
     * - 服务管理权限模式下，该账号是资源目录的成员账号。
     * >关于目标账号的更多信息，请参见[概览](~~154578~~)。
     * @example `156552876021****`
     */
    "StackInstanceAccountId"?: string;
    /**
     * 资源栈所属地域。
     * @example `cn-beijing`
     */
    "StackInstanceRegionId"?: string;
    /**
     * 分页查询时设置的每页行数。
     * - 取值范围：1~50。
     *
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时设置的页码。
     * - 起始值：1。
     *
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
}
