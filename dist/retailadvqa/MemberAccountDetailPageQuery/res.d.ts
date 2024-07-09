export interface MemberAccountDetailPageQueryResponse {
    /**
     * TotalCount本次请求条件下的数据总量
     * @example `5000`
     */
    TotalCount: number;
    /**
     * Id of the request
     * @example `1DEFC4F1-AF11-5A3C-93B9-2880768DA218
    `
     */
    RequestId: string;
    /**
     * 查询是否成功：
     * true：成功。
     * false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 错误码
     * @example `Lydaas.QuickMember.SystemError`
     */
    ErrorCode: string;
    /**
     * 错误信息，请求异常时返回。
     * @example `系统错误: openMerchantId 不能为空`
     */
    ErrorMessage: string;
    /**
     * 明细列表
     */
    Data: {
        /**
         * 加密商家ID
         * @example `750cff00c3e0996d220ac2861dafdfadsf
        `
         */
        OpenMerchantId: string;
        /**
         * 商家会员ID
         * @example `MEMBER_fc498a12edd84dafd`
         */
        OuterMemberId: string;
        /**
         * 账号类型（20-积分；30-成长值）
         * @example `20`
         */
        AccountType: number;
        /**
         * 操作类型(1-增加2-减少)
         * @example `1`
         */
        OperateType: string;
        /**
         * 积分/成长值变更数值
         * @example `20`
         */
        DetailValue: string;
        /**
         * 变更后积分
         * @example `100`
         */
        AccountBalance: string;
        /**
         * 渠道Code
         * @example `如：alipay`
         */
        ChannelCode: string;
        /**
         * 活动类型
         * @example `示例值：
        订单/活动/抽奖/…`
         */
        ActivityType: string;
        /**
         * 创建时间
         * @example `示例值：
        2011-09-01 00:00:00`
         */
        GmtCreate: string;
        /**
         * 修改日期
         * @example `示例值：
        2011-09-01 00:00:00`
         */
        GmtModified: string;
        /**
         * 备注。
         * @example `...`
         */
        Remark: string;
        /**
         * 其他
         * @example `...`
         */
        Extra: string;
    }[];
}
