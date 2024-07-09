export interface DescribeCustomBlockRecordsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `028CF634-5268-5660-9575-48C9ED6B7T8Y`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `708`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `3`
         */
        Count: number;
    };
    /**
     * 策略列表信息。
     */
    RecordList: {
        /**
         * 暴力破解防御规则的状态。
         * 取值：
         * - **0**：失效
         * - **1**：启用
         * - **2**：失败
         * @example `1`
         */
        Status: number;
        /**
         * 防暴力破解IP拦截到期的时间戳。
         * @example `1671506882063`
         */
        BlockExpireDate: number;
        /**
         * 拦截生效成功的服务器数量。
         * @example `4`
         */
        EnableCount: number;
        /**
         * 该拦截IP记录需要生效的服务器总数。
         * @example `6`
         */
        ServerCount: number;
        /**
         * 防暴力破解拦截的IP。
         * @example `45.227.XX.XX
        `
         */
        BlockIp: string;
        /**
         * 服务器暴力破解拦截策略阻断IP的方向。
         * 取值：
         *  - **in** ：入方向
         *  - **out**： 出方向
         * @example `in`
         */
        Bound: string;
        /**
         * 此次规则下发的来源。
         * @example `UserRule`
         */
        Source: string;
        /**
         * 记录id。
         * @example `353376`
         */
        Id: number;
        /**
         * 规则生效的服务器。
         */
        TargetList: {
            /**
             * 指定的目标资产id。
             * @example `032b618f-b220-4a0d-bd37-fbdc6*******`
             */
            Target: string;
            /**
             * 查询类型。
             * 取值：
             * - **uuid**：资产ID
             * @example `uuid`
             */
            TargetType: string;
        }[];
    }[];
}
