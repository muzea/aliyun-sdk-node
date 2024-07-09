export interface DescribeSlotsResponse {
    /**
     * 请求ID。
     * @example `76AF0609-4195-5DFC-BC78-3AD76FF872BB`
     */
    RequestId: string;
    /**
     * 实例Replication Slot信息列表。
     */
    Slots: {
        /**
         * Replication Slot名称。
         * @example `slot_test01`
         */
        SlotName: string;
        /**
         * Replication Slot使用的插件。
         * @example `test_decoding`
         */
        Plugin: string;
        /**
         * Replication Slot类型。
         * - physical：物理。
         * - logical：逻辑。
         * @example `logical`
         */
        SlotType: string;
        /**
         * Replication Slot所在的数据库名称。
         * @example `db_test01`
         */
        Database: string;
        /**
         * Replication Slot是否为临时性的。
         * - true：是。
         * - false：否。
         * @example `false`
         */
        Temporary: string;
        /**
         * Replication Slot状态。
         * - ACTIVE：活跃。
         * - INACTIVE：不活跃。
         * @example `INACTIVE`
         */
        SlotStatus: string;
        /**
         * Replication Slot堆积的日志量。
         * @example `16 MB`
         */
        WalDelay: string;
        /**
         * 当前Replication Slot对应订阅端的逻辑订阅的具体延迟，单位为秒（s）。
         * @example `0`
         */
        SubReplayLag: string;
    }[];
}
