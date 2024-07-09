export interface QueryTaskListResponse {
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
     * @example `8D7D294A-8E99-481F-B64C-017EFC793059`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `22`
     */
    TotalPageNum: number;
    Data: {
        /**
         * 任务列表。
         */
        TaskInfo: {
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
             * @example `CREATE_DNSHOST`
             */
            TaskType: string;
            /**
             * 任务取消状态。取值：
             * - **INIT**：未取消。
             * - **CANCELLING**：取消中。
             * - **COMPLETE**：已完成。
             * @example `INIT`
             */
            TaskCancelStatus: string;
            /**
             * 任务编号。
             * @example `8b1cd755-4928-4b02-adee-e5d41d7b1939`
             */
            TaskNo: string;
            /**
             * 任务取消状态编号。取值：
             * - **0**：未取消。
             * - **1**：取消中。
             * - **2**：已完成。
             * @example `0`
             */
            TaskCancelStatusCode: number;
            /**
             * 任务状态码。取值：
             * - **1**：等待执行。
             * - **2**：执行中。
             * - **3**：执行完成。
             * @example `1`
             */
            TaskStatusCode: number;
            /**
             * 任务状态。取值：
             * - **WAITING_EXECUTE**：等待执行。
             * - **EXECUTING**：执行中。
             * - **COMPLETE**：执行完成。
             * @example `COMPLETE`
             */
            TaskStatus: string;
            /**
             * 任务类型描述。
             * @example `创建DNS host`
             */
            TaskTypeDescription: string;
            /**
             * 任务包含域名数量。
             * @example `1`
             */
            TaskNum: number;
            /**
             * 任务创建时间。
             * @example `Dec 26,2017 11:00:54`
             */
            CreateTime: string;
            /**
             * 提交任务时用户IP。
             * @example `127.0.0.1`
             */
            Clientip: string;
        }[];
    };
    /**
     * 总条数。
     * @example `43`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `true`
     */
    NextPage: boolean;
}
