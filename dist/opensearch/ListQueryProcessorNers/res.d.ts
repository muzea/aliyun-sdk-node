export interface ListQueryProcessorNersResponse {
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 实体类型重要性设置
     * 参考：[实体类型重要性设置](~~173616~~)
     */
    result: {
        /**
         * 实体类型的内部英文表示
         * @example `brand`
         */
        tag: string;
        /**
         * 在同一个priority下的排序顺序
         * 优先顺序按照数字从小到大，默认为0
         * @example `1`
         */
        order: number;
        /**
         * 重要性
         * - HIGH
         * - MIDDLE
         * - LOW
         * @example `HIGH`
         */
        priority: string;
        /**
         * 实体类型名称
         * @example `品牌`
         */
        label: string;
    }[];
}
