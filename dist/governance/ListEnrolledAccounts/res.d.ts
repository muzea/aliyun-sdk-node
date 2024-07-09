export interface ListEnrolledAccountsResponse {
    /**
     * 请求ID。
     * @example `768F908D-A66A-5A5D-816C-20C93CBBFEE3`
     */
    RequestId: string;
    /**
     * 查询返回结果下一页的令牌。
     * @example `AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****`
     */
    NextToken: string;
    /**
     * 账号列表。
     */
    EnrolledAccounts: {
        /**
         * 创建状态。取值：
         * - Pending：等待中。
         * - Running：创建实施中。
         * - Finished：创建成功。
         * - Failed：创建失败。
         * - Scheduling：调度中。
         * - ScheduleFailed：调度失败。
         * @example `Running`
         */
        Status: string;
        /**
         * 创建时间。
         * @example `2021-11-01T02:38:27Z`
         */
        CreateTime: string;
        /**
         * 账号显示名称。
         * @example `TestAccount`
         */
        DisplayName: string;
        /**
         * 父资源夹ID。
         * @example `fd-5ESoku****`
         */
        FolderId: string;
        /**
         * 更新时间。
         * @example `2021-11-01T02:38:27Z`
         */
        UpdateTime: string;
        /**
         * 账号ID。
         * @example `19534534552*****`
         */
        AccountUid: number;
        /**
         * 结算账号ID。
         * @example `13161210500*****`
         */
        PayerAccountUid: number;
        /**
         * 当前应用的基线ID。
         * @example `afb-bp1durvn3lgqe28v****`
         */
        BaselineId: string;
    }[];
}
