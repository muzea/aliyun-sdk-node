export interface ListAvailableEcsTypesResponse {
    /**
     * 是否支持抢占式实例。可能值：
     * - false：不支持
     * - true：支持
     * @example `false`
     */
    SupportSpotInstance: boolean;
    /**
     * 请求ID。
     * @example `D9DD3AF8-1F91-4075-8669-55D10E45****`
     */
    RequestId: string;
    InstanceTypeFamilies: {
        /**
         * 实例规格所属的规格族。
         */
        InstanceTypeFamilyInfo: {
            /**
             * 实例规格族。
             * @example `ecs-3`
             */
            Generation: string;
            /**
             * 实例规格所属的规格族ID。更多详情，请参见[实例规格族](~~25378~~)。
             * @example `ecs.n4`
             */
            InstanceTypeFamilyId: string;
            Types: {
                /**
                 * 规格列表。
                 */
                TypesInfo: {
                    /**
                     * ECS实例状态。可能值：
                     * - SoldOut：资源已售罄
                     * - Available：资源充足
                     * @example `Available`
                     */
                    Status: string;
                    /**
                     * ECS实例规格ID。
                     * @example `ecs.n4.xlarge`
                     */
                    InstanceTypeId: string;
                    /**
                     * 内网入方向带宽限制。单位：kbit/s
                     * @example `10240000`
                     */
                    InstanceBandwidthRx: number;
                    /**
                     * ECS实例安装的GPU类型。
                     * @example `NVIDIA V100`
                     */
                    GPUSpec: string;
                    /**
                     * 内网出方向带宽限制。单位：kbit/s
                     * @example `10240000`
                     */
                    InstanceBandwidthTx: number;
                    /**
                     * 内网入方向网络收发包能力。单位：Pps
                     * @example `9000000`
                     */
                    InstancePpsRx: number;
                    /**
                     * 内网出方向网络收发包能力。单位：Pps
                     * @example `9000000`
                     */
                    InstancePpsTx: number;
                    /**
                     * ECS实例安装的GPU数量。
                     * @example `2`
                     */
                    GPUAmount: number;
                    /**
                     * vCPU内核数目。
                     * @example `4`
                     */
                    CpuCoreCount: number;
                    /**
                     * ECS实例内存大小。单位：GiB
                     * @example `8`
                     */
                    MemorySize: number;
                    /**
                     * ECS实例支持挂载的弹性网卡上限。
                     * @example `2`
                     */
                    EniQuantity: number;
                    ZoneIds: {
                        /**
                         * 可用区ID列表。
                         */
                        ZoneId: string[];
                    };
                }[];
            };
        }[];
    };
}
