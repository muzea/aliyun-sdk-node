interface ModifySecurityGroupAttributeRequest {
    /**
    * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 安全组 ID。
    * @example `sg-securitygroupid1`
    */ "SecurityGroupId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 安全组描述信息。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
    * @example `FinanceDept`
    */ "Description"?: string;
    /**
    * 安全组名称。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
    * @example `FinanceJoshua`
    */ "SecurityGroupName"?: string;
}
export { ModifySecurityGroupAttributeRequest };