export interface DescribeProtectionModuleRulesRequest {
    /**
     * 分页查询时，设置每页返回规则的数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，设置当前页面的页面。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 要查询的域名。具体说明如下：
     * -  **DefenseType**取值为**ng_account**以外的值（即查询除账户安全规则配置以外的其他网站防护配置）时，必须设置该参数。
     *     > 您可以调用[DescribeDomainList](~~255880~~)查询所有已添加到WAF防护的域名。
     * - **DefenseType**取值是**ng_account**（即查询账户安全规则配置）时，不要设置该参数，否则会返回错误信息。
     * @example `www.aliyundoc.com`
     */
    "Domain"?: string;
    /**
     * 要查询的防护功能配置的类型。取值：
     * - **waf-codec**：表示查询规则防护引擎解码设置。
     * - **tamperproof**：表示查询网站防篡改规则配置。
     * - **dlp**：表示查询防敏感信息泄漏规则配置。
     * - **ng_account**：表示查询账户安全规则配置。
     * - **bot_crawler**：表示查询合法爬虫规则配置。
     * - **bot_intelligence**：表示查询爬虫威胁情报规则配置。
     * - **antifraud**：表示查询数据风控防护请求配置。
     * - **antifraud_js**：表示查询数据风控JS插入页面配置。
     * - **bot_algorithm**：表示查询智能算法规则配置。
     * - **bot_wxbb_pkg**：表示查询App防护的版本防护规则。
     * - **bot_wxbb**：表示查询App防护的路径防护规则。
     * - **ac_blacklist**：表示查询IP黑名单规则配置。
     * - **ac_highfreq**：表示查询高频Web攻击IP自动封禁规则配置。
     * - **ac_dirscan**：表示查询目录扫描防护规则配置。
     * - **ac_custom**：表示查询自定义防护策略规则配置。
     * - **whitelist**：表示查询白名单规则配置。
     * @example `ac_highfreq`
     */
    "DefenseType": string;
    /**
     * 设置规则的过滤和排序，以JSON格式字符串表达，具体包含以下参数：
     * > 该参数必须使用Base64编码格式，请按照以下参数说明构造JSON格式字符串后将其转换为Base64编码格式。
     * - **filter**：JSON格式字符串 | 可选 | 过滤条件。以JSON字符串格式描述，具体包含以下参数：
     *     - **nameId**：String类型 | 可选 | 查询规则ID等于该参数值或规则名称中包含该参数值的规则。
     *     - **scene**：String类型 | 可选 | 设置要查询的防护模块，取值与**DefenseType**参数相同。
     *     - **enabled**：Boolean类型 | 可选 | 设置要查询的规则状态，取值：
     *          - **false**：表示已禁用。
     *         - **true**：表示已启用。
     *     - **status**：Integer类型 | 可选 | 设置要查询的规则状态，与**enabled**参数含义相同，取值：
     *         - **0**：表示已禁用。
     *         - **1**：表示已启用。
     *     - **ruleId**：Integer类型 | 可选 | 设置要查询的规则ID。
     *     - **ruleIdList**：Array类型 | 可选 | 设置要查询的规则ID列表，多个规则ID间用半角逗号（,）分隔。
     *     - **sceneList**：Array类型 | 可选 | 设置要查询的防护模块列表，取值与**DefenseType**参数相同，多个防护模块间用半角逗号（,）分隔。
     *     - **originList**：Array类型 | 可选 | 设置规则来源，取值为**system**（表示系统自动生成）和**custom**（表示自定义创建），设置多个规则来源时用半角逗号（,）分隔。
     *     - **tag**：String类型 | 可选 | 当设置的查询防护模块为白名单（**whitelist**）时，可通过设置该参数查询不检测指定模块的白名单规则。**tag**参数的取值和含义可参考返回参数中白名单规则配置中的描述。
     *     - **origin**：String类型 | 可选 | 当设置的查询防护模块为白名单（**whitelist**）时，可通过设置该参数查询WAF智能规则托管功能自动添加的白名单规则。取值固定为**ai**。不设置该参数表示查询所有白名单规则（包括您手动添加的规则和智能规则托管功能自动添加的规则）。
     *     - **category**：String类型 | 可选 | 当设置的查询防护模块为白名单（**whitelist**）时，可通过设置该参数查询指定白名单分类，取值：
     *         - **waf**：表示网站白名单。
     *         - **ws**：表示Web入侵防护白名单。
     *         - **ac**：表示访问控制/限流白名单。
     *         - **ds**：表示数据安全白名单。
     * - **orderBy**：String类型 | 可选 | 排序字段，取值：
     *     - **action**：表示规则处置动作，该参数值仅在查询自定义防护策略规则时有效。
     *     - **gmt_modified**（默认）：表示最后一次修改时间。
     *     - **name**：表示规则名称。
     *     - **status**：表示规则状态。
     * - **desc**：Boolean类型 | 可选 | 是否倒序排列，取值：
     *     - **false**：表示正序排列。
     *     - **true**（默认）：表示倒序排列。
     * @example `e2ZpbHRlcjp7InJ1bGVJZCI6NDI3NTV9LG9yZGVyQnk6ImdtdF9tb2RpZmllZCIsZGVzYzp0cnVlfQ==`
     */
    "Query"?: string;
    /**
     * 设置规则名称的语言属性，取值：
     * - **zh**：表示规则名称为中文。
     * - **en**：表示规则名称为英文。
     * - **ja**：表示规则名称为日文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf_elasticity-cn-0xldbqt****`
     */
    "InstanceId": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
