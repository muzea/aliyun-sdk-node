export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `A70BEE5D-76D3-49FB-B58F-1F398211****`
     */
    RequestId: string;
    Zones: {
        /**
         * 可用区信息集合。
         */
        Zone: {
            Performance: {
                /**
                 * 接口预留参数，暂未生效，您无需关注。
                 */
                Protocol: string[];
            };
            Capacity: {
                /**
                 * 接口预留参数，暂未生效，您无需关注。
                 */
                Protocol: string[];
            };
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            InstanceTypes: {
                /**
                 * 实例类型信息集合。
                 */
                InstanceType: {
                    /**
                     * 存储类型。
                     * - 当FileSystemType=standard时，包括：Performance（性能型）、Capacity（容量型）。
                     * - 当FileSystemType=extreme时，包括：standard（标准型）、advance（高级型）。
                     * - 当FileSystemType=cpfs时，包括：advance_100（100 MB/s/TiB基线）、advance_200（200 MB/s/TiB基线）。
                     * > 仅中国站支持CPFS文件系统。
                     * @example `Capacity`
                     */
                    StorageType: string;
                    /**
                     * 文件传输协议类型。
                     * - 当FileSystemType=standard时，包括：nfs、smb。
                     * - 当FileSystemType=extreme时，包括：nfs。
                     * - 当FileSystemType=cpfs时，包括：cpfs。
                     * > 仅中国站支持CPFS文件系统。
                     * @example `nfs`
                     */
                    ProtocolType: string;
                }[];
            };
        }[];
    };
}
