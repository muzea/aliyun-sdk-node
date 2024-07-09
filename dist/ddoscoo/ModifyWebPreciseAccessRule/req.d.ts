export interface ModifyWebPreciseAccessRuleRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `example.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 精确访问控制规则的配置，使用JSON格式的字符串表述，具体结构如下。
     * - **action**：String类型，必选，匹配动作。取值：
     *     - **accept**：放行
     *     - **block**：封禁
     *     - **challenge**：挑战
     * - **name**：String类型，必选，规则名称。
     * - **condition**：Map类型，必选，匹配条件。具体结构如下。
     *     > 如果设置了多个匹配条件，则多个条件间是且的关系。
     *     - **field**：String类型，必选，匹配字段。
     *     - **match_method**：String类型，必选，匹配方法。
     *
     *         > 关于**field**和**match_method**的取值，请参见请求参数表下的补充描述。
     *     - **content**：String类型，必选，匹配内容。
     * - **header_name**：String类型，可选，头部字段名称。仅在**field**为**header**时生效。
     * @example `[{"action":"block","name":"testrule","condition":[{"field":"uri","match_method":"contain","content":"/test/123"}]}]`
     */
    "Rules": string;
    /**
     * 规则有效期。单位：秒。规则的匹配动作为阻断时（**action**为**block**）生效，在规则有效期内阻断访问请求。不传入该参数表示永久生效。
     * @example `600`
     */
    "Expires"?: number;
}
