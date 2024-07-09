export interface OrderListResponse {
    /**
     * http 请求成功，status 值均为 200
     * @example `200`
     */
    status: number;
    /**
     * 业务错误码
     * @example `null`
     */
    error_code: string;
    /**
     * 错误信息
     * @example `null`
     */
    error_msg: string;
    /**
     * 是否正确
     * @example `true`
     */
    success: boolean;
    /**
     * 请求 RequestId
     * @example `51593418-8C73-5E47-8BA8-3F1D4A00CC0B`
     */
    RequestId: string;
    /**
     * 正确处理返回数据
     */
    data: {
        /**
         * 数据列表
         */
        list: {
            /**
             * 订单号
             * @example `4966***617111`
             */
            order_num: number;
            /**
             * 外部订单号
             * @example `x091-2023-0220-j-0001`
             */
            out_order_num: string;
            /**
             * 资金交易流水号
             * @example `hkduendkd-2023-dj0`
             */
            transaction_no: string;
            /**
             * 订单状态 1:生单预定处理中; 2:生单预定成功; 3:订单已支付; 4:订单成功; 5:订单关闭
             * @example `4`
             */
            order_status: string;
            /**
             * 预定时间(生单时间) 使用时间戳 13位
             * @example `1677210784000`
             */
            book_time: number;
            /**
             * 出票时间 使用时间戳 13位
             * @example `1677210786000`
             */
            succeed_time: number;
            /**
             * 支付时间 使用时间戳 13位
             * @example `1677210788000`
             */
            pay_time: number;
            /**
             * 订单总价(单位：元)
             * @example `3000`
             */
            total_price: number;
            /**
             * 实付金额(单位：元)
             * @example `3000`
             */
            real_pay_price: number;
            /**
             * 优惠金额(单位：元)
             * @example `10`
             */
            promotion_price: number;
            /**
             * 乘机人
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
                 * @example `20020301`
                 */
                birthday: string;
                /**
                 * 乘客类型 0:通成人; 1:儿童; 8:婴儿
                 * @example `0`
                 */
                type: number;
                /**
                 * 手机号
                 * @example `183******96`
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
                 * 国籍二字码
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
             * 买家昵称
             * @example `nick`
             */
            session_nick: string;
            /**
             * 支付状态 0:支付处理中; 1:扣款成功; 2:已打款给卖家; 3:关闭交易
             * @example `2`
             */
            pay_status: string;
        }[];
        /**
         * 分页信息
         */
        pagination: {
            /**
             * 总数量
             * @example `5`
             */
            total_count: number;
            /**
             * 共几页
             * @example `1`
             */
            total_page: number;
            /**
             * 当前第几页
             * @example `1`
             */
            current_page: number;
            /**
             * 每页数量
             * @example `10`
             */
            page_size: number;
        };
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
