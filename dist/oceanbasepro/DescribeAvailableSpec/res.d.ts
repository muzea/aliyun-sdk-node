export interface DescribeAvailableSpecResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 集群可选配置信息。
         */
        AvailableSpecifications: {
            /**
             * 传输实例的规格。
             * @example `oceanbase.cluster.cd8.xlarge`
             */
            Spec: string;
            /**
             * 集群规格信息。
             * @example `4C16GB`
             */
            InstanceClass: string;
            /**
             * 节点个数。
             */
            NodeNum: number[];
            /**
             * 存储大小。
             */
            DiskSizeRange: {
                /**
                 * 最小调整粒度。
                 * @example `5`
                 */
                Step: number;
                /**
                 * 最大值。
                 * @example `40000`
                 */
                Max: number;
                /**
                 * 最小值。
                 * @example `1000`
                 */
                Min: number;
            };
            /**
             * 日志盘大小。
             */
            LogDiskSizeRange: {
                /**
                 * 最小调整粒度。
                 * @example `5`
                 */
                Step: number;
                /**
                 * 最大值。
                 * @example `4000`
                 */
                Max: number;
                /**
                 * 最小值。
                 * @example `100`
                 */
                Min: number;
            };
            /**
             * 存储类型列表信息。
             */
            DiskTypes: string[];
        }[];
    };
}
