export interface DescribeResourceUsageDetailResponse {
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
         * 数据条目
         */
        Items: {
            /**
             * 状态
             * @example `Valid`
             */
            Status: string;
            /**
             * 使用率
             * @example `0.5`
             */
            UsagePercentage: number;
            /**
             * 资源实例ID
             * @example `ecsri-bp147nnfz21225k9mpix00`
             */
            ResourceInstanceId: string;
            /**
             * 资源总量
             * @example `2`
             */
            TotalQuantity: number;
            /**
             * 资源购买费用
             * @example `0`
             */
            ReservationCost: string;
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
             * 状态名称
             * @example `生效`
             */
            StatusName: string;
            /**
             * 抵扣单位
             * @example `算力*小时`
             */
            CapacityUnit: string;
            /**
             * 潜在节省净值
             * @example `0.13`
             */
            PotentialSavedCost: string;
            /**
             * 币种
             * @example `CNY`
             */
            Currency: string;
            /**
             * 可用区Code
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
             * 按量成本等效值
             * @example `0.06`
             */
            PostpaidCost: string;
            /**
             * 操作系统
             * @example `linux`
             */
            ImageType: string;
            /**
             * 开始时间
             * @example `2021-04-01 00:00:00`
             */
            StartTime: string;
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
             * 节省净值
             * @example `0.06`
             */
            SavedCost: string;
            /**
             * 可用区
             * @example `cn-hangzhou-i`
             */
            Zone: string;
            /**
             * 账号名称
             * @example `test@aliyun.com`
             */
            UserName: string;
            /**
             * 资源数量
             * @example `2`
             */
            Quantity: number;
        }[];
    };
}
