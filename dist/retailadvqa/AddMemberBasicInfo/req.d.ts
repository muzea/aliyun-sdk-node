export interface AddMemberBasicInfoRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 商家加密品牌 ID
         * @example `750cff00c3e0996d220ac2861dafdfadsf`
         */
        OpenMerchantId: string;
        /**
         * 平台类型
         * @example `FENGXUAN`
         */
        PlatFormType: string;
        /**
         * 会员名称。
         * @example `核桃`
         */
        MemberName: string;
        /**
         * 会员昵称
         * @example `aaa`
         */
        MemberNickName: string;
        /**
         * 手机号
         * @example `17716699087`
         */
        Mobile: string;
        /**
         * 性别
         * @example `男/女`
         */
        Sex: string;
        /**
         * 生日
         * @example `2022-09-08`
         */
        Birthday: string;
        /**
         * 国籍
         * @example `中国`
         */
        Country: string;
        /**
         * 省份
         * @example `浙江省`
         */
        Province: string;
        /**
         * 城市
         * @example `杭州市`
         */
        City: string;
        /**
         * 地区
         * @example `西湖区`
         */
        Area: string;
        /**
         * 邮箱
         * @example `xxx@email.com`
         */
        Email: string;
        /**
         * 头像
         * @example `https://static-legacy.dingtalk.com/media/lALPD1IyQHXWp0LMusy6_186_186.png`
         */
        Avatar: string;
        /**
         * 渠道
         */
        Channels: {
            /**
             * 渠道Code
             * @example `alipay`
             */
            ChannelCode: string;
            /**
             * 应用ID或者小程序ID
             * @example `4958916073165425157001`
             */
            AppId: string;
            /**
             * 渠道openId
             * @example `openId`
             */
            ChannelOpenId: string;
            /**
             * 渠道UnionId
             * @example `UnionId`
             */
            ChannelUnionId: string;
            /**
             * 场景
             * @example `如:xxx活动`
             */
            Scene: string;
        }[];
        /**
         * 创建时间
         * @example `2023-02-17 00:00:00`
         */
        GmtCreate: string;
        /**
         * 其他
         * @example `""`
         */
        Extra: string;
    };
}
