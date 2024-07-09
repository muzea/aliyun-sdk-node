export interface SearchRetcodeAppByPageRequest {
    /**
     * 前端监控应用名称。
     * @example `App1`
     */
    "RetcodeAppName"?: string;
    /**
     * 当前查询页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询页数。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID，您可以通过**资源管理**控制台获取。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 应用ID。
     * 在**ARMS控制台**的**前端监控** > **前端列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为`pid=xxx`。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为`xxx%4074xxx`，则需要将**%40**替换为**@**，即：`xxx@74xxx`。
     * @example `eb4zdose6v@9781be0f44d****`
     */
    "RetcodeAppId"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签的键（key）。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签的值（value）。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
