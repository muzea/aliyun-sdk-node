export interface QueryRMSMetricsRequest {
    /**
     * 开始时间
     * @example `1636308360000`
     */
    "Start": number;
    /**
     * 查询结束时间
     * @example `1632278280000`
     */
    "End": number;
    /**
     * 插件类型
     * @example `SM`
     */
    "Plugin": string;
    /**
     * 监控指标唯一ID
     * @example `2643`
     */
    "DsId": string;
    /**
     * 指标数据类型
     * @example `INDEXABLE_MULTI_KEY_STAT`
     */
    "ContentType"?: string;
    /**
     * 工作空间名称
     * @example `prod`
     */
    "WorkspaceName": string;
    "PeriodType"?: string;
    /**
     * 指标维度过滤条件，一般可不填
     */
    "FieldsRepeatList"?: string[];
    /**
     * 更多过滤条件
     */
    "Where"?: {
        /**
         * 过滤 Key
         * @example `app`
         */
        Key: string;
        /**
         * 过滤 Value
         * @example `monitorprod`
         */
        Value: string;
    }[];
}
