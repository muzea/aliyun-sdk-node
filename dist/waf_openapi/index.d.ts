interface WAF_OPENAPI {
    /**
    * 调用DescribeAsyncTaskStatus接口查询WAF任务执行状态。
    */ DescribeAsyncTaskStatus(query: {
        "RegionId"?: string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        /**
        * WAF任务ID。
        * @example `aliyun.waf.20180719140433783.SvaZeY`
        */ "WafRequestId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyProtectionRuleCacheStatus接口更新指定网站防篡改规则所防护的页面的缓存。
    */ ModifyProtectionRuleCacheStatus(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名名称。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 要操作的规则ID。调用[DescribeProtectionModuleRules](~~100398~~)接口可以查询到所有规则ID。
        * @example `111`
        */ "Id": number;
        /**
        * 要操作的防护功能。取值：** tamperproof**。
        * @example `tamperproof`
        */ "Defense": string;
        /**
        * WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 地域ID。取值：
        * - **cn**：中国大陆地区（默认）
        * - **cn-hongkong**：海外地区
        *
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteAclRule接口删除指定精准访问控制规则。
    */ DeleteAclRule(query: {
        "RegionId"?: string;
        /**
        * 精准访问控制规则ID。
        * @example `65899`
        */ "RuleId": number;
        /**
        * 域名名称。
        * @example `rstest.cdn.com`
        */ "Domain": string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateDomainConfig接口添加域名配置信息。
    */ CreateDomainConfig(query: {
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
    }): Promise<{}>;
    /**
    * 调用CreateProtectionModuleRule接口新增一条防护规则。
    */ CreateProtectionModuleRule(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名名称。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 要操作的防护功能。取值：
        * - **tamperproof**：新增网站防篡改规则
        * - **antifraud**：新增数据风控规则
        * - **antifraud_js**：新增数据风控JS规则
        * @example `tamperproof`
        */ "Defense": string;
        /**
        * 要添加的规则内容。按照Rule构造成Json后转换成字符串作为入参，根据要添加的规则类型不同，需要传入的参数不同。具体结构说明如下。
        * - 添加网站防篡改规则（**Defense**为**tamperproof**）时，传入以下参数：
        *     - **uri**，String类型，必选，要防护的URI。
        *     - **name**，String类型，必选，自定义规则名称。
        *     - **status**，Integer类型，可选，是否启用规则。取值：
        *         > 新增防篡改规则时无需填写，更改防篡改规则时必须填写。
        *         - **0**：关闭
        *         - **1**：启用
        * - 添加数据风控规则（**Defense**为**antifraud**或**antifraud_js**）时，传入以下参数：
        *     - **uri**，String类型，必选，要防护的URI。
        * @example `{\"name\":\"test\",\"uri\":\"http://xx.aliyun.com/example/\"}`
        */ "Rule": string;
        /**
        * WAF实例ID。
        * > 您可以调用[DescribePayInfo](~~86651~~)接口查看当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 地域ID。取值：
        * - **cn**：中国大陆地区（默认）
        * - **cn-hongkong**：海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeAclRules接口获取指定域名的精准访问控制规则列表。
    */ DescribeAclRules(query: {
        "RegionId"?: string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        /**
        * 域名名称。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
        * @example `1`
        */ "CurrentPage": number;
        /**
        * 页面显示最大记录数量。
        * @example `10`
        */ "PageSize": number;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteDomainConfig接口删除指定域名配置信息。
    */ DeleteDomainConfig(query: {
        "RegionId"?: string;
        /**
        * 已添加的域名名称。
        * @example `rstest.cdn.com`
        */ "Domain": string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyDomainConfig接口修改指定域名配置信息。
    */ ModifyDomainConfig(query: {
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
        *
        * @example `["http"]`
        */ "Protocols": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 源站IP，支持指定多个IP。示例：`["1.1.1.1"]`。
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
        * 负载均衡的方式，取值：
        * - **0**：IP hash
        * - **1**：轮询
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
        * Https跳转状态。取值：
        * - **1**：开启
        * - **0**：关闭（默认）
        * @example `1`
        */ "HttpsRedirect"?: number;
    }): Promise<{}>;
    /**
    * 调用CreateAclRule接口为指定域名添加精准访问控制规则。
    */ CreateAclRule(query: {
        "RegionId"?: string;
        /**
        * 精准访问控制规则详细信息，采用JSON格式的字符串表述，具体结构见下表。
        * - **Id**：Long类型，可选，规则ID。
        * - **Name**：String类型，必选，规则名称。
        * - **Action**：Integer类型，必选，规则的匹配动作，取值：
        *     - **0**：表示阻断，即命中该规则的匹配条件，则阻断该访问请求。
        *     - **1**：表示放行，即命中该规则的匹配条件，则放行该访问请求。
        *     - **2**：表示告警，即命中该规则的匹配条件，将放行该访问请求，但会记录该请求并告警。
        * - **ContinueComponent**：String类型，可选，是否继续执行其它WAF防护策略，采用JSON格式的字符串表述，具体结构见下表。
        *     - **post_action_cc**，Integer类型，可选，是否继续执行CC防护规则检测，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_waf**，Integer类型，可选，是否继续执行Web攻击防护规则检测，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_sa**，Integer类型，可选，是否继续执行智能防护引擎规则检测，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_block_geo**，Integer类型，可选，是否继续执行地区封禁，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_data_risk_control**，Integer类型，可选，是否继续执行数据风控防护，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_sdk**，Integer类型，可选，是否继续执行SDK防护，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        * - **Conditions**，Array类型，可选，规则匹配条件，数组中具体定义见下表。
        *     - **Key**，String类型，必选，匹配字段，取值包括IP、URL、Referer、User-Agent、Params、Cookie、Content-Type、X-Forwarded-For、Content-Length、Post-Body、Http-Method、Header。不同版本的WAF实例支持的匹配字段不同，您可以在Web应用防火墙管理控制台中查看您的实例当前所支持的匹配字段。
        *     - **Contain**，Integer类型，必选，逻辑符，取值：
        *         - **0**：表示不包含或不属于。
        *         - **1**：表示包含或属于。
        *         - **2**：表示不存在。
        *         - **10**：表示不等于。
        *         - **11**：表示等于。
        *         - **20**：表示长度小于。
        *         - **21**：表示长度等于。
        *         - **22**：表示长度大于。
        *         - **30**：表示值小于。
        *         - **31**：表示值等于。
        *         - **32**：表示值大于。
        *     - **Value**，String类型，必选，匹配内容。
        * @example `{"conditions":[{"key":"URL","contain":1,"value":"asfas"}],"continueComponent":{"post_action_cc":1,"post_action_waf":1,"post_action_sa":1,"post_action_block_geo":"0","post_action_data_risk_control":"1"},"action":"1","name":"lei123"}`
        */ "Rules": string;
        /**
        * 域名名称。
        * @example `rstest.cdn.com`
        */ "Domain": string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateCertAndKey接口为已添加的域名配置记录上传证书及私钥信息。
    */ CreateCertAndKey(query: {
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
        * 证书文件内容。
        * @example `-----BEGIN CERTIFICATE----------END CERTIFICATE-----`
        */ "Cert": string;
        /**
        * 私钥文件内容
        * @example `-----BEGIN RSA PRIVATE KEY----------END RSA PRIVATE KEY-----`
        */ "Key": string;
        /**
        * 证书名称。
        * @example `www.aliyun.com`
        */ "HttpsCertName": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyAclRule接口修改指定精准访问控制规则。
    */ ModifyAclRule(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `rstest.cdn.com`
        */ "Domain": string;
        /**
        * 精准访问控制规则详细信息，采用JSON格式的字符串表述，具体结构见下表。
        * - **Id**：Long类型，可选，规则ID。
        * - **Name**：String类型，必选，规则名称。
        * - **Action**：Integer类型，必选，规则的匹配动作，取值：
        *     - **0**：表示阻断，即命中该规则的匹配条件，则阻断该访问请求。
        *     - **1**：表示放行，即命中该规则的匹配条件，则放行该访问请求。
        *     - **2**：表示告警，即命中该规则的匹配条件，将放行该访问请求，但会记录该请求并告警。
        * - **ContinueComponent**：String类型，可选，是否继续执行其它WAF防护策略，采用JSON格式的字符串表述，具体结构见下表。
        *     - **post_action_cc**，Integer类型，可选，是否继续执行CC防护规则检测，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_waf**，Integer类型，可选，是否继续执行Web攻击防护规则检测，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_sa**，Integer类型，可选，是否继续执行智能防护引擎规则检测，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_block_geo**，Integer类型，可选，是否继续执行地区封禁，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_data_risk_control**，Integer类型，可选，是否继续执行数据风控防护，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        *     - **post_action_sdk**，Integer类型，可选，是否继续执行SDK防护，取值：
        *         - **0**：表示否。
        *         - **1**：表示是。
        * - **Conditions**，Array类型，可选，规则匹配条件，数组中具体定义见下表。
        *     - **Key**，String类型，必选，匹配字段，取值包括IP、URL、Referer、User-Agent、Params、Cookie、Content-Type、X-Forwarded-For、Content-Length、Post-Body、Http-Method、Header。不同版本的WAF实例支持的匹配字段不同，您可以在Web应用防火墙管理控制台中查看您的实例当前所支持的匹配字段。
        *     - **Contain**，Integer类型，必选，逻辑符，取值：
        *         - **0**：表示不包含。
        *         - **1**：表示包含。
        *         - **2**：表示不存在。
        *         - **10**：表示不等于。
        *         - **11**：表示等于。
        *         - **20**：表示长度小于。
        *         - **21**：表示长度等于。
        *         - **22**：表示长度大于。
        *         - **30**：表示值小于。
        *         - **31**：表示值等于。
        *         - **32**：表示值大于。
        *     - **Value**，String类型，必选，匹配内容。
        * @example `xx`
        */ "Rules": string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDomainNames接口获取指定WAF实例中已添加的域名名称列表。
    */ DescribeDomainNames(query: {
        "RegionId"?: string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeProtectionModuleRules接口查询所有网站防篡改规则的信息。
    */ DescribeProtectionModuleRules(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名名称。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 要操作的防护功能。取值： **tamperproof**。
        * @example `tamperproof`
        */ "Defense": string;
        /**
        * WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 每页的行数。默认值：**10**
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 列表的页码。默认值：**1**
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 地域ID。取值：
        * - **cn**：中国大陆地区。
        * - **cn-hongkong**：海外地区。
        *
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyWafSwitch接口打开或关闭Web攻击防护功能开关。
    */ ModifyWafSwitch(query: {
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
        * Web攻击防护功能开关，取值：
        * - **0**：表示关闭。
        * - **1**：表示开启。
        * @example `1`
        */ "ServiceOn": number;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDomainConfig接口获取指定域名的转发配置信息。
    */ DescribeDomainConfig(query: {
        "RegionId"?: string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        /**
        * 已添加的域名名称。
        * @example `rstest.cdn.com`
        */ "Domain": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeRegions接口获取当前WAF支持的地域信息。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDomainConfigStatus接口查询指定域名的转发配置是否生效。
    */ DescribeDomainConfigStatus(query: {
        "RegionId"?: string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        /**
        * 已添加的域名名称。
        * @example `rstest.cdn.com`
        */ "Domain": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribePayInfo接口获取指定地域的WAF实例当前信息。
    */ DescribePayInfo(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 地域ID，取值：
        * -  **cn**：表示中国大陆地区（默认）
        * -  **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
        /**
        * 实例来源。默认值：**waf-cloud**。
        * @example `waf-cloud`
        */ "InstanceSource"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyProtectionRuleStatus接口启用或关闭指定的网站防篡改规则。
    */ ModifyProtectionRuleStatus(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名名称。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 要操作的防护功能。取值：** tamperproof **。
        * @example `tamperproof`
        */ "Defense": string;
        /**
        * 要操作的规则ID。调用[DescribeProtectionModuleRules](~~100398~~)接口可以查询到所有规则ID。
        * @example `111`
        */ "Id": number;
        /**
        * 是否启用规则。取值：
        * - **0**：关闭
        * - **1**：启用
        *
        * @example `1`
        */ "RuleStatus": number;
        /**
        * 并发锁版本。
        * @example `0`
        */ "LockVersion": number;
        /**
        * WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 地域ID。取值：
        * - **cn**：中国大陆地区（默认）
        * - **cn-hongkong**：海外地区
        *
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeWafSourceIpSegment接口获取WAF实例的回源IP网段列表。
    */ DescribeWafSourceIpSegment(query: {
        "RegionId"?: string;
        /**
        * WAF实例ID。
        * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
        * @example `waf_elasticity-cn-0xldbqtm005`
        */ "InstanceId": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * WAF实例所在的地域。取值：
        * - **cn**：表示中国大陆地区（默认）
        * - **cn-hongkong**：表示海外地区
        * @example `cn`
        */ "Region"?: string;
    }): Promise<{}>;
    DescribeInstanceInfo(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "Region"?: string;
        "InstanceSource"?: string;
    }): Promise<{}>;
    ModifyProtectionModuleStatus(query: {
        "RegionId"?: string;
        "Domain": string;
        "DefenseType": string;
        "ModuleStatus": number;
        "InstanceId": string;
        "SourceIp"?: string;
        "Lang"?: string;
        "Region"?: string;
    }): Promise<{}>;
}
export default WAF_OPENAPI;
