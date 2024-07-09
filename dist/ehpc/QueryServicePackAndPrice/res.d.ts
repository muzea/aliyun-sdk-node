export interface QueryServicePackAndPriceResponse {
    /**
     * 该地域所有集群总核数。
     * @example `3191`
     */
    OriginalAmount: number;
    /**
     * 请求ID。
     * @example `3B2E8108-7068-413E-BCA7-CAAB25D46408`
     */
    RequestId: string;
    /**
     * 每小时按量付费的折扣价。单位：元。
     * @example `0.418`
     */
    DiscountPrice: number;
    /**
     * 最终每小时按量付费的价格。单位：元。
     * @example `2.922`
     */
    TradePrice: number;
    /**
     * 每小时按量付费的价格。单位：元。
     * @example `3.34`
     */
    OriginalPrice: number;
    /**
     * 按量付费核数，为集群总核数减去服务包规格和免费核数。
     * @example `167`
     */
    ChargeAmount: number;
    /**
     * 货币单位。
     * @example `CNY`
     */
    Currency: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    ServicePack: {
        /**
         * E-HPC服务包列表。
         */
        ServicePackInfo: {
            /**
             * 服务包到期时间。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
             * @example `1612705988`
             */
            EndTime: number;
            /**
             * 服务包规格。单位：核。
             * @example `2000`
             */
            Capacity: number;
            /**
             * 服务包购买时间。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
             * @example `1610027588`
             */
            StartTime: number;
            /**
             * 服务包名称。
             * @example `EHPCBAG-cn-78v12vbme0****`
             */
            InstanceName: string;
        }[];
    };
}
