export interface UpdateAppVersionStatusRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `12345`
     */
    "Id": string;
    /**
     * 版本状态
     * @example `PUBLISHED`
     */
    "Status"?: string;
}
