export interface QueryRecordFileDownloadUrlRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * > 当**ProductType**为空时必填。
     * @example `FC10000012345****`
     */
    "PoolKey"?: string;
    /**
     * 产品类型。取值：
     * - **AXB_170**。
     * - **AXN_170**。
     * - **AXN_95**。
     * - **AXN\_EXTENSION\_REUSE**。
     * > - 适用于原阿里大于客户，阿里云用户可忽略。
     * > - 当**PoolKey**为空时必填。
     * @example `AXB_170`
     */
    "ProductType"?: string;
    /**
     * 呼叫记录ID，用于标识一条通话记录。
     * 获取方式如下：
     * - 在控制台[呼叫记录查询](https://dyplsnext.console.aliyun.com/call)页面进行查询，获取**呼叫记录ID**。
     * - 在**录音状态报告**回执消息中查看**call_id**字段。
     * @example `416*********bd50`
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
    "CallTime"?: string;
}
