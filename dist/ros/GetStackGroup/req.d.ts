export interface GetStackGroupRequest {
    /**
     * 资源栈组所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈组名称。名称在单个地域内唯一。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * >您必须且仅能指定StackGroupName或StackGroupId其中一个参数。
     * @example `MyStackGroup`
     */
    "StackGroupName"?: string;
    /**
     * 资源栈组ID。
     * >您必须且仅能指定StackGroupName或StackGroupId其中一个参数。
     * @example `fd0ddef9-9540-4b42-a464-94f77835****`
     */
    "StackGroupId"?: string;
}
