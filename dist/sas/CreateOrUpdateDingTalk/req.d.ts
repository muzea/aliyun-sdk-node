export interface CreateOrUpdateDingTalkRequest {
    /**
     * 指定要修改的通知机器人ID。
     * >您可以调用[DescribeDingTalk](~~DescribeDingTalk~~)接口获取该参数。
     * @example `1589`
     */
    "Id"?: number;
    /**
     * 机器人名称。
     * > 钉钉通知名称的长度为2-64个字符。
     * @example `testNotify`
     */
    "RuleActionName": string;
    /**
     * Webhook 地址。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=XXX`
     */
    "SendUrl": string;
    /**
     * 通知频率，单位秒。
     * > 值为**0**则表示不限制通知频率。
     * @example `0`
     */
    "IntervalTime"?: number;
    /**
     * 通知范围。该值为JSONArray格式，包含以下KEY：
     * - **type**：通知范围类型。取值如下：
     * - **configItemList**：检测项通知配置列表，该值为JSONArray格式，包含以下KEY：
     *     - **key**：检测项通知配置KEY。
     *     - **valueList**：检测项通知配置值，该值为JSONArray格式。
     * > 取值请参考“参数补充说明”。
     * @example `[{"type":"sas_analysis_online-sas-operation-log-sas-event-suspicious","configItemList":[{"key":"item_level","valueList":["all"]},{"key":"event_type","valueList":["all"]}]}]`
     */
    "ConfigList"?: string;
    /**
     * 通知的检测威胁资产分组编号。该值为JSONArray格式。
     * > 该值为JSONArray格式，您可以通过调用[DescribeGroupStruct](~~DescribeGroupStruct~~)接口获取资产分组编号。
     * @example `["10417151"]`
     */
    "GroupIdList"?: string;
    /**
     * 通知的语言。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "DingTalkLang"?: string;
}
