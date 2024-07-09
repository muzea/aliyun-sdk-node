export interface DescribeDatabaseSlowLogRecordsResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 轻量数据库实例慢日志列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。可能值：30~100。
     * 最大值：100。
     * 默认值：30。
     * @example `30`
     */
    PageSize: number;
    /**
     * 轻量数据库服务实例慢日志的总条数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 逻辑读次数。
     * @example `200`
     */
    PhysicalIORead: number;
    /**
     * 数据库类型。
     * @example `MySQL`
     */
    Engine: string;
    /**
     * 慢日志信息集合。
     */
    SlowLogs: {
        /**
         * 连接数据库的客户端名称及地址。
         * @example `xxx[xxx] @ [1xx.xxx.xxx.xx]`
         */
        HostAddress: string;
        /**
         * 执行时长，单位：秒（s）。
         * @example `2`
         */
        QueryTimes: number;
        /**
         * SQL命令详情。
         * @example `select sleep(2)`
         */
        SQLText: string;
        /**
         * 执行时长。单位：毫秒（ms）。
         * @example `2001`
         */
        QueryTimeMS: number;
        /**
         * 锁定时长，单位：秒（s）。
         * @example `0`
         */
        LockTimes: number;
        /**
         * 执行开始时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * > +8小时后是控制台上显示的到期时间。
         * @example `2022-09-08T01:40:44Z`
         */
        ExecutionStartTime: string;
        /**
         * 返回行数。
         * @example `1`
         */
        ReturnRowCounts: number;
        /**
         * 解析行数。
         * @example `1`
         */
        ParseRowCounts: number;
        /**
         * 数据库名称。
         * @example `testDB`
         */
        DBName: string;
    }[];
}
