interface DeleteLayer7CCRuleRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 要删除的CC自定义规则名。
    * @example `testCcRule1`
    */ "Name": string;
    "SourceIp"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
}
export { DeleteLayer7CCRuleRequest };