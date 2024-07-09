export interface GetSQLReviewOptimizeDetailRequest {
    /**
     * 查询SQL审核优化建议详情信息。您可以调用[ListSQLReviewOriginSQL](~~257870~~)接口获取该参数的值。
     * @example `a57e54ec5433475ea3082d882fdb****`
     */
    "SQLReviewQueryKey": string;
    /**
     * 租户ID。您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `1`
     */
    "Tid"?: number;
}
