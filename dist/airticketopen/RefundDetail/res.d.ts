export interface RefundDetailResponse {
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
         * 退票单号
         * @example `4966***617654`
         */
        refund_order_num: number;
        /**
         * 订单号
         * @example `4966***617111`
         */
        order_num: number;
        /**
         * 退票单状态 0:申请退票; 1:退票受理中; 2:退票失败; 3:退票成功
         * @example `1`
         */
        status: number;
        /**
         * 申请退票类型 2:自愿申请; 5:航班延误或取消、航班时刻变更等航司原因; 6:身体原因且有二级甲等医院<含>以上的医院证明; 7:非自愿确定性应急引导; 100:非自愿非确定性应急
         * @example `5`
         */
        refund_type: number;
        /**
         * 提退原因
         * @example `desc reason`
         */
        refund_reason: string;
        /**
         * 提退拒绝原因
         * @example `refuse reason`
         */
        refuse_reason: string;
        /**
         * 病退附件url列表
         * @example `[zzz,yyy]`
         */
        refund_attachment_urls: string[];
        /**
         * 退票单创建时间, UTC时间戳
         * @example `1677229002000`
         */
        utc_create_time: number;
        /**
         * 实际退款时间 UTC时间戳
         * @example `1677229005000`
         */
        pay_success_utc_time: number;
        /**
         * 交易流水号
         * @example `1677229005000`
         */
        transaction_no: string;
        /**
         * 乘机人提退详情列表,乘机人纬度的提退信息
         */
        passenger_refund_details: {
            /**
             * 提退的乘机人信息
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
             * 退票费明细
             */
            refund_fee: {
                /**
                 * 票不可退金额，即退票手续费
                 * @example `30`
                 */
                non_refundable_ticket_fee: number;
                /**
                 * 税不可退金额，即退税手续费
                 * @example `30`
                 */
                non_refundable_tax_fee: number;
                /**
                 * 已使用的机票总价格
                 * @example `30`
                 */
                already_used_total_fee: number;
                /**
                 * 不可退改签手续费
                 * @example `30`
                 */
                non_refundable_change_service_fee: number;
                /**
                 * 不可退升舱手续费
                 * @example `30`
                 */
                non_refundable_change_upgrade_fee: number;
                /**
                 * 原票可退给用户的金额(票价 + 税费  - 退票手续费 - 退税手续费 -  已使用的机票总价格 - 营销)
                 * @example `30`
                 */
                refund_to_buyer_money: number;
                /**
                 * 改签退给用户的金额
                 * @example `30`
                 */
                modify_refund_to_buyer_money: number;
            };
        }[];
        /**
         * 是否含有补退
         * @example `false`
         */
        contain_multi_refund: boolean;
        /**
         * 首次退关联的补退详情列表
         */
        multi_refund_details: {
            /**
             * 补退单退票单号
             * @example `498843***6950`
             */
            multi_refund_order_num: number;
            /**
             * 补退单流水号
             * @example `498843***6950`
             */
            multi_refund_transaction_no: string;
            /**
             * 乘机人纬度的补退详情
             */
            passenger_multi_refund_details: {
                /**
                 * 提退的乘机人
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
                 * 原单补退的金额
                 * @example `30`
                 */
                original_order_refund_fee: number;
                /**
                 * 改签单补退的金额
                 * @example `30`
                 */
                change_order_refund_fee: number;
            }[];
        }[];
        /**
         * 提退的行程
         */
        refund_journeys: {
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
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
