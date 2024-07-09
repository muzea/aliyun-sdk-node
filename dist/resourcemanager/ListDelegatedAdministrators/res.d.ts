export interface ListDelegatedAdministratorsResponse {
    /**
     * 请求ID。
     * @example `009C3A02-7D4B-416C-9CE7-548C91508F1E`
     */
    RequestId: string;
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
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
    Accounts: {
        /**
         * 委派管理员账号信息。
         */
        Account: {
            /**
             * 成员UID。
             * @example `138660628348****`
             */
            AccountId: string;
            /**
             * 成员名称。
             * @example `abc`
             */
            DisplayName: string;
            /**
             * 成员加入方式。取值：
             * - invited：邀请。
             * - created：创建。
             * @example `created`
             */
            JoinMethod: string;
            /**
             * 可信服务的标识。
             * @example `cloudfw.aliyuncs.com`
             */
            ServicePrincipal: string;
            /**
             * 设置为委派管理员账号的时间戳。
             * @example `1616652684164`
             */
            DelegationEnabledTime: string;
        }[];
    };
}
