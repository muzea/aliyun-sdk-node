export interface ListCategoryResponse {
    /**
     * 类目list结果
     */
    Categories: {
        /**
         * 类目ID
         * @example `231001028593`
         */
        CategoryId: number;
        /**
         * 业务代码
         * @example `bizcode123`
         */
        BizCode: string;
        /**
         * 类⽬名称
         * @example `类目名称`
         */
        Name: string;
        /**
         * ⽗类⽬ID
         * @example `-1`
         */
        ParentCategoryId: number;
        /**
         * 类目状态，-1：已删除未发布状态，0：正常
         * @example `0`
         */
        Status: number;
    }[];
    /**
     * 请求ID
     * @example `9C5F8186-2D22-433E-9545-606D344F30B5`
     */
    RequestId: string;
}
