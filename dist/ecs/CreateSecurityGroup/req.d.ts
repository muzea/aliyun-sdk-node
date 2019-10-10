interface CreateSecurityGroupRequest {
    /**
    * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 安全组描述信息。长度为2~256个英文或中文字符，不能以 http://和https://开头。
    * 默认值：空。
    * @example `FinanceDept`
    */ "Description"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 安全组名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
    * @example `FinanceJoshua`
    */ "SecurityGroupName"?: string;
    /**
    * 安全组所属VPC ID。
    * @example `vpc-vpcid1`
    */ "VpcId"?: string;
    /**
    * 安全组类型，分为普通安全组与企业安全组。取值范围：
    * - normal：普通安全组。
    * - enterprise：企业安全组。更多详情，请参见[企业安全组概述](~~120621~~)。
    * @example `enterprise`
    */ "SecurityGroupType"?: string;
    "Tag"?: string[];
    /**
    * 安全组所在的企业资源组ID。
    * @example `rg-resourcegrouid`
    */ "ResourceGroupId"?: string;
}
export { CreateSecurityGroupRequest };