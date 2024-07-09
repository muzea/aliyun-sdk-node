export interface RefundApplyRequest {
    /**
     * 订单号
     * @example `4966***617111`
     */
    "order_num": number;
    /**
     * 退票类型 非自愿退票申请，要上传附件
     */
    "refund_type": {
        /**
         * 申请退票类型 2：自愿申请（我要改变行程计划/我不想飞）  5：非自愿，航班延误或取消、航班时刻变更等航司原因  6：非自愿，身体原因且有二级甲等医院<含>以上的医院证明
         * （说明：不强制要求提供附件，但是非自愿最好都能够提供附件， 能够提高提退成功率）
         * @example `2`
         */
        refund_type_id: number;
        /**
         * 附件文件地址数组 先要用单独的文件上传接口上传文件得到文件地址
         * @example `[xxx,yyy]`
         */
        file: string[];
        /**
         * 备注
         * @example `remark desc`
         */
        remark: string;
    };
    /**
     * 申请退票的乘机人列表
     */
    "refund_passenger_list": {
        /**
         * 乘机人名
         * @example `SAN`
         */
        first_name: string;
        /**
         * 乘机人姓
         * @example `ZHANG`
         */
        last_name: string;
        /**
         * 证件号
         * @example `411***********4411`
         */
        document: string;
    }[];
    /**
     * 申请提退的行程
     */
    "refund_journeys": {
        /**
         * 航段信息
         */
        segment_list: {
            /**
             * 航班起飞机场三字码(大写)
             * @example `PVG`
             */
            departure_airport: string;
            /**
             * 航班到达机场三字码(大写)
             * @example `MFM`
             */
            arrival_airport: string;
            /**
             * 航班起飞城市三字码(大写)
             * @example `SHA`
             */
            departure_city: string;
            /**
             * 航班到达城市三字码(大写)
             * @example `MFM`
             */
            arrival_city: string;
        }[];
    }[];
    /**
     * access_token
     * @example `eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii`
     */
    "x-acs-airticket-access-token": string;
    /**
     * 多语言 默认取买家账号配置
     * @example `en_US`
     */
    "x-acs-airticket-language"?: string;
}
