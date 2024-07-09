export interface UpdateMetaTableRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `101`
     */
    "ProjectId"?: number;
    /**
     * 表的名称。
     * @example `table1`
     */
    "TableName"?: string;
    /**
     * DataWorks的环境，包括0（开发环境）和1（生产环境）。
     * @example `1`
     */
    "EnvType"?: number;
    /**
     * 表的唯一标识，格式为odps.{projectName}.{tableName}。
     * @example `odps.test.table1`
     */
    "TableGuid"?: string;
    /**
     * 新的OwnerId，为空时不更新。
     * @example `12345`
     */
    "NewOwnerId"?: string;
    /**
     * 需要增加的标签名称，使用英文逗号（,）分隔。
     * @example `a,b,c`
     */
    "AddedLabels"?: string;
    /**
     * 需要删除的标签名称，使用英文逗号（,）分隔。
     * @example `a,b,c`
     */
    "RemovedLabels"?: string;
    /**
     * 需要关联的类目ID。
     * @example `101`
     */
    "CategoryId"?: number;
    /**
     * 编辑表的可见性，包括0（不可见）、1（可见）和2（工作空间可见）。
     * @example `1`
     */
    "Visibility"?: number;
    /**
     * 表的中文名称。
     * @example `中文名`
     */
    "Caption"?: string;
    /**
     * 表Schema信息。在ODPS，用户启动了三层模型需要填写Schema信息。
     * @example `default`
     */
    "Schema"?: string;
}
