import { ListPublicDatasetTagsRequest } from "./ListPublicDatasetTags/req";
import { ListPublicDatasetTagsResponse } from "./ListPublicDatasetTags/res";
import { GetPublicDatasetRequest } from "./GetPublicDataset/req";
import { GetPublicDatasetResponse } from "./GetPublicDataset/res";
import { UpdateWorkspaceRequest } from "./UpdateWorkspace/req";
import { UpdateWorkspaceResponse } from "./UpdateWorkspace/res";
import { ListGlobalAppsRequest } from "./ListGlobalApps/req";
import { ListGlobalAppsResponse } from "./ListGlobalApps/res";
import { DeleteAppRequest } from "./DeleteApp/req";
import { DeleteAppResponse } from "./DeleteApp/res";
import { ListWorkspacesRequest } from "./ListWorkspaces/req";
import { ListWorkspacesResponse } from "./ListWorkspaces/res";
import { ListEntityItemsRequest } from "./ListEntityItems/req";
import { ListEntityItemsResponse } from "./ListEntityItems/res";
import { CreateRunRequest } from "./CreateRun/req";
import { CreateRunResponse } from "./CreateRun/res";
import { CreateAppRequest } from "./CreateApp/req";
import { CreateAppResponse } from "./CreateApp/res";
import { UpdateEntityRequest } from "./UpdateEntity/req";
import { UpdateEntityResponse } from "./UpdateEntity/res";
import { GetSubmissionRequest } from "./GetSubmission/req";
import { GetSubmissionResponse } from "./GetSubmission/res";
import { ListAuthorizedSoftwareRequest } from "./ListAuthorizedSoftware/req";
import { ListAuthorizedSoftwareResponse } from "./ListAuthorizedSoftware/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { ListAppsRequest } from "./ListApps/req";
import { ListAppsResponse } from "./ListApps/res";
import { CreateWorkspaceRequest } from "./CreateWorkspace/req";
import { CreateWorkspaceResponse } from "./CreateWorkspace/res";
import { GetWorkspaceRequest } from "./GetWorkspace/req";
import { GetWorkspaceResponse } from "./GetWorkspace/res";
import { ListEntitiesRequest } from "./ListEntities/req";
import { ListEntitiesResponse } from "./ListEntities/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { DownloadEntityRequest } from "./DownloadEntity/req";
import { DownloadEntityResponse } from "./DownloadEntity/res";
import { DeleteEntityItemsRequest } from "./DeleteEntityItems/req";
import { DeleteEntityItemsResponse } from "./DeleteEntityItems/res";
import { UploadEntityRequest } from "./UploadEntity/req";
import { UploadEntityResponse } from "./UploadEntity/res";
import { ListSubmissionsRequest } from "./ListSubmissions/req";
import { ListSubmissionsResponse } from "./ListSubmissions/res";
import { ResumeSubmissionRequest } from "./ResumeSubmission/req";
import { ResumeSubmissionResponse } from "./ResumeSubmission/res";
import { GetPublicDatasetEntityRequest } from "./GetPublicDatasetEntity/req";
import { GetPublicDatasetEntityResponse } from "./GetPublicDatasetEntity/res";
import { GetGlobalAppRequest } from "./GetGlobalApp/req";
import { GetGlobalAppResponse } from "./GetGlobalApp/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { ListRunsRequest } from "./ListRuns/req";
import { ListRunsResponse } from "./ListRuns/res";
import { CreateSubmissionRequest } from "./CreateSubmission/req";
import { CreateSubmissionResponse } from "./CreateSubmission/res";
import { ListPublicDatasetEntityItemsRequest } from "./ListPublicDatasetEntityItems/req";
import { ListPublicDatasetEntityItemsResponse } from "./ListPublicDatasetEntityItems/res";
import { ListPublicDatasetRequest } from "./ListPublicDataset/req";
import { ListPublicDatasetResponse } from "./ListPublicDataset/res";
import { AbortSubmissionRequest } from "./AbortSubmission/req";
import { AbortSubmissionResponse } from "./AbortSubmission/res";
import { CreateEntityRequest } from "./CreateEntity/req";
import { CreateEntityResponse } from "./CreateEntity/res";
import { DeleteRunRequest } from "./DeleteRun/req";
import { DeleteRunResponse } from "./DeleteRun/res";
import { DeleteSubmissionRequest } from "./DeleteSubmission/req";
import { DeleteSubmissionResponse } from "./DeleteSubmission/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { GetAppRequest } from "./GetApp/req";
import { GetAppResponse } from "./GetApp/res";
import { DeleteWorkspaceRequest } from "./DeleteWorkspace/req";
import { DeleteWorkspaceResponse } from "./DeleteWorkspace/res";
import { GetEntityRequest } from "./GetEntity/req";
import { GetEntityResponse } from "./GetEntity/res";
import { AbortRunRequest } from "./AbortRun/req";
import { AbortRunResponse } from "./AbortRun/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { GetRunRequest } from "./GetRun/req";
import { GetRunResponse } from "./GetRun/res";
import { ListPublicDatasetEntitiesRequest } from "./ListPublicDatasetEntities/req";
import { ListPublicDatasetEntitiesResponse } from "./ListPublicDatasetEntities/res";
import { InstallGlobalAppRequest } from "./InstallGlobalApp/req";
import { InstallGlobalAppResponse } from "./InstallGlobalApp/res";
import { ListContainerImagesRequest } from "./ListContainerImages/req";
import { ListContainerImagesResponse } from "./ListContainerImages/res";
import { ListUserActiveRunsRequest } from "./ListUserActiveRuns/req";
import { ListUserActiveRunsResponse } from "./ListUserActiveRuns/res";
import { CopyPublicEntityRequest } from "./CopyPublicEntity/req";
import { CopyPublicEntityResponse } from "./CopyPublicEntity/res";
import { UpdateEntityItemsRequest } from "./UpdateEntityItems/req";
import { UpdateEntityItemsResponse } from "./UpdateEntityItems/res";
import { ImportAppRequest } from "./ImportApp/req";
import { ImportAppResponse } from "./ImportApp/res";
import { TagAppRequest } from "./TagApp/req";
import { TagAppResponse } from "./TagApp/res";
import { DeleteEntityRequest } from "./DeleteEntity/req";
import { DeleteEntityResponse } from "./DeleteEntity/res";

interface EASYGENE {
    /**
     * 获取公共数据集分类信息。
     */
    ListPublicDatasetTags(query: ListPublicDatasetTagsRequest): Promise<ListPublicDatasetTagsResponse>;
    /**
     * 查询平台公共数据集详情。
     */
    GetPublicDataset(query: GetPublicDatasetRequest): Promise<GetPublicDatasetResponse>;
    /**
     * 更新工作空间的部分信息。
     */
    UpdateWorkspace(query: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse>;
    /**
     * 获取平台公共应用列表。
     */
    ListGlobalApps(query: ListGlobalAppsRequest): Promise<ListGlobalAppsResponse>;
    /**
     * 删除不需要的应用。
     */
    DeleteApp(query: DeleteAppRequest): Promise<DeleteAppResponse>;
    /**
     * 列出符合条件的工作空间。
     */
    ListWorkspaces(query: ListWorkspacesRequest): Promise<ListWorkspacesResponse>;
    /**
     * 获取工作空间下特定实体的数据表格内容。
     */
    ListEntityItems(query: ListEntityItemsRequest): Promise<ListEntityItemsResponse>;
    /**
     * 工作空间中创建运行任务。
     */
    CreateRun(query: CreateRunRequest): Promise<CreateRunResponse>;
    /**
     * 工作空间中创建应用。
     */
    CreateApp(query: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * 更新工作空间中特定实体数据表格内容。
     */
    UpdateEntity(query: UpdateEntityRequest): Promise<UpdateEntityResponse>;
    /**
     * 查询工作空间下特定的投递任务详情。
     */
    GetSubmission(query: GetSubmissionRequest): Promise<GetSubmissionResponse>;
    /**
     * 获取第三方软件列表信息。
     */
    ListAuthorizedSoftware(query: ListAuthorizedSoftwareRequest): Promise<ListAuthorizedSoftwareResponse>;
    /**
     * 查询工作空间下特定应用模板详情。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 获取工作空间下的应用列表。
     */
    ListApps(query: ListAppsRequest): Promise<ListAppsResponse>;
    /**
     * 创建用户工作空间。
     */
    CreateWorkspace(query: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse>;
    /**
     * 查询工作空间的详细信息，包括状态，描述，作业生命周期等。
     */
    GetWorkspace(query: GetWorkspaceRequest): Promise<GetWorkspaceResponse>;
    /**
     * 获取工作空间下实体类型列表。
     */
    ListEntities(query: ListEntitiesRequest): Promise<ListEntitiesResponse>;
    /**
     * 查询基因分析平台产品支持使用的区域，如华北2-北京。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 删除工作空间下特定应用模板。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 从工作空间中下载实体表格数据到本地文件。
     */
    DownloadEntity(query: DownloadEntityRequest): Promise<DownloadEntityResponse>;
    /**
     * 删除工作空间中特定实体表格数据内容。
     */
    DeleteEntityItems(query: DeleteEntityItemsRequest): Promise<DeleteEntityItemsResponse>;
    /**
     * 上传实体数据表格到工作空间中。
     */
    UploadEntity(query: UploadEntityRequest): Promise<UploadEntityResponse>;
    /**
     * 获取工作空间下投递任务列表。
     */
    ListSubmissions(query: ListSubmissionsRequest): Promise<ListSubmissionsResponse>;
    /**
     * 恢复工作空间下特定的投递任务。
     */
    ResumeSubmission(query: ResumeSubmissionRequest): Promise<ResumeSubmissionResponse>;
    /**
     * 查询平台公共数据集特定的实体定义。
     */
    GetPublicDatasetEntity(query: GetPublicDatasetEntityRequest): Promise<GetPublicDatasetEntityResponse>;
    /**
     * 查询平台公共应用详情。
     */
    GetGlobalApp(query: GetGlobalAppRequest): Promise<GetGlobalAppResponse>;
    /**
     * 工作空间中创建应用模板。
     */
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    /**
     * 获取工作空间下运行任务列表。
     */
    ListRuns(query: ListRunsRequest): Promise<ListRunsResponse>;
    /**
     * 创建投递，通过创建投递可以批量创建任务。
     */
    CreateSubmission(query: CreateSubmissionRequest): Promise<CreateSubmissionResponse>;
    /**
     * 查询平台公共数据集特定的实体数据表格内容。
     */
    ListPublicDatasetEntityItems(query: ListPublicDatasetEntityItemsRequest): Promise<ListPublicDatasetEntityItemsResponse>;
    /**
     * 获取平台公共数据集列表。
     */
    ListPublicDataset(query: ListPublicDatasetRequest): Promise<ListPublicDatasetResponse>;
    /**
     * 终止工作空间下特定的投递任务。
     */
    AbortSubmission(query: AbortSubmissionRequest): Promise<AbortSubmissionResponse>;
    /**
     * 工作空间中创建实体表格。
     */
    CreateEntity(query: CreateEntityRequest): Promise<CreateEntityResponse>;
    /**
     * 删除工作空间下特定运行任务记录。
     */
    DeleteRun(query: DeleteRunRequest): Promise<DeleteRunResponse>;
    /**
     * 删除工作空间下特定的投递任务记录。
     */
    DeleteSubmission(query: DeleteSubmissionRequest): Promise<DeleteSubmissionResponse>;
    /**
     * 获取工作空间下应用模板列表。
     */
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    /**
     * 查询工作空间下特定应用详情。
     */
    GetApp(query: GetAppRequest): Promise<GetAppResponse>;
    /**
     * 删除用户工作空间。
     */
    DeleteWorkspace(query: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse>;
    /**
     * 查询工作空间下特定实体类型定义。
     */
    GetEntity(query: GetEntityRequest): Promise<GetEntityResponse>;
    /**
     * 终止工作空间下特定的非结束状态的运行任务。
     */
    AbortRun(query: AbortRunRequest): Promise<AbortRunResponse>;
    /**
     * 更新工作空间下特定应用模板详情。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 查询工作空间下特定运行任务详情。
     */
    GetRun(query: GetRunRequest): Promise<GetRunResponse>;
    /**
     * 获取平台公共数据集包含的实体类型列表。
     */
    ListPublicDatasetEntities(query: ListPublicDatasetEntitiesRequest): Promise<ListPublicDatasetEntitiesResponse>;
    /**
     * 安装平台公共应用到用户工作空间中使用。
     */
    InstallGlobalApp(query: InstallGlobalAppRequest): Promise<InstallGlobalAppResponse>;
    /**
     * 获取平台公共工具镜像列表。
     */
    ListContainerImages(query: ListContainerImagesRequest): Promise<ListContainerImagesResponse>;
    /**
     * 最近任务列表
     */
    ListUserActiveRuns(query: ListUserActiveRunsRequest): Promise<ListUserActiveRunsResponse>;
    /**
     * 拷贝公共数据集表格到工作空间中。
     */
    CopyPublicEntity(query: CopyPublicEntityRequest): Promise<CopyPublicEntityResponse>;
    /**
     * 更新工作空间中特定实体数据表格内容。
     */
    UpdateEntityItems(query: UpdateEntityItemsRequest): Promise<UpdateEntityItemsResponse>;
    /**
     * 安装平台公共应用到用户工作空间中使用。
     */
    ImportApp(query: ImportAppRequest): Promise<ImportAppResponse>;
    /**
     * 对应用的版本进行打标。
     */
    TagApp(query: TagAppRequest): Promise<TagAppResponse>;
    /**
     * 删除工作空间中特定实体表格。
     */
    DeleteEntity(query: DeleteEntityRequest): Promise<DeleteEntityResponse>;
}
export default EASYGENE;
