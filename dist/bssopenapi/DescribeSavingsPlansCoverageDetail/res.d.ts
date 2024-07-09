export interface DescribeSavingsPlansCoverageDetailResponse {
    /**
     * 状态码
     * @example `success`
     */
    Code: string;
    /**
     * 接口调用信息
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的查询数据
     */
    Data: {
        /**
         * 总数据个数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 下一页的token
         * @example `eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9`
         */
        NextToken: string;
        /**
         * 数据项
         */
        Items: {
            /**
             * 用户id
             * @example `1906589291020438`
             */
            UserId: number;
            /**
             * 被抵扣商品所有者ID。
             * @example `1906589291020438`
             */
            OwnerId: number;
            /**
             * 实例id
             * @example `i-bp1d9x623987rlj0dx4xx`
             */
            InstanceId: string;
            /**
             * 币种
             * @example `CNY`
             */
            Currency: string;
            /**
             * 实例规格。
             * @example `ecs.sn1ne.3xlarge`
             */
            InstanceSpec: string;
            /**
             * 按量成本
             * @example `200`
             */
            PostpaidCost: number;
            /**
             * 覆盖率
             * @example `0.9`
             */
            CoveragePercentage: number;
            /**
             * 地域
             * @example `华东1（杭州）`
             */
            Region: string;
            /**
             * 抵扣金额
             * @example `5.5`
             */
            DeductAmount: number;
            /**
             * 开始时间
             * @example `2023-04-01 00:00:00`
             */
            StartPeriod: string;
            /**
             * 总支出
             * @example `6.11`
             */
            TotalAmount: number;
            /**
             * 用户账号名
             * @example `xxx@test.aliyunid.com`
             */
            UserName: string;
            /**
             * 结束时间
             * @example `2023-05-01 00:00:00`
             */
            EndPeriod: string;
        }[];
    };
}
