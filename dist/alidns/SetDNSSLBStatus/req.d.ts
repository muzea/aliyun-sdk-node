interface SetDNSSLBStatusRequest {
    "RegionId"?: string;
    /**
    * 需要负载均衡的子域名，其中aliyun.com为错误参数，请使用@.aliyun.com。
    * @example `www.abc.com`
    */ "SubDomain": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 是否开启解析负载均衡。取值：
    * - **true**（默认）：开启
    * - **false**：关闭
    * @example `true`
    */ "Open"?: boolean;
    /**
    * 域名名称。
    * @example `abc.com`
    */ "DomainName"?: string;
}
export { SetDNSSLBStatusRequest };