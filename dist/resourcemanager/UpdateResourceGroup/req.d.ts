export interface UpdateResourceGroupRequest {
    /**
     * 资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)获取资源组ID。
     * @example `rg-9gLOoK****`
     */
    "ResourceGroupId": string;
    /**
     * 资源组显示名称。
     * 长度为1~50个字符或汉字。
     * @example `project`
     */
    "NewDisplayName": string;
}
