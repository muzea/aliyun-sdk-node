export interface PutProjectRequest {
    /**
     * 计划更新的项目实体内容。当前实体的可写字段将被您指定的实体完全替换
     */
    "body"?: any;
    /**
     * 对象名称
     * @example `demo-name`
     */
    "name"?: string;
    /**
     * 强制更新项目。由于更新项目时可能会触发自动部署，因此并发部署将被限制，您可以通过此参数强制更新
     * @example `true`
     */
    "force"?: boolean;
}
