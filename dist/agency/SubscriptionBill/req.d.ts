export interface SubscriptionBillRequest {
    /**
     * 账单存储oss bucket名称
     * @example `bill-bucket`
     */
    "SubscribeBucket": string;
    /**
     * 存储文件Oss归属的UID。
     * 如果是伙伴订阅，并需要推送到下级伙伴账号的OSS上时，需要此账号为伙伴账号的下级伙伴账号，并对下级伙伴账号授予[AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D)权限
     * 如果是伙伴订阅,且推送到伙伴账号的OSS时,需要伙伴账号进行授予[AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D)权限。
     * @example `5569414254138836`
     */
    "BucketOwnerId": number;
    /**
     * 订阅类型
     * PartnerBillingItemDetailForBillingPeriod  计费项账单明细
     * PartnerBillingItemDetailMonthly    计费项月账单
     * PartnerInstanceDetailForBillingPeriod  实例账单明细
     * PartnerInstanceDetailMonthly 实例月账单
     * @example `PartnerBillingItemDetailForBillingPeriod`
     */
    "SubscribeType": string;
    /**
     * 起始推送账单月份
     * 格式yyyy-MM
     * 订阅成功后，系统会自动推送起始账期到当前时间的数据。最多可推送最近六个月内数据(包含当前月)。超出则订阅无效
     * @example `2022-10`
     */
    "BeginBillingCycle": string;
    /**
     * 账单文件格式
     * 可选
     * csv
     * parquet
     * 如果订阅多个文件类型,建议区分bucket订阅.避免文件覆盖
     * @example `csv`
     */
    "BillFormat": string;
    /**
     * 单个文件账单数据行数阈值，超过此阈值会自动拆分成多个文件，拆分后文件的命名规则为`uid_billType_billCycle_SquenceNo_fileNo`
     * 文件名称除fileNo信息不一致外其他信息全部一致,可视为同一账期,同一类型文件.因拆分导致的多个文件.
     * @example `100000`
     */
    "SubscribeSegmentSize"?: number;
}
