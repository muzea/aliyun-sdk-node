export interface DescribeSavingsPlansUsageDetailResponse {
    /**
     * 状态码
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求标识
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 总数据个数
         * @example `1000`
         */
        TotalCount: number;
        /**
         * 下一页token
         * @example `eyJwYWdlTnVtIjoyLCJwYWdlU2ldhsSI6MTB9`
         */
        NextToken: string;
        /**
         * 数据项
         */
        Items: {
            /**
             * 当前状态
             * -1: 欠费、1: 生效
             * @example `-1`
             */
            Status: string;
            /**
             * 类型：通用型、ECS计算型
             * @example `通用型`
             */
            Type: string;
            /**
             * 使用率
             * @example `0.9`
             */
            UsagePercentage: number;
            /**
             * 账号ID
             * @example `123745698925000`
             */
            UserId: number;
            /**
             * 实例ID
             * @example `spn-a1fhs54c243hP22`
             */
            InstanceId: string;
            /**
             * 币种
             * @example `CNY`
             */
            Currency: string;
            /**
             * 按量标准费用
             * @example `4.2`
             */
            PostpaidCost: number;
            /**
             * 节省计划已支出，即已使用承付款
             * @example `3.94`
             */
            DeductValue: number;
            /**
             * 开始时间
             * @example `2021-08-01 00:00:00`
             */
            StartPeriod: string;
            /**
             * 节省净额
             * @example `0.08`
             */
            SavedCost: number;
            /**
             * 节省计划总金额
             * @example `29.84`
             */
            PoolValue: number;
            /**
             * 账号名称
             * @example `test13@test.aliyun.com`
             */
            UserName: string;
            /**
             * 结束时间
             * @example `2021-08-09 00:00:00`
             */
            EndPeriod: string;
        }[];
    };
}
