export interface TopTenErrorTimesInstanceResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
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
             * 节点任务的类型。
             * 常用的类型如下：
             * 6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            ProgramType: number;
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
        }[];
    };
}
