export interface UpdateTableLevelRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `123`
     */
    "ProjectId": number;
    /**
     * 层级的类型，包括1（逻辑层级）和2（物理层级）。
     * @example `1`
     */
    "LevelType"?: number;
    /**
     * 层级的名称。
     * @example `层级名称`
     */
    "Name"?: string;
    /**
     * 层级的描述。
     * @example `层级描述`
     */
    "Description"?: string;
    /**
     * 需要更新的层级ID。您可以通过ListLevel获取。
     * @example `123`
     */
    "LevelId": number;
}
