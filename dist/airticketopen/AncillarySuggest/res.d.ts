export interface AncillarySuggestResponse {
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
         * 机票 solution_id
         * @example `eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ`
         */
        solution_id: string;
        /**
         * 机票-辅营映射关系
         */
        seg_ancillary_map_list: {
            /**
             * 航段ID列表 这些航段使用同一个辅营
             */
            segment_id_list: string[];
            /**
             * 辅营产品
             */
            ancillary: {
                /**
                 * 辅营商品ID
                 * @example `eJwz8DeySEo0NjQ01TU3TU`
                 */
                ancillary_id: string;
                /**
                 * 辅营产品类型 当前支持 4:付费行李
                 * @example `4`
                 */
                ancillary_type: number;
                /**
                 * 行李辅营详情
                 */
                baggage_ancillary: {
                    /**
                     * 行李件数 取值如：3、2、1、0、-2。 -2 表示计重
                     * @example `0`
                     */
                    baggage_amount: number;
                    /**
                     * 行李重量，0-50。isAllWeght=true 时，表示所有件数总重量。
                     * @example `0`
                     */
                    baggage_weight: number;
                    /**
                     * 行李重量单位
                     * @example `KG`
                     */
                    baggage_weight_unit: string;
                    /**
                     * 是否所有行李重量
                     * @example `true`
                     */
                    is_all_weight: boolean;
                    /**
                     * 总价
                     * @example `10.0`
                     */
                    price: number;
                };
            };
        }[];
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
