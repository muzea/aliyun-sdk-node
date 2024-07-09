export interface OrderDetailResponse {
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
         * 乘客类型-退改规则
         */
        refund_change_rule_map: any;
        /**
         * 乘客类型-行李规则
         */
        baggage_allowance_map: any;
        /**
         * 航班信息
         */
        solution: {
            /**
             * solution_id
             * @example `eJwz8DeySEo0NjQ01TU3TUxxx`
             */
            solution_id: string;
            /**
             * 成人单价
             * @example `300`
             */
            adult_price: number;
            /**
             * 成人税
             * @example `30`
             */
            adult_tax: number;
            /**
             * 儿童单价
             * @example `200`
             */
            child_price: number;
            /**
             * 儿童税
             * @example `20`
             */
            child_tax: number;
            /**
             * 婴儿单价
             * @example `100`
             */
            infant_price: number;
            /**
             * 婴儿税
             * @example `10`
             */
            infant_tax: number;
            /**
             * 退票代金券说明
             * @example `description`
             */
            refund_ticket_coupon_description: string;
            /**
             * 产品类型描述
             * @example `description`
             */
            product_type_description: string;
            /**
             * 行程
             */
            journey_list: {
                /**
                 * 中转次数
                 * @example `0`
                 */
                transfer_count: number;
                /**
                 * 航段信息
                 */
                segment_list: {
                    /**
                     * 航段ID 组成格式:航班号+出发机场+达到机场+起飞日期（MMdd）
                     * @example `HO1295-PVG-MFM-20230310
                    `
                     */
                    segment_id: string;
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
                    /**
                     * 市场方航班号(如：HO1295)
                     * @example `HO1295`
                     */
                    marketing_flight_no: string;
                    /**
                     * 市场方数字航班号（如：1295）
                     * @example `1295`
                     */
                    marketing_flight_no_int: number;
                    /**
                     * 市场方航司(如：HO)
                     * @example `HO`
                     */
                    marketing_airline: string;
                    /**
                     * 承运方航班号(如：CX601)
                     * @example `HO1295`
                     */
                    operating_flight_no: string;
                    /**
                     * 承运方航司(如：CX)
                     * @example `HO`
                     */
                    operating_airline: string;
                    /**
                     * 航班起飞日期时间 字符串格式(yyyy-MM-dd HH:mm:ss)
                     * @example `2023-03-10 07:55:00`
                     */
                    departure_time: string;
                    /**
                     * 航班到达日期时间 字符串格式(yyyy-MM-dd HH:mm:ss)
                     * @example `2023-03-10 10:40:00`
                     */
                    arrival_time: string;
                    /**
                     * 是否为共享航班
                     * @example `false`
                     */
                    code_share: boolean;
                    /**
                     * 航班出发航站楼
                     * @example `T2`
                     */
                    departure_terminal: string;
                    /**
                     * 航班到达航站楼
                     * @example `T1`
                     */
                    arrival_terminal: string;
                    /**
                     * 机型
                     * @example `32Q`
                     */
                    equip_type: string;
                    /**
                     * 舱位
                     * @example `V`
                     */
                    cabin: string;
                    /**
                     * 舱等
                     * @example `Y`
                     */
                    cabin_class: string;
                    /**
                     * 剩余座位数
                     * @example `7`
                     */
                    availability: string;
                    /**
                     * 经停城市列表，stopQuantity > 0 时有值，多个用逗号分割
                     * @example `SEL,HKG`
                     */
                    stop_city_list: string;
                    /**
                     * 经停城市数目
                     * @example `0`
                     */
                    stop_quantity: number;
                    /**
                     * 飞行时间 单位：分钟
                     * @example `165`
                     */
                    flight_duration: number;
                }[];
            }[];
            /**
             * 免费行李规则
             */
            segment_baggage_mapping_list: {
                /**
                 * 航段ID列表 这些航段ID使用同一个免费行李规则
                 */
                segment_id_list: string[];
                /**
                 * 乘客类型-免费行李额映射关系
                 */
                passenger_baggage_allowance_mapping: any;
            }[];
            /**
             * 退改签规则
             */
            segment_refund_change_rule_mapping_list: {
                /**
                 * 航段ID列表 这些航段ID使用同一个退改签规则
                 */
                segment_id_list: string[];
                /**
                 * 乘机人类型-退改签规则映射关系
                 */
                refund_change_rule_map: any;
            }[];
            /**
             * 行李直挂规则
             */
            segment_baggage_check_in_info_list: {
                /**
                 * 航段ID列表 这些航段ID使用同一个行李直挂规则
                 */
                segment_id_list: string[];
                /**
                 * 行李直挂规则类型 1:航段之间行李直达; 2:航段之间行李重新托运; 3:经停城市行李直达; 4:经停城市行李重新托运
                 * @example `1`
                 */
                luggage_direct_info_type: number;
            }[];
        };
        /**
         * 机票商品履约明细
         */
        flight_item_detail_list: {
            /**
             * 乘客信息
             */
            passenger: {
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
            };
            /**
             * 乘客价格信息
             */
            flight_price: {
                /**
                 * 销售价格 单位元
                 * @example `300`
                 */
                sell_price: number;
                /**
                 * 税费
                 * @example `10`
                 */
                tax: number;
            };
            /**
             * 航段舱位信息列表
             */
            flight_segment_cabin_relation: {
                /**
                 * 航段ID
                 * @example `HO1295-PVG-MFM-20230310`
                 */
                segment_id: string;
                /**
                 * 舱位
                 * @example `V`
                 */
                cabin: string;
                /**
                 * 可售票量
                 * @example `A`
                 */
                cabin_quantity: string;
                /**
                 * 舱位等级
                 * @example `Y`
                 */
                cabin_class: string;
                /**
                 * 舱位等级描述
                 * @example `economy class`
                 */
                cabin_class_name: string;
            }[];
            /**
             * ticketNo 列表
             */
            ticket_nos: string[];
            /**
             * 出票航司，拼接可能有多个出票航司
             * @example `HO`
             */
            ticket_air_line: string;
            /**
             * cPnr 列表
             */
            c_pnr_list: string[];
            /**
             * bPnr 列表
             */
            b_pnr_list: string[];
        }[];
        /**
         * 辅营商品履约明细
         */
        ancillary_item_detail_list: {
            /**
             * 乘客信息
             */
            passenger: {
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
            };
            /**
             * 辅营商品适用的航段ID
             */
            segment_id_list: string[];
            /**
             * 辅营详细信息
             */
            ancillary: {
                /**
                 * 辅营商品ID
                 * @example `MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix`
                 */
                ancillary_id: string;
                /**
                 * 辅营产品类型 当前支持 4:付费行李
                 * @example `4`
                 */
                ancillary_type: number;
                baggage_ancillary: {
                    /**
                     *
                     * @example `0`
                     */
                    baggage_amount: number;
                    /**
                     *
                     * @example `0`
                     */
                    baggage_weight: number;
                    /**
                     *
                     * @example `KG`
                     */
                    baggage_weight_unit: string;
                    is_all_weight: boolean;
                    /**
                     *
                     * @example `10.0`
                     */
                    price: number;
                };
            };
        }[];
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
        order_status: number;
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
        pay_status: number;
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
