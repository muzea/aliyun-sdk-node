interface ResetAccountPasswordRequest {
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
    * 新密码。
    * >* 长度为8~32个字符；
    * * 由大写字母、小写字母、数字、特殊字符中的任意三种组成；
    * * 特殊字符为!@#$&amp;%^*()_+-=
    * @example `Test123456`
    */ "AccountPassword": string;
    "OwnerId"?: number;
}
export { ResetAccountPasswordRequest };