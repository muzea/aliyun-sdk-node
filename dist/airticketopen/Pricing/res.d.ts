export interface PricingResponse {
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
         * solution
         */
        solution: {
            /**
             * solution_id
             * @example `eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ`
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
             * @example `200`
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
                     * 市场方航班号(如：KA5809)
                     * @example `HO1295`
                     */
                    marketing_flight_no: string;
                    /**
                     * 市场方数字航班号（如：5809）
                     * @example `1295`
                     */
                    marketing_flight_no_int: number;
                    /**
                     * 市场方航司(如：KA)
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
                     * @example `ALL_CABIN`
                     */
                    cabin_class: string;
                    /**
                     * 剩余座位数
                     * @example `7`
                     */
                    availability: string;
                    /**
                     * 经停城市列表，stopQuantity > 0 时有值，多个用逗号分割
                     * @example `""`
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
         * 是否变价
         * @example `true`
         */
        is_changed: boolean;
        /**
         * 变价之前价格信息 isChanged = true 时，才有值
         */
        original_price_info: {
            /**
             * 成人税
             * @example `20`
             */
            adult_tax: number;
            /**
             * 儿童税
             * @example `20`
             */
            child_tax: number;
            /**
             * 婴儿税
             * @example `20`
             */
            infant_tax: number;
            /**
             * 成人单价
             * @example `200`
             */
            adult_price: number;
            /**
             * 儿童单价
             * @example `200`
             */
            child_price: number;
            /**
             * 婴儿单价
             * @example `200`
             */
            infant_price: number;
        };
        /**
         * 变价之后价格信息
         */
        changed_price_info: {
            /**
             * 成人税
             * @example `10`
             */
            adult_tax: number;
            /**
             * 儿童税
             * @example `10`
             */
            child_tax: number;
            /**
             * 婴儿税
             * @example `10`
             */
            infant_tax: number;
            /**
             * 成人单价
             * @example `100`
             */
            adult_price: number;
            /**
             * 儿童单价
             * @example `100`
             */
            child_price: number;
            /**
             * 婴儿单价
             * @example `100`
             */
            infant_price: number;
        };
        /**
         * 剩余座位数，A 表示大于9，0-9 代表具体数字
         * @example `A`
         */
        remain_seats: string;
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
