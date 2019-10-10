interface ModifyAccountDescriptionRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 账号名称。
    * @example `test1`
    */ "AccountName": string;
    /**
    * 账号描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
    * >不能以 http:// 和 https:// 开头。
    * @example `测试账号A`
    */ "AccountDescription": string;
    "OwnerId"?: number;
}
export { ModifyAccountDescriptionRequest };