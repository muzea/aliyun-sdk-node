import { CreateAppRequest } from "./CreateApp/req";
import { CreateAppResponse } from "./CreateApp/res";
import { CreateDepartmentRequest } from "./CreateDepartment/req";
import { CreateDepartmentResponse } from "./CreateDepartment/res";
import { CreateRuleRequest } from "./CreateRule/req";
import { CreateRuleResponse } from "./CreateRule/res";
import { CreateUserDepartmentsRequest } from "./CreateUserDepartments/req";
import { CreateUserDepartmentsResponse } from "./CreateUserDepartments/res";
import { CreateTaskGroupRequest } from "./CreateTaskGroup/req";
import { CreateTaskGroupResponse } from "./CreateTaskGroup/res";
import { DeleteAppRequest } from "./DeleteApp/req";
import { DeleteAppResponse } from "./DeleteApp/res";
import { DeleteDepartmentRequest } from "./DeleteDepartment/req";
import { DeleteDepartmentResponse } from "./DeleteDepartment/res";
import { DeleteRuleRequest } from "./DeleteRule/req";
import { DeleteRuleResponse } from "./DeleteRule/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DeleteUserDepartmentsRequest } from "./DeleteUserDepartments/req";
import { DeleteUserDepartmentsResponse } from "./DeleteUserDepartments/res";
import { GetAppRequest } from "./GetApp/req";
import { GetAppResponse } from "./GetApp/res";
import { GetDepartmentRequest } from "./GetDepartment/req";
import { GetDepartmentResponse } from "./GetDepartment/res";
import { GetDetectionRequest } from "./GetDetection/req";
import { GetDetectionResponse } from "./GetDetection/res";
import { GetPreSignedUrlRequest } from "./GetPreSignedUrl/req";
import { GetPreSignedUrlResponse } from "./GetPreSignedUrl/res";
import { GetRuleRequest } from "./GetRule/req";
import { GetRuleResponse } from "./GetRule/res";
import { GetTaskRequest } from "./GetTask/req";
import { GetTaskResponse } from "./GetTask/res";
import { GetTaskGroupRequest } from "./GetTaskGroup/req";
import { GetTaskGroupResponse } from "./GetTaskGroup/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { ListAppsRequest } from "./ListApps/req";
import { ListAppsResponse } from "./ListApps/res";
import { ListDepartmentsRequest } from "./ListDepartments/req";
import { ListDepartmentsResponse } from "./ListDepartments/res";
import { ListFilesRequest } from "./ListFiles/req";
import { ListFilesResponse } from "./ListFiles/res";
import { ListDetectionsRequest } from "./ListDetections/req";
import { ListDetectionsResponse } from "./ListDetections/res";
import { ListRulesRequest } from "./ListRules/req";
import { ListRulesResponse } from "./ListRules/res";
import { ListTaskGroupsRequest } from "./ListTaskGroups/req";
import { ListTaskGroupsResponse } from "./ListTaskGroups/res";
import { ListTaskItemsRequest } from "./ListTaskItems/req";
import { ListTaskItemsResponse } from "./ListTaskItems/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { UpdateAppRequest } from "./UpdateApp/req";
import { UpdateAppResponse } from "./UpdateApp/res";
import { UpdateDepartmentRequest } from "./UpdateDepartment/req";
import { UpdateDepartmentResponse } from "./UpdateDepartment/res";
import { UpdateRuleRequest } from "./UpdateRule/req";
import { UpdateRuleResponse } from "./UpdateRule/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { CreateDetectProcessRequest } from "./CreateDetectProcess/req";
import { CreateDetectProcessResponse } from "./CreateDetectProcess/res";
import { DeleteDetectProcessRequest } from "./DeleteDetectProcess/req";
import { DeleteDetectProcessResponse } from "./DeleteDetectProcess/res";
import { GetDetectProcessRequest } from "./GetDetectProcess/req";
import { GetDetectProcessResponse } from "./GetDetectProcess/res";
import { GetDetectProcessJsonFileRequest } from "./GetDetectProcessJsonFile/req";
import { GetDetectProcessJsonFileResponse } from "./GetDetectProcessJsonFile/res";
import { ListDetectProcessesRequest } from "./ListDetectProcesses/req";
import { ListDetectProcessesResponse } from "./ListDetectProcesses/res";
import { RenameDetectProcessRequest } from "./RenameDetectProcess/req";
import { RenameDetectProcessResponse } from "./RenameDetectProcess/res";
import { UpdateDetectProcessRequest } from "./UpdateDetectProcess/req";
import { UpdateDetectProcessResponse } from "./UpdateDetectProcess/res";
import { CreateWatermarkRequest } from "./CreateWatermark/req";
import { CreateWatermarkResponse } from "./CreateWatermark/res";
import { ListRecordResultsRequest } from "./ListRecordResults/req";
import { ListRecordResultsResponse } from "./ListRecordResults/res";
import { AssociateRoomRequest } from "./AssociateRoom/req";
import { AssociateRoomResponse } from "./AssociateRoom/res";
import { GetRecordResultRequest } from "./GetRecordResult/req";
import { GetRecordResultResponse } from "./GetRecordResult/res";
import { GetWatermarkRequest } from "./GetWatermark/req";
import { GetWatermarkResponse } from "./GetWatermark/res";
import { ListWatermarksRequest } from "./ListWatermarks/req";
import { ListWatermarksResponse } from "./ListWatermarks/res";
import { UploadReportRequest } from "./UploadReport/req";
import { UploadReportResponse } from "./UploadReport/res";
import { DeleteWatermarkRequest } from "./DeleteWatermark/req";
import { DeleteWatermarkResponse } from "./DeleteWatermark/res";
import { UpdateWatermarkRequest } from "./UpdateWatermark/req";
import { UpdateWatermarkResponse } from "./UpdateWatermark/res";
import { CreateSignatureRequest } from "./CreateSignature/req";
import { CreateSignatureResponse } from "./CreateSignature/res";
import { GetRecordsByFeeIdRequest } from "./GetRecordsByFeeId/req";
import { GetRecordsByFeeIdResponse } from "./GetRecordsByFeeId/res";
import { GetStatisticsRecordsByFeeIdRequest } from "./GetStatisticsRecordsByFeeId/req";
import { GetStatisticsRecordsByFeeIdResponse } from "./GetStatisticsRecordsByFeeId/res";
import { GetVideoMergeTaskRequest } from "./GetVideoMergeTask/req";
import { GetVideoMergeTaskResponse } from "./GetVideoMergeTask/res";
import { FaceCompareRequest } from "./FaceCompare/req";
import { FaceCompareResponse } from "./FaceCompare/res";
import { TtsCommonRequest } from "./TtsCommon/req";
import { TtsCommonResponse } from "./TtsCommon/res";
import { AsrSentenceRequest } from "./AsrSentence/req";
import { AsrSentenceResponse } from "./AsrSentence/res";
import { TtsTaskRequest } from "./TtsTask/req";
import { TtsTaskResponse } from "./TtsTask/res";
import { LeaveRoomRequest } from "./LeaveRoom/req";
import { LeaveRoomResponse } from "./LeaveRoom/res";
import { FaceRecognizeRequest } from "./FaceRecognize/req";
import { FaceRecognizeResponse } from "./FaceRecognize/res";
import { FaceLivenessRequest } from "./FaceLiveness/req";
import { FaceLivenessResponse } from "./FaceLiveness/res";
import { CreateTtsQuestionGroupRequest } from "./CreateTtsQuestionGroup/req";
import { CreateTtsQuestionGroupResponse } from "./CreateTtsQuestionGroup/res";
import { GetAsrResultRequest } from "./GetAsrResult/req";
import { GetAsrResultResponse } from "./GetAsrResult/res";
import { JoinRoomRequest } from "./JoinRoom/req";
import { JoinRoomResponse } from "./JoinRoom/res";
import { CreateTtsQuestionRequest } from "./CreateTtsQuestion/req";
import { CreateTtsQuestionResponse } from "./CreateTtsQuestion/res";
import { AsrTaskRequest } from "./AsrTask/req";
import { AsrTaskResponse } from "./AsrTask/res";
import { GetTtsQuestionByGroupIdRequest } from "./GetTtsQuestionByGroupId/req";
import { GetTtsQuestionByGroupIdResponse } from "./GetTtsQuestionByGroupId/res";
import { GetRecordsByOuterBusinessIdRequest } from "./GetRecordsByOuterBusinessId/req";
import { GetRecordsByOuterBusinessIdResponse } from "./GetRecordsByOuterBusinessId/res";

interface IDRSSERVICE {
    /**
     * 调用 CreateApp 创建应用。
     */
    CreateApp(query: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * 调用 CreateDepartment 创建部门。
     */
    CreateDepartment(query: CreateDepartmentRequest): Promise<CreateDepartmentResponse>;
    /**
     * 调用 CreateRule 创建检测规则。
     */
    CreateRule(query: CreateRuleRequest): Promise<CreateRuleResponse>;
    /**
     * 调用 CreateUserDepartments 创建用户部门关系。
     */
    CreateUserDepartments(query: CreateUserDepartmentsRequest): Promise<CreateUserDepartmentsResponse>;
    /**
     * 调用 CreateTaskGroup 创建任务组。
     */
    CreateTaskGroup(query: CreateTaskGroupRequest): Promise<CreateTaskGroupResponse>;
    /**
     * 调用 DeleteApp 删除应用。
     */
    DeleteApp(query: DeleteAppRequest): Promise<DeleteAppResponse>;
    /**
     * 调用 DeleteDepartment 删除部门。
     */
    DeleteDepartment(query: DeleteDepartmentRequest): Promise<DeleteDepartmentResponse>;
    /**
     * 调用 DeleteRule 删除检测规则。
     */
    DeleteRule(query: DeleteRuleRequest): Promise<DeleteRuleResponse>;
    /**
     * 调用 DeleteUser 删除用户。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 调用 DeleteUserDepartments 删除用户部门关系。
     */
    DeleteUserDepartments(query: DeleteUserDepartmentsRequest): Promise<DeleteUserDepartmentsResponse>;
    /**
     * 调用 GetApp 获取应用。
     */
    GetApp(query: GetAppRequest): Promise<GetAppResponse>;
    /**
     * 调用GetDepartment获取部门。
     */
    GetDepartment(query: GetDepartmentRequest): Promise<GetDepartmentResponse>;
    /**
     * 调用 GetDetection 获取检测信息。
     */
    GetDetection(query: GetDetectionRequest): Promise<GetDetectionResponse>;
    /**
     * 调用 GetPreSignedUrl 获取上传文件需要的预签名 URL。
     */
    GetPreSignedUrl(query: GetPreSignedUrlRequest): Promise<GetPreSignedUrlResponse>;
    /**
     * 调用 GetRule 获取检测规则。
     */
    GetRule(query: GetRuleRequest): Promise<GetRuleResponse>;
    /**
     * 调用 GetTask 获取指定任务信息。
     */
    GetTask(query: GetTaskRequest): Promise<GetTaskResponse>;
    /**
     * 调用 GetTaskGroup 获取任务组。
     */
    GetTaskGroup(query: GetTaskGroupRequest): Promise<GetTaskGroupResponse>;
    /**
     * 调用 GetUser 获取指定用户信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 调用 ListApps 获取应用列表。
     */
    ListApps(query: ListAppsRequest): Promise<ListAppsResponse>;
    /**
     * 调用 ListDepartments 获取部门列表。
     */
    ListDepartments(query: ListDepartmentsRequest): Promise<ListDepartmentsResponse>;
    /**
     * 调用 ListFiles 获取文件列表。
     */
    ListFiles(query: ListFilesRequest): Promise<ListFilesResponse>;
    /**
     * 调用 ListDetections 获取检测结果列表。
     */
    ListDetections(query: ListDetectionsRequest): Promise<ListDetectionsResponse>;
    /**
     * 调用 ListRules 获取规则列表。
     */
    ListRules(query: ListRulesRequest): Promise<ListRulesResponse>;
    /**
     * 调用 ListTaskGroups 获取任务组列表。
     */
    ListTaskGroups(query: ListTaskGroupsRequest): Promise<ListTaskGroupsResponse>;
    /**
     * 调用 ListTaskItems 获取任务子项列表。
     */
    ListTaskItems(query: ListTaskItemsRequest): Promise<ListTaskItemsResponse>;
    /**
     * 调用 ListTasks 获取任务列表。
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    /**
     * 调用ListUsers获取用户列表。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 调用 UpdateApp 更新应用。
     */
    UpdateApp(query: UpdateAppRequest): Promise<UpdateAppResponse>;
    /**
     * 调用 UpdateDepartment 更新部门。
     */
    UpdateDepartment(query: UpdateDepartmentRequest): Promise<UpdateDepartmentResponse>;
    /**
     * 调用 UpdateRule 更新规则。
     */
    UpdateRule(query: UpdateRuleRequest): Promise<UpdateRuleResponse>;
    /**
     * 调用UpdateUser更新用户。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 调用 CreateDetectProcess 创建检测流程。
     */
    CreateDetectProcess(query: CreateDetectProcessRequest): Promise<CreateDetectProcessResponse>;
    /**
     * 调用 DeleteDetectProcess 删除检测流程。
     */
    DeleteDetectProcess(query: DeleteDetectProcessRequest): Promise<DeleteDetectProcessResponse>;
    /**
     * 通过 GetDetectProcess 获取检测流程。
     */
    GetDetectProcess(query: GetDetectProcessRequest): Promise<GetDetectProcessResponse>;
    GetDetectProcessJsonFile(query: GetDetectProcessJsonFileRequest): Promise<GetDetectProcessJsonFileResponse>;
    /**
     * 调用 ListDetectProcesses 获取检测流程列表。
     */
    ListDetectProcesses(query: ListDetectProcessesRequest): Promise<ListDetectProcessesResponse>;
    /**
     * 调用 RenameDetectProcess 对检测流程重命名。
     */
    RenameDetectProcess(query: RenameDetectProcessRequest): Promise<RenameDetectProcessResponse>;
    /**
     * 调用UpdateDetectProcess更新检测流程。
     */
    UpdateDetectProcess(query: UpdateDetectProcessRequest): Promise<UpdateDetectProcessResponse>;
    /**
     * 创建水印
     */
    CreateWatermark(query: CreateWatermarkRequest): Promise<CreateWatermarkResponse>;
    /**
     * 多规则查询
     */
    ListRecordResults(query: ListRecordResultsRequest): Promise<ListRecordResultsResponse>;
    /**
     * 关联MRTC房间
     */
    AssociateRoom(query: AssociateRoomRequest): Promise<AssociateRoomResponse>;
    /**
     * 根据ID查询录制信息
     */
    GetRecordResult(query: GetRecordResultRequest): Promise<GetRecordResultResponse>;
    /**
     * 根据ID查询水印信息
     */
    GetWatermark(query: GetWatermarkRequest): Promise<GetWatermarkResponse>;
    /**
     * 获取水印列表
     */
    ListWatermarks(query: ListWatermarksRequest): Promise<ListWatermarksResponse>;
    /**
     * 上报双录RTC信息
     */
    UploadReport(query: UploadReportRequest): Promise<UploadReportResponse>;
    DeleteWatermark(query: DeleteWatermarkRequest): Promise<DeleteWatermarkResponse>;
    /**
     * 更新水印信息
     */
    UpdateWatermark(query: UpdateWatermarkRequest): Promise<UpdateWatermarkResponse>;
    /**
     * 创建rtc签名
     */
    CreateSignature(query: CreateSignatureRequest): Promise<CreateSignatureResponse>;
    /**
     * 根据feeid查询上报结果信息接口
     */
    GetRecordsByFeeId(query: GetRecordsByFeeIdRequest): Promise<GetRecordsByFeeIdResponse>;
    /**
     * 根据feeid查询上报计量信息接口
     */
    GetStatisticsRecordsByFeeId(query: GetStatisticsRecordsByFeeIdRequest): Promise<GetStatisticsRecordsByFeeIdResponse>;
    /**
     * 查询视频合并任务
     */
    GetVideoMergeTask(query: GetVideoMergeTaskRequest): Promise<GetVideoMergeTaskResponse>;
    /**
     * 人脸对比
     */
    FaceCompare(query: FaceCompareRequest): Promise<FaceCompareResponse>;
    /**
     * 语音合成
     */
    TtsCommon(query: TtsCommonRequest): Promise<TtsCommonResponse>;
    /**
     * 一句话识别
     */
    AsrSentence(query: AsrSentenceRequest): Promise<AsrSentenceResponse>;
    /**
     * 单向视频双录-语音合成推送任务
     */
    TtsTask(query: TtsTaskRequest): Promise<TtsTaskResponse>;
    /**
     * 单向视频双录-通知离开房间
     */
    LeaveRoom(query: LeaveRoomRequest): Promise<LeaveRoomResponse>;
    /**
     * 单向视频双录-人脸识别静默活体
     */
    FaceRecognize(query: FaceRecognizeRequest): Promise<FaceRecognizeResponse>;
    /**
     * 单向视频双录-静默活体
     */
    FaceLiveness(query: FaceLivenessRequest): Promise<FaceLivenessResponse>;
    /**
     * 单向视频双录-创建TTS问题组
     */
    CreateTtsQuestionGroup(query: CreateTtsQuestionGroupRequest): Promise<CreateTtsQuestionGroupResponse>;
    /**
     * 单向视频双录-获取语音识别结果
     */
    GetAsrResult(query: GetAsrResultRequest): Promise<GetAsrResultResponse>;
    /**
     * 单向视频双录-通知加入房间
     */
    JoinRoom(query: JoinRoomRequest): Promise<JoinRoomResponse>;
    /**
     * 单向视频双录-创建TTS问题
     */
    CreateTtsQuestion(query: CreateTtsQuestionRequest): Promise<CreateTtsQuestionResponse>;
    /**
     * 单向视频双录-语音识别任务
     */
    AsrTask(query: AsrTaskRequest): Promise<AsrTaskResponse>;
    /**
     * 根据TTS问题组ID获取TTS问题信息
     */
    GetTtsQuestionByGroupId(query: GetTtsQuestionByGroupIdRequest): Promise<GetTtsQuestionByGroupIdResponse>;
    /**
     * 根据OuterBusinessId查询上报结果信息接口
     */
    GetRecordsByOuterBusinessId(query: GetRecordsByOuterBusinessIdRequest): Promise<GetRecordsByOuterBusinessIdResponse>;
}
export default IDRSSERVICE;
