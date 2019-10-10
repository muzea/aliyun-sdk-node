interface CreateUserRequest {
    "RegionId"?: string;
    /**
    * 指定用户名，最多包含64个字符。
    * 格式：`^[a-zA-Z0-9\.@\-_]+$`。
    * @example `zhangq****`
    */ "UserName"?: string;
    /**
    * 显示名称，最多包含128个字符或汉字。
    * 格式：`^[a-zA-Z0-9\.@\-\u4e00-\u9fa5]+$`。
    * @example `zhangq****`
    */ "DisplayName"?: string;
    /**
    * RAM用户手机号。
    * 格式：国际区号-号码。
    * @example `86-1868888****`
    */ "MobilePhone"?: string;
    /**
    * RAM用户的邮箱。
    * @example `zhangq****@example.com`
    */ "Email"?: string;
    /**
    * 备注，最大长度128个字符。
    * @example `This is a cloud computing engineer.`
    */ "Comments"?: string;
}
export { CreateUserRequest };