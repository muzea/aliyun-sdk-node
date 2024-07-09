export interface DescribeDesktopTypesResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 规格的详细信息。
     */
    DesktopTypes: {
        /**
         * 系统盘大小。单位：GiB
         * @example `150`
         */
        SystemDiskSize: string;
        /**
         * 规格ID。
         * @example `ecd.graphics.xlarge`
         */
        DesktopTypeId: string;
        /**
         * 数据盘大小。单位：GiB
         * @example `150`
         */
        DataDiskSize: string;
        /**
         * vCPU数量。
         * @example `2`
         */
        CpuCount: string;
        /**
         * GPU核数。
         * @example `1`
         */
        GpuCount: number;
        /**
         * GPU显存。
         * @example `16 GiB`
         */
        GpuSpec: string;
        /**
         * 规格族。
         * @example `ecd.graphics`
         */
        InstanceTypeFamily: string;
        /**
         * 内存大小。单位：MiB
         * @example `23552`
         */
        MemorySize: string;
        /**
         * 规格状态。返回`SUFFICIENT`时表示该规格资源充足。
         * @example `SUFFICIENT`
         */
        DesktopTypeStatus: string;
    }[];
}
