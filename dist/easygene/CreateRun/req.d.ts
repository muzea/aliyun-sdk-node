export interface CreateRunRequest {
    /**
     * 工作空间名字
     * @example `test-workspace`
     */
    "Workspace": string;
    /**
     * 任务名称
     * @example `wgs_sentieon_hc_with_qc_NGPTS1900029301`
     */
    "RunName"?: string;
    /**
     * 应用名称
     * @example `Sentieon`
     */
    "AppName": string;
    /**
     * 应用版本号
     * @example `16`
     */
    "AppRevision"?: string;
    /**
     * 应用版本唯一标签
     * @example `ProduceVersion`
     */
    "RevisionTag"?: string;
    /**
     * 任务描述
     * @example `test run`
     */
    "Description"?: string;
    /**
     * 任务标签
     * @example `{"env": "test"}`
     */
    "Labels"?: string;
    /**
     * 任务配置
     * @example `{ 	"CallCaching": true,     "FailureMode": "NoNewCalls" }`
     */
    "ExecuteOptions"?: {
        /**
         * 是否开启CallCaching
         * @example `True`
         */
        CallCaching: boolean;
        /**
         * 是否删除中间文件
         * @example `True`
         */
        DeleteIntermediateResults: boolean;
        /**
         * 失败模式
         * @example `NoNewCalls`
         */
        FailureMode: string;
        /**
         * 使用相对输出路径
         * @example `True`
         */
        UseRelativeOutputPaths: boolean;
    };
    /**
     * 任务执行目录
     * @example `oss://my-bucket/exec/`
     */
    "ExecuteDirectory"?: string;
    /**
     * 可选参数，用户自定义的RAM Role，在任务运行过程中，通过扮演这个Role访问用户的资源，如OSS，ACR等。如果不指定，使用默认的aliyuneasygenedefaultrole
     * @example `TestRole`
     */
    "Role"?: string;
    /**
     * 任务输出拷贝目录
     * @example `oss://my-bucket/output/`
     */
    "OutputFolder"?: string;
    /**
     * 默认运行时
     * @example `{}`
     */
    "DefaultRuntime"?: string;
    /**
     * 任务输入
     * @example `{         "workflow1.task1.param1": "helloooo.txt",         "workflow1.task1.param2": "abc",         "workflow1.task2.param1": "new_helloooo.txt",         "workflow1.task2.param2": "def"     }`
     */
    "Inputs": string;
    /**
     * 任务幂等token
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    "ClientToken"?: string;
}
