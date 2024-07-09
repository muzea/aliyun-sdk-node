export interface CreateDBInstanceForRebuildResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 任务ID。
     * @example `417450000`
     */
    TaskId: string;
    /**
     * 订单ID。
     * @example `20793850608****`
     */
    OrderId: string;
}
