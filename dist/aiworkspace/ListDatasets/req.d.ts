export interface ListDatasetsRequest {
    /**
     * 数据集列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，对指定的排序字段进行升序或降序。默认值为ASC。
     * - ASC：升序。
     * - DESC：降序。
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 数据集名称，支持根据数据集名称模糊搜索。
     * @example `myName`
     */
    "Name"?: string;
    /**
     * 数据集属性，多项之间使用半角逗号（,）分隔。支持以下取值：
     * - DIRECTORY：文件夹。
     * - FILE：文件。
     * @example `FILE`
     */
    "Properties"?: string;
    /**
     * 数据源类型，多项之间使用半角逗号分隔。支持以下取值：
     * - NAS：数据存储为阿里云文件存储（NAS）。
     * - OSS：数据存储为阿里云对象存储（OSS）。
     * @example `OSS`
     */
    "DataSourceTypes"?: string;
    /**
     * 数据集类型，多项之间使用半角逗号（,）分隔。支持以下取值：
     * - VIDEO：视频。
     * - COMMON：通用。
     * - TEXT：文本。
     * - PIC：图片。
     * - AUDIO：音频。
     * @example `COMMON,TEXT`
     */
    "DataTypes"?: string;
    /**
     * 数据来源ID。
     * - 当SourceTypes为USER时，SourceId支持自定义。
     * - 当SourceTypes为ITAG时，即iTAG模块标注结果生成的数据集时，SourceId为ITAG的任务ID。
     * - 当SourceTypes为PAI_PUBLIC_DATASET时，即使用PAI公共数据集创建的数据集时，SourceId默认为空。
     * @example `d-rbvg5wzljzjhc9ks92`
     */
    "SourceId"?: string;
    /**
     * 来源类型，多项之间使用半角逗号分隔。支持以下取值：
     * - PAI-PUBLIC-DATASET：PAI公共数据集。
     * - ITAG：iTAG模块标注结果生成的数据集。
     * - USER：用户注册的数据集。
     * @example `USER,ITAG`
     */
    "SourceTypes"?: string;
    /**
     * 数据集所在工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * 如果不配置该参数，则会使用默认工作空间；如果默认工作空间不存在，则会报错。
     * @example `324**`
     */
    "WorkspaceId"?: string;
    /**
     * 数据集标签，用于过滤数据集列表。标签Key或Value中，有指定字符串的，都会被过滤出来。
     * @example `test`
     */
    "Label"?: string;
    "Provider"?: string;
}
