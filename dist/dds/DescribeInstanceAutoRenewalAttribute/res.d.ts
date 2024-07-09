export interface DescribeInstanceAutoRenewalAttributeResponse {
    /**
     * 查询结果总数。
     * @example `2`
     */
    ItemsNumbers: number;
    /**
     * 当前页显示的记录数。
     * @example `2`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `FAB5CB3B-DB9D-473A-9DF1-F57B6B9CB949`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 查询结果列表。
         */
        Item: {
            /**
             * 实例类型，返回值为：
             * - **replicate**：单节点或副本集实例。
             * - **sharding**：分片集群实例。
             * @example `replicate`
             */
            DBInstanceType: string;
            /**
             * 自动续费状态，返回值为：
             * - **true**：已开启自动续费。
             * - **false**：未开启自动续费。
             * @example `true`
             */
            AutoRenew: string;
            /**
             * 自动续费的续费周期，单位为月。
             * > - 当**AutoRenew**参数的返回值为**true**时，才会返回本参数。
             * > - 您可以调用[ModifyInstanceAutoRenewalAttribute](~~145979~~)接口，修改自动续费的周期。
             * @example `1`
             */
            Duration: string;
            /**
             * 实例ID。
             * @example `dds-bp2568*****`
             */
            DbInstanceId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
