export interface UpdateOsBlackWhiteVersionsRequest {
    /**
     * 白名单版本列表，英文逗号分隔。
     * @example `2.0.1-R-20180402.1208,3.0.1-R-20180402.1208`
     */
    "WhiteVersions"?: string;
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
     * 黑名单版本列表，英文逗号分隔，黑白名单不能同时设置。
     * @example `2.0.1-R-20180402.1208,3.0.1-R-20180402.1208`
     */
    "BlackVersions"?: string;
}
