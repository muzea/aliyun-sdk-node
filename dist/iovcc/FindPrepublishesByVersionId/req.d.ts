export interface FindPrepublishesByVersionIdRequest {
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": number;
    /**
     * 版本类型，取值有：FOTA 系统版本，APP 应用版本。
     * @example `FOTA`
     */
    "VersionType": string;
}
