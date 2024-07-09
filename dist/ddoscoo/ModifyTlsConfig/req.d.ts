export interface ModifyTlsConfigRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `example.aliyundoc.com`
     */
    "Domain": string;
    /**
     * TLS安全策略的详细信息，使用JSON格式的字符串表达，具体结构如下。
     * - **ssl_protocols**：String类型，必选，TLS版本。取值：
     *     - **tls1.0**：支持TLS1.0及以上
     *     - **tls1.1**：支持TLS1.1及以上
     *     - **tls1.2**：支持TLS1.2及以上
     * - **ssl_ciphers**：String类型，必选，加密套件类型。取值：
     *     - **all**：全部加密套件，包含强加密套件和弱加密套件
     *     - **improved**：增强加密套件
     *     - **strong**：强加密套件
     *     - **default**：默认，仅包含强加密套件
     * @example `{"ssl_protocols":"tls1.0","ssl_ciphers":"all"}`
     */
    "Config": string;
}
