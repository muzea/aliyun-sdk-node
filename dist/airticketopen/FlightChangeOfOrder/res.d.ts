export interface FlightChangeOfOrderResponse {
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
         * 航变信息
         */
        flight_change_detail: {
            /**
             * 原航班号
             * @example `HO1295`
             */
            old_flight_no: string;
            /**
             * 原航班起飞机场三字码(大写)
             * @example `PVG`
             */
            old_departure_airport: string;
            /**
             * 原航班到达机场三字码(大写)
             * @example `MFM`
             */
            old_arrival_airport: string;
            /**
             * 原航班起飞日期时间 字符串格式(yyyy-MM-dd HH:mm:ss)
             * @example `2023-02-01 12:01:00`
             */
            old_departure_time: string;
            /**
             * 原航班到达日期时间 字符串格式(yyyy-MM-dd HH:mm:ss)
             * @example `023-02-01 14:01:00`
             */
            old_arrival_time: string;
            /**
             * 新航班号
             * @example `HO1295`
             */
            new_flight_no: string;
            /**
             * 新航班起飞机场三字码(大写)
             * @example `PVG`
             */
            new_departure_airport: string;
            /**
             * 新航班到达机场三字码(大写)
             * @example `MFM`
             */
            new_arrival_airport: string;
            /**
             * 新航班起飞日期时间 字符串格式(yyyy-MM-dd HH:mm:ss)
             * @example `2023-02-01 13:01:00`
             */
            new_departure_time: string;
            /**
             * 新航班到达日期时间 字符串格式(yyyy-MM-dd HH:mm:ss)
             * @example `2023-02-01 15:01:00`
             */
            new_arrival_time: string;
            /**
             * 航变时间 字符串格式(yyyy-MM-dd HH:mm:ss)
             * @example `2023-02-01 10:01:00`
             */
            change_time: string;
            /**
             * 航变类型 1:取消; 2:变更
             * @example `1`
             */
            change_type: number;
            /**
             * 航变原因
             * @example `天气`
             */
            change_reason: string;
        };
        /**
         * 订单号
         * @example `4966***617111`
         */
        order_num: number;
    }[];
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
