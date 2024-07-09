export interface CreateTableThemeRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `123`
     */
    "ProjectId"?: number;
    /**
     * 主题的层级，包括1（一级主题）和2（二级主题）。
     * @example `1`
     */
    "Level": number;
    /**
     * 主题的名称。
     * @example `主题名称`
     */
    "Name": string;
    /**
     * 父类层级ID。
     * @example `122`
     */
    "ParentId"?: number;
}
