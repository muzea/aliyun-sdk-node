export interface ConfigWebCCRuleV2Request {
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 频率控制规则的配置，使用JSON格式的字符串表述，具体结构如下。
     * - **action**：String类型，必选，匹配动作。取值：
     *     - **block**：封禁
     *     - **challenge**：挑战
     *     - **watch**：观察
     * - **name**：String类型，必选，规则名称。
     * - **condition**：Map类型，必选，匹配条件。具体结构如下。
     *     > 如果设置了多个匹配条件，则多个条件间是且的关系。
     *     - **field**：String类型，必选，匹配字段。
     *     - **match_method**：String类型，必选，匹配方法。
     *
     *         > 关于**field**和**match_method**的取值，请参见请求参数表下的补充描述。
     *     - **header_name**：String类型，可选，自定义HTTP头部字段名称。
     *         > 仅在**field**为**header**时有效。
     *     - **content**：String类型，必选，匹配内容。
     * - **ratelimit**：String类型，可选，频率控制字段，可以按照IP或者自定义Header进行频率统计。具体结构如下。
     *   - **interval**：Integer类型，必选，统计时长（秒）。
     *   - **ttl**：Integer类型，必选，处置时长（秒）。
     *   - **threshold**：Integer类型，必选，阈值（次）。
     *   - **subkey**：String类型，可选，字段名称（仅当统计源为header时设置）。
     *   - **target**：String类型，必选，统计源，支持ip和header。
     * - **status_code**：String类型，可选，频率控制字段，可以根据状态码出现数量或频率进行统计。具体结构如下。
     *   - **enabled**：Boolean类型，必选，是否开启状态码统计。
     *   - **code**：Integer类型，必选，状态码，值范围**100**~**599**。
     *   - **use_ratio**：Boolean类型，必选，为true时使用比率。
     *   - **ratio_threshold**：Integer类型，可选，状态码出现比率，使用比率时，仅在对应状态码达到 **ratio_threshold** 时触发处置动作，值范围**1**~**100**。
     *   - **count_threshold**：Integer类型，可选，状态码出现数量，不使用比率时，仅在对应状态码达到 **count_threshold** 时触发处置动作，值范围**2**~**50000**。
     * - **statistics**：String类型，可选，去重统计，可缺省（缺省为不去重统计）。具体结构如下。
     *   - **mode**：String类型，必选，是否开启状态码统计。取值：
     *     - **count**：不去重统计
     *     - **distinct**：去重统计
     *   - **field**：String类型，必选，统计源，去重统计，仅支持ip、header和uri。
     *   - **header_name**：String类型，可选，字段名称，仅当统计源为header时设置。
     * @example `[{"action":"block","name":"trdsss","statistics":{"mode":"count","field":"header","header_name":"hahah"},"ratelimit":{"interval":60,"ttl":300,"threshold":70,"target":"ip"},"status_code":{"enabled":true,"code":404,"use_ratio":true,"ratio_threshold":80,"count_threshold":2},"condition":[{"field":"ip","match_method":"belong","content":"1.1.1.1"}]}]`
     */
    "RuleList": string;
    /**
     * 规则有效期。单位：秒。
     *    > 规则的匹配动作为封禁时（action为block）生效，在规则有效期内阻断访问请求。不传入该参数表示永久生效。
     * @example `600`
     */
    "Expires"?: number;
}
