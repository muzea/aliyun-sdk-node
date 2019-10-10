interface GetRoleRequest {
    "RegionId"?: string;
    /**
    * 指定角色名，最多包含64个字符。
    * 格式：`^[a-zA-Z0-9\.@\-]+$`。
    * @example `ECSAdmin`
    */ "RoleName"?: string;
}
export { GetRoleRequest };