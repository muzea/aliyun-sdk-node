export interface GetFileTypeStatisticResponse {
    /**
     * 请求的ID，用于定位日志，排查问题。
     * @example `SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF`
     */
    RequestId: string;
    /**
     * 节点的类型和数量。
     */
    ProgramTypeAndCounts: {
        /**
         * 节点的数量。
         * @example `1`
         */
        Count: number;
        /**
         * 节点的类型。
         * 常用的类型如下：
         * 6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
         * @example `ODPS_SQL`
         */
        ProgramType: string;
    }[];
}
