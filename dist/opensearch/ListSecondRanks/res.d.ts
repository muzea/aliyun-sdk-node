export interface ListSecondRanksResponse {
    /**
     * 总条数
     * @example `1`
     */
    totalCount: number;
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 精排表达式信息
     * 参考：[SecondRank](~~170008~~)
     */
    result: {
        /**
         * 创建时间
         * @example `0`
         */
        created: number;
        /**
         * 是否是默认表达式
         * @example `false`
         */
        active: boolean;
        /**
         * 是否是默认表达式（返回时展示，不作传参）
         * - true 是
         * - false 否
         * @example `false`
         */
        isDefault: string;
        /**
         * 是否是系统表达式（返回时展示，不作传参）
         * - true 是
         * - false 否
         * @example `true`
         */
        isSys: string;
        /**
         * 描述
         * @example `""`
         */
        description: string;
        /**
         * 更新时间
         * @example `1587052801`
         */
        updated: number;
        /**
         * 名称
         * @example `tests`
         */
        name: string;
        /**
         * 精排表达式
         * 可以编写包含字段、算分特征和数学函数的表达式，实现复杂的排序逻辑
         * @example `random()+now()`
         */
        meta: string;
        /**
         * ID（返回时展示，不作传参）
         * @example `890473`
         */
        id: string;
    }[];
}
