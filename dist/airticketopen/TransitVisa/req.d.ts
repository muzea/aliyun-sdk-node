export interface TransitVisaRequest {
    /**
     * 航段列表，列表中航段构成一个航程。size<=2。
     */
    "flight_segment_param_list"?: {
        /**
         * 出发机场三字码
         * @example `HGH`
         */
        departure_airport: string;
        /**
         * 到达机场三字码
         * @example `SIN`
         */
        arrival_airport: string;
        /**
         * 出发航站楼
         * @example `T1`
         */
        departure_terminal: string;
        /**
         * 到达航站楼
         * @example `T1`
         */
        arrival_terminal: string;
        /**
         * 出发时间，13位时间戳
         * @example `1705285430445`
         */
        departure_time: number;
        /**
         * 到达时间，13位时间戳
         * @example `1705285430445`
         */
        arrival_time: number;
        /**
         * 经停城市三字码
         * @example `SEL,HKG`
         */
        stop_city_list: string;
        /**
         * 市场方航司
         * @example `CZ`
         */
        marketing_airline: string;
        /**
         * 承运方航司
         * @example `CZ`
         */
        operating_airline: string;
        /**
         * 出票方航司
         * @example `CZ`
         */
        ticketing_airline: string;
        /**
         * 航班号
         * @example `CZ616`
         */
        marketing_flight_no: string;
        /**
         * 是否共享
         * @example `true`
         */
        code_share: boolean;
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
