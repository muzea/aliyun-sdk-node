export interface CreateResourceFileRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks控制台，进入工作空间配置页面获取工作空间ID。需要用该参数来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 文件的路径。
     * @example `业务流程/第一个业务流程/MaxCompute/文件夹1/文件夹2`
     */
    "FileFolderPath": string;
    /**
     * 文件的名称。
     * @example `文件名`
     */
    "FileName": string;
    /**
     * 文件的代码类型。
     * 常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
     * 您可以调用ListFileType接口，查询文件的代码类型。
     * @example `10`
     */
    "FileType": number;
    /**
     * 文件的描述信息。
     * @example `这是一个描述信息`
     */
    "FileDescription"?: string;
    /**
     * 文件责任人的阿里云用户ID。如果该参数为空，则默认使用调用者的阿里云用户ID。
     * @example `1000000000001`
     */
    "Owner"?: string;
    /**
     * 文件代码内容，不同代码类型（fileType）的文件，代码格式不同。您可以在运维中心找到对应类型的任务，右键单击查看代码，查看具体的代码格式。
     * @example `SHOW TABLES;`
     */
    "Content"?: string;
    /**
     * POP提供的文件上传OSS URL。
     * @example `http://bucketname1.oss-cn-shanghai.aliyuncs.com/example`
     */
    "ResourceFile"?: string;
    /**
     * 原始资源文件的名称。
     * @example `origin_file_name.sql`
     */
    "OriginResourceName": string;
    /**
     * 文件资源上传模式。目前仅对MaxCompute的File类型文件生效，取值如下：
     * - true：可下载的资源模式。
     * - false：在线编辑的文本模式。
     * @example `false`
     */
    "UploadMode"?: boolean;
    /**
     * 是否将资源同步上传到计算引擎。
     * @example `false`
     */
    "RegisterToCalcEngine": boolean;
    /**
     * 资源文件在计算引擎上的存储路径，目前只有EMR和CDH用到该字段。EMR格式为[oss|hdfs]://path/to/object，CDH默认需要填写为/user/admin/lib。
     * @example `oss://oss-cn-shanghai.aliyuncs.com/emr-test`
     */
    "StorageURL"?: string;
}
