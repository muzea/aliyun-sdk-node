import { AnswerCallRequest } from "./AnswerCall/req";
import { AnswerCallResponse } from "./AnswerCall/res";
import { BargeInCallRequest } from "./BargeInCall/req";
import { BargeInCallResponse } from "./BargeInCall/res";
import { BlindTransferRequest } from "./BlindTransfer/req";
import { BlindTransferResponse } from "./BlindTransfer/res";
import { ChangeWorkModeRequest } from "./ChangeWorkMode/req";
import { ChangeWorkModeResponse } from "./ChangeWorkMode/res";
import { CancelAttendedTransferRequest } from "./CancelAttendedTransfer/req";
import { CancelAttendedTransferResponse } from "./CancelAttendedTransfer/res";
import { CompleteAttendedTransferRequest } from "./CompleteAttendedTransfer/req";
import { CompleteAttendedTransferResponse } from "./CompleteAttendedTransfer/res";
import { GetLoginDetailsRequest } from "./GetLoginDetails/req";
import { GetLoginDetailsResponse } from "./GetLoginDetails/res";
import { GetNumberLocationRequest } from "./GetNumberLocation/req";
import { GetNumberLocationResponse } from "./GetNumberLocation/res";
import { GetTurnCredentialsRequest } from "./GetTurnCredentials/req";
import { GetTurnCredentialsResponse } from "./GetTurnCredentials/res";
import { GetTurnServerListRequest } from "./GetTurnServerList/req";
import { GetTurnServerListResponse } from "./GetTurnServerList/res";
import { HoldCallRequest } from "./HoldCall/req";
import { HoldCallResponse } from "./HoldCall/res";
import { InitiateAttendedTransferRequest } from "./InitiateAttendedTransfer/req";
import { InitiateAttendedTransferResponse } from "./InitiateAttendedTransfer/res";
import { InterceptCallRequest } from "./InterceptCall/req";
import { InterceptCallResponse } from "./InterceptCall/res";
import { LaunchAuthenticationRequest } from "./LaunchAuthentication/req";
import { LaunchAuthenticationResponse } from "./LaunchAuthentication/res";
import { LaunchSurveyRequest } from "./LaunchSurvey/req";
import { LaunchSurveyResponse } from "./LaunchSurvey/res";
import { ListBriefSkillGroupsRequest } from "./ListBriefSkillGroups/req";
import { ListBriefSkillGroupsResponse } from "./ListBriefSkillGroups/res";
import { ListConfigItemsRequest } from "./ListConfigItems/req";
import { ListConfigItemsResponse } from "./ListConfigItems/res";
import { ListDevicesRequest } from "./ListDevices/req";
import { ListDevicesResponse } from "./ListDevices/res";
import { ListOutboundNumbersOfUserRequest } from "./ListOutboundNumbersOfUser/req";
import { ListOutboundNumbersOfUserResponse } from "./ListOutboundNumbersOfUser/res";
import { ListSkillLevelsOfUserRequest } from "./ListSkillLevelsOfUser/req";
import { ListSkillLevelsOfUserResponse } from "./ListSkillLevelsOfUser/res";
import { MonitorCallRequest } from "./MonitorCall/req";
import { MonitorCallResponse } from "./MonitorCall/res";
import { MuteCallRequest } from "./MuteCall/req";
import { MuteCallResponse } from "./MuteCall/res";
import { PickOutboundNumbersRequest } from "./PickOutboundNumbers/req";
import { PickOutboundNumbersResponse } from "./PickOutboundNumbers/res";
import { PollUserStatusRequest } from "./PollUserStatus/req";
import { PollUserStatusResponse } from "./PollUserStatus/res";
import { ReadyForServiceRequest } from "./ReadyForService/req";
import { ReadyForServiceResponse } from "./ReadyForService/res";
import { RegisterDeviceRequest } from "./RegisterDevice/req";
import { RegisterDeviceResponse } from "./RegisterDevice/res";
import { ReleaseCallRequest } from "./ReleaseCall/req";
import { ReleaseCallResponse } from "./ReleaseCall/res";
import { ResetAgentStateRequest } from "./ResetAgentState/req";
import { ResetAgentStateResponse } from "./ResetAgentState/res";
import { RetrieveCallRequest } from "./RetrieveCall/req";
import { RetrieveCallResponse } from "./RetrieveCall/res";
import { SendDtmfSignalingRequest } from "./SendDtmfSignaling/req";
import { SendDtmfSignalingResponse } from "./SendDtmfSignaling/res";
import { SignInGroupRequest } from "./SignInGroup/req";
import { SignInGroupResponse } from "./SignInGroup/res";
import { UnmuteCallRequest } from "./UnmuteCall/req";
import { UnmuteCallResponse } from "./UnmuteCall/res";
import { ListPrivilegesOfUserRequest } from "./ListPrivilegesOfUser/req";
import { ListPrivilegesOfUserResponse } from "./ListPrivilegesOfUser/res";
import { MakeCallRequest } from "./MakeCall/req";
import { MakeCallResponse } from "./MakeCall/res";
import { TakeBreakRequest } from "./TakeBreak/req";
import { TakeBreakResponse } from "./TakeBreak/res";
import { GetMonoRecordingRequest } from "./GetMonoRecording/req";
import { GetMonoRecordingResponse } from "./GetMonoRecording/res";
import { GetMultiChannelRecordingRequest } from "./GetMultiChannelRecording/req";
import { GetMultiChannelRecordingResponse } from "./GetMultiChannelRecording/res";
import { ListCallDetailRecordsRequest } from "./ListCallDetailRecords/req";
import { ListCallDetailRecordsResponse } from "./ListCallDetailRecords/res";
import { ListHistoricalAgentReportRequest } from "./ListHistoricalAgentReport/req";
import { ListHistoricalAgentReportResponse } from "./ListHistoricalAgentReport/res";
import { ListRealtimeAgentStatesRequest } from "./ListRealtimeAgentStates/req";
import { ListRealtimeAgentStatesResponse } from "./ListRealtimeAgentStates/res";
import { ListRecentCallDetailRecordsRequest } from "./ListRecentCallDetailRecords/req";
import { ListRecentCallDetailRecordsResponse } from "./ListRecentCallDetailRecords/res";
import { SignOutGroupRequest } from "./SignOutGroup/req";
import { SignOutGroupResponse } from "./SignOutGroup/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { AddPhoneNumberToSkillGroupsRequest } from "./AddPhoneNumberToSkillGroups/req";
import { AddPhoneNumberToSkillGroupsResponse } from "./AddPhoneNumberToSkillGroups/res";
import { AddNumbersToSkillGroupRequest } from "./AddNumbersToSkillGroup/req";
import { AddNumbersToSkillGroupResponse } from "./AddNumbersToSkillGroup/res";
import { AddSkillGroupsToUserRequest } from "./AddSkillGroupsToUser/req";
import { AddSkillGroupsToUserResponse } from "./AddSkillGroupsToUser/res";
import { CreateSkillGroupRequest } from "./CreateSkillGroup/req";
import { CreateSkillGroupResponse } from "./CreateSkillGroup/res";
import { DeleteSkillGroupRequest } from "./DeleteSkillGroup/req";
import { DeleteSkillGroupResponse } from "./DeleteSkillGroup/res";
import { ListContactFlowsRequest } from "./ListContactFlows/req";
import { ListContactFlowsResponse } from "./ListContactFlows/res";
import { ListInstancesOfUserRequest } from "./ListInstancesOfUser/req";
import { ListInstancesOfUserResponse } from "./ListInstancesOfUser/res";
import { ListUserLevelsOfSkillGroupRequest } from "./ListUserLevelsOfSkillGroup/req";
import { ListUserLevelsOfSkillGroupResponse } from "./ListUserLevelsOfSkillGroup/res";
import { ModifyPhoneNumberRequest } from "./ModifyPhoneNumber/req";
import { ModifyPhoneNumberResponse } from "./ModifyPhoneNumber/res";
import { ModifySkillGroupRequest } from "./ModifySkillGroup/req";
import { ModifySkillGroupResponse } from "./ModifySkillGroup/res";
import { ModifyUserRequest } from "./ModifyUser/req";
import { ModifyUserResponse } from "./ModifyUser/res";
import { ModifyUserLevelsOfSkillGroupRequest } from "./ModifyUserLevelsOfSkillGroup/req";
import { ModifyUserLevelsOfSkillGroupResponse } from "./ModifyUserLevelsOfSkillGroup/res";
import { RemovePhoneNumbersFromSkillGroupRequest } from "./RemovePhoneNumbersFromSkillGroup/req";
import { RemovePhoneNumbersFromSkillGroupResponse } from "./RemovePhoneNumbersFromSkillGroup/res";
import { StartBack2BackCallRequest } from "./StartBack2BackCall/req";
import { StartBack2BackCallResponse } from "./StartBack2BackCall/res";
import { CoachCallRequest } from "./CoachCall/req";
import { CoachCallResponse } from "./CoachCall/res";
import { AddPersonalNumbersToUserRequest } from "./AddPersonalNumbersToUser/req";
import { AddPersonalNumbersToUserResponse } from "./AddPersonalNumbersToUser/res";
import { AddPhoneNumbersRequest } from "./AddPhoneNumbers/req";
import { AddPhoneNumbersResponse } from "./AddPhoneNumbers/res";
import { AddUsersToSkillGroupRequest } from "./AddUsersToSkillGroup/req";
import { AddUsersToSkillGroupResponse } from "./AddUsersToSkillGroup/res";
import { AssignUsersRequest } from "./AssignUsers/req";
import { AssignUsersResponse } from "./AssignUsers/res";
import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { ListPersonalNumbersOfUserRequest } from "./ListPersonalNumbersOfUser/req";
import { ListPersonalNumbersOfUserResponse } from "./ListPersonalNumbersOfUser/res";
import { ListPhoneNumbersRequest } from "./ListPhoneNumbers/req";
import { ListPhoneNumbersResponse } from "./ListPhoneNumbers/res";
import { ListPhoneNumbersOfSkillGroupRequest } from "./ListPhoneNumbersOfSkillGroup/req";
import { ListPhoneNumbersOfSkillGroupResponse } from "./ListPhoneNumbersOfSkillGroup/res";
import { ListRolesRequest } from "./ListRoles/req";
import { ListRolesResponse } from "./ListRoles/res";
import { ListSkillGroupsRequest } from "./ListSkillGroups/req";
import { ListSkillGroupsResponse } from "./ListSkillGroups/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { ModifySkillLevelsOfUserRequest } from "./ModifySkillLevelsOfUser/req";
import { ModifySkillLevelsOfUserResponse } from "./ModifySkillLevelsOfUser/res";
import { RemovePersonalNumbersFromUserRequest } from "./RemovePersonalNumbersFromUser/req";
import { RemovePersonalNumbersFromUserResponse } from "./RemovePersonalNumbersFromUser/res";
import { RemovePhoneNumberFromSkillGroupsRequest } from "./RemovePhoneNumberFromSkillGroups/req";
import { RemovePhoneNumberFromSkillGroupsResponse } from "./RemovePhoneNumberFromSkillGroups/res";
import { RemovePhoneNumbersRequest } from "./RemovePhoneNumbers/req";
import { RemovePhoneNumbersResponse } from "./RemovePhoneNumbers/res";
import { RemoveSkillGroupsFromUserRequest } from "./RemoveSkillGroupsFromUser/req";
import { RemoveSkillGroupsFromUserResponse } from "./RemoveSkillGroupsFromUser/res";
import { RemoveUsersRequest } from "./RemoveUsers/req";
import { RemoveUsersResponse } from "./RemoveUsers/res";
import { RemoveUsersFromSkillGroupRequest } from "./RemoveUsersFromSkillGroup/req";
import { RemoveUsersFromSkillGroupResponse } from "./RemoveUsersFromSkillGroup/res";
import { GetCallDetailRecordRequest } from "./GetCallDetailRecord/req";
import { GetCallDetailRecordResponse } from "./GetCallDetailRecord/res";
import { GetHistoricalInstanceReportRequest } from "./GetHistoricalInstanceReport/req";
import { GetHistoricalInstanceReportResponse } from "./GetHistoricalInstanceReport/res";
import { GetInstanceTrendingReportRequest } from "./GetInstanceTrendingReport/req";
import { GetInstanceTrendingReportResponse } from "./GetInstanceTrendingReport/res";
import { ListAgentStateLogsRequest } from "./ListAgentStateLogs/req";
import { ListAgentStateLogsResponse } from "./ListAgentStateLogs/res";
import { ListHistoricalSkillGroupReportRequest } from "./ListHistoricalSkillGroupReport/req";
import { ListHistoricalSkillGroupReportResponse } from "./ListHistoricalSkillGroupReport/res";
import { ListIntervalAgentReportRequest } from "./ListIntervalAgentReport/req";
import { ListIntervalAgentReportResponse } from "./ListIntervalAgentReport/res";
import { ListIntervalInstanceReportRequest } from "./ListIntervalInstanceReport/req";
import { ListIntervalInstanceReportResponse } from "./ListIntervalInstanceReport/res";
import { ListIntervalSkillGroupReportRequest } from "./ListIntervalSkillGroupReport/req";
import { ListIntervalSkillGroupReportResponse } from "./ListIntervalSkillGroupReport/res";
import { ListRealtimeSkillGroupStatesRequest } from "./ListRealtimeSkillGroupStates/req";
import { ListRealtimeSkillGroupStatesResponse } from "./ListRealtimeSkillGroupStates/res";
import { GetHistoricalCallerReportRequest } from "./GetHistoricalCallerReport/req";
import { GetHistoricalCallerReportResponse } from "./GetHistoricalCallerReport/res";
import { GetRealtimeInstanceStatesRequest } from "./GetRealtimeInstanceStates/req";
import { GetRealtimeInstanceStatesResponse } from "./GetRealtimeInstanceStates/res";
import { ListIvrTrackingDetailsRequest } from "./ListIvrTrackingDetails/req";
import { ListIvrTrackingDetailsResponse } from "./ListIvrTrackingDetails/res";
import { ResetUserPasswordRequest } from "./ResetUserPassword/req";
import { ResetUserPasswordResponse } from "./ResetUserPassword/res";
import { SaveTerminalLogRequest } from "./SaveTerminalLog/req";
import { SaveTerminalLogResponse } from "./SaveTerminalLog/res";
import { SaveRTCStatsV2Request } from "./SaveRTCStatsV2/req";
import { SaveRTCStatsV2Response } from "./SaveRTCStatsV2/res";
import { SaveWebRTCStatsRequest } from "./SaveWebRTCStats/req";
import { SaveWebRTCStatsResponse } from "./SaveWebRTCStats/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ModifyInstanceRequest } from "./ModifyInstance/req";
import { ModifyInstanceResponse } from "./ModifyInstance/res";
import { SaveWebRtcInfoRequest } from "./SaveWebRtcInfo/req";
import { SaveWebRtcInfoResponse } from "./SaveWebRtcInfo/res";
import { UpdateConfigItemsRequest } from "./UpdateConfigItems/req";
import { UpdateConfigItemsResponse } from "./UpdateConfigItems/res";
import { ImportCorpNumbersRequest } from "./ImportCorpNumbers/req";
import { ImportCorpNumbersResponse } from "./ImportCorpNumbers/res";
import { ListRamUsersRequest } from "./ListRamUsers/req";
import { ListRamUsersResponse } from "./ListRamUsers/res";
import { ListUnassignedNumbersRequest } from "./ListUnassignedNumbers/req";
import { ListUnassignedNumbersResponse } from "./ListUnassignedNumbers/res";
import { StartPredictiveCallRequest } from "./StartPredictiveCall/req";
import { StartPredictiveCallResponse } from "./StartPredictiveCall/res";
import { CreateCampaignRequest } from "./CreateCampaign/req";
import { CreateCampaignResponse } from "./CreateCampaign/res";
import { ListCampaignTrendingReportRequest } from "./ListCampaignTrendingReport/req";
import { ListCampaignTrendingReportResponse } from "./ListCampaignTrendingReport/res";
import { AbortCampaignRequest } from "./AbortCampaign/req";
import { AbortCampaignResponse } from "./AbortCampaign/res";
import { SubmitCampaignRequest } from "./SubmitCampaign/req";
import { SubmitCampaignResponse } from "./SubmitCampaign/res";
import { ListAttemptsRequest } from "./ListAttempts/req";
import { ListAttemptsResponse } from "./ListAttempts/res";
import { ResumeCampaignRequest } from "./ResumeCampaign/req";
import { ResumeCampaignResponse } from "./ResumeCampaign/res";
import { ListCasesRequest } from "./ListCases/req";
import { ListCasesResponse } from "./ListCases/res";
import { PauseCampaignRequest } from "./PauseCampaign/req";
import { PauseCampaignResponse } from "./PauseCampaign/res";
import { GetCampaignRequest } from "./GetCampaign/req";
import { GetCampaignResponse } from "./GetCampaign/res";
import { ListCampaignsRequest } from "./ListCampaigns/req";
import { ListCampaignsResponse } from "./ListCampaigns/res";
import { GetVoicemailRecordingRequest } from "./GetVoicemailRecording/req";
import { GetVoicemailRecordingResponse } from "./GetVoicemailRecording/res";
import { ListVoicemailsRequest } from "./ListVoicemails/req";
import { ListVoicemailsResponse } from "./ListVoicemails/res";
import { DeleteContactFlowRequest } from "./DeleteContactFlow/req";
import { DeleteContactFlowResponse } from "./DeleteContactFlow/res";
import { DiscardEditingContactFlowRequest } from "./DiscardEditingContactFlow/req";
import { DiscardEditingContactFlowResponse } from "./DiscardEditingContactFlow/res";
import { CreateContactFlowRequest } from "./CreateContactFlow/req";
import { CreateContactFlowResponse } from "./CreateContactFlow/res";
import { PublishContactFlowRequest } from "./PublishContactFlow/req";
import { PublishContactFlowResponse } from "./PublishContactFlow/res";
import { GetContactFlowRequest } from "./GetContactFlow/req";
import { GetContactFlowResponse } from "./GetContactFlow/res";
import { CommitContactFlowRequest } from "./CommitContactFlow/req";
import { CommitContactFlowResponse } from "./CommitContactFlow/res";
import { StartEditContactFlowRequest } from "./StartEditContactFlow/req";
import { StartEditContactFlowResponse } from "./StartEditContactFlow/res";
import { DeleteAudioFileRequest } from "./DeleteAudioFile/req";
import { DeleteAudioFileResponse } from "./DeleteAudioFile/res";
import { GetAudioFileRequest } from "./GetAudioFile/req";
import { GetAudioFileResponse } from "./GetAudioFile/res";
import { GetAudioFileUploadParametersRequest } from "./GetAudioFileUploadParameters/req";
import { GetAudioFileUploadParametersResponse } from "./GetAudioFileUploadParameters/res";
import { CreateAudioFileRequest } from "./CreateAudioFile/req";
import { CreateAudioFileResponse } from "./CreateAudioFile/res";
import { ListAudioFilesRequest } from "./ListAudioFiles/req";
import { ListAudioFilesResponse } from "./ListAudioFiles/res";
import { GetAudioFileDownloadUrlRequest } from "./GetAudioFileDownloadUrl/req";
import { GetAudioFileDownloadUrlResponse } from "./GetAudioFileDownloadUrl/res";
import { ModifyAudioFileRequest } from "./ModifyAudioFile/req";
import { ModifyAudioFileResponse } from "./ModifyAudioFile/res";
import { UnregisterDeviceRequest } from "./UnregisterDevice/req";
import { UnregisterDeviceResponse } from "./UnregisterDevice/res";
import { GetCaseFileUploadUrlRequest } from "./GetCaseFileUploadUrl/req";
import { GetCaseFileUploadUrlResponse } from "./GetCaseFileUploadUrl/res";
import { RegisterDevicesRequest } from "./RegisterDevices/req";
import { RegisterDevicesResponse } from "./RegisterDevices/res";
import { SwitchToConferenceRequest } from "./SwitchToConference/req";
import { SwitchToConferenceResponse } from "./SwitchToConference/res";
import { GetHistoricalCampaignReportRequest } from "./GetHistoricalCampaignReport/req";
import { GetHistoricalCampaignReportResponse } from "./GetHistoricalCampaignReport/res";
import { ListCallTagsRequest } from "./ListCallTags/req";
import { ListCallTagsResponse } from "./ListCallTags/res";
import { ExportCustomCallTaggingRequest } from "./ExportCustomCallTagging/req";
import { ExportCustomCallTaggingResponse } from "./ExportCustomCallTagging/res";
import { CreateCallTagsRequest } from "./CreateCallTags/req";
import { CreateCallTagsResponse } from "./CreateCallTags/res";
import { ExportDoNotCallNumbersRequest } from "./ExportDoNotCallNumbers/req";
import { ExportDoNotCallNumbersResponse } from "./ExportDoNotCallNumbers/res";
import { DeleteCallTagRequest } from "./DeleteCallTag/req";
import { DeleteCallTagResponse } from "./DeleteCallTag/res";
import { GetDoNotCallFileUploadParametersRequest } from "./GetDoNotCallFileUploadParameters/req";
import { GetDoNotCallFileUploadParametersResponse } from "./GetDoNotCallFileUploadParameters/res";
import { ImportCustomCallTaggingRequest } from "./ImportCustomCallTagging/req";
import { ImportCustomCallTaggingResponse } from "./ImportCustomCallTagging/res";
import { ImportDoNotCallNumbersRequest } from "./ImportDoNotCallNumbers/req";
import { ImportDoNotCallNumbersResponse } from "./ImportDoNotCallNumbers/res";
import { ListDoNotCallNumbersRequest } from "./ListDoNotCallNumbers/req";
import { ListDoNotCallNumbersResponse } from "./ListDoNotCallNumbers/res";
import { RemoveDoNotCallNumbersRequest } from "./RemoveDoNotCallNumbers/req";
import { RemoveDoNotCallNumbersResponse } from "./RemoveDoNotCallNumbers/res";
import { ListCustomCallTaggingRequest } from "./ListCustomCallTagging/req";
import { ListCustomCallTaggingResponse } from "./ListCustomCallTagging/res";
import { CreateCustomCallTaggingRequest } from "./CreateCustomCallTagging/req";
import { CreateCustomCallTaggingResponse } from "./CreateCustomCallTagging/res";
import { DeleteCustomCallTaggingRequest } from "./DeleteCustomCallTagging/req";
import { DeleteCustomCallTaggingResponse } from "./DeleteCustomCallTagging/res";
import { ModifyCustomCallTaggingRequest } from "./ModifyCustomCallTagging/req";
import { ModifyCustomCallTaggingResponse } from "./ModifyCustomCallTagging/res";
import { GetRealtimeCampaignStatsRequest } from "./GetRealtimeCampaignStats/req";
import { GetRealtimeCampaignStatsResponse } from "./GetRealtimeCampaignStats/res";
import { ListAgentSummaryReportsSinceMidnightRequest } from "./ListAgentSummaryReportsSinceMidnight/req";
import { ListAgentSummaryReportsSinceMidnightResponse } from "./ListAgentSummaryReportsSinceMidnight/res";
import { ListSkillGroupStatesRequest } from "./ListSkillGroupStates/req";
import { ListSkillGroupStatesResponse } from "./ListSkillGroupStates/res";
import { ListSkillGroupSummaryReportsSinceMidnightRequest } from "./ListSkillGroupSummaryReportsSinceMidnight/req";
import { ListSkillGroupSummaryReportsSinceMidnightResponse } from "./ListSkillGroupSummaryReportsSinceMidnight/res";
import { ListAgentStatesRequest } from "./ListAgentStates/req";
import { ListAgentStatesResponse } from "./ListAgentStates/res";
import { ListMonoRecordingsRequest } from "./ListMonoRecordings/req";
import { ListMonoRecordingsResponse } from "./ListMonoRecordings/res";
import { ListMultiChannelRecordingsRequest } from "./ListMultiChannelRecordings/req";
import { ListMultiChannelRecordingsResponse } from "./ListMultiChannelRecordings/res";
import { GetSkillGroupRequest } from "./GetSkillGroup/req";
import { GetSkillGroupResponse } from "./GetSkillGroup/res";
import { ImportAdminsRequest } from "./ImportAdmins/req";
import { ImportAdminsResponse } from "./ImportAdmins/res";
import { StartConferenceRequest } from "./StartConference/req";
import { StartConferenceResponse } from "./StartConference/res";
import { EndConferenceRequest } from "./EndConference/req";
import { EndConferenceResponse } from "./EndConference/res";
import { AddCasesRequest } from "./AddCases/req";
import { AddCasesResponse } from "./AddCases/res";
import { GetConversationDetailRequest } from "./GetConversationDetail/req";
import { GetConversationDetailResponse } from "./GetConversationDetail/res";
import { GetConversationDetailRequest } from "./GetConversationDetail/req";
import { GetConversationDetailResponse } from "./GetConversationDetail/res";
import { ListLegacyAgentEventLogsRequest } from "./ListLegacyAgentEventLogs/req";
import { ListLegacyAgentEventLogsResponse } from "./ListLegacyAgentEventLogs/res";
import { ListLegacyQueueEventLogsRequest } from "./ListLegacyQueueEventLogs/req";
import { ListLegacyQueueEventLogsResponse } from "./ListLegacyQueueEventLogs/res";
import { ListLegacyAgentStatusLogsRequest } from "./ListLegacyAgentStatusLogs/req";
import { ListLegacyAgentStatusLogsResponse } from "./ListLegacyAgentStatusLogs/res";
import { GetUploadAudioDataParamsRequest } from "./GetUploadAudioDataParams/req";
import { GetUploadAudioDataParamsResponse } from "./GetUploadAudioDataParams/res";
import { StartPrivacyCallRequest } from "./StartPrivacyCall/req";
import { StartPrivacyCallResponse } from "./StartPrivacyCall/res";
import { RestoreArchivedRecordingsRequest } from "./RestoreArchivedRecordings/req";
import { RestoreArchivedRecordingsResponse } from "./RestoreArchivedRecordings/res";
import { RedialCallRequest } from "./RedialCall/req";
import { RedialCallResponse } from "./RedialCall/res";
import { GetEarlyMediaRecordingRequest } from "./GetEarlyMediaRecording/req";
import { GetEarlyMediaRecordingResponse } from "./GetEarlyMediaRecording/res";
import { AppendCasesRequest } from "./AppendCases/req";
import { AppendCasesResponse } from "./AppendCases/res";
import { ListIntervalAgentSkillGroupReportRequest } from "./ListIntervalAgentSkillGroupReport/req";
import { ListIntervalAgentSkillGroupReportResponse } from "./ListIntervalAgentSkillGroupReport/res";
import { ListHistoricalAgentSkillGroupReportRequest } from "./ListHistoricalAgentSkillGroupReport/req";
import { ListHistoricalAgentSkillGroupReportResponse } from "./ListHistoricalAgentSkillGroupReport/res";
import { UpdateCampaignRequest } from "./UpdateCampaign/req";
import { UpdateCampaignResponse } from "./UpdateCampaign/res";
import { GetTicketTemplateRequest } from "./GetTicketTemplate/req";
import { GetTicketTemplateResponse } from "./GetTicketTemplate/res";
import { ListCategoriesRequest } from "./ListCategories/req";
import { ListCategoriesResponse } from "./ListCategories/res";
import { CreateTicketRequest } from "./CreateTicket/req";
import { CreateTicketResponse } from "./CreateTicket/res";
import { ListTicketTemplatesRequest } from "./ListTicketTemplates/req";
import { ListTicketTemplatesResponse } from "./ListTicketTemplates/res";
import { AnalyzeConversationRequest } from "./AnalyzeConversation/req";
import { AnalyzeConversationResponse } from "./AnalyzeConversation/res";
import { ListBlacklistCallTaggingsRequest } from "./ListBlacklistCallTaggings/req";
import { ListBlacklistCallTaggingsResponse } from "./ListBlacklistCallTaggings/res";
import { AddBlacklistCallTaggingRequest } from "./AddBlacklistCallTagging/req";
import { AddBlacklistCallTaggingResponse } from "./AddBlacklistCallTagging/res";
import { RemoveBlacklistCallTaggingRequest } from "./RemoveBlacklistCallTagging/req";
import { RemoveBlacklistCallTaggingResponse } from "./RemoveBlacklistCallTagging/res";
import { DeleteDocumentRequest } from "./DeleteDocument/req";
import { DeleteDocumentResponse } from "./DeleteDocument/res";
import { CreateSchemaRequest } from "./CreateSchema/req";
import { CreateSchemaResponse } from "./CreateSchema/res";
import { SaveDocumentRequest } from "./SaveDocument/req";
import { SaveDocumentResponse } from "./SaveDocument/res";
import { ListDocumentsRequest } from "./ListDocuments/req";
import { ListDocumentsResponse } from "./ListDocuments/res";
import { UpdateSchemaPropertyRequest } from "./UpdateSchemaProperty/req";
import { UpdateSchemaPropertyResponse } from "./UpdateSchemaProperty/res";
import { DeleteSchemaPropertyRequest } from "./DeleteSchemaProperty/req";
import { DeleteSchemaPropertyResponse } from "./DeleteSchemaProperty/res";
import { DeleteDocumentsRequest } from "./DeleteDocuments/req";
import { DeleteDocumentsResponse } from "./DeleteDocuments/res";
import { ImportDocumentsRequest } from "./ImportDocuments/req";
import { ImportDocumentsResponse } from "./ImportDocuments/res";
import { AddSchemaPropertyRequest } from "./AddSchemaProperty/req";
import { AddSchemaPropertyResponse } from "./AddSchemaProperty/res";
import { DisableSchemaPropertyRequest } from "./DisableSchemaProperty/req";
import { DisableSchemaPropertyResponse } from "./DisableSchemaProperty/res";
import { GetDocumentUploadParametersRequest } from "./GetDocumentUploadParameters/req";
import { GetDocumentUploadParametersResponse } from "./GetDocumentUploadParameters/res";
import { GetSchemaRequest } from "./GetSchema/req";
import { GetSchemaResponse } from "./GetSchema/res";
import { EnableSchemaPropertyRequest } from "./EnableSchemaProperty/req";
import { EnableSchemaPropertyResponse } from "./EnableSchemaProperty/res";
import { DeleteSchemaRequest } from "./DeleteSchema/req";
import { DeleteSchemaResponse } from "./DeleteSchema/res";
import { AddTicketTaskRequest } from "./AddTicketTask/req";
import { AddTicketTaskResponse } from "./AddTicketTask/res";
import { EnableTicketTemplateRequest } from "./EnableTicketTemplate/req";
import { EnableTicketTemplateResponse } from "./EnableTicketTemplate/res";
import { DeleteTicketRequest } from "./DeleteTicket/req";
import { DeleteTicketResponse } from "./DeleteTicket/res";
import { TransferTicketTaskRequest } from "./TransferTicketTask/req";
import { TransferTicketTaskResponse } from "./TransferTicketTask/res";
import { ListTicketsRequest } from "./ListTickets/req";
import { ListTicketsResponse } from "./ListTickets/res";
import { ListTicketTasksRequest } from "./ListTicketTasks/req";
import { ListTicketTasksResponse } from "./ListTicketTasks/res";
import { WithdrawTicketRequest } from "./WithdrawTicket/req";
import { WithdrawTicketResponse } from "./WithdrawTicket/res";
import { DisableTicketTemplateRequest } from "./DisableTicketTemplate/req";
import { DisableTicketTemplateResponse } from "./DisableTicketTemplate/res";
import { RejectTicketRequest } from "./RejectTicket/req";
import { RejectTicketResponse } from "./RejectTicket/res";
import { DeleteTicketTemplateRequest } from "./DeleteTicketTemplate/req";
import { DeleteTicketTemplateResponse } from "./DeleteTicketTemplate/res";
import { ResubmitTicketRequest } from "./ResubmitTicket/req";
import { ResubmitTicketResponse } from "./ResubmitTicket/res";
import { GetTicketSummaryReportRequest } from "./GetTicketSummaryReport/req";
import { GetTicketSummaryReportResponse } from "./GetTicketSummaryReport/res";
import { TerminateTicketRequest } from "./TerminateTicket/req";
import { TerminateTicketResponse } from "./TerminateTicket/res";
import { ListCommonTicketFieldsRequest } from "./ListCommonTicketFields/req";
import { ListCommonTicketFieldsResponse } from "./ListCommonTicketFields/res";
import { GetTicketRequest } from "./GetTicket/req";
import { GetTicketResponse } from "./GetTicket/res";
import { UpdateTicketRequest } from "./UpdateTicket/req";
import { UpdateTicketResponse } from "./UpdateTicket/res";
import { AcceptChatRequest } from "./AcceptChat/req";
import { AcceptChatResponse } from "./AcceptChat/res";
import { GetVisitorLoginDetailsRequest } from "./GetVisitorLoginDetails/req";
import { GetVisitorLoginDetailsResponse } from "./GetVisitorLoginDetails/res";
import { RejectChatRequest } from "./RejectChat/req";
import { RejectChatResponse } from "./RejectChat/res";
import { StartChatRequest } from "./StartChat/req";
import { StartChatResponse } from "./StartChat/res";
import { ReleaseChatRequest } from "./ReleaseChat/req";
import { ReleaseChatResponse } from "./ReleaseChat/res";
import { ClaimChatRequest } from "./ClaimChat/req";
import { ClaimChatResponse } from "./ClaimChat/res";
import { FinishTicketTaskRequest } from "./FinishTicketTask/req";
import { FinishTicketTaskResponse } from "./FinishTicketTask/res";

interface CCC {
    /**
     * 调用AnswerCall接听指定实例下指定通话ID对应的通话。
     */
    AnswerCall(query: AnswerCallRequest): Promise<AnswerCallResponse>;
    /**
     * 调用BargeInCall强行插入指定实例下指定通话ID对应的正在通话中的通话，强插成功后，通话将由原来的双方通话变成三人会议。
     */
    BargeInCall(query: BargeInCallRequest): Promise<BargeInCallResponse>;
    /**
     * 调用BlindTransfer直接转接通话到其他坐席或某个技能组队列或外部号码，直接转接也叫盲转或单步转。
     */
    BlindTransfer(query: BlindTransferRequest): Promise<BlindTransferResponse>;
    /**
     * 调用ChangeWorkMode改变坐席的工作模式。
     */
    ChangeWorkMode(query: ChangeWorkModeRequest): Promise<ChangeWorkModeResponse>;
    /**
     * 调用CancelAttendedTransfer取消咨询转接，在发起咨询转接后，完成咨询转接前，均可调用该接口取消咨询转接，即使被转接方已经接通，也可以取消。
     */
    CancelAttendedTransfer(query: CancelAttendedTransferRequest): Promise<CancelAttendedTransferResponse>;
    /**
     * 调用CompleteAttendedTransfer完成咨询转。
     */
    CompleteAttendedTransfer(query: CompleteAttendedTransferRequest): Promise<CompleteAttendedTransferResponse>;
    /**
     * 调用GetLoginDetails获取坐席的登录信息，包括坐席基本信息、服务器地址信息、鉴权信息等，该接口只允许自己调用，管理员无权替他人调用。
     */
    GetLoginDetails(query: GetLoginDetailsRequest): Promise<GetLoginDetailsResponse>;
    /**
     * 调用接口GetNumberLocation获取号码归属地信息。
     */
    GetNumberLocation(query: GetNumberLocationRequest): Promise<GetNumberLocationResponse>;
    /**
     * 调用GetTurnCredentials获取云呼叫中心前置接入点的连接凭证信息，主要包括鉴权需要用到的用户名和密码，通过前置接入点接入云呼叫中心可以有效提高网络质量和稳定性。
     */
    GetTurnCredentials(query: GetTurnCredentialsRequest): Promise<GetTurnCredentialsResponse>;
    /**
     * 调用GetTurnServerList获取云呼叫中心的前置接入点列表，通过前置接入点接入云呼叫中心可以有效提高网络质量和网络稳定性。
     */
    GetTurnServerList(query: GetTurnServerListRequest): Promise<GetTurnServerListResponse>;
    /**
     * 调用HoldCall保持指定实例下指定通话ID对应的通话，通话被保持后，将暂时被挂起，此时被保持方会听到保持音乐。
     */
    HoldCall(query: HoldCallRequest): Promise<HoldCallResponse>;
    /**
     * 调用InitiateAttendedTransfer咨询转接通话到其他坐席或某个技能组队列或外部号码，咨询转接也叫关注转或双步转。
     */
    InitiateAttendedTransfer(query: InitiateAttendedTransferRequest): Promise<InitiateAttendedTransferResponse>;
    /**
     * 调用InterceptCall强行拆开指定实例下指定通话ID对应的通话，通话必须处于监听状态，且由监听者发起强拆，强拆成功后，原本与客户通话的坐席会被挂断，发起强拆的坐席代替原坐席继续与客户通话。
     */
    InterceptCall(query: InterceptCallRequest): Promise<InterceptCallResponse>;
    /**
     * 调用LaunchAuthentication使通话临时转入指定的IVR流程，调用此接口后，会在通话过程中进入IVR交互环节，通用用于核身操作。
     */
    LaunchAuthentication(query: LaunchAuthenticationRequest): Promise<LaunchAuthenticationResponse>;
    /**
     * 调用LaunchSurvey发送满意度调查，该操作会导致挂机，如果是语音满意度，客户会在坐席挂机后进入IVR满意度调查流程，并在IVR流程中完成满意度采集。如果是短信满意度，则通话结束，客户收到满意度调查短信。
     */
    LaunchSurvey(query: LaunchSurveyRequest): Promise<LaunchSurveyResponse>;
    /**
     * 调用ListBriefSkillGroups获取指定实例下的技能组概要信息列表。
     */
    ListBriefSkillGroups(query: ListBriefSkillGroupsRequest): Promise<ListBriefSkillGroupsResponse>;
    /**
     * 调用ListConfigItems获取指定实例下的配置信息。
     */
    ListConfigItems(query: ListConfigItemsRequest): Promise<ListConfigItemsResponse>;
    /**
     * 调用ListDevices获取指定实例下指定坐席的设备列表。
     */
    ListDevices(query: ListDevicesRequest): Promise<ListDevicesResponse>;
    /**
     * 调用ListOutboundNumbersOfUser获取指定实例下指定坐席的可外呼号码。
     */
    ListOutboundNumbersOfUser(query: ListOutboundNumbersOfUserRequest): Promise<ListOutboundNumbersOfUserResponse>;
    /**
     * 调用ListSkillLevelsOfUser获取指定实例下指定坐席关联的技能组的技能等级列表，也可以使用该接口查询坐席可关联但未关联的技能组列表。
     */
    ListSkillLevelsOfUser(query: ListSkillLevelsOfUserRequest): Promise<ListSkillLevelsOfUserResponse>;
    /**
     * 调用MonitorCall监听指定实例下指定通话ID对应的通话。通话必须处于坐席和客户双方正常接通状态，且发起监听的坐席有权限对被监听坐席进行监听。
     */
    MonitorCall(query: MonitorCallRequest): Promise<MonitorCallResponse>;
    /**
     * 调用MuteCall静音指定实例下指定通话ID对应的通话，只能由正在通话状态的坐席调用，且只能静音调用者自己，坐席静音后，客户将无法听见坐席的声音。
     */
    MuteCall(query: MuteCallRequest): Promise<MuteCallResponse>;
    /**
     * 调用PickOutboundNumbers根据传入的被叫号码选择适合的主叫号码，选号逻辑由智能算法控制。
     */
    PickOutboundNumbers(query: PickOutboundNumbersRequest): Promise<PickOutboundNumbersResponse>;
    /**
     * 调用PollUserStatus轮询指定实例下指定坐席的坐席状态，一般由前端坐席工作台调用，用于同步坐席状态。
     */
    PollUserStatus(query: PollUserStatusRequest): Promise<PollUserStatusResponse>;
    /**
     * 调用ReadyForService使指定实例下的指定坐席就绪，就绪后坐席进入空闲状态。
     */
    ReadyForService(query: ReadyForServiceRequest): Promise<ReadyForServiceResponse>;
    /**
     * 调用RegisterDevice注册SIP设备到指定实例下的指定坐席， SIP设备可以是SIP话机或SIP软电话。
     */
    RegisterDevice(query: RegisterDeviceRequest): Promise<RegisterDeviceResponse>;
    /**
     * 调用ReleaseCall挂断指定实例下指定通话ID对应的通话，调用者必须是坐席，且正处于通话状态。
     */
    ReleaseCall(query: ReleaseCallRequest): Promise<ReleaseCallResponse>;
    /**
     * 调用ResetAgentState重置指定实例下指定坐席的坐席状态。
     */
    ResetAgentState(query: ResetAgentStateRequest): Promise<ResetAgentStateResponse>;
    /**
     * 调用RetrieveCall取回指定实例下指定通话ID对应的通话，通话必须处于保持状态才可操作取回。
     */
    RetrieveCall(query: RetrieveCallRequest): Promise<RetrieveCallResponse>;
    /**
     * 调用SendDtmfSignaling在通话过程中发送DTMF按键信息。
     */
    SendDtmfSignaling(query: SendDtmfSignalingRequest): Promise<SendDtmfSignalingResponse>;
    /**
     * 调用SignInGroup使坐席签入指定实例下的指定技能组，即坐席上线操作。
     */
    SignInGroup(query: SignInGroupRequest): Promise<SignInGroupResponse>;
    /**
     * 调用UnmuteCall取消通话静音。
     */
    UnmuteCall(query: UnmuteCallRequest): Promise<UnmuteCallResponse>;
    /**
     * 调用ListPrivilegesOfUser获取当前用户拥有的权限。
     */
    ListPrivilegesOfUser(query: ListPrivilegesOfUserRequest): Promise<ListPrivilegesOfUserResponse>;
    /**
     * 调用MakeCall发起呼叫，被叫可以是内部坐席，也可以是外部客户 。
     */
    MakeCall(query: MakeCallRequest): Promise<MakeCallResponse>;
    /**
     * 调用TakeBreak将指定实例下的指定坐席设置为小休状态。
     */
    TakeBreak(query: TakeBreakRequest): Promise<TakeBreakResponse>;
    /**
     * 调用GetMonoRecording获取指定实例下指定通话的单轨录音，单轨录音只有一个音轨，坐席侧和客户侧的录音合并到了同一个音轨上，格式为WAV。
     */
    GetMonoRecording(query: GetMonoRecordingRequest): Promise<GetMonoRecordingResponse>;
    /**
     * 调用GetMultiChannelRecording获取指定实例下指定通话的多轨录音，多轨录音中坐席和客户的录音分布在不同的声道上，每次播放时只能单个声道播放，也就是只能听到其中一方的声音，格式为MKV。
     */
    GetMultiChannelRecording(query: GetMultiChannelRecordingRequest): Promise<GetMultiChannelRecordingResponse>;
    /**
     * 调用ListCallDetailRecords获取指定实例下指定搜索条件过滤后的通话详情列表。
     */
    ListCallDetailRecords(query: ListCallDetailRecordsRequest): Promise<ListCallDetailRecordsResponse>;
    /**
     * 调用ListHistoricalAgentReport获取指定实例下的一个或多个坐席的历史数据报表。
     */
    ListHistoricalAgentReport(query: ListHistoricalAgentReportRequest): Promise<ListHistoricalAgentReportResponse>;
    /**
     * 调用ListRealtimeAgentStates获取指定实例下一个或多个指定坐席的实时状态数据报表。
     */
    ListRealtimeAgentStates(query: ListRealtimeAgentStatesRequest): Promise<ListRealtimeAgentStatesResponse>;
    /**
     * 调用ListRecentCallDetailRecords获取指定实例下当前RAM账号映射的坐席的最近通话记录列表。
     */
    ListRecentCallDetailRecords(query: ListRecentCallDetailRecordsRequest): Promise<ListRecentCallDetailRecordsResponse>;
    /**
     * 调用SignOutGroup使坐席签出当前签入的技能组，即坐席下线操作。
     */
    SignOutGroup(query: SignOutGroupRequest): Promise<SignOutGroupResponse>;
    /**
     * 调用CreateUser在指定实例下创建一个新的坐席。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 调用AddPhoneNumberToSkillGroups将号码关联到指定实例下的一个或多个技能组。
     */
    AddPhoneNumberToSkillGroups(query: AddPhoneNumberToSkillGroupsRequest): Promise<AddPhoneNumberToSkillGroupsResponse>;
    /**
     * 调用AddNumbersToSkillGroup添加一个或多个号码到同一个技能组下。
     */
    AddNumbersToSkillGroup(query: AddNumbersToSkillGroupRequest): Promise<AddNumbersToSkillGroupResponse>;
    /**
     * 调用AddSkillGroupsToUser添加一个或多个技能组到指定实例下的指定坐席。
     */
    AddSkillGroupsToUser(query: AddSkillGroupsToUserRequest): Promise<AddSkillGroupsToUserResponse>;
    /**
     * 调用CreateSkillGroup在指定实例下创建一个技能组。
     */
    CreateSkillGroup(query: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse>;
    /**
     * 调用DeleteSkillGroup删除指定实例下指定技能组ID对应的技能组。
     */
    DeleteSkillGroup(query: DeleteSkillGroupRequest): Promise<DeleteSkillGroupResponse>;
    /**
     * 调用ListContactFlows获取指定实例下的IVR联系流列表。
     */
    ListContactFlows(query: ListContactFlowsRequest): Promise<ListContactFlowsResponse>;
    /**
     * 调用ListInstancesOfUser获取用户所属的云呼叫中心实例列表。
     */
    ListInstancesOfUser(query: ListInstancesOfUserRequest): Promise<ListInstancesOfUserResponse>;
    /**
     * 调用ListUserLevelsOfSkillGroup获取指定实例下指定技能组下属的坐席技能等级列表，也可以调用该接口反差可关联但未关联指定技能组的坐席列表。
     */
    ListUserLevelsOfSkillGroup(query: ListUserLevelsOfSkillGroupRequest): Promise<ListUserLevelsOfSkillGroupResponse>;
    /**
     * 调用ModifyPhoneNumber修改指定实例下指定号码的信息，主要是修改号码用途和绑定的联系流ID。
     */
    ModifyPhoneNumber(query: ModifyPhoneNumberRequest): Promise<ModifyPhoneNumberResponse>;
    /**
     * 调用ModifySkillGroup修改指定实例下指定技能组ID对应的技能组的信息，主要是修改技能组展示名和技能组的描述信息。
     */
    ModifySkillGroup(query: ModifySkillGroupRequest): Promise<ModifySkillGroupResponse>;
    /**
     * 调用ModifyUser修改指定实例下指定坐席的信息，可修改电话号码、工作模式、角色和工号。
     */
    ModifyUser(query: ModifyUserRequest): Promise<ModifyUserResponse>;
    /**
     * 调用ModifyUserLevelsOfSkillGroup修改指定实例下指定技能组下属的一个或多个坐席的技能等级。
     */
    ModifyUserLevelsOfSkillGroup(query: ModifyUserLevelsOfSkillGroupRequest): Promise<ModifyUserLevelsOfSkillGroupResponse>;
    /**
     * 调用RemovePhoneNumbersFromSkillGroup删除指定实例下指定技能组关联的一个或多个号码与该技能组的关联关系。
     */
    RemovePhoneNumbersFromSkillGroup(query: RemovePhoneNumbersFromSkillGroupRequest): Promise<RemovePhoneNumbersFromSkillGroupResponse>;
    /**
     * 调用StartBack2BackCall发起双呼。
     */
    StartBack2BackCall(query: StartBack2BackCallRequest): Promise<StartBack2BackCallResponse>;
    /**
     * 调用CoachCall辅导指定实例下指定通话ID对应的通话中的指定坐席，辅导过程中被辅导坐席可以听到辅导者的声音，客户无法听到辅导者的声音。
     */
    CoachCall(query: CoachCallRequest): Promise<CoachCallResponse>;
    /**
     * 调用AddPersonalNumbersToUser添加一个或多个个人外呼号码到指定实例下的指定坐席。
     */
    AddPersonalNumbersToUser(query: AddPersonalNumbersToUserRequest): Promise<AddPersonalNumbersToUserResponse>;
    /**
     * 调用AddPhoneNumbers添加一个或多个号码到指定实例下。
     */
    AddPhoneNumbers(query: AddPhoneNumbersRequest): Promise<AddPhoneNumbersResponse>;
    /**
     * 调用AddUsersToSkillGroup添加一个或多个坐席到同一个技能组。
     */
    AddUsersToSkillGroup(query: AddUsersToSkillGroupRequest): Promise<AddUsersToSkillGroupResponse>;
    /**
     * 调用AssignUsers将一个或多个RAM账户导入到指定实例中，成功导入后，RAM账户将以坐席的形式存在于实例中。
     */
    AssignUsers(query: AssignUsersRequest): Promise<AssignUsersResponse>;
    /**
     * 调用GetInstance获取指定实例ID所对应的云呼叫中心实例的详细信息。
     */
    GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
     * 调用GetUser获取指定实例下指定坐席ID对应的坐席信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 调用ListPersonalNumbersOfUser获取指定实例下指定坐席的个人外呼号码列表，也可通过该接口反查可添加为坐席个人外呼号码的号码列表。
     */
    ListPersonalNumbersOfUser(query: ListPersonalNumbersOfUserRequest): Promise<ListPersonalNumbersOfUserResponse>;
    /**
     * 调用ListPhoneNumbers获取指定实例下的号码列表。
     */
    ListPhoneNumbers(query: ListPhoneNumbersRequest): Promise<ListPhoneNumbersResponse>;
    /**
     * 调用ListPhoneNumbersOfSkillGroup获取指定实例下指定技能组关联的号码列表，也可以通过该接口反查未关联但可关联到该技能组的号码。
     */
    ListPhoneNumbersOfSkillGroup(query: ListPhoneNumbersOfSkillGroupRequest): Promise<ListPhoneNumbersOfSkillGroupResponse>;
    /**
     * 调用ListRoles获取指定实例下的所有角色。
     */
    ListRoles(query: ListRolesRequest): Promise<ListRolesResponse>;
    /**
     * 调用ListSkillGroups获取指定实例下的技能组列表。
     */
    ListSkillGroups(query: ListSkillGroupsRequest): Promise<ListSkillGroupsResponse>;
    /**
     * 调用ListUsers获取指定实例下的坐席列表。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 调用ModifySkillLevelsOfUser修改指定实例下指定坐席的一个或多个技能组下的技能等级。
     */
    ModifySkillLevelsOfUser(query: ModifySkillLevelsOfUserRequest): Promise<ModifySkillLevelsOfUserResponse>;
    /**
     * 调用RemovePersonalNumbersFromUser删除指定实例下指定坐席的一个或多个个人外呼号码。
     */
    RemovePersonalNumbersFromUser(query: RemovePersonalNumbersFromUserRequest): Promise<RemovePersonalNumbersFromUserResponse>;
    /**
     * 调用RemovePhoneNumberFromSkillGroups删除指定实例下指定号码关联的一个或多个技能组与该号码的绑定关系，删除的是号码与技能组的绑定关系，并不是真实号码。
     */
    RemovePhoneNumberFromSkillGroups(query: RemovePhoneNumberFromSkillGroupsRequest): Promise<RemovePhoneNumberFromSkillGroupsResponse>;
    /**
     * 调用RemovePhoneNumbers删除指定实例下的一个或多个号码。并非真实删除某个号码，而是将这个号码与实例进行解绑，包括号码关联的技能组、联系流、坐席等，都将随之解绑。
     */
    RemovePhoneNumbers(query: RemovePhoneNumbersRequest): Promise<RemovePhoneNumbersResponse>;
    /**
     * 调用RemoveSkillGroupsFromUser删除指定实例下指定坐席关联的一个或多个技能组与该坐席之间的关联关系。
     */
    RemoveSkillGroupsFromUser(query: RemoveSkillGroupsFromUserRequest): Promise<RemoveSkillGroupsFromUserResponse>;
    /**
     * 调用RemoveUsers删除指定实例下的一个或多个坐席，该操作仅将RAM账户与实例解绑，然后将RAM账户映射的坐席从实例中删除，并不会删除RAM账户本身。
     */
    RemoveUsers(query: RemoveUsersRequest): Promise<RemoveUsersResponse>;
    /**
     * 调用RemoveUsersFromSkillGroup删除指定实例下指定技能组关联的一个或多个坐席，该操作仅删除技能组与坐席之间的关联关系，并不会删除坐席。
     */
    RemoveUsersFromSkillGroup(query: RemoveUsersFromSkillGroupRequest): Promise<RemoveUsersFromSkillGroupResponse>;
    /**
     * 调用GetCallDetailRecord获取指定实例下指定通话ID对应的通话的详情。
     */
    GetCallDetailRecord(query: GetCallDetailRecordRequest): Promise<GetCallDetailRecordResponse>;
    /**
     * 调用GetHistoricalInstanceReport获取指定实例的历史数据报表。
     */
    GetHistoricalInstanceReport(query: GetHistoricalInstanceReportRequest): Promise<GetHistoricalInstanceReportResponse>;
    /**
     * 调用GetInstanceTrendingReport获取指定实例的变化趋势报表。
     */
    GetInstanceTrendingReport(query: GetInstanceTrendingReportRequest): Promise<GetInstanceTrendingReportResponse>;
    /**
     * 调用ListAgentStateLogs获取指定实例下指定坐席的状态日志列表。注意本接口即将过期，请使用替代接口ListRealtimeAgentStates。
     */
    ListAgentStateLogs(query: ListAgentStateLogsRequest): Promise<ListAgentStateLogsResponse>;
    /**
     * 调用ListHistoricalSkillGroupReport获取指定实例下的一个或多个技能组的历史数据报表。
     */
    ListHistoricalSkillGroupReport(query: ListHistoricalSkillGroupReportRequest): Promise<ListHistoricalSkillGroupReportResponse>;
    /**
     * 调用ListIntervalAgentReport获取指定实例下指定坐席的分段统计报表。
     */
    ListIntervalAgentReport(query: ListIntervalAgentReportRequest): Promise<ListIntervalAgentReportResponse>;
    /**
     * 调用ListIntervalInstanceReport获取指定实例的分段统计报表。
     */
    ListIntervalInstanceReport(query: ListIntervalInstanceReportRequest): Promise<ListIntervalInstanceReportResponse>;
    /**
     * 调用ListIntervalSkillGroupReport获取指定实例下指定技能组的分段统计报表。
     */
    ListIntervalSkillGroupReport(query: ListIntervalSkillGroupReportRequest): Promise<ListIntervalSkillGroupReportResponse>;
    /**
     * 调用ListRealtimeSkillGroupStates获取指定实例下实时技能组状态报表。
     */
    ListRealtimeSkillGroupStates(query: ListRealtimeSkillGroupStatesRequest): Promise<ListRealtimeSkillGroupStatesResponse>;
    /**
     * 调用GetHistoricalCallerReport获取指定实例下指定来电号码的历史呼入报表。
     */
    GetHistoricalCallerReport(query: GetHistoricalCallerReportRequest): Promise<GetHistoricalCallerReportResponse>;
    /**
     * 调用GetRealtimeInstanceStates获取指定实例的实时状态。
     */
    GetRealtimeInstanceStates(query: GetRealtimeInstanceStatesRequest): Promise<GetRealtimeInstanceStatesResponse>;
    /**
     * 调用ListIvrTrackingDetails获取指定实例下指定通话的IVR轨迹详情。
     */
    ListIvrTrackingDetails(query: ListIvrTrackingDetailsRequest): Promise<ListIvrTrackingDetailsResponse>;
    /**
     * 调用ResetUserPassword重置指定实例下指定坐席的登录密码。实际上坐席并没有登录密码，修改的是坐席关联的RAM账户的登录密码，通常用于客服忘记自己的RAM账户登录密码的场景。
     */
    ResetUserPassword(query: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse>;
    /**
     * 调用SaveTerminalLog上报坐席端日志信息，普通客户无需关心该接口。
     */
    SaveTerminalLog(query: SaveTerminalLogRequest): Promise<SaveTerminalLogResponse>;
    /**
     * 调用SaveRTCStatsV2上报坐席端WebRTC语音传输统计信息，普通客户无需关心该接口。
     */
    SaveRTCStatsV2(query: SaveRTCStatsV2Request): Promise<SaveRTCStatsV2Response>;
    /**
     * 调用SaveWebRTCStats上报坐席端WebRTC语音传输统计信息，普通客户无需关心该接口。
     */
    SaveWebRTCStats(query: SaveWebRTCStatsRequest): Promise<SaveWebRTCStatsResponse>;
    /**
     * 调用CreateInstance创建一个云呼叫中心实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 调用ListInstances获取当前阿里云账号下的云呼叫中心实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 调用ModifyInstance修改云呼叫中心实例。
     */
    ModifyInstance(query: ModifyInstanceRequest): Promise<ModifyInstanceResponse>;
    /**
     * 调用SaveWebRtcInfo上报座席端WebRTC的通话状态信息，包括通话质量监控数据等，用于后台统计和监控，客户无需关心该接口。
     */
    SaveWebRtcInfo(query: SaveWebRtcInfoRequest): Promise<SaveWebRtcInfoResponse>;
    /**
     * 调用UpdateConfigItems添加或修改指定实例下的配置信息，例如：来电显示是否隐藏号码，呼入场景下是否允许坐席主动挂机等。
     */
    UpdateConfigItems(query: UpdateConfigItemsRequest): Promise<UpdateConfigItemsResponse>;
    /**
     * 导入自有线路号码，首次导入前，需联系云呼叫中心-售后技术支持进行加白。
     */
    ImportCorpNumbers(query: ImportCorpNumbersRequest): Promise<ImportCorpNumbersResponse>;
    /**
     * 调用ListRamUsers获取未导入指定实例下的RAM用户列表。
     */
    ListRamUsers(query: ListRamUsersRequest): Promise<ListRamUsersResponse>;
    /**
     * 调用ListUnassignedNumbers获取阿里云主账号下未分配到实例的号码列表。
     */
    ListUnassignedNumbers(query: ListUnassignedNumbersRequest): Promise<ListUnassignedNumbersResponse>;
    /**
     * 调用StartPredictiveCall发起预测式外呼。
     */
    StartPredictiveCall(query: StartPredictiveCallRequest): Promise<StartPredictiveCallResponse>;
    /**
     * 调用CreateCampaign在指定实例下创建预测式外呼活动。
     */
    CreateCampaign(query: CreateCampaignRequest): Promise<CreateCampaignResponse>;
    /**
     * 调用ListCampaignTrendingReport获取指定实例下指定ID对应的预测式外呼活动的趋势报表。
     */
    ListCampaignTrendingReport(query: ListCampaignTrendingReportRequest): Promise<ListCampaignTrendingReportResponse>;
    /**
     * 调用AbortCampaign终止指定实例下指定活动ID对应的预测式外呼活动。
     */
    AbortCampaign(query: AbortCampaignRequest): Promise<AbortCampaignResponse>;
    /**
     * 调用SubmitCampaign启动指定实例下指定ID对应的预测式外呼活动。
     */
    SubmitCampaign(query: SubmitCampaignRequest): Promise<SubmitCampaignResponse>;
    /**
     * 调用ListAttempts获取指定实例下指定预测式外呼活动的联系人拨打记录列表。
     */
    ListAttempts(query: ListAttemptsRequest): Promise<ListAttemptsResponse>;
    /**
     * 调用ResumeCampaign恢复指定实例下指定ID对应的预测式外呼活动。
     */
    ResumeCampaign(query: ResumeCampaignRequest): Promise<ResumeCampaignResponse>;
    /**
     * 调用ListCases获取指定实例下指定ID对应的预测式外呼活动的外呼名单执行详情列表。
     */
    ListCases(query: ListCasesRequest): Promise<ListCasesResponse>;
    /**
     * 调用PauseCampaign暂停指定实例下指定ID对应的预测式外呼活动。
     */
    PauseCampaign(query: PauseCampaignRequest): Promise<PauseCampaignResponse>;
    /**
     * 调用GetCampaign获取指定实例下指定ID对应的预测式外呼活动。
     */
    GetCampaign(query: GetCampaignRequest): Promise<GetCampaignResponse>;
    /**
     * 调用ListCampaigns获取指定实例下的预测式外呼活动列表。
     */
    ListCampaigns(query: ListCampaignsRequest): Promise<ListCampaignsResponse>;
    /**
     * 调用GetVoicemailRecording获取指定实例下指定通话的语音信箱留言的录音，录音为单轨录音，格式为WAV。
     */
    GetVoicemailRecording(query: GetVoicemailRecordingRequest): Promise<GetVoicemailRecordingResponse>;
    /**
     * 调用ListVoicemails获取指定实例下语音信箱列表。
     */
    ListVoicemails(query: ListVoicemailsRequest): Promise<ListVoicemailsResponse>;
    /**
     * 删除指定联系流。
     */
    DeleteContactFlow(query: DeleteContactFlowRequest): Promise<DeleteContactFlowResponse>;
    /**
     * 撤销联系流编辑，丢弃对应草稿。
     */
    DiscardEditingContactFlow(query: DiscardEditingContactFlowRequest): Promise<DiscardEditingContactFlowResponse>;
    /**
     * 创建一个IVR流程。
     */
    CreateContactFlow(query: CreateContactFlowRequest): Promise<CreateContactFlowResponse>;
    /**
     * 发布联系流。
     */
    PublishContactFlow(query: PublishContactFlowRequest): Promise<PublishContactFlowResponse>;
    /**
     * 获取指定联系流。
     */
    GetContactFlow(query: GetContactFlowRequest): Promise<GetContactFlowResponse>;
    CommitContactFlow(query: CommitContactFlowRequest): Promise<CommitContactFlowResponse>;
    /**
     * 发起编辑联系流，生成联系流草稿。
     */
    StartEditContactFlow(query: StartEditContactFlowRequest): Promise<StartEditContactFlowResponse>;
    /**
     * 调用DeleteAudioFile删除指定实例下指定音频资源ID对应的音频文件。
     */
    DeleteAudioFile(query: DeleteAudioFileRequest): Promise<DeleteAudioFileResponse>;
    /**
     * 调用GetAudioFile获取指定实例下指定音频资源ID对应的音频文件信息。
     */
    GetAudioFile(query: GetAudioFileRequest): Promise<GetAudioFileResponse>;
    /**
     * 调用GetAudioFileUploadParameters获取音频文件上传参数，创建音频文件时，需要先调用该接口拿到上传参数，然后再调用CreateAudioFile创建音频文件。该接口通常由云呼叫中心提供的公有云默认CRM系统调用，不建议集成客户调用该接口，因为需要在页面上操作上传文件，上传完成后，才能调用GetAudioFileUploadParameters接口。
     */
    GetAudioFileUploadParameters(query: GetAudioFileUploadParametersRequest): Promise<GetAudioFileUploadParametersResponse>;
    /**
     * 调用CreateAudioFile在指定实例下创建一个音频资源，创建好的音频资源可以在实例中应用，比如在IVR放音时可以选择创建好的音频文件。
     */
    CreateAudioFile(query: CreateAudioFileRequest): Promise<CreateAudioFileResponse>;
    /**
     * 调用ListAudioFiles获取指定实例下的音频文件列表。
     */
    ListAudioFiles(query: ListAudioFilesRequest): Promise<ListAudioFilesResponse>;
    /**
     * 调用GetAudioFileDownloadUrl获取指定实例下指定音频资源的OSS下载链接。
     */
    GetAudioFileDownloadUrl(query: GetAudioFileDownloadUrlRequest): Promise<GetAudioFileDownloadUrlResponse>;
    /**
     * 调用ModifyAudioFile修改指定实例下指定音频资源ID对应的音频文件。可以修改音频文件名称、音频文件展示名和音频文件在OSS中的Key。
     */
    ModifyAudioFile(query: ModifyAudioFileRequest): Promise<ModifyAudioFileResponse>;
    /**
     * 调用UnregisterDevice删除指定实例下指定坐席的设备注册记录，删除后将导致与坐席关联的SIP话机或SIP软电话不可用。
     */
    UnregisterDevice(query: UnregisterDeviceRequest): Promise<UnregisterDeviceResponse>;
    /**
     * 调用GetCaseFileUploadUrl获取指定实例下预测式外呼名单文件的OSS上传参数，当使用文件导入的方式创建预测式外呼活动时，需要先调用此接口拿到文件上传参数，然后再调用CreateCampaign接口。
     */
    GetCaseFileUploadUrl(query: GetCaseFileUploadUrlRequest): Promise<GetCaseFileUploadUrlResponse>;
    /**
     * 调用RegisterDevices注册一个或多个SIP设备到指定实例下的指定坐席，SIP设备可以是SIP话机或SIP软电话。
     */
    RegisterDevices(query: RegisterDevicesRequest): Promise<RegisterDevicesResponse>;
    /**
     * 调用SwitchToConference将指定实例下的指定通话的状态切换至三方会议，通常用于咨询转会议的场景。
     */
    SwitchToConference(query: SwitchToConferenceRequest): Promise<SwitchToConferenceResponse>;
    /**
     * 调用GetHistoricalCampaignReport接口获取指定实例下指定ID对应的预测式外呼活动的历史数据报表。
     */
    GetHistoricalCampaignReport(query: GetHistoricalCampaignReportRequest): Promise<GetHistoricalCampaignReportResponse>;
    /**
     * 调用ListCallTags获取指定实例下的所有号码标签。
     */
    ListCallTags(query: ListCallTagsRequest): Promise<ListCallTagsResponse>;
    /**
     * 调用ExportCustomCallTagging导出指定实例下的全部呼入号码标记。
     */
    ExportCustomCallTagging(query: ExportCustomCallTaggingRequest): Promise<ExportCustomCallTaggingResponse>;
    /**
     * 调用CreateCallTags在指定实例下创建多个号码标签。
     */
    CreateCallTags(query: CreateCallTagsRequest): Promise<CreateCallTagsResponse>;
    /**
     * 调用ExportDoNotCallNumbers导出指定实例下指定搜索条件过滤后的禁止外呼号码列表。
     */
    ExportDoNotCallNumbers(query: ExportDoNotCallNumbersRequest): Promise<ExportDoNotCallNumbersResponse>;
    /**
     * 调用DeleteCallTag删除指定实例下的号码标签。
     */
    DeleteCallTag(query: DeleteCallTagRequest): Promise<DeleteCallTagResponse>;
    /**
     * 调用GetDoNotCallFileUploadParameters获取禁呼文件的上传参数，当通过文件导入禁止外呼号码时，需要先调用此接口将禁呼号码文件上传到云呼叫中心的公共OSS空间，之后再调用ImportDoNotCallNumbers执行导入。
     */
    GetDoNotCallFileUploadParameters(query: GetDoNotCallFileUploadParametersRequest): Promise<GetDoNotCallFileUploadParametersResponse>;
    /**
     * 调用ImportCustomCallTagging导入多个呼入号码标记到指定实例中。
     */
    ImportCustomCallTagging(query: ImportCustomCallTaggingRequest): Promise<ImportCustomCallTaggingResponse>;
    /**
     * 调用ImportDoNotCallNumbers向指定实例下导入一个或多个禁止外呼号码，导入方式包括手动录入和文件上传两种方式。
     */
    ImportDoNotCallNumbers(query: ImportDoNotCallNumbersRequest): Promise<ImportDoNotCallNumbersResponse>;
    /**
     * 调用ListDoNotCallNumbers获取指定实例下指定搜索条件过滤后的禁止外呼号码列表。
     */
    ListDoNotCallNumbers(query: ListDoNotCallNumbersRequest): Promise<ListDoNotCallNumbersResponse>;
    /**
     * 调用RemoveDoNotCallNumbers删除指定实例下的一个或多个禁止外呼号码配置项。
     */
    RemoveDoNotCallNumbers(query: RemoveDoNotCallNumbersRequest): Promise<RemoveDoNotCallNumbersResponse>;
    /**
     * 调用ListCustomCallTagging获取指定实例下的呼入号码标记列表。
     */
    ListCustomCallTagging(query: ListCustomCallTaggingRequest): Promise<ListCustomCallTaggingResponse>;
    /**
     * 调用CreateCustomCallTagging在指定实例下创建一个或多个呼入号码标记。
     */
    CreateCustomCallTagging(query: CreateCustomCallTaggingRequest): Promise<CreateCustomCallTaggingResponse>;
    /**
     * 调用DeleteCustomCallTagging删除指定实例下指定号码对应的呼入号码标记。
     */
    DeleteCustomCallTagging(query: DeleteCustomCallTaggingRequest): Promise<DeleteCustomCallTaggingResponse>;
    /**
     * 调用ModifyCustomCallTagging修改指定实例下指定号码对应的呼入号码标记的信息，可以修改呼入号码标记的描述和绑定的号码标签。
     */
    ModifyCustomCallTagging(query: ModifyCustomCallTaggingRequest): Promise<ModifyCustomCallTaggingResponse>;
    /**
     * 调用GetRealtimeCampaignStats获取指定实例下指定ID对应的预测式外呼活动的实时坐席状态数据。
     */
    GetRealtimeCampaignStats(query: GetRealtimeCampaignStatsRequest): Promise<GetRealtimeCampaignStatsResponse>;
    /**
     * 调用ListAgentSummaryReportsSinceMidnight获取指定实例下按指定条件过滤后的坐席历史数据报表，统计的是从当天0时开始，到当前时间为止的数据。该接口仅对特定用户开放，其他客户不建议调用。
     */
    ListAgentSummaryReportsSinceMidnight(query: ListAgentSummaryReportsSinceMidnightRequest): Promise<ListAgentSummaryReportsSinceMidnightResponse>;
    /**
     * 调用ListSkillgroupStates获取指定实例下指定技能组的状态列表，该接口仅对特定用户开放，其他客户不建议调用。
     */
    ListSkillGroupStates(query: ListSkillGroupStatesRequest): Promise<ListSkillGroupStatesResponse>;
    /**
     * 调用ListSkillgroupSummaryReportsSinceMidnight获取指定实例下按指定条件过滤后的技能组历史数据报表，统计的时间范围是从当天0时开始，到当前时间结束。该接口仅对特定用户开放，其他客户不建议调用。
     */
    ListSkillGroupSummaryReportsSinceMidnight(query: ListSkillGroupSummaryReportsSinceMidnightRequest): Promise<ListSkillGroupSummaryReportsSinceMidnightResponse>;
    /**
     * 调用ListAgentStates获取指定实例下按指定条件过滤后的坐席状态列表，该接口仅对特定用户开放，其他客户不建议调用。
     */
    ListAgentStates(query: ListAgentStatesRequest): Promise<ListAgentStatesResponse>;
    /**
     * 调用ListMonoRecordings获取指定实例下指定通话的各通话方的单轨录音，通话中每一方都有一个话务通道，每个话务通道对应生成一个合轨录音，格式为WAV。
     */
    ListMonoRecordings(query: ListMonoRecordingsRequest): Promise<ListMonoRecordingsResponse>;
    /**
     * 调用ListMultiChannelRecordings获取指定实例下指定通话的各通话方的多轨录音，通话中每一方都有一个话务通道，每个话务通道对应一个多轨录音，格式为MKV。
     */
    ListMultiChannelRecordings(query: ListMultiChannelRecordingsRequest): Promise<ListMultiChannelRecordingsResponse>;
    /**
     * 调用GetSkillGroup获取指定实例下指定技能组ID对应的技能组的信息。
     */
    GetSkillGroup(query: GetSkillGroupRequest): Promise<GetSkillGroupResponse>;
    /**
     * 调用ImportAdmins导入一个或多个管理员到指定实例下，调用者需要拥有AliyunCCCFullAccess的权限，可以在RAM控制台进行授权。
     */
    ImportAdmins(query: ImportAdminsRequest): Promise<ImportAdminsResponse>;
    /**
     * 调用StartConference发起一个会议。
     */
    StartConference(query: StartConferenceRequest): Promise<StartConferenceResponse>;
    /**
     * 调用EndConference使指定坐席退出指定实例下指定通话ID对应的通话，该通话必须处于会议状态。
     */
    EndConference(query: EndConferenceRequest): Promise<EndConferenceResponse>;
    /**
     * 调用AddCases添加外呼名单到指定实例下指定ID对应的预测式外呼活动。
     */
    AddCases(query: AddCasesRequest): Promise<AddCasesResponse>;
    /**
     * 调用GetConversationDetail获取指定实例下指定通话ID对应的通话的对话详情，注意，实例及技能组需要开通质检推送才能获取到对话详情。
     */
    GetConversationDetail(query: GetConversationDetailRequest): Promise<GetConversationDetailResponse>;
    /**
     * 调用GetConversationDetail获取指定实例下指定通话ID对应的通话的对话详情，注意，实例及技能组需要开通质检推送才能获取到对话详情。
     */
    GetConversationDetail(query: GetConversationDetailRequest): Promise<GetConversationDetailResponse>;
    /**
     * 调用ListLegacyAgentEventLogs获取1.0遗留坐席事件日志列表，该接口仅对特定用户开放，其他客户不建议调用。
     */
    ListLegacyAgentEventLogs(query: ListLegacyAgentEventLogsRequest): Promise<ListLegacyAgentEventLogsResponse>;
    /**
     * 调用ListLegacyQueueEventLogs获取1.0遗留队列事件日志列表，该接口仅对特定用户开放，其他客户不建议调用。
     */
    ListLegacyQueueEventLogs(query: ListLegacyQueueEventLogsRequest): Promise<ListLegacyQueueEventLogsResponse>;
    /**
     * 调用ListLegacyAgentStatusLogs获取1.0遗留坐席状态日志列表，该接口仅对特定用户开放，其他客户不建议调用。
     */
    ListLegacyAgentStatusLogs(query: ListLegacyAgentStatusLogsRequest): Promise<ListLegacyAgentStatusLogsResponse>;
    /**
     * 获取离线质检音频文件相关参数。一般情况下，如果客户在云联络中心中配置了质检功能，则需要离线质检的音频文件和相应的参数会自动传递给智能质检；只有当客户没有在云联络中心中配置质检功能，并且希望自己把联络中心的录音推送给质检时才需要调用此接口获取推送质检录音的相关参数。
     */
    GetUploadAudioDataParams(query: GetUploadAudioDataParamsRequest): Promise<GetUploadAudioDataParamsResponse>;
    /**
     * 发起隐私呼叫。
     */
    StartPrivacyCall(query: StartPrivacyCallRequest): Promise<StartPrivacyCallResponse>;
    /**
     * 录音解冻
     */
    RestoreArchivedRecordings(query: RestoreArchivedRecordingsRequest): Promise<RestoreArchivedRecordingsResponse>;
    /**
     * 重拨脱敏后的话单中的号码
     */
    RedialCall(query: RedialCallRequest): Promise<RedialCallResponse>;
    /**
     * 获取早媒体音频
     */
    GetEarlyMediaRecording(query: GetEarlyMediaRecordingRequest): Promise<GetEarlyMediaRecordingResponse>;
    /**
     * 调用AppendCases添加外呼名单到指定实例下指定ID对应的预测式外呼活动。
     */
    AppendCases(query: AppendCasesRequest): Promise<AppendCasesResponse>;
    /**
     * 调用ListIntervalAgentSkillGroupReport获取指定实例下指定坐席的分段统计报表。
     */
    ListIntervalAgentSkillGroupReport(query: ListIntervalAgentSkillGroupReportRequest): Promise<ListIntervalAgentSkillGroupReportResponse>;
    /**
     * 调用ListHistoricalAgentSkillGroupReport获取指定实例下的一个或多个坐席的历史分组数据报表。
     */
    ListHistoricalAgentSkillGroupReport(query: ListHistoricalAgentSkillGroupReportRequest): Promise<ListHistoricalAgentSkillGroupReportResponse>;
    /**
     * 修改外呼活动参数。
     */
    UpdateCampaign(query: UpdateCampaignRequest): Promise<UpdateCampaignResponse>;
    /**
     * 使用GetTicketTemplate获取工单模板定义信息。
     */
    GetTicketTemplate(query: GetTicketTemplateRequest): Promise<GetTicketTemplateResponse>;
    /**
     * 使用ListCategories获取类目信息。
     */
    ListCategories(query: ListCategoriesRequest): Promise<ListCategoriesResponse>;
    /**
     * 使用CreateTicket创建工单。
     */
    CreateTicket(query: CreateTicketRequest): Promise<CreateTicketResponse>;
    /**
     * 使用ListTickerTemplate获取工单模板列表。
     */
    ListTicketTemplates(query: ListTicketTemplatesRequest): Promise<ListTicketTemplatesResponse>;
    /**
     * 分析指定的文字通话内容，提取摘要类相关信息，比如标题，关键词、小结以及其他指定的信息。
     */
    AnalyzeConversation(query: AnalyzeConversationRequest): Promise<AnalyzeConversationResponse>;
    /**
     * 批量查询指定号码黑名单打标状态。
     */
    ListBlacklistCallTaggings(query: ListBlacklistCallTaggingsRequest): Promise<ListBlacklistCallTaggingsResponse>;
    /**
     * 对指定号码添加黑名单标签，可结合IVR设置，防止其频繁呼入骚扰。
     */
    AddBlacklistCallTagging(query: AddBlacklistCallTaggingRequest): Promise<AddBlacklistCallTaggingResponse>;
    /**
     * 移除指定号码的黑名单标签。
     */
    RemoveBlacklistCallTagging(query: RemoveBlacklistCallTaggingRequest): Promise<RemoveBlacklistCallTaggingResponse>;
    DeleteDocument(query: DeleteDocumentRequest): Promise<DeleteDocumentResponse>;
    CreateSchema(query: CreateSchemaRequest): Promise<CreateSchemaResponse>;
    SaveDocument(query: SaveDocumentRequest): Promise<SaveDocumentResponse>;
    ListDocuments(query: ListDocumentsRequest): Promise<ListDocumentsResponse>;
    UpdateSchemaProperty(query: UpdateSchemaPropertyRequest): Promise<UpdateSchemaPropertyResponse>;
    DeleteSchemaProperty(query: DeleteSchemaPropertyRequest): Promise<DeleteSchemaPropertyResponse>;
    DeleteDocuments(query: DeleteDocumentsRequest): Promise<DeleteDocumentsResponse>;
    ImportDocuments(query: ImportDocumentsRequest): Promise<ImportDocumentsResponse>;
    AddSchemaProperty(query: AddSchemaPropertyRequest): Promise<AddSchemaPropertyResponse>;
    DisableSchemaProperty(query: DisableSchemaPropertyRequest): Promise<DisableSchemaPropertyResponse>;
    GetDocumentUploadParameters(query: GetDocumentUploadParametersRequest): Promise<GetDocumentUploadParametersResponse>;
    GetSchema(query: GetSchemaRequest): Promise<GetSchemaResponse>;
    EnableSchemaProperty(query: EnableSchemaPropertyRequest): Promise<EnableSchemaPropertyResponse>;
    DeleteSchema(query: DeleteSchemaRequest): Promise<DeleteSchemaResponse>;
    /**
     * 使用AddTicketTask进行加签操作，添加处理人。
     */
    AddTicketTask(query: AddTicketTaskRequest): Promise<AddTicketTaskResponse>;
    /**
     * 使用EnableTicketTemplate上线工单模板，上线中状态的工单模板，可以用于创建工单。
     */
    EnableTicketTemplate(query: EnableTicketTemplateRequest): Promise<EnableTicketTemplateResponse>;
    /**
     * 通过DeleteTicket删除指定工单。
     */
    DeleteTicket(query: DeleteTicketRequest): Promise<DeleteTicketResponse>;
    /**
     * 使用TransferTicketTask指派工单给其他处理人处理。
     */
    TransferTicketTask(query: TransferTicketTaskRequest): Promise<TransferTicketTaskResponse>;
    /**
     * 使用ListTickets获取实例下工单列表。
     */
    ListTickets(query: ListTicketsRequest): Promise<ListTicketsResponse>;
    ListTicketTasks(query: ListTicketTasksRequest): Promise<ListTicketTasksResponse>;
    /**
     * 使用WithdrawTicket撤回工单。
     */
    WithdrawTicket(query: WithdrawTicketRequest): Promise<WithdrawTicketResponse>;
    /**
     * 使用DisableTicketTemplate进行工单模板的下线操作，下线状态的模板在新建工单时不能被选中。
     */
    DisableTicketTemplate(query: DisableTicketTemplateRequest): Promise<DisableTicketTemplateResponse>;
    /**
     * 使用RejectTicket退回工单，退回的工单在创建人补充信息后可以重新提交。
     */
    RejectTicket(query: RejectTicketRequest): Promise<RejectTicketResponse>;
    /**
     * 使用DeleteTicketTemplate删除指定工单模板。
     */
    DeleteTicketTemplate(query: DeleteTicketTemplateRequest): Promise<DeleteTicketTemplateResponse>;
    /**
     * 使用ResubmitTicket接口对驳回/退回的工单重新提交。
     */
    ResubmitTicket(query: ResubmitTicketRequest): Promise<ResubmitTicketResponse>;
    /**
     * 使用GetTicketSummaryReport获取工单状态统计数据。
     */
    GetTicketSummaryReport(query: GetTicketSummaryReportRequest): Promise<GetTicketSummaryReportResponse>;
    /**
     * 使用TerminateTicket关闭工单。
     */
    TerminateTicket(query: TerminateTicketRequest): Promise<TerminateTicketResponse>;
    /**
     * 使用ListCommonTicketFields获取实例下定义的工单字段类型。
     */
    ListCommonTicketFields(query: ListCommonTicketFieldsRequest): Promise<ListCommonTicketFieldsResponse>;
    /**
     * 使用GetTicket获取指定工单信息。
     */
    GetTicket(query: GetTicketRequest): Promise<GetTicketResponse>;
    /**
     * 使用UpdateTicket更新工单内容。
     */
    UpdateTicket(query: UpdateTicketRequest): Promise<UpdateTicketResponse>;
    /**
     * 调用AcceptChat接受指定实例下指定话务ID对应的聊天。
     */
    AcceptChat(query: AcceptChatRequest): Promise<AcceptChatResponse>;
    /**
     * 调用GeVisitortLoginDetails获取网络业务访客的登录信息，服务器地址信息、鉴权信息等。
     */
    GetVisitorLoginDetails(query: GetVisitorLoginDetailsRequest): Promise<GetVisitorLoginDetailsResponse>;
    /**
     * 坐席通过RejectChat拒绝接受被分配的聊天。
     */
    RejectChat(query: RejectChatRequest): Promise<RejectChatResponse>;
    /**
     * 调用StartChat发起聊天。
     */
    StartChat(query: StartChatRequest): Promise<StartChatResponse>;
    /**
     * 通话ReleaseChat接口结束当前聊天。
     */
    ReleaseChat(query: ReleaseChatRequest): Promise<ReleaseChatResponse>;
    /**
     * 调用ClaimChat认领指定实例下指定话务ID对应的聊天。
     */
    ClaimChat(query: ClaimChatRequest): Promise<ClaimChatResponse>;
    /**
     * 使用FinishTicketTask对工单进行处理。
     */
    FinishTicketTask(query: FinishTicketTaskRequest): Promise<FinishTicketTaskResponse>;
}
export default CCC;
