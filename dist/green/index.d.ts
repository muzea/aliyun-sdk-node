import { AddPersonRequest } from "./AddPerson/req";
import { AddPersonResponse } from "./AddPerson/res";
import { AddFacesRequest } from "./AddFaces/req";
import { AddFacesResponse } from "./AddFaces/res";
import { AddGroupsRequest } from "./AddGroups/req";
import { AddGroupsResponse } from "./AddGroups/res";
import { AddSimilarityImageRequest } from "./AddSimilarityImage/req";
import { AddSimilarityImageResponse } from "./AddSimilarityImage/res";
import { AddSimilarityLibraryRequest } from "./AddSimilarityLibrary/req";
import { AddSimilarityLibraryResponse } from "./AddSimilarityLibrary/res";
import { AddVideoDnaRequest } from "./AddVideoDna/req";
import { AddVideoDnaResponse } from "./AddVideoDna/res";
import { AddVideoDnaGroupRequest } from "./AddVideoDnaGroup/req";
import { AddVideoDnaGroupResponse } from "./AddVideoDnaGroup/res";
import { DeleteFacesRequest } from "./DeleteFaces/req";
import { DeleteFacesResponse } from "./DeleteFaces/res";
import { DeleteGroupsRequest } from "./DeleteGroups/req";
import { DeleteGroupsResponse } from "./DeleteGroups/res";
import { DeletePersonRequest } from "./DeletePerson/req";
import { DeletePersonResponse } from "./DeletePerson/res";
import { DeleteSimilarityImageRequest } from "./DeleteSimilarityImage/req";
import { DeleteSimilarityImageResponse } from "./DeleteSimilarityImage/res";
import { DeleteSimilarityLibraryRequest } from "./DeleteSimilarityLibrary/req";
import { DeleteSimilarityLibraryResponse } from "./DeleteSimilarityLibrary/res";
import { DeleteVideoDnaRequest } from "./DeleteVideoDna/req";
import { DeleteVideoDnaResponse } from "./DeleteVideoDna/res";
import { DeleteVideoDnaGroupRequest } from "./DeleteVideoDnaGroup/req";
import { DeleteVideoDnaGroupResponse } from "./DeleteVideoDnaGroup/res";
import { DetectFaceRequest } from "./DetectFace/req";
import { DetectFaceResponse } from "./DetectFace/res";
import { FileAsyncScanRequest } from "./FileAsyncScan/req";
import { FileAsyncScanResponse } from "./FileAsyncScan/res";
import { FileAsyncScanResultsRequest } from "./FileAsyncScanResults/req";
import { FileAsyncScanResultsResponse } from "./FileAsyncScanResults/res";
import { GetAddVideoDnaResultsRequest } from "./GetAddVideoDnaResults/req";
import { GetAddVideoDnaResultsResponse } from "./GetAddVideoDnaResults/res";
import { GetFacesRequest } from "./GetFaces/req";
import { GetFacesResponse } from "./GetFaces/res";
import { GetGroupsRequest } from "./GetGroups/req";
import { GetGroupsResponse } from "./GetGroups/res";
import { GetPersonRequest } from "./GetPerson/req";
import { GetPersonResponse } from "./GetPerson/res";
import { GetPersonsRequest } from "./GetPersons/req";
import { GetPersonsResponse } from "./GetPersons/res";
import { GetSimilarityImageRequest } from "./GetSimilarityImage/req";
import { GetSimilarityImageResponse } from "./GetSimilarityImage/res";
import { GetSimilarityLibraryRequest } from "./GetSimilarityLibrary/req";
import { GetSimilarityLibraryResponse } from "./GetSimilarityLibrary/res";
import { ImageAsyncScanRequest } from "./ImageAsyncScan/req";
import { ImageAsyncScanResponse } from "./ImageAsyncScan/res";
import { ImageAsyncScanResultsRequest } from "./ImageAsyncScanResults/req";
import { ImageAsyncScanResultsResponse } from "./ImageAsyncScanResults/res";
import { ImageScanFeedbackRequest } from "./ImageScanFeedback/req";
import { ImageScanFeedbackResponse } from "./ImageScanFeedback/res";
import { ImageSyncScanRequest } from "./ImageSyncScan/req";
import { ImageSyncScanResponse } from "./ImageSyncScan/res";
import { ListSimilarityImagesRequest } from "./ListSimilarityImages/req";
import { ListSimilarityImagesResponse } from "./ListSimilarityImages/res";
import { ListSimilarityLibrariesRequest } from "./ListSimilarityLibraries/req";
import { ListSimilarityLibrariesResponse } from "./ListSimilarityLibraries/res";
import { SearchPersonRequest } from "./SearchPerson/req";
import { SearchPersonResponse } from "./SearchPerson/res";
import { SetPersonRequest } from "./SetPerson/req";
import { SetPersonResponse } from "./SetPerson/res";
import { TextFeedbackRequest } from "./TextFeedback/req";
import { TextFeedbackResponse } from "./TextFeedback/res";
import { TextScanRequest } from "./TextScan/req";
import { TextScanResponse } from "./TextScan/res";
import { UploadCredentialsRequest } from "./UploadCredentials/req";
import { UploadCredentialsResponse } from "./UploadCredentials/res";
import { VideoAsyncScanRequest } from "./VideoAsyncScan/req";
import { VideoAsyncScanResponse } from "./VideoAsyncScan/res";
import { VideoAsyncScanResultsRequest } from "./VideoAsyncScanResults/req";
import { VideoAsyncScanResultsResponse } from "./VideoAsyncScanResults/res";
import { VideoFeedbackRequest } from "./VideoFeedback/req";
import { VideoFeedbackResponse } from "./VideoFeedback/res";
import { VideoSyncScanRequest } from "./VideoSyncScan/req";
import { VideoSyncScanResponse } from "./VideoSyncScan/res";
import { VoiceAsyncScanRequest } from "./VoiceAsyncScan/req";
import { VoiceAsyncScanResponse } from "./VoiceAsyncScan/res";
import { VoiceAsyncScanResultsRequest } from "./VoiceAsyncScanResults/req";
import { VoiceAsyncScanResultsResponse } from "./VoiceAsyncScanResults/res";
import { VoiceCancelScanRequest } from "./VoiceCancelScan/req";
import { VoiceCancelScanResponse } from "./VoiceCancelScan/res";
import { VoiceIdentityCheckRequest } from "./VoiceIdentityCheck/req";
import { VoiceIdentityCheckResponse } from "./VoiceIdentityCheck/res";
import { VoiceIdentityRegisterRequest } from "./VoiceIdentityRegister/req";
import { VoiceIdentityRegisterResponse } from "./VoiceIdentityRegister/res";
import { VoiceIdentityStartCheckRequest } from "./VoiceIdentityStartCheck/req";
import { VoiceIdentityStartCheckResponse } from "./VoiceIdentityStartCheck/res";
import { VoiceIdentityStartRegisterRequest } from "./VoiceIdentityStartRegister/req";
import { VoiceIdentityStartRegisterResponse } from "./VoiceIdentityStartRegister/res";
import { VoiceIdentityUnregisterRequest } from "./VoiceIdentityUnregister/req";
import { VoiceIdentityUnregisterResponse } from "./VoiceIdentityUnregister/res";

interface GREEN {
    AddPerson(query: AddPersonRequest): Promise<AddPersonResponse>;
    AddFaces(query: AddFacesRequest): Promise<AddFacesResponse>;
    AddGroups(query: AddGroupsRequest): Promise<AddGroupsResponse>;
    AddSimilarityImage(query: AddSimilarityImageRequest): Promise<AddSimilarityImageResponse>;
    AddSimilarityLibrary(query: AddSimilarityLibraryRequest): Promise<AddSimilarityLibraryResponse>;
    AddVideoDna(query: AddVideoDnaRequest): Promise<AddVideoDnaResponse>;
    AddVideoDnaGroup(query: AddVideoDnaGroupRequest): Promise<AddVideoDnaGroupResponse>;
    DeleteFaces(query: DeleteFacesRequest): Promise<DeleteFacesResponse>;
    DeleteGroups(query: DeleteGroupsRequest): Promise<DeleteGroupsResponse>;
    DeletePerson(query: DeletePersonRequest): Promise<DeletePersonResponse>;
    DeleteSimilarityImage(query: DeleteSimilarityImageRequest): Promise<DeleteSimilarityImageResponse>;
    DeleteSimilarityLibrary(query: DeleteSimilarityLibraryRequest): Promise<DeleteSimilarityLibraryResponse>;
    DeleteVideoDna(query: DeleteVideoDnaRequest): Promise<DeleteVideoDnaResponse>;
    DeleteVideoDnaGroup(query: DeleteVideoDnaGroupRequest): Promise<DeleteVideoDnaGroupResponse>;
    DetectFace(query: DetectFaceRequest): Promise<DetectFaceResponse>;
    FileAsyncScan(query: FileAsyncScanRequest): Promise<FileAsyncScanResponse>;
    FileAsyncScanResults(query: FileAsyncScanResultsRequest): Promise<FileAsyncScanResultsResponse>;
    GetAddVideoDnaResults(query: GetAddVideoDnaResultsRequest): Promise<GetAddVideoDnaResultsResponse>;
    GetFaces(query: GetFacesRequest): Promise<GetFacesResponse>;
    GetGroups(query: GetGroupsRequest): Promise<GetGroupsResponse>;
    GetPerson(query: GetPersonRequest): Promise<GetPersonResponse>;
    GetPersons(query: GetPersonsRequest): Promise<GetPersonsResponse>;
    GetSimilarityImage(query: GetSimilarityImageRequest): Promise<GetSimilarityImageResponse>;
    GetSimilarityLibrary(query: GetSimilarityLibraryRequest): Promise<GetSimilarityLibraryResponse>;
    ImageAsyncScan(query: ImageAsyncScanRequest): Promise<ImageAsyncScanResponse>;
    ImageAsyncScanResults(query: ImageAsyncScanResultsRequest): Promise<ImageAsyncScanResultsResponse>;
    ImageScanFeedback(query: ImageScanFeedbackRequest): Promise<ImageScanFeedbackResponse>;
    ImageSyncScan(query: ImageSyncScanRequest): Promise<ImageSyncScanResponse>;
    ListSimilarityImages(query: ListSimilarityImagesRequest): Promise<ListSimilarityImagesResponse>;
    ListSimilarityLibraries(query: ListSimilarityLibrariesRequest): Promise<ListSimilarityLibrariesResponse>;
    SearchPerson(query: SearchPersonRequest): Promise<SearchPersonResponse>;
    SetPerson(query: SetPersonRequest): Promise<SetPersonResponse>;
    TextFeedback(query: TextFeedbackRequest): Promise<TextFeedbackResponse>;
    TextScan(query: TextScanRequest): Promise<TextScanResponse>;
    UploadCredentials(query: UploadCredentialsRequest): Promise<UploadCredentialsResponse>;
    VideoAsyncScan(query: VideoAsyncScanRequest): Promise<VideoAsyncScanResponse>;
    VideoAsyncScanResults(query: VideoAsyncScanResultsRequest): Promise<VideoAsyncScanResultsResponse>;
    VideoFeedback(query: VideoFeedbackRequest): Promise<VideoFeedbackResponse>;
    VideoSyncScan(query: VideoSyncScanRequest): Promise<VideoSyncScanResponse>;
    VoiceAsyncScan(query: VoiceAsyncScanRequest): Promise<VoiceAsyncScanResponse>;
    VoiceAsyncScanResults(query: VoiceAsyncScanResultsRequest): Promise<VoiceAsyncScanResultsResponse>;
    VoiceCancelScan(query: VoiceCancelScanRequest): Promise<VoiceCancelScanResponse>;
    VoiceIdentityCheck(query: VoiceIdentityCheckRequest): Promise<VoiceIdentityCheckResponse>;
    VoiceIdentityRegister(query: VoiceIdentityRegisterRequest): Promise<VoiceIdentityRegisterResponse>;
    VoiceIdentityStartCheck(query: VoiceIdentityStartCheckRequest): Promise<VoiceIdentityStartCheckResponse>;
    VoiceIdentityStartRegister(query: VoiceIdentityStartRegisterRequest): Promise<VoiceIdentityStartRegisterResponse>;
    VoiceIdentityUnregister(query: VoiceIdentityUnregisterRequest): Promise<VoiceIdentityUnregisterResponse>;
}
export default GREEN;
