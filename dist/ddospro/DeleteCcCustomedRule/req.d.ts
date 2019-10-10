interface DeleteCcCustomedRuleRequest {
    "RegionId"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 要删除的规则的名称。
    * @example `customedCcRule1`
    */ "Name": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { DeleteCcCustomedRuleRequest };