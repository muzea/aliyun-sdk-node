export interface QuerySpaceConsumptionResponse {
    /**
     * 唯一请求ID。
     * @example `F16FEFE8-4E57-5795-BE7B-2D29F0C61B8C`
     */
    RequestId: string;
    /**
     * 创建时间。
     * @example `0`
     */
    GmtCreate: string;
    /**
     * 服务空间ID。
     * @example `mp-26fe89b6-****-4a90-b332-b424ce9651e6`
     */
    SpaceId: string;
    /**
     * - FREE 开发者版
     * - BASE 基础版
     * - STANDARD 标准版
     * - PROFESSIONAL 专业版
     * - ENTERPRISE 企业版
     * - UTIMATE 旗舰版
     * @example `BASE`
     */
    SpecCode: string;
    /**
     * 云函数用量
     */
    FcUsage: {
        /**
         * 计算量（MB百毫秒）
         * @example `0`
         */
        Cost: number;
        /**
         * 函数调用次数
         * @example `0`
         */
        RequestCount: number;
        /**
         * 函数出网总流量，单位为byte。
         * @example `0`
         */
        TxTraffic: number;
    };
    /**
     * 云数据库用量。
     */
    DbUsage: {
        /**
         * 磁盘容量，单位：byte。
         * @example `0`
         */
        StorageSize: number;
        /**
         * 读请求次数。
         * @example `0`
         */
        ReadCount: number;
        /**
         * 写请求次数。
         * @example `0`
         */
        WriteCount: number;
    };
    /**
     * 云存储用量。
     */
    CsUsage: {
        /**
         * 磁盘容量，单位：byte。
         * @example `0`
         */
        StorageSize: number;
        /**
         * 文件访问或者下载次数。
         * @example `0`
         */
        DownloadCount: number;
        /**
         * 文件上传次数。
         * @example `0`
         */
        UploadCount: number;
        /**
         * CDN 流量，单位为byte。
         * @example `0`
         */
        CdnTraffic: number;
    };
    /**
     * 静态网站托管用量。
     */
    WhUsage: {
        /**
         * 磁盘容量，单位：byte。
         * @example `0`
         */
        StorageSize: number;
        /**
         * CDN 流量，单位为byte。
         * @example `0`
         */
        CdnTraffic: number;
    };
    /**
     * 当前计费周期起始时间（秒）
     * @example `1664467200`
     */
    CycleStartTime: number;
    /**
     * 当前计费周期结束时间（秒）
     * @example `1667059200`
     */
    CycleEndTime: number;
}
