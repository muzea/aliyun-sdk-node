import { ListProjectsRequest } from "./ListProjects/req";
import { ListProjectsResponse } from "./ListProjects/res";
import { FuzzyQueryRequest } from "./FuzzyQuery/req";
import { FuzzyQueryResponse } from "./FuzzyQuery/res";
import { BatchGetFileMetaRequest } from "./BatchGetFileMeta/req";
import { BatchGetFileMetaResponse } from "./BatchGetFileMeta/res";
import { BatchUpdateFileMetaRequest } from "./BatchUpdateFileMeta/req";
import { BatchUpdateFileMetaResponse } from "./BatchUpdateFileMeta/res";
import { DeleteFileMetaRequest } from "./DeleteFileMeta/req";
import { DeleteFileMetaResponse } from "./DeleteFileMeta/res";
import { BatchDeleteFileMetaRequest } from "./BatchDeleteFileMeta/req";
import { BatchDeleteFileMetaResponse } from "./BatchDeleteFileMeta/res";
import { BatchIndexFileMetaRequest } from "./BatchIndexFileMeta/req";
import { BatchIndexFileMetaResponse } from "./BatchIndexFileMeta/res";
import { UpdateFileMetaRequest } from "./UpdateFileMeta/req";
import { UpdateFileMetaResponse } from "./UpdateFileMeta/res";
import { GetBindingRequest } from "./GetBinding/req";
import { GetBindingResponse } from "./GetBinding/res";
import { DeleteDatasetRequest } from "./DeleteDataset/req";
import { DeleteDatasetResponse } from "./DeleteDataset/res";
import { UpdateDatasetRequest } from "./UpdateDataset/req";
import { UpdateDatasetResponse } from "./UpdateDataset/res";
import { GetDatasetRequest } from "./GetDataset/req";
import { GetDatasetResponse } from "./GetDataset/res";
import { CreateBindingRequest } from "./CreateBinding/req";
import { CreateBindingResponse } from "./CreateBinding/res";
import { SimpleQueryRequest } from "./SimpleQuery/req";
import { SimpleQueryResponse } from "./SimpleQuery/res";
import { GetFileMetaRequest } from "./GetFileMeta/req";
import { GetFileMetaResponse } from "./GetFileMeta/res";
import { ListBindingsRequest } from "./ListBindings/req";
import { ListBindingsResponse } from "./ListBindings/res";
import { UpdateProjectRequest } from "./UpdateProject/req";
import { UpdateProjectResponse } from "./UpdateProject/res";
import { GetProjectRequest } from "./GetProject/req";
import { GetProjectResponse } from "./GetProject/res";
import { CreateDatasetRequest } from "./CreateDataset/req";
import { CreateDatasetResponse } from "./CreateDataset/res";
import { IndexFileMetaRequest } from "./IndexFileMeta/req";
import { IndexFileMetaResponse } from "./IndexFileMeta/res";
import { DeleteProjectRequest } from "./DeleteProject/req";
import { DeleteProjectResponse } from "./DeleteProject/res";
import { ListDatasetsRequest } from "./ListDatasets/req";
import { ListDatasetsResponse } from "./ListDatasets/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { DeleteBindingRequest } from "./DeleteBinding/req";
import { DeleteBindingResponse } from "./DeleteBinding/res";
import { RefreshWebofficeTokenRequest } from "./RefreshWebofficeToken/req";
import { RefreshWebofficeTokenResponse } from "./RefreshWebofficeToken/res";
import { DetectImageLabelsRequest } from "./DetectImageLabels/req";
import { DetectImageLabelsResponse } from "./DetectImageLabels/res";
import { GetFigureClusterRequest } from "./GetFigureCluster/req";
import { GetFigureClusterResponse } from "./GetFigureCluster/res";
import { UpdateFigureClusterRequest } from "./UpdateFigureCluster/req";
import { UpdateFigureClusterResponse } from "./UpdateFigureCluster/res";
import { SemanticQueryRequest } from "./SemanticQuery/req";
import { SemanticQueryResponse } from "./SemanticQuery/res";
import { GetTaskRequest } from "./GetTask/req";
import { GetTaskResponse } from "./GetTask/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { DeleteStoryRequest } from "./DeleteStory/req";
import { DeleteStoryResponse } from "./DeleteStory/res";
import { CreateStoryRequest } from "./CreateStory/req";
import { CreateStoryResponse } from "./CreateStory/res";
import { CreateFigureClusteringTaskRequest } from "./CreateFigureClusteringTask/req";
import { CreateFigureClusteringTaskResponse } from "./CreateFigureClusteringTask/res";
import { CreateFigureClustersMergingTaskRequest } from "./CreateFigureClustersMergingTask/req";
import { CreateFigureClustersMergingTaskResponse } from "./CreateFigureClustersMergingTask/res";
import { GetStoryRequest } from "./GetStory/req";
import { GetStoryResponse } from "./GetStory/res";
import { QueryFigureClustersRequest } from "./QueryFigureClusters/req";
import { QueryFigureClustersResponse } from "./QueryFigureClusters/res";
import { QueryStoriesRequest } from "./QueryStories/req";
import { QueryStoriesResponse } from "./QueryStories/res";
import { UpdateStoryRequest } from "./UpdateStory/req";
import { UpdateStoryResponse } from "./UpdateStory/res";
import { DetectTextAnomalyRequest } from "./DetectTextAnomaly/req";
import { DetectTextAnomalyResponse } from "./DetectTextAnomaly/res";
import { CreateImageModerationTaskRequest } from "./CreateImageModerationTask/req";
import { CreateImageModerationTaskResponse } from "./CreateImageModerationTask/res";
import { CreateVideoModerationTaskRequest } from "./CreateVideoModerationTask/req";
import { CreateVideoModerationTaskResponse } from "./CreateVideoModerationTask/res";
import { DetectImageScoreRequest } from "./DetectImageScore/req";
import { DetectImageScoreResponse } from "./DetectImageScore/res";
import { DetectImageFacesRequest } from "./DetectImageFaces/req";
import { DetectImageFacesResponse } from "./DetectImageFaces/res";
import { GetOSSBucketAttachmentRequest } from "./GetOSSBucketAttachment/req";
import { GetOSSBucketAttachmentResponse } from "./GetOSSBucketAttachment/res";
import { DetachOSSBucketRequest } from "./DetachOSSBucket/req";
import { DetachOSSBucketResponse } from "./DetachOSSBucket/res";
import { AttachOSSBucketRequest } from "./AttachOSSBucket/req";
import { AttachOSSBucketResponse } from "./AttachOSSBucket/res";
import { DetectImageCroppingRequest } from "./DetectImageCropping/req";
import { DetectImageCroppingResponse } from "./DetectImageCropping/res";
import { CreateMediaConvertTaskRequest } from "./CreateMediaConvertTask/req";
import { CreateMediaConvertTaskResponse } from "./CreateMediaConvertTask/res";
import { CreateOfficeConversionTaskRequest } from "./CreateOfficeConversionTask/req";
import { CreateOfficeConversionTaskResponse } from "./CreateOfficeConversionTask/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { DetectImageCodesRequest } from "./DetectImageCodes/req";
import { DetectImageCodesResponse } from "./DetectImageCodes/res";
import { RemoveStoryFilesRequest } from "./RemoveStoryFiles/req";
import { RemoveStoryFilesResponse } from "./RemoveStoryFiles/res";
import { AddStoryFilesRequest } from "./AddStoryFiles/req";
import { AddStoryFilesResponse } from "./AddStoryFiles/res";
import { CreateImageSplicingTaskRequest } from "./CreateImageSplicingTask/req";
import { CreateImageSplicingTaskResponse } from "./CreateImageSplicingTask/res";
import { DetectImageBodiesRequest } from "./DetectImageBodies/req";
import { DetectImageBodiesResponse } from "./DetectImageBodies/res";
import { CreateCompressPointCloudTaskRequest } from "./CreateCompressPointCloudTask/req";
import { CreateCompressPointCloudTaskResponse } from "./CreateCompressPointCloudTask/res";
import { CreateImageToPDFTaskRequest } from "./CreateImageToPDFTask/req";
import { CreateImageToPDFTaskResponse } from "./CreateImageToPDFTask/res";
import { CreateCustomizedStoryRequest } from "./CreateCustomizedStory/req";
import { CreateCustomizedStoryResponse } from "./CreateCustomizedStory/res";
import { CreateFileCompressionTaskRequest } from "./CreateFileCompressionTask/req";
import { CreateFileCompressionTaskResponse } from "./CreateFileCompressionTask/res";
import { AddImageMosaicRequest } from "./AddImageMosaic/req";
import { AddImageMosaicResponse } from "./AddImageMosaic/res";
import { CreateArchiveFileInspectionTaskRequest } from "./CreateArchiveFileInspectionTask/req";
import { CreateArchiveFileInspectionTaskResponse } from "./CreateArchiveFileInspectionTask/res";
import { CreateFileUncompressionTaskRequest } from "./CreateFileUncompressionTask/req";
import { CreateFileUncompressionTaskResponse } from "./CreateFileUncompressionTask/res";
import { CreateLocationDateClusteringTaskRequest } from "./CreateLocationDateClusteringTask/req";
import { CreateLocationDateClusteringTaskResponse } from "./CreateLocationDateClusteringTask/res";
import { UpdateLocationDateClusterRequest } from "./UpdateLocationDateCluster/req";
import { UpdateLocationDateClusterResponse } from "./UpdateLocationDateCluster/res";
import { QueryLocationDateClustersRequest } from "./QueryLocationDateClusters/req";
import { QueryLocationDateClustersResponse } from "./QueryLocationDateClusters/res";
import { GetVideoLabelClassificationResultRequest } from "./GetVideoLabelClassificationResult/req";
import { GetVideoLabelClassificationResultResponse } from "./GetVideoLabelClassificationResult/res";
import { CreateVideoLabelClassificationTaskRequest } from "./CreateVideoLabelClassificationTask/req";
import { CreateVideoLabelClassificationTaskResponse } from "./CreateVideoLabelClassificationTask/res";
import { DeleteLocationDateClusterRequest } from "./DeleteLocationDateCluster/req";
import { DeleteLocationDateClusterResponse } from "./DeleteLocationDateCluster/res";
import { CompareImageFacesRequest } from "./CompareImageFaces/req";
import { CompareImageFacesResponse } from "./CompareImageFaces/res";
import { CreateFacesSearchingTaskRequest } from "./CreateFacesSearchingTask/req";
import { CreateFacesSearchingTaskResponse } from "./CreateFacesSearchingTask/res";
import { SearchImageFigureClusterRequest } from "./SearchImageFigureCluster/req";
import { SearchImageFigureClusterResponse } from "./SearchImageFigureCluster/res";
import { CreateSimilarImageClusteringTaskRequest } from "./CreateSimilarImageClusteringTask/req";
import { CreateSimilarImageClusteringTaskResponse } from "./CreateSimilarImageClusteringTask/res";
import { QuerySimilarImageClustersRequest } from "./QuerySimilarImageClusters/req";
import { QuerySimilarImageClustersResponse } from "./QuerySimilarImageClusters/res";
import { DetectMediaMetaRequest } from "./DetectMediaMeta/req";
import { DetectMediaMetaResponse } from "./DetectMediaMeta/res";
import { GenerateVideoPlaylistRequest } from "./GenerateVideoPlaylist/req";
import { GenerateVideoPlaylistResponse } from "./GenerateVideoPlaylist/res";
import { GenerateWebofficeTokenRequest } from "./GenerateWebofficeToken/req";
import { GenerateWebofficeTokenResponse } from "./GenerateWebofficeToken/res";
import { ResumeBatchRequest } from "./ResumeBatch/req";
import { ResumeBatchResponse } from "./ResumeBatch/res";
import { DeleteTriggerRequest } from "./DeleteTrigger/req";
import { DeleteTriggerResponse } from "./DeleteTrigger/res";
import { ResumeTriggerRequest } from "./ResumeTrigger/req";
import { ResumeTriggerResponse } from "./ResumeTrigger/res";
import { SuspendBatchRequest } from "./SuspendBatch/req";
import { SuspendBatchResponse } from "./SuspendBatch/res";
import { DeleteBatchRequest } from "./DeleteBatch/req";
import { DeleteBatchResponse } from "./DeleteBatch/res";
import { SuspendTriggerRequest } from "./SuspendTrigger/req";
import { SuspendTriggerResponse } from "./SuspendTrigger/res";
import { CreateBatchRequest } from "./CreateBatch/req";
import { CreateBatchResponse } from "./CreateBatch/res";
import { UpdateTriggerRequest } from "./UpdateTrigger/req";
import { UpdateTriggerResponse } from "./UpdateTrigger/res";
import { CreateTriggerRequest } from "./CreateTrigger/req";
import { CreateTriggerResponse } from "./CreateTrigger/res";
import { UpdateBatchRequest } from "./UpdateBatch/req";
import { UpdateBatchResponse } from "./UpdateBatch/res";
import { GetBatchRequest } from "./GetBatch/req";
import { GetBatchResponse } from "./GetBatch/res";
import { GetTriggerRequest } from "./GetTrigger/req";
import { GetTriggerResponse } from "./GetTrigger/res";
import { ListBatchesRequest } from "./ListBatches/req";
import { ListBatchesResponse } from "./ListBatches/res";
import { ListTriggersRequest } from "./ListTriggers/req";
import { ListTriggersResponse } from "./ListTriggers/res";
import { BatchGetFigureClusterRequest } from "./BatchGetFigureCluster/req";
import { BatchGetFigureClusterResponse } from "./BatchGetFigureCluster/res";
import { ExtractDocumentTextRequest } from "./ExtractDocumentText/req";
import { ExtractDocumentTextResponse } from "./ExtractDocumentText/res";
import { DetectImageCarsRequest } from "./DetectImageCars/req";
import { DetectImageCarsResponse } from "./DetectImageCars/res";
import { GetImageModerationResultRequest } from "./GetImageModerationResult/req";
import { GetImageModerationResultResponse } from "./GetImageModerationResult/res";
import { GetVideoModerationResultRequest } from "./GetVideoModerationResult/req";
import { GetVideoModerationResultResponse } from "./GetVideoModerationResult/res";
import { DetectImageTextsRequest } from "./DetectImageTexts/req";
import { DetectImageTextsResponse } from "./DetectImageTexts/res";
import { CreateDecodeBlindWatermarkTaskRequest } from "./CreateDecodeBlindWatermarkTask/req";
import { CreateDecodeBlindWatermarkTaskResponse } from "./CreateDecodeBlindWatermarkTask/res";
import { EncodeBlindWatermarkRequest } from "./EncodeBlindWatermark/req";
import { EncodeBlindWatermarkResponse } from "./EncodeBlindWatermark/res";
import { GetDecodeBlindWatermarkResultRequest } from "./GetDecodeBlindWatermarkResult/req";
import { GetDecodeBlindWatermarkResultResponse } from "./GetDecodeBlindWatermarkResult/res";

interface IMM {
    /**
     * 查询所有项目（Project）的信息，包含基础信息，数据集（Dataset）和文件相关的统计信息等。
     */
    ListProjects(query: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * 查询所有已提取的文件元数据（包含文件名、标签、路径、自定义标签、文本等字段），只要文件元数据中有一个字段的值匹配指定字符串，该文件的元数据就会被返回。
     */
    FuzzyQuery(query: FuzzyQueryRequest): Promise<FuzzyQueryResponse>;
    /**
     * 批量获取数据集内已完成索引的文件的元数据。
     */
    BatchGetFileMeta(query: BatchGetFileMetaRequest): Promise<BatchGetFileMetaResponse>;
    /**
     * 更新批量数据集内已索引的文件的部分元数据。
     */
    BatchUpdateFileMeta(query: BatchUpdateFileMetaRequest): Promise<BatchUpdateFileMetaResponse>;
    /**
     * 从数据集内删除文件的元信息。
     */
    DeleteFileMeta(query: DeleteFileMetaRequest): Promise<DeleteFileMetaResponse>;
    /**
     * 批量从数据集内删除文件的元信息。
     */
    BatchDeleteFileMeta(query: BatchDeleteFileMetaRequest): Promise<BatchDeleteFileMetaResponse>;
    /**
     * 批量索引文件元信息，对输入的文件进行数据处理如标签识别、人脸检测、地点检测等，并将文件元信息索引到数据集内，支持多样化的数据检索。
     */
    BatchIndexFileMeta(query: BatchIndexFileMetaRequest): Promise<BatchIndexFileMetaResponse>;
    /**
     * 更新数据集内已索引的文件的部分元数据。
     */
    UpdateFileMeta(query: UpdateFileMetaRequest): Promise<UpdateFileMetaResponse>;
    /**
     * 查询指定的数据集和对象存储（OSS）Bucket绑定关系详情。
     */
    GetBinding(query: GetBindingRequest): Promise<GetBindingResponse>;
    /**
     * 删除一个数据集（Dataset）。
     */
    DeleteDataset(query: DeleteDatasetRequest): Promise<DeleteDatasetResponse>;
    /**
     * 更新一个数据集（Dataset）的信息。
     */
    UpdateDataset(query: UpdateDatasetRequest): Promise<UpdateDatasetResponse>;
    /**
     * 查询一个数据集的信息。
     */
    GetDataset(query: GetDatasetRequest): Promise<GetDatasetResponse>;
    /**
     * 创建数据集（Dataset）和对象存储（OSS）Bucket的绑定关系，自动同步全量和增量文件并为其索引。
     */
    CreateBinding(query: CreateBindingRequest): Promise<CreateBindingResponse>;
    /**
     * 查询和统计数据集内文件，支持逻辑关系表达方式。
     */
    SimpleQuery(query: SimpleQueryRequest): Promise<SimpleQueryResponse>;
    /**
     * 获取数据集内已完成索引的文件的元数据。
     */
    GetFileMeta(query: GetFileMetaRequest): Promise<GetFileMetaResponse>;
    /**
     * 查询数据集和对象存储（OSS）Bucket绑定关系列表。
     */
    ListBindings(query: ListBindingsRequest): Promise<ListBindingsResponse>;
    /**
     * 更新一个已创建项目（Project）的信息。
     */
    UpdateProject(query: UpdateProjectRequest): Promise<UpdateProjectResponse>;
    /**
     * 查询指定项目（Project）的信息，包含基础信息，数据集（Dataset）和文件相关的统计信息等。
     */
    GetProject(query: GetProjectRequest): Promise<GetProjectResponse>;
    /**
     * 创建一个数据集（Dataset）。
     */
    CreateDataset(query: CreateDatasetRequest): Promise<CreateDatasetResponse>;
    /**
     * 对输入的文件进行数据处理如标签识别、人脸检测、地点检测等，将提取的文件元信息建立索引，支持用户在一个数据集内多样化的数据检索。
     */
    IndexFileMeta(query: IndexFileMetaRequest): Promise<IndexFileMetaResponse>;
    /**
     * 删除指定项目（Project）。
     */
    DeleteProject(query: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    /**
     * 获取数据集列表，支持通过数据集名称前缀查询列表。
     */
    ListDatasets(query: ListDatasetsRequest): Promise<ListDatasetsResponse>;
    /**
     * 创建一个项目（Project）。
     */
    CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * 删除数据集和对象存储（OSS）Bucket绑定任务。
     */
    DeleteBinding(query: DeleteBindingRequest): Promise<DeleteBindingResponse>;
    /**
     * 刷新Weboffice访问凭证。Weboffice访问凭证有效期是30分钟，过期会失效，无法继续访问Weboffice。如果要继续访问Weboffice，可以使用这个接口刷新Weboffice访问凭证，即获取一个新的凭证，新的凭证过期时间也是30分钟。
     */
    RefreshWebofficeToken(query: RefreshWebofficeTokenRequest): Promise<RefreshWebofficeTokenResponse>;
    /**
     * 检测图片中的场景、物体和事件标签信息。场景信息包括：自然景观、生活场景、灾难场景等大类；事件信息包括：才艺、办公、表演、生产等大类；物体信息包括：餐具、电子产品、家具、交通工具等大类。图片标签检测目前支持的标签种类包含三十多个分类、数千个标签。
     */
    DetectImageLabels(query: DetectImageLabelsRequest): Promise<DetectImageLabelsResponse>;
    /**
     * 获取人脸分组的基本信息，包括创建时间、照片数量、分组封面等信息。
     */
    GetFigureCluster(query: GetFigureClusterRequest): Promise<GetFigureClusterResponse>;
    /**
     * 更新一个人脸聚类分组的信息，可以更新分组的名称、标签等信息。
     */
    UpdateFigureCluster(query: UpdateFigureClusterRequest): Promise<UpdateFigureClusterResponse>;
    /**
     * 通过输入自然语言，对数据集内的元数据进行基于语义的查询搜索。
     */
    SemanticQuery(query: SemanticQueryRequest): Promise<SemanticQueryResponse>;
    /**
     * 该接口用于主动查询指定的异步任务信息。IMM支持多种异步数据处理能力，每种能力有各自创建任务的接口，例如创建人物人脸聚类任务CreateFigureClusteringTask、创建文件压缩任务CreateFileCompressionTask等。本接口为通用接口，可以通过任务ID和类型来查询异步任务的详细信息。
     */
    GetTask(query: GetTaskRequest): Promise<GetTaskResponse>;
    /**
     * 该接口提供通过多种条件查询任务列表的功能。通过该接口可以查询指定时间范围内的任务、或者通过创建任务时指定的Tag搜索任务等。
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    /**
     * 删除故事。
     */
    DeleteStory(query: DeleteStoryRequest): Promise<DeleteStoryResponse>;
    /**
     * 创建一个故事。
     */
    CreateStory(query: CreateStoryRequest): Promise<CreateStoryResponse>;
    /**
     * 创建一个人物人脸聚类任务，通过智能算法，可以在您已索引到数据集的图片中，将属于不同人物的人脸进行聚类分组。
     */
    CreateFigureClusteringTask(query: CreateFigureClusteringTaskRequest): Promise<CreateFigureClusteringTaskResponse>;
    /**
     * 将两个或两个以上人物聚类分组合并为一个人物聚类分组。
     */
    CreateFigureClustersMergingTask(query: CreateFigureClustersMergingTaskRequest): Promise<CreateFigureClustersMergingTaskResponse>;
    /**
     * 获取一个故事的信息。
     */
    GetStory(query: GetStoryRequest): Promise<GetStoryResponse>;
    /**
     * 根据条件查询人物聚类及其信息。
     */
    QueryFigureClusters(query: QueryFigureClustersRequest): Promise<QueryFigureClustersResponse>;
    /**
     * 根据条件查询故事及其信息。
     */
    QueryStories(query: QueryStoriesRequest): Promise<QueryStoriesResponse>;
    /**
     * 更新故事信息，例如重命名，修改封面等。
     */
    UpdateStory(query: UpdateStoryRequest): Promise<UpdateStoryResponse>;
    /**
     * 检测指定文本内容中是否包含色情、广告、灌水、涉政、辱骂等违规信息。
     */
    DetectTextAnomaly(query: DetectTextAnomalyRequest): Promise<DetectTextAnomalyResponse>;
    /**
     * 检测图片内容是否合规。包括色情内容、暴恐涉政、不良场景、logo、图文违规这几种检测场景。
     */
    CreateImageModerationTask(query: CreateImageModerationTaskRequest): Promise<CreateImageModerationTaskResponse>;
    /**
     * 检测视频中的风险或违规内容，具体包括以下场景：视频智能鉴黄、视频暴恐涉政、视频图文违规、视频不良场景、视频logo。
     */
    CreateVideoModerationTask(query: CreateVideoModerationTaskRequest): Promise<CreateVideoModerationTaskResponse>;
    /**
     * 以主观美学为准评估图片的视觉质量，同时考虑构图、亮度、对比度、色彩、清晰度等多方面因素的影响。该功能返回一个范围为0-1的图片质量得分，得分越高则表示图片的视觉质量越高。
     */
    DetectImageScore(query: DetectImageScoreRequest): Promise<DetectImageScoreResponse>;
    /**
     * 检测指定图像中的人脸边界信息、属性信息、质量信息。边界信息（Boundary）包括：顶点Y坐标距离顶端距离（Top）、顶点X坐标距离左端距离（Left）、高度（Height）、宽度（Width）；属性信息包括：年龄（Age）、年龄标准差（AgeSD）、性别（Gender）、心情（Emotion）、是否张口（Mouth）、是否有胡子（Beard）、是否有帽子（Hat）、是否带口罩（Mask）、是否戴眼镜（Glasses）、头部朝向（HeadPose）、人脸吸引力（Attractive）及上述各属性的置信度；质量信息包括：人脸质量分（FaceQuality）、人脸清晰度（Sharpness）。
     */
    DetectImageFaces(query: DetectImageFacesRequest): Promise<DetectImageFacesResponse>;
    /**
     * 获取同一地域下与指定OSS Bucket绑定的项目的项目名称。
     */
    GetOSSBucketAttachment(query: GetOSSBucketAttachmentRequest): Promise<GetOSSBucketAttachmentResponse>;
    /**
     * 解除项目与OSS Bucket的绑定关系。
     */
    DetachOSSBucket(query: DetachOSSBucketRequest): Promise<DetachOSSBucketResponse>;
    /**
     * 将OSS Bucket与IMM Project绑定，可以通过OSS x-oss-process方式使用IMM的数据处理能力。
     */
    AttachOSSBucket(query: AttachOSSBucketRequest): Promise<AttachOSSBucketResponse>;
    /**
     * 通过AI模型能力在给定的目标图片比例下检测出视觉效果较好的裁剪框区域。
     */
    DetectImageCropping(query: DetectImageCroppingRequest): Promise<DetectImageCroppingResponse>;
    /**
     * 创建一个异步的媒体转码任务，提供媒体转码、媒体拼接、视频截帧、视频转动图等相关音视频媒体文件处理能力。
     */
    CreateMediaConvertTask(query: CreateMediaConvertTaskRequest): Promise<CreateMediaConvertTaskResponse>;
    /**
     * 创建文档转换任务。支持文档格式转换，将存储在对象存储中的文档（Word、PPT、Excel、PDF）转成图片，文本，或者PDF。
     */
    CreateOfficeConversionTask(query: CreateOfficeConversionTaskRequest): Promise<CreateOfficeConversionTaskResponse>;
    /**
     * 查询支持IMM服务的Region列表信息，包括Region和对应语言的描述信息。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 识别指定图像中的条码和二维码。
     */
    DetectImageCodes(query: DetectImageCodesRequest): Promise<DetectImageCodesResponse>;
    /**
     * 从故事中删除文件。
     */
    RemoveStoryFiles(query: RemoveStoryFilesRequest): Promise<RemoveStoryFilesResponse>;
    /**
     * 向故事中添加文件。
     */
    AddStoryFiles(query: AddStoryFilesRequest): Promise<AddStoryFilesResponse>;
    /**
     * 将多张图片按设定的规则拼接成一张图片，并保存到指定的OSS文件对象地址。
     */
    CreateImageSplicingTask(query: CreateImageSplicingTaskRequest): Promise<CreateImageSplicingTaskResponse>;
    /**
     * 检测图片中的人体信息，包含置信度，人体边框等信息。
     */
    DetectImageBodies(query: DetectImageBodiesRequest): Promise<DetectImageBodiesResponse>;
    /**
     * 点云压缩功能可以将OSS中的点云数据进行压缩处理，减少网络数据传输。
     */
    CreateCompressPointCloudTask(query: CreateCompressPointCloudTaskRequest): Promise<CreateCompressPointCloudTaskResponse>;
    /**
     * 将多张图片转换为单个PDF文件，并保存到指定的OSS文件对象地址。
     */
    CreateImageToPDFTask(query: CreateImageToPDFTaskRequest): Promise<CreateImageToPDFTaskResponse>;
    /**
     * 使用选择的图片和视频创建一个故事。
     */
    CreateCustomizedStory(query: CreateCustomizedStoryRequest): Promise<CreateCustomizedStoryResponse>;
    /**
     * 文件压缩任务可以将您的多个文件，打包为zip等压缩包。您提交任务后会异步打包文件，将结果存储到指定位置。在打包时支持对文件进行重命名操作，您可以自定义文件打包规则以及输出的压缩包名称。
     */
    CreateFileCompressionTask(query: CreateFileCompressionTaskRequest): Promise<CreateFileCompressionTaskResponse>;
    /**
     * 在一张图片的一个或多个特定区域内添加多种形状的马赛克、高斯模糊或纯色块，并将填充后的图片保存到指定的OSS文件对象地址。该功能主要用于隐私保护。
     */
    AddImageMosaic(query: AddImageMosaicRequest): Promise<AddImageMosaicResponse>;
    /**
     * 创建压缩包预览解析任务支持获取压缩包内的文件列表信息。该功能无需解压压缩包，就可以获取压缩包内的文件列表信息。
     */
    CreateArchiveFileInspectionTask(query: CreateArchiveFileInspectionTaskRequest): Promise<CreateArchiveFileInspectionTaskResponse>;
    /**
     * 创建解压缩任务可以将您压缩包内的指定文件解压缩到特定位置，也可以将压缩包完整解压。目前支持的压缩格式包括Zip、RAR和7z。
     */
    CreateFileUncompressionTask(query: CreateFileUncompressionTaskRequest): Promise<CreateFileUncompressionTaskResponse>;
    /**
     * 时空聚类功能，可以将您已索引到数据集内的图片、视频等携带了拍摄时间、拍摄地点信息等文件，按照时间、地理位置进行分类。这些分类可以理解为用户的一次旅行所拍摄的内容（它们时间接近、地点接近），也可以理解为用户在不同生活、工作地的拍摄内容。通过获取、分析这些分类所在地点、所经历的时间范围，可以为用户提供媒体文件归类、精选、生成照片视频故事等能力。
     */
    CreateLocationDateClusteringTask(query: CreateLocationDateClusteringTaskRequest): Promise<CreateLocationDateClusteringTaskResponse>;
    /**
     * 更新一个时空聚类的信息。
     */
    UpdateLocationDateCluster(query: UpdateLocationDateClusterRequest): Promise<UpdateLocationDateClusterResponse>;
    /**
     * 查询时空聚类列表信息，支持多种条件，详情请参考请求参数。
     */
    QueryLocationDateClusters(query: QueryLocationDateClustersRequest): Promise<QueryLocationDateClustersResponse>;
    /**
     * 获取视频标签检测任务的结果。
     */
    GetVideoLabelClassificationResult(query: GetVideoLabelClassificationResultRequest): Promise<GetVideoLabelClassificationResultResponse>;
    /**
     * 检测视频内容的场景、物体和事件标签信息。场景信息包括：自然景观、生活场景、灾难场景等大类；事件信息包括：才艺、办公、表演、生产等大类；物体信息包括：餐具、电子产品、家具、交通工具等大类。视频标签检测目前支持的标签种类包含三十多个分类、数千个标签。
     */
    CreateVideoLabelClassificationTask(query: CreateVideoLabelClassificationTaskRequest): Promise<CreateVideoLabelClassificationTaskResponse>;
    /**
     * 删除一个时空聚类。
     */
    DeleteLocationDateCluster(query: DeleteLocationDateClusterRequest): Promise<DeleteLocationDateClusterResponse>;
    /**
     * 比较两张图片中最大的人脸的相似度。最大的人脸指的是图片经人脸检测后，所有人脸框中面积最大的。
     */
    CompareImageFaces(query: CompareImageFacesRequest): Promise<CompareImageFacesResponse>;
    /**
     * 从媒体集中搜索与指定图片或人脸ID最相似的前N张图片，并返回相应人脸ID及边界框，返回结果按照相似度降序排列。
     */
    CreateFacesSearchingTask(query: CreateFacesSearchingTaskRequest): Promise<CreateFacesSearchingTaskResponse>;
    /**
     * 查询指定图片中所有人脸所在的人物聚类列表，每个人物聚类中包含人脸框，相似度等信息。
     */
    SearchImageFigureCluster(query: SearchImageFigureClusterRequest): Promise<SearchImageFigureClusterResponse>;
    /**
     * 相似图片聚类功能，可以将您已索引到数据集内的图片按照相似度生成聚类，用于图片去重、选优等场景，例如可以通过该功能筛选相册中连拍的图片。
     */
    CreateSimilarImageClusteringTask(query: CreateSimilarImageClusteringTaskRequest): Promise<CreateSimilarImageClusteringTaskResponse>;
    /**
     * 查询相似图片聚类列表信息。
     */
    QuerySimilarImageClusters(query: QuerySimilarImageClustersRequest): Promise<QuerySimilarImageClustersResponse>;
    /**
     * 获取媒体文件元信息，包括媒体格式信息和媒体流信息。
     */
    DetectMediaMeta(query: DetectMediaMetaRequest): Promise<DetectMediaMetaResponse>;
    /**
     * 创建边转边播播放列表能够将视频文件生成m3u8文件。生成播放列表后即时播放，并根据播放进度实施按需转码，相比离线转码能极大减少了转码等待时间并大幅度降低了转码和存储开销。
     */
    GenerateVideoPlaylist(query: GenerateVideoPlaylistRequest): Promise<GenerateVideoPlaylistResponse>;
    /**
     * 获取Weboffice访问凭证。Weboffice提供文档的在线协作功能，包括文档预览、文档编辑，多人协作等，支持协作记录，支持多版本，支持版本回滚等。
     */
    GenerateWebofficeToken(query: GenerateWebofficeTokenRequest): Promise<GenerateWebofficeTokenResponse>;
    /**
     * 将一个Suspend（暂停）或Failed（失败）的批处理任务恢复。
     */
    ResumeBatch(query: ResumeBatchRequest): Promise<ResumeBatchResponse>;
    /**
     * 删除指定的触发器。
     */
    DeleteTrigger(query: DeleteTriggerRequest): Promise<DeleteTriggerResponse>;
    /**
     * 将一个Suspended（暂停）或Failed（失败）状态的触发器恢复。
     */
    ResumeTrigger(query: ResumeTriggerRequest): Promise<ResumeTriggerResponse>;
    /**
     * 将一个 Running（正在执行）的批处理任务暂停。
     */
    SuspendBatch(query: SuspendBatchRequest): Promise<SuspendBatchResponse>;
    /**
     * 删除指定的一个批处理任务。
     */
    DeleteBatch(query: DeleteBatchRequest): Promise<DeleteBatchResponse>;
    /**
     * 将一个 Running（正在执行）状态的触发器暂停。
     */
    SuspendTrigger(query: SuspendTriggerRequest): Promise<SuspendTriggerResponse>;
    /**
     * 创建一个批处理任务，指定存储内已存在的若干文件，对其批量执行指定操作，如转码、格式转换等。
     */
    CreateBatch(query: CreateBatchRequest): Promise<CreateBatchResponse>;
    /**
     * 更新触发器信息，如输入的数据源配置、数据处理的配置、触发器标签等信息。
     */
    UpdateTrigger(query: UpdateTriggerRequest): Promise<UpdateTriggerResponse>;
    /**
     * 创建触发器任务，可通过OSS等事件源触发IMM数据处理，支持选择多种数据处理模板，对图片、视频、文档等媒体文件执行相应的处理。
     */
    CreateTrigger(query: CreateTriggerRequest): Promise<CreateTriggerResponse>;
    /**
     * 更新批处理任务信息，如输入的数据源配置、数据处理的配置、批处理任务标签等信息。
     */
    UpdateBatch(query: UpdateBatchRequest): Promise<UpdateBatchResponse>;
    /**
     * 获取批处理任务信息。
     */
    GetBatch(query: GetBatchRequest): Promise<GetBatchResponse>;
    /**
     * 获取触发器信息。
     */
    GetTrigger(query: GetTriggerRequest): Promise<GetTriggerResponse>;
    /**
     * 查询批处理任务列表，支持排序，支持按照任务标签，任务状态等条件查询。
     */
    ListBatches(query: ListBatchesRequest): Promise<ListBatchesResponse>;
    /**
     * 查询触发器任务列表，支持排序，支持按照任务标签，任务状态等条件查询。
     */
    ListTriggers(query: ListTriggersRequest): Promise<ListTriggersResponse>;
    /**
     * 批量获取人物聚类及其信息。
     */
    BatchGetFigureCluster(query: BatchGetFigureClusterRequest): Promise<BatchGetFigureClusterResponse>;
    /**
     * 提取文档文件正文中的文本。
     */
    ExtractDocumentText(query: ExtractDocumentTextRequest): Promise<ExtractDocumentTextResponse>;
    /**
     * 检测指定图像中的车辆边界信息、车辆属性信息、车牌信息。车辆属性信息包括：车辆颜色（CarColor）、车辆类型（CarType）；车牌信息包括：车牌识别内容（Content）、车牌框信息（Boundary）。
     */
    DetectImageCars(query: DetectImageCarsRequest): Promise<DetectImageCarsResponse>;
    /**
     * 获取图片合规检测任务。
     */
    GetImageModerationResult(query: GetImageModerationResultRequest): Promise<GetImageModerationResultResponse>;
    /**
     * 获取视频合规检测任务。
     */
    GetVideoModerationResult(query: GetVideoModerationResultRequest): Promise<GetVideoModerationResultResponse>;
    /**
     * 图片文本识别，将图片上的文字内容智能识别成为可编辑的文本。
     */
    DetectImageTexts(query: DetectImageTextsRequest): Promise<DetectImageTextsResponse>;
    /**
     * 解析由IMM添加的盲水印，可提取使用新版和旧版 EncodeBlindWatermark 接口添加的水印内容。解析出的水印内容可通过 GetDecodeBlindWatermarkResult 接口获取，或从异步通知消息中获取。
     */
    CreateDecodeBlindWatermarkTask(query: CreateDecodeBlindWatermarkTaskRequest): Promise<CreateDecodeBlindWatermarkTaskResponse>;
    /**
     * 将特定的文本信息嵌入到图片中，而这些信息在视觉观察下是不可见的。由于这些水印在视觉上是隐蔽的，它们不会影响图片的美观性或原始信息的传递，但可以通过 CreateDecodeBlindWatermarkTask 接口提取出来。
     */
    EncodeBlindWatermark(query: EncodeBlindWatermarkRequest): Promise<EncodeBlindWatermarkResponse>;
    /**
     * 获取解析图片盲水印任务的结果。
     */
    GetDecodeBlindWatermarkResult(query: GetDecodeBlindWatermarkResultRequest): Promise<GetDecodeBlindWatermarkResultResponse>;
}
export default IMM;
