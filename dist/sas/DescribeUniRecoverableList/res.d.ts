export interface DescribeUniRecoverableListResponse {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F35F45B0-5D6B-4238-BE02-A62D0760****`
     */
    RequestId: string;
    /**
     * 数据库名称。
     * @example `msdb`
     */
    Database: string;
    /**
     * 分页查询时，每页显示的可恢复数据库备份快照的数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的可恢复数据库备份快照的总数量。
     * @example `23`
     */
    TotalCount: number;
    /**
     * 当前页面显示的可恢复数据库备份快照的数量。
     * @example `20`
     */
    Count: number;
    /**
     * 可恢复数据库备份快照列表。
     */
    RecoverableInfoList: {
        /**
         * 最新备份的时间戳，单位：毫秒。
         * @example `1671468180000`
         */
        LastTime: number;
        /**
         * 针对ORACLE数据库查询备份时，对应查询可恢复的时间点中所选择记录的**reset_time**值。
         * @example `2021-01-30 08:04:36`
         */
        ResetTime: number;
        /**
         * 恢复数据库类型为MSSQL时，数据库恢复信息。格式为JSON字符串格式，取值：
         * - **name**：数据库名称
         * - **files**：数据库文件路径
         * @example `{
              "files": {
                    "qtc": "F:\\database\\qtc.mdf",
                    "qtc_log": "F:\\database\\qtc_0.ldf"
              },
              "name": "qtc"
        }`
         */
        RestoreInfo: string;
        /**
         * 开始备份的时间戳，单位：毫秒。
         * @example `1671468180000`
         */
        FirstTime: number;
        /**
         * 针对ORACLE数据库查询备份时，对应查询可恢复的时间点中所选择记录的**reset_scn**值。
         * @example `4529940.0`
         */
        ResetScn: string;
    }[];
}
