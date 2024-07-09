export interface RemoveFirstRankResponse {
    /**
     * 请求ID
     * @example `E676FAB6-A0AC-64D9-F9D7-D0D33C930CFF`
     */
    requestId: string;
    /**
     * 粗排表达式信息
     */
    result: {
        /**
         * 描述
         * @example `""`
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
             * 参考：[基础排序](~~170007~~)
             * @example `""`
             */
            arg: string;
            /**
             * 属性，指算分特征或搜索字段，
             * 可用的算分特征，参考：[基础排序](~~170007~~)
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
