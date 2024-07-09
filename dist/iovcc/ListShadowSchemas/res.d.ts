export interface ListShadowSchemasResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 查询结果列表
     */
    PageList: {
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 当前页
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总页数
             * @example `1`
             */
            TotalPageCount: number;
            /**
             * 每页记录数
             * @example `10`
             */
            PageSize: number;
            /**
             * 总记录数
             * @example `10`
             */
            TotalCount: number;
            /**
             * 是否简单验证（无参考价值）
             * @example `false`
             */
            SimpleSign: boolean;
            /**
             * 是否有下一页
             * @example `false`
             */
            HasNextPage: boolean;
        };
        /**
         * 结果列表
         */
        List: {
            /**
             * 认证类型描述
             * @example `基于账号`
             */
            AuthTypeDesc: string;
            /**
             * 设备型号ID
             * @example `120`
             */
            DeviceModelId: number;
            /**
             * 账号认证类型
             * @example `0`
             */
            AuthType: number;
            /**
             * 项目ID
             * @example `PIC3UA0V`
             */
            ProjectId: string;
            /**
             * 创建时间
             * @example `1537255499517`
             */
            GmtCreate: number;
            /**
             * 命名空间
             * @example `b09e93ce436aaf0dcfc2fb2004c1fde8`
             */
            Namespace: string;
            /**
             * 设备机型
             * @example `model_2nd`
             */
            DeviceModel: string;
            /**
             * 修改时间
             * @example `1537255499517`
             */
            GmtModified: number;
            /**
             * 机型shema信息
             * @example `{"a":"b"}`
             */
            ModuleSchema: string;
            /**
             * 数据唯一记录ID
             * @example `12`
             */
            Id: number;
        }[];
    };
}
