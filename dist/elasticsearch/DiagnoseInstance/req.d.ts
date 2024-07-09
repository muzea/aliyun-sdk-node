export interface DiagnoseInstanceRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 获取的报告的语言。默认为浏览器语言，支持：
     * - en：英语
     * - zh：简体中文
     * - zt：繁体中文
     * - es：西班牙语
     * - fr：法语
     * @example `en`
     */
    "lang"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 诊断任务信息。
     * @example `{     "indices":[],     "type":"ALL",     "diagnoseItems":[         "ClusterBulkRejectDiagnostic",         "IndexAliasUseDiagnostic"     ] }`
     */
    "body"?: {
        /**
         * 待诊断的索引列表。
         */
        indices: string[];
        /**
         * 诊断项。
         */
        diagnoseItems: string[];
        /**
         * 诊断任务类型，支持：
         * - ALL：诊断所有索引。
         * - SELECT：诊断选定的索引。
         * @example `ALL`
         */
        type: string;
    };
}
