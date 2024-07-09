export interface CreateAggregateRemediationRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-6b7c626622af00b4****`
     */
    "ConfigRuleId": string;
    /**
     * 修正类型。取值：
     * - OOS：运维编排（模板修正）。
     * - FC：函数计算（自定义修正）。
     * @example `OOS`
     */
    "RemediationType": string;
    /**
     * 修正模板ID。
     * - 当`RemediationType`为`OOS`时，该参数为`ACS-OSS-PutBucketAcl`。关于如何获取修正模板ID，请参见[ListRemediationTemplates](~~416781~~)。
     * - 当`RemediationType`为`FC`时，该参数为函数计算的ARN，例如：`acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/test-php`。
     * @example `ACS-OSS-PutBucketAcl`
     */
    "RemediationTemplateId": string;
    /**
     * 修正执行方式。取值：
     * - NON_EXECUTION：不执行。
     * - AUTO_EXECUTION：自动执行。
     * - MANUAL_EXECUTION：手动执行。
     * - NOT_CONFIG：未设置。
     * @example `MANUAL_EXECUTION`
     */
    "InvokeType": string;
    /**
     * 执行修正的模板来源。取值：
     * - ALIYUN（默认值）：官网模板。
     * - CUSTOM：自定义模板。
     * - NONE：无。
     * @example `ALIYUN`
     */
    "SourceType"?: string;
    /**
     * 修正设置的参数。
     * 关于如何获取修正设置的参数，请参见[ListRemediationTemplates](~~416781~~)中的参数`TemplateDefinition`。
     * @example `{"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}`
     */
    "Params": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-6b4a626622af0012****`
     */
    "AggregatorId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `AAAAAdDWBF2****`
     */
    "ClientToken"?: string;
}
