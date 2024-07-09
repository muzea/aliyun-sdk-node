export interface QueryTaskDetailHistoryResponse {
    /**
     * 分页大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `548CAE74-88F8-402F-8C12-97E747389C51`
     */
    RequestId: string;
    /**
     * 当前页游标。
     */
    CurrentPageCursor: {
        /**
         * 最近一次任务详情执行时间。
         * @example `2019-07-30 00:00:00`
         */
        UpdateTime: string;
        /**
         * 任务详情编号。
         * @example `75addb07-28a3-450e-b5ec-2342`
         */
        TaskDetailNo: string;
        /**
         * 任务创建时间。
         * @example `2019-07-30 00:00:00`
         */
        CreateTime: string;
        /**
         * 域名实例编号。
         * @example `S1234456789`
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
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `75addb07-28a3-450e-b5ec-test`
         */
        TaskNo: string;
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
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务详情重试次数。
         * @example `0`
         */
        TryCount: number;
        /**
         * 任务执行结果。
         * @example `执行成功`
         */
        ErrorMsg: string;
    };
    /**
     * 任务详情信息。
     */
    Objects: {
        /**
         * 最近一次任务详情执行时间。
         * @example `2019-07-30 00:00:00`
         */
        UpdateTime: string;
        /**
         * 任务详情编号。
         * @example `75addb07-28a3-450e-b5ec-4234`
         */
        TaskDetailNo: string;
        /**
         * 任务创建时间。
         * @example `2019-07-30 00:00:00`
         */
        CreateTime: string;
        /**
         * 域名实例编号。
         * @example `S123456789`
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
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `75addb07-28a3-450e-b5ec-test`
         */
        TaskNo: string;
        /**
         * 任务状态码。取值：
         * - **0**：等待执行。
         * - **1**：执行中。
         * - **2**：执行成功。
         * - **3**：执行失败。
         * @example `3`
         */
        TaskStatusCode: number;
        /**
         * 任务状态。取值：
         * - **WAITING_EXECUTE**：等待执行。
         * - **EXECUTING**：执行中。
         * - **EXECUTE_SUCCESS**：执行成功。
         * - **EXECUTE_FAILURE**：执行失败。
         * @example `EXECUTE_FAILURE`
         */
        TaskStatus: string;
        /**
         * 任务类型描述。
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务详情重试次数。
         * @example `5`
         */
        TryCount: number;
        /**
         * 任务执行结果。
         * @example `域名有禁止更新锁`
         */
        ErrorMsg: string;
    }[];
    /**
     * 上一页游标。
     */
    PrePageCursor: {
        /**
         * 最近一次任务详情执行时间。
         * @example `2019-07-30 00:00:00`
         */
        UpdateTime: string;
        /**
         * 任务详情编号。
         * @example `75addb07-28a3-450e-b5ec-123`
         */
        TaskDetailNo: string;
        /**
         * 任务创建时间。
         * @example `2019-07-30 00:00:00`
         */
        CreateTime: string;
        /**
         * 域名实例编号。
         * @example `S123456789`
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
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `75addb07-28a3-450e-b5ec-test`
         */
        TaskNo: string;
        /**
         * 任务状态码。取值：
         * - **0**：等待执行。
         * - **1**：执行中。
         * - **2**：执行成功。
         * - **3**：执行失败。
         * @example `3`
         */
        TaskStatusCode: number;
        /**
         * 任务状态。取值：
         * - **WAITING_EXECUTE**：等待执行。
         * - **EXECUTING**：执行中。
         * - **EXECUTE_SUCCESS**：执行成功。
         * - **EXECUTE_FAILURE**：执行失败。
         * @example `EXECUTE_FAILURE`
         */
        TaskStatus: string;
        /**
         * 任务类型描述。
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务详情重试次数。
         * @example `5`
         */
        TryCount: number;
        /**
         * 任务执行结果。
         * @example `域名有禁止更新锁`
         */
        ErrorMsg: string;
    };
    /**
     * 下一页游标。
     */
    NextPageCursor: {
        /**
         * 最近一次任务详情执行时间。
         * @example `2019-07-30 00:00:00`
         */
        UpdateTime: string;
        /**
         * 任务详情编号。
         * @example `75addb07-28a3-450e-b5ec-2424`
         */
        TaskDetailNo: string;
        /**
         * 任务创建时间。
         * @example `2019-07-30 00:00:00`
         */
        CreateTime: string;
        /**
         * 域名实例编号。
         * @example `S1234567890`
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
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `75addb07-28a3-450e-b5ec-test`
         */
        TaskNo: string;
        /**
         * 任务状态码。取值：
         * - **0**：等待执行。
         * - **1**：执行中。
         * - **2**：执行成功。
         * - **3**：执行失败。
         * @example `3`
         */
        TaskStatusCode: number;
        /**
         * 任务状态。取值：
         * - **WAITING_EXECUTE**：等待执行。
         * - **EXECUTING**：执行中。
         * - **EXECUTE_SUCCESS**：执行成功。
         * - **EXECUTE_FAILURE**：执行失败。
         * @example `EXECUTE_FAILURE`
         */
        TaskStatus: string;
        /**
         * 任务类型描述。
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务详情重试次数。
         * @example `5`
         */
        TryCount: number;
        /**
         * 任务执行结果。
         * @example `域名有禁止更新锁`
         */
        ErrorMsg: string;
    };
}
