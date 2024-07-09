export interface EditMemberBasicInfoRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
         * 商户ID
         * @example `1230094`
         */
        OpenMerchantId: string;
        /**
         * 平台类型
         * @example `TAOBAO`
         */
        PlatformType: string;
        /**
         * 手机号
         * @example `***********`
         */
        Mobile: string;
        /**
         * 会员昵称
         * @example `xxxx`
         */
        MemberNickName: string;
        /**
         * 会员名称。
         * @example `杨x`
         */
        MemberName: string;
        /**
         * 生日
         * @example `2024-06-20`
         */
        Birthday: string;
        /**
         * 国家
         * @example `中国`
         */
        Country: string;
        /**
         * 省份
         * @example `山东省`
         */
        Province: string;
        /**
         * 城市
         * @example `青岛市`
         */
        City: string;
        /**
         * 地区
         * @example `小岛区`
         */
        Area: string;
        /**
         * 性别（男、女、未知）
         * @example `男`
         */
        Sex: string;
        /**
         * 邮箱
         * @example `xxx.com`
         */
        Email: string;
        /**
         * 头像
         * @example `xxx.jpg`
         */
        Avatar: string;
    };
}
