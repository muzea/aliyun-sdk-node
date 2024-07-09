export interface GetOnlineDDLProgressResponse {
    /**
     * 请求ID。
     * @example `34E01EDD-6A16-4CF0-9541-C644D1BE01AA`
     */
    RequestId: string;
    /**
     * 请求是否成功。返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 任务详细信息。
     */
    OnlineDDLTaskDetail: {
        /**
         * 任务状态。返回值如下：
         * - **INIT**：初始化。
         * - **SUCCESS**：已完成。
         * - **RUNNING**：执行中。
         * - **WAITING_CUTOVER**：等待cut-over。
         * - **RESTARTING**：重启中。
         * - **PAUSE**：暂停中。
         * - **UNSUPPORTED**：不支持。
         * - **CANCELED**：已取消。
         * - **FAIL**：已失败。
         * - **INTERRUPT**：已中断。
         * @example `SUCCESS`
         */
        JobStatus: string;
        /**
         * 任务状态描述信息。
         * @example `Success`
         */
        StatusDesc: string;
        /**
         * DMS回放延迟，即回放原表的Binlog到临时表的延迟时间（单位：秒），与数据库的主备无关。
         * @example `0`
         */
        DelaySeconds: number;
        /**
         * 预估的数据总行数，取自information_schema库的统计数据，通常比表中的真实数据量小。
         * @example `10`
         */
        CopyTotal: number;
        /**
         * DMS无锁变更实际拷贝的原表数据量。
         * @example `9`
         */
        CopyCount: number;
        /**
         * 预估的执行进度。具体以任务状态为准。
         * @example `90%`
         */
        ProgressRatio: string;
        /**
         * 切换表时，锁表超时时间。
         * @example `2`
         */
        CutoverLockTimeSeconds: number;
        /**
         * 切换表失败时重试次数。
         * @example `3`
         */
        CutoverFailRetryTimes: number;
        /**
         * 完成切换表操作后，原表的清理策略，返回值如下：
         * - **DROP**：系统自动删除无效原表。
         * - **MOVE**：将无效原表移动到test数据库，再进行手动清理。
         * - **NOTHING**：原库中保留无效原表，再进行手动清理。
         * @example `DROP`
         */
        CleanStrategy: string;
        /**
         * 全量拷贝大小。该参数用于指定每个小块的大小。单次拷贝块越大，全量拷贝时间越短，但同时对业务影响越大。
         * > 在全量拷贝阶段，将原表分为N个小块逐个拷贝到临时表，DMS缺省动态调整每个块的大小。
         * @example `1000`
         */
        CopyChunkSize: number;
        /**
         * 全量拷贝策略，返回值如下：
         * - **AUTO**：DMS根据数据库的性能动态调整，单次拷贝锁表时间控制在1.5秒以内。
         * - **RUNNING**：DMS根据您指定的CopyChunkSize大小（1-60000）拷贝原表数据，此模式下必须设置CopyChunkSize。
         * @example `AUTO`
         */
        CopyChunkMode: string;
        /**
         * 切换表的时间窗口开始时间。默认为00:00:00。该参数可以控制切换表的时间窗口，指定当满足切换表条件且在时间窗口以内时才可以切换，未在窗口内时则一直等待窗口。
         * @example `12:00:00`
         */
        CutoverWindowStartTime: string;
        /**
         * 切换表的时间窗口结束时间，与CutoverWindowStartTime至少间隔30分钟。默认为23:59:59。
         * @example `13:00:00`
         */
        CutoverWindowEndTime: string;
    };
}
