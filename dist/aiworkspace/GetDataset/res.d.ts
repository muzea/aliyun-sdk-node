export interface GetDatasetResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 数据集ID。
     * @example `d-rbvg5wz****c9ks92`
     */
    DatasetId: string;
    /**
     * 数据集名称。
     * @example `myName`
     */
    Name: string;
    /**
     * 描述。
     * @example `用于标注的数据。`
     */
    Description: string;
    /**
     * 创建时间。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtModifiedTime: string;
    /**
     * 数据集所属用户ID。
     * @example `2485765****023475`
     */
    UserId: string;
    /**
     * 主账户ID。
     * @example `1631044****3440`
     */
    OwnerId: string;
    /**
     * 数据集属性。可能值：
     * - FILE：文件。
     * - DIRECTORY：文件夹。
     * @example `DIRECTORY`
     */
    Property: string;
    /**
     * 数据源类型。可能值：
     * - OSS：阿里云对象存储（OSS）。
     * - NAS：阿里云文件存储（NAS）。
     * @example `NAS`
     */
    DataSourceType: string;
    /**
     * Uri样例，可能值：
     * - 数据源类型为OSS：`oss://bucket.endpoint/object`。
     * - 数据源类型为NAS：
     * 通用型NAS格式为：`nas://<nasfisid>.region/subpath/to/dir/`；
     * CPFS1.0：`nas://<cpfs-fsid>.region/subpath/to/dir/`；
     * CPFS2.0：`nas://<cpfs-fsid>.region/<protocolserviceid>/`；
     * CPFS1.0和CPFS2.0根据fsid的格式来区分：
     * CPFS1.0 格式为cpfs-<8位ascii字符>；
     * CPFS2.0 格式为cpfs-<16为ascii字符>。
     * @example `nas://09f****f2.cn-hangzhou/`
     */
    Uri: string;
    /**
     * 标签列表。
     */
    Labels: any[];
    /**
     * 数据类型，可能值：
     * - COMMON：普通。
     * - PIC：图片。
     * - TEXT：文本。
     * - VIDEO：视频。
     * - AUDIO：音频。
     * @example `COMMON`
     */
    DataType: string;
    /**
     * 数据来源类型，可能值：
     * - PAI-PUBLIC-DATASET：PAI公共数据集。
     * - ITAG：iTAG模块标注结果生成的数据集。
     * - USER：用户注册的数据集。
     * @example `USER`
     */
    SourceType: string;
    /**
     * 数据来源ID，可能值：
     * - 当SourceType为USER时，SourceId支持自定义。
     * - 当SourceType为ITAG时，即iTAG模块标注结果生成的数据集时，SourceId为ITAG的任务ID。
     * - 当SourceType为PAI_PUBLIC_DATASET时，即使用PAI公共数据集创建的数据集时，SourceId默认为空。
     * @example `jdnhf***fnrimv`
     */
    SourceId: string;
    /**
     * 数据集所在工作空间ID。
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
     * 工作空间可见度。可能值：
     * - PRIVATE：表示工作空间内自己以及管理员可见。
     * - PUBLIC：为工作空间所有用户可见。
     * @example `PRIVATE`
     */
    Accessibility: string;
    /**
     * 数据集的数据源来源类型。取值如下：
     * - Ecs （默认）
     * - Lingjun
     * @example `Ecs`
     */
    ProviderType: string;
}
