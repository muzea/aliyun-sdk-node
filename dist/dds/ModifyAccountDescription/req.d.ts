interface ModifyAccountDescriptionRequest {
    "RegionId"?: string;
    /**
    * 待修改备注信息的账号名。
    * @example `root`
    */ "AccountName": string;
    /**
    * 设置账号的备注信息。
    * - 不能以http:// 或者 https:// 开头。
    * - 以中文、英文字母开头。
    * - 可以包含中文、英文字符、下划线（_）、连接号（-）和数字，长度为2~256个字符。
    * @example `superadmin`
    */ "AccountDescription": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { ModifyAccountDescriptionRequest };