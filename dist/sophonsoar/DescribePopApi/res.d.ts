export interface DescribePopApiResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1A01B0BA-CFC4-5813-9EB0-A5DA15FA95AE`
     */
    RequestId: string;
    /**
     * 阿里云产品接口的POP CODE。
     * @example `Sas`
     */
    PopCode: string;
    /**
     * API版本号。
     * @example `2019-09-10`
     */
    Version: string;
    /**
     * API的名称。
     * @example `AddAssetCleanConfig`
     */
    ApiName: string;
    /**
     * API的信息列表。
     */
    OpenApiMetaList: {
        /**
         * 参数名称。
         * @example `DescribePopApi`
         */
        Name: string;
        /**
         * 该参数是否必填。
         * - true：必填。
         * - false：非必填。
         * @example `false`
         */
        Required: boolean;
        /**
         * 示例值。
         * @example `12.xx.xx.xx`
         */
        ExampleValue: string;
        /**
         * 参数的描述。
         * @example `demo parameter`
         */
        Description: string;
        /**
         * 参数字段的数据类型，取值如下：
         * - **string**：字符串
         * - **boolean**：布尔值
         * - **integer**：整型
         * - **long**：长整型
         * @example `string`
         */
        Type: string;
    }[];
}
