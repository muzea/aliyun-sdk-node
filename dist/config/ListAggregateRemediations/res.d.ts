export interface ListAggregateRemediationsResponse {
    /**
     * 请求ID。
     * @example `0146963A-20C0-4E75-B93A-7D622B5FD7C8`
     */
    RequestId: string;
    /**
     * 修正设置信息。
     */
    Remediations: {
        /**
         * 修正模板ID。
         * @example `ACS-OSS-PutBucketAcl`
         */
        RemediationTemplateId: string;
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
         * 修正最近一次执行成功的ID。
         * @example `bd7629fb-cac8-42fe-bcb1-e362c5a6****`
         */
        LastSuccessfulInvocationId: string;
        /**
         * 阿里云账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 账号组ID。
         * @example `ca-6b4a626622af0012****`
         */
        AggregatorId: string;
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
         * 修正设置ID。
         * @example `crr-6b7c626622af0026****`
         */
        RemediationId: string;
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
         * @example `cr-6b7c626622af00b4****`
         */
        ConfigRuleId: string;
        /**
         * 修正最近一次执行成功的时间戳。单位：毫秒。
         * @example `1625451393589`
         */
        LastSuccessfulInvocationTime: number;
        /**
         * 修正设置参数的转换格式。仅用于转换OOS模板的参数。
         * @example `{"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}`
         */
        RemediaitonOriginParams: string;
    }[];
}
