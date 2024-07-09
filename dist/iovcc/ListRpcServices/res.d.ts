export interface ListRpcServicesResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * Rpc服务接口分页查询数据对象
     */
    RpcServices: {
        /**
         * 分页对象
         */
        Pagination: {
            /**
             * 分页页码
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总分页数
             * @example `2`
             */
            TotalPageCount: number;
            /**
             * 分页每页数据集大小
             * @example `20`
             */
            PageSize: number;
            /**
             * 数据集总数
             * @example `30`
             */
            TotalCount: number;
        };
        /**
         * Rpc服务接口注册列表
         */
        List: {
            /**
             * 方法名称
             * @example `rpcTest`
             */
            MethodName: string;
            /**
             * 调用方式，包括http及hsf两种。
             * @example `http`
             */
            Type: string;
            /**
             * 接口名称
             * @example `https://portal.aicc.aliyun.com/rpcServiceTest.html`
             */
            InterfaceName: string;
            /**
             * 接口参数
             * @example `param1,param2`
             */
            Params: string;
            /**
             * cmns客户端应用appKey
             * @example `aorlFafJ`
             */
            AppKey: string;
            /**
             * 服务分组名称
             * @example `lbs`
             */
            GroupName: string;
            /**
             * 服务注册时间
             * @example `1525684245000`
             */
            GmtCreate: number;
            /**
             * 是否逻辑删除，**Y**为已删除，**N**为未删除。
             * @example `N`
             */
            IsDelete: string;
            /**
             * 版本号
             * @example `2018-05-01`
             */
            VersionCode: string;
            /**
             * 服务修改时间
             * @example `1525684245000`
             */
            GmtModified: number;
            /**
             * 记录ID
             * @example `1`
             */
            Id: number;
        }[];
    };
}
