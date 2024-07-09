export interface QuerySavingsPlansDiscountResponse {
    /**
     * 错误信息
     * @example `This API is not applicable for caller.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `6000EE23-274B-4E07-A697-FF2E999520A4`
     */
    RequestId: string;
    /**
     * data
     */
    Data: {
        /**
         * 请求IP
         * @example `100.104.180.109`
         */
        HostId: string;
        /**
         * 折扣信息列表
         */
        Items: {
            /**
             * 产品明细
             * @example `云服务器ECS-按量付费`
             */
            CommodityName: string;
            /**
             * 计价模块名称。
             * @example `实例`
             */
            ModuleName: string;
            /**
             * 节省计划类型
             * @example `universal`
             */
            SpnType: string;
            /**
             * 付款类型：
             * - total 全预付
             * - half 半预付
             * - zero 0预付
             * @example `total`
             */
            PayMode: string;
            /**
             * 查询周期
             * @example `1:Year`
             */
            Cycle: string;
            /**
             * 地域信息
             * @example `张家口`
             */
            Region: string;
            /**
             * 实例所在地域ID，您可以调用[DescribeDBInstanceAttribute](~~26231~~)查询。
             * @example `cn-hangzhou`
             */
            RegionCode: string;
            /**
             * 资源类型
             * @example `ecs.g6`
             */
            Spec: string;
            /**
             * 官网折扣率
             * @example `0.85`
             */
            DiscountRate: string;
            /**
             * 合同折扣率
             * @example `0.85`
             */
            ContractDiscountRate: string;
        }[];
    };
    /**
     * 错误码
     * @example `PARAM_ERROR`
     */
    Code: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    Success: boolean;
}
