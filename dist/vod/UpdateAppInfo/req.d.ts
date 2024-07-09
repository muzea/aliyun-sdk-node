export interface UpdateAppInfoRequest {
    /**
     * 应用ID。为调用[创建应用](~~113266~~)接口或[获取应用信息列表](~~114000~~)接口返回参数AppId的值。
     * @example `app-****`
     */
    "AppId": string;
    /**
     * 期望修改的应用名称。
     * - 最多支持128个字符，仅支持中文、大小写英文字母、数字、半角句号（.）、短划线（-）和at字符（@）。
     * - UTF-8编码。
     * @example `test`
     */
    "AppName"?: string;
    /**
     * 期望修改的应用描述。
     * - 最多支持512个字符。
     * - UTF-8编码。
     * @example `my first app.`
     */
    "Description"?: string;
    /**
     * 期望修改的应用状态。可选值：
     * - **Normal**（正常启用）
     * - **Disable**（停用）
     * @example `Disable`
     */
    "Status"?: string;
}
