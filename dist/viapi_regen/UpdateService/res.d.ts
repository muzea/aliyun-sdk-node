export interface UpdateServiceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `9982B171-4B2D-08B8-8C54-CDA8550D1742`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 服务ID。
         * @example `28`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1634106777620`
         */
        GmtCreate: number;
        /**
         * 服务名称。
         * @example `test3`
         */
        ServiceName: string;
        /**
         * 服务描述。
         * @example `test3描述`
         */
        ServiceDescription: string;
        /**
         * 授权类型。取值：
         * - PUBLIC：指当前服务可被任何账号调用访问。
         * - DESIGNATED_ACCOUNT：指当前服务只能被指定的账户访问。
         * @example `DESIGNATED_ACCOUNT`
         */
        AuthorizationType: string;
        /**
         * 授权账号。
         * @example `1716735326807772,1219984605228589`
         */
        AuthorizedAccount: string;
    };
}
