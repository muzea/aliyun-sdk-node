export interface ListSmartSysAvatarModelsRequest {
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `10`
     */
    "PageSize"?: number;
    "SdkVersion"?: string;
}
