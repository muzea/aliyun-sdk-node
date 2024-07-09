export interface ListInnerNodesRequest {
    /**
     * 文件的代码类型。
     * 常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、97（PAI）、98（组合节点）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1002（PAI内部节点）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1106（遍历节点（foreach））、1221（PyODPS 3），您可以调用ListNodes查看节点类型。
     * @example `ODPS_SQL`
     */
    "ProgramType"?: string;
    /**
     * 页码数。最小值1，最大值100
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 工作空间的ID。
     * @example `1234`
     */
    "ProjectId": number;
    /**
     * 运行的环境，包括DEV和PROD，默认PROD。
     * @example `PROD`
     */
    "ProjectEnv"?: string;
    /**
     * 节点名称。
     * @example `liux_test_n****`
     */
    "NodeName"?: string;
    /**
     * 内部节点所属的组合节点ID。
     * @example `1234`
     */
    "OuterNodeId": number;
}
