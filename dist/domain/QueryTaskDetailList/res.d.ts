export interface QueryTaskDetailListResponse {
    /**
     * 是否有上一页。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 唯一请求识别码。
     * @example `6A2320E4-D870-49C9-A6DC-test`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPageNum: number;
    Data: {
        /**
         * 任务列表。
         */
        TaskDetail: {
            /**
             * 最近一次任务详情执行时间。
             * @example `2018-01-25 20:47:01`
             */
            UpdateTime: string;
            /**
             * 任务详情编号。
             * @example `75addb07-28a3-450e-b5ec-test`
             */
            TaskDetailNo: string;
            /**
             * 任务创建时间。
             * @example `2018-01-25 20:46:57`
             */
            CreateTime: string;
            /**
             * 域名实例编号。
             * @example `S20179H1BBI9test`
             */
            InstanceId: string;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 任务类型。取值：
             * - **CHG_HOLDER**：修改所有者信息。
             * - **CHG_DNS**：修改DNS。
             * - **SET_WHOIS_PROTECT**：设置隐私保护。
             * - **UPDATE_ADMIN_CONTACT**：修改管理者信息。
             * - **UPDATE_BILLING_CONTACT**：修改付费者信息。
             * - **UPDATE_TECH_CONTACT**：修改技术者信息。
             * - **SET_UPDATE_PROHIBITED**：设置域名安全锁。
             * - **SET_TRANSFER_PROHIBITED**：设置域名转移锁。
             * - **ORDER_ACTIVATE**：创建注册订单。
             * - **ORDER_RENEW**：创建续费订单。
             * - **ORDER_REDEEM**：创建赎回订单。
             * - **CREATE_DNSHOST**：创建DNS host。
             * - **UPDATE_DNSHOST**：更新DNS host。
             * - **SYNC_DNSHOST**：同步DNS host。
             * @example `ORDER_RENEW`
             */
            TaskType: string;
            /**
             * 任务编号。
             * @example `60d6e201-8ee5-47ab-8fdc-test`
             */
            TaskNo: string;
            /**
             * 任务执行结果，用于记录部分任务类型执行后的任务结果。
             * @example `12345`
             */
            TaskResult: string;
            /**
             * 任务状态码。取值：
             * - **0**：等待执行。
             * - **1**：执行中。
             * - **2**：执行成功。
             * - **3**：执行失败。
             * @example `2`
             */
            TaskStatusCode: number;
            /**
             * 任务状态。取值：
             * - **WAITING_EXECUTE**：等待执行。
             * - **EXECUTING**：执行中。
             * - **EXECUTE_SUCCESS**：执行成功。
             * - **EXECUTE_FAILURE**：执行失败。
             * @example `EXECUTE_SUCCESS`
             */
            TaskStatus: string;
            /**
             * 任务类型描述。
             * @example `创建续费订单`
             */
            TaskTypeDescription: string;
            /**
             * 任务详情重试次数。
             * @example `0`
             */
            TryCount: number;
            /**
             * 任务执行失败消息。
             * @example `The operation is successful.`
             */
            ErrorMsg: string;
        }[];
    };
    /**
     * 总数。
     * @example `1`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `true`
     */
    NextPage: boolean;
}
