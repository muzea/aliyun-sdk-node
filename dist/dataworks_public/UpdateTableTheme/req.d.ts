export interface UpdateTableThemeRequest {
    /**
     * 工作空间ID。
     * @example `123`
     */
    "ProjectId"?: number;
    /**
     * 主题的名称。
     * @example `主题名称`
     */
    "Name": string;
    /**
     * 主题ID。
     * @example `123`
     */
    "ThemeId": number;
}
