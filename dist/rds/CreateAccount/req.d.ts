interface CreateAccountRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 数据库账号名称。
    * >* 名称唯一；
    * * 以字母开头，以字母或数字结尾；
    * * 由小写字母、数字或下划线组成；
    * * 长度为2~16个字符；
    * * 其他非法字符，见[禁用关键字表](~~26317~~)。
    * @example `test1`
    */ "AccountName": string;
    /**
    * 数据库账号的密码。
    * >* 长度为8~32个字符；
    * * 由大写字母、小写字母、数字、特殊字符中的任意三种组成；
    * * 特殊字符为!@#$&amp;%^*()_+-=
    * @example `Test123456`
    */ "AccountPassword": string;
    "OwnerId"?: number;
    /**
    * 账号描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
    * >不能以 http:// 和 https:// 开头。
    * @example `测试账号A`
    */ "AccountDescription"?: string;
    /**
    * 账号类型，取值：
    * * **Normal**：普通账号；
    * * **Super**：高权限账号。
    * 默认值：**Normal**。
    * @example `Normal`
    */ "AccountType"?: string;
}
export { CreateAccountRequest };