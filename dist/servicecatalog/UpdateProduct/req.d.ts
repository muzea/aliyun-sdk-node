export interface UpdateProductRequest {
    /**
     * 产品名称。
     * 长度为1~128个字符。
     * @example `DEMO-创建ECS`
     */
    "ProductName": string;
    /**
     * 产品ID。
     * @example `prod-bp18r7q127****`
     */
    "ProductId": string;
    /**
     * 产品描述。
     * 长度为1~128个字符。
     * @example `这是一个产品描述`
     */
    "Description"?: string;
    /**
     * 产品提供者。
     * 长度为1~128个字符。
     * @example `IT团队`
     */
    "ProviderName": string;
}
