export interface ListUpstreamAppKeyRelationsResponse {
    /**
     * 请求ID。
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 应用映射关系分页查询数据对象。
     */
    RelationList: {
        /**
         * 分页对象。
         */
        Pagination: {
            /**
             * 分页查询页码
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总分页数
             * @example `1`
             */
            TotalPageCount: number;
            /**
             * 分页每页数据集大小
             * @example `20`
             */
            PageSize: number;
            /**
             * 数据集总数
             * @example `2`
             */
            TotalCount: number;
        };
        /**
         * 映射关系列表。
         */
        List: {
            /**
             * 应用名称。
             * @example `会员中心`
             */
            AppName: string;
            /**
             * 客户端应用标识，为cmns应用appKey。
             * @example `afsgwewt`
             */
            AppKey: string;
            /**
             * 应用包名。
             * @example `com.test.member`
             */
            AppPackage: string;
            /**
             * iovcc项目工程ID。
             * @example `fsgtd5y5r`
             */
            ProjectId: string;
            /**
             * 记录创建时间。
             * @example `1525696592000`
             */
            GmtCreate: number;
            /**
             * 服务端应用标识。
             * @example `cfsgweFv`
             */
            PAppKey: string;
            /**
             * 记录ID。
             * @example `1`
             */
            Id: number;
        }[];
    };
}
