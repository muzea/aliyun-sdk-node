export interface DescribeGrantRulesToCenResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `F5BB78C8-5F41-464F-B9FF-5E0A7198BA26`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    CenGrantRules: {
        /**
         * 网络实例授权信息。
         */
        CbnGrantRule: {
            /**
             * 已授权的云企业网实例的ID。
             * @example `cen-9gsm1q2yh1prpt****`
             */
            CenInstanceId: string;
            /**
             * 已授权的云企业网实例所属阿里云账号的UID。
             * @example `132193271328****`
             */
            CenOwnerId: number;
            /**
             * 实例创建时间。
             * @example `2019-11-15T09:26:36Z`
             */
            CreationTime: string;
        }[];
    };
}
