export interface TopTenElapsedTimeInstanceResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `6347364dadsfadf****`
     */
    RequestId: string;
    /**
     * 实例运行时长的排行记录。
     */
    InstanceConsumeTimeRank: {
        /**
         * 实例运行时长排行更新时间戳。
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
            BusinessDate: number;
            /**
             * 任务的类型。
             * 常见的类型如下：
             * 6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            ProgramType: number;
            /**
             * 实例ID。
             * @example `95279527`
             */
            InstanceId: number;
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
