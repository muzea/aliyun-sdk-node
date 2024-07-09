export interface ModifySecondRankResponse {
    /**
     * 请求ID
     * @example `C5E2F73C-8241-81F8-3A62-65478C5A3111`
     */
    requestId: string;
    /**
     * 精排表达式信息
     * @example `{}`
     */
    result: {
        /**
         * 创建时间
         * @example `1`
         */
        created: number;
        /**
         * 是否是默认表达式
         * @example `true`
         */
        active: boolean;
        /**
         * 是否是默认表达式（返回时展示，不作传参）
         * - true 是
         * - false 否
         * @example `true`
         */
        isDefault: string;
        /**
         * 是否是系统表达式（返回时展示，不作传参）
         * - true 是
         * - false 否
         * @example `false`
         */
        isSys: string;
        /**
         * 描述
         * @example `"11"`
         */
        description: string;
        /**
         * 更新时间
         * @example `1`
         */
        updated: number;
        /**
         * 名称
         * @example `lsh_second_1`
         */
        name: string;
        /**
         * 精排表达式
         * 可以编写包含字段、算分特征和数学函数的表达式，实现复杂的排序逻辑
         * @example `cate_id > 0 and cate_id < 1000`
         */
        meta: string;
        /**
         * ID（返回时展示，不作传参）
         * @example `890473`
         */
        id: string;
    };
}
