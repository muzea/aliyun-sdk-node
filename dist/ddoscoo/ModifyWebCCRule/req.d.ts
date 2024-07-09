export interface ModifyWebCCRuleRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain": string;
    /**
     * 规则名称。
     * @example `testrule`
     */
    "Name": string;
    /**
     * 阻断类型。取值：
     * - **close**：封禁
     * - **captcha**：人机识别
     * @example `close`
     */
    "Act": string;
    /**
     * 单一IP访问次数。取值范围：**2**~**2000**。
     * @example `3`
     */
    "Count": number;
    /**
     * 检测时长。取值范围：**5**~**10800**，单位：秒。
     * @example `30`
     */
    "Interval": number;
    /**
     * 匹配模式。取值：
     * - **prefix**：前缀匹配
     * - **match**：完全匹配
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
     * @example `/abc`
     */
    "Uri": string;
}
