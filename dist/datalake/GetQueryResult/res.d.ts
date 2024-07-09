export interface GetQueryResultResponse {
    /**
     * 查询状态
     * @example `AVAILABLE`
     */
    Status: string;
    /**
     * 结果临时表，暂不可用
     * @example `table`
     */
    ResultTmpTable: string;
    /**
     * 创建者主账号uid
     * @example `229167306180609***`
     */
    Owner: number;
    /**
     * 查询的错误信息
     * @example `Table or view not found:`
     */
    ErrorMessage: string;
    /**
     * 查询进度，0~100之间
     * @example `99`
     */
    Progress: number;
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果的表头字段和类型.仅当状态为AVAILABLE时返回
     * @example `[{"name":"id","type":"INT"},{"name":"student_name","type":"VARCHAR"}]`
     */
    Schema: string;
    /**
     * 结果临时库，暂不可用
     * @example `db
    `
     */
    ResultTmpDb: string;
    /**
     * 查询结果更新时间
     * @example `2022-05-09 16:19:09`
     */
    GmtModified: string;
    /**
     * 查询是否已经完成，fasle代表需要继续轮询本接口
     * @example `true`
     */
    JobCompleted: boolean;
    /**
     * 结果总行数，仅当状态为AVAILABLE时返回。
     * @example `100`
     */
    RowCount: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 查询完成时间
     * @example `2022-05-09 16:19:09`
     */
    EndTime: string;
    /**
     * 查询开始时间
     * @example `2022-05-09 16:18:09`
     */
    StartTime: string;
    /**
     * 请求ID
     * @example `1D2BCFBA-7639-59A9-817B-944EC1339279`
     */
    RequestId: string;
    /**
     * 返回结果信息，仅当状态为AVAILABLE时返回。内容用一个二维JSON数组表示。
     * @example `[[10,"Tom"],[11,"Jerry"]]`
     */
    Rows: string;
    /**
     * 运行日志
     * @example `["this is log"]`
     */
    Logs: string;
    /**
     * 查询创建时间
     * @example `2022-05-09 16:18:09`
     */
    GmtCreate: string;
    /**
     * 已运行时间，单位是毫秒
     * @example `8000`
     */
    Duration: number;
    /**
     * 原始执行的sql语句
     * @example `select * from db.student`
     */
    Sql: string;
    /**
     * 结果总行数是否超过最大值
     * @example `false`
     */
    RowCountOverLimit: boolean;
    /**
     * 查询Id
     * @example `Q-41676378709440CE
    `
     */
    Id: string;
    /**
     * 总共扫描数据量，单位字节
     * @example `1024`
     */
    TotalBytesProcessed: number;
}
