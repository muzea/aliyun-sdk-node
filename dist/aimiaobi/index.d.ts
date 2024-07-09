import { CreateTokenRequest } from "./CreateToken/req";
import { CreateTokenResponse } from "./CreateToken/res";
import { QueryAsyncTaskRequest } from "./QueryAsyncTask/req";
import { QueryAsyncTaskResponse } from "./QueryAsyncTask/res";
import { CancelAsyncTaskRequest } from "./CancelAsyncTask/req";
import { CancelAsyncTaskResponse } from "./CancelAsyncTask/res";
import { GenerateViewPointRequest } from "./GenerateViewPoint/req";
import { GenerateViewPointResponse } from "./GenerateViewPoint/res";
import { CreateGeneratedContentRequest } from "./CreateGeneratedContent/req";
import { CreateGeneratedContentResponse } from "./CreateGeneratedContent/res";
import { FetchImageTaskRequest } from "./FetchImageTask/req";
import { FetchImageTaskResponse } from "./FetchImageTask/res";
import { ListDialoguesRequest } from "./ListDialogues/req";
import { ListDialoguesResponse } from "./ListDialogues/res";
import { ListAsyncTasksRequest } from "./ListAsyncTasks/req";
import { ListAsyncTasksResponse } from "./ListAsyncTasks/res";
import { ListGeneratedContentsRequest } from "./ListGeneratedContents/req";
import { ListGeneratedContentsResponse } from "./ListGeneratedContents/res";
import { ListBuildConfigsRequest } from "./ListBuildConfigs/req";
import { ListBuildConfigsResponse } from "./ListBuildConfigs/res";
import { SubmitAsyncTaskRequest } from "./SubmitAsyncTask/req";
import { SubmitAsyncTaskResponse } from "./SubmitAsyncTask/res";
import { GetGeneratedContentRequest } from "./GetGeneratedContent/req";
import { GetGeneratedContentResponse } from "./GetGeneratedContent/res";
import { DeleteGeneratedContentRequest } from "./DeleteGeneratedContent/req";
import { DeleteGeneratedContentResponse } from "./DeleteGeneratedContent/res";
import { SaveDataSourceOrderConfigRequest } from "./SaveDataSourceOrderConfig/req";
import { SaveDataSourceOrderConfigResponse } from "./SaveDataSourceOrderConfig/res";
import { UpdateGeneratedContentRequest } from "./UpdateGeneratedContent/req";
import { UpdateGeneratedContentResponse } from "./UpdateGeneratedContent/res";
import { ExportGeneratedContentRequest } from "./ExportGeneratedContent/req";
import { ExportGeneratedContentResponse } from "./ExportGeneratedContent/res";
import { UpdateMaterialDocumentRequest } from "./UpdateMaterialDocument/req";
import { UpdateMaterialDocumentResponse } from "./UpdateMaterialDocument/res";
import { SaveMaterialDocumentRequest } from "./SaveMaterialDocument/req";
import { SaveMaterialDocumentResponse } from "./SaveMaterialDocument/res";
import { GetDataSourceOrderConfigRequest } from "./GetDataSourceOrderConfig/req";
import { GetDataSourceOrderConfigResponse } from "./GetDataSourceOrderConfig/res";
import { GenerateImageTaskRequest } from "./GenerateImageTask/req";
import { GenerateImageTaskResponse } from "./GenerateImageTask/res";
import { DeleteMaterialByIdRequest } from "./DeleteMaterialById/req";
import { DeleteMaterialByIdResponse } from "./DeleteMaterialById/res";
import { GetMaterialByIdRequest } from "./GetMaterialById/req";
import { GetMaterialByIdResponse } from "./GetMaterialById/res";
import { ListMaterialDocumentsRequest } from "./ListMaterialDocuments/req";
import { ListMaterialDocumentsResponse } from "./ListMaterialDocuments/res";
import { FeedbackDialogueRequest } from "./FeedbackDialogue/req";
import { FeedbackDialogueResponse } from "./FeedbackDialogue/res";
import { ListHotNewsWithTypeRequest } from "./ListHotNewsWithType/req";
import { ListHotNewsWithTypeResponse } from "./ListHotNewsWithType/res";
import { GetPropertiesRequest } from "./GetProperties/req";
import { GetPropertiesResponse } from "./GetProperties/res";
import { ListVersionsRequest } from "./ListVersions/req";
import { ListVersionsResponse } from "./ListVersions/res";
import { SearchNewsRequest } from "./SearchNews/req";
import { SearchNewsResponse } from "./SearchNews/res";
import { GenerateFileUrlByKeyRequest } from "./GenerateFileUrlByKey/req";
import { GenerateFileUrlByKeyResponse } from "./GenerateFileUrlByKey/res";
import { GenerateUploadConfigRequest } from "./GenerateUploadConfig/req";
import { GenerateUploadConfigResponse } from "./GenerateUploadConfig/res";
import { ListInterveneCntRequest } from "./ListInterveneCnt/req";
import { ListInterveneCntResponse } from "./ListInterveneCnt/res";
import { ListIntervenesRequest } from "./ListIntervenes/req";
import { ListIntervenesResponse } from "./ListIntervenes/res";
import { ImportInterveneFileRequest } from "./ImportInterveneFile/req";
import { ImportInterveneFileResponse } from "./ImportInterveneFile/res";
import { InsertInterveneGlobalReplyRequest } from "./InsertInterveneGlobalReply/req";
import { InsertInterveneGlobalReplyResponse } from "./InsertInterveneGlobalReply/res";
import { ImportInterveneFileAsyncRequest } from "./ImportInterveneFileAsync/req";
import { ImportInterveneFileAsyncResponse } from "./ImportInterveneFileAsync/res";
import { GetInterveneTemplateFileUrlRequest } from "./GetInterveneTemplateFileUrl/req";
import { GetInterveneTemplateFileUrlResponse } from "./GetInterveneTemplateFileUrl/res";
import { ClearIntervenesRequest } from "./ClearIntervenes/req";
import { ClearIntervenesResponse } from "./ClearIntervenes/res";
import { GetInterveneGlobalReplyRequest } from "./GetInterveneGlobalReply/req";
import { GetInterveneGlobalReplyResponse } from "./GetInterveneGlobalReply/res";
import { ListInterveneRulesRequest } from "./ListInterveneRules/req";
import { ListInterveneRulesResponse } from "./ListInterveneRules/res";
import { ListInterveneImportTasksRequest } from "./ListInterveneImportTasks/req";
import { ListInterveneImportTasksResponse } from "./ListInterveneImportTasks/res";
import { InsertInterveneRuleRequest } from "./InsertInterveneRule/req";
import { InsertInterveneRuleResponse } from "./InsertInterveneRule/res";
import { GetInterveneRuleDetailRequest } from "./GetInterveneRuleDetail/req";
import { GetInterveneRuleDetailResponse } from "./GetInterveneRuleDetail/res";
import { DeleteInterveneRuleRequest } from "./DeleteInterveneRule/req";
import { DeleteInterveneRuleResponse } from "./DeleteInterveneRule/res";
import { ExportIntervenesRequest } from "./ExportIntervenes/req";
import { ExportIntervenesResponse } from "./ExportIntervenes/res";
import { GetInterveneImportTaskInfoRequest } from "./GetInterveneImportTaskInfo/req";
import { GetInterveneImportTaskInfoResponse } from "./GetInterveneImportTaskInfo/res";
import { UpdateCustomTextRequest } from "./UpdateCustomText/req";
import { UpdateCustomTextResponse } from "./UpdateCustomText/res";
import { GetCustomTextRequest } from "./GetCustomText/req";
import { GetCustomTextResponse } from "./GetCustomText/res";
import { ListCustomTextRequest } from "./ListCustomText/req";
import { ListCustomTextResponse } from "./ListCustomText/res";
import { SaveCustomTextRequest } from "./SaveCustomText/req";
import { SaveCustomTextResponse } from "./SaveCustomText/res";
import { DeleteCustomTextRequest } from "./DeleteCustomText/req";
import { DeleteCustomTextResponse } from "./DeleteCustomText/res";
import { DocumentExtractionRequest } from "./DocumentExtraction/req";
import { DocumentExtractionResponse } from "./DocumentExtraction/res";

interface AIMIAOBI {
    /**
     * 创建在线推理API的临时Token。
     */
    CreateToken(query: CreateTokenRequest): Promise<CreateTokenResponse>;
    /**
     * 查询已提交异步任务执行明细。
     */
    QueryAsyncTask(query: QueryAsyncTaskRequest): Promise<QueryAsyncTaskResponse>;
    /**
     * 取消已提交，尚未执行完成的异步任务。
     */
    CancelAsyncTask(query: CancelAsyncTaskRequest): Promise<CancelAsyncTaskResponse>;
    /**
     * 生成选题视角。
     */
    GenerateViewPoint(query: GenerateViewPointRequest): Promise<GenerateViewPointResponse>;
    /**
     * 保存文档：用来保存妙笔中创作的文章，支持富文本。
     */
    CreateGeneratedContent(query: CreateGeneratedContentRequest): Promise<CreateGeneratedContentResponse>;
    FetchImageTask(query: FetchImageTaskRequest): Promise<FetchImageTaskResponse>;
    /**
     * 在线推理场景的历史记录。
     */
    ListDialogues(query: ListDialoguesRequest): Promise<ListDialoguesResponse>;
    /**
     * 获取异步任务列表。
     */
    ListAsyncTasks(query: ListAsyncTasksRequest): Promise<ListAsyncTasksResponse>;
    /**
     * 获取文档列表：用来查询妙笔中创作的文章历史列表。
     */
    ListGeneratedContents(query: ListGeneratedContentsRequest): Promise<ListGeneratedContentsResponse>;
    /**
     * 获取系统自定义预设。
     */
    ListBuildConfigs(query: ListBuildConfigsRequest): Promise<ListBuildConfigsResponse>;
    /**
     * 执行系统预定义的异步任务。
     */
    SubmitAsyncTask(query: SubmitAsyncTaskRequest): Promise<SubmitAsyncTaskResponse>;
    /**
     * 获取文档：用来查询妙笔中创作的文章历史。
     */
    GetGeneratedContent(query: GetGeneratedContentRequest): Promise<GetGeneratedContentResponse>;
    /**
     * 删除文档：用来删除妙笔中创作的文章。
     */
    DeleteGeneratedContent(query: DeleteGeneratedContentRequest): Promise<DeleteGeneratedContentResponse>;
    /**
     * 保存用户写作信源配置，通用搜索信源配置的配置信息。
     */
    SaveDataSourceOrderConfig(query: SaveDataSourceOrderConfigRequest): Promise<SaveDataSourceOrderConfigResponse>;
    /**
     * 更新文档：用来更新妙笔中创作的文章历史。
     */
    UpdateGeneratedContent(query: UpdateGeneratedContentRequest): Promise<UpdateGeneratedContentResponse>;
    /**
     * 导出文档：用来导出妙笔中创作的文章历史。
     */
    ExportGeneratedContent(query: ExportGeneratedContentRequest): Promise<ExportGeneratedContentResponse>;
    /**
     * 更新素材：更新素材库中素材。
     */
    UpdateMaterialDocument(query: UpdateMaterialDocumentRequest): Promise<UpdateMaterialDocumentResponse>;
    /**
     * 保存素材：保存素材库中素材。
     */
    SaveMaterialDocument(query: SaveMaterialDocumentRequest): Promise<SaveMaterialDocumentResponse>;
    /**
     * 获取写作信源，通用搜索信源的配置信息。
     */
    GetDataSourceOrderConfig(query: GetDataSourceOrderConfigRequest): Promise<GetDataSourceOrderConfigResponse>;
    /**
     * 智能配图，图片生成任务。
     */
    GenerateImageTask(query: GenerateImageTaskRequest): Promise<GenerateImageTaskResponse>;
    /**
     * 删除素材：删除素材库中素材。
     */
    DeleteMaterialById(query: DeleteMaterialByIdRequest): Promise<DeleteMaterialByIdResponse>;
    /**
     * 获取素材：获取素材库中素材详细信息。
     */
    GetMaterialById(query: GetMaterialByIdRequest): Promise<GetMaterialByIdResponse>;
    /**
     * 获取素材列表：获取素材库中素材列表。
     */
    ListMaterialDocuments(query: ListMaterialDocumentsRequest): Promise<ListMaterialDocumentsResponse>;
    /**
     * 反馈生成的对话。
     */
    FeedbackDialogue(query: FeedbackDialogueRequest): Promise<FeedbackDialogueResponse>;
    /**
     * 获取选题热点列表。
     */
    ListHotNewsWithType(query: ListHotNewsWithTypeRequest): Promise<ListHotNewsWithTypeResponse>;
    /**
     * 获取配置信息。包括不限于智能配置的风格，推理相关元数据配置等。
     */
    GetProperties(query: GetPropertiesRequest): Promise<GetPropertiesResponse>;
    /**
     * 获取用户购买的版本信息。
     */
    ListVersions(query: ListVersionsRequest): Promise<ListVersionsResponse>;
    /**
     * 信息检索。
     */
    SearchNews(query: SearchNewsRequest): Promise<SearchNewsResponse>;
    /**
     * 生成临时可访问的公开url。
     */
    GenerateFileUrlByKey(query: GenerateFileUrlByKeyRequest): Promise<GenerateFileUrlByKeyResponse>;
    /**
     * 生成文件上传配置。
     */
    GenerateUploadConfig(query: GenerateUploadConfigRequest): Promise<GenerateUploadConfigResponse>;
    /**
     * 获得干预项目数量列表。
     */
    ListInterveneCnt(query: ListInterveneCntRequest): Promise<ListInterveneCntResponse>;
    /**
     * 获得干预项列表。
     */
    ListIntervenes(query: ListIntervenesRequest): Promise<ListIntervenesResponse>;
    /**
     * 导入干预文件。
     */
    ImportInterveneFile(query: ImportInterveneFileRequest): Promise<ImportInterveneFileResponse>;
    /**
     * 设置干预全局回复。
     */
    InsertInterveneGlobalReply(query: InsertInterveneGlobalReplyRequest): Promise<InsertInterveneGlobalReplyResponse>;
    /**
     * 异步导入干预文件。
     */
    ImportInterveneFileAsync(query: ImportInterveneFileAsyncRequest): Promise<ImportInterveneFileAsyncResponse>;
    /**
     * 获得干预导入模版文件下载地址。
     */
    GetInterveneTemplateFileUrl(query: GetInterveneTemplateFileUrlRequest): Promise<GetInterveneTemplateFileUrlResponse>;
    /**
     * 清除所有干预内容。
     */
    ClearIntervenes(query: ClearIntervenesRequest): Promise<ClearIntervenesResponse>;
    /**
     * 获得干预全局回复。
     */
    GetInterveneGlobalReply(query: GetInterveneGlobalReplyRequest): Promise<GetInterveneGlobalReplyResponse>;
    /**
     * 获得干预规则列表。
     */
    ListInterveneRules(query: ListInterveneRulesRequest): Promise<ListInterveneRulesResponse>;
    /**
     * 获得导入任务列表。
     */
    ListInterveneImportTasks(query: ListInterveneImportTasksRequest): Promise<ListInterveneImportTasksResponse>;
    /**
     * 插入干预规则。
     */
    InsertInterveneRule(query: InsertInterveneRuleRequest): Promise<InsertInterveneRuleResponse>;
    /**
     * 获得干预项规则详情。
     */
    GetInterveneRuleDetail(query: GetInterveneRuleDetailRequest): Promise<GetInterveneRuleDetailResponse>;
    /**
     * 删除干预规则。
     */
    DeleteInterveneRule(query: DeleteInterveneRuleRequest): Promise<DeleteInterveneRuleResponse>;
    /**
     * 导出所有干预内容。
     */
    ExportIntervenes(query: ExportIntervenesRequest): Promise<ExportIntervenesResponse>;
    /**
     * 获得导入任务信息。
     */
    GetInterveneImportTaskInfo(query: GetInterveneImportTaskInfoRequest): Promise<GetInterveneImportTaskInfoResponse>;
    /**
     * 更新自定义文本。
     */
    UpdateCustomText(query: UpdateCustomTextRequest): Promise<UpdateCustomTextResponse>;
    /**
     * 获取自定义文本。
     */
    GetCustomText(query: GetCustomTextRequest): Promise<GetCustomTextResponse>;
    /**
     * 获取自定义文本列表。
     */
    ListCustomText(query: ListCustomTextRequest): Promise<ListCustomTextResponse>;
    /**
     * 保存自定义文本。
     */
    SaveCustomText(query: SaveCustomTextRequest): Promise<SaveCustomTextResponse>;
    /**
     * 删除自定义文本。
     */
    DeleteCustomText(query: DeleteCustomTextRequest): Promise<DeleteCustomTextResponse>;
    /**
     * 从链接中提取文档内容。
     */
    DocumentExtraction(query: DocumentExtractionRequest): Promise<DocumentExtractionResponse>;
}
export default AIMIAOBI;
