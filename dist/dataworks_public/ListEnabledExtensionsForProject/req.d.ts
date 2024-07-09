export interface ListEnabledExtensionsForProjectRequest {
    /**
     * 扩展点事件编码。
     * @example `commit-file`
     */
    "EventCode": string;
    /**
     * DataWorks工作空间的ID。您可以[登录DataWorks控制台](https://workbench.data.aliyun.com/console?spm=a2c4g.11186623.0.0.6b4d4941azHd2k)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 文件的代码类型。
     * 常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
     * 您可以调用[ListFileType](~~212428~~)接口，查询文件的代码类型。
     * @example `10`
     */
    "FileType"?: string;
}
