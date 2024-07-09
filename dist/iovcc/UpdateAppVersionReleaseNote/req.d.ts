export interface UpdateAppVersionReleaseNoteRequest {
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
     * 发布说明
     * @example `sample release note`
     */
    "ReleaseNote": string;
}
