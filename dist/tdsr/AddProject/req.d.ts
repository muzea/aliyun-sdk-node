export interface AddProjectRequest {
    /**
     * 业务id,默认取值5（未归属项目），无特殊需求不要填写此参数
     * @example `5432****`
     */
    "BusinessId"?: number;
    /**
     * 项目名称
     * @example `项目A`
     */
    "Name": string;
}
