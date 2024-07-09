export interface DescribeSecretsResponse {
    /**
     * 请求ID。
     * @example `DF4961DD-16F5-5B24-BD4C-0C7788F7ADAF`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询分页的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回凭证详情列表。
     */
    Secrets: {
        /**
         * 阿里云账号ID。
         * @example `1266348003****`
         */
        AccountId: string;
        /**
         * 用户凭证名称。
         * @example `Foo`
         */
        SecretName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 创建的Data API账号的用户凭证。
         * @example `acs:rds:cn-hangzhou:1335786****:dbInstance/rm-bp1m7l3j63****`
         */
        SecretArn: string;
        /**
         * 用户对凭证的说明。
         * @example `test`
         */
        Description: string;
        /**
         * 数据库用户名。
         * @example `user_jack`
         */
        Username: string;
    }[];
}
