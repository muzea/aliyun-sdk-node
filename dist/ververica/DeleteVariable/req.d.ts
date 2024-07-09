export interface DeleteVariableRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 需要删除的变量名称。
     * @example `variableName`
     */
    "name": string;
}
