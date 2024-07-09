export interface UpdateTableModelInfoRequest {
    /**
     * 一级主题ID。
     * @example `101`
     */
    "FirstLevelThemeId"?: number;
    /**
     * 二级主题ID。
     * @example `101`
     */
    "SecondLevelThemeId"?: number;
    /**
     * 层级ID。
     * @example `101`
     */
    "LevelId"?: number;
    /**
     * 表的唯一标识，格式为odps.{projectName}.{tableName}。
     * @example `odps.test.table1`
     */
    "TableGuid": string;
    /**
     * 层级类型，包括1（逻辑层级）和2（物理层级）。
     * @example `1`
     */
    "LevelType"?: number;
}
