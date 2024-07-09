export interface PushDocumentsRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 数据源名称
     * @example `ha-cn-pl32rf0****_ecom_table_test`
     */
    "dataSourceName": string;
    /**
     * 请求体参数
     */
    "body"?: any[];
    /**
     * 主键字段
     * @example `id`
     */
    "pkField"?: string;
}
