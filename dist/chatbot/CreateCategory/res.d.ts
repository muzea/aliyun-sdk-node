export interface CreateCategoryResponse {
    /**
     * 请求ID
     * @example `A629A28F-F25E-5572-A679-FA46FB0151D6`
     */
    RequestId: string;
    /**
     * 类目信息
     */
    Category: {
        /**
         * 类目ID
         * @example `30000049006`
         */
        CategoryId: number;
        /**
         * 业务代码
         * @example `bizcode123`
         */
        BizCode: string;
        /**
         * 类目名称
         * @example `类目名称`
         */
        Name: string;
        /**
         * 父类目ID
         * @example `-1`
         */
        ParentCategoryId: number;
        /**
         * 类目状态，-1：已删除未发布状态，0：正常
         * @example `0`
         */
        Status: number;
    };
}
