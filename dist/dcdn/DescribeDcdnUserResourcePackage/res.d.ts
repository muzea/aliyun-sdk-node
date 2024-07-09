export interface DescribeDcdnUserResourcePackageResponse {
    /**
     * 请求ID。
     * @example `96ED3127-EC7A-57C5-AFA6-A689B24B2530`
     */
    RequestId: string;
    ResourcePackageInfos: {
        /**
         * 由ResourcePackageInfo组成的数组格式。
         */
        ResourcePackageInfo: {
            /**
             * 失效时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2022-08-24T16:00:00Z`
             */
            EndTime: string;
            /**
             * 资源包状态。
             * - **valid**：有效。
             * - **closed**：无效。
             *
             * @example `valid`
             */
            Status: string;
            /**
             * 资源包名称。
             * @example `静态HTTPS请求包`
             */
            DisplayName: string;
            /**
             * 生效时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2021-08-24T04:09:22Z`
             */
            StartTime: string;
            /**
             * 资源包商品代码。
             * @example `dcdnpaybag`
             */
            CommodityCode: string;
            /**
             * 资源包余量。
             * - 流量包单位：byte。
             * - 请求数单位：次。
             * @example `10000000`
             */
            CurrCapacity: string;
            /**
             * 资源包总量。
             * - 流量包单位：byte。
             * - 请求数单位：次。
             * @example `10000000`
             */
            InitCapacity: string;
            /**
             * 资源包ID。
             * @example `CDNFLOWBAG-cn-7pp2bihrb01ii0`
             */
            InstanceId: string;
            /**
             * 模板名。
             * @example `FPT_dcdnpaybag_deadlineAcc_1541151058`
             */
            TemplateName: string;
        }[];
    };
}
