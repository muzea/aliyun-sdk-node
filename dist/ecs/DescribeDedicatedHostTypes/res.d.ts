export interface DescribeDedicatedHostTypesResponse {
    /**
     * 请求ID。
     * @example `5FE5FF06-3A33-4658-8495-6445FC54E327`
     */
    RequestId: string;
    DedicatedHostTypes: {
        /**
         * 返回专有宿主机规格的信息。
         */
        DedicatedHostType: {
            /**
             * 单个物理CPU的数量。
             * @example `2`
             */
            Cores: number;
            /**
             * 本地盘类型。
             * @example `local`
             */
            LocalStorageCategory: string;
            /**
             * GPU型号。
             * @example `NVIDIA P100`
             */
            GPUSpec: string;
            /**
             * 虚拟CPU总数量。
             * @example `56`
             */
            TotalVcpus: number;
            /**
             * 支持设置CPU超卖比的范围。
             * @example `1-5`
             */
            CpuOverCommitRatioRange: string;
            /**
             * 物理GPU数量。
             * @example `2`
             */
            PhysicalGpus: number;
            /**
             * 内存容量，单位：GiB。
             * @example `112.0`
             */
            MemorySize: number;
            /**
             * 是否支持设置CPU超卖比。
             * @example `true`
             */
            SupportCpuOverCommitRatio: boolean;
            /**
             * 一块本地盘容量，单位：GiB。
             * @example `0`
             */
            LocalStorageCapacity: number;
            /**
             * 专有宿主机规格类型。
             * @example `ddh.sn1ne`
             */
            DedicatedHostType: string;
            /**
             * 专有宿主机上的本地盘数量。
             * @example `0`
             */
            LocalStorageAmount: number;
            /**
             * 虚拟GPU总数量。
             * @example `10`
             */
            TotalVgpus: number;
            /**
             * 物理处理器（CPU）数量。
             * @example `2`
             */
            Sockets: number;
            SupportedInstanceTypeFamilies: {
                /**
                 * 专有宿主机支持的ECS实例规格族列表。
                 */
                SupportedInstanceTypeFamily: string[];
            };
            SupportedInstanceTypesList: {
                /**
                 * 专有宿主机支持的ECS实例规格列表。
                 */
                SupportedInstanceTypesList: string[];
            };
        }[];
    };
}
