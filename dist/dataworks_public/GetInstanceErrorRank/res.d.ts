export interface GetInstanceErrorRankResponse {
    /**
     * 每次请求生成的唯一标识。
     * @example `952795279527****`
     */
    RequestId: string;
    /**
     * 节点出错的排行数据。
     */
    InstanceErrorRank: {
        /**
         * 出错排行更新的时间戳。
         * @example `1600963200000`
         */
        UpdateTime: number;
        /**
         * 节点近一个月出错排行数据。
         */
        ErrorRank: {
            /**
             * 节点责任人的阿里云UID。
             * @example `952795279527`
             */
            Owner: string;
            /**
             * 节点的名称。
             * @example `节点名称`
             */
            NodeName: string;
            /**
             * DataWorks工作空间的ID。
             * @example `9527`
             */
            ProjectId: number;
            /**
             * 节点的ID。
             * @example `9527`
             */
            NodeId: number;
            /**
             * 节点出错的次数。
             * @example `5`
             */
            Count: number;
            /**
             * 节点任务的类型。
             * @example `10`
             */
            PrgType: number;
        }[];
    };
}
