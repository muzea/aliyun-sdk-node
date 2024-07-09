export interface GetStackInstanceRequest {
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
     * @example `151266687691****`
     */
    "StackInstanceAccountId": string;
    /**
     * 资源栈所属地域。
     * @example `cn-beijing`
     */
    "StackInstanceRegionId": string;
    /**
     * 是否返回Outputs参数（资源栈输出列表）。取值：
     * - Enabled：返回Outputs参数。
     * - Disabled（默认值）：不返回Outputs参数。
     * > Outputs计算较为耗时。如果不需要获取Outputs信息，建议您将OutputOption指定为Disabled，提高接口响应速度。
     * @example `Disabled`
     */
    "OutputOption"?: string;
}
