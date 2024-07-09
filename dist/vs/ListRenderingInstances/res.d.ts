export interface ListRenderingInstancesResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 云应用服务实例信息列表
     */
    RenderingInstances: {
        /**
         * 云应用服务实例ID
         * @example `render-9f8c57355d224ad7beaf95e145f22111`
         */
        RenderingInstanceId: string;
        /**
         * 云应用服务实例规格
         * @example `crs.cp.l1`
         */
        RenderingSpec: string;
        /**
         * 云应用服务实例创建时间
         * @example `2023-11-17T02:18:04Z`
         */
        CreationTime: string;
    }[];
    /**
     * 云应用服务实例总数
     * @example `100`
     */
    TotalCount: number;
}
