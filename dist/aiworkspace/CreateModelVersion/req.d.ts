export interface CreateModelVersionRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 模型版本，模型下唯一。如果不填写该参数，则默认**0.1.0**为第一个版本。之后子版本号依次加1，例如：第二个版本号默认为**0.2.0**。
         * 版本号由主版本号、子版本号和阶段版本号组成，通过半角句号（.）分隔。其中：主版本号、子版本号为数字，阶段版本号以数字开头，下划线和字母组成。例如：版本号为1.1.0或2.3.4_beta。
         * @example `0.1.0`
         */
        VersionName: string;
        /**
         * 模型版本URI，即模型存储位置。模型地址类型如下：
         * - 模型的HTTP（S）地址，例如：`https://myweb.com/mymodel.tar.gz`。
         * - 如果模型存储在OSS中，格式为`oss://<bucket>.<endpoint>/object`。其中endpoint配置，请参见[访问域名和数据中心](~~31837~~)，例如：`oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`。
         * @example `oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`
         */
        Uri: string;
        /**
         * 标签列表。
         */
        Labels: any[];
        /**
         * 模型版本描述。
         * @example `情感分析。`
         */
        VersionDescription: string;
        /**
         * 模型格式，取值如下：
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
         * 模型框架，取值如下：
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
         * 扩展字段。JsonString类型。
         * @example `{}`
         */
        Options: string;
        /**
         * 模型指标。
         * 序列化后长度限制为8192。
         * @example `{
          "Results": [{
            "Dataset": {
              "DatasetId": "d-sdkjanksaklerhfd"
            },
            "Metrics": {
              "cer": 0.175
            }
          }, {
            "Dataset": {
              "Uri": "oss://xxxx/"
            },
            "Metrics": {
              "cer": 0.172
            }
          }]
        }`
         */
        Metrics: any;
        /**
         * 训练配置。用于微调、增量训练的配置。
         * @example `{}`
         */
        TrainingSpec: any;
        /**
         * 描述如何应用于下游的推理服务：例如描述EAS的processor、container等。例如：
         * `{
         *     "processor": "tensorflow_gpu_1.12"
         * }`
         * @example `{
            "processor": "tensorflow_gpu_1.12"
        }`
         */
        InferenceSpec: any;
        /**
         * 评测配置。
         * @example `{}`
         */
        EvaluationSpec: any;
        /**
         *
         * @example `{}`
         */
        CompressionSpec: any;
        /**
         * 模型来源类型，取值如下：
         * - Custom（默认值）：自定义。
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
    };
    /**
     * 模型ID。如何获取模型ID，请参见[ListModels](~~461944~~)。
     * @example `model-dfs1****5c`
     */
    "ModelId": string;
}
