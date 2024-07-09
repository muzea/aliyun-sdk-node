export interface CreateAppRequest {
    /**
     * 创建白板应用时用户在控制台设置的应用名称，由1~32位的中文、英文、数字或下划线组成。
     * @example `new_whiteboard_app`
     */
    "AppName": string;
}
