export interface DescribeGlobalAccelerationInstancesResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `6B4EE38D-C75B-4E1F-844E-863A94430676`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    GlobalAccelerationInstances: {
        /**
         * 全球加速实例列表的详细信息。
         */
        GlobalAccelerationInstance: {
            /**
             * 全球加速实例的创建时间，UTC时间。
             * @example `2018-07-05T03:39:31Z`
             */
            CreationTime: string;
            /**
             * 全球加速实例的状态。
             * - **Available**：可用。
             * - **Inuse**：已分配。
             *
             * - **Associating**：绑定中。
             *
             * - **Unassociating**：解绑中。
             * @example `InUse`
             */
            Status: string;
            /**
             * 全球加速实例的带宽类型。
             * - **Sharing**：带宽共享型实例。
             *
             * - **Exclusive**（默认值）：带宽独享型实例。
             * @example `Exclusive`
             */
            BandwidthType: string;
            /**
             * 全球加速实例的付费类型。
             * @example `PrePaid`
             */
            ChargeType: string;
            /**
             * 全球加速实例的ID。
             * @example `ga-bp1x99kj7kl1ziw5x****`
             */
            GlobalAccelerationInstanceId: string;
            /**
             * 全球加速实例的服务区域。
             * @example `china-mainland`
             */
            ServiceLocation: string;
            /**
             * 全球加速实例所在的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 全球加速实例的加速区域。
             * @example `china-mainland`
             */
            AccelerationLocation: string;
            /**
             * 独享型全球加速实例的公网IP。
             * @example `47.xx.xx.99`
             */
            IpAddress: string;
            /**
             * 全球加速实例的描述。
             * @example `apiDescription`
             */
            Description: string;
            /**
             * 全球加速实例的带宽峰值。
             * @example `10`
             */
            Bandwidth: string;
            /**
             * 实例过期时间。
             * @example `2018-08-05T16:00Z`
             */
            ExpiredTime: string;
            /**
             * 全球加速实例的计费方式。
             * @example `PayByBandwidth`
             */
            InternetChargeType: string;
            /**
             * 全球加速实例的名称。
             * @example `instanceName`
             */
            Name: string;
            BackendServers: {
                /**
                 * 全球加速实例的后端服务器的详细信息。
                 */
                BackendServer: {
                    /**
                     * 后端服务器IP地址。
                     * @example `172.xx.xx.109`
                     */
                    ServerIpAddress: string;
                    /**
                     * 后端服务器ID。
                     * @example `i-2zeg83zvn5d4ed4y****`
                     */
                    ServerId: string;
                    /**
                     * 后端服务器类型。
                     * - **EcsInstance**：ECS实例。
                     * - **SlbInstance**：SLB实例。
                     * @example `EcsInstance`
                     */
                    ServerType: string;
                    /**
                     * 后端服务器所在的地域。
                     * @example `cn-beijing`
                     */
                    RegionId: string;
                }[];
            };
            PublicIpAddresses: {
                /**
                 * 公网IP。
                 */
                PublicIpAddress: {
                    /**
                     * 全球加速实例的公网IP。
                     * @example `12.xx.xx.78`
                     */
                    IpAddress: string;
                    /**
                     * 全球加速实例的公网IP的ID。
                     * @example `eip-bp19yqraac4w3y0jd****`
                     */
                    AllocationId: string;
                }[];
            };
        }[];
    };
}
