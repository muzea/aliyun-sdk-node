import { SkipPipelineJobRunRequest } from "./SkipPipelineJobRun/req";
import { SkipPipelineJobRunResponse } from "./SkipPipelineJobRun/res";
import { GetHostGroupRequest } from "./GetHostGroup/req";
import { GetHostGroupResponse } from "./GetHostGroup/res";
import { ListResourceMembersRequest } from "./ListResourceMembers/req";
import { ListResourceMembersResponse } from "./ListResourceMembers/res";
import { RetryPipelineJobRunRequest } from "./RetryPipelineJobRun/req";
import { RetryPipelineJobRunResponse } from "./RetryPipelineJobRun/res";
import { ListPipelineRunsRequest } from "./ListPipelineRuns/req";
import { ListPipelineRunsResponse } from "./ListPipelineRuns/res";
import { DeleteHostGroupRequest } from "./DeleteHostGroup/req";
import { DeleteHostGroupResponse } from "./DeleteHostGroup/res";
import { ListHostGroupsRequest } from "./ListHostGroups/req";
import { ListHostGroupsResponse } from "./ListHostGroups/res";
import { StartPipelineRunRequest } from "./StartPipelineRun/req";
import { StartPipelineRunResponse } from "./StartPipelineRun/res";
import { UpdateVariableGroupRequest } from "./UpdateVariableGroup/req";
import { UpdateVariableGroupResponse } from "./UpdateVariableGroup/res";
import { CreateResourceMemberRequest } from "./CreateResourceMember/req";
import { CreateResourceMemberResponse } from "./CreateResourceMember/res";
import { UpdateHostGroupRequest } from "./UpdateHostGroup/req";
import { UpdateHostGroupResponse } from "./UpdateHostGroup/res";
import { GetPipelineRunRequest } from "./GetPipelineRun/req";
import { GetPipelineRunResponse } from "./GetPipelineRun/res";
import { CreateSshKeyRequest } from "./CreateSshKey/req";
import { CreateSshKeyResponse } from "./CreateSshKey/res";
import { ListPipelinesRequest } from "./ListPipelines/req";
import { ListPipelinesResponse } from "./ListPipelines/res";
import { GetVariableGroupRequest } from "./GetVariableGroup/req";
import { GetVariableGroupResponse } from "./GetVariableGroup/res";
import { DeleteResourceMemberRequest } from "./DeleteResourceMember/req";
import { DeleteResourceMemberResponse } from "./DeleteResourceMember/res";
import { CreateHostGroupRequest } from "./CreateHostGroup/req";
import { CreateHostGroupResponse } from "./CreateHostGroup/res";
import { ListVariableGroupsRequest } from "./ListVariableGroups/req";
import { ListVariableGroupsResponse } from "./ListVariableGroups/res";
import { DeleteVariableGroupRequest } from "./DeleteVariableGroup/req";
import { DeleteVariableGroupResponse } from "./DeleteVariableGroup/res";
import { UpdateResourceMemberRequest } from "./UpdateResourceMember/req";
import { UpdateResourceMemberResponse } from "./UpdateResourceMember/res";
import { ListServiceConnectionsRequest } from "./ListServiceConnections/req";
import { ListServiceConnectionsResponse } from "./ListServiceConnections/res";
import { ResetSshKeyRequest } from "./ResetSshKey/req";
import { ResetSshKeyResponse } from "./ResetSshKey/res";
import { StopPipelineRunRequest } from "./StopPipelineRun/req";
import { StopPipelineRunResponse } from "./StopPipelineRun/res";
import { GetPipelineRequest } from "./GetPipeline/req";
import { GetPipelineResponse } from "./GetPipeline/res";
import { CreateVariableGroupRequest } from "./CreateVariableGroup/req";
import { CreateVariableGroupResponse } from "./CreateVariableGroup/res";
import { DeletePipelineRequest } from "./DeletePipeline/req";
import { DeletePipelineResponse } from "./DeletePipeline/res";
import { StopPipelineJobRunRequest } from "./StopPipelineJobRun/req";
import { StopPipelineJobRunResponse } from "./StopPipelineJobRun/res";
import { ReleaseWorkspaceRequest } from "./ReleaseWorkspace/req";
import { ReleaseWorkspaceResponse } from "./ReleaseWorkspace/res";
import { CreateWorkspaceRequest } from "./CreateWorkspace/req";
import { CreateWorkspaceResponse } from "./CreateWorkspace/res";
import { ListWorkspacesRequest } from "./ListWorkspaces/req";
import { ListWorkspacesResponse } from "./ListWorkspaces/res";
import { GetWorkspaceRequest } from "./GetWorkspace/req";
import { GetWorkspaceResponse } from "./GetWorkspace/res";
import { FrozenWorkspaceRequest } from "./FrozenWorkspace/req";
import { FrozenWorkspaceResponse } from "./FrozenWorkspace/res";
import { ListOrganizationMembersRequest } from "./ListOrganizationMembers/req";
import { ListOrganizationMembersResponse } from "./ListOrganizationMembers/res";
import { GetOrganizationMemberRequest } from "./GetOrganizationMember/req";
import { GetOrganizationMemberResponse } from "./GetOrganizationMember/res";
import { PassPipelineValidateRequest } from "./PassPipelineValidate/req";
import { PassPipelineValidateResponse } from "./PassPipelineValidate/res";
import { RefusePipelineValidateRequest } from "./RefusePipelineValidate/req";
import { RefusePipelineValidateResponse } from "./RefusePipelineValidate/res";
import { LogPipelineJobRunRequest } from "./LogPipelineJobRun/req";
import { LogPipelineJobRunResponse } from "./LogPipelineJobRun/res";
import { ResumeVMDeployOrderRequest } from "./ResumeVMDeployOrder/req";
import { ResumeVMDeployOrderResponse } from "./ResumeVMDeployOrder/res";
import { StopVMDeployOrderRequest } from "./StopVMDeployOrder/req";
import { StopVMDeployOrderResponse } from "./StopVMDeployOrder/res";
import { GetVMDeployOrderRequest } from "./GetVMDeployOrder/req";
import { GetVMDeployOrderResponse } from "./GetVMDeployOrder/res";
import { RetryVMDeployMachineRequest } from "./RetryVMDeployMachine/req";
import { RetryVMDeployMachineResponse } from "./RetryVMDeployMachine/res";
import { LogVMDeployMachineRequest } from "./LogVMDeployMachine/req";
import { LogVMDeployMachineResponse } from "./LogVMDeployMachine/res";
import { SkipVMDeployMachineRequest } from "./SkipVMDeployMachine/req";
import { SkipVMDeployMachineResponse } from "./SkipVMDeployMachine/res";
import { GetProjectInfoRequest } from "./GetProjectInfo/req";
import { GetProjectInfoResponse } from "./GetProjectInfo/res";
import { ListProjectMembersRequest } from "./ListProjectMembers/req";
import { ListProjectMembersResponse } from "./ListProjectMembers/res";
import { CreateFlowTagRequest } from "./CreateFlowTag/req";
import { CreateFlowTagResponse } from "./CreateFlowTag/res";
import { CreateFlowTagGroupRequest } from "./CreateFlowTagGroup/req";
import { CreateFlowTagGroupResponse } from "./CreateFlowTagGroup/res";
import { DeleteFlowTagRequest } from "./DeleteFlowTag/req";
import { DeleteFlowTagResponse } from "./DeleteFlowTag/res";
import { DeleteFlowTagGroupRequest } from "./DeleteFlowTagGroup/req";
import { DeleteFlowTagGroupResponse } from "./DeleteFlowTagGroup/res";
import { GetFlowTagGroupRequest } from "./GetFlowTagGroup/req";
import { GetFlowTagGroupResponse } from "./GetFlowTagGroup/res";
import { ListFlowTagGroupsRequest } from "./ListFlowTagGroups/req";
import { ListFlowTagGroupsResponse } from "./ListFlowTagGroups/res";
import { UpdateFlowTagRequest } from "./UpdateFlowTag/req";
import { UpdateFlowTagResponse } from "./UpdateFlowTag/res";
import { UpdatePipelineBaseInfoRequest } from "./UpdatePipelineBaseInfo/req";
import { UpdatePipelineBaseInfoResponse } from "./UpdatePipelineBaseInfo/res";
import { UpdateFlowTagGroupRequest } from "./UpdateFlowTagGroup/req";
import { UpdateFlowTagGroupResponse } from "./UpdateFlowTagGroup/res";
import { CreateRepositoryRequest } from "./CreateRepository/req";
import { CreateRepositoryResponse } from "./CreateRepository/res";
import { ListPipelineJobsRequest } from "./ListPipelineJobs/req";
import { ListPipelineJobsResponse } from "./ListPipelineJobs/res";
import { GetPipelineScanReportUrlRequest } from "./GetPipelineScanReportUrl/req";
import { GetPipelineScanReportUrlResponse } from "./GetPipelineScanReportUrl/res";
import { GetPipelineArtifactUrlRequest } from "./GetPipelineArtifactUrl/req";
import { GetPipelineArtifactUrlResponse } from "./GetPipelineArtifactUrl/res";
import { ListPipelineJobHistorysRequest } from "./ListPipelineJobHistorys/req";
import { ListPipelineJobHistorysResponse } from "./ListPipelineJobHistorys/res";
import { GetPipelineEmasArtifactUrlRequest } from "./GetPipelineEmasArtifactUrl/req";
import { GetPipelineEmasArtifactUrlResponse } from "./GetPipelineEmasArtifactUrl/res";
import { CreateSprintRequest } from "./CreateSprint/req";
import { CreateSprintResponse } from "./CreateSprint/res";
import { UpdateProjectMemberRequest } from "./UpdateProjectMember/req";
import { UpdateProjectMemberResponse } from "./UpdateProjectMember/res";
import { GetWorkItemWorkFlowInfoRequest } from "./GetWorkItemWorkFlowInfo/req";
import { GetWorkItemWorkFlowInfoResponse } from "./GetWorkItemWorkFlowInfo/res";
import { UpdateWorkItemRequest } from "./UpdateWorkItem/req";
import { UpdateWorkItemResponse } from "./UpdateWorkItem/res";
import { GetCustomFieldOptionRequest } from "./GetCustomFieldOption/req";
import { GetCustomFieldOptionResponse } from "./GetCustomFieldOption/res";
import { DeleteProjectRequest } from "./DeleteProject/req";
import { DeleteProjectResponse } from "./DeleteProject/res";
import { GetWorkItemInfoRequest } from "./GetWorkItemInfo/req";
import { GetWorkItemInfoResponse } from "./GetWorkItemInfo/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { GetWorkItemActivityRequest } from "./GetWorkItemActivity/req";
import { GetWorkItemActivityResponse } from "./GetWorkItemActivity/res";
import { CreateWorkitemRequest } from "./CreateWorkitem/req";
import { CreateWorkitemResponse } from "./CreateWorkitem/res";
import { GetSprintInfoRequest } from "./GetSprintInfo/req";
import { GetSprintInfoResponse } from "./GetSprintInfo/res";
import { ListProjectTemplatesRequest } from "./ListProjectTemplates/req";
import { ListProjectTemplatesResponse } from "./ListProjectTemplates/res";
import { ListProjectWorkitemTypesRequest } from "./ListProjectWorkitemTypes/req";
import { ListProjectWorkitemTypesResponse } from "./ListProjectWorkitemTypes/res";
import { ListProjectsRequest } from "./ListProjects/req";
import { ListProjectsResponse } from "./ListProjects/res";
import { ListSprintsRequest } from "./ListSprints/req";
import { ListSprintsResponse } from "./ListSprints/res";
import { ListWorkItemAllFieldsRequest } from "./ListWorkItemAllFields/req";
import { ListWorkItemAllFieldsResponse } from "./ListWorkItemAllFields/res";
import { ListWorkItemWorkFlowStatusRequest } from "./ListWorkItemWorkFlowStatus/req";
import { ListWorkItemWorkFlowStatusResponse } from "./ListWorkItemWorkFlowStatus/res";
import { ListWorkitemsRequest } from "./ListWorkitems/req";
import { ListWorkitemsResponse } from "./ListWorkitems/res";
import { AddWebhookRequest } from "./AddWebhook/req";
import { AddWebhookResponse } from "./AddWebhook/res";
import { GetFileLastCommitRequest } from "./GetFileLastCommit/req";
import { GetFileLastCommitResponse } from "./GetFileLastCommit/res";
import { ListRepositoryWebhookRequest } from "./ListRepositoryWebhook/req";
import { ListRepositoryWebhookResponse } from "./ListRepositoryWebhook/res";
import { GetCodeupOrganizationRequest } from "./GetCodeupOrganization/req";
import { GetCodeupOrganizationResponse } from "./GetCodeupOrganization/res";
import { ListRepositoryMemberWithInheritedRequest } from "./ListRepositoryMemberWithInherited/req";
import { ListRepositoryMemberWithInheritedResponse } from "./ListRepositoryMemberWithInherited/res";
import { GetProjectMemberRequest } from "./GetProjectMember/req";
import { GetProjectMemberResponse } from "./GetProjectMember/res";
import { ListRepositoriesRequest } from "./ListRepositories/req";
import { ListRepositoriesResponse } from "./ListRepositories/res";
import { TriggerRepositoryMirrorSyncRequest } from "./TriggerRepositoryMirrorSync/req";
import { TriggerRepositoryMirrorSyncResponse } from "./TriggerRepositoryMirrorSync/res";
import { GetRepositoryRequest } from "./GetRepository/req";
import { GetRepositoryResponse } from "./GetRepository/res";
import { AddRepositoryMemberRequest } from "./AddRepositoryMember/req";
import { AddRepositoryMemberResponse } from "./AddRepositoryMember/res";
import { ListWorkitemTimeRequest } from "./ListWorkitemTime/req";
import { ListWorkitemTimeResponse } from "./ListWorkitemTime/res";
import { CreateOAuthTokenRequest } from "./CreateOAuthToken/req";
import { CreateOAuthTokenResponse } from "./CreateOAuthToken/res";
import { JoinPipelineGroupRequest } from "./JoinPipelineGroup/req";
import { JoinPipelineGroupResponse } from "./JoinPipelineGroup/res";
import { CreatePipelineGroupRequest } from "./CreatePipelineGroup/req";
import { CreatePipelineGroupResponse } from "./CreatePipelineGroup/res";
import { DeletePipelineGroupRequest } from "./DeletePipelineGroup/req";
import { DeletePipelineGroupResponse } from "./DeletePipelineGroup/res";
import { GetPipelineGroupRequest } from "./GetPipelineGroup/req";
import { GetPipelineGroupResponse } from "./GetPipelineGroup/res";
import { UpdatePipelineGroupRequest } from "./UpdatePipelineGroup/req";
import { UpdatePipelineGroupResponse } from "./UpdatePipelineGroup/res";
import { ListPipelineGroupPipelinesRequest } from "./ListPipelineGroupPipelines/req";
import { ListPipelineGroupPipelinesResponse } from "./ListPipelineGroupPipelines/res";
import { ListPipelineGroupsRequest } from "./ListPipelineGroups/req";
import { ListPipelineGroupsResponse } from "./ListPipelineGroups/res";
import { ListRepositoryCommitDiffRequest } from "./ListRepositoryCommitDiff/req";
import { ListRepositoryCommitDiffResponse } from "./ListRepositoryCommitDiff/res";
import { UpdateRepositoryMemberRequest } from "./UpdateRepositoryMember/req";
import { UpdateRepositoryMemberResponse } from "./UpdateRepositoryMember/res";
import { UpdateProtectedBranchesRequest } from "./UpdateProtectedBranches/req";
import { UpdateProtectedBranchesResponse } from "./UpdateProtectedBranches/res";
import { UpdateRepositoryRequest } from "./UpdateRepository/req";
import { UpdateRepositoryResponse } from "./UpdateRepository/res";
import { DeleteFileRequest } from "./DeleteFile/req";
import { DeleteFileResponse } from "./DeleteFile/res";
import { UpdateFileRequest } from "./UpdateFile/req";
import { UpdateFileResponse } from "./UpdateFile/res";
import { ListRepositoryTreeRequest } from "./ListRepositoryTree/req";
import { ListRepositoryTreeResponse } from "./ListRepositoryTree/res";
import { GetFileBlobsRequest } from "./GetFileBlobs/req";
import { GetFileBlobsResponse } from "./GetFileBlobs/res";
import { DeleteRepositoryRequest } from "./DeleteRepository/req";
import { DeleteRepositoryResponse } from "./DeleteRepository/res";
import { CreateFileRequest } from "./CreateFile/req";
import { CreateFileResponse } from "./CreateFile/res";
import { DeleteWorkitemCommentRequest } from "./DeleteWorkitemComment/req";
import { DeleteWorkitemCommentResponse } from "./DeleteWorkitemComment/res";
import { CreateWorkitemCommentRequest } from "./CreateWorkitemComment/req";
import { CreateWorkitemCommentResponse } from "./CreateWorkitemComment/res";
import { DeleteWorkitemAllCommentRequest } from "./DeleteWorkitemAllComment/req";
import { DeleteWorkitemAllCommentResponse } from "./DeleteWorkitemAllComment/res";
import { GetWorkitemCommentListRequest } from "./GetWorkitemCommentList/req";
import { GetWorkitemCommentListResponse } from "./GetWorkitemCommentList/res";
import { CreateWorkitemEstimateRequest } from "./CreateWorkitemEstimate/req";
import { CreateWorkitemEstimateResponse } from "./CreateWorkitemEstimate/res";
import { UpdateWorkitemCommentRequest } from "./UpdateWorkitemComment/req";
import { UpdateWorkitemCommentResponse } from "./UpdateWorkitemComment/res";
import { GetWorkitemRelationsRequest } from "./GetWorkitemRelations/req";
import { GetWorkitemRelationsResponse } from "./GetWorkitemRelations/res";
import { CreateWorkitemRecordRequest } from "./CreateWorkitemRecord/req";
import { CreateWorkitemRecordResponse } from "./CreateWorkitemRecord/res";
import { GetWorkitemTimeTypeListRequest } from "./GetWorkitemTimeTypeList/req";
import { GetWorkitemTimeTypeListResponse } from "./GetWorkitemTimeTypeList/res";
import { DeleteBranchRequest } from "./DeleteBranch/req";
import { DeleteBranchResponse } from "./DeleteBranch/res";
import { CreateBranchRequest } from "./CreateBranch/req";
import { CreateBranchResponse } from "./CreateBranch/res";
import { ListProtectedBranchesRequest } from "./ListProtectedBranches/req";
import { ListProtectedBranchesResponse } from "./ListProtectedBranches/res";
import { ListRepositoryBranchesRequest } from "./ListRepositoryBranches/req";
import { ListRepositoryBranchesResponse } from "./ListRepositoryBranches/res";
import { GetBranchInfoRequest } from "./GetBranchInfo/req";
import { GetBranchInfoResponse } from "./GetBranchInfo/res";
import { DeleteProtectedBranchRequest } from "./DeleteProtectedBranch/req";
import { DeleteProtectedBranchResponse } from "./DeleteProtectedBranch/res";
import { DeleteRepositoryWebhookRequest } from "./DeleteRepositoryWebhook/req";
import { DeleteRepositoryWebhookResponse } from "./DeleteRepositoryWebhook/res";
import { GetRepositoryCommitRequest } from "./GetRepositoryCommit/req";
import { GetRepositoryCommitResponse } from "./GetRepositoryCommit/res";
import { ListRepositoryCommitsRequest } from "./ListRepositoryCommits/req";
import { ListRepositoryCommitsResponse } from "./ListRepositoryCommits/res";
import { CreateProtectdBranchRequest } from "./CreateProtectdBranch/req";
import { CreateProtectdBranchResponse } from "./CreateProtectdBranch/res";
import { ListPipelineRelationsRequest } from "./ListPipelineRelations/req";
import { ListPipelineRelationsResponse } from "./ListPipelineRelations/res";
import { DeletePipelineRelationsRequest } from "./DeletePipelineRelations/req";
import { DeletePipelineRelationsResponse } from "./DeletePipelineRelations/res";
import { AddPipelineRelationsRequest } from "./AddPipelineRelations/req";
import { AddPipelineRelationsResponse } from "./AddPipelineRelations/res";
import { CreateRepositoryGroupRequest } from "./CreateRepositoryGroup/req";
import { CreateRepositoryGroupResponse } from "./CreateRepositoryGroup/res";
import { DeleteRepositoryMemberRequest } from "./DeleteRepositoryMember/req";
import { DeleteRepositoryMemberResponse } from "./DeleteRepositoryMember/res";
import { GetGroupDetailRequest } from "./GetGroupDetail/req";
import { GetGroupDetailResponse } from "./GetGroupDetail/res";
import { ListGroupRepositoriesRequest } from "./ListGroupRepositories/req";
import { ListGroupRepositoriesResponse } from "./ListGroupRepositories/res";
import { DeleteRepositoryGroupRequest } from "./DeleteRepositoryGroup/req";
import { DeleteRepositoryGroupResponse } from "./DeleteRepositoryGroup/res";
import { DeleteTagRequest } from "./DeleteTag/req";
import { DeleteTagResponse } from "./DeleteTag/res";
import { CreateTagRequest } from "./CreateTag/req";
import { CreateTagResponse } from "./CreateTag/res";
import { ListOrganizationsRequest } from "./ListOrganizations/req";
import { ListOrganizationsResponse } from "./ListOrganizations/res";
import { GetUserInfoRequest } from "./GetUserInfo/req";
import { GetUserInfoResponse } from "./GetUserInfo/res";
import { ListRepositoryTagsRequest } from "./ListRepositoryTags/req";
import { ListRepositoryTagsResponse } from "./ListRepositoryTags/res";
import { GetRepositoryTagRequest } from "./GetRepositoryTag/req";
import { GetRepositoryTagResponse } from "./GetRepositoryTag/res";
import { ListRepositoryGroupsRequest } from "./ListRepositoryGroups/req";
import { ListRepositoryGroupsResponse } from "./ListRepositoryGroups/res";
import { CreateDeployKeyRequest } from "./CreateDeployKey/req";
import { CreateDeployKeyResponse } from "./CreateDeployKey/res";
import { EnableDeployKeyRequest } from "./EnableDeployKey/req";
import { EnableDeployKeyResponse } from "./EnableDeployKey/res";
import { ListGroupMemberRequest } from "./ListGroupMember/req";
import { ListGroupMemberResponse } from "./ListGroupMember/res";
import { UpdateGroupMemberRequest } from "./UpdateGroupMember/req";
import { UpdateGroupMemberResponse } from "./UpdateGroupMember/res";
import { DeleteGroupMemberRequest } from "./DeleteGroupMember/req";
import { DeleteGroupMemberResponse } from "./DeleteGroupMember/res";
import { AddGroupMemberRequest } from "./AddGroupMember/req";
import { AddGroupMemberResponse } from "./AddGroupMember/res";
import { ListSearchSourceCodeRequest } from "./ListSearchSourceCode/req";
import { ListSearchSourceCodeResponse } from "./ListSearchSourceCode/res";
import { ListSearchRepositoryRequest } from "./ListSearchRepository/req";
import { ListSearchRepositoryResponse } from "./ListSearchRepository/res";
import { GetSearchCodePreviewRequest } from "./GetSearchCodePreview/req";
import { GetSearchCodePreviewResponse } from "./GetSearchCodePreview/res";
import { UpdatePushReviewOnOffRequest } from "./UpdatePushReviewOnOff/req";
import { UpdatePushReviewOnOffResponse } from "./UpdatePushReviewOnOff/res";
import { ListSearchCommitRequest } from "./ListSearchCommit/req";
import { ListSearchCommitResponse } from "./ListSearchCommit/res";
import { GetCompareDetailRequest } from "./GetCompareDetail/req";
import { GetCompareDetailResponse } from "./GetCompareDetail/res";
import { UpdateWorkitemFieldRequest } from "./UpdateWorkitemField/req";
import { UpdateWorkitemFieldResponse } from "./UpdateWorkitemField/res";
import { DeleteWorkitemRequest } from "./DeleteWorkitem/req";
import { DeleteWorkitemResponse } from "./DeleteWorkitem/res";
import { UpdateGroupRequest } from "./UpdateGroup/req";
import { UpdateGroupResponse } from "./UpdateGroup/res";
import { UpdateTestResultRequest } from "./UpdateTestResult/req";
import { UpdateTestResultResponse } from "./UpdateTestResult/res";
import { UpdateTestCaseRequest } from "./UpdateTestCase/req";
import { UpdateTestCaseResponse } from "./UpdateTestCase/res";
import { GetTestResultListRequest } from "./GetTestResultList/req";
import { GetTestResultListResponse } from "./GetTestResultList/res";
import { CreateTestCaseRequest } from "./CreateTestCase/req";
import { CreateTestCaseResponse } from "./CreateTestCase/res";
import { ListTestCaseFieldsRequest } from "./ListTestCaseFields/req";
import { ListTestCaseFieldsResponse } from "./ListTestCaseFields/res";
import { GetTestcaseListRequest } from "./GetTestcaseList/req";
import { GetTestcaseListResponse } from "./GetTestcaseList/res";
import { CreateUserKeyRequest } from "./CreateUserKey/req";
import { CreateUserKeyResponse } from "./CreateUserKey/res";
import { DeleteUserKeyRequest } from "./DeleteUserKey/req";
import { DeleteUserKeyResponse } from "./DeleteUserKey/res";
import { ListUserKeysRequest } from "./ListUserKeys/req";
import { ListUserKeysResponse } from "./ListUserKeys/res";
import { CreatePipelineRequest } from "./CreatePipeline/req";
import { CreatePipelineResponse } from "./CreatePipeline/res";
import { UpdatePipelineRequest } from "./UpdatePipeline/req";
import { UpdatePipelineResponse } from "./UpdatePipeline/res";
import { WorkitemAttachmentCreateRequest } from "./WorkitemAttachmentCreate/req";
import { WorkitemAttachmentCreateResponse } from "./WorkitemAttachmentCreate/res";
import { GetWorkitemAttachmentCreatemetaRequest } from "./GetWorkitemAttachmentCreatemeta/req";
import { GetWorkitemAttachmentCreatemetaResponse } from "./GetWorkitemAttachmentCreatemeta/res";
import { CreateWorkitemV2Request } from "./CreateWorkitemV2/req";
import { CreateWorkitemV2Response } from "./CreateWorkitemV2/res";
import { ListUserResourcesRequest } from "./ListUserResources/req";
import { ListUserResourcesResponse } from "./ListUserResources/res";
import { TransferRepositoryRequest } from "./TransferRepository/req";
import { TransferRepositoryResponse } from "./TransferRepository/res";
import { CreateServiceConnectionRequest } from "./CreateServiceConnection/req";
import { CreateServiceConnectionResponse } from "./CreateServiceConnection/res";
import { ListServiceCredentialsRequest } from "./ListServiceCredentials/req";
import { ListServiceCredentialsResponse } from "./ListServiceCredentials/res";
import { CreateServiceAuthRequest } from "./CreateServiceAuth/req";
import { CreateServiceAuthResponse } from "./CreateServiceAuth/res";
import { CreateServiceCredentialRequest } from "./CreateServiceCredential/req";
import { CreateServiceCredentialResponse } from "./CreateServiceCredential/res";
import { ListServiceAuthsRequest } from "./ListServiceAuths/req";
import { ListServiceAuthsResponse } from "./ListServiceAuths/res";
import { ListWorkitemEstimateRequest } from "./ListWorkitemEstimate/req";
import { ListWorkitemEstimateResponse } from "./ListWorkitemEstimate/res";
import { UpdateProjectFieldRequest } from "./UpdateProjectField/req";
import { UpdateProjectFieldResponse } from "./UpdateProjectField/res";
import { UpdateMergeRequestPersonnelRequest } from "./UpdateMergeRequestPersonnel/req";
import { UpdateMergeRequestPersonnelResponse } from "./UpdateMergeRequestPersonnel/res";
import { UpdateMergeRequestRequest } from "./UpdateMergeRequest/req";
import { UpdateMergeRequestResponse } from "./UpdateMergeRequest/res";
import { ReopenMergeRequestRequest } from "./ReopenMergeRequest/req";
import { ReopenMergeRequestResponse } from "./ReopenMergeRequest/res";
import { MergeMergeRequestRequest } from "./MergeMergeRequest/req";
import { MergeMergeRequestResponse } from "./MergeMergeRequest/res";
import { ReviewMergeRequestRequest } from "./ReviewMergeRequest/req";
import { ReviewMergeRequestResponse } from "./ReviewMergeRequest/res";
import { CreateMergeRequestRequest } from "./CreateMergeRequest/req";
import { CreateMergeRequestResponse } from "./CreateMergeRequest/res";
import { GetMergeRequestRequest } from "./GetMergeRequest/req";
import { GetMergeRequestResponse } from "./GetMergeRequest/res";
import { ListMergeRequestsRequest } from "./ListMergeRequests/req";
import { ListMergeRequestsResponse } from "./ListMergeRequests/res";
import { CloseMergeRequestRequest } from "./CloseMergeRequest/req";
import { CloseMergeRequestResponse } from "./CloseMergeRequest/res";
import { UpdatePushRuleRequest } from "./UpdatePushRule/req";
import { UpdatePushRuleResponse } from "./UpdatePushRule/res";
import { CreatePushRuleRequest } from "./CreatePushRule/req";
import { CreatePushRuleResponse } from "./CreatePushRule/res";
import { GetPushRuleRequest } from "./GetPushRule/req";
import { GetPushRuleResponse } from "./GetPushRule/res";
import { ListPushRulesRequest } from "./ListPushRules/req";
import { ListPushRulesResponse } from "./ListPushRules/res";
import { DeletePushRuleRequest } from "./DeletePushRule/req";
import { DeletePushRuleResponse } from "./DeletePushRule/res";
import { GetGroupByPathRequest } from "./GetGroupByPath/req";
import { GetGroupByPathResponse } from "./GetGroupByPath/res";
import { ListWorkitemAttachmentsRequest } from "./ListWorkitemAttachments/req";
import { ListWorkitemAttachmentsResponse } from "./ListWorkitemAttachments/res";
import { CreateCommitStatusRequest } from "./CreateCommitStatus/req";
import { CreateCommitStatusResponse } from "./CreateCommitStatus/res";
import { ListMergeRequestFilesReadsRequest } from "./ListMergeRequestFilesReads/req";
import { ListMergeRequestFilesReadsResponse } from "./ListMergeRequestFilesReads/res";
import { ListCommitStatusesRequest } from "./ListCommitStatuses/req";
import { ListCommitStatusesResponse } from "./ListCommitStatuses/res";
import { GetMergeRequestChangeTreeRequest } from "./GetMergeRequestChangeTree/req";
import { GetMergeRequestChangeTreeResponse } from "./GetMergeRequestChangeTree/res";
import { ListMergeRequestCommentsRequest } from "./ListMergeRequestComments/req";
import { ListMergeRequestCommentsResponse } from "./ListMergeRequestComments/res";
import { ListMergeRequestPatchSetsRequest } from "./ListMergeRequestPatchSets/req";
import { ListMergeRequestPatchSetsResponse } from "./ListMergeRequestPatchSets/res";
import { DeleteAppMemberRequest } from "./DeleteAppMember/req";
import { DeleteAppMemberResponse } from "./DeleteAppMember/res";
import { UpdateAppMemberRequest } from "./UpdateAppMember/req";
import { UpdateAppMemberResponse } from "./UpdateAppMember/res";
import { CreateAppMembersRequest } from "./CreateAppMembers/req";
import { CreateAppMembersResponse } from "./CreateAppMembers/res";
import { GetApplicationRequest } from "./GetApplication/req";
import { GetApplicationResponse } from "./GetApplication/res";
import { ListApplicationsRequest } from "./ListApplications/req";
import { ListApplicationsResponse } from "./ListApplications/res";
import { UpdateApplicationRequest } from "./UpdateApplication/req";
import { UpdateApplicationResponse } from "./UpdateApplication/res";
import { ListApplicationMembersRequest } from "./ListApplicationMembers/req";
import { ListApplicationMembersResponse } from "./ListApplicationMembers/res";
import { GetWorkitemFileRequest } from "./GetWorkitemFile/req";
import { GetWorkitemFileResponse } from "./GetWorkitemFile/res";
import { CreateProjectLabelRequest } from "./CreateProjectLabel/req";
import { CreateProjectLabelResponse } from "./CreateProjectLabel/res";
import { ListMergeRequestLabelsRequest } from "./ListMergeRequestLabels/req";
import { ListMergeRequestLabelsResponse } from "./ListMergeRequestLabels/res";
import { DeleteProjectLabelRequest } from "./DeleteProjectLabel/req";
import { DeleteProjectLabelResponse } from "./DeleteProjectLabel/res";
import { UpdateProjectLabelRequest } from "./UpdateProjectLabel/req";
import { UpdateProjectLabelResponse } from "./UpdateProjectLabel/res";
import { LinkMergeRequestLabelRequest } from "./LinkMergeRequestLabel/req";
import { LinkMergeRequestLabelResponse } from "./LinkMergeRequestLabel/res";
import { ListProjectLabelsRequest } from "./ListProjectLabels/req";
import { ListProjectLabelsResponse } from "./ListProjectLabels/res";
import { GetCheckRunRequest } from "./GetCheckRun/req";
import { GetCheckRunResponse } from "./GetCheckRun/res";
import { ListCheckRunsRequest } from "./ListCheckRuns/req";
import { ListCheckRunsResponse } from "./ListCheckRuns/res";
import { CreateCheckRunRequest } from "./CreateCheckRun/req";
import { CreateCheckRunResponse } from "./CreateCheckRun/res";
import { UpdateCheckRunRequest } from "./UpdateCheckRun/req";
import { UpdateCheckRunResponse } from "./UpdateCheckRun/res";
import { ListUserDrawRecordByPkRequest } from "./ListUserDrawRecordByPk/req";
import { ListUserDrawRecordByPkResponse } from "./ListUserDrawRecordByPk/res";
import { ListJoinedOrganizationsRequest } from "./ListJoinedOrganizations/req";
import { ListJoinedOrganizationsResponse } from "./ListJoinedOrganizations/res";
import { CreateCommitWithMultipleFilesRequest } from "./CreateCommitWithMultipleFiles/req";
import { CreateCommitWithMultipleFilesResponse } from "./CreateCommitWithMultipleFiles/res";
import { CreateCommentRequest } from "./CreateComment/req";
import { CreateCommentResponse } from "./CreateComment/res";
import { ExportInsightTagRefRequest } from "./ExportInsightTagRef/req";
import { ExportInsightTagRefResponse } from "./ExportInsightTagRef/res";
import { ExportWorkitemActivityRequest } from "./ExportWorkitemActivity/req";
import { ExportWorkitemActivityResponse } from "./ExportWorkitemActivity/res";
import { ExportInsightExpectedWorkTimeRequest } from "./ExportInsightExpectedWorkTime/req";
import { ExportInsightExpectedWorkTimeResponse } from "./ExportInsightExpectedWorkTime/res";
import { ExportInsightWorkitemVersionRequest } from "./ExportInsightWorkitemVersion/req";
import { ExportInsightWorkitemVersionResponse } from "./ExportInsightWorkitemVersion/res";
import { ExportInsightWorkTimeRequest } from "./ExportInsightWorkTime/req";
import { ExportInsightWorkTimeResponse } from "./ExportInsightWorkTime/res";
import { ExportInsightSpaceRefRequest } from "./ExportInsightSpaceRef/req";
import { ExportInsightSpaceRefResponse } from "./ExportInsightSpaceRef/res";
import { ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest } from "./ExportInsightWorkitemStatusJoinWorkitemDefectExtra/req";
import { ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse } from "./ExportInsightWorkitemStatusJoinWorkitemDefectExtra/res";
import { ExportInsightSprintRequest } from "./ExportInsightSprint/req";
import { ExportInsightSprintResponse } from "./ExportInsightSprint/res";
import { ExportInsightSpaceRequest } from "./ExportInsightSpace/req";
import { ExportInsightSpaceResponse } from "./ExportInsightSpace/res";
import { ExportInsightWorkitemStatusRequest } from "./ExportInsightWorkitemStatus/req";
import { ExportInsightWorkitemStatusResponse } from "./ExportInsightWorkitemStatus/res";
import { ExportInsightCustomValueRequest } from "./ExportInsightCustomValue/req";
import { ExportInsightCustomValueResponse } from "./ExportInsightCustomValue/res";
import { ExportInsightFieldRequest } from "./ExportInsightField/req";
import { ExportInsightFieldResponse } from "./ExportInsightField/res";
import { ListAppReleaseStageExecutionsRequest } from "./ListAppReleaseStageExecutions/req";
import { ListAppReleaseStageExecutionsResponse } from "./ListAppReleaseStageExecutions/res";
import { ListAllReleaseWorkflowsRequest } from "./ListAllReleaseWorkflows/req";
import { ListAllReleaseWorkflowsResponse } from "./ListAllReleaseWorkflows/res";
import { ListAppReleaseStageExecutionIntegratedMetadataRequest } from "./ListAppReleaseStageExecutionIntegratedMetadata/req";
import { ListAppReleaseStageExecutionIntegratedMetadataResponse } from "./ListAppReleaseStageExecutionIntegratedMetadata/res";
import { UpdateOrganizationMemberRequest } from "./UpdateOrganizationMember/req";
import { UpdateOrganizationMemberResponse } from "./UpdateOrganizationMember/res";

interface DEVOPS {
    /**
     * 可以跳过流水线任务运行。
     */
    SkipPipelineJobRun(query: SkipPipelineJobRunRequest): Promise<SkipPipelineJobRunResponse>;
    /**
     * 可以获取主机组。
     */
    GetHostGroup(query: GetHostGroupRequest): Promise<GetHostGroupResponse>;
    /**
     * 可以获取资源成员列表。
     */
    ListResourceMembers(query: ListResourceMembersRequest): Promise<ListResourceMembersResponse>;
    /**
     * 可以重试流水线任务运行。
     */
    RetryPipelineJobRun(query: RetryPipelineJobRunRequest): Promise<RetryPipelineJobRunResponse>;
    /**
     * 可以获取流水线运行实例列表。
     */
    ListPipelineRuns(query: ListPipelineRunsRequest): Promise<ListPipelineRunsResponse>;
    /**
     * 可以删除主机组。
     */
    DeleteHostGroup(query: DeleteHostGroupRequest): Promise<DeleteHostGroupResponse>;
    /**
     * 可以获取主机组列表。
     */
    ListHostGroups(query: ListHostGroupsRequest): Promise<ListHostGroupsResponse>;
    /**
     * 可以运行流水线。
     */
    StartPipelineRun(query: StartPipelineRunRequest): Promise<StartPipelineRunResponse>;
    /**
     * 可以更新变量组。
     */
    UpdateVariableGroup(query: UpdateVariableGroupRequest): Promise<UpdateVariableGroupResponse>;
    /**
     * 可以插入资源成员。
     */
    CreateResourceMember(query: CreateResourceMemberRequest): Promise<CreateResourceMemberResponse>;
    /**
     * 可以更新主机组。
     */
    UpdateHostGroup(query: UpdateHostGroupRequest): Promise<UpdateHostGroupResponse>;
    /**
     * 可以获取流水线运行实例。
     */
    GetPipelineRun(query: GetPipelineRunRequest): Promise<GetPipelineRunResponse>;
    /**
     * 可以创建企业公钥。
     */
    CreateSshKey(query: CreateSshKeyRequest): Promise<CreateSshKeyResponse>;
    /**
     * 获取流水线列表。
     */
    ListPipelines(query: ListPipelinesRequest): Promise<ListPipelinesResponse>;
    /**
     * 可以获取变量组。
     */
    GetVariableGroup(query: GetVariableGroupRequest): Promise<GetVariableGroupResponse>;
    /**
     * 可以删除资源成员。
     */
    DeleteResourceMember(query: DeleteResourceMemberRequest): Promise<DeleteResourceMemberResponse>;
    /**
     * 可以创建主机组。
     */
    CreateHostGroup(query: CreateHostGroupRequest): Promise<CreateHostGroupResponse>;
    /**
     * 可以获取变量组列表。
     */
    ListVariableGroups(query: ListVariableGroupsRequest): Promise<ListVariableGroupsResponse>;
    /**
     * 可以删除变量组。
     */
    DeleteVariableGroup(query: DeleteVariableGroupRequest): Promise<DeleteVariableGroupResponse>;
    /**
     * 可以更新资源成员。
     */
    UpdateResourceMember(query: UpdateResourceMemberRequest): Promise<UpdateResourceMemberResponse>;
    /**
     * 可以获取服务连接列表。
     */
    ListServiceConnections(query: ListServiceConnectionsRequest): Promise<ListServiceConnectionsResponse>;
    /**
     * 可以重置企业公钥。
     */
    ResetSshKey(query: ResetSshKeyRequest): Promise<ResetSshKeyResponse>;
    /**
     * 可以终止流水线运行。
     */
    StopPipelineRun(query: StopPipelineRunRequest): Promise<StopPipelineRunResponse>;
    /**
     * 可以获取流水线信息。
     */
    GetPipeline(query: GetPipelineRequest): Promise<GetPipelineResponse>;
    /**
     * 可以创建变量组。
     */
    CreateVariableGroup(query: CreateVariableGroupRequest): Promise<CreateVariableGroupResponse>;
    /**
     * 可以删除流水线。
     */
    DeletePipeline(query: DeletePipelineRequest): Promise<DeletePipelineResponse>;
    /**
     * 可以终止流水线任务运行。
     */
    StopPipelineJobRun(query: StopPipelineJobRunRequest): Promise<StopPipelineJobRunResponse>;
    /**
     * 当用户工作空间不再需要持续保持，可释放工作空间（一旦删除，空间内的数据将不可恢复）。
     */
    ReleaseWorkspace(query: ReleaseWorkspaceRequest): Promise<ReleaseWorkspaceResponse>;
    /**
     * 可以创建工作空间。
     */
    CreateWorkspace(query: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse>;
    /**
     * 查询工作空间列表。
     */
    ListWorkspaces(query: ListWorkspacesRequest): Promise<ListWorkspacesResponse>;
    /**
     * 查询工作空间基本信息。
     */
    GetWorkspace(query: GetWorkspaceRequest): Promise<GetWorkspaceResponse>;
    /**
     * 当用户运行中的工作空间数量到达限制配额，可主动冻结工作空间（冻结前的代码数据已自动备份）。
     */
    FrozenWorkspace(query: FrozenWorkspaceRequest): Promise<FrozenWorkspaceResponse>;
    /**
     * 根据指定条件获取企业成员信息。
     */
    ListOrganizationMembers(query: ListOrganizationMembersRequest): Promise<ListOrganizationMembersResponse>;
    /**
     * 根据指定条件获取企业成员信息。
     */
    GetOrganizationMember(query: GetOrganizationMemberRequest): Promise<GetOrganizationMemberResponse>;
    /**
     * 可以通过人工卡点。
     */
    PassPipelineValidate(query: PassPipelineValidateRequest): Promise<PassPipelineValidateResponse>;
    /**
     * 可以拒绝人工卡点。
     */
    RefusePipelineValidate(query: RefusePipelineValidateRequest): Promise<RefusePipelineValidateResponse>;
    /**
     * 可以查询任务运行日志。
     */
    LogPipelineJobRun(query: LogPipelineJobRunRequest): Promise<LogPipelineJobRunResponse>;
    /**
     * 可以继续部署单运行。
     */
    ResumeVMDeployOrder(query: ResumeVMDeployOrderRequest): Promise<ResumeVMDeployOrderResponse>;
    /**
     * 可以终止机器部署。
     */
    StopVMDeployOrder(query: StopVMDeployOrderRequest): Promise<StopVMDeployOrderResponse>;
    /**
     * 可以获取部署单详情。
     */
    GetVMDeployOrder(query: GetVMDeployOrderRequest): Promise<GetVMDeployOrderResponse>;
    /**
     * 可以重试机器部署。
     */
    RetryVMDeployMachine(query: RetryVMDeployMachineRequest): Promise<RetryVMDeployMachineResponse>;
    /**
     * 可以查询机器部署日志。
     */
    LogVMDeployMachine(query: LogVMDeployMachineRequest): Promise<LogVMDeployMachineResponse>;
    /**
     * 可以跳过机器部署。
     */
    SkipVMDeployMachine(query: SkipVMDeployMachineRequest): Promise<SkipVMDeployMachineResponse>;
    /**
     * 根据projectId获取项目基本信息。
     */
    GetProjectInfo(query: GetProjectInfoRequest): Promise<GetProjectInfoResponse>;
    /**
     * 获取项目成员。
     */
    ListProjectMembers(query: ListProjectMembersRequest): Promise<ListProjectMembersResponse>;
    /**
     * 创建标签。
     */
    CreateFlowTag(query: CreateFlowTagRequest): Promise<CreateFlowTagResponse>;
    /**
     * 创建标签分类。
     */
    CreateFlowTagGroup(query: CreateFlowTagGroupRequest): Promise<CreateFlowTagGroupResponse>;
    /**
     * 删除标签。
     */
    DeleteFlowTag(query: DeleteFlowTagRequest): Promise<DeleteFlowTagResponse>;
    /**
     * 删除标签分类。
     */
    DeleteFlowTagGroup(query: DeleteFlowTagGroupRequest): Promise<DeleteFlowTagGroupResponse>;
    /**
     * 获取标签分类。
     */
    GetFlowTagGroup(query: GetFlowTagGroupRequest): Promise<GetFlowTagGroupResponse>;
    /**
     * 获取流水线分类列表。
     */
    ListFlowTagGroups(query: ListFlowTagGroupsRequest): Promise<ListFlowTagGroupsResponse>;
    /**
     * 更新标签。
     */
    UpdateFlowTag(query: UpdateFlowTagRequest): Promise<UpdateFlowTagResponse>;
    /**
     * 更新流水线基本信息。
     */
    UpdatePipelineBaseInfo(query: UpdatePipelineBaseInfoRequest): Promise<UpdatePipelineBaseInfoResponse>;
    /**
     * 更新标签分类。
     */
    UpdateFlowTagGroup(query: UpdateFlowTagGroupRequest): Promise<UpdateFlowTagGroupResponse>;
    /**
     * 创建或者导入代码库。
     */
    CreateRepository(query: CreateRepositoryRequest): Promise<CreateRepositoryResponse>;
    /**
     * 按任务分类获取流水线执行的任务。
     */
    ListPipelineJobs(query: ListPipelineJobsRequest): Promise<ListPipelineJobsResponse>;
    /**
     * 获取流水线扫描报告临时下载地址。
     */
    GetPipelineScanReportUrl(query: GetPipelineScanReportUrlRequest): Promise<GetPipelineScanReportUrlResponse>;
    /**
     * 获取流水线构建产物下载地址。
     */
    GetPipelineArtifactUrl(query: GetPipelineArtifactUrlRequest): Promise<GetPipelineArtifactUrlResponse>;
    /**
     * 获取流水线任务的执行历史。
     */
    ListPipelineJobHistorys(query: ListPipelineJobHistorysRequest): Promise<ListPipelineJobHistorysResponse>;
    /**
     * 获取流水线emas构建产物临时下载地址。
     */
    GetPipelineEmasArtifactUrl(query: GetPipelineEmasArtifactUrlRequest): Promise<GetPipelineEmasArtifactUrlResponse>;
    /**
     * 可以创建项目的迭代。
     */
    CreateSprint(query: CreateSprintRequest): Promise<CreateSprintResponse>;
    /**
     * 添加项目成员。
     */
    UpdateProjectMember(query: UpdateProjectMemberRequest): Promise<UpdateProjectMemberResponse>;
    /**
     * 获取工作项工作流信息。
     */
    GetWorkItemWorkFlowInfo(query: GetWorkItemWorkFlowInfoRequest): Promise<GetWorkItemWorkFlowInfoResponse>;
    /**
     * 更新工作项信息。
     */
    UpdateWorkItem(query: UpdateWorkItemRequest): Promise<UpdateWorkItemResponse>;
    /**
     * 获取字段自定义选项。
     */
    GetCustomFieldOption(query: GetCustomFieldOptionRequest): Promise<GetCustomFieldOptionResponse>;
    /**
     * 可以删除项目。
     */
    DeleteProject(query: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    /**
     * 获取工作项的基本信息。
     */
    GetWorkItemInfo(query: GetWorkItemInfoRequest): Promise<GetWorkItemInfoResponse>;
    /**
     * 可以创建项目。
     */
    CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * 查询工作项动态信息。
     */
    GetWorkItemActivity(query: GetWorkItemActivityRequest): Promise<GetWorkItemActivityResponse>;
    /**
     * 创建工作项。
     */
    CreateWorkitem(query: CreateWorkitemRequest): Promise<CreateWorkitemResponse>;
    /**
     * 获取迭代详情。
     */
    GetSprintInfo(query: GetSprintInfoRequest): Promise<GetSprintInfoResponse>;
    /**
     * 获取项目模板列表。
     */
    ListProjectTemplates(query: ListProjectTemplatesRequest): Promise<ListProjectTemplatesResponse>;
    /**
     * 获取项目中的工作项类型。
     */
    ListProjectWorkitemTypes(query: ListProjectWorkitemTypesRequest): Promise<ListProjectWorkitemTypesResponse>;
    /**
     * 获取项目列表，支持条件搜索。
     */
    ListProjects(query: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * 获取迭代列表。
     */
    ListSprints(query: ListSprintsRequest): Promise<ListSprintsResponse>;
    /**
     * 获取工作项字段列表。
     */
    ListWorkItemAllFields(query: ListWorkItemAllFieldsRequest): Promise<ListWorkItemAllFieldsResponse>;
    /**
     * 获取工作项工作流状态列表。
     */
    ListWorkItemWorkFlowStatus(query: ListWorkItemWorkFlowStatusRequest): Promise<ListWorkItemWorkFlowStatusResponse>;
    /**
     * 获取工作项列表。
     */
    ListWorkitems(query: ListWorkitemsRequest): Promise<ListWorkitemsResponse>;
    /**
     * 创建代码库Webhook。
     */
    AddWebhook(query: AddWebhookRequest): Promise<AddWebhookResponse>;
    /**
     * 查询指定文件的最近一次Git提交。
     */
    GetFileLastCommit(query: GetFileLastCommitRequest): Promise<GetFileLastCommitResponse>;
    /**
     * 批量查询在代码仓库上配置的webhook记录，支持分页功能。
     */
    ListRepositoryWebhook(query: ListRepositoryWebhookRequest): Promise<ListRepositoryWebhookResponse>;
    /**
     * 根据企业标识（云效企业ID或者企业路径）获取Codeup侧的企业信息。
     */
    GetCodeupOrganization(query: GetCodeupOrganizationRequest): Promise<GetCodeupOrganizationResponse>;
    /**
     * 查询代码库成员列表，无分页。
     */
    ListRepositoryMemberWithInherited(query: ListRepositoryMemberWithInheritedRequest): Promise<ListRepositoryMemberWithInheritedResponse>;
    /**
     * 根据阿里云账号ID（aliyunPk）查询代码库成员信息。
     */
    GetProjectMember(query: GetProjectMemberRequest): Promise<GetProjectMemberResponse>;
    /**
     * 查询代码库列表，支持分页、排序功能，支持关键字搜索，支持归档条件过滤。
     */
    ListRepositories(query: ListRepositoriesRequest): Promise<ListRepositoriesResponse>;
    /**
     * 从其他平台导入到Codeup的仓库，触发Codeup仓库从远程同步。
     */
    TriggerRepositoryMirrorSync(query: TriggerRepositoryMirrorSyncRequest): Promise<TriggerRepositoryMirrorSyncResponse>;
    /**
     * 查询代码库，支持按代码库ID和代码库路径(Path)查询。
     */
    GetRepository(query: GetRepositoryRequest): Promise<GetRepositoryResponse>;
    /**
     * 增加代码库成员，以阿里云账号ID（aliyunPk）作为标识，支持以阿里云账号ID批量添加成员（aliyunPks以逗号作为分隔符号）。
     */
    AddRepositoryMember(query: AddRepositoryMemberRequest): Promise<AddRepositoryMemberResponse>;
    /**
     * 获取工作项工时明细列表。
     */
    ListWorkitemTime(query: ListWorkitemTimeRequest): Promise<ListWorkitemTimeResponse>;
    /**
     * 创建OAuthToken（此接口内测中，暂不支持使用）。
     */
    CreateOAuthToken(query: CreateOAuthTokenRequest): Promise<CreateOAuthTokenResponse>;
    /**
     * 将流水线加入流水线分组。
     */
    JoinPipelineGroup(query: JoinPipelineGroupRequest): Promise<JoinPipelineGroupResponse>;
    /**
     * 创建流水线分组。
     */
    CreatePipelineGroup(query: CreatePipelineGroupRequest): Promise<CreatePipelineGroupResponse>;
    /**
     * 删除流水线分组。
     */
    DeletePipelineGroup(query: DeletePipelineGroupRequest): Promise<DeletePipelineGroupResponse>;
    /**
     * 获取流水线分组。
     */
    GetPipelineGroup(query: GetPipelineGroupRequest): Promise<GetPipelineGroupResponse>;
    /**
     * 更新流水线分组。
     */
    UpdatePipelineGroup(query: UpdatePipelineGroupRequest): Promise<UpdatePipelineGroupResponse>;
    /**
     * 获取流水线分组下流水线列表。
     */
    ListPipelineGroupPipelines(query: ListPipelineGroupPipelinesRequest): Promise<ListPipelineGroupPipelinesResponse>;
    /**
     * 获取流水线分组列表。
     */
    ListPipelineGroups(query: ListPipelineGroupsRequest): Promise<ListPipelineGroupsResponse>;
    /**
     * 根据代码库ID（repositoryId）和SHA值（sha），可选上下文行数参数（contextLine），获取到当前代码库中单个提交的提交内容。
     */
    ListRepositoryCommitDiff(query: ListRepositoryCommitDiffRequest): Promise<ListRepositoryCommitDiffResponse>;
    /**
     * 根据代码库ID（repositoryId）、用户ID（userId）以及更新内容，更改当前代码库下对应成员的权限或角色。
     * 注意：后续会将用户ID统一为阿里云账号ID（aliyunPk），请注意关注。
     */
    UpdateRepositoryMember(query: UpdateRepositoryMemberRequest): Promise<UpdateRepositoryMemberResponse>;
    /**
     * 更改保护分支设置。 支持对于保护分支规则的详细设置，包括分支、推送规则、合并规则、要求合并前通过代码评审以及要求合并前通过自动化状态检查。
     */
    UpdateProtectedBranches(query: UpdateProtectedBranchesRequest): Promise<UpdateProtectedBranchesResponse>;
    /**
     * 更新代码库基本信息、常用设置。
     */
    UpdateRepository(query: UpdateRepositoryRequest): Promise<UpdateRepositoryResponse>;
    /**
     * 删除代码库指定文件。
     */
    DeleteFile(query: DeleteFileRequest): Promise<DeleteFileResponse>;
    /**
     * 修改代码库某个文件。
     */
    UpdateFile(query: UpdateFileRequest): Promise<UpdateFileResponse>;
    /**
     * 查询代码库的文件树。
     */
    ListRepositoryTree(query: ListRepositoryTreeRequest): Promise<ListRepositoryTreeResponse>;
    /**
     * 查询代码库某个文件的具体内容。
     */
    GetFileBlobs(query: GetFileBlobsRequest): Promise<GetFileBlobsResponse>;
    /**
     * 删除代码库。（为了保证规范性，必须填写删除理由）。
     */
    DeleteRepository(query: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse>;
    /**
     * 创建代码库文件。
     */
    CreateFile(query: CreateFileRequest): Promise<CreateFileResponse>;
    /**
     * 删除工作项下单个评论。
     */
    DeleteWorkitemComment(query: DeleteWorkitemCommentRequest): Promise<DeleteWorkitemCommentResponse>;
    /**
     * 创建工作项评论。
     */
    CreateWorkitemComment(query: CreateWorkitemCommentRequest): Promise<CreateWorkitemCommentResponse>;
    /**
     * 删除当前工作项所有评论。
     */
    DeleteWorkitemAllComment(query: DeleteWorkitemAllCommentRequest): Promise<DeleteWorkitemAllCommentResponse>;
    /**
     * 获得工作项的评论列表。
     */
    GetWorkitemCommentList(query: GetWorkitemCommentListRequest): Promise<GetWorkitemCommentListResponse>;
    /**
     * 创建预计工时接口，登记一个工作项预计花费工时信息。
     */
    CreateWorkitemEstimate(query: CreateWorkitemEstimateRequest): Promise<CreateWorkitemEstimateResponse>;
    /**
     * 更新工作项评论。
     */
    UpdateWorkitemComment(query: UpdateWorkitemCommentRequest): Promise<UpdateWorkitemCommentResponse>;
    /**
     * 获得工作项关联项。
     */
    GetWorkitemRelations(query: GetWorkitemRelationsRequest): Promise<GetWorkitemRelationsResponse>;
    /**
     * 登记实际工时。
     */
    CreateWorkitemRecord(query: CreateWorkitemRecordRequest): Promise<CreateWorkitemRecordResponse>;
    /**
     * 获取工时类型列表。
     */
    GetWorkitemTimeTypeList(query: GetWorkitemTimeTypeListRequest): Promise<GetWorkitemTimeTypeListResponse>;
    /**
     * 删除代码库分支。
     */
    DeleteBranch(query: DeleteBranchRequest): Promise<DeleteBranchResponse>;
    /**
     * 创建代码库分支。
     */
    CreateBranch(query: CreateBranchRequest): Promise<CreateBranchResponse>;
    /**
     * 查询代码库保护分支列表。
     */
    ListProtectedBranches(query: ListProtectedBranchesRequest): Promise<ListProtectedBranchesResponse>;
    /**
     * 查询代码库分支列表。
     */
    ListRepositoryBranches(query: ListRepositoryBranchesRequest): Promise<ListRepositoryBranchesResponse>;
    /**
     * 查询代码库分支的信息。
     */
    GetBranchInfo(query: GetBranchInfoRequest): Promise<GetBranchInfoResponse>;
    /**
     * 删除代码库保护分支。
     */
    DeleteProtectedBranch(query: DeleteProtectedBranchRequest): Promise<DeleteProtectedBranchResponse>;
    /**
     * 删除代码库下的Webhook。
     */
    DeleteRepositoryWebhook(query: DeleteRepositoryWebhookRequest): Promise<DeleteRepositoryWebhookResponse>;
    /**
     * 查询代码库的单个提交信息。
     */
    GetRepositoryCommit(query: GetRepositoryCommitRequest): Promise<GetRepositoryCommitResponse>;
    /**
     * 查询代码库的提交历史信息，支持滚动分页。
     */
    ListRepositoryCommits(query: ListRepositoryCommitsRequest): Promise<ListRepositoryCommitsResponse>;
    /**
     * 创建代码库保护分支。
     */
    CreateProtectdBranch(query: CreateProtectdBranchRequest): Promise<CreateProtectdBranchResponse>;
    /**
     * 获取流水线关联列表
     */
    ListPipelineRelations(query: ListPipelineRelationsRequest): Promise<ListPipelineRelationsResponse>;
    /**
     * 删除流水线关联
     */
    DeletePipelineRelations(query: DeletePipelineRelationsRequest): Promise<DeletePipelineRelationsResponse>;
    /**
     * 添加流水线关联
     */
    AddPipelineRelations(query: AddPipelineRelationsRequest): Promise<AddPipelineRelationsResponse>;
    /**
     * 创建代码组。
     */
    CreateRepositoryGroup(query: CreateRepositoryGroupRequest): Promise<CreateRepositoryGroupResponse>;
    /**
     * 根据阿里云账号ID来移除某个指定的代码库成员。
     */
    DeleteRepositoryMember(query: DeleteRepositoryMemberRequest): Promise<DeleteRepositoryMemberResponse>;
    /**
     * 查询指定的某个代码组信息。
     */
    GetGroupDetail(query: GetGroupDetailRequest): Promise<GetGroupDetailResponse>;
    /**
     * 根据代码组ID查询其组下的代码库列表。
     */
    ListGroupRepositories(query: ListGroupRepositoriesRequest): Promise<ListGroupRepositoriesResponse>;
    /**
     * 删除某个指定的代码库。
     */
    DeleteRepositoryGroup(query: DeleteRepositoryGroupRequest): Promise<DeleteRepositoryGroupResponse>;
    /**
     * 删除代码库标签（Tag）。
     */
    DeleteTag(query: DeleteTagRequest): Promise<DeleteTagResponse>;
    /**
     * 创建代码库标签（Tag）。
     */
    CreateTag(query: CreateTagRequest): Promise<CreateTagResponse>;
    /**
     * 查询当前用户的企业列表。
     */
    ListOrganizations(query: ListOrganizationsRequest): Promise<ListOrganizationsResponse>;
    /**
     * 该接口用于获取Codeup侧的用户信息。
     */
    GetUserInfo(query: GetUserInfoRequest): Promise<GetUserInfoResponse>;
    /**
     * 查询代码库的标签（Tag）列表。
     */
    ListRepositoryTags(query: ListRepositoryTagsRequest): Promise<ListRepositoryTagsResponse>;
    /**
     * 查询代码库的单个标签信息。
     */
    GetRepositoryTag(query: GetRepositoryTagRequest): Promise<GetRepositoryTagResponse>;
    /**
     * 查询代码组列表，支持分页、按创建时间和更新时间排序以及关键字搜索。
     */
    ListRepositoryGroups(query: ListRepositoryGroupsRequest): Promise<ListRepositoryGroupsResponse>;
    /**
     * 在代码库中创建新的部署密钥。
     */
    CreateDeployKey(query: CreateDeployKeyRequest): Promise<CreateDeployKeyResponse>;
    /**
     * 启用代码库中已有的部署密钥。
     */
    EnableDeployKey(query: EnableDeployKeyRequest): Promise<EnableDeployKeyResponse>;
    /**
     * 查询代码组下的成员列表，无分页，无排序。
     */
    ListGroupMember(query: ListGroupMemberRequest): Promise<ListGroupMemberResponse>;
    /**
     * 修改组成员，主要是成员的权限修改。
     */
    UpdateGroupMember(query: UpdateGroupMemberRequest): Promise<UpdateGroupMemberResponse>;
    /**
     * 根据阿里云账号ID来删除指定代码组下的某个成员。
     */
    DeleteGroupMember(query: DeleteGroupMemberRequest): Promise<DeleteGroupMemberResponse>;
    /**
     * 添加代码组的成员。
     */
    AddGroupMember(query: AddGroupMemberRequest): Promise<AddGroupMemberResponse>;
    /**
     * 根据筛选条件搜索相应的代码片段。
     */
    ListSearchSourceCode(query: ListSearchSourceCodeRequest): Promise<ListSearchSourceCodeResponse>;
    /**
     * 根据查询条件搜索代码仓库数据。
     */
    ListSearchRepository(query: ListSearchRepositoryRequest): Promise<ListSearchRepositoryResponse>;
    /**
     * 根据文档ID和关键字获取到预览代码片段。
     */
    GetSearchCodePreview(query: GetSearchCodePreviewRequest): Promise<GetSearchCodePreviewResponse>;
    /**
     * 打开或关闭指定代码库的推送评审设置（需要有管理员权限）。
     */
    UpdatePushReviewOnOff(query: UpdatePushReviewOnOffRequest): Promise<UpdatePushReviewOnOffResponse>;
    /**
     * 根据筛选条件搜索提交的相关数据。
     */
    ListSearchCommit(query: ListSearchCommitRequest): Promise<ListSearchCommitResponse>;
    /**
     * 比较两个commit（branch和tag本质也是commit），返回两个commit之间的commits列表以及diff内容（可从diff内容中获取到文件变更树）。
     */
    GetCompareDetail(query: GetCompareDetailRequest): Promise<GetCompareDetailResponse>;
    /**
     * 更新工作项字段，可以支持批量更新多个字段。
     */
    UpdateWorkitemField(query: UpdateWorkitemFieldRequest): Promise<UpdateWorkitemFieldResponse>;
    /**
     * 删除工作项。
     */
    DeleteWorkitem(query: DeleteWorkitemRequest): Promise<DeleteWorkitemResponse>;
    /**
     * 更新单个代码组信息，以pathWithNamespace作为唯一标识。
     */
    UpdateGroup(query: UpdateGroupRequest): Promise<UpdateGroupResponse>;
    /**
     * 更新测试计划中的用例的执行状态和执行人
     */
    UpdateTestResult(query: UpdateTestResultRequest): Promise<UpdateTestResultResponse>;
    /**
     * 更新用例库测试用例属性，包括标题，目录，自定义字段信息等，但是不能用来更新测试用例的测试内容相关信息
     */
    UpdateTestCase(query: UpdateTestCaseRequest): Promise<UpdateTestCaseResponse>;
    /**
     * 获取测试计划中测试用例列表，支持使用条件过滤
     */
    GetTestResultList(query: GetTestResultListRequest): Promise<GetTestResultListResponse>;
    /**
     * 用例库中创建测试用例
     */
    CreateTestCase(query: CreateTestCaseRequest): Promise<CreateTestCaseResponse>;
    /**
     * 获取测试用例全部字段
     */
    ListTestCaseFields(query: ListTestCaseFieldsRequest): Promise<ListTestCaseFieldsResponse>;
    /**
     * 获取测试用例库中的测试用例列表，支持条件过滤
     */
    GetTestcaseList(query: GetTestcaseListRequest): Promise<GetTestcaseListResponse>;
    /**
     * 创建当前用户的SSH-Key密钥。
     */
    CreateUserKey(query: CreateUserKeyRequest): Promise<CreateUserKeyResponse>;
    /**
     * 为当前用户删除指定的SSH密钥。
     */
    DeleteUserKey(query: DeleteUserKeyRequest): Promise<DeleteUserKeyResponse>;
    /**
     * 查询当前用户的SSH密钥列表。
     */
    ListUserKeys(query: ListUserKeysRequest): Promise<ListUserKeysResponse>;
    /**
     * 创建流水线API，支持创建YAML化流水线。
     */
    CreatePipeline(query: CreatePipelineRequest): Promise<CreatePipelineResponse>;
    /**
     * 只支持更新YAML化流水线。
     */
    UpdatePipeline(query: UpdatePipelineRequest): Promise<UpdatePipelineResponse>;
    /**
     * 将文件作为工作项的附件，这是工作项上传附件的第三步，前两步可以查看 GetWorkitemAttachmentCreatemeta(获取工作项上传附件的信息) 接口的描述。
     */
    WorkitemAttachmentCreate(query: WorkitemAttachmentCreateRequest): Promise<WorkitemAttachmentCreateResponse>;
    /**
     * 获取工作项附件上传的信息接口，这是工作项上传附件中的第一步。整个过程需要完成三步，
     * 第一步，调用该接口获取工作项的上传信息。
     * 第二步，根据该接口的返回信息将文件上传到oss中。
     * 第三步，将文件作为工作项的附件，对应的接口为 WorkitemAttachmentCreate(关联文件为工作项的附件)
     * 第二步上传文件时可以参考oss的文档：https://help.aliyun.com/document_detail/31926.html，
     * 注意请求为POST方法，数据是表单提交的方式。
     */
    GetWorkitemAttachmentCreatemeta(query: GetWorkitemAttachmentCreatemetaRequest): Promise<GetWorkitemAttachmentCreatemetaResponse>;
    /**
     * 创建工作项，可以用于创建项目下的工作项，包含（需求、缺陷、任务、风险、主题等）。
     */
    CreateWorkitemV2(query: CreateWorkitemV2Request): Promise<CreateWorkitemV2Response>;
    /**
     * 获取指定用户名下的有权限的代码库和代码组信息，以及角色信息，支持分页，以用户维度进行分页。请注意，仅限企业管理员以上权限的用户可调用。
     */
    ListUserResources(query: ListUserResourcesRequest): Promise<ListUserResourcesResponse>;
    /**
     * 转移代码库至指定的代码组，其中groupId和repositoryId均可使用全路径。
     */
    TransferRepository(query: TransferRepositoryRequest): Promise<TransferRepositoryResponse>;
    /**
     * 创建服务连接
     */
    CreateServiceConnection(query: CreateServiceConnectionRequest): Promise<CreateServiceConnectionResponse>;
    /**
     * 获取服务证书列表
     */
    ListServiceCredentials(query: ListServiceCredentialsRequest): Promise<ListServiceCredentialsResponse>;
    /**
     * 创建服务授权
     */
    CreateServiceAuth(query: CreateServiceAuthRequest): Promise<CreateServiceAuthResponse>;
    /**
     * 创建用户名密码类型的证书
     */
    CreateServiceCredential(query: CreateServiceCredentialRequest): Promise<CreateServiceCredentialResponse>;
    /**
     * 获取服务授权列表
     */
    ListServiceAuths(query: ListServiceAuthsRequest): Promise<ListServiceAuthsResponse>;
    /**
     * 获取工作项预计工时登记列表
     */
    ListWorkitemEstimate(query: ListWorkitemEstimateRequest): Promise<ListWorkitemEstimateResponse>;
    /**
     * 更新项目自身属性与自定义字段，以及项目状态
     */
    UpdateProjectField(query: UpdateProjectFieldRequest): Promise<UpdateProjectFieldResponse>;
    /**
     * 更新合并请求的干系人，包含评审人、订阅人。
     */
    UpdateMergeRequestPersonnel(query: UpdateMergeRequestPersonnelRequest): Promise<UpdateMergeRequestPersonnelResponse>;
    /**
     * 该API仅支持修改合并请求的标题和描述信息。
     */
    UpdateMergeRequest(query: UpdateMergeRequestRequest): Promise<UpdateMergeRequestResponse>;
    /**
     * 对关闭的合并请求重新打开，其中已合并的合并请求无法执行重新代开操作。
     */
    ReopenMergeRequest(query: ReopenMergeRequestRequest): Promise<ReopenMergeRequestResponse>;
    /**
     * 合并当前合并请求。
     */
    MergeMergeRequest(query: MergeMergeRequestRequest): Promise<MergeMergeRequestResponse>;
    /**
     * 评审合并请求，发表评审意见。
     */
    ReviewMergeRequest(query: ReviewMergeRequestRequest): Promise<ReviewMergeRequestResponse>;
    /**
     * 创建合并请求。
     */
    CreateMergeRequest(query: CreateMergeRequestRequest): Promise<CreateMergeRequestResponse>;
    /**
     * 查询单个合并请求详情。
     */
    GetMergeRequest(query: GetMergeRequestRequest): Promise<GetMergeRequestResponse>;
    /**
     * 查询合并请求列表，支持分页、排序和筛选。
     * 该API能同时查询旧版和新版的合并请求，若没有使用过旧版合并请求，或者已经没有旧版合并请求数据，那么直接忽略返回信息中跟旧版合并请求相关的字段。
     */
    ListMergeRequests(query: ListMergeRequestsRequest): Promise<ListMergeRequestsResponse>;
    /**
     * 关闭指定的合并请求。
     */
    CloseMergeRequest(query: CloseMergeRequestRequest): Promise<CloseMergeRequestResponse>;
    /**
     * 更新指定的推送规则，更新方式为覆盖式更新，若是新增规则项，需要确保原有的也存在，否则会被新内容覆盖。
     */
    UpdatePushRule(query: UpdatePushRuleRequest): Promise<UpdatePushRuleResponse>;
    /**
     * 创建推送规则。
     */
    CreatePushRule(query: CreatePushRuleRequest): Promise<CreatePushRuleResponse>;
    /**
     * 查询指定的推送规则。
     */
    GetPushRule(query: GetPushRuleRequest): Promise<GetPushRuleResponse>;
    /**
     * 查询指定代码库下的推送规则列表，无分页。
     */
    ListPushRules(query: ListPushRulesRequest): Promise<ListPushRulesResponse>;
    /**
     * 删除指定的推送规则。
     */
    DeletePushRule(query: DeletePushRuleRequest): Promise<DeletePushRuleResponse>;
    /**
     * 根据代码组全路径查询代码组信息。
     */
    GetGroupByPath(query: GetGroupByPathRequest): Promise<GetGroupByPathResponse>;
    /**
     * 获取工作项附件列表。
     */
    ListWorkitemAttachments(query: ListWorkitemAttachmentsRequest): Promise<ListWorkitemAttachmentsResponse>;
    /**
     * 给指定的Commit添加一条提交状态记录。
     */
    CreateCommitStatus(query: CreateCommitStatusRequest): Promise<CreateCommitStatusResponse>;
    /**
     * 查询合并请求变更文件的已读情况，主要获取变更文件的已读人列表。
     */
    ListMergeRequestFilesReads(query: ListMergeRequestFilesReadsRequest): Promise<ListMergeRequestFilesReadsResponse>;
    /**
     * 查询提交状态列表，支持分页。
     */
    ListCommitStatuses(query: ListCommitStatusesRequest): Promise<ListCommitStatusesResponse>;
    /**
     * 查询合并请求的Diff统计信息，包括总变更文件树、总新增行、总删减行以及每个文件的新增行与删减行。
     */
    GetMergeRequestChangeTree(query: GetMergeRequestChangeTreeRequest): Promise<GetMergeRequestChangeTreeResponse>;
    /**
     * 查询合并请求中的评论列表，不分页。其中，评论仅支持三级结构。
     */
    ListMergeRequestComments(query: ListMergeRequestCommentsRequest): Promise<ListMergeRequestCommentsResponse>;
    /**
     * 查询合并请求下的所有版本信息，包括合并源的版本和合并目标的版本。
     */
    ListMergeRequestPatchSets(query: ListMergeRequestPatchSetsRequest): Promise<ListMergeRequestPatchSetsResponse>;
    /**
     * 删除应用成员。
     */
    DeleteAppMember(query: DeleteAppMemberRequest): Promise<DeleteAppMemberResponse>;
    /**
     * 更新应用成员。
     */
    UpdateAppMember(query: UpdateAppMemberRequest): Promise<UpdateAppMemberResponse>;
    /**
     * 创建应用成员。
     */
    CreateAppMembers(query: CreateAppMembersRequest): Promise<CreateAppMembersResponse>;
    /**
     * 查询应用详情。
     */
    GetApplication(query: GetApplicationRequest): Promise<GetApplicationResponse>;
    /**
     * 查询应用列表信息。
     */
    ListApplications(query: ListApplicationsRequest): Promise<ListApplicationsResponse>;
    /**
     * 更新应用的拥有者。
     */
    UpdateApplication(query: UpdateApplicationRequest): Promise<UpdateApplicationResponse>;
    /**
     * 查询应用成员列表。
     */
    ListApplicationMembers(query: ListApplicationMembersRequest): Promise<ListApplicationMembersResponse>;
    /**
     * 获取工作项的文件信息，例如工作项的描述中的图片信息。
     */
    GetWorkitemFile(query: GetWorkitemFileRequest): Promise<GetWorkitemFileResponse>;
    /**
     * 创建代码库类标。
     */
    CreateProjectLabel(query: CreateProjectLabelRequest): Promise<CreateProjectLabelResponse>;
    /**
     * 查询指定合并请求下关联的类标列表。
     */
    ListMergeRequestLabels(query: ListMergeRequestLabelsRequest): Promise<ListMergeRequestLabelsResponse>;
    /**
     * 删除代码库类标。
     */
    DeleteProjectLabel(query: DeleteProjectLabelRequest): Promise<DeleteProjectLabelResponse>;
    /**
     * 更新代码库类标信息。
     */
    UpdateProjectLabel(query: UpdateProjectLabelRequest): Promise<UpdateProjectLabelResponse>;
    /**
     * 将类标（Label）关联到合并请求中。
     */
    LinkMergeRequestLabel(query: LinkMergeRequestLabelRequest): Promise<LinkMergeRequestLabelResponse>;
    /**
     * 查询代码库类标列表，支持分页、字段排序以及关键字搜索。
     */
    ListProjectLabels(query: ListProjectLabelsRequest): Promise<ListProjectLabelsResponse>;
    /**
     * 查询单个check run记录。
     */
    GetCheckRun(query: GetCheckRunRequest): Promise<GetCheckRunResponse>;
    /**
     * 查询check run列表，支持分页功能。
     */
    ListCheckRuns(query: ListCheckRunsRequest): Promise<ListCheckRunsResponse>;
    /**
     * 添加检查运行记录，仅创建。
     */
    CreateCheckRun(query: CreateCheckRunRequest): Promise<CreateCheckRunResponse>;
    /**
     * 更新check run记录信息，须当前身份与check run的写入人身份一致，才能进行更新。
     */
    UpdateCheckRun(query: UpdateCheckRunRequest): Promise<UpdateCheckRunResponse>;
    /**
     * 此API用于云效通义灵码运营相关活动使用
     */
    ListUserDrawRecordByPk(query: ListUserDrawRecordByPkRequest): Promise<ListUserDrawRecordByPkResponse>;
    /**
     * 查询当前账号加入的企业列表。
     */
    ListJoinedOrganizations(query: ListJoinedOrganizationsRequest): Promise<ListJoinedOrganizationsResponse>;
    /**
     * 创建一个提交，并能够变更多个文件。一般在日常开发中，一个提交通常会有多个文件变动，当前API就是应用于该情况。
     */
    CreateCommitWithMultipleFiles(query: CreateCommitWithMultipleFilesRequest): Promise<CreateCommitWithMultipleFilesResponse>;
    /**
     * 创建合并请求评论，可创建整体评论和行内评论。创建的评论层级一般不要超过3层。
     */
    CreateComment(query: CreateCommentRequest): Promise<CreateCommentResponse>;
    /**
     * 获取效能洞察中指定企业的tag_ref表数据
     */
    ExportInsightTagRef(query: ExportInsightTagRefRequest): Promise<ExportInsightTagRefResponse>;
    /**
     * 获取效能洞察中指定企业的workitem_activity表数据
     */
    ExportWorkitemActivity(query: ExportWorkitemActivityRequest): Promise<ExportWorkitemActivityResponse>;
    /**
     * 获取效能洞察中指定企业的expected_work_time表数据
     */
    ExportInsightExpectedWorkTime(query: ExportInsightExpectedWorkTimeRequest): Promise<ExportInsightExpectedWorkTimeResponse>;
    /**
     * 获取效能洞察中指定企业的workitem_version表数据
     */
    ExportInsightWorkitemVersion(query: ExportInsightWorkitemVersionRequest): Promise<ExportInsightWorkitemVersionResponse>;
    /**
     * 获取效能洞察中指定企业的workitem_time表数据
     */
    ExportInsightWorkTime(query: ExportInsightWorkTimeRequest): Promise<ExportInsightWorkTimeResponse>;
    /**
     * 获取效能洞察中指定企业的space_ref表数据
     */
    ExportInsightSpaceRef(query: ExportInsightSpaceRefRequest): Promise<ExportInsightSpaceRefResponse>;
    /**
     * 获取效能洞察中指定企业的workitem_status表 join worktem_defect_extra表数据
     */
    ExportInsightWorkitemStatusJoinWorkitemDefectExtra(query: ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest): Promise<ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse>;
    /**
     * 获取效能洞察中指定企业的sprint表数据
     */
    ExportInsightSprint(query: ExportInsightSprintRequest): Promise<ExportInsightSprintResponse>;
    /**
     * 获取效能洞察中指定企业的space表数据
     */
    ExportInsightSpace(query: ExportInsightSpaceRequest): Promise<ExportInsightSpaceResponse>;
    /**
     * 获取效能洞察中指定企业的workitem_status表数据
     */
    ExportInsightWorkitemStatus(query: ExportInsightWorkitemStatusRequest): Promise<ExportInsightWorkitemStatusResponse>;
    /**
     * 获取效能洞察中指定企业的custom_value表数据
     */
    ExportInsightCustomValue(query: ExportInsightCustomValueRequest): Promise<ExportInsightCustomValueResponse>;
    /**
     * 获取效能洞察中指定企业的field表数据
     */
    ExportInsightField(query: ExportInsightFieldRequest): Promise<ExportInsightFieldResponse>;
    /**
     * 批量查询研发阶段执行记录。
     */
    ListAppReleaseStageExecutions(query: ListAppReleaseStageExecutionsRequest): Promise<ListAppReleaseStageExecutionsResponse>;
    /**
     * 查找应用下所有的研发流程。
     */
    ListAllReleaseWorkflows(query: ListAllReleaseWorkflowsRequest): Promise<ListAllReleaseWorkflowsResponse>;
    /**
     * 查询研发阶段执行记录集成变更信息。
     */
    ListAppReleaseStageExecutionIntegratedMetadata(query: ListAppReleaseStageExecutionIntegratedMetadataRequest): Promise<ListAppReleaseStageExecutionIntegratedMetadataResponse>;
    /**
     * 更新企业成员信息。
     */
    UpdateOrganizationMember(query: UpdateOrganizationMemberRequest): Promise<UpdateOrganizationMemberResponse>;
}
export default DEVOPS;
