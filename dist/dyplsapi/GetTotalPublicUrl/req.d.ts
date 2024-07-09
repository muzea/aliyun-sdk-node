export interface GetTotalPublicUrlRequest {
    /**
     * 是否需要校验绑定关系标识。
     * 取值：
     * **true**：需要校验。
     * **false**：不需要校验。
     * @example `false`
     */
    "CheckSubs": boolean;
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC12256****`
     */
    "PartnerKey": string;
    /**
     * 呼叫记录ID，用于标识一条通话记录。
     * 获取方式如下：
     * - 在控制台[呼叫记录查询](https://dyplsnext.console.aliyun.com/call)页面进行查询，获取**呼叫记录ID**。
     * - 在**录音状态报告**回执消息中查看**call_id**字段。
     * @example `2568900****`
     */
    "CallId": string;
    /**
     * 呼叫记录中的呼叫发起时间。
     * 获取方式如下：
     * - 在控制台[呼叫记录查询](https://dyplsnext.console.aliyun.com/call)页面进行查询，获取**呼叫时间**列的**呼叫发起**时间。
     * - 在**录音状态报告**回执消息中查看**call_time**字段。
     * > **CallTime**不支持传入时间戳格式的参数。
     * @example `2019-03-05 12:00:00	`
     */
    "CallTime": string;
}
