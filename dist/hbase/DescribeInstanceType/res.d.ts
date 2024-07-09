export interface DescribeInstanceTypeResponse {
    /**
     * 请求ID。
     * @example `DD23BBB4-64C2-42A4-B2E2-7E56C7AA815A`
     */
    RequestId: string;
    InstanceTypeSpecList: {
        /**
         * 实例规格列表。
         */
        InstanceTypeSpec: {
            /**
             * 实例规格名称。
             * @example `hbase.n2.4xlarge`
             */
            InstanceType: string;
            /**
             * CPU核数。
             * @example `8`
             */
            CpuSize: number;
            /**
             * 内存大小。单位：GB。
             * @example `16`
             */
            MemSize: number;
        }[];
    };
}
