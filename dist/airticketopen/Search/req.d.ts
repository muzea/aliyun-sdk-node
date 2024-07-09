export interface SearchRequest {
    /**
     * 舱等 ALL_CABIN:不限舱等; Y:经济舱; FC:头等舱和商务舱; S:超级经济舱; YS:经济舱和超级经济舱; YSC:经济舱、超级经济舱和商务舱;
     * @example `ALL_CABIN`
     */
    "cabin_class"?: string;
    /**
     * 行程数组
     */
    "air_legs": {
        /**
         * 出发城市三字码
         * @example `SHA`
         */
        departure_city: string;
        /**
         * 到达城市三字码
         * @example `MFM`
         */
        arrival_city: string;
        /**
         * 出发机场三字码列表
         * @example `PVG`
         */
        departure_airport_list: string[];
        /**
         * 到达机场三字码列表
         * @example `MFM`
         */
        arrival_airport_list: string[];
        /**
         * 起飞日期 (eg: yyyyMMdd)
         * @example `20230310`
         */
        departure_date: string;
    }[];
    /**
     * 成人乘客数 1-9
     * @example `2`
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
