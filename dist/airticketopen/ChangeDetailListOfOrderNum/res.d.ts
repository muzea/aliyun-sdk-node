export interface ChangeDetailListOfOrderNumResponse {
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
     *
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
             * 改签单号
             * @example `4988430***950`
             */
            change_order_num: number;
            /**
             * 订单号
             * @example `5988430***541`
             */
            order_num: number;
            /**
             * 改签的乘机人列表
             */
            change_passengers: {
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
             * 改签单支付总金额
             * @example `300`
             */
            total_amount: number;
            /**
             * 改签单状态 0:初始状态; 1:待支付; 2:付款成功; 3:改签成功; 4:改签关闭
             * @example `2`
             */
            order_status: number;
            /**
             * 改签关单原因
             * @example `reason desc`
             */
            close_reason: string;
            /**
             * 交易流水号
             * @example `hkduendkd-2023-dj0`
             */
            transaction_no: string;
            /**
             * 改签原因类型 0:自愿改期; 1:航班变动/航班取消; 2:因疫情改签
             * @example `1`
             */
            change_reason_type: number;
            /**
             * 改签单创建时间，UTC时间戳
             * @example `1677415276000`
             */
            create_utc_time: number;
            /**
             * 买家最迟支付时间，UTC时间戳
             * @example `1677415278000`
             */
            last_confirm_utc_time: number;
            /**
             * 支付状态 0:初始状态; 1:待支付; 2:支付成功; 3:转交易成功; 4:关闭已支付订单成功; 5:关闭未支付订单成功
             * @example `2`
             */
            pay_status: number;
            /**
             * 买家支付成功时间，UTC时间戳
             * @example `1677415255000`
             */
            pay_success_utc_time: number;
            /**
             * 订单关闭时间，UTC时间戳
             * @example `1677415244000`
             */
            close_utc_time: number;
            /**
             * 改签联系人信息
             */
            contact: {
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
             * 原始的行程
             */
            original_journeys: {
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
                     * @example `HO1295-PVG-MFM-20230310`
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
             * 改签后的行程
             */
            changed_journeys: {
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
                     * @example `HO1295-PVG-MFM-20230310`
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
             * 上一次改签的行程
             */
            last_journeys: {
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
                     * @example `HO1295-PVG-MFM-20230310`
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
             * 改签费用明细 乘机人纬度
             */
            change_fee_details: {
                /**
                 * 改签的乘机人信息
                 */
                passenger: {
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
                };
                /**
                 * 乘机人的改签费明细
                 */
                change_fee: {
                    /**
                     * 升舱费
                     * @example `30`
                     */
                    upgrade_fee: number;
                    /**
                     * 服务费(手续费)
                     * @example `50`
                     */
                    service_fee: number;
                    /**
                     * 改签税费
                     * @example `20`
                     */
                    tax_fee: number;
                };
            }[];
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
