export interface ModifyWebCacheCustomRuleRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则且关联了增强功能套餐的DDoS高防实例。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain": string;
    /**
     * 静态页面缓存的自定义规则信息，使用JSON格式的字符串表述，具体结构如下。
     * - **Name**：String类型，必选，规则名称。
     * - **Uri**：String类型，必选，缓存页面的路径。
     * - **Mode**：String类型，必选，缓存模式。取值：
     *     - **standard**：标准模式
     *     - **aggressive**：强力模式
     *     - **bypass**：不缓存
     * - **CacheTtl**：Integer类型，必选，页面缓存的过期时间。单位：秒。
     * @example `[{"Name": "test","Uri": "/a","Mode": "standard","CacheTtl": 3600}]`
     */
    "Rules": string;
}
