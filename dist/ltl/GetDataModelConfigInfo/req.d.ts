export interface GetDataModelConfigInfoRequest {
    /**
     * api版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion"?: string;
    /**
     * IoT数据源组ProductKey。
     * @example `HB5jyvZWzwcM****`
     */
    "ProductKey"?: string;
    /**
     * 数据模型编码。
     * @example `DF3K`
     */
    "DataModelCode": string;
}
