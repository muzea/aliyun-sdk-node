export interface QuerySavingsPlansInstanceResponse {
    /**
     * 错误码
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息
     * @example `Successful`
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
         * @example `100`
         */
        TotalCount: number;
        /**
         * 实例信息列表
         */
        Items: {
            /**
             * 当前状态
             * - NORMAL 正常状态
             * - LIMIT 欠费停机
             * - RELEASE 释放
             * @example `NORMAL`
             */
            Status: string;
            /**
             * 购买年限
             * @example `1:Year`
             */
            Cycle: string;
            /**
             * 开始时间戳
             * @example `1663135741039`
             */
            StartTimestamp: number;
            /**
             * 节省计划类型：
             * - unversal 通用型
             * -  ecs 计算型
             * @example `ECS`
             */
            SavingsType: string;
            /**
             * 总使用率
             * @example `1.0`
             */
            Utilization: string;
            /**
             * 预付金额
             * @example `8760.00`
             */
            PrepayFee: string;
            /**
             * 节省计划实例ID
             * @example `spn-xxxxxxxx`
             */
            InstanceId: string;
            /**
             * 货币单位：CNY人民币 USD美元
             * @example `CNY`
             */
            Currency: string;
            /**
             * 结束时间戳
             * @example `1663135741039`
             */
            EndTimestamp: number;
            /**
             * 实例失效时间，格式 yyyy-MM-dd HH:mm:ss
             * @example `2021-01-01 00:00:00`
             */
            EndTime: string;
            /**
             * 实例生效时间，格式 yyyy-MM-dd HH:mm:ss
             * @example `2020-01-01 00:00:00`
             */
            StartTime: string;
            /**
             * 分配状态：
             * - unallocated 未分配
             * - allocated 分配中
             * - beAllocated 被分配中
             * @example `unallocated`
             */
            AllocationStatus: string;
            /**
             * 如果是ECS型实例，表示对应的规格族信息或者规格族套餐信息
             * @example `ecs.g6`
             */
            InstanceFamily: string;
            /**
             * 地域信息
             * @example `cn-zhangjiakou-na62-a01`
             */
            Region: string;
            /**
             * 上一周期抵扣总金额
             * @example `100.0`
             */
            LastBillTotalUsage: string;
            /**
             * 上一周期使用率
             * @example `0.8`
             */
            LastBillUtilization: string;
            /**
             * 总节省金额
             * @example `20.00`
             */
            TotalSave: string;
            /**
             * 承付款
             * @example `1.00`
             */
            PoolValue: string;
            /**
             * 付款类型：
             * - total 全预付
             * - half 半预付
             * - zero 0预付
             * @example `total`
             */
            PayMode: string;
            /**
             * 标签信息列表
             */
            Tags: {
                /**
                 * 标签键
                 * @example `标签1`
                 */
                Key: string;
                /**
                 * 标签值
                 * @example `标签1`
                 */
                Value: string;
            }[];
            /**
             * 抵扣周期类型：
             * HOUR：小时
             * DAY：天
             * ONCE：一次性（总量递减）
             * @example `HOUR`
             */
            DeductCycleType: string;
            /**
             * 弹性版，按月，按天保底当前周期剩余金额
             * @example `100.0`
             */
            RestPoolValue: string;
            /**
             * 商品Code
             * @example `savingplan_common_public_cn`
             */
            CommodityCode: string;
            /**
             * 按月周期型当前周期池额度
             * @example `100.0`
             */
            CurrentPoolValue: string;
        }[];
    };
}
