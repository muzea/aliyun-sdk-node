export interface QueryTaskByParamResponse {
    /**
     * 每页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `3`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `15`
     */
    TotalCount: number;
    data: {
        /**
         * 返回的结果
         */
        task: {
            /**
             * 收件人名称
             * @example `TKP000442-333`
             */
            ReceiversName: string;
            /**
             * 标签
             * @example `202201`
             */
            TagName: string;
            /**
             * 任务状态
             * @example `1`
             */
            TaskStatus: string;
            /**
             * 创建时间
             * @example `2022-04-18T10:36Z`
             */
            CreateTime: string;
            /**
             * 请求数
             * @example `1`
             */
            RequestCount: string;
            /**
             * 地址类型
             * @example `0`
             */
            AddressType: string;
            /**
             * 创建时间的UTC格式
             * @example `1569734892`
             */
            UtcCreateTime: number;
            /**
             * 模板名称
             * @example `Short Simple`
             */
            TemplateName: string;
            /**
             * 任务ID
             * @example `1054296`
             */
            TaskId: string;
        }[];
    };
}
