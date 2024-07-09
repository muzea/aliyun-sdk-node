export interface GetInstanceConsumeTimeRankResponse {
    /**
     * 每次请求生成的唯一标识。
     * @example `6347364dadsfadf****`
     */
    RequestId: string;
    /**
     * 实例运行时长的排行记录。
     */
    InstanceConsumeTimeRank: {
        /**
         * 排行更新时间戳。
         * @example `1600963200000`
         */
        UpdateTime: number;
        /**
         * 实例运行时长的排行数据。
         */
        ConsumeTimeRank: {
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
             * 实例运行的业务日期。
             * @example `1600963200000`
             */
            Bizdate: number;
            /**
             * 实例ID。
             * @example `95279527`
             */
            InstanceId: number;
            /**
             * 任务的类型。
             * @example `10`
             */
            PrgType: number;
            /**
             * 任务节点的ID。
             * @example `9527`
             */
            NodeId: number;
            /**
             * 实例运行时长，单位为s。
             * @example `1000`
             */
            Consumed: number;
        }[];
    };
}
