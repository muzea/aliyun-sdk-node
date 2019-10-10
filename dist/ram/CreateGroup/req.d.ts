interface CreateGroupRequest {
    "RegionId"?: string;
    /**
    * 用户组名称，最大长度64个字符。
    * 格式：`^[a-zA-Z0-9\-]+$`。
    * @example `Dev-Team`
    */ "GroupName"?: string;
    /**
    * 备注信息，最大长度128个字符。
    * @example `开发团队`
    */ "Comments"?: string;
}
export { CreateGroupRequest };