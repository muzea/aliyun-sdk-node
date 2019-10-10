interface GetGroupRequest {
    "RegionId"?: string;
    /**
    * 用户组名称。
    * 格式：`^[a-zA-Z0-9\-]+$`。
    * @example `Dev-Team`
    */ "GroupName"?: string;
}
export { GetGroupRequest };