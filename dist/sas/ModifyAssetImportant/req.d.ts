export interface ModifyAssetImportantRequest {
    /**
     * 重要性。取值：
     * - **0**：测试
     * - **1**：一般
     * - **2**：重要
     * @example `0`
     */
    "ImportantCode"?: number;
    /**
     * 指定服务器UUID列表。多个UUID使用半角逗号（,）分隔。
     * > 您可以调用[DescribeCloudCenterInstances ](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `076a446d-df7d-424c-bdc5-bb5dc7f1****`
     */
    "UuidList"?: string;
}
