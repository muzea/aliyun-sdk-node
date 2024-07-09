export interface DescribePopApiRequest {
    /**
     * 阿里云产品接口的POP CODE。
     * >调用[DescribeApiList](~~DescribeApiList~~)接口可以获取该参数。
     * @example `Sas`
     */
    "PopCode": string;
    /**
     * API的版本号。
     * >调用[DescribePopApiVersionList](~~DescribePopApiVersionList~~)接口可以获取该参数。
     * @example `2021-10-01`
     */
    "ApiVersion": string;
    /**
     * OpenAPI的参数信息所在环境，固定值为online。
     * @example `online`
     */
    "Env": string;
    /**
     * 阿里云产品API名称。
     * @example `DescribeInstanceInfo`
     */
    "ApiName": string;
}
