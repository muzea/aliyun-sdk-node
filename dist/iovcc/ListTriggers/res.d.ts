export interface ListTriggersResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 触发器列表
     */
    TriggerList: {
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 目标页号
             * @example `1`
             */
            PageIndex: number;
            /**
             * 分页总数
             * @example `2`
             */
            TotalPageCount: number;
            /**
             * 每页所显示的项数
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数
             * @example `11`
             */
            TotalCount: number;
        };
        /**
         * 触发器数组
         */
        Triggers: {
            /**
             * 触发器状态，-1：关联函数已删除；1：关联函数未部署；2：关联函数已部署
             * @example `2`
             */
            Status: number;
            /**
             * 触发器类型，0：syncstore
             * @example `0`
             */
            Type: number;
            /**
             * 是否在生产环境触发，0：不在该环境执行；1：在该环境执行，默认为0
             * @example `1`
             */
            Production: number;
            /**
             * 函数数组
             */
            Functions: {
                /**
                 * 创建时间，精确到毫秒的Unix时间戳
                 * @example `1535872636000`
                 */
                GmtCreate: number;
                /**
                 * 文件名
                 * @example `hello.zip`
                 */
                FileName: string;
                /**
                 * 函数名
                 * @example `someFunc`
                 */
                Name: string;
                /**
                 * 修改时间，精确到毫秒的Unix时间戳
                 * @example `1535872636000`
                 */
                GmtModified: number;
                /**
                 * 函数ID
                 * @example `1`
                 */
                Id: number;
                /**
                 * 文件ID
                 * @example `1`
                 */
                FileId: number;
            }[];
            /**
             * 是否在沙箱环境触发，0：不在该环境执行；1：在该环境执行，默认为0
             * @example `1`
             */
            Sandbox: number;
            /**
             * 命名空间，如：syncstore的namespace
             * @example `f323baa35c304751a4b1254adc8230bf`
             */
            Namespace: string;
            /**
             * 修改时间，精确到毫秒的Unix时间戳
             * @example `1535873636000`
             */
            GmtModified: number;
            /**
             * 触发器触发的事件标识，如：syncstore路径
             * @example `/`
             */
            Source: string;
            /**
             * 链式函数ID，多个以英文逗号”,“分隔，分别对应Functions数组的每一项
             * @example `/`
             */
            ChainedFunctionIds: string;
            /**
             * 创建时间，精确到毫秒的Unix时间戳
             * @example `1535873636000`
             */
            GmtCreate: number;
            /**
             * 调用模式，0：串行（同步）调用；1：并行（异步）调用
             * @example `0`
             */
            InvocationMode: number;
            /**
             * 触发器ID
             * @example `1`
             */
            Id: number;
        }[];
    };
}
