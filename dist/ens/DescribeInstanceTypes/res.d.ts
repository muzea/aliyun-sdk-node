export interface DescribeInstanceTypesResponse {
    /**
     * 业务码。调用成功返回0，失败返回错误码。
     * @example `0`
     */
    Code: number;
    InstanceTypes: {
        /**
         * 实例规格集合。
         */
        InstanceType: {
            /**
             * vCPU内核数目。
             * @example `2`
             */
            CpuCoreCount: number;
            /**
             * 此参数暂时不用。
             * @example `此参数暂时不用。`
             */
            InstanceTypeId: string;
            /**
             * 实例规格名称。
             * @example `ens.xxx.small`
             */
            InstanceTypeName: string;
            /**
             * 内存大小，单位：MB。
             * @example `8192`
             */
            MemorySize: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `D452D190-BADF-5D09-910D-599B96D42AAA`
     */
    RequestId: string;
}
