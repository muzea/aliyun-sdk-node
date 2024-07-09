export interface CreateSubmissionRequest {
    /**
     * 工作空间名字
     * @example `TestWorkspace`
     */
    "Workspace": string;
    /**
     * 应用名称
     * @example `TestApp`
     */
    "AppName": string;
    /**
     * 应用版本号
     * @example `1`
     */
    "Revision"?: string;
    /**
     * 应用版本唯一标签
     * @example `ProduceVersion`
     */
    "RevisionTag"?: string;
    /**
     * 实体类型
     * @example `TestEntityType`
     */
    "EntityType": string;
    /**
     * 投递任务运行实体名称列表
     * @example `TestEntityType`
     */
    "EntityNames"?: string[];
    /**
     * 任务配置
     * @example `{ 	        "CallCaching": false, 	        "DeleteIntermediateResults": true, 	        "FailureMode": "NoNewCalls"         }`
     */
    "ExecuteOptions"?: string;
    /**
     * 任务执行目录
     * @example `oss://my-bucket/my-exe-dir/`
     */
    "ExecuteDirectory"?: string;
    /**
     * 任务输出拷贝目录
     * @example `oss://my-bucket/my-output-dir/`
     */
    "OutputFolder"?: string;
    /**
     * 默认运行时
     * @example `{}`
     */
    "DefaultRuntime"?: string;
    /**
     * 任务输入
     * @example `{}`
     */
    "Inputs"?: string;
    /**
     * 任务输出
     * @example `{}`
     */
    "Outputs"?: string;
    /**
     * 任务幂等token
     * @example `TestToken`
     */
    "ClientToken"?: string;
}
