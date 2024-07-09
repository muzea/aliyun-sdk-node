export interface DescribeImageSupportInstanceTypesResponse {
    /**
     * 请求ID。
     * @example ` 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询的镜像ID。
     * @example `m-o6w3gy99qf89rkga****`
     */
    ImageId: string;
    /**
     * 镜像所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    InstanceTypes: {
        /**
         * 由InstanceTypeItemType组成的实例规格集合。
         */
        InstanceType: {
            /**
             * 镜像支持的实例规格ID。
             * @example `ecs.t1.xsmall`
             */
            InstanceTypeId: string;
            /**
             * 实例规格族。
             * @example `ecs.t1`
             */
            InstanceTypeFamily: string;
            /**
             * 实例规格的vCPU内核数目。
             * @example `1`
             */
            CpuCoreCount: number;
            /**
             * 实例规格的内存大小，单位GiB。
             * @example `1024`
             */
            MemorySize: number;
        }[];
    };
}
