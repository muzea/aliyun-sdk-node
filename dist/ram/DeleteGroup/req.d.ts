interface DeleteGroupRequest {
    "RegionId"?: string;
    /**
    * 指定用户组名称。
    * 格式：`^[a-zA-Z0-9\-]+$`。
    * @example `Dev-Team`
    */ "GroupName"?: string;
}
export { DeleteGroupRequest };