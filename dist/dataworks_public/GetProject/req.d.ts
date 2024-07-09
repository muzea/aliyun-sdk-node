export interface GetProjectRequest {
    /**
     * DataWorks工作空间ID。
     * 您可以通过[ListProjects](~~2780068~~)接口获取工作空间ID。
     * @example `466230`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间的名称。您可以通过[ListProjects](~~2780068~~)接口获取工作空间的名称。
     * @example `test_project`
     */
    "ProjectIdentifier"?: string;
}
