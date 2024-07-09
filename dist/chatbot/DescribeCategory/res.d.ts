export interface DescribeCategoryResponse {
    /**
     * 请求ID
     * @example `2B0304FD-3804-5C06-9A83-77F5523664AF`
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
         * 类⽬名称
         * @example `类目名称`
         */
        Name: string;
        /**
         * ⽗类⽬id，默认-1，对应根⽬录
         * @example `-1`
         */
        ParentCategoryId: number;
        /**
         * 类目状态 -1：已删除未发布状态，0：正常
         * @example `0`
         */
        Status: number;
        /**
         * 业务代码
         * @example `bizcode123`
         */
        BizCode: string;
    };
}
