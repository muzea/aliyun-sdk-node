export interface DescribeCdnUserResourcePackageResponse {
    /**
     * 请求ID。
     * @example `84839536-2B7E-457D-9D8C-82E6C7D4E1A3`
     */
    RequestId: string;
    ResourcePackageInfos: {
        /**
         * 由ResourcePackageInfo组成的数组格式。
         */
        ResourcePackageInfo: {
            /**
             * 失效时间。
             * @example `2018-07-01T08:00:00Z`
             */
            EndTime: string;
            /**
             * 资源包状态。取值：
             * - **valid**：有效。
             * - **closed**：无效。
             * @example `valid`
             */
            Status: string;
            /**
             * 套餐包名称。
             * @example `CDN流量包（中国内地版）`
             */
            DisplayName: string;
            /**
             * 生效时间。
             * @example `2017-12-05T19:10:58Z`
             */
            StartTime: string;
            /**
             * 资源包商品编码。
             * @example `cdnflowbag`
             */
            CommodityCode: string;
            /**
             * 实例当前剩余容量。
             * - 流量包单位：Byte。
             * - 请求数包单位：次。
             * @example `10995089554629`
             */
            CurrCapacity: string;
            /**
             * 资源包总量。
             * - 流量包单位：Byte。
             * - 请求数包单位：次。
             * @example `536870912000`
             */
            InitCapacity: string;
            /**
             * 实例ID。
             * @example `FP-ilttxc23a`
             */
            InstanceId: string;
            /**
             * 模版名称。
             * @example `CDN流量包`
             */
            TemplateName: string;
        }[];
    };
}
