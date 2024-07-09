export interface DeleteProjectRequest {
    /**
     * 项目名称
     * @example `demo-name`
     */
    "name"?: string;
    /**
     * 是否强制删除。当项目中包含多个环境时，若force为true，则能够强制删除项目，并级联删除所有环境下的其他实体；若force为false，则抛出异常，需要您先删除环境
     * @example `true`
     */
    "force"?: boolean;
}
