export interface ListTableLevelRequest {
    /**
     * DataWorks工作空间的ID。您可以进入DataWorks管理控制台获取。
     * @example `123`
     */
    "ProjectId": number;
    /**
     * 层级的类型，包括1（逻辑层级）和2（物理层级）。
     * @example `1`
     */
    "LevelType": number;
    /**
     * 分页查询页码。默认为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的条数，默认为10条。
     * @example `10`
     */
    "PageSize"?: number;
}
