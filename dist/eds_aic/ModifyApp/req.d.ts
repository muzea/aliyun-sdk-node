export interface ModifyAppRequest {
    /**
     * 应用ID。
     * @example `1234`
     */
    "AppId"?: number;
    /**
     * 应用名称。
     * @example `应用名称`
     */
    "AppName"?: string;
    /**
     * Icon地址。
     * @example `https://defaultIcon.png`
     */
    "IconUrl"?: string;
    /**
     * 应用描述。
     * @example `应用描述`
     */
    "Description"?: string;
}
