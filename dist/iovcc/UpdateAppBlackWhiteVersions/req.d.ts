export interface UpdateAppBlackWhiteVersionsRequest {
    /**
     * 白名单版本versioncode列表，英文逗号分隔，黑白名单不能同时设置。
     * @example `12,13,14`
     */
    "WhiteAppVersions"?: string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `12345`
     */
    "VersionId": string;
    /**
     * 黑名单版本versioncode列表，英文逗号分隔，黑白名单不能同时设置。
     * @example `12,13,14`
     */
    "BlackAppVersions"?: string;
}
