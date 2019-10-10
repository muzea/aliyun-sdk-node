interface ResetAccountPasswordRequest {
    "RegionId"?: string;
    /**
    * 需要重置密码的账号，取值：**root**。
    * @example `root`
    */ "AccountName": string;
    /**
    * 重置后的密码，即修改后的密码。
    * <ul>
    * <li>密码由大写字母、小写字母、数字、特殊字符中的任意三种组成，特殊字符为!#$%^&amp;*()_+-=</li>
    * <li>密码长度为8-32位</li>
    * </ul>
    * @example `Ali!123456`
    */ "AccountPassword": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { ResetAccountPasswordRequest };