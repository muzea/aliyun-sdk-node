export interface UpdateProjectRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 项目ID，可通过接口ListProjects获取。
     * @example `3`
     */
    "ProjectId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 项目名称。
         * @example `project1`
         */
        Name: string;
        /**
         * 项目描述。
         * @example `This is a test.`
         */
        Description: string;
    };
}
