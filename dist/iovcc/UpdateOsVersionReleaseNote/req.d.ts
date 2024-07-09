export interface UpdateOsVersionReleaseNoteRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `10023`
     */
    "VersionId": string;
    /**
     * 版本发布说明
     * @example `new release note`
     */
    "ReleaseNote": string;
}
