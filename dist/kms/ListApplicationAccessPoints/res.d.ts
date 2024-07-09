export interface ListApplicationAccessPointsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `bcfefe15-46f0-44a3-bd96-3d422474b71a`
     */
    RequestId: string;
    /**
     * 分页查询时，当前页面的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时，每页包含应用接入点的数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 应用接入点的总数量。
     * @example `1`
     */
    TotalCount: number;
    ApplicationAccessPoints: {
        /**
         * 应用接入点列表。
         */
        ApplicationAccessPoint: {
            /**
             * 应用接入点名称。
             * @example `aap_test`
             */
            Name: string;
            /**
             * 认证方式。
             * @example `ClientKey`
             */
            AuthenticationMethod: string;
        }[];
    };
}
