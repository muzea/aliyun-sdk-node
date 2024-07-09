export interface DescribeSqlLogConfigResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0A74B755-98B7-59DB-8724-1321B394****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * * **true**：执行成功
     * * **false**：执行失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * DAS企业版开启的时间，格式为Unix时间戳，单位为毫秒。
         * @example `1683712800000`
         */
        SqlLogVisibleTime: number;
        /**
         * 采集器版本。
         * - **MYSQL_V0**：MySQL V0版。
         * - **MYSQL_V1**：MySQL V1版。
         * - **MYSQL_V2**：MySQL V2版。
         * - **MYSQL_V3**：MySQL V3版。
         * - **PG_V1**：PostgreSQL V1版。
         * - **rdspg_v1**：RDS PostgreSQL V1版。
         * - **polarpg_v1**：PolarDB PostgreSQL版 V1版。
         * @example `MYSQL_V3`
         */
        CollectorVersion: string;
        /**
         * 当前支持的最新DAS企业版版本。
         * - **SQL_LOG_V0**：企业版 V0。
         * - **SQL_LOG_V1**：企业版 V1。
         * - **SQL_LOG_V2**：企业版 V2。
         * - **SQL_LOG_V3**：企业版 V3。
         * - **SQL_LOG_NOT_ENABLE**：未开启企业版。
         * - **SQL_LOG_NOT_SUPPORT**： 不支持企业版。
         * @example `SQL_LOG_V3`
         */
        SupportVersion: string;
        /**
         * 数据冷存储时长，单位为天。
         * @example `23`
         */
        ColdRetention: number;
        /**
         * 是否开启了DAS企业版。
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        SqlLogEnable: boolean;
        /**
         * 数据总存储时长，**HotRetention**与**ColdRetention**之和，单位为天。
         * @example `30`
         */
        Retention: number;
        /**
         * 数据热存储时长，单位为天。
         * @example `7`
         */
        HotRetention: number;
        /**
         * 是否开启SQL洞察。
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        RequestEnable: boolean;
        /**
         * 当前开启的DAS企业版版本。
         * - **SQL_LOG_V0**：企业版 V0。
         * - **SQL_LOG_V1**：企业版 V1。
         * - **SQL_LOG_V2**：企业版 V2。
         * - **SQL_LOG_V3**：企业版 V3。
         * - **SQL_LOG_NOT_ENABLE**：未开启企业版。
         * - **SQL_LOG_NOT_SUPPORT**： 不支持企业版。
         * @example `SQL_LOG_V3`
         */
        Version: string;
        /**
         * SQL洞察开启时间，格式为Unix时间戳，单位为毫秒。
         * @example `1683712800000`
         */
        RequestStartTime: number;
        /**
         * 是否开启数据热存储。
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        HotEnable: boolean;
        /**
         * 数据热存储开始时间，格式为Unix时间戳，单位为毫秒。
         * @example `1683712800000`
         */
        HotStartTime: number;
        /**
         * 是否开启数据冷存储。
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        ColdEnable: boolean;
        /**
         * 数据冷存储开始时间，格式为Unix时间戳，单位为毫秒。
         * @example `1683712800000`
         */
        ColdStartTime: number;
        /**
         * 数据迁移状态。
         * - **FINISH**： 历史数据迁移完成。
         * - **RUNNING**： 历史数据迁移中。
         * - **FAILURE**： 历史数据迁移失败。
         * @example `FINISH`
         */
        SqlLogState: string;
        /**
         * DAS企业版V1到期时间，格式为Unix时间戳，单位为毫秒。
         * @example `1715335200000`
         */
        RequestStopTime: number;
        /**
         * 预留参数。
         * @example `None`
         */
        LogFilter: string;
    };
}
