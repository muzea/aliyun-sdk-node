export interface CreateDBInstanceResponse {
    /**
     * 创建实例预检查是否通过。返回值：
     * * **true**：通过。
     * * **false**：未通过。
     * > * 如不执行预检查，则不返回该参数。
     * > * 如预检查未通过，则返回对应错误。
     * @example `true`
     */
    DryRunResult: boolean;
    /**
     * 实例是否成功绑定标签。返回值：
     * * **true**：成功。
     * * **false**：失败。
     * >如不为实例绑定标签，则不返回该参数。
     * @example `true`
     */
    TagResult: boolean;
    /**
     * 请求ID。
     * @example `1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC`
     */
    RequestId: string;
    /**
     * 实例内网连接地址。
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    ConnectionString: string;
    /**
     * 批量创建任务的提示信息。
     * > 该参数仅在**Amount**参数大于1时返回。
     * @example `Batch Create DBInstance Task Is In Process.`
     */
    Message: string;
    /**
     * 实例ID。若给**Amount**参数指定大于**1**的值, 将返回与该值对应的实例ID个数，以逗号分隔。
     * 例如**Amount**参数为**3**，则返回3个实例ID。示例：
     * `rm-uf6wjk5*****1，rm-uf6wjk5*****2，rm-uf6wjk5*****3`
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 实例内网连接地址对应端口号。
     * @example `3306`
     */
    Port: string;
    /**
     * 批量创建任务的任务ID。
     * * 仅在**Amount**参数大于1时返回。
     * * 当前暂不支持通过**TaskId**的值查看任务。
     * @example `s2365879-a9d0-55af-fgae-f2****`
     */
    TaskId: string;
    /**
     * 表示当前请求需要在创建实例前执行预检查。
     * * 返回值固定为**true**。
     * * 如不执行预检查，则不返回该参数。
     * @example `true`
     */
    DryRun: boolean;
    /**
     * 订单ID。
     * @example `1007893702****`
     */
    OrderId: string;
}
