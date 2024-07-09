export interface UpdateEnvironmentRequest {
    /**
     * 环境实体。您指定的可写字段将被更新，未指定的字段将保持不变
     */
    "body"?: any;
    /**
     * 项目名称
     * @example `demo-project`
     */
    "project": string;
    /**
     * 环境名称
     * @example `demo-env`
     */
    "name": string;
}
