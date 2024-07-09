export interface UpdateProjectIpWhiteListRequest {
    /**
     * 项目名称
     * @example `odps_project`
     */
    "projectName": string;
    /**
     * 请求体参数
     * @example `json
    
    {"ipWhiteList":{"ipList": "", //string 以逗号分隔多个
                    "vpcIpList": "", //}
                   }`
     */
    "body"?: string;
}
