export interface ListProductsResponse {
    /**
     * 接口请求结果返回码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `入参非法`
     */
    Message: string;
    /**
     * 接口请求的唯一ID, 每次调用requestID唯一
     * @example `AC0AB2EC-AFBC-44BA-AE77-132A5A1EC0AD`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回值, 即产品列表
     */
    Data: {
        /**
         * 产品目录ID, 代表产品大类, 如弹性计算
         * @example `1`
         */
        DirectoryId: number;
        /**
         * 产品目录名称, 代表产品大类, 如弹性计算
         * @example `云服务器`
         */
        DirectoryName: string;
        /**
         * 阿里云产品列表
         */
        ProductList: {
            /**
             * 阿里云产品ID
             * @example `7160`
             */
            ProductId: number;
            /**
             * 阿里云产品名称
             * @example `ECS`
             */
            ProductName: string;
        }[];
    }[];
}
