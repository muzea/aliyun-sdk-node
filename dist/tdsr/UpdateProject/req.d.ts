export interface UpdateProjectRequest {
    /**
     * 项目ID
     * @example `1234****`
     */
    "Id": string;
    /**
     * 项目名称
     * @example `项目A`
     */
    "Name"?: string;
    /**
     * 业务ID
     * @example `5432****`
     */
    "BusinessId"?: string;
}
