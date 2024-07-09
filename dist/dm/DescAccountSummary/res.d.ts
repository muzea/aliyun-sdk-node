export interface DescAccountSummaryResponse {
    /**
     * 生效时间
     * @example `0`
     */
    EnableTimes: number;
    /**
     * 已废弃，兼容性原因保留。
     * @example `0`
     */
    SmsSign: number;
    /**
     * 月额度
     * @example `60000`
     */
    MonthQuota: number;
    /**
     * 收件人数量
     * @example `0`
     */
    Receivers: number;
    /**
     * 大鱼状态（已废弃，兼容性原因保留。）
     * @example `0`
     */
    DayuStatus: number;
    /**
     * 日额度
     * @example `2000`
     */
    DailyQuota: number;
    /**
     * 已废弃，兼容性原因保留。
     * @example `0`
     */
    SmsRecord: number;
    /**
     * 标签数量
     * @example `0`
     */
    Tags: number;
    /**
     * 模板数量
     * @example `1`
     */
    Templates: number;
    /**
     * 发信地址数量
     * @example `0`
     */
    MailAddresses: number;
    /**
     * 请求ID
     * @example `82B295BB-7E69-491F-9896-ECEAFF09E1A4`
     */
    RequestId: string;
    /**
     * 信誉度等级
     * @example `2`
     */
    QuotaLevel: number;
    /**
     * 最高等级
     * @example `10`
     */
    MaxQuotaLevel: number;
    /**
     * 域名数量
     * @example `1`
     */
    Domains: number;
    /**
     * 用户状态：
     * 1 冻结
     * 2 欠费
     * 4 限制外发
     * 8 逻辑删除
     * @example `0`
     */
    UserStatus: number;
    /**
     * 已废弃，兼容性原因保留。
     * @example `0`
     */
    SmsTemplates: number;
    /**
     * 总免费额度剩余量
     * @example `1910`
     */
    RemainFreeQuota: number;
}
