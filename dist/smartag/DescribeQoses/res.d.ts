export interface DescribeQosesResponse {
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时，每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `2B5F35DD-0D66-41FC-AA99-BAE473E1A7A2`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    Qoses: {
        /**
         * QoS策略实例信息列表。
         */
        Qos: {
            /**
             * QoS策略实例的描述信息。
             * @example `description`
             */
            QosDescription: string;
            /**
             * QoS策略实例关联的智能接入网关实例数量。
             * @example `0`
             */
            SagCount: string;
            /**
             * QoS策略实例关联的智能接入网关实例列表。
             * @example `sag-x34wj76fe0vhw*****,sag-jp04l844chg16*****`
             */
            SmartAGIds: string;
            /**
             * QoS策略实例ID。
             * @example `qos-oek3r2cmvk7m8q****`
             */
            QosId: string;
            /**
             * QoS策略实例的名称。
             * @example `zxtest`
             */
            QosName: string;
            /**
             * QoS策略实例所属的资源组ID。
             * @example `rg-acfm2iu4fnc****`
             */
            ResourceGroupId: string;
        }[];
    };
}
