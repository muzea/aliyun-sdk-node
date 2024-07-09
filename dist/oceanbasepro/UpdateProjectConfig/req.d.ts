export interface UpdateProjectConfigRequest {
    /**
     * 数据迁移或数据同步项目的 ID。
     * @example `np_fe****`
     */
    "Id": string;
    /**
     * 高级配置
     */
    "CommonTransferConfig"?: {
        SinkStoreFormat: string;
        SourceStoreFormat: string;
    };
    /**
     * 全量传输配置。
     */
    "FullTransferConfig"?: {
        /**
         * 写入并发数。
         * @example `64`
         */
        WriteWorkerNum: number;
        /**
         * 读取并发数。
         * @example `64`
         */
        ReadWorkerNum: number;
        /**
         * 全量传输阶段限制能达到的最大传输速率，单位为记录数/秒。输入 null 时，表示不限制 RPS。
         * @example `null`
         */
        ThrottleRps: number;
        /**
         * 全量传输阶段限制能达到的最大传输流量，单位为字节/秒。输入 null 时，表示不限制 IOPS。
         * @example `null`
         */
        ThrottleIOPS: number;
    };
    /**
     * 增量传输配置。
     */
    "IncrTransferConfig"?: {
        /**
         * 增量传输的线程数。
         * @example `64`
         */
        IncrSyncThreadCount: number;
        /**
         * 增量传输阶段限制能达到的最大传输速率，单位为记录数/秒。输入 null 时，表示不限制 RPS。
         * @example `null`
         */
        ThrottleRps: number;
        /**
         * 增量传输阶段限制能达到的最大传输流量，单位为字节/秒。输入 null 时，表示不限制 IOPS。
         * @example `null`
         */
        ThrottleIOPS: number;
        /**
         * 有增量同步阶段时，同步的增量数据类型。
         */
        RecordTypeWhiteList: string[];
        /**
         * 支持的 DDL 类型。
         */
        SupportDDLTypes: string[];
    };
    /**
     * 反向增量传输配置。
     */
    "ReverseIncrTransferConfig"?: {
        /**
         * 反向增量传输的线程数。
         * @example `64`
         */
        IncrSyncThreadCount: number;
        /**
         * 反向增量传输阶段限制能达到的最大传输速率，单位为记录数/秒。输入 null 时，表示不限制 RPS。
         * @example `null`
         */
        ThrottleRps: number;
        /**
         * 反向增量传输阶段限制能达到的最大传输流量，单位为字节/秒。输入 null 时，表示不限制 IOPS。
         * @example `null`
         */
        ThrottleIOPS: number;
        /**
         * 有增量同步阶段时，同步的增量数据类型。
         */
        RecordTypeWhiteList: string[];
        /**
         * 反向增量传输阶段支持的 DDL 类型。
         */
        SupportDDLTypes: string[];
    };
}
