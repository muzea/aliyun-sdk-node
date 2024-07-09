export interface DescribeAvailableResourceResponse {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 支持的可用区列表。
     */
    AvailableZoneList: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 支持的模式列表。
         */
        SupportedMode: {
            /**
             * 支持的模式，取值说明：
             * - **flexible**：弹性模式。
             * - **reserver**：预留模式。
             * @example `flexible`
             */
            Mode: string;
            /**
             * 支持的系列列表。
             */
            SupportedSerialList: {
                /**
                 * 支持的系列，取值说明：
                 * - **basic**：基础版
                 * - **cluster**：集群版
                 * - **mixed_storage**：集群版（新版）
                 * @example `mixed_storage`
                 */
                Serial: string;
                /**
                 * 弹性模式支持的资源列表。
                 */
                SupportedFlexibleResource: {
                    /**
                     * 磁盘类型，取值说明：
                     * - **hdd**：机械硬盘
                     * - **ssd**：固态硬盘
                     * @example `hdd`
                     */
                    StorageType: string;
                    /**
                     * 支持的计算资源。
                     */
                    SupportedComputeResource: string[];
                    /**
                     * 支持的存储资源。
                     */
                    SupportedStorageResource: string[];
                    /**
                     * 支持的弹性IO资源。
                     */
                    SupportedElasticIOResource: {
                        /**
                         * 步长。
                         * @example `1`
                         */
                        Step: string;
                        /**
                         * 最小值。
                         * @example `0`
                         */
                        MinCount: string;
                        /**
                         * 最大值。
                         * @example `200`
                         */
                        MaxCount: string;
                    };
                }[];
                /**
                 * 预留模式支持的资源列表。
                 */
                SupportedInstanceClassList: {
                    /**
                     * 支持的规格。
                     * @example `C32`
                     */
                    InstanceClass: string;
                    /**
                     * 规格的描述。
                     * @example `C32`
                     */
                    Tips: string;
                    /**
                     * 支持的计算节点数。
                     */
                    SupportedNodeCountList: {
                        /**
                         * 支持的存储大小，单位GB。
                         */
                        StorageSize: string[];
                        /**
                         * 支持的节点数。
                         */
                        NodeCount: {
                            /**
                             * 步长。
                             * @example `1`
                             */
                            Step: string;
                            /**
                             * 最小值。
                             * @example `1`
                             */
                            MinCount: string;
                            /**
                             * 最大值。
                             * @example `200`
                             */
                            MaxCount: string;
                        };
                    }[];
                    /**
                     * 预留参数不涉及。
                     */
                    SupportedExecutorList: {
                        /**
                         * 节点数详情。
                         */
                        NodeCount: {
                            /**
                             * 预留参数不涉及。
                             * @example `无`
                             */
                            Step: string;
                            /**
                             * 预留参数不涉及。
                             * @example `无`
                             */
                            MinCount: string;
                            /**
                             * 预留参数不涉及。
                             * @example `无`
                             */
                            MaxCount: string;
                        };
                    }[];
                }[];
            }[];
        }[];
        /**
         * 预留参数不涉及。
         */
        SupportedComputeResource: string[];
        /**
         * 预留参数不涉及。
         */
        SupportedStorageResource: string[];
    }[];
}
