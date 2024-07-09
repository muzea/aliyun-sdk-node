export interface ListModelVersionsRequest {
    /**
     * 模型版本列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，对指定的排序字段进行升序或降序。默认ASC。
     * - ASC：升序。
     * - DESC：降序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 分页查询时的排序字段。目前GmtCreateTime字段用于排序。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 配置模型版本名称，来过滤模型版本列表。
     * @example `1.0.1`
     */
    "VersionName"?: string;
    /**
     * 配置模型格式，来过滤模型版本列表。取值如下：
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
    "FormatType"?: string;
    /**
     * 配置模型框架，来过滤模型版本列表，取值如下：
     * - Pytorch
     * -XGBoost
     * - Keras
     * - Caffe
     * - Alink
     * - Xflow
     * - TensorFlow
     * @example `TensorFlow`
     */
    "FrameworkType"?: string;
    /**
     * 模型ID。如何获取模型ID，请参见[ListModels](~~461944~~)。
     * @example `model-dajbueh******`
     */
    "ModelId": string;
    /**
     * 根据模型来源类型，来过滤模型版本列表。取值如下：
     * - Custom（默认值）：自定义。
     * - PAIFlow：PAI工作流。
     * - TrainingService：PAI训练服务。
     * @example `PAIFlow`
     */
    "SourceType"?: string;
    /**
     * 来源ID。
     * * 来源类型为Custom时，该字段不做限制。
     * * 来源为PAIFlow、TrainingService时，格式为
     * ```
     * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
     * ```
     * 其中：
     * - region为阿里云区域ID。
     * - workspacceId为工作空间ID。
     * - kind：为类型。取值：PipelineRun（PAIFlow工作流）；ServiceJob（训练服务）。
     * - id：为唯一标识。
     * @example `region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf`
     */
    "SourceId"?: string;
    /**
     * 标签串。用于列表过滤，标签中Key或Value中，有指定字符串的，都会被过滤出来。
     * @example `key1`
     */
    "Label"?: string;
    /**
     * 根据准入状态来过滤模型版本列表，取值如下：
     * - Pending：待定。
     * - Approved：允许上线。
     * - Rejected：不允许上线。
     * @example `Approved`
     */
    "ApprovalStatus"?: string;
}
