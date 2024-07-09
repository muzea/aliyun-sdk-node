export interface DescribeQosPoliciesResponse {
    QosPolicies: {
        /**
         * QoS策略五元组规则配置信息列表。
         */
        QosPolicy: {
            DpiSignatureIds: {
                /**
                 * 应用ID列表。
                 */
                DpiSignatureId: string[];
            };
            /**
             * QoS策略五元组规则应用的协议类型。
             * @example `TCP`
             */
            IpProtocol: string;
            /**
             * QoS策略的实例ID。
             * @example `qos-xitd8690ucu8ro****`
             */
            QosId: string;
            /**
             * QoS策略五元组规则所属的限速规则的优先级。
             * @example `1`
             */
            Priority: number;
            /**
             * QoS策略五元组规则生效结束时间。
             * @example `2019-07-14T16:41:33+0800`
             */
            EndTime: string;
            /**
             * QoS策略五元组规则生效开始时间。
             * @example `2019-07-14T16:41:33+0800`
             */
            StartTime: string;
            /**
             * QoS策略五元组规则描述。
             * @example `docdesc`
             */
            Description: string;
            /**
             * 目的网段。
             * @example `10.10.10.0/24`
             */
            DestCidr: string;
            /**
             * 目的端口范围。
             * @example `90/90`
             */
            DestPortRange: string;
            /**
             * QoS策略五元组规则的实例ID。
             * @example `qospy-427m9fo6wkh****`
             */
            QosPolicyId: string;
            /**
             * QoS策略五元组规则名称。
             * @example `test`
             */
            Name: string;
            /**
             * 源网段。
             * @example `10.0.0.0/24`
             */
            SourceCidr: string;
            /**
             * 源端口范围。
             * @example `80/80`
             */
            SourcePortRange: string;
            DpiGroupIds: {
                /**
                 * 应用组ID列表。
                 */
                DpiGroupId: string[];
            };
        }[];
    };
    /**
     * 当前符合查询条件的QoS策略五元组规则条目总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页查询时每页展示的五元组规则条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `97862812-2C7E-4D25-B0D5-B26DAC7FA293`
     */
    RequestId: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    PageNumber: number;
}
