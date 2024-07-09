export interface ApplyDataModelConfigInfoRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion"?: string;
    /**
     * IoT数据源组ProductKey。
     * @example `HB5jyvZWz******g`
     */
    "ProductKey"?: string;
    /**
     * 数据模型标识。
     * @example `DF3K`
     */
    "DataModelCode": string;
    /**
     * 模型配置信息。
     * @example `{\"productKey\":\"a1lPbm9Yq0v\"}`
     */
    "Configuration": string;
}
