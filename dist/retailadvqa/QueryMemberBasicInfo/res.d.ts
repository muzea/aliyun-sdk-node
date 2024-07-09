export interface QueryMemberBasicInfoResponse {
    /**
     * 请求id
     * @example `1DEFC4F1-AF11-5A3C-93B9-2880768DA218
    `
     */
    RequestId: string;
    /**
     * 是否调用成功。true：表示调用成功。                                 false：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `Lydaas.QuickMember.SystemError
    `
     */
    ErrorCode: string;
    /**
     * 错误信息，请求异常时返回。
     * @example `系统错误: openMerchantId 不能为空`
     */
    ErrorMessage: string;
    /**
     * 请求接口返回的数据，会员信息
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
         * 会员名称。
         * @example `匿名会员`
         */
        MemberName: string;
        /**
         * 手机号
         * @example `13999999999`
         */
        Mobile: string;
        /**
         * 性别（男、女）
         * @example `男`
         */
        Sex: string;
        /**
         * 生日
         * @example `1992-04-17`
         */
        Birthday: string;
        /**
         * 国籍
         * @example `中国`
         */
        Country: string;
        /**
         * 省份
         * @example `浙江`
         */
        Province: string;
        /**
         * 城市
         * @example `杭州`
         */
        City: string;
        /**
         * 邮箱
         * @example `xxx@xxx.com`
         */
        Email: string;
        /**
         * 头像
         * @example `https://tfs.alipayobjects.com/images/partner/TB1aWA7Xv5GDuNjHvSCXXczuXXa`
         */
        Avatar: string;
        /**
         * 等级编号
         * @example `1`
         */
        LevelNum: string;
        /**
         * 会员等级
         * @example `VIP0`
         */
        LevelName: string;
        /**
         * 会员成长值
         * @example `100`
         */
        Points: string;
        /**
         * 会员积分
         * @example `73`
         */
        Score: string;
        /**
         * 其他
         * @example `...`
         */
        Extra: string;
        /**
         * 地区
         * @example `余杭`
         */
        Area: string;
        /**
         * 会员昵称
         * @example `aaa`
         */
        MemberNickName: string;
        /**
         * 临期积分
         * @example `0`
         */
        NearExpiredScore: string;
    };
}
