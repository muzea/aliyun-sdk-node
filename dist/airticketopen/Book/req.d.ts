export interface BookRequest {
    /**
     * solution_id
     * @example `eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ`
     */
    "solution_id": string;
    /**
     * 外部订单号
     * @example `x091-2023-0220-j-0001`
     */
    "out_order_num": string;
    /**
     * 联系信息
     */
    "contact": {
        /**
         * 姓
         * @example `ZHANG`
         */
        last_name: string;
        /**
         * 名
         * @example `SAN`
         */
        first_name: string;
        /**
         * 手机号
         * @example `183******96`
         */
        mobile_phone_num: string;
        /**
         * 国家区位码
         * @example `86`
         */
        mobile_country_code: string;
        /**
         * 邮件地址
         * @example `gao******@gmail.com`
         */
        email: string;
    };
    /**
     * 乘机人列表
     */
    "passenger_list": {
        /**
         * 姓
         * @example `ZHANG`
         */
        last_name: string;
        /**
         * 名
         * @example `SAN`
         */
        first_name: string;
        /**
         * 生日 yyyyMMdd
         * @example `20200320`
         */
        birthday: string;
        /**
         * 乘客类型 0:通成人; 1:儿童; 8:婴儿
         * @example `0`
         */
        type: number;
        /**
         * 手机号
         * @example `183******95`
         */
        mobile_phone_number: string;
        /**
         * 手机号-国家码
         * @example `86`
         */
        mobile_country_code: string;
        /**
         * 性别 0:MALE; 1:FEMALE
         * @example `0`
         */
        gender: number;
        /**
         * 国籍，二字码
         * @example `CN`
         */
        nationality: string;
        /**
         * 证件
         */
        credential: {
            /**
             * 签发地，二字码
             * @example `CN`
             */
            cert_issue_place: string;
            /**
             * 证件号
             * @example `E1***5674`
             */
            credential_num: string;
            /**
             * 证件过期时间
             * @example `20290101`
             */
            expire_date: string;
            /**
             * 证件类型 0:身份证; 1:护照; 2:学生证; 3:军人证; 4:回乡证; 5:台胞证; 6:港澳通行证; 7:国际海员; 8:外国人永久居留证; 10:警官证; 11:士兵证; 12:Taiwan通行证; 13:入台证; 14:户口簿; 15:出生证明; 16:驾照; 17:港澳居民居住证; 18:Taiwan居民居住证
             * @example `1`
             */
            credential_type: number;
        };
    }[];
    /**
     * 乘机人-辅营购买关系
     */
    "passenger_ancillary_purchase_map_list"?: {
        /**
         * 购买统一辅营的乘机人列表
         */
        passenger_list: {
            /**
             * 姓
             * @example `ZHANG`
             */
            last_name: string;
            /**
             * 名
             * @example `SAN`
             */
            first_name: string;
            /**
             * 生日 yyyyMMdd
             * @example `20020320`
             */
            birthday: string;
            /**
             * 乘客类型 0:通成人; 1:儿童; 8:婴儿
             * @example `0`
             */
            type: number;
            /**
             * 手机号
             * @example `182******92`
             */
            mobile_phone_number: string;
            /**
             * 手机号-国家码
             * @example `86`
             */
            mobile_country_code: string;
            /**
             * 性别 0:MALE; 1:FEMALE
             * @example `1`
             */
            gender: number;
            /**
             * 国籍
             * @example `CN`
             */
            nationality: string;
            /**
             * 证件
             */
            credential: {
                /**
                 * 签发地，二字码
                 * @example `CN`
                 */
                cert_issue_place: string;
                /**
                 * 证件号
                 * @example `E1***5673`
                 */
                credential_num: string;
                /**
                 * 证件过期时间
                 * @example `20290102`
                 */
                expire_date: string;
                /**
                 * 证件类型 0:身份证; 1:护照; 2:学生证; 3:军人证; 4:回乡证; 5:台胞证; 6:港澳通行证; 7:国际海员; 8:外国人永久居留证; 10:警官证; 11:士兵证; 12:Taiwan通行证; 13:入台证; 14:户口簿; 15:出生证明; 16:驾照; 17:港澳居民居住证; 18:Taiwan居民居住证
                 * @example `1`
                 */
                credential_type: number;
            };
        }[];
        /**
         * 生单入参辅营对象
         */
        book_ancillary_req_item: {
            /**
             * 辅营商品ID
             * @example `MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix`
             */
            ancillary_id: string;
            /**
             * 辅营产品类型 当前支持 4:付费行李，未来会扩展
             * @example `4`
             */
            ancillary_type: number;
        };
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
