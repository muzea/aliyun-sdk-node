export interface ListUpstreamAppServersResponse {
    /**
     * 请求ID。
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 服务端应用分页查询数据对象。
     */
    AppServers: {
        /**
         * 分页对象
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
         * 服务端应用列表
         */
        List: {
            /**
             * iovcc项目工程ID
             * @example `Gs6st7ye`
             */
            ProjectId: string;
            /**
             * 创建时间
             * @example `1525701500000`
             */
            GmtCreate: number;
            /**
             * 上行消息业务标签。多个标签通过英文逗号拼接。
             * @example `tag1,tag2,tag3`
             */
            Tags: string;
            /**
             * mns消费队列列表，应用服务端通过该队列接收上行消息，多个队列通过英文逗号拼接。
             * @example `com-yunos-iovcc-cmns-forward-qa-mRFG7Bee-tag1,com-yunos-iovcc-cmns-forward-qa-mRFG7Bee-tag2,com-yunos-aicc-cmns-forward-qa-mRFG7Bee-tag3`
             */
            QueueNameList: string;
            /**
             * 服务端应用唯一标识
             * @example `fsgstyye`
             */
            PAppKey: string;
            /**
             * 修改时间
             * @example `1525701500000`
             */
            GmtModified: number;
            /**
             * 服务端应用名称
             * @example `iovcc-test`
             */
            Name: string;
            /**
             * 记录ID
             * @example `1`
             */
            Id: number;
        }[];
    };
}
