export interface ListFilesRequest {
    /**
     * 文件所在的文件夹路径。
     * @example `业务流程/我的第一个业务流程/MaxCompute/ods层`
     */
    "FileFolderPath"?: string;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数与ProjectIdentifier参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * 文件名称的关键字。支持模糊匹配，即输入关键字即可查询包含该关键字的所有文件。
     * @example `ods`
     */
    "Keyword"?: string;
    /**
     * DataWorks工作空间的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间名称。
     * 该参数与ProjectId参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大为100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 文件所属的功能模块。取值如下：
     * - NORMAL：数据开发。
     * - MANUAL：手动任务。
     * - MANUAL_BIZ：手动业务流程。
     * - SKIP：数据开发的空跑调度。
     * - ADHOCQUERY：临时查询。
     * - COMPONENT：组件管理。
     * @example `NORMAL`
     */
    "UseType"?: string;
    /**
     * 文件的代码类型。
     * 常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、97（PAI）、98（组合节点）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1002（PAI内部节点）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1106（遍历节点（foreach））、1221（PyODPS 3）。
     * @example `10,23`
     */
    "FileTypes"?: string;
    /**
     * 文件责任人。
     * @example `3726346****`
     */
    "Owner"?: string;
    /**
     * 调度节点的ID。您可以调用[ListNodes](~~173979~~)接口获取节点ID。
     * @example `123541234`
     */
    "NodeId"?: number;
    /**
     * 查询结果是否包含文件内容（对于内容较多的文件，可能存在较长的网络传输延时）。
     * @example `false`
     */
    "NeedContent"?: boolean;
    /**
     * 查询结果是否包含文件所在的文件夹的路径。
     * @example `false`
     */
    "NeedAbsoluteFolderPath"?: boolean;
    /**
     * 精确匹配的文件名称，查询结果的文件名称与该参数完全一致。
     * @example `ods_create.sql`
     */
    "ExactFileName"?: string;
    /**
     * Fileld列表，查询结果的文件ID集合只能是该列表的子集。最多支持一次指定50个FileId。
     * @example `78237,816123`
     */
    "FileIdIn"?: string;
}
