export interface ListTrustedServiceStatusResponse {
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `CD76D376-2517-4924-92C5-DBC52262F93A`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    EnabledServicePrincipals: {
        /**
         * 已启用的可信服务列表。
         */
        EnabledServicePrincipal: {
            /**
             * 可信服务标识。
             * @example `config.aliyuncs.com`
             */
            ServicePrincipal: string;
            /**
             * 启用可信服务的时间。
             * @example `2019-02-18T15:32:10.473Z`
             */
            EnableTime: string;
        }[];
    };
}
