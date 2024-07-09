export interface DescribeResourceCoverageDetailResponse {
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
         * 下一页的token
         * @example `eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9`
         */
        NextToken: string;
        /**
         * 总条数
         * @example `10000`
         */
        TotalCount: number;
        /**
         * 本页条数
         * @example `200`
         */
        MaxResults: number;
        /**
         * 数据项
         */
        Items: {
            /**
             * 产品明细Code
             * @example `ecs`
             */
            CommodityCode: string;
            /**
             * 产品名称
             * @example `云服务器 ECS`
             */
            ProductName: string;
            /**
             * 总用量
             * @example `1`
             */
            TotalQuantity: number;
            /**
             * 地域Code
             * @example `cn-hangzhou-dg-a01`
             */
            RegionNo: string;
            /**
             * 账号ID
             * @example `123745698925000`
             */
            UserId: string;
            /**
             * 产品明细
             * @example `云服务器ECS-按量付费`
             */
            CommodityName: string;
            /**
             * 抵扣单位
             * @example `算力*小时`
             */
            CapacityUnit: string;
            /**
             * 按量实例ID
             * @example `i-bp1d9x623987rlj0dx4xx`
             */
            InstanceId: string;
            /**
             * 币种
             * @example `CNY`
             */
            Currency: string;
            /**
             * 可用区
             * @example `杭州 可用区I`
             */
            ZoneName: string;
            /**
             * 规格
             * @example `ecs.t5-lc2m1.nano`
             */
            InstanceSpec: string;
            /**
             * 结束时间
             * @example `2021-04-01 01:00:00`
             */
            EndTime: string;
            /**
             * 开始时间
             * @example `2021-04-01 00:00:00`
             */
            StartTime: string;
            /**
             * 账单金额
             * @example `0`
             */
            PaymentAmount: number;
            /**
             * 覆盖率
             * @example `1`
             */
            CoveragePercentage: number;
            /**
             * 地域
             * @example `华东1（杭州）`
             */
            Region: string;
            /**
             * 抵扣量
             * @example `1`
             */
            DeductQuantity: number;
            /**
             * 可用区Code
             * @example `cn-hangzhou-i`
             */
            Zone: string;
            /**
             * 账号名称
             * @example `test13@test.aliyun.com`
             */
            UserName: string;
            /**
             * 产品Code
             * @example `ecs`
             */
            ProductCode: string;
        }[];
    };
}
