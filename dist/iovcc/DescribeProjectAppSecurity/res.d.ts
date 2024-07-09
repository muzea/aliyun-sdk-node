export interface DescribeProjectAppSecurityResponse {
    /**
     * 请求ID
     * @example `B030DF87-3AC0-4096-A50B-98B16C98B6CC`
     */
    RequestId: string;
    /**
     * 项目应用的密钥信息
     */
    ProjectAppSecurity: {
        /**
         * 应用AppSecret
         * @example `222222`
         */
        AppSecret: string;
        /**
         * 应用AppKey
         * @example `111111`
         */
        AppKey: string;
        /**
         * 应用ID
         * @example `A3BU0HBO`
         */
        AppId: string;
        /**
         * 创建时间
         * @example `1508737512000`
         */
        GmtCreate: number;
        /**
         * 修改时间
         * @example `1508737512000`
         */
        GmtModified: number;
        /**
         * 主键ID
         * @example `4`
         */
        Id: number;
    };
}
