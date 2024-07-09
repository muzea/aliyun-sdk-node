export interface ModifyReadonlyInstanceDelayReplicationTimeResponse {
    /**
     * 只读实例ID。
     * @example `rr-bp****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `BBB11B5A-7B37-493A-87E6-490BCB7BDF98`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `241535739`
     */
    TaskId: string;
    /**
     * 延迟复制时间。单位：秒。
     * @example `100`
     */
    ReadSQLReplicationTime: string;
}
