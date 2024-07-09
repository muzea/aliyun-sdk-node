export interface DescribeRemediationResponse {
    /**
     * 请求ID。
     * @example `79BE07A7-46A5-5D3C-B378-0ACDA979****`
     */
    RequestId: string;
    /**
     * 修正设置详情。
     */
    Remediation: {
        /**
         * 修正最近一次执行成功的方式。取值：
         * - NON_EXECUTION：不执行。
         * - AUTO_EXECUTION：自动执行。
         * - MANUAL_EXECUTION：手动执行。
         * - NOT_CONFIG：未设置。
         * @example `AUTO_EXECUTION`
         */
        LastSuccessfulInvocationType: string;
        /**
         * 修正模板ID。
         * @example `ACS-OSS-PutBucketAcl`
         */
        RemediationTemplateId: string;
        /**
         * 修正设置参数的转换格式。仅用于转换OOS模板的参数。
         * @example `{"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}`
         */
        RemediationOriginParams: string;
        /**
         * 修正设置ID。
         * @example `crr-f381cf0c1c2f004e****`
         */
        RemediationId: string;
        /**
         * 执行修正的模板来源。取值：
         * - ALIYUN：官网模板。
         * - CUSTOM：自定义模板。
         * - NONE：无。
         * @example `ALIYUN`
         */
        RemediationSourceType: string;
        /**
         * 修正类型。取值：
         * - OOS：运维编排（官方修正）。
         * - FC：函数计算（自定义修正）。
         * @example `OOS`
         */
        RemediationType: string;
        /**
         * 修正最近一次执行成功的记录ID。
         * @example `bd7629fb-cac8-42fe-bcb1-e362c5a6****`
         */
        LastSuccessfulInvocationId: string;
        /**
         * 阿里云账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 修正执行方式。取值：
         * - NON_EXECUTION：不执行。
         * - AUTO_EXECUTION：自动执行。
         * - MANUAL_EXECUTION：手动执行。
         * - NOT_CONFIG：未设置。
         * @example `AUTO_EXECUTION`
         */
        InvokeType: string;
        /**
         * 规则ID。
         * @example `cr-3184626622af003****`
         */
        ConfigRuleId: string;
        /**
         * 修正最近一次执行成功的时间戳。单位：毫秒。
         * @example `1625451393589`
         */
        LastSuccessfulInvocationTime: number;
    };
}
