export interface DescribeGrantSagRulesResponse {
    /**
     * 授权条目总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页查询时每页展示的授权条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `6E1674AC-083C-4031-B047-7A66E418E0C6`
     */
    RequestId: string;
    /**
     * 分页查询时的页码。
     * @example `2`
     */
    PageNumber: number;
    GrantRules: {
        /**
         * 授权信息列表。
         */
        GrantRule: {
            /**
             * 创建授权的时间戳。
             * @example `156576751700`
             */
            CreateTime: number;
            /**
             * 智能接入网关实例ID。
             * @example `sag-hdhgn*****`
             */
            SmartAGId: string;
            /**
             * 是否给跨账号的云连接网实例授权了智能接入网关实例的流量服务能力。
             * - **true**：已授权。
             * - **false**：未授权。
             * @example `false`
             */
            GrantTrafficService: boolean;
            /**
             * 智能接入网关实例所属的账号ID。
             * @example `123455`
             */
            InstanceId: string;
            /**
             * 云连接网实例所属的账号ID。
             * @example `123456`
             */
            CcnUid: number;
            /**
             * 云连接网实例ID。
             * @example `ccn-hd**********`
             */
            CcnInstanceId: string;
        }[];
    };
}
