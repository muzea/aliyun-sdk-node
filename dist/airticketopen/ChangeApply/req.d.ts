export interface ChangeApplyRequest {
    /**
     * 订单号
     * @example `4988430***950`
     */
    "order_num": number;
    /**
     * 改期类型0:自愿改期; 1:航班变动/航班取消
     * @example `0`
     */
    "type": number;
    /**
     * 改签乘机人列表
     */
    "change_passenger_list": {
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
     * 改签目标航程
     */
    "changed_journeys": {
        /**
         * 改签目标航段列表
         */
        segment_list: {
            /**
             * 航班起飞机场三字码
             * @example `PVG`
             */
            departure_airport: string;
            /**
             * 航班到达机场三字码
             * @example `MFM`
             */
            arrival_airport: string;
            /**
             * 航班起飞城市三字码
             * @example `SHA`
             */
            departure_city: string;
            /**
             * 航班到达城市三字码
             * @example `MFM`
             */
            arrival_city: string;
            /**
             * 起飞日期 (eg: yyyyMMdd)
             * @example `20230320`
             */
            departure_date: string;
            /**
             * 航班起飞日期，utc时间戳
             * @example `1677232998000`
             */
            departure_time: number;
            /**
             * 航班到达日期时间，utc时间戳
             * @example `1677232999000`
             */
            arrive_time: number;
            /**
             * 航班出发航站楼
             * @example `T2`
             */
            departure_terminal: string;
            /**
             * 航班到达航站楼
             * @example `T1`
             */
            arrive_terminal: string;
            /**
             * 市场方航班号(如：KA5809)
             * @example `HO1295`
             */
            marketing_flight_no: string;
            /**
             * 承运方航班号(如：CX601)
             * @example `HO1295`
             */
            operating_flight_no: string;
            /**
             * 是否共享航班
             * @example `false`
             */
            code_share: boolean;
        }[];
    }[];
    /**
     * 改签联系人信息
     */
    "contact": {
        /**
         * 国家区位码
         * @example `86`
         */
        mobile_country_code: string;
        /**
         * 联系人用户手机号
         * @example `183*****92`
         */
        mobile_phone_num: string;
        /**
         * 邮件地址
         * @example `gao******@gmail.com`
         */
        email: string;
    };
    /**
     * 买家备注
     * @example `remark desc`
     */
    "remark"?: string;
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
