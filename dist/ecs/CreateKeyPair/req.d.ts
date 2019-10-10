interface CreateKeyPairRequest {
    /**
    * 密钥对所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 密钥对名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `FinanceJoshuaV23`
    */ "KeyPairName": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "Tag"?: string[];
    /**
    * SSH密钥对所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
}
export { CreateKeyPairRequest };