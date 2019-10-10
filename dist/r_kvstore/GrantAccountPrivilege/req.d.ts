interface GrantAccountPrivilegeRequest {
    "RegionId"?: string;
    /**
    * 账号名。以字母开头，由小写字母、数字、下划线组成，长度不超过16个字符。
    * @example `demoaccount`
    */ "AccountName": string;
    /**
    * 账号权限：
    * * RoleReadOnly（只读）
    * * RoleReadWrite（读写，默认值）
    * * RoleRepl（复制）
    * > 复制权限支持读写，且开放SYNC/PSYNC命令。目前仅支持在4.0标准版实例中赋予账号复制权限。
    * @example `RoleReadWrite`
    */ "AccountPrivilege": string;
    "OwnerId"?: number;
    /**
    * 账号所属实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { GrantAccountPrivilegeRequest };