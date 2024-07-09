export interface DescribeLensMonitorDisksResponse {
    /**
     * 云盘信息列表。
     */
    DiskInfos: {
        /**
         * 云盘ID。
         * @example `d-cd401****`
         */
        DiskId: string;
        /**
         * 云盘名称。
         * @example `disk-28c6b****`
         */
        DiskName: string;
        /**
         * 云盘类型。可能值：
         * - system：系统盘。
         * - data：数据盘。
         * @example `system`
         */
        DiskType: string;
        /**
         * 云盘状态。可能值：
         * - Available：使用中。
         * - Deleted：已删除。
         * @example `Available`
         */
        DiskStatus: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 云盘类型。取值范围：
         * - cloud：普通云盘。
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD 盘。
         * - cloud_essd：ESSD 云盘。
         * - cloud_auto：ESSD AutoPL 云盘。
         * - cloud_essd_entry：ESSD Entry 云盘。
         * @example `cloud_essd`
         */
        DiskCategory: string;
        /**
         * ESSD云盘的性能等级。可能值：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * @example `PL0`
         */
        PerformanceLevel: string;
        /**
         * 云盘的标签集合。
         */
        Tags: {
            /**
             * 标签值。
             * @example `user`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `tag1`
             */
            TagKey: string;
        }[];
        /**
         * 云盘所属的可用区ID。
         * @example `cn-hangzhou-j`
         */
        ZoneId: string;
        /**
         * 云盘大小，单位为GiB。
         * @example `64`
         */
        Size: number;
        /**
         * 每秒读写（I/O）操作的次数上限，单位：次/s。
         * @example `4000`
         */
        Iops: number;
        /**
         * 每秒读写（I/O）成功传输的数据数量上限，单位：MB/s。
         * @example `300`
         */
        Bps: number;
        /**
         * ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50000, 1000*容量-基准性能}。
         * 基准性能=min{1,800+50*容量, 50,000}。
         * 当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL 云盘](~~368372~~)。
         * @example `4000`
         */
        ProvisionedIops: number;
        /**
         * 是否开启Burst（性能突发）。可能值：
         * - true：是。
         * - false：否。
         * 当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL 云盘](~~368372~~)。
         * @example `true`
         */
        BurstingEnabled: boolean;
        /**
         * 云盘的事件标签集合。事件标签展示云盘24小时内发生过的事件，相比事件有1小时之内的延迟。
         */
        LensTags: string[];
    }[];
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 查询结果总条数。
     * @example `6`
     */
    TotalCount: number;
    /**
     * 请求ID。无论调用接口成功与否，我们都会返回请求 ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
}
