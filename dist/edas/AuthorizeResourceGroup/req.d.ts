export interface AuthorizeResourceGroupRequest {
    /**
     * 待授权的子账号或RAM用户的ID。
     * @example `test@13333********`
     */
    "TargetUserId": string;
    /**
     * 资源组ID。可以通过调用ListResourceGroup接口获取，具体操作，请参见[ListResourceGroup](~~62055~~)。
     * 支持设置多个资源组，资源组之间用英文分号（;）分隔。
     * @example `461;462`
     */
    "ResourceGroupIds": string;
}
