export interface EnrichRequest {
    /**
     * Search 返回的solution_id
     * @example `eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ`
     */
    "solution_id"?: string;
    /**
     * 成人乘客数 1-9
     * @example `1`
     */
    "adults"?: number;
    /**
     * 儿童乘客数 0-9
     * @example `1`
     */
    "children"?: number;
    /**
     * 婴儿乘客数 0-9
     * @example `1`
     */
    "infants"?: number;
    /**
     * 舱等 ALL_CABIN:不限舱等; Y:经济舱; FC:头等舱和商务舱; S:超级经济舱; YS:经济舱和超级经济舱; YSC:经济舱、超级经济舱和商务舱;
     * @example `ALL_CABIN`
     */
    "cabin_class"?: string;
    /**
     * 行程信息
     */
    "journey_param_list"?: {
        /**
         * 起飞城市三字码(大写)
         * @example `SHA`
         */
        departure_city: string;
        /**
         * 到达城市三字码(大写)
         * @example `MFM`
         */
        arrival_city: string;
        /**
         * 起飞日期(yyyyMMdd)
         * @example `20230310`
         */
        departure_date: string;
        /**
         * 该程指定航段信息
         */
        segment_param_list: {
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
             * 字符串，航班起飞日期时间(yyyy-MM-dd HH:mm:ss)
             * @example `2023-03-10 07:55:00
            `
             */
            departure_time: string;
            /**
             * 市场方航班号(如：KA5809)
             * @example `HO1295`
             */
            marketing_flight_no: string;
            /**
             * 舱位
             * @example `V`
             */
            cabin: string;
            /**
             * 儿童舱位
             * @example `E`
             */
            child_cabin: string;
        }[];
    }[];
    /**
     * access_token
     * @example `eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii`
     */
    "x-acs-airticket-access-token": string;
    /**
     * 多语言 默认取买家账号配置
     * @example `en_US
    `
     */
    "x-acs-airticket-language"?: string;
}
