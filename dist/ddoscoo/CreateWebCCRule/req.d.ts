export interface CreateWebCCRuleRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain": string;
    /**
     * 规则名称。支持使用英文字母、数字或下划线（_），且长度不能超过128个字符。
     * @example `testrule`
     */
    "Name": string;
    /**
     * 对命中防护规则的请求执行的动作。取值：
     * - **close**：表示封禁该请求。
     * - **captcha**：表示发起人机识别验证。
     * @example `close`
     */
    "Act": string;
    /**
     * 单一IP访问次数。取值范围：**2**~**2000**。
     * @example `60`
     */
    "Count": number;
    /**
     * 检测时长。取值范围：**5**~**10800**，单位：秒。
     * @example `20`
     */
    "Interval": number;
    /**
     * 匹配模式。取值：
     * - **prefix**：表示前缀匹配。
     * - **match**：表示完全匹配。
     * > 检测路径**URI**中包含参数时，请选择前缀匹配（**prefix**）。
     * @example `prefix`
     */
    "Mode": string;
    /**
     * 封禁时长。取值范围：**60**~**86400**，单位：秒。
     * @example `60`
     */
    "Ttl": number;
    /**
     * 检测路径。
     * > URI不支持修改。网站业务的域名，检测路径，规则名称唯一确定一条规则。
     * @example `/abc/a.php`
     */
    "Uri": string;
}
