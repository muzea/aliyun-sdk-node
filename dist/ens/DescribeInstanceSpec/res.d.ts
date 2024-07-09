export interface DescribeInstanceSpecResponse {
    /**
     * 单实例限制带宽，单位：Mbps。
     * @example `0`
     */
    BandwidthLimit: number;
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 数据盘最大值，单位：GB。
     * @example `20015`
     */
    DataDiskMaxSize: number;
    /**
     * 数据盘最小值，单位：GB。
     * @example `0`
     */
    DataDiskMinSize: number;
    InstanceSpecs: {
        /**
         * 实例规格信息。
         */
        InstanceSpec: {
            /**
             * CPU核数。
             * @example `1`
             */
            Core: string;
            /**
             * 实例规格显示名称。
             * @example `计算型1C2G`
             */
            DisplayName: string;
            /**
             * 实例规格。
             * @example `ens.sn1.stiny`
             */
            InstanceType: string;
            /**
             * 内存，单位：MB。
             * @example `2048`
             */
            Memory: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `1ECC937A-AE0E-4626-BE51-DED1D6D1C888`
     */
    RequestId: string;
    /**
     * 系统盘最大值，单位：GiB。
     * @example `80`
     */
    SystemDiskMaxSize: number;
}
