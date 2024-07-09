export interface DescribeNamespaceResponse {
    /**
     * 响应描述
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3116581E-C664-4D3A-A055-****`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 命名空间
     */
    Namespace: {
        /**
         * ACM专用SecretKey（即将废弃，不建议使用）
         * @example `6/eQ0****`
         */
        SecretKey: string;
        /**
         * ACM专用AccessKey（即将废弃，不建议使用）
         * @example `2c017****`
         */
        AccessKey: string;
        /**
         * 连接点
         * @example `acm.aliyun.com`
         */
        Endpoint: string;
        /**
         * 命名空间名称
         * @example `测试环境`
         */
        Name: string;
        /**
         * 区域
         * @example `cn-shanghai`
         */
        RegionId: string;
    };
}
