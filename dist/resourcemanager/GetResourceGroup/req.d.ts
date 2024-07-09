export interface GetResourceGroupRequest {
    /**
     * 资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)查询资源组ID。
     * @example `rg-9gLOoK****`
     */
    "ResourceGroupId": string;
    /**
     * 是否返回标签信息。取值：
     * - false（默认值）：不返回。
     * - true：返回。
     * @example `true`
     */
    "IncludeTags"?: boolean;
}
