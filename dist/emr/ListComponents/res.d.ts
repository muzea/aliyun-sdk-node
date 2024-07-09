export interface ListComponentsResponse {
    Components: {
        /**
         * 组件名称。
         * @example `DataNode`
         */
        ComponentName: string;
        /**
         * 应用名称。
         * @example `HDFS`
         */
        ApplicationName: string;
        /**
         * 安装该组件的机器总数。
         * @example `1`
         */
        Replica: number;
        /**
         * 命名空间。
         */
        Namespace: string;
        /**
         * 属性列表。
         */
        Attributes: any[];
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置，空代表数据已经读取完毕。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
