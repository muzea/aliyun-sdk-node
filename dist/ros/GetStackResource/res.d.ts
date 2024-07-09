export interface GetStackResourceResponse {
    /**
     * 资源状态。取值：
     * - CREATE_COMPLETE
     * - CREATE_FAILED
     * - CREATE_IN_PROGRESS
     * - UPDATE_IN_PROGRESS
     * - UPDATE_FAILED
     * - UPDATE_COMPLETE
     * - DELETE_IN_PROGRESS
     * - DELETE_FAILED
     * - CHECK_IN_PROGRESS
     * - CHECK_FAILED
     * - CHECK_COMPLETE
     * - IMPORT_IN_PROGRESS
     * - IMPORT_FAILED
     * - IMPORT_COMPLETE
     * @example `CREATE_COMPLETE`
     */
    Status: string;
    /**
     * 资源描述。
     * @example `no description`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6`
     */
    RequestId: string;
    /**
     * 资源状态原因。
     * @example `state changed`
     */
    StatusReason: string;
    /**
     * 资源物理ID，即实际资源ID。
     * @example `d04af923-e6b7-4272-aeaa-47ec9777****`
     */
    PhysicalResourceId: string;
    /**
     * 创建时间。
     * 按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
     * @example `2019-08-01T06:01:23`
     */
    CreateTime: string;
    /**
     * 元数据。
     * @example `{"key": "value"}`
     */
    Metadata: any;
    /**
     * 资源类型。
     * @example `ALIYUN::ROS::WaitConditionHandle`
     */
    ResourceType: string;
    /**
     * 资源属性列表。
     */
    ResourceAttributes: any[];
    /**
     * 资源逻辑ID，即模板中资源的名称。
     * @example `WebServer`
     */
    LogicalResourceId: string;
    /**
     * 资源栈最近一次成功的偏差检测中的资源的偏差状态。取值：
     * - DELETED：资源与预期的模板配置不同，因为资源已被删除。
     * - MODIFIED：资源与预期的模板配置不同。
     * - NOT_CHECKED：ROS没有检测资源是否与预期的模板配置不同。
     * - IN_SYNC：资源的当前配置与其预期的模板配置相匹配。
     * @example `IN_SYNC`
     */
    ResourceDriftStatus: string;
    /**
     * 更新时间。
     * 按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
     * @example `2019-08-01T06:01:29`
     */
    UpdateTime: string;
    /**
     * 资源栈最近一次成功的偏差检测中资源检测的时间。
     * @example `2020-02-27T07:47:47`
     */
    DriftDetectionTime: string;
    /**
     * 资源栈名称。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `test-describe-resource`
     */
    StackName: string;
    /**
     * 资源栈ID。
     * @example `efdf5c10-96a5-4fd7-ab89-68e7baa2****`
     */
    StackId: string;
    /**
     * 资源来源模块的信息。资源来自于模块时，才返回该字段。
     */
    ModuleInfo: {
        /**
         * 包含资源的一个或多个模块的逻辑ID的串联列表。 模块从最外层开始列出，并以 `/`分隔。
         * 在以下示例中，资源是从嵌套在父模块moduleA中的模块moduleB创建的。
         * `moduleA/moduleB`
         * @example `moduleA/moduleB
        `
         */
        LogicalIdHierarchy: string;
        /**
         * 包含资源的一个或多个模块类型的串联列表。 模块类型从最外层开始列出，并以 `/`分隔。
         * 在以下示例中，资源是从`MODULE::ROS::Child::Example`类型的模块创建的，该模块嵌套在`MODULE::ROS::Parent::Example`类型的父模块中。
         * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
         * @example `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
         */
        TypeHierarchy: string;
    };
}
