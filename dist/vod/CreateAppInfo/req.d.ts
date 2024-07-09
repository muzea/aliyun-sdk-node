export interface CreateAppInfoRequest {
    /**
     * 应用名称。不能重复。
     * - 最多支持128个字符，仅支持中文、大小写英文字母、数字、半角句号（.）、短划线（-）和at字符（@）。
     * - UTF-8编码。
     * @example `test`
     */
    "AppName": string;
    /**
     * 应用描述。
     * - 最多支持512个字符。
     * - UTF-8编码。
     * @example `myfirstapp`
     */
    "Description"?: string;
}
