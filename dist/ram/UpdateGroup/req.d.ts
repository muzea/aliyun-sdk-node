interface UpdateGroupRequest {
    "RegionId"?: string;
    /**
    * 指定用户组名称。
    * 格式：`^[a-zA-Z0-9\-]+$`。
    * @example `Dev-Team`
    */ "GroupName"?: string;
    /**
    * 新的用户组名称。
    * 格式：`^[a-zA-Z0-9\-]+$`。
    * @example `NewDev-Team`
    */ "NewGroupName"?: string;
    /**
    * 新的备注信息，最大长度128个字符。
    * @example `开发团队`
    */ "NewComments"?: string;
}
export { UpdateGroupRequest };