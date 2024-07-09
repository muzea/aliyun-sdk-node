export interface UpdateAppVersionRemarkRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `123`
     */
    "VersionId": string;
    /**
     * 版本备注信息
     * @example `sample remark`
     */
    "Remark": string;
}
