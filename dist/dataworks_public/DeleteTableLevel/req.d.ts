export interface DeleteTableLevelRequest {
    /**
     * 需要删除的层级ID。您可以从ListLevel接口获取。
     * @example `123`
     */
    "LevelId": number;
    /**
     * DataWorks工作空间的ID。
     * @example `123`
     */
    "ProjectId": number;
}
