export interface ModifyWebAIProtectModeRequest {
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
     * AI智能防护配置的详细信息，使用JSON格式的字符串表述，具体结构如下。
     * - **AiTemplate**：String类型，必选，AI智能防护功能的防护等级。取值：
     *     - **level30**：宽松
     *     - **level60**：正常
     *     - **level90**：严格
     * - **AiMode**：String类型，必选，AI智能防护功能的防护模式。取值：
     *     - **watch**：预警模式
     *     - **defense**：防护模式
     * @example `{"AiTemplate":"level60","AiMode":"defense"}`
     */
    "Config": string;
}
