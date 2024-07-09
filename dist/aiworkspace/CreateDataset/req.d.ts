export interface CreateDatasetRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 数据集的名称。命名规则如下：
         * - 以小写字母、大写字母、数字或中文开头。
         * - 可以包含下划线（_）或短划线（-）。
         * - 长度为1~127个字符。
         * @example `myName`
         */
        Name: string;
        /**
         * 数据集的属性。支持以下取值：
         * - FILE：文件。
         * - DIRECTORY：文件夹。
         * @example `DIRECTORY`
         */
        Property: string;
        /**
         * 数据源类型。支持以下取值：
         * - OSS：阿里云对象存储（OSS）。
         * - NAS：阿里云文件存储（NAS）。
         * @example `NAS`
         */
        DataSourceType: string;
        /**
         * Uri配置样例如下：
         * - 数据源类型为OSS：`oss://bucket.endpoint/object`
         * - 数据源类型为NAS：
         * 通用型NAS格式为：`nas://<nasfisid>.region/subpath/to/dir/`；
         * CPFS1.0：`nas://<cpfs-fsid>.region/subpath/to/dir/`；
         * CPFS2.0：`nas://<cpfs-fsid>.region/<protocolserviceid>/`。
         * CPFS1.0和CPFS2.0根据fsid的格式来区分：CPFS1.0 格式为cpfs-<8位ASCII字符>；CPFS2.0 格式为cpfs-<16位ASCII字符>。
         * @example `nas://09f****f2.cn-hangzhou/`
         */
        Uri: string;
        /**
         * 数据集类型，默认为COMMON。支持以下取值：
         * - COMMON：普通。
         * - PIC：图片。
         * - TEXT：文本。
         * - VIDEO：视频。
         * - AUDIO：音频。
         * @example `COMMON`
         */
        DataType: string;
        /**
         * 标签列表。
         */
        Labels: any[];
        /**
         * 数据来源类型，默认为USER。支持以下取值：
         * - PAI-PUBLIC-DATASET：PAI公共数据集。
         * - ITAG：iTAG模块标注结果生成的数据集。
         * - USER：用户注册的数据集。
         * @example `USER`
         */
        SourceType: string;
        /**
         * 数据来源ID。
         * - 当SourceType为USER时，SourceId支持自定义。
         * - 当SourceType为ITAG时，即iTAG模块标注结果生成的数据集时，SourceId为ITAG的任务ID。
         * - 当SourceType为PAI_PUBLIC_DATASET时，即使用PAI公共数据集创建的数据集时，SourceId默认为空。
         * @example `jdnhf***fnrimv`
         */
        SourceId: string;
        /**
         * 对数据集进行自定义描述，以区分不同的数据集。
         * @example `用于标注的数据。`
         */
        Description: string;
        /**
         * 数据集所在工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * 如果不配置该参数，则会使用默认工作空间；如果默认工作空间不存在，则会报错。
         * @example `478**`
         */
        WorkspaceId: string;
        /**
         * 扩展字段，JsonString类型。
         * 当DLC使用数据集时，可通过配置mountPath字段指定数据集默认挂载路径。
         * @example `{
          "mountPath": "/mnt/data/"
        }`
         */
        Options: string;
        /**
         * 工作空间可见度。支持以下取值：
         * - PRIVATE（默认值）：表示工作空间内自己以及管理员可见。
         * - PUBLIC为：工作空间所有用户可见。
         * @example `PRIVATE`
         */
        Accessibility: string;
        /**
         * 数据集的数据源来源类型，支持配置的类型如下：
         * - Ecs（默认值）
         * - Lingjun
         * @example `Ecs`
         */
        ProviderType: string;
        /**
         * 数据集提供者。不允许设置为pai。
         * @example `Github`
         */
        Provider: string;
        /**
         * 数据集所有者的阿里云账号ID。工作空间所有者和管理员有权限给指定工作空间成员创建数据集。
         * @example `2485765****023475`
         */
        UserId: string;
    };
}
