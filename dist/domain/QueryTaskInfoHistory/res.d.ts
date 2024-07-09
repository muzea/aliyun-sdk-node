export interface QueryTaskInfoHistoryResponse {
    /**
     * 分页大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `EB3FCCBA-CA1F-4D31-9F34-test`
     */
    RequestId: string;
    /**
     * 当前页的游标。
     */
    CurrentPageCursor: {
        /**
         * 任务类型。取值：
         * - **CHG_HOLDER**：修改所有者信息；
         * - **CHG_DNS**：修改DNS；
         * - **SET_WHOIS_PROTECT**：设置隐私保护；
         * - **UPDATE_ADMIN_CONTACT**：修改管理者信息；
         * - **UPDATE_BILLING_CONTACT**：修改付费者信息；
         * - **UPDATE_TECH_CONTACT**：修改技术者信息；
         * - **SET_UPDATE_PROHIBITED**：设置域名安全锁；
         * - **SET_TRANSFER_PROHIBITED**：设置域名转移锁；
         * - **ORDER_ACTIVATE**：创建注册订单；
         * - **ORDER_RENEW**：创建续费订单；
         * - **ORDER_REDEEM**：创建赎回订单；
         * - **CREATE_DNSHOST**：创建DNS host；
         * - **UPDATE_DNSHOST**：更新DNS host；
         * - **UPDATE_REGISTRANT_CONTACT**：修改注册联系人；
         * - **DELETE_DOMAIN**：删除域名；
         * - **SYNC_DNSHOST**：同步DNS host。
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `aa634d3f-927e-4d17-9d2c-test`
         */
        TaskNo: string;
        /**
         * 任务状态码。取值：
         * - **1**：等待执行；
         * - **2**：执行中；
         * - **3**：执行完成。
         * @example `3`
         */
        TaskStatusCode: number;
        /**
         * 任务状态。取值：
         * - **WAITING_EXECUTE**；等待执行；
         * - **EXECUTING**；执行中；
         * - **COMPLETE**；执行完成。
         * @example `COMPLETE`
         */
        TaskStatus: string;
        /**
         * 任务类型描述。
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务包含域名数量。
         * @example `1`
         */
        TaskNum: number;
        /**
         * 任务创建时间。
         * @example `2017-11-01 17:22:51`
         */
        CreateTime: string;
        /**
         * 任务创建时间戳。
         * @example `1509528171000`
         */
        CreateTimeLong: number;
        /**
         * 提交任务时用户IP。
         * @example `127.0.0.1`
         */
        Clientip: string;
    };
    /**
     * 任务信息。
     */
    Objects: {
        /**
         * 任务类型。取值：
         * - **CHG_HOLDER**：修改所有者信息；
         * - **CHG_DNS**：修改DNS；
         * - **SET_WHOIS_PROTECT**：设置隐私保护；
         * - **UPDATE_ADMIN_CONTACT**：修改管理者信息；
         * - **UPDATE_BILLING_CONTACT**：修改付费者信息；
         * - **UPDATE_TECH_CONTACT**：修改技术者信息；
         * - **SET_UPDATE_PROHIBITED**：设置域名安全锁；
         * - **SET_TRANSFER_PROHIBITED**：设置域名转移锁；
         * - **ORDER_ACTIVATE**：创建注册订单；
         * - **ORDER_RENEW**：创建续费订单；
         * - **ORDER_REDEEM**：创建赎回订单；
         * - **CREATE_DNSHOST**：创建DNS host；
         * - **UPDATE_DNSHOST**：更新DNS host；
         * - **UPDATE_REGISTRANT_CONTACT**：修改注册联系人；
         * - **DELETE_DOMAIN**：删除域名；
         * - **SYNC_DNSHOST**：同步DNS host。
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `aa634d3f-927e-4d17-9d2c-test`
         */
        TaskNo: string;
        /**
         * 任务状态码。取值：
         * - **1**：等待执行；
         * - **2**：执行中；
         * - **3**：执行完成。
         * @example `3`
         */
        TaskStatusCode: number;
        /**
         * 任务状态。取值：
         * - **WAITING_EXECUTE**；等待执行；
         * - **EXECUTING**；执行中；
         * - **COMPLETE**；执行完成。
         * @example `COMPLETE`
         */
        TaskStatus: string;
        /**
         * 任务类型描述。
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务包含域名数量。
         * @example `1`
         */
        TaskNum: number;
        /**
         * 任务创建时间。
         * @example `2017-11-01 17:22:51`
         */
        CreateTime: string;
        /**
         * 任务创建时间。
         * @example `1509528171000`
         */
        CreateTimeLong: number;
        /**
         * 提交任务时用户IP。
         * @example `127.0.0.1`
         */
        Clientip: string;
    }[];
    /**
     * 上一页游标。
     */
    PrePageCursor: {
        /**
         * 任务类型。取值：
         * - **CHG_HOLDER**：修改所有者信息；
         * - **CHG_DNS**：修改DNS；
         * - **SET_WHOIS_PROTECT**：设置隐私保护；
         * - **UPDATE_ADMIN_CONTACT**：修改管理者信息；
         * - **UPDATE_BILLING_CONTACT**：修改付费者信息；
         * - **UPDATE_TECH_CONTACT**：修改技术者信息；
         * - **SET_UPDATE_PROHIBITED**：设置域名安全锁；
         * - **SET_TRANSFER_PROHIBITED**：设置域名转移锁；
         * - **ORDER_ACTIVATE**：创建注册订单；
         * - **ORDER_RENEW**：创建续费订单；
         * - **ORDER_REDEEM**：创建赎回订单；
         * - **CREATE_DNSHOST**：创建DNS host；
         * - **UPDATE_DNSHOST**：更新DNS host；
         * - **UPDATE_REGISTRANT_CONTACT**：修改注册联系人；
         * - **DELETE_DOMAIN**：删除域名；
         * - **SYNC_DNSHOST**：同步DNS host。
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `f9baa3d5-33b9-4c81-8847-test`
         */
        TaskNo: string;
        /**
         * 任务状态码。取值：
         * - **1**：等待执行；
         * - **2**：执行中；
         * - **3**：执行完成。
         * @example `3`
         */
        TaskStatusCode: number;
        /**
         * 任务状态。取值：
         * - **WAITING_EXECUTE**；等待执行；
         * - **EXECUTING**；执行中；
         * - **COMPLETE**；执行完成。
         * @example `COMPLETE`
         */
        TaskStatus: string;
        /**
         * 任务类型描述。
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务包含域名数量。
         * @example `15`
         */
        TaskNum: number;
        /**
         * 任务创建时间。
         * @example `2017-11-01 17:19:47`
         */
        CreateTime: string;
        /**
         * 任务创建时间。
         * @example `1509527987000`
         */
        CreateTimeLong: number;
        /**
         * 提交任务时用户IP。
         * @example `127.0.0.1`
         */
        Clientip: string;
    };
    /**
     * 下一页的游标。
     */
    NextPageCursor: {
        /**
         * 任务类型。取值：
         * - **CHG_HOLDER**：修改所有者信息；
         * - **CHG_DNS**：修改DNS；
         * - **SET_WHOIS_PROTECT**：设置隐私保护；
         * - **UPDATE_ADMIN_CONTACT**：修改管理者信息；
         * - **UPDATE_BILLING_CONTACT**：修改付费者信息；
         * - **UPDATE_TECH_CONTACT**：修改技术者信息；
         * - **SET_UPDATE_PROHIBITED**：设置域名安全锁；
         * - **SET_TRANSFER_PROHIBITED**：设置域名转移锁；
         * - **ORDER_ACTIVATE**：创建注册订单；
         * - **ORDER_RENEW**：创建续费订单；
         * - **ORDER_REDEEM**：创建赎回订单；
         * - **CREATE_DNSHOST**：创建DNS host；
         * - **UPDATE_DNSHOST**：更新DNS host；
         * - **UPDATE_REGISTRANT_CONTACT**：修改注册联系人；
         * - **DELETE_DOMAIN**：删除域名；
         * - **SYNC_DNSHOST**：同步DNS host。
         * @example `CHG_DNS`
         */
        TaskType: string;
        /**
         * 任务编号。
         * @example `8f112aa1-98be-48c3-82f8-test`
         */
        TaskNo: string;
        /**
         * 任务状态码。取值：
         * - **1**：等待执行；
         * - **2**：执行中；
         * - **3**：执行完成。
         * @example `3`
         */
        TaskStatusCode: number;
        /**
         * 任务状态。取值：
         * - **WAITING_EXECUTE**；等待执行；
         * - **EXECUTING**；执行中；
         * - **COMPLETE**；执行完成。
         * @example `COMPLETE`
         */
        TaskStatus: string;
        /**
         * 任务类型描述。
         * @example `修改DNS`
         */
        TaskTypeDescription: string;
        /**
         * 任务包含域名数量。
         * @example `15`
         */
        TaskNum: number;
        /**
         * 任务创建时间。
         * @example `2017-10-27 13:07:07`
         */
        CreateTime: string;
        /**
         * 任务创建时间。
         * @example `1509080827000`
         */
        CreateTimeLong: number;
        /**
         * 提交任务时用户IP。
         * @example `127.0.0.1`
         */
        Clientip: string;
    };
}
