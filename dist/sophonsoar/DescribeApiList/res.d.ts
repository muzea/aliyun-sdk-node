export interface DescribeApiListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4A15D31E-B38B-5F7F-8DC0-1C74408875AA`
     */
    RequestId: string;
    /**
     * 产品列表信息。
     */
    ApiList: {
        /**
         * 阿里云产品接口的POP CODE。
         * @example `Sas`
         */
        PopCode: string;
        /**
         * 阿里云产品名称。
         * @example `Cloud Security Center`
         */
        ProductName: string;
        /**
         * 阿里云产品接口文档链接。
         * @example `https://xxxxx`
         */
        DocUrl: string;
    }[];
}
