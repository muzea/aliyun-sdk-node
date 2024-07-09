export interface UpdateProjectRequest {
    /**
     * 计划更新的项目实体内容。您指定的可写字段将被更新，未指定的字段将保持不变
     */
    "body"?: any;
    /**
     * 对象名称
     * @example `demo-name`
     */
    "name"?: string;
}
