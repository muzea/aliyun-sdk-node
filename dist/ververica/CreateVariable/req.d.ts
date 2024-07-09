export interface CreateVariableRequest {
    /**
     * 工作空间ID。
     * @example `a14bda1c4a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 创建变量的数据内容。
     */
    "body": any;
}
