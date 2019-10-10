interface ConfigLayer7CCTemplateRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 要应用的CC防护模式，取值：
    * - **default**：正常
    * - **gf_under_attack**：攻击紧急
    * - **gf_sos_verify**：严格
    * - **gf_sos_enhance**：超级严格
    * @example `default`
    */ "Template": string;
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
export { ConfigLayer7CCTemplateRequest };