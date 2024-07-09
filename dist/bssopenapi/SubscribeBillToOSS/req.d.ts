export interface SubscribeBillToOSSRequest {
    /**
     * 指定详单导出的OSS Bucket。
     * @example `xxxxxx-bucket`
     */
    "SubscribeBucket": string;
    /**
     * 订阅类型。取值类型：
     * - BillingItemDetailForBillingPeriod：计费项消费明细。
     * - InstanceDetailForBillingPeriod：实例消费明细。
     * - BillingItemDetailMonthly：计费项消费账期汇总。
     * - InstanceDetailMonthly：实例消费账期汇总。
     * - SplitItemDetailDaily: 分账账单按天汇总。
     * - MonthBill：月账单PDF。仅支持订阅MA。
     * @example `BillingItemDetailForBillingPeriod`
     */
    "SubscribeType"?: string;
    /**
     * 对于多级账号，可指定推送账单的类型。可选值为：
     * - MA：推送主账号及财务云非托管子账号账单。
     * - ACP1：推送虚商子账号账单。
     * 默认：MA。
     * @example `MA`
     */
    "MultAccountRelSubscribe"?: string;
    /**
     * 存储文件的Oss Owner对应的UID。如果是Bid/ReSeller订阅，并需要推送到子账号的OSS上时指定，需要此账号为调用账号子账号，并对此账号授予AliyunConsumeDump2OSSRole权限。
     * 普通用户则无需指定，默认为调用账号。
     * @example `12341324`
     */
    "BucketOwnerId"?: number;
    /**
     * 推送起始账期。订阅成功后，系统会自动推送起始账期到当前时间的数据。月账单PDF订阅时此参数无效，不会对历史数据重新推送。最多可推送最近1年内数据。
     * @example `2021-03`
     */
    "BeginBillingCycle"?: string;
    /**
     * OSS Bucket存储路径。
     * @example `testpath`
     */
    "BucketPath"?: string;
    /**
     * 单文件行数上限。当账单文件超过上限后，会拆成多个文件，并合并成一个压缩包。
     * @example `300000`
     */
    "RowLimitPerFile"?: number;
    /**
     * 是否通过SSL（Secure Sockets Layer）加密协议来保护网络通信。当此参数设为true时，表示启用SSL加密，以确保数据传输的安全性和完整性。
     */
    "UsingSsl"?: string;
}
