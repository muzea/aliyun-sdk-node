import { CreateEditingProjectRequest } from "./CreateEditingProject/req";
import { CreateEditingProjectResponse } from "./CreateEditingProject/res";
import { DeleteEditingProjectsRequest } from "./DeleteEditingProjects/req";
import { DeleteEditingProjectsResponse } from "./DeleteEditingProjects/res";
import { DeleteMediaInfosRequest } from "./DeleteMediaInfos/req";
import { DeleteMediaInfosResponse } from "./DeleteMediaInfos/res";
import { GetEditingProjectRequest } from "./GetEditingProject/req";
import { GetEditingProjectResponse } from "./GetEditingProject/res";
import { GetMediaProducingJobRequest } from "./GetMediaProducingJob/req";
import { GetMediaProducingJobResponse } from "./GetMediaProducingJob/res";
import { ListMediaBasicInfosRequest } from "./ListMediaBasicInfos/req";
import { ListMediaBasicInfosResponse } from "./ListMediaBasicInfos/res";
import { GetMediaInfoRequest } from "./GetMediaInfo/req";
import { GetMediaInfoResponse } from "./GetMediaInfo/res";
import { RegisterMediaInfoRequest } from "./RegisterMediaInfo/req";
import { RegisterMediaInfoResponse } from "./RegisterMediaInfo/res";
import { SearchEditingProjectRequest } from "./SearchEditingProject/req";
import { SearchEditingProjectResponse } from "./SearchEditingProject/res";
import { SubmitMediaProducingJobRequest } from "./SubmitMediaProducingJob/req";
import { SubmitMediaProducingJobResponse } from "./SubmitMediaProducingJob/res";
import { UpdateEditingProjectRequest } from "./UpdateEditingProject/req";
import { UpdateEditingProjectResponse } from "./UpdateEditingProject/res";
import { UpdateMediaInfoRequest } from "./UpdateMediaInfo/req";
import { UpdateMediaInfoResponse } from "./UpdateMediaInfo/res";
import { ListPublicMediaBasicInfosRequest } from "./ListPublicMediaBasicInfos/req";
import { ListPublicMediaBasicInfosResponse } from "./ListPublicMediaBasicInfos/res";
import { ListAllPublicMediaTagsRequest } from "./ListAllPublicMediaTags/req";
import { ListAllPublicMediaTagsResponse } from "./ListAllPublicMediaTags/res";
import { ListMediaProducingJobsRequest } from "./ListMediaProducingJobs/req";
import { ListMediaProducingJobsResponse } from "./ListMediaProducingJobs/res";
import { SubmitASRJobRequest } from "./SubmitASRJob/req";
import { SubmitASRJobResponse } from "./SubmitASRJob/res";
import { ListSmartJobsRequest } from "./ListSmartJobs/req";
import { ListSmartJobsResponse } from "./ListSmartJobs/res";
import { DeleteSmartJobRequest } from "./DeleteSmartJob/req";
import { DeleteSmartJobResponse } from "./DeleteSmartJob/res";
import { GetSmartHandleJobRequest } from "./GetSmartHandleJob/req";
import { GetSmartHandleJobResponse } from "./GetSmartHandleJob/res";
import { AddEditingProjectMaterialsRequest } from "./AddEditingProjectMaterials/req";
import { AddEditingProjectMaterialsResponse } from "./AddEditingProjectMaterials/res";
import { GetEditingProjectMaterialsRequest } from "./GetEditingProjectMaterials/req";
import { GetEditingProjectMaterialsResponse } from "./GetEditingProjectMaterials/res";
import { DeleteEditingProjectMaterialsRequest } from "./DeleteEditingProjectMaterials/req";
import { DeleteEditingProjectMaterialsResponse } from "./DeleteEditingProjectMaterials/res";
import { SubmitAudioProduceJobRequest } from "./SubmitAudioProduceJob/req";
import { SubmitAudioProduceJobResponse } from "./SubmitAudioProduceJob/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { GetDefaultStorageLocationRequest } from "./GetDefaultStorageLocation/req";
import { GetDefaultStorageLocationResponse } from "./GetDefaultStorageLocation/res";
import { SetDefaultStorageLocationRequest } from "./SetDefaultStorageLocation/req";
import { SetDefaultStorageLocationResponse } from "./SetDefaultStorageLocation/res";
import { SetEventCallbackRequest } from "./SetEventCallback/req";
import { SetEventCallbackResponse } from "./SetEventCallback/res";
import { GetEventCallbackRequest } from "./GetEventCallback/req";
import { GetEventCallbackResponse } from "./GetEventCallback/res";
import { BatchGetMediaInfosRequest } from "./BatchGetMediaInfos/req";
import { BatchGetMediaInfosResponse } from "./BatchGetMediaInfos/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { AddTemplateRequest } from "./AddTemplate/req";
import { AddTemplateResponse } from "./AddTemplate/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { GetLiveEditingJobRequest } from "./GetLiveEditingJob/req";
import { GetLiveEditingJobResponse } from "./GetLiveEditingJob/res";
import { SubmitLiveEditingJobRequest } from "./SubmitLiveEditingJob/req";
import { SubmitLiveEditingJobResponse } from "./SubmitLiveEditingJob/res";
import { GetLiveEditingIndexFileRequest } from "./GetLiveEditingIndexFile/req";
import { GetLiveEditingIndexFileResponse } from "./GetLiveEditingIndexFile/res";
import { GetTemplateMaterialsRequest } from "./GetTemplateMaterials/req";
import { GetTemplateMaterialsResponse } from "./GetTemplateMaterials/res";
import { AddFavoritePublicMediaRequest } from "./AddFavoritePublicMedia/req";
import { AddFavoritePublicMediaResponse } from "./AddFavoritePublicMedia/res";
import { SearchPublicMediaInfoRequest } from "./SearchPublicMediaInfo/req";
import { SearchPublicMediaInfoResponse } from "./SearchPublicMediaInfo/res";
import { GetPublicMediaInfoRequest } from "./GetPublicMediaInfo/req";
import { GetPublicMediaInfoResponse } from "./GetPublicMediaInfo/res";
import { CancelFavoritePublicMediaRequest } from "./CancelFavoritePublicMedia/req";
import { CancelFavoritePublicMediaResponse } from "./CancelFavoritePublicMedia/res";
import { SubmitDynamicChartJobRequest } from "./SubmitDynamicChartJob/req";
import { SubmitDynamicChartJobResponse } from "./SubmitDynamicChartJob/res";
import { SearchMediaRequest } from "./SearchMedia/req";
import { SearchMediaResponse } from "./SearchMedia/res";
import { AddCategoryRequest } from "./AddCategory/req";
import { AddCategoryResponse } from "./AddCategory/res";
import { DeleteCategoryRequest } from "./DeleteCategory/req";
import { DeleteCategoryResponse } from "./DeleteCategory/res";
import { CreateUploadMediaRequest } from "./CreateUploadMedia/req";
import { CreateUploadMediaResponse } from "./CreateUploadMedia/res";
import { UploadMediaByURLRequest } from "./UploadMediaByURL/req";
import { UploadMediaByURLResponse } from "./UploadMediaByURL/res";
import { UpdateCategoryRequest } from "./UpdateCategory/req";
import { UpdateCategoryResponse } from "./UpdateCategory/res";
import { GetUrlUploadInfosRequest } from "./GetUrlUploadInfos/req";
import { GetUrlUploadInfosResponse } from "./GetUrlUploadInfos/res";
import { GetCategoriesRequest } from "./GetCategories/req";
import { GetCategoriesResponse } from "./GetCategories/res";
import { RefreshUploadMediaRequest } from "./RefreshUploadMedia/req";
import { RefreshUploadMediaResponse } from "./RefreshUploadMedia/res";
import { CreateCustomTemplateRequest } from "./CreateCustomTemplate/req";
import { CreateCustomTemplateResponse } from "./CreateCustomTemplate/res";
import { UpdateCustomTemplateRequest } from "./UpdateCustomTemplate/req";
import { UpdateCustomTemplateResponse } from "./UpdateCustomTemplate/res";
import { DeleteCustomTemplateRequest } from "./DeleteCustomTemplate/req";
import { DeleteCustomTemplateResponse } from "./DeleteCustomTemplate/res";
import { ListCustomTemplatesRequest } from "./ListCustomTemplates/req";
import { ListCustomTemplatesResponse } from "./ListCustomTemplates/res";
import { GetSnapshotUrlsRequest } from "./GetSnapshotUrls/req";
import { GetSnapshotUrlsResponse } from "./GetSnapshotUrls/res";
import { GetCustomTemplateRequest } from "./GetCustomTemplate/req";
import { GetCustomTemplateResponse } from "./GetCustomTemplate/res";
import { SetDefaultCustomTemplateRequest } from "./SetDefaultCustomTemplate/req";
import { SetDefaultCustomTemplateResponse } from "./SetDefaultCustomTemplate/res";
import { GetTranscodeJobRequest } from "./GetTranscodeJob/req";
import { GetTranscodeJobResponse } from "./GetTranscodeJob/res";
import { ListDynamicImageJobsRequest } from "./ListDynamicImageJobs/req";
import { ListDynamicImageJobsResponse } from "./ListDynamicImageJobs/res";
import { ListTranscodeJobsRequest } from "./ListTranscodeJobs/req";
import { ListTranscodeJobsResponse } from "./ListTranscodeJobs/res";
import { GetDynamicImageJobRequest } from "./GetDynamicImageJob/req";
import { GetDynamicImageJobResponse } from "./GetDynamicImageJob/res";
import { ListMediaInfoJobsRequest } from "./ListMediaInfoJobs/req";
import { ListMediaInfoJobsResponse } from "./ListMediaInfoJobs/res";
import { GetSnapshotJobRequest } from "./GetSnapshotJob/req";
import { GetSnapshotJobResponse } from "./GetSnapshotJob/res";
import { SubmitDynamicImageJobRequest } from "./SubmitDynamicImageJob/req";
import { SubmitDynamicImageJobResponse } from "./SubmitDynamicImageJob/res";
import { SubmitMediaInfoJobRequest } from "./SubmitMediaInfoJob/req";
import { SubmitMediaInfoJobResponse } from "./SubmitMediaInfoJob/res";
import { ListSnapshotJobsRequest } from "./ListSnapshotJobs/req";
import { ListSnapshotJobsResponse } from "./ListSnapshotJobs/res";
import { SubmitSnapshotJobRequest } from "./SubmitSnapshotJob/req";
import { SubmitSnapshotJobResponse } from "./SubmitSnapshotJob/res";
import { SubmitTranscodeJobRequest } from "./SubmitTranscodeJob/req";
import { SubmitTranscodeJobResponse } from "./SubmitTranscodeJob/res";
import { GetMediaInfoJobRequest } from "./GetMediaInfoJob/req";
import { GetMediaInfoJobResponse } from "./GetMediaInfoJob/res";
import { UpdatePipelineRequest } from "./UpdatePipeline/req";
import { UpdatePipelineResponse } from "./UpdatePipeline/res";
import { DeletePipelineRequest } from "./DeletePipeline/req";
import { DeletePipelineResponse } from "./DeletePipeline/res";
import { GetPipelineRequest } from "./GetPipeline/req";
import { GetPipelineResponse } from "./GetPipeline/res";
import { ListSystemTemplatesRequest } from "./ListSystemTemplates/req";
import { ListSystemTemplatesResponse } from "./ListSystemTemplates/res";
import { SubmitSyncMediaInfoJobRequest } from "./SubmitSyncMediaInfoJob/req";
import { SubmitSyncMediaInfoJobResponse } from "./SubmitSyncMediaInfoJob/res";
import { ListPipelinesRequest } from "./ListPipelines/req";
import { ListPipelinesResponse } from "./ListPipelines/res";
import { GetSystemTemplateRequest } from "./GetSystemTemplate/req";
import { GetSystemTemplateResponse } from "./GetSystemTemplate/res";
import { CreatePipelineRequest } from "./CreatePipeline/req";
import { CreatePipelineResponse } from "./CreatePipeline/res";
import { GetStorageListRequest } from "./GetStorageList/req";
import { GetStorageListResponse } from "./GetStorageList/res";
import { UploadStreamByURLRequest } from "./UploadStreamByURL/req";
import { UploadStreamByURLResponse } from "./UploadStreamByURL/res";
import { CreateUploadStreamRequest } from "./CreateUploadStream/req";
import { CreateUploadStreamResponse } from "./CreateUploadStream/res";
import { RegisterMediaStreamRequest } from "./RegisterMediaStream/req";
import { RegisterMediaStreamResponse } from "./RegisterMediaStream/res";
import { DeletePlayInfoRequest } from "./DeletePlayInfo/req";
import { DeletePlayInfoResponse } from "./DeletePlayInfo/res";
import { GetPlayInfoRequest } from "./GetPlayInfo/req";
import { GetPlayInfoResponse } from "./GetPlayInfo/res";
import { SubmitIProductionJobRequest } from "./SubmitIProductionJob/req";
import { SubmitIProductionJobResponse } from "./SubmitIProductionJob/res";
import { QueryIProductionJobRequest } from "./QueryIProductionJob/req";
import { QueryIProductionJobResponse } from "./QueryIProductionJob/res";
import { StartWorkflowRequest } from "./StartWorkflow/req";
import { StartWorkflowResponse } from "./StartWorkflow/res";
import { QueryMediaCensorJobDetailRequest } from "./QueryMediaCensorJobDetail/req";
import { QueryMediaCensorJobDetailResponse } from "./QueryMediaCensorJobDetail/res";
import { SubmitMediaCensorJobRequest } from "./SubmitMediaCensorJob/req";
import { SubmitMediaCensorJobResponse } from "./SubmitMediaCensorJob/res";
import { DescribeMeterImsMpsAiUsageRequest } from "./DescribeMeterImsMpsAiUsage/req";
import { DescribeMeterImsMpsAiUsageResponse } from "./DescribeMeterImsMpsAiUsage/res";
import { DescribeMeterImsMediaConvertUsageRequest } from "./DescribeMeterImsMediaConvertUsage/req";
import { DescribeMeterImsMediaConvertUsageResponse } from "./DescribeMeterImsMediaConvertUsage/res";
import { DescribeMeterImsEditUsageRequest } from "./DescribeMeterImsEditUsage/req";
import { DescribeMeterImsEditUsageResponse } from "./DescribeMeterImsEditUsage/res";
import { DescribeMeterImsSummaryRequest } from "./DescribeMeterImsSummary/req";
import { DescribeMeterImsSummaryResponse } from "./DescribeMeterImsSummary/res";
import { DescribeMeterImsMediaConvertUHDUsageRequest } from "./DescribeMeterImsMediaConvertUHDUsage/req";
import { DescribeMeterImsMediaConvertUHDUsageResponse } from "./DescribeMeterImsMediaConvertUHDUsage/res";
import { GetLiveSnapshotJobRequest } from "./GetLiveSnapshotJob/req";
import { GetLiveSnapshotJobResponse } from "./GetLiveSnapshotJob/res";
import { SendLiveSnapshotJobCommandRequest } from "./SendLiveSnapshotJobCommand/req";
import { SendLiveSnapshotJobCommandResponse } from "./SendLiveSnapshotJobCommand/res";
import { SubmitLiveSnapshotJobRequest } from "./SubmitLiveSnapshotJob/req";
import { SubmitLiveSnapshotJobResponse } from "./SubmitLiveSnapshotJob/res";
import { UpdateLiveSnapshotTemplateRequest } from "./UpdateLiveSnapshotTemplate/req";
import { UpdateLiveSnapshotTemplateResponse } from "./UpdateLiveSnapshotTemplate/res";
import { DeleteLiveSnapshotTemplateRequest } from "./DeleteLiveSnapshotTemplate/req";
import { DeleteLiveSnapshotTemplateResponse } from "./DeleteLiveSnapshotTemplate/res";
import { GetLiveSnapshotTemplateRequest } from "./GetLiveSnapshotTemplate/req";
import { GetLiveSnapshotTemplateResponse } from "./GetLiveSnapshotTemplate/res";
import { ListLiveSnapshotJobsRequest } from "./ListLiveSnapshotJobs/req";
import { ListLiveSnapshotJobsResponse } from "./ListLiveSnapshotJobs/res";
import { CreateLiveSnapshotTemplateRequest } from "./CreateLiveSnapshotTemplate/req";
import { CreateLiveSnapshotTemplateResponse } from "./CreateLiveSnapshotTemplate/res";
import { ListLiveSnapshotTemplatesRequest } from "./ListLiveSnapshotTemplates/req";
import { ListLiveSnapshotTemplatesResponse } from "./ListLiveSnapshotTemplates/res";
import { ListLiveSnapshotFilesRequest } from "./ListLiveSnapshotFiles/req";
import { ListLiveSnapshotFilesResponse } from "./ListLiveSnapshotFiles/res";
import { DeleteLiveSnapshotFilesRequest } from "./DeleteLiveSnapshotFiles/req";
import { DeleteLiveSnapshotFilesResponse } from "./DeleteLiveSnapshotFiles/res";
import { ListLiveRecordTemplatesRequest } from "./ListLiveRecordTemplates/req";
import { ListLiveRecordTemplatesResponse } from "./ListLiveRecordTemplates/res";
import { CreateLiveRecordTemplateRequest } from "./CreateLiveRecordTemplate/req";
import { CreateLiveRecordTemplateResponse } from "./CreateLiveRecordTemplate/res";
import { GetLiveRecordJobRequest } from "./GetLiveRecordJob/req";
import { GetLiveRecordJobResponse } from "./GetLiveRecordJob/res";
import { UpdateLiveRecordTemplateRequest } from "./UpdateLiveRecordTemplate/req";
import { UpdateLiveRecordTemplateResponse } from "./UpdateLiveRecordTemplate/res";
import { SubmitLiveRecordJobRequest } from "./SubmitLiveRecordJob/req";
import { SubmitLiveRecordJobResponse } from "./SubmitLiveRecordJob/res";
import { DeleteLiveRecordTemplateRequest } from "./DeleteLiveRecordTemplate/req";
import { DeleteLiveRecordTemplateResponse } from "./DeleteLiveRecordTemplate/res";
import { GetLiveRecordTemplateRequest } from "./GetLiveRecordTemplate/req";
import { GetLiveRecordTemplateResponse } from "./GetLiveRecordTemplate/res";
import { ListLiveRecordFilesRequest } from "./ListLiveRecordFiles/req";
import { ListLiveRecordFilesResponse } from "./ListLiveRecordFiles/res";
import { DeleteLiveRecordFilesRequest } from "./DeleteLiveRecordFiles/req";
import { DeleteLiveRecordFilesResponse } from "./DeleteLiveRecordFiles/res";
import { ListLiveRecordJobsRequest } from "./ListLiveRecordJobs/req";
import { ListLiveRecordJobsResponse } from "./ListLiveRecordJobs/res";
import { CreateLiveTranscodeTemplateRequest } from "./CreateLiveTranscodeTemplate/req";
import { CreateLiveTranscodeTemplateResponse } from "./CreateLiveTranscodeTemplate/res";
import { DeleteLiveTranscodeTemplateRequest } from "./DeleteLiveTranscodeTemplate/req";
import { DeleteLiveTranscodeTemplateResponse } from "./DeleteLiveTranscodeTemplate/res";
import { ListLiveTranscodeTemplatesRequest } from "./ListLiveTranscodeTemplates/req";
import { ListLiveTranscodeTemplatesResponse } from "./ListLiveTranscodeTemplates/res";
import { UpdateLiveTranscodeTemplateRequest } from "./UpdateLiveTranscodeTemplate/req";
import { UpdateLiveTranscodeTemplateResponse } from "./UpdateLiveTranscodeTemplate/res";
import { GetLiveTranscodeTemplateRequest } from "./GetLiveTranscodeTemplate/req";
import { GetLiveTranscodeTemplateResponse } from "./GetLiveTranscodeTemplate/res";
import { SubmitLiveTranscodeJobRequest } from "./SubmitLiveTranscodeJob/req";
import { SubmitLiveTranscodeJobResponse } from "./SubmitLiveTranscodeJob/res";
import { UpdateLiveTranscodeJobRequest } from "./UpdateLiveTranscodeJob/req";
import { UpdateLiveTranscodeJobResponse } from "./UpdateLiveTranscodeJob/res";
import { DeleteLiveTranscodeJobRequest } from "./DeleteLiveTranscodeJob/req";
import { DeleteLiveTranscodeJobResponse } from "./DeleteLiveTranscodeJob/res";
import { GetLiveTranscodeJobRequest } from "./GetLiveTranscodeJob/req";
import { GetLiveTranscodeJobResponse } from "./GetLiveTranscodeJob/res";
import { ListLiveTranscodeJobsRequest } from "./ListLiveTranscodeJobs/req";
import { ListLiveTranscodeJobsResponse } from "./ListLiveTranscodeJobs/res";
import { SendLiveTranscodeJobCommandRequest } from "./SendLiveTranscodeJobCommand/req";
import { SendLiveTranscodeJobCommandResponse } from "./SendLiveTranscodeJobCommand/res";
import { DescribePlayListRequest } from "./DescribePlayList/req";
import { DescribePlayListResponse } from "./DescribePlayList/res";
import { SubmitSmarttagJobRequest } from "./SubmitSmarttagJob/req";
import { SubmitSmarttagJobResponse } from "./SubmitSmarttagJob/res";
import { QuerySmarttagJobRequest } from "./QuerySmarttagJob/req";
import { QuerySmarttagJobResponse } from "./QuerySmarttagJob/res";
import { CreateAuditRequest } from "./CreateAudit/req";
import { CreateAuditResponse } from "./CreateAudit/res";
import { GetMediaMarksRequest } from "./GetMediaMarks/req";
import { GetMediaMarksResponse } from "./GetMediaMarks/res";
import { UpdateMediaMarksRequest } from "./UpdateMediaMarks/req";
import { UpdateMediaMarksResponse } from "./UpdateMediaMarks/res";
import { DeleteMediaMarksRequest } from "./DeleteMediaMarks/req";
import { DeleteMediaMarksResponse } from "./DeleteMediaMarks/res";
import { ListMediaMarksRequest } from "./ListMediaMarks/req";
import { ListMediaMarksResponse } from "./ListMediaMarks/res";
import { AddMediaMarksRequest } from "./AddMediaMarks/req";
import { AddMediaMarksResponse } from "./AddMediaMarks/res";
import { ListSmartVoiceGroupsRequest } from "./ListSmartVoiceGroups/req";
import { ListSmartVoiceGroupsResponse } from "./ListSmartVoiceGroups/res";
import { GetPackageJobRequest } from "./GetPackageJob/req";
import { GetPackageJobResponse } from "./GetPackageJob/res";
import { ListPackageJobsRequest } from "./ListPackageJobs/req";
import { ListPackageJobsResponse } from "./ListPackageJobs/res";
import { SubmitPackageJobRequest } from "./SubmitPackageJob/req";
import { SubmitPackageJobResponse } from "./SubmitPackageJob/res";
import { GetWorkflowTaskRequest } from "./GetWorkflowTask/req";
import { GetWorkflowTaskResponse } from "./GetWorkflowTask/res";
import { GetContentAnalyzeConfigRequest } from "./GetContentAnalyzeConfig/req";
import { GetContentAnalyzeConfigResponse } from "./GetContentAnalyzeConfig/res";
import { SetContentAnalyzeConfigRequest } from "./SetContentAnalyzeConfig/req";
import { SetContentAnalyzeConfigResponse } from "./SetContentAnalyzeConfig/res";
import { QueryMediaCensorJobListRequest } from "./QueryMediaCensorJobList/req";
import { QueryMediaCensorJobListResponse } from "./QueryMediaCensorJobList/res";
import { DeleteDNAFilesRequest } from "./DeleteDNAFiles/req";
import { DeleteDNAFilesResponse } from "./DeleteDNAFiles/res";
import { ListDNADBRequest } from "./ListDNADB/req";
import { ListDNADBResponse } from "./ListDNADB/res";
import { DeleteDNADBRequest } from "./DeleteDNADB/req";
import { DeleteDNADBResponse } from "./DeleteDNADB/res";
import { QueryDNAJobListRequest } from "./QueryDNAJobList/req";
import { QueryDNAJobListResponse } from "./QueryDNAJobList/res";
import { CreateDNADBRequest } from "./CreateDNADB/req";
import { CreateDNADBResponse } from "./CreateDNADB/res";
import { SubmitDNAJobRequest } from "./SubmitDNAJob/req";
import { SubmitDNAJobResponse } from "./SubmitDNAJob/res";
import { CancelDNAJobRequest } from "./CancelDNAJob/req";
import { CancelDNAJobResponse } from "./CancelDNAJob/res";
import { ListDNAFilesRequest } from "./ListDNAFiles/req";
import { ListDNAFilesResponse } from "./ListDNAFiles/res";
import { GetTemplateParamsRequest } from "./GetTemplateParams/req";
import { GetTemplateParamsResponse } from "./GetTemplateParams/res";
import { SearchMediaByFaceRequest } from "./SearchMediaByFace/req";
import { SearchMediaByFaceResponse } from "./SearchMediaByFace/res";
import { SearchMediaClipByFaceRequest } from "./SearchMediaClipByFace/req";
import { SearchMediaClipByFaceResponse } from "./SearchMediaClipByFace/res";
import { SubmitAvatarVideoJobRequest } from "./SubmitAvatarVideoJob/req";
import { SubmitAvatarVideoJobResponse } from "./SubmitAvatarVideoJob/res";
import { ListSmartSysAvatarModelsRequest } from "./ListSmartSysAvatarModels/req";
import { ListSmartSysAvatarModelsResponse } from "./ListSmartSysAvatarModels/res";
import { DecryptKMSDataKeyRequest } from "./DecryptKMSDataKey/req";
import { DecryptKMSDataKeyResponse } from "./DecryptKMSDataKey/res";
import { GenerateKMSDataKeyRequest } from "./GenerateKMSDataKey/req";
import { GenerateKMSDataKeyResponse } from "./GenerateKMSDataKey/res";
import { DeleteCustomizedVoiceJobRequest } from "./DeleteCustomizedVoiceJob/req";
import { DeleteCustomizedVoiceJobResponse } from "./DeleteCustomizedVoiceJob/res";
import { SubmitCustomizedVoiceJobRequest } from "./SubmitCustomizedVoiceJob/req";
import { SubmitCustomizedVoiceJobResponse } from "./SubmitCustomizedVoiceJob/res";
import { GetCustomizedVoiceRequest } from "./GetCustomizedVoice/req";
import { GetCustomizedVoiceResponse } from "./GetCustomizedVoice/res";
import { ListCustomizedVoicesRequest } from "./ListCustomizedVoices/req";
import { ListCustomizedVoicesResponse } from "./ListCustomizedVoices/res";
import { ListCustomizedVoiceJobsRequest } from "./ListCustomizedVoiceJobs/req";
import { ListCustomizedVoiceJobsResponse } from "./ListCustomizedVoiceJobs/res";
import { CreateCustomizedVoiceJobRequest } from "./CreateCustomizedVoiceJob/req";
import { CreateCustomizedVoiceJobResponse } from "./CreateCustomizedVoiceJob/res";
import { GetCustomizedVoiceJobRequest } from "./GetCustomizedVoiceJob/req";
import { GetCustomizedVoiceJobResponse } from "./GetCustomizedVoiceJob/res";
import { UpdateCustomizedVoiceRequest } from "./UpdateCustomizedVoice/req";
import { UpdateCustomizedVoiceResponse } from "./UpdateCustomizedVoice/res";
import { DetectAudioForCustomizedVoiceJobRequest } from "./DetectAudioForCustomizedVoiceJob/req";
import { DetectAudioForCustomizedVoiceJobResponse } from "./DetectAudioForCustomizedVoiceJob/res";
import { GetDemonstrationForCustomizedVoiceJobRequest } from "./GetDemonstrationForCustomizedVoiceJob/req";
import { GetDemonstrationForCustomizedVoiceJobResponse } from "./GetDemonstrationForCustomizedVoiceJob/res";
import { GetVideoListRequest } from "./GetVideoList/req";
import { GetVideoListResponse } from "./GetVideoList/res";
import { GetAvatarTrainingJobRequest } from "./GetAvatarTrainingJob/req";
import { GetAvatarTrainingJobResponse } from "./GetAvatarTrainingJob/res";
import { ListAvatarsRequest } from "./ListAvatars/req";
import { ListAvatarsResponse } from "./ListAvatars/res";
import { GetAvatarRequest } from "./GetAvatar/req";
import { GetAvatarResponse } from "./GetAvatar/res";
import { CreateAvatarTrainingJobRequest } from "./CreateAvatarTrainingJob/req";
import { CreateAvatarTrainingJobResponse } from "./CreateAvatarTrainingJob/res";
import { UpdateAvatarTrainingJobRequest } from "./UpdateAvatarTrainingJob/req";
import { UpdateAvatarTrainingJobResponse } from "./UpdateAvatarTrainingJob/res";
import { SubmitAvatarTrainingJobRequest } from "./SubmitAvatarTrainingJob/req";
import { SubmitAvatarTrainingJobResponse } from "./SubmitAvatarTrainingJob/res";
import { DeleteAvatarTrainingJobRequest } from "./DeleteAvatarTrainingJob/req";
import { DeleteAvatarTrainingJobResponse } from "./DeleteAvatarTrainingJob/res";
import { ListAvatarTrainingJobsRequest } from "./ListAvatarTrainingJobs/req";
import { ListAvatarTrainingJobsResponse } from "./ListAvatarTrainingJobs/res";
import { InsertMediaToSearchLibRequest } from "./InsertMediaToSearchLib/req";
import { InsertMediaToSearchLibResponse } from "./InsertMediaToSearchLib/res";
import { CreateSearchIndexRequest } from "./CreateSearchIndex/req";
import { CreateSearchIndexResponse } from "./CreateSearchIndex/res";
import { SearchMediaByMultimodalRequest } from "./SearchMediaByMultimodal/req";
import { SearchMediaByMultimodalResponse } from "./SearchMediaByMultimodal/res";
import { CreateSearchLibRequest } from "./CreateSearchLib/req";
import { CreateSearchLibResponse } from "./CreateSearchLib/res";
import { DeleteMediaFromSearchLibRequest } from "./DeleteMediaFromSearchLib/req";
import { DeleteMediaFromSearchLibResponse } from "./DeleteMediaFromSearchLib/res";
import { SearchMediaByAILabelRequest } from "./SearchMediaByAILabel/req";
import { SearchMediaByAILabelResponse } from "./SearchMediaByAILabel/res";
import { QuerySearchLibRequest } from "./QuerySearchLib/req";
import { QuerySearchLibResponse } from "./QuerySearchLib/res";
import { DropSearchLibRequest } from "./DropSearchLib/req";
import { DropSearchLibResponse } from "./DropSearchLib/res";
import { UpdateMediaToSearchLibRequest } from "./UpdateMediaToSearchLib/req";
import { UpdateMediaToSearchLibResponse } from "./UpdateMediaToSearchLib/res";
import { DropSearchIndexRequest } from "./DropSearchIndex/req";
import { DropSearchIndexResponse } from "./DropSearchIndex/res";
import { QuerySearchIndexRequest } from "./QuerySearchIndex/req";
import { QuerySearchIndexResponse } from "./QuerySearchIndex/res";
import { AlterSearchIndexRequest } from "./AlterSearchIndex/req";
import { AlterSearchIndexResponse } from "./AlterSearchIndex/res";
import { SubmitStandardCustomizedVoiceJobRequest } from "./SubmitStandardCustomizedVoiceJob/req";
import { SubmitStandardCustomizedVoiceJobResponse } from "./SubmitStandardCustomizedVoiceJob/res";
import { QueryMediaIndexJobRequest } from "./QueryMediaIndexJob/req";
import { QueryMediaIndexJobResponse } from "./QueryMediaIndexJob/res";
import { SubmitBatchMediaProducingJobRequest } from "./SubmitBatchMediaProducingJob/req";
import { SubmitBatchMediaProducingJobResponse } from "./SubmitBatchMediaProducingJob/res";
import { GetBatchMediaProducingJobRequest } from "./GetBatchMediaProducingJob/req";
import { GetBatchMediaProducingJobResponse } from "./GetBatchMediaProducingJob/res";
import { SubmitTextGenerateJobRequest } from "./SubmitTextGenerateJob/req";
import { SubmitTextGenerateJobResponse } from "./SubmitTextGenerateJob/res";
import { ListBatchMediaProducingJobsRequest } from "./ListBatchMediaProducingJobs/req";
import { ListBatchMediaProducingJobsResponse } from "./ListBatchMediaProducingJobs/res";
import { SearchMediaByHybridRequest } from "./SearchMediaByHybrid/req";
import { SearchMediaByHybridResponse } from "./SearchMediaByHybrid/res";
import { SubmitVideoTranslationJobRequest } from "./SubmitVideoTranslationJob/req";
import { SubmitVideoTranslationJobResponse } from "./SubmitVideoTranslationJob/res";
import { GetRepoListByNamespaceRequest } from "./GetRepoListByNamespace/req";
import { GetRepoListByNamespaceResponse } from "./GetRepoListByNamespace/res";

interface ICE {
    /**
     * 创建云剪辑工程，支持设置标题、描述、时间线和工程封面等。
     */
    CreateEditingProject(query: CreateEditingProjectRequest): Promise<CreateEditingProjectResponse>;
    /**
     * 删除云剪辑工程，支持批量删除。
     */
    DeleteEditingProjects(query: DeleteEditingProjectsRequest): Promise<DeleteEditingProjectsResponse>;
    /**
     * 批量删除媒资信息，最多一次删20个。MediaIds不为空时，优先使用MediaIds。如果MediaIds为空，则InputURLs必须非空。
     */
    DeleteMediaInfos(query: DeleteMediaInfosRequest): Promise<DeleteMediaInfosResponse>;
    /**
     * 查询单个云剪辑工程的信息。
     */
    GetEditingProject(query: GetEditingProjectRequest): Promise<GetEditingProjectResponse>;
    /**
     * 获取剪辑合成作业的详细信息，包括剪辑合成任务的任务状态、时间线、模板及数据等。
     * 本接口仅支持查询近一年的剪辑任务数据。
     */
    GetMediaProducingJob(query: GetMediaProducingJobRequest): Promise<GetMediaProducingJobResponse>;
    /**
     * 根据用户所给参数，返回所有符合条件的媒资的基础信息。
     */
    ListMediaBasicInfos(query: ListMediaBasicInfosRequest): Promise<ListMediaBasicInfosResponse>;
    /**
     * 根据IMS mediaId或媒资InputURL，获取并返回媒资信息。
     */
    GetMediaInfo(query: GetMediaInfoRequest): Promise<GetMediaInfoResponse>;
    /**
     * 发起一个注册媒资的任务，赋予新媒资一个IMS的mediaId。接口根据InputURL，异步调用其他媒资信息服务，获取媒资的文件信息。同时用户可以设置一些基本信息的值，如标题、标签、描述等。接口同步返回mediaId，用户可以调用获取媒资内容信息GetMediaInfo的接口，获取具体的媒资信息。当前仅支持InputURL为OSS文件或VOD媒资。
     */
    RegisterMediaInfo(query: RegisterMediaInfoRequest): Promise<RegisterMediaInfoResponse>;
    /**
     * 支持按创建时间、状态搜索。
     */
    SearchEditingProject(query: SearchEditingProjectRequest): Promise<SearchEditingProjectResponse>;
    /**
     * 将一个或多个视频、音频、图片、字幕素材合成为成品。可以通过时间线(Timeline)参数直接提交剪辑设置，也可以先创建云剪辑工程，使用工程ID提交剪辑任务。
     */
    SubmitMediaProducingJob(query: SubmitMediaProducingJobRequest): Promise<SubmitMediaProducingJobResponse>;
    /**
     * 修改云剪辑工程，支持修改标题、时间线和封面等。
     */
    UpdateEditingProject(query: UpdateEditingProjectRequest): Promise<UpdateEditingProjectResponse>;
    /**
     * 根据IMS mediaId或媒资InputURL，更新一个媒资的媒资信息。
     */
    UpdateMediaInfo(query: UpdateMediaInfoRequest): Promise<UpdateMediaInfoResponse>;
    /**
     * 列出符合条件的公共素材库媒资基础信息，最多筛选出100条。
     */
    ListPublicMediaBasicInfos(query: ListPublicMediaBasicInfosRequest): Promise<ListPublicMediaBasicInfosResponse>;
    /**
     * 列出公共素材库媒资的所有标签。
     */
    ListAllPublicMediaTags(query: ListAllPublicMediaTagsRequest): Promise<ListAllPublicMediaTagsResponse>;
    /**
     * 列出符合条件的合成任务，可根据任务状态、类型查询。
     */
    ListMediaProducingJobs(query: ListMediaProducingJobsRequest): Promise<ListMediaProducingJobsResponse>;
    /**
     * 根据视频语音提取时间起止点及对应文字信息。
     */
    SubmitASRJob(query: SubmitASRJobRequest): Promise<SubmitASRJobResponse>;
    /**
     * 根据用户所给参数，返回所有符合条件的任务列表。
     */
    ListSmartJobs(query: ListSmartJobsRequest): Promise<ListSmartJobsResponse>;
    /**
     * 用户可以根据任务ID删除智能任务。
     */
    DeleteSmartJob(query: DeleteSmartJobRequest): Promise<DeleteSmartJobResponse>;
    /**
     * 获取智能任务结果，可以根据任务ID，获取智能任务信息及执行结果。
     * 本接口仅支持查询近一年的剪辑任务数据。
     */
    GetSmartHandleJob(query: GetSmartHandleJobRequest): Promise<GetSmartHandleJobResponse>;
    /**
     * 将一个或多个素材添加到剪辑工程中。
     */
    AddEditingProjectMaterials(query: AddEditingProjectMaterialsRequest): Promise<AddEditingProjectMaterialsResponse>;
    /**
     * 获取当前工程绑定的所有素材。
     */
    GetEditingProjectMaterials(query: GetEditingProjectMaterialsRequest): Promise<GetEditingProjectMaterialsResponse>;
    /**
     * 将一个或多个素材从剪辑工程中删除。
     */
    DeleteEditingProjectMaterials(query: DeleteEditingProjectMaterialsRequest): Promise<DeleteEditingProjectMaterialsResponse>;
    /**
     * 将文本内容转化成语音文件。
     */
    SubmitAudioProduceJob(query: SubmitAudioProduceJobRequest): Promise<SubmitAudioProduceJobResponse>;
    /**
     * 根据模板ID获取模板信息。高级模板有解析过长，当类型为高级模板时，Status为Available时即可使用。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 本文为您介绍获取默认存储配置API请求参数及示例。
     */
    GetDefaultStorageLocation(query: GetDefaultStorageLocationRequest): Promise<GetDefaultStorageLocationResponse>;
    /**
     * 设置临时文件的默认存储路径。默认存储地址用于ICE在线编辑器及集成webSDK使用时，剪辑过程产生的临时文件存储，如智能配置生成的音频文件等；设置默认存储地址，可避免在编辑过程中申请填写各类临时资源的存储路径时，对使用者造成困扰；如果通过API接入ICE剪辑能力，可在接口中灵活设置路径，此默认路径不生效。
     */
    SetDefaultStorageLocation(query: SetDefaultStorageLocationRequest): Promise<SetDefaultStorageLocationResponse>;
    /**
     * 设置特定事件的通知机制。
     */
    SetEventCallback(query: SetEventCallbackRequest): Promise<SetEventCallbackResponse>;
    /**
     * 调用GetEventCallback获取事件回调配置。
     */
    GetEventCallback(query: GetEventCallbackRequest): Promise<GetEventCallbackResponse>;
    /**
     * 批量获取媒资信息，支持传入多个mediaId。
     */
    BatchGetMediaInfos(query: BatchGetMediaInfosRequest): Promise<BatchGetMediaInfosResponse>;
    /**
     * 调用UpdateTemplate接口修改云剪辑模板，支持修改模板标题、模板配置等信息。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 删除模板。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 创建云剪辑模板。模板工厂是对剪辑合成时间线的一个封装，用户可以把常用的剪辑保存为模板，当有同样的需求出现时，只需要传入替换素材即可生产视频。调用AddTemplate接口创建模板，Config为模板描述，普通模板和高级模板Config有较大差异，参考下方使用文档。
     */
    AddTemplate(query: AddTemplateRequest): Promise<AddTemplateResponse>;
    /**
     * 列出符合条件的模板，支持根据模板状态、创建来源等信息查询。
     */
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    /**
     * 获取剪辑合成作业的详细信息，具体包括剪辑合成任务的任务状态、时间线、模板及数据、输出成品资源ID、存储地址、时长、以及任务其他信息等。
     * 本接口仅支持查询近一年的直播剪辑任务数据。
     */
    GetLiveEditingJob(query: GetLiveEditingJobRequest): Promise<GetLiveEditingJobResponse>;
    /**
     * 直播剪辑指将一个或多个直播流区间合成为成品。提交直播剪辑任务后，任务将进入后台排队，异步执行。提交后可以调用查询直播剪辑作业（GeLiveEditingJob ）接口根据 jobId 来查询作业状态。 也可调用获取媒资内容信息（GetMediaInfo）接口根据 MediaId 来查询生成媒资的信息。
     */
    SubmitLiveEditingJob(query: SubmitLiveEditingJobRequest): Promise<SubmitLiveEditingJobResponse>;
    /**
     * 获取直播流的索引文件，用于控制台剪辑预览。
     */
    GetLiveEditingIndexFile(query: GetLiveEditingIndexFileRequest): Promise<GetLiveEditingIndexFileResponse>;
    /**
     * 返回高级模板包中的素材地址，供高级模板编辑器使用，素材链接30分钟过期。FileList为所需素材数组，不填则默认返回全部素材地址，最多返回400个。
     */
    GetTemplateMaterials(query: GetTemplateMaterialsRequest): Promise<GetTemplateMaterialsResponse>;
    /**
     * 根据输入的mediaId 列表，将所有媒资加入收藏。
     */
    AddFavoritePublicMedia(query: AddFavoritePublicMediaRequest): Promise<AddFavoritePublicMediaResponse>;
    /**
     * 根据用户所给参数，搜索符合条件的媒资。
     */
    SearchPublicMediaInfo(query: SearchPublicMediaInfoRequest): Promise<SearchPublicMediaInfoResponse>;
    /**
     * 根据ICE公共版权媒资的 mediaId，获取并返回媒资信息。接口返回的URL为版权媒资的试听或试看地址，合成时会使用正式素材。
     */
    GetPublicMediaInfo(query: GetPublicMediaInfoRequest): Promise<GetPublicMediaInfoResponse>;
    /**
     * 根据输入的mediaId 列表，将所有媒资取消收藏。
     */
    CancelFavoritePublicMedia(query: CancelFavoritePublicMediaRequest): Promise<CancelFavoritePublicMediaResponse>;
    /**
     * 根据Excel生成折线图、饼图、柱状图等视频，支持修改线条颜色、字体等信息。
     */
    SubmitDynamicChartJob(query: SubmitDynamicChartJobRequest): Promise<SubmitDynamicChartJobResponse>;
    /**
     * 根据用户所提供参数，返回符合条件的媒资信息。
     */
    SearchMedia(query: SearchMediaRequest): Promise<SearchMediaResponse>;
    /**
     * 调用AddCategory创建媒资分类。
     */
    AddCategory(query: AddCategoryRequest): Promise<AddCategoryResponse>;
    /**
     * 调用DeleteCategory删除媒资分类。
     */
    DeleteCategory(query: DeleteCategoryRequest): Promise<DeleteCategoryResponse>;
    /**
     * 获取媒资上传地址和凭证，并创建媒资信息。
     */
    CreateUploadMedia(query: CreateUploadMediaRequest): Promise<CreateUploadMediaResponse>;
    /**
     * 调用UploadMediaByURL基于源文件URL，拉取音视频媒体文件进行上传，支持批量上传。
     */
    UploadMediaByURL(query: UploadMediaByURLRequest): Promise<UploadMediaByURLResponse>;
    /**
     * 调用UpdateCategory更新媒资分类。
     */
    UpdateCategory(query: UpdateCategoryRequest): Promise<UpdateCategoryResponse>;
    /**
     * 调用GetURLUploadInfos获取URL上传信息。
     */
    GetUrlUploadInfos(query: GetUrlUploadInfosRequest): Promise<GetUrlUploadInfosResponse>;
    /**
     * 调用GetCategories获取指定的分类信息，及其子分类（即下一级分类）的列表。
     */
    GetCategories(query: GetCategoriesRequest): Promise<GetCategoriesResponse>;
    /**
     * 用于媒资文件上传超时后重新获取媒资上传凭证。
     */
    RefreshUploadMedia(query: RefreshUploadMediaRequest): Promise<RefreshUploadMediaResponse>;
    /**
     * 创建媒体处理用户自定义模板。
     */
    CreateCustomTemplate(query: CreateCustomTemplateRequest): Promise<CreateCustomTemplateResponse>;
    /**
     * 修改媒体处理用户自定义模板信息。
     */
    UpdateCustomTemplate(query: UpdateCustomTemplateRequest): Promise<UpdateCustomTemplateResponse>;
    /**
     * 删除用户自定义模板。
     */
    DeleteCustomTemplate(query: DeleteCustomTemplateRequest): Promise<DeleteCustomTemplateResponse>;
    /**
     * 获取用户自定义点播媒体处理模板列表。
     */
    ListCustomTemplates(query: ListCustomTemplatesRequest): Promise<ListCustomTemplatesResponse>;
    /**
     * 获取截图任务输出图片的可访问URL。
     */
    GetSnapshotUrls(query: GetSnapshotUrlsRequest): Promise<GetSnapshotUrlsResponse>;
    /**
     * 获取媒体处理用户自定义模板信息。
     */
    GetCustomTemplate(query: GetCustomTemplateRequest): Promise<GetCustomTemplateResponse>;
    /**
     * 设置用户自定义点播媒体处理默认模板。
     */
    SetDefaultCustomTemplate(query: SetDefaultCustomTemplateRequest): Promise<SetDefaultCustomTemplateResponse>;
    /**
     * 查询单个转码任务详情。
     */
    GetTranscodeJob(query: GetTranscodeJobRequest): Promise<GetTranscodeJobResponse>;
    /**
     * 获取动图任务列表。
     */
    ListDynamicImageJobs(query: ListDynamicImageJobsRequest): Promise<ListDynamicImageJobsResponse>;
    /**
     * 查询转码任务列表。
     */
    ListTranscodeJobs(query: ListTranscodeJobsRequest): Promise<ListTranscodeJobsResponse>;
    /**
     * 查询动图任务详细信息。
     */
    GetDynamicImageJob(query: GetDynamicImageJobRequest): Promise<GetDynamicImageJobResponse>;
    /**
     * 查询媒体信息任务列表。
     */
    ListMediaInfoJobs(query: ListMediaInfoJobsRequest): Promise<ListMediaInfoJobsResponse>;
    /**
     * 查询截图任务详细信息。
     */
    GetSnapshotJob(query: GetSnapshotJobRequest): Promise<GetSnapshotJobResponse>;
    /**
     * 提交动图任务。
     */
    SubmitDynamicImageJob(query: SubmitDynamicImageJobRequest): Promise<SubmitDynamicImageJobResponse>;
    /**
     * 提交媒体信息异步任务。
     */
    SubmitMediaInfoJob(query: SubmitMediaInfoJobRequest): Promise<SubmitMediaInfoJobResponse>;
    /**
     * 获取截图任务列表。
     */
    ListSnapshotJobs(query: ListSnapshotJobsRequest): Promise<ListSnapshotJobsResponse>;
    /**
     * 提交截图任务。
     */
    SubmitSnapshotJob(query: SubmitSnapshotJobRequest): Promise<SubmitSnapshotJobResponse>;
    /**
     * 提交转码任务。
     */
    SubmitTranscodeJob(query: SubmitTranscodeJobRequest): Promise<SubmitTranscodeJobResponse>;
    /**
     * 查询媒体信息。
     */
    GetMediaInfoJob(query: GetMediaInfoJobRequest): Promise<GetMediaInfoJobResponse>;
    /**
     * 更新用户管道信息。
     */
    UpdatePipeline(query: UpdatePipelineRequest): Promise<UpdatePipelineResponse>;
    /**
     * 删除用户管道信息。
     */
    DeletePipeline(query: DeletePipelineRequest): Promise<DeletePipelineResponse>;
    /**
     * 获取用户管道详细信息。
     */
    GetPipeline(query: GetPipelineRequest): Promise<GetPipelineResponse>;
    /**
     * 获取媒体处理系统预置模板列表。
     */
    ListSystemTemplates(query: ListSystemTemplatesRequest): Promise<ListSystemTemplatesResponse>;
    /**
     * 调用SubmitSyncMediaInfoJob以同步模式提交媒体文件进行媒体信息分析。
     */
    SubmitSyncMediaInfoJob(query: SubmitSyncMediaInfoJobRequest): Promise<SubmitSyncMediaInfoJobResponse>;
    /**
     * 获取用户管道列表。
     */
    ListPipelines(query: ListPipelinesRequest): Promise<ListPipelinesResponse>;
    /**
     * 获取单个系统预置模板信息。
     */
    GetSystemTemplate(query: GetSystemTemplateRequest): Promise<GetSystemTemplateResponse>;
    /**
     * 创建管道。
     */
    CreatePipeline(query: CreatePipelineRequest): Promise<CreatePipelineResponse>;
    /**
     * 获取存储配置列表
     */
    GetStorageList(query: GetStorageListRequest): Promise<GetStorageListResponse>;
    /**
     * 调用UploadStreamByURL基于源文件URL，拉取媒体流文件进行上传。
     */
    UploadStreamByURL(query: UploadStreamByURLRequest): Promise<UploadStreamByURLResponse>;
    /**
     * 获取媒体流上传地址和凭证。
     */
    CreateUploadStream(query: CreateUploadStreamRequest): Promise<CreateUploadStreamResponse>;
    /**
     * 注册媒体流。
     */
    RegisterMediaStream(query: RegisterMediaStreamRequest): Promise<RegisterMediaStreamResponse>;
    /**
     * 调用DeletePlayInfo删除媒体流（视频流，音频流）信息。
     */
    DeletePlayInfo(query: DeletePlayInfoRequest): Promise<DeletePlayInfoResponse>;
    /**
     * 调用GetPlayInfo通过音视频ID直接获取媒体文件（支持视频和音频）的播放地址。
     */
    GetPlayInfo(query: GetPlayInfoRequest): Promise<GetPlayInfoResponse>;
    /**
     * 调用SubmitIProductionJob提交智能生产任务。
     */
    SubmitIProductionJob(query: SubmitIProductionJobRequest): Promise<SubmitIProductionJobResponse>;
    /**
     * 调用QueryIProductionJob查询智能生产任务状态与结果。
     */
    QueryIProductionJob(query: QueryIProductionJobRequest): Promise<QueryIProductionJobResponse>;
    /**
     * 通过调用StartWorkflow接口，您可以提交工作流模板任务，从而实现基于工作流模板的自动化媒体处理流程。
     */
    StartWorkflow(query: StartWorkflowRequest): Promise<StartWorkflowResponse>;
    /**
     * 调用QueryMediaCensorJobDetail查询媒体审核作业的详细信息。
     */
    QueryMediaCensorJobDetail(query: QueryMediaCensorJobDetailRequest): Promise<QueryMediaCensorJobDetailResponse>;
    /**
     * 调用SubmitMediaCensorJob提交媒体审核作业。
     */
    SubmitMediaCensorJob(query: SubmitMediaCensorJobRequest): Promise<SubmitMediaCensorJobResponse>;
    /**
     * IMS的MPS-AI用量查询，最大查询范围31天，最远可查90天内的数据。
     */
    DescribeMeterImsMpsAiUsage(query: DescribeMeterImsMpsAiUsageRequest): Promise<DescribeMeterImsMpsAiUsageResponse>;
    /**
     * IMS的点播转码计量查询，最大查询范围31天，最远可查90天内的数据。
     */
    DescribeMeterImsMediaConvertUsage(query: DescribeMeterImsMediaConvertUsageRequest): Promise<DescribeMeterImsMediaConvertUsageResponse>;
    /**
     * IMS点播视频剪辑用量查询，最大查询范围31天，最远可查90天内的数据。
     */
    DescribeMeterImsEditUsage(query: DescribeMeterImsEditUsageRequest): Promise<DescribeMeterImsEditUsageResponse>;
    /**
     * IMS点播用量统计查询，最大查询范围31天，最远可查90天内的数据。
     */
    DescribeMeterImsSummary(query: DescribeMeterImsSummaryRequest): Promise<DescribeMeterImsSummaryResponse>;
    /**
     * IMS的MPS转码UHD计量查询，最大查询范围31天，最远可查90天内的数据。
     */
    DescribeMeterImsMediaConvertUHDUsage(query: DescribeMeterImsMediaConvertUHDUsageRequest): Promise<DescribeMeterImsMediaConvertUHDUsageResponse>;
    /**
     * 调用GetLiveSnapshotJob获取单个实时截图任务。
     */
    GetLiveSnapshotJob(query: GetLiveSnapshotJobRequest): Promise<GetLiveSnapshotJobResponse>;
    /**
     * 发送实时截图任务指令。
     */
    SendLiveSnapshotJobCommand(query: SendLiveSnapshotJobCommandRequest): Promise<SendLiveSnapshotJobCommandResponse>;
    /**
     * 调用SubmitLiveSnapshotJob提交实时截图任务。如果在推流中提交，则会自动异步启动任务，否则为未启动状态。
     */
    SubmitLiveSnapshotJob(query: SubmitLiveSnapshotJobRequest): Promise<SubmitLiveSnapshotJobResponse>;
    /**
     * 更新实时截图模板。
     */
    UpdateLiveSnapshotTemplate(query: UpdateLiveSnapshotTemplateRequest): Promise<UpdateLiveSnapshotTemplateResponse>;
    /**
     * 删除实时截图模板。
     */
    DeleteLiveSnapshotTemplate(query: DeleteLiveSnapshotTemplateRequest): Promise<DeleteLiveSnapshotTemplateResponse>;
    /**
     * 调用GetLiveSnapshotTemplate获取单个实时截图模板。
     */
    GetLiveSnapshotTemplate(query: GetLiveSnapshotTemplateRequest): Promise<GetLiveSnapshotTemplateResponse>;
    /**
     * 调用ListLiveSnapshotJobs获取实时截图任务列表，可分页获取。
     */
    ListLiveSnapshotJobs(query: ListLiveSnapshotJobsRequest): Promise<ListLiveSnapshotJobsResponse>;
    /**
     * 调用CreateLiveSnapshotTemplate创建实时截图模板，模板便于创建截图任务。
     */
    CreateLiveSnapshotTemplate(query: CreateLiveSnapshotTemplateRequest): Promise<CreateLiveSnapshotTemplateResponse>;
    /**
     * 调用ListLiveSnapshotTemplates获取实时截图模板列表，可分页获取。
     */
    ListLiveSnapshotTemplates(query: ListLiveSnapshotTemplatesRequest): Promise<ListLiveSnapshotTemplatesResponse>;
    /**
     * 调用ListLiveSnapshotFiles获取实时截图文件列表，可分页获取。
     */
    ListLiveSnapshotFiles(query: ListLiveSnapshotFilesRequest): Promise<ListLiveSnapshotFilesResponse>;
    /**
     * 调用DeleteLiveSnapshotFiles删除实时截图文件，可选择只删除记录或同时删除原始OSS文件。
     */
    DeleteLiveSnapshotFiles(query: DeleteLiveSnapshotFilesRequest): Promise<DeleteLiveSnapshotFilesResponse>;
    /**
     * 调用ListLiveRecordTemplates获取实时录制模板列表。
     */
    ListLiveRecordTemplates(query: ListLiveRecordTemplatesRequest): Promise<ListLiveRecordTemplatesResponse>;
    /**
     * 调用CreateLiveRecordTemplate创建实时录制模板，便于提交实时录制任务。
     */
    CreateLiveRecordTemplate(query: CreateLiveRecordTemplateRequest): Promise<CreateLiveRecordTemplateResponse>;
    /**
     * 调用GetLiveRecordJob获取单个实时录制任务明细。
     */
    GetLiveRecordJob(query: GetLiveRecordJobRequest): Promise<GetLiveRecordJobResponse>;
    /**
     * 调用UpdateLiveRecordTemplate更新实时录制模板。
     */
    UpdateLiveRecordTemplate(query: UpdateLiveRecordTemplateRequest): Promise<UpdateLiveRecordTemplateResponse>;
    /**
     * 调用SubmitLiveRecordJob提交实时录制任务，对直播流进行录制。
     */
    SubmitLiveRecordJob(query: SubmitLiveRecordJobRequest): Promise<SubmitLiveRecordJobResponse>;
    /**
     * 调用DeleteLiveRecordTemplate删除实时录制模板，不影响现有任务。
     */
    DeleteLiveRecordTemplate(query: DeleteLiveRecordTemplateRequest): Promise<DeleteLiveRecordTemplateResponse>;
    /**
     * 调用GetLiveRecordTemplate获取实时录制模板明细或任务模板快照。
     */
    GetLiveRecordTemplate(query: GetLiveRecordTemplateRequest): Promise<GetLiveRecordTemplateResponse>;
    /**
     * 调用ListLiveRecordFiles查询某个时间段内的所有录制索引文件。
     */
    ListLiveRecordFiles(query: ListLiveRecordFilesRequest): Promise<ListLiveRecordFilesResponse>;
    /**
     * 调用DeleteLiveRecordFiles删除实时录制文件，可选择只删除记录或同时删除原始OSS文件。
     */
    DeleteLiveRecordFiles(query: DeleteLiveRecordFilesRequest): Promise<DeleteLiveRecordFilesResponse>;
    /**
     * 调用ListLiveRecordJobs获取实时录制任务列表，可分页获取。
     */
    ListLiveRecordJobs(query: ListLiveRecordJobsRequest): Promise<ListLiveRecordJobsResponse>;
    /**
     * 调用CreateLiveTranscodeTemplate创建实时转码模板，便于提交实时转码任务。
     */
    CreateLiveTranscodeTemplate(query: CreateLiveTranscodeTemplateRequest): Promise<CreateLiveTranscodeTemplateResponse>;
    /**
     * 删除实时转码模板。
     */
    DeleteLiveTranscodeTemplate(query: DeleteLiveTranscodeTemplateRequest): Promise<DeleteLiveTranscodeTemplateResponse>;
    /**
     * 调用ListLiveTranscodeTemplates获取实时媒体转码模版列表。
     */
    ListLiveTranscodeTemplates(query: ListLiveTranscodeTemplatesRequest): Promise<ListLiveTranscodeTemplatesResponse>;
    /**
     * 更新实时转码模板。
     */
    UpdateLiveTranscodeTemplate(query: UpdateLiveTranscodeTemplateRequest): Promise<UpdateLiveTranscodeTemplateResponse>;
    /**
     * 调用GetLiveTranscodeTemplate获取单个实时转码模板。
     */
    GetLiveTranscodeTemplate(query: GetLiveTranscodeTemplateRequest): Promise<GetLiveTranscodeTemplateResponse>;
    /**
     * 调用SubmitLiveTranscodeJob提交实时转码任务。
     */
    SubmitLiveTranscodeJob(query: SubmitLiveTranscodeJobRequest): Promise<SubmitLiveTranscodeJobResponse>;
    /**
     * 调用UpdateLiveTranscodeJob更新实时转码任务信息。
     */
    UpdateLiveTranscodeJob(query: UpdateLiveTranscodeJobRequest): Promise<UpdateLiveTranscodeJobResponse>;
    /**
     * 删除指定转码任务
     */
    DeleteLiveTranscodeJob(query: DeleteLiveTranscodeJobRequest): Promise<DeleteLiveTranscodeJobResponse>;
    /**
     * 调用GetLiveTranscodeJob获取单个实时转码任务。
     */
    GetLiveTranscodeJob(query: GetLiveTranscodeJobRequest): Promise<GetLiveTranscodeJobResponse>;
    /**
     * 调用ListLiveTranscodeJobs获取实时媒体转码任务列表。
     */
    ListLiveTranscodeJobs(query: ListLiveTranscodeJobsRequest): Promise<ListLiveTranscodeJobsResponse>;
    /**
     * 发送实时转码任务指令。
     */
    SendLiveTranscodeJobCommand(query: SendLiveTranscodeJobCommandRequest): Promise<SendLiveTranscodeJobCommandResponse>;
    /**
     * 通过播放器TraceId来获取播放记录列表，该接口有分页。
     */
    DescribePlayList(query: DescribePlayListRequest): Promise<DescribePlayListResponse>;
    /**
     * 提交智能标签作业。
     */
    SubmitSmarttagJob(query: SubmitSmarttagJobRequest): Promise<SubmitSmarttagJobResponse>;
    /**
     * 查询智能标签任务。
     */
    QuerySmarttagJob(query: QuerySmarttagJobRequest): Promise<QuerySmarttagJobResponse>;
    /**
     * 调用CreateAudit针对媒资提交人工审核。
     */
    CreateAudit(query: CreateAuditRequest): Promise<CreateAuditResponse>;
    /**
     * 按照点位ID获取媒资标记信息。
     */
    GetMediaMarks(query: GetMediaMarksRequest): Promise<GetMediaMarksResponse>;
    /**
     * 修改媒资标记信息。
     */
    UpdateMediaMarks(query: UpdateMediaMarksRequest): Promise<UpdateMediaMarksResponse>;
    /**
     * 删除媒资的标记信息。
     */
    DeleteMediaMarks(query: DeleteMediaMarksRequest): Promise<DeleteMediaMarksResponse>;
    /**
     * 列出媒资的全部标记信息。
     */
    ListMediaMarks(query: ListMediaMarksRequest): Promise<ListMediaMarksResponse>;
    /**
     * 为媒资增加标记信息。
     */
    AddMediaMarks(query: AddMediaMarksRequest): Promise<AddMediaMarksResponse>;
    /**
     * 列出智能语音发音人信息，包括发音人名称、性别、示例音频，列表按照场景进行分组。
     */
    ListSmartVoiceGroups(query: ListSmartVoiceGroupsRequest): Promise<ListSmartVoiceGroupsResponse>;
    /**
     * 获取单个打包任务信息。
     */
    GetPackageJob(query: GetPackageJobRequest): Promise<GetPackageJobResponse>;
    /**
     * 获取打包任务列表接口。
     */
    ListPackageJobs(query: ListPackageJobsRequest): Promise<ListPackageJobsResponse>;
    /**
     * 提交打包任务接口。
     */
    SubmitPackageJob(query: SubmitPackageJobRequest): Promise<SubmitPackageJobResponse>;
    /**
     * 根据任务ID查询工作流任务，包括工作流Id、工作流任务状态、工作流任务结果。
     * 本接口仅支持查询近一年的工作流任务数据。
     */
    GetWorkflowTask(query: GetWorkflowTaskRequest): Promise<GetWorkflowTaskResponse>;
    /**
     * 调用GetContentAnalyzeConfig获取智能内容分析的配置。
     */
    GetContentAnalyzeConfig(query: GetContentAnalyzeConfigRequest): Promise<GetContentAnalyzeConfigResponse>;
    /**
     * 调用SetContentAnalyzeConfig 设置智能内容分析的配置。
     */
    SetContentAnalyzeConfig(query: SetContentAnalyzeConfigRequest): Promise<SetContentAnalyzeConfigResponse>;
    /**
     * 调用QueryMediaCensorJobList查询媒体审核作业列表。
     */
    QueryMediaCensorJobList(query: QueryMediaCensorJobListRequest): Promise<QueryMediaCensorJobListResponse>;
    /**
     * 调用DeleteDNAFiles删除DNA文件。
     */
    DeleteDNAFiles(query: DeleteDNAFilesRequest): Promise<DeleteDNAFilesResponse>;
    /**
     * 调用ListDNADB查询DNA库。
     */
    ListDNADB(query: ListDNADBRequest): Promise<ListDNADBResponse>;
    /**
     * 调用DeleteDNADB删除DNA库。
     */
    DeleteDNADB(query: DeleteDNADBRequest): Promise<DeleteDNADBResponse>;
    /**
     * 调用QueryDNAJobList查询DNA作业。
     */
    QueryDNAJobList(query: QueryDNAJobListRequest): Promise<QueryDNAJobListResponse>;
    /**
     * 调用CreateDNADB创建DNA库。
     */
    CreateDNADB(query: CreateDNADBRequest): Promise<CreateDNADBResponse>;
    /**
     * 调用SubmitDNAJob提交DNA作业。
     */
    SubmitDNAJob(query: SubmitDNAJobRequest): Promise<SubmitDNAJobResponse>;
    /**
     * 调用CancelDNAJob取消DNA作业。
     */
    CancelDNAJob(query: CancelDNAJobRequest): Promise<CancelDNAJobResponse>;
    /**
     * 调用ListDNAFiles查询DNA文件。
     */
    ListDNAFiles(query: ListDNAFilesRequest): Promise<ListDNAFilesResponse>;
    /**
     * 获取模板可替换素材参数信息，包括参数名称、素材默认值、素材封面。当前仅支持高级模板。
     */
    GetTemplateParams(query: GetTemplateParamsRequest): Promise<GetTemplateParamsResponse>;
    /**
     * 人脸图片搜媒资接口（粗搜），输入一张人脸图片，搜索该人物所在媒资的相关信息。
     */
    SearchMediaByFace(query: SearchMediaByFaceRequest): Promise<SearchMediaByFaceResponse>;
    /**
     * 人脸图片搜媒资片段接口（精搜），基于粗搜结果返回该人脸所在媒资的相关人物片段信息。
     */
    SearchMediaClipByFace(query: SearchMediaClipByFaceRequest): Promise<SearchMediaClipByFaceResponse>;
    /**
     * 以人声音频或文本作为输入，渲染虚拟人视频。
     */
    SubmitAvatarVideoJob(query: SubmitAvatarVideoJobRequest): Promise<SubmitAvatarVideoJobResponse>;
    /**
     * 获取系统数字人列表，支持分页查询。
     */
    ListSmartSysAvatarModels(query: ListSmartSysAvatarModelsRequest): Promise<ListSmartSysAvatarModelsResponse>;
    /**
     * 解密KMS数据密钥中的CiphertextBlob密文。
     */
    DecryptKMSDataKey(query: DecryptKMSDataKeyRequest): Promise<DecryptKMSDataKeyResponse>;
    /**
     * 生成一个随机的KMS数据密钥，用于对视频进行标准加密转码。
     */
    GenerateKMSDataKey(query: GenerateKMSDataKeyRequest): Promise<GenerateKMSDataKeyResponse>;
    /**
     * 调用此接口可以删除处于非“训练中”与“训练成功”的人声克隆任务。
     */
    DeleteCustomizedVoiceJob(query: DeleteCustomizedVoiceJobRequest): Promise<DeleteCustomizedVoiceJobResponse>;
    /**
     * 提交人声克隆任务，VoiceId 需要与音频检测时传递的一致，云端依赖此参数寻找暂存的音频进行训练。
     * 调用此接口后，会同步返回 JobId，训练过程为异步过程。
     * 在训练期间，您可以通过调用 GetCustomizedVoiceJob - 查询人声克隆任务接口来获取当前任务是否完成或训练状态等信息。
     */
    SubmitCustomizedVoiceJob(query: SubmitCustomizedVoiceJobRequest): Promise<SubmitCustomizedVoiceJobResponse>;
    /**
     * 调用本接口可以查询特定的个性化人声信息。
     */
    GetCustomizedVoice(query: GetCustomizedVoiceRequest): Promise<GetCustomizedVoiceResponse>;
    /**
     * 列出当前用户的所有的个性化人声。
     */
    ListCustomizedVoices(query: ListCustomizedVoicesRequest): Promise<ListCustomizedVoicesResponse>;
    /**
     * 列出当前用户的所有人声克隆训练任务。
     */
    ListCustomizedVoiceJobs(query: ListCustomizedVoiceJobsRequest): Promise<ListCustomizedVoiceJobsResponse>;
    /**
     * 创建人声克隆任务，用于初始化配置人声克隆任务的基础信息。
     */
    CreateCustomizedVoiceJob(query: CreateCustomizedVoiceJobRequest): Promise<CreateCustomizedVoiceJobResponse>;
    /**
     * 查询单个人声克隆任务。
     */
    GetCustomizedVoiceJob(query: GetCustomizedVoiceJobRequest): Promise<GetCustomizedVoiceJobResponse>;
    /**
     * 调用此接口可以修改个性化人声的信息，目前仅支持修改示例音频媒资 Id 「DemoMediaId」，以支持自行维护示例音频。
     */
    UpdateCustomizedVoice(query: UpdateCustomizedVoiceRequest): Promise<UpdateCustomizedVoiceResponse>;
    /**
     * 本接口用来检测用户的朗读是否有明显的发音错误、嘈杂的环境等。
     * 云端在进行完音频检测后，对于检测合格的音频会暂存在云端，供后续训练声音时使用，请勿省略该步骤。
     */
    DetectAudioForCustomizedVoiceJob(query: DetectAudioForCustomizedVoiceJobRequest): Promise<DetectAudioForCustomizedVoiceJobResponse>;
    /**
     * 通过本接口来获取训练个性化人声所需要朗读的文本及示例音频。
     */
    GetDemonstrationForCustomizedVoiceJob(query: GetDemonstrationForCustomizedVoiceJobRequest): Promise<GetDemonstrationForCustomizedVoiceJobResponse>;
    /**
     * 获取视频信息列表。
     */
    GetVideoList(query: GetVideoListRequest): Promise<GetVideoListResponse>;
    /**
     * 本接口用于查询单个数字人任务的详细信息。
     */
    GetAvatarTrainingJob(query: GetAvatarTrainingJobRequest): Promise<GetAvatarTrainingJobResponse>;
    /**
     * 调用本接口，可以查询到您名下所有已经训练成功的数字人信息。
     */
    ListAvatars(query: ListAvatarsRequest): Promise<ListAvatarsResponse>;
    /**
     * 调用本接口，可以查询某个已经训练成功的数字人的详细信息。
     */
    GetAvatar(query: GetAvatarRequest): Promise<GetAvatarResponse>;
    /**
     * 本接口用于创建数字人训练任务，配置数字人基础信息与训练所需要的素材信息等。
     * 注意：本接口仅用于初始化训练任务相关信息，并不会提交训练，正式提交训练需调用 SubmitAvatarTrainingJob 接口。
     */
    CreateAvatarTrainingJob(query: CreateAvatarTrainingJobRequest): Promise<CreateAvatarTrainingJobResponse>;
    /**
     * 调用此接口能够修改数字人训练任务的信息，包括：
     * 1. 修改基本信息；
     * 2. 在训练失败后，更新 Video、Transparent 等信息后重新进行训练。
     */
    UpdateAvatarTrainingJob(query: UpdateAvatarTrainingJobRequest): Promise<UpdateAvatarTrainingJobResponse>;
    /**
     * 调用此接口来正式提交数字人训练任务：
     * 1. 首次提交训练；
     * 2. 在训练失败后重新提交训练。
     */
    SubmitAvatarTrainingJob(query: SubmitAvatarTrainingJobRequest): Promise<SubmitAvatarTrainingJobResponse>;
    /**
     * 调用本接口可以删除处于「初始化（草稿）」、「训练失败」状态下的任务。
     */
    DeleteAvatarTrainingJob(query: DeleteAvatarTrainingJobRequest): Promise<DeleteAvatarTrainingJobResponse>;
    /**
     * 调用本接口可以查询您名下的数字人训练任务信息列表。
     */
    ListAvatarTrainingJobs(query: ListAvatarTrainingJobsRequest): Promise<ListAvatarTrainingJobsResponse>;
    /**
     * 插入媒资到搜索库，需要提前建立好搜索库。
     */
    InsertMediaToSearchLib(query: InsertMediaToSearchLibRequest): Promise<InsertMediaToSearchLibResponse>;
    /**
     * 可以在搜索库下新增搜索索引。一个搜索库下可以有多个搜索索引。
     */
    CreateSearchIndex(query: CreateSearchIndexRequest): Promise<CreateSearchIndexResponse>;
    /**
     * 大模型搜索。用户可以使用自然语言描述进行搜索。
     */
    SearchMediaByMultimodal(query: SearchMediaByMultimodalRequest): Promise<SearchMediaByMultimodalResponse>;
    /**
     * 用户新建搜索媒资库。可以用来保存媒资。
     */
    CreateSearchLib(query: CreateSearchLibRequest): Promise<CreateSearchLibResponse>;
    /**
     * 在搜索库中删除指定媒资。
     */
    DeleteMediaFromSearchLib(query: DeleteMediaFromSearchLibRequest): Promise<DeleteMediaFromSearchLibResponse>;
    /**
     * 可以根据人名、字幕、AI分类进行多模搜索。
     */
    SearchMediaByAILabel(query: SearchMediaByAILabelRequest): Promise<SearchMediaByAILabelResponse>;
    /**
     * 查询搜索媒资库信息。
     */
    QuerySearchLib(query: QuerySearchLibRequest): Promise<QuerySearchLibResponse>;
    /**
     * 删除搜索媒资库。删除库下所有媒资。
     */
    DropSearchLib(query: DropSearchLibRequest): Promise<DropSearchLibResponse>;
    /**
     * 在搜索库中更新媒资信息。
     */
    UpdateMediaToSearchLib(query: UpdateMediaToSearchLibRequest): Promise<UpdateMediaToSearchLibResponse>;
    /**
     * 删除索引，删除后对应索引存量数据会被删除，新增媒资也不再支持对应索引分析、存储、搜索。
     */
    DropSearchIndex(query: DropSearchIndexRequest): Promise<DropSearchIndexResponse>;
    /**
     * 查询搜索索引详细信息。
     */
    QuerySearchIndex(query: QuerySearchIndexRequest): Promise<QuerySearchIndexResponse>;
    /**
     * 修改搜索索引信息（索引状态或索引配置）。
     */
    AlterSearchIndex(query: AlterSearchIndexRequest): Promise<AlterSearchIndexResponse>;
    /**
     * 提交大众版本的人声克隆任务。调用此接口后，会同步返回 JobId，训练过程为异步过程。在训练期间，您可以通过调用 GetCustomizedVoiceJob - 查询人声克隆训练任务接口来获取当前任务是否完成或训练状态等信息。
     */
    SubmitStandardCustomizedVoiceJob(query: SubmitStandardCustomizedVoiceJobRequest): Promise<SubmitStandardCustomizedVoiceJobResponse>;
    /**
     * 查询媒资对应开启的索引任务。
     */
    QueryMediaIndexJob(query: QueryMediaIndexJobRequest): Promise<QueryMediaIndexJobResponse>;
    /**
     * 将多个视频、音频、图片素材进行智能混剪，一键批量合成视频。
     */
    SubmitBatchMediaProducingJob(query: SubmitBatchMediaProducingJobRequest): Promise<SubmitBatchMediaProducingJobResponse>;
    /**
     * 获取批量智能一键成片作业的详细信息，包括作业的输入参数、任务状态、合成的媒资ID及URL。本接口仅支持查询近一年的任务数据。
     */
    GetBatchMediaProducingJob(query: GetBatchMediaProducingJobRequest): Promise<GetBatchMediaProducingJobResponse>;
    /**
     * 根据提交的关键词、字数、文案数，扩写出营销文案。由于中文的特殊性，输出文案字数可能跟需求字数有出入。提交任务成功后，根据JobId调用GetSmartHandleJob接口获取任务状态和结果。
     */
    SubmitTextGenerateJob(query: SubmitTextGenerateJobRequest): Promise<SubmitTextGenerateJobResponse>;
    /**
     * 列出符合条件的一键成片任务，可以根据任务类型、状态等条件查询。
     */
    ListBatchMediaProducingJobs(query: ListBatchMediaProducingJobsRequest): Promise<ListBatchMediaProducingJobsResponse>;
    /**
     * 媒资混合搜索。用户可以使用自然语言描述进行混合搜索。
     */
    SearchMediaByHybrid(query: SearchMediaByHybridRequest): Promise<SearchMediaByHybridResponse>;
    /**
     * 通过本接口，您可以提交视频翻译任务。当前支持字幕级翻译，即将视频中出现的字幕翻译为指定语言，未来会拓展支持声音（口播）级翻译与面容（口型）适配。
     */
    SubmitVideoTranslationJob(query: SubmitVideoTranslationJobRequest): Promise<SubmitVideoTranslationJobResponse>;
    GetRepoListByNamespace(query: GetRepoListByNamespaceRequest): Promise<GetRepoListByNamespaceResponse>;
}
export default ICE;
