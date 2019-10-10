interface CreateAccountRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 账号名。需以字母开头，由小写字母、数字或下划线组成，长度不超过16个字符。
    * @example `demoaccount`
    */ "AccountName": string;
    /**
    * 账号的密码。长度为8－32位，需包含大写字母、小写字母、特殊字符和数字中的至少三种，允许的特殊字符包括`!@#$%^&*()_+-=`。
    * @example `uWonno233`
    */ "AccountPassword": string;
    "OwnerId"?: number;
    /**
    * 需要创建账号的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 账号权限：
    * * RoleReadOnly（只读）
    * * RoleReadWrite（读写，默认值）
    * * RoleRepl（复制）
    * > 复制权限支持读写，且开放SYNC/PSYNC命令。目前仅支持在4.0标准版实例中创建有复制权限的账号。
    * @example `RoleReadOnly`
    */ "AccountPrivilege"?: string;
    /**
    * 账号描述。
    * * 需以中文、英文字母开头，不能以http: //或https: //开头；
    * * 可以包含中文、英文字母、“_”、“ -”和数字；
    * * 长度为2~256个字符。
    * @example `this is a test account`
    */ "AccountDescription"?: string;
    /**
    * 账号类型，取值为Normal（普通账号）。
    * @example `Normal`
    */ "AccountType"?: string;
}
export { CreateAccountRequest };