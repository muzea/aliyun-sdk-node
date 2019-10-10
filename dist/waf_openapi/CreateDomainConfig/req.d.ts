interface CreateDomainConfigRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `rstest.cdn.com`
    */ "Domain": string;
    /**
    * WAF实例ID。
    * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
    * @example `waf_elasticity-cn-0xldbqtm005`
    */ "InstanceId": string;
    /**
    * 该域名在WAF前是否配置有七层代理（例如，高防、CDN等），取值：
    * - **0**：表示无。
    * - **1**：表示有。
    * @example `0`
    */ "IsAccessProduct": number;
    /**
    * 该域名所支持的访问协议，取值：
    * - **http**：表示支持HTTP协议。
    * - **https**：表示支持HTTPS协议。
    * - **http,https**：同时支持HTTP、HTTPS协议。
    * @example `["http"]`
    */ "Protocols": string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * 源站IP，支持指定多个IP。示例值：`["1.1.1.1"]`。
    * @example `["1.1.1.1"]`
    */ "SourceIps"?: string;
    /**
    * HTTP协议配置的端口。指定多个HTTP端口时，使用“,”进行分隔。示例值：`[80]`。
    * > 配置协议为HTTP时，该参数为必填项。默认值为**80**。**HttpPort**与**HttpsPort**两个请求参数至少需要填一个。
    * @example `[80]`
    */ "HttpPort"?: string;
    /**
    * HTTPS协议配置的端口。指定多个HTTPS端口时，使用“,”进行分隔。示例值：`[443]`。
    * > 配置协议为HTTPS时，该参数为必填项。默认值为**443**。**HttpPort**与**HttpsPort**两个请求参数至少需要填一个。
    * @example `[443]`
    */ "HttpsPort"?: string;
    /**
    * WAF实例所在的地域。取值：
    * - **cn**：表示中国大陆地区（默认）
    * - **cn-hongkong**：表示海外地区
    * @example `cn`
    */ "Region"?: string;
    /**
    * 回源负载均衡策略，取值：
    * - **0**：表示IP Hash方式。
    * - **1**：表示轮询方式。
    * @example `0`
    */ "LoadBalancing"?: number;
    /**
    * 是否开启HTTPS访问请求通过HTTP协议转发回源站，取值：
    * - **0**：表示关闭 （默认）
    * - **1**：表示开启
    * > 如果您的网站不支持HTTPS回源，开启HTTP回源（默认回源端口是80端口）功能项，即可通过WAF实现HTTPS访问。
    * @example `0`
    */ "HttpToUserIp"?: number;
    /**
    * 是否开启HTTPS强制跳转，取值：
    * - **0**：表示关闭 （默认）
    * - **1**：表示开启
    * > 仅使用HTTPS访问协议时需填写该请求参数。开启强制跳转后HTTP请求将显示为HTTPS，默认跳转至443端口。
    * @example `0`
    */ "HttpsRedirect"?: number;
    /**
    * 该域名的回源地址类型，取值：
    * - **0**：表示回源到IP。
    * - **1**：表示回源到域名。
    * @example `0`
    */ "RsType"?: number;
}
export { CreateDomainConfigRequest };