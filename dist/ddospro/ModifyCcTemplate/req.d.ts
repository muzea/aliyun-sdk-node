interface ModifyCcTemplateRequest {
    "RegionId"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 设置CC防护模式，取值：
    * - **0**：正常
    * - **1**：攻击紧急
    * - **2**：严格
    * -  **3**：超级严格
    * @example `0`
    */ "Mode": number;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { ModifyCcTemplateRequest };