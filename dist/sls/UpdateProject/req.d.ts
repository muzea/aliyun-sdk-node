export interface UpdateProjectRequest {
    /**
     * 请求结构体。
     */
    "body": {
        /**
         * Project的描述。默认为空字符串。
         * @example `Description of my-project-test`
         */
        description: string;
    };
    /**
     * Project名称。
     * @example `ali-project-test`
     */
    "project": string;
}
