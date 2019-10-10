interface UpdateUserRequest {
    "RegionId"?: string;
    /**
    * 指定用户名。
    * @example `zhangq****`
    */ "UserName"?: string;
    /**
    * 指定新用户名。
    * 格式：`^[a-zA-Z0-9\.@\-_]+$`。
    * @example `xiaoq****`
    */ "NewUserName"?: string;
    /**
    * 指定新显示名称。
    * @example `xiaoq****`
    */ "NewDisplayName"?: string;
    /**
    * 指定RAM用户新手机号。
    * 格式：国际区号-号码。
    * @example `86-1860000****`
    */ "NewMobilePhone"?: string;
    /**
    * 指定RAM用户的新邮箱。
    * @example `xiaoq****@example.com`
    */ "NewEmail"?: string;
    /**
    * 指定新备注, 最大长度128个字符。
    * @example `这是一位云计算工程师`
    */ "NewComments"?: string;
}
export { UpdateUserRequest };