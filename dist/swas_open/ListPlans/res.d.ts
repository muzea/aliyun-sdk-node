export interface ListPlansResponse {
    /**
     * 套餐信息组成的数组。
     */
    Plans: {
        /**
         * CPU核数。
         * @example `2`
         */
        Core: number;
        /**
         * 峰值带宽。单位：Mbps。
         * @example `3`
         */
        Bandwidth: number;
        /**
         * 磁盘容量。单位：GB。
         * @example `40`
         */
        DiskSize: number;
        /**
         * 每月流量。单位：GB。
         * @example `400`
         */
        Flow: number;
        /**
         * 内存。单位：GB。
         * @example `1`
         */
        Memory: number;
        /**
         * 套餐ID。
         * @example `swas.s2.c2m1s40b3t04`
         */
        PlanId: string;
        /**
         * 磁盘类型。可能值：
         * - SSD：SSD云盘
         * - ESSD：ESSD云盘
         * @example `ESSD`
         */
        DiskType: string;
        /**
         * 轻量应用服务器套餐的包月价格。
         * @example `60`
         */
        OriginPrice: number;
        /**
         * 价格单位。可能值：
         * - CNY：元
         * - USD：美元
         * > 中国站价格单位为CNY，国际站价格单位为USD。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 套餐支持的操作系统类型。
         * @example `["Linux","Windows"]`
         */
        SupportPlatform: string;
    }[];
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
}
