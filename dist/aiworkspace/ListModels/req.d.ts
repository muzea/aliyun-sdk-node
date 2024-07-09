export interface ListModelsRequest {
    /**
     * 模型列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的模型数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，对指定的排序字段进行升序或降序。默认ASC。
     * - ASC：升序。
     * - DESC：降序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 分页查询时的排序字段。目前使用GmtCreateTime字段用于排序。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 配置工作空间ID，返回列表中只获取该工作空间内的模型列表。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `324**`
     */
    "WorkspaceId"?: string;
    /**
     * 配置模型名称，用来过滤获取的模型列表。
     * @example `情感分析`
     */
    "ModelName"?: string;
    /**
     * 标签串。用于列表过滤，标签中key或value中，有指定字符串的，都会被过滤出来。
     * @example `key1`
     */
    "Label"?: string;
    /**
     * 提供者。指定提供者，则只返回该提供者公开的模型。不填则返回用户自己的模型。
     * @example `pai`
     */
    "Provider"?: string;
    /**
     * 配置领域来过滤该领域内的模型列表。例如：nlp（自然语言处理）、cv（计算机视觉）等。
     * @example `nlp`
     */
    "Domain"?: string;
    /**
     * 配置任务来过滤属于该任务类型的模型列表。例如：text-classification（文本分类）等。
     * @example `text-classification`
     */
    "Task"?: string;
    /**
     * 配置模型源，来过滤属于该社区或组织的模型列表。例如ModelScope，HuggingFace等。
     * @example `ModelScope`
     */
    "Origin"?: string;
    /**
     * 配置查询条件。ModelName、Domain、Task、LabelKey、LabelValue相似匹配。
     * 例如输入为nlp，则ModelName、Domain、Task、LabelKey、LabelValue中匹配的模型都会返回。
     * @example `nlp`
     */
    "Query"?: string;
    /**
     * 模型类型
     * @example `Endpoint`
     */
    "ModelType"?: string;
    /**
     * 模型所在Collection，支持填写多个，用英文逗号分割
     * @example `AI4D,QuickStart`
     */
    "Collections"?: string;
}
