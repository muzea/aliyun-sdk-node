export interface ModifyFirstRankResponse {
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
         * @example `1`
         */
        description: string;
        /**
         * 是否是默认表达式
         * @example `true`
         */
        active: boolean;
        /**
         * 名称
         * @example `default`
         */
        name: string;
        /**
         * 表达式信息
         */
        meta: {
            /**
             * 表达式函数参数
             * @example `“1 ”`
             */
            arg: string;
            /**
             * 属性，算分特征或搜索字段
             * 可用的算分特征
             * @example `static_bm25()`
             */
            attribute: string;
            /**
             * 权重
             * 取值范围：-100000～100000非0值
             * @example `10`
             */
            weight: number;
        }[];
    };
}
