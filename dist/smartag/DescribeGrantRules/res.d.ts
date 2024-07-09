export interface DescribeGrantRulesResponse {
    /**
     * 授权条目总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页展示的授权条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `FA579C2D-84A0-4BA1-B9C3-1E5A3B15F1B6`
     */
    RequestId: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    PageNumber: number;
    GrantRules: {
        /**
         * 授权信息列表。
         */
        GrantRule: {
            /**
             * 云企业网实例ID。
             * @example `cen-0jtu0bcbika5b5****`
             */
            CenInstanceId: string;
            /**
             * 云企业网实例所属的账号ID。
             * @example `1250123456123456`
             */
            CenUid: number;
            /**
             * 创建授权的时间戳。
             * @example `1563439920000`
             */
            GmtCreate: number;
            /**
             * 授权条目ID。
             * @example `18313265-d988-406c-965d-3e110ff*****`
             */
            GrantRuleId: string;
            /**
             * 是否给跨账号的云企业网实例授权云连接网实例的流量服务能力。
             * - **true**：已授权。
             * - **false**：未不授权。
             * @example `false`
             */
            GrantTrafficService: boolean;
            /**
             * 授权操作最近修改的时间戳。
             * @example `1563439920000`
             */
            GmtModified: number;
            /**
             * 云连接网实例所属的账号ID。
             * @example `1220123456123456`
             */
            CcnUid: number;
            /**
             * 云连接网实例所属的地域ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * 云连接网实例ID。
             * @example `ccn-n2935s1mnwv8i*****`
             */
            CcnInstanceId: string;
        }[];
    };
}
