export interface DescribeAllWhitelistTemplateResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 分页返回的白名单模板信息。
         */
        Templates: {
            /**
             * 数据表主键。
             * @example `123`
             */
            Id: number;
            /**
             * 用户ID。
             * @example `168****`
             */
            UserId: number;
            /**
             * 白名单模板ID。
             * @example `412`
             */
            TemplateId: number;
            /**
             * 白名单模板名称。
             * @example `template_123`
             */
            TemplateName: string;
            /**
             * IP列表。
             * @example `12.2.X.X,10.0.X.X`
             */
            Ips: string;
        }[];
        /**
         * 总记录数。
         * @example `402`
         */
        TotalRecords: number;
        /**
         * 每页记录数。
         * @example `10`
         */
        MaxRecordsPerPage: number;
        /**
         * 当前页码。
         * @example `1`
         */
        CurrPageNumbers: number;
        /**
         * 总页数。
         * @example `3`
         */
        TotalPageNumbers: number;
        /**
         * 表示符合条件的数据是否有下一页，各取值含义如下：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        HasNext: boolean;
        /**
         * 表示符合条件的数据是否有上一页，各取值含义如下：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        HasPrev: boolean;
    };
    /**
     * 请求ID。
     * @example `16C62438-491B-5C02-9B49-BA924A1372A2`
     */
    RequestId: string;
    /**
     * 表示请求是否成功，各取值含义如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码。各取值含义如下：
     * - **200**：正常
     * - **400**：客户端错误
     * - **401**：身份验证失败
     * - **404**：找不到请求页面
     * - **500**：服务端错误
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * Http状态码。各取值含义如下：
     * - **200**：正常
     * - **400**：客户端错误
     * - **500**：服务端错误
     * @example `200`
     */
    HttpStatusCode: number;
}
