export interface ListFileTypeResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 返回的节点类型信息列表。
     */
    NodeTypeInfoList: {
        /**
         * 当前数据页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 当前数据页显示的数据条数。
         * @example `50`
         */
        PageSize: number;
        /**
         * 满足查询条件的数据总条数。
         * @example `127`
         */
        TotalCount: number;
        /**
         * 单个节点类型的信息。
         */
        NodeTypeInfo: {
            /**
             * 节点类型的名称。
             * 常用的代码及名称类型对应关系如下：
             * 6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `ODPS SQL`
             */
            NodeTypeName: string;
            /**
             * 节点类型的Code信息。
             * 常用的代码及名称类型对应关系如下：
             * 6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            NodeType: number;
        }[];
    };
}
