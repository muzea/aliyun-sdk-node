export interface QuerySavingsPlansDeductLogResponse {
    /**
     * 错误码
     * @example `PARAM_ERROR`
     */
    Code: string;
    /**
     * 错误信息
     * @example `请校验入参正确性`
     */
    Message: string;
    /**
     * 请求ID
     * @example `61293E7A-3406-4447-8620-EC88B0AA66AD`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回元素
     */
    Data: {
        /**
         * 查询页数
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页个数
         * @example `20`
         */
        PageSize: number;
        /**
         * 总个数
         * @example `20`
         */
        TotalCount: number;
        /**
         * 抵扣明细列表
         */
        Items: {
            /**
             * 结束时间
             * @example `2020-12-01 01:00:00`
             */
            EndTime: string;
            /**
             * 开始时间
             * @example `2020-12-01 00:00:00`
             */
            StartTime: string;
            /**
             * 节省计划类型：
             * - universal 通用型
             * - ecs 计算型
             * @example `ecs`
             */
            SavingsType: string;
            /**
             * 用户ID
             * @example `1906589291020438`
             */
            UserId: number;
            /**
             * 当前抵扣使用的折扣率
             * @example `0.069`
             */
            DiscountRate: string;
            /**
             * 抵扣计费项
             * @example `云服务器配置`
             */
            BillModule: string;
            /**
             * 节省计划实例ID
             * @example `spn-xxxxxxx`
             */
            InstanceId: string;
            /**
             * 被抵扣云产品实例ID
             * @example `i-XXXXXXXXX`
             */
            DeductInstanceId: string;
            /**
             * 抵扣商品
             * @example `云服务器ECS-按量付费`
             */
            DeductCommodity: string;
            /**
             * 抵扣率
             * @example `1.0`
             */
            DeductRate: string;
            /**
             * 抵扣费用
             * @example `0.52`
             */
            DeductFee: string;
            /**
             * 所有者ID。
             * @example `1906589291020438`
             */
            OwnerId: number;
            /**
             * 账期
             * @example `202312`
             */
            BillingCycle: string;
            /**
             * 被抵扣实例地域
             * @example `cn-shanghai-eu13-a01`
             */
            Region: string;
            /**
             * 被抵扣实例规格
             * @example `ecs.g7.xlarge`
             */
            InstanceSpec: string;
            /**
             * 被抵扣实例规格族
             * @example `ecs.g7`
             */
            InstanceTypeFamily: string;
            /**
             * 被抵扣账单的官网价
             * @example `375.35`
             */
            BillingOfficialPrice: string;
            /**
             * 被抵扣部分官网价
             * @example `375.37`
             */
            DeductedOfficialPrice: string;
        }[];
    };
}
