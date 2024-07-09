export interface UpdateOsVersionRemarkRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `12304`
     */
    "VersionId": string;
    /**
     * 备注信息
     * @example `sample remark`
     */
    "Remark": string;
}
