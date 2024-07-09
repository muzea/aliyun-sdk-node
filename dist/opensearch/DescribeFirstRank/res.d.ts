export interface DescribeFirstRankResponse {
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 粗排表达式信息
     */
    result: {
        /**
         * 描述
         * @example `-`
         */
        description: string;
        /**
         * 是否是默认表达式
         * @example `false`
         */
        active: boolean;
        /**
         * 名称
         * @example `ar_wear_edit_time`
         */
        name: string;
        /**
         * 表达式信息
         */
        meta: {
            /**
             * 表达式函数参数
             * @example `ar_edit_time`
             */
            arg: string;
            /**
             * 属性，算分特征或搜索字段
             * @example `timeliness_ms()`
             */
            attribute: string;
            /**
             * 权重
             * 取值范围：-100000～100000非0值
             * @example `1`
             */
            weight: number;
        }[];
    };
}
