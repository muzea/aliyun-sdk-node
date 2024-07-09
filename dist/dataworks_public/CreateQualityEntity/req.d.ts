export interface CreateQualityEntityRequest {
    /**
     * 引擎的项目名称或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 表的名称。
     * @example `dual`
     */
    "TableName": string;
    /**
     * 引擎或者数据源的类型。
     * @example `ODPS`
     */
    "EnvType": string;
    /**
     * 分区表达式。
     * @example `dt=$[yyyymmdd]`
     */
    "MatchExpression": string;
    /**
     * 已废弃。
     * 包括0（SQL完成时校检）。
     * @example `0`
     */
    "EntityLevel"?: number;
    /**
     * DataWorks工作空间的ID。您可以进入DataWorks管理控制台获取。
     * @example `123`
     */
    "ProjectId": number;
}
