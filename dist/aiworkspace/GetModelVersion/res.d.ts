export interface GetModelVersionResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 创建模型UTC时间，格式ISO8601。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtCreateTime: string;
    /**
     * 最后更新模型UTC时间，格式ISO8601。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtModifiedTime: string;
    /**
     * 用户ID。
     * @example `1234567890******`
     */
    UserId: string;
    /**
     * 阿里云账号ID。
     * @example `1234567890******`
     */
    OwnerId: string;
    /**
     * 模型版本URI，即模型存储位置。可能值为：
     * - 模型的HTTP（S）地址，例如：`https://myweb.com/mymodel.tar.gz`。
     * - 如果模型存储在OSS中，格式为`oss://<bucket>.<endpoint>/object`。其中endpoint配置，请参见[访问域名和数据中心](~~31837~~)，例如：`oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`。
     * @example `oss://t***.cn-beijing.oss.aliyuncs.com/mod**​/`
     */
    Uri: string;
    /**
     * 模型版本标签列表。
     */
    Labels: any[];
    /**
     * 扩展字段。JsonString类型。
     * @example `{}`
     */
    Options: string;
    /**
     * 模型版本。
     * @example `0.1.0`
     */
    VersionName: string;
    /**
     * 模型版本描述。
     * @example `通用情感分析。`
     */
    VersionDescription: string;
    /**
     * 训练配置。用于微调，增量训练的配置。
     * @example `{}`
     */
    TrainingSpec: any;
    /**
     * 描述如何应用于下游的推理服务：例如描述EAS的processor、container等。
     * @example `{
        "Processor": "tensorflow_gpu_1.12"
    }`
     */
    InferenceSpec: any;
    /**
     * 评测配置
     * @example `{}`
     */
    EvaluationSpec: any;
    /**
     * 压缩配置
     * @example `{}`
     */
    CompressionSpec: any;
    /**
     * 模型格式，可能值：
     * - OfflineModel
     * - SavedModel
     * - Keras H5
     * - Frozen Pb
     * - Caffe Prototxt
     * - TorchScript
     * - XGBoost
     * - PMML
     * - AlinkModel
     * - ONNX
     * @example `SavedModel`
     */
    FormatType: string;
    /**
     * 模型框架，可能值：
     * - Pytorch
     * -XGBoost
     * - Keras
     * - Caffe
     * - Alink
     * - Xflow
     * - TensorFlow
     * @example `TensorFlow`
     */
    FrameworkType: string;
    /**
     * 模型来源类型，可能值：
     * - Custom：自定义。
     * - PAIFlow：PAI工作流。
     * - TrainingService：PAI训练服务。
     * @example `PAIFlow`
     */
    SourceType: string;
    /**
     * 来源ID。
     * * 来源类型为Custom时，该字段不做限制。
     * * 来源为PAIFlow、TrainingService时，格式为
     * ```
     * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
     * ```
     * 其中：
     * - region为阿里云区域ID。
     * - workspaceId为工作空间ID。
     * - kind：为类型。取值：PipelineRun（PAIFlow工作流）；ServiceJob（训练服务）。
     * - id：为唯一标识。
     * @example `region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf`
     */
    SourceId: string;
    /**
     * 准入状态，取值如下：
     * - Pending：待定。
     * - Approved：允许上线。
     * - Rejected：不允许上线。
     * @example `Approved`
     */
    ApprovalStatus: string;
    /**
     * 其它信息。
     * @example `{
        "CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/st****017.preview.png"],
        "TrainedWords": ["albedo_overlord"]
    }`
     */
    ExtraInfo: any;
    /**
     * 指标
     * @example `{}`
     */
    Metrics: any;
}
