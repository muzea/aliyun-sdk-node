export interface DescribePopApiVersionListRequest {
    /**
     * 阿里云产品接口的POP CODE。
     * >调用[DescribeApiList](~~DescribeApiList~~)接口可以获取该参数。
     * @example `Sas`
     */
    "PopCode": string;
    /**
     * OpenAPI的参数信息所在环境，固定值为**online**。
     * @example `online`
     */
    "Env": string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
