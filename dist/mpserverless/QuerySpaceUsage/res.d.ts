export interface QuerySpaceUsageResponse {
    /**
     * 唯一请求ID。
     * @example `A9FB71D5-2C06-5810-A5FA-B88E45FE****`
     */
    RequestId: string;
    /**
     * 服务空间ID。
     * @example `mp-23c7c857-****-4512-bab0-3dbf986e7576`
     */
    SpaceId: string;
    /**
     * 起始时间。
     * @example `2022-06-17T16:00:00Z`
     */
    StartTime: string;
    /**
     * 查询范围的终止时间戳。
     * @example `2022-06-18T16:00:00Z`
     */
    EndTime: string;
    /**
     * 数据列表。
     */
    SpaceUsageDataList: {
        /**
         * 统计时间戳。
         * @example `2022-06-17T16:00:00Z`
         */
        Timestamp: string;
        /**
         * 云函数用量。
         */
        FcUsage: {
            /**
             * 计算量（MB百毫秒）。
             * @example `35645000`
             */
            Cost: number;
            /**
             * 函数调用次数。
             * @example `12451`
             */
            RequestCount: number;
            /**
             * 函数出网总流量，单位为byte。
             * @example `124521635`
             */
            TxTraffic: number;
        };
        /**
         * 云数据库用量。
         */
        DbUsage: {
            /**
             * 磁盘容量，单位：byte。
             * @example `2542108`
             */
            StorageSize: number;
            /**
             * 云数据库读操作数（每4KB向上取整）。
             * @example `5685123`
             */
            ReadCount: number;
            /**
             * 云数据库写操作数（每1KB向上取整）。
             * @example `241500`
             */
            WriteCount: number;
        };
        /**
         * 云存储用量。
         */
        CsUsage: {
            /**
             * 磁盘容量，单位：byte。
             * @example `4024575081`
             */
            StorageSize: number;
            /**
             * 文件访问或者下载次数。
             * @example `45668113`
             */
            DownloadCount: number;
            /**
             * 文件上传次数。
             * @example `2352`
             */
            UploadCount: number;
            /**
             * CDN 流量。
             * @example `94134230`
             */
            CdnTraffic: number;
        };
        /**
         * 静态网站托管用量。
         */
        WhUsage: {
            /**
             * 磁盘容量，单位：byte。
             * @example `226230160`
             */
            StorageSize: number;
            /**
             * CDN 流量。
             * @example `5644311`
             */
            CdnTraffic: number;
        };
        /**
         * 标记该数据是否出账。
         * - true：正常出账。
         * - false：不出账，例如在空间停服的情况下，用量数据不用于出账。
         * @example `true`
         */
        EffectiveBillFlag: boolean;
    }[];
}
