export interface ListFirstRanksResponse {
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 粗排表达式信息
     * 参考：[FirstRank](~~170007~~)
     * @example `[]`
     */
    result: {
        /**
         * 创建时间
         * @example `0`
         */
        created: number;
        /**
         * 是否是默认表达式
         * @example `true`
         */
        active: boolean;
        /**
         * 描述
         * @example `""`
         */
        description: string;
        /**
         * 更新时间
         * @example `0`
         */
        updated: number;
        /**
         * 名称
         * @example `default`
         */
        name: string;
        /**
         * 表达式信息
         * @example `[]`
         */
        meta: {
            /**
             * 表达式函数参数
             * 参考：[基础排序](~~180765~~)
             * @example `""`
             */
            arg: string;
            /**
             * 属性，算分特征或搜索字段
             * 可用的算分特征，参考：[基础排序](~~180765~~)
             * @example `static_bm25()`
             */
            attribute: string;
            /**
             * 权重
             * 取值范围：-100000～100000非0值
             * @example `1`
             */
            weight: number;
        }[];
    }[];
}
