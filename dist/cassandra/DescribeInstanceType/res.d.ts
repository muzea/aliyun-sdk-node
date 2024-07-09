export interface DescribeInstanceTypeResponse {
    /**
     * 请求ID。
     * @example `4B989A12-FB9A-4D9A-A824-2E9267C911C7`
     */
    RequestId: string;
    InstanceTypeSpecList: {
        /**
         * 实例规格列表。
         */
        InstanceTypeSpec: {
            /**
             * 集群实例类型。可取值示例：
             * - cassandra.c.large：2核 4G
             * - cassandra.c.xlarge：4核 8G
             * - cassandra.c.2xlarge：8核 16G
             * @example `cassandra.c.large`
             */
            InstanceType: string;
            /**
             * CPU核数。
             * @example `4`
             */
            CpuSize: number;
            /**
             * 内存大小，单位：GB。
             * @example `8`
             */
            MemSize: number;
        }[];
    };
}
