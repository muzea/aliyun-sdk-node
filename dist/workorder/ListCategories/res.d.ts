export interface ListCategoriesResponse {
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `success`
     */
    Message: string;
    /**
     * 请求唯一识别码
     * @example `CA6204AC-6AA9-4CFA-9310-7DFD20C19EBC`
     */
    RequestId: string;
    /**
     * 调用是否成功。true：表示成功；false：表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回值,即问题分类列表
     */
    Data: {
        /**
         * 工单问题分类名称
         * @example `ECS`
         */
        CategoryName: string;
        /**
         * 工单问题分类ID
         * @example `7161`
         */
        CategoryId: number;
    }[];
}
