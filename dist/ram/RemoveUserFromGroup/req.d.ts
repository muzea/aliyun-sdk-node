interface RemoveUserFromGroupRequest {
    "RegionId"?: string;
    /**
    * RAM用户名称。
    * @example `zhangq****`
    */ "UserName"?: string;
    /**
    * 用户组名称。
    * @example `Dev-Team`
    */ "GroupName"?: string;
}
export { RemoveUserFromGroupRequest };