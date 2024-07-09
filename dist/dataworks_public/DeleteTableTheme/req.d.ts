export interface DeleteTableThemeRequest {
    /**
     * 主题ID。
     * @example `123`
     */
    "ThemeId": number;
    /**
     * DataWorks工作空间ID。
     * @example `123`
     */
    "ProjectId"?: number;
}
