export interface ListStackResourcesResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6`
     */
    RequestId: string;
    /**
     * 资源对象的列表。
     */
    Resources: {
        /**
         * 资源状态。取值：
         * - INIT_COMPLETE：资源待创建。
         * - CREATE_COMPLETE：资源创建完成。
         * - CREATE_FAILED：资源创建失败。
         * - CREATE_IN_PROGRESS：资源创建中。
         * - UPDATE_IN_PROGRESS：资源更新中。
         * - UPDATE_FAILED：资源更新失败。
         * - UPDATE_COMPLETE：资源更新完成。
         * - DELETE_IN_PROGRESS：资源删除中。
         * - DELETE_FAILED：资源删除失败。
         * - DELETE_COMPLETE：资源删除完成。
         * - CHECK_IN_PROGRESS：资源校验中。
         * - CHECK_FAILED：资源校验失败。
         * - CHECK_COMPLETE：资源校验完成。
         * - IMPORT_IN_PROGRESS：资源导入中。
         * - IMPORT_FAILED：资源导入失败。
         * - IMPORT_COMPLETE：资源导入完成。
         * @example `UPDATE_COMPLETE`
         */
        Status: string;
        /**
         * 资源逻辑ID，即模板定义的名称。
         * @example `dummy`
         */
        LogicalResourceId: string;
        /**
         * 更新时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
         * @example `2019-08-01T06:01:29`
         */
        UpdateTime: string;
        /**
         * 资源栈ID。
         * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
         */
        StackId: string;
        /**
         * 资源的物理ID，即实际资源ID。
         * @example `d04af923-e6b7-4272-aeaa-47ec9777****`
         */
        PhysicalResourceId: string;
        /**
         * 资源栈最近一次成功的偏差检测中资源偏差检测的时间。
         * @example `2020-02-27T07:47:47`
         */
        DriftDetectionTime: string;
        /**
         * 资源类型。
         * @example `ALIYUN::ROS::Stack`
         */
        ResourceType: string;
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
         * 资源状态的原因。
         * @example `state changed`
         */
        StatusReason: string;
        /**
         * 创建时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
         * @example `2019-08-01T06:01:23`
         */
        CreateTime: string;
        /**
         * 资源栈名称。
         * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
         * @example `test-describe-resource`
         */
        StackName: string;
        /**
         * 资源来源模块的信息。资源来自于模块时，才返回该字段。
         */
        ModuleInfo: {
            /**
             * 包含资源的一个或多个模块的逻辑ID的串联列表。 模块从最外层开始列出，并以 `/ `分隔。
             * 在以下示例中，资源是从嵌套在父模块moduleA中的模块moduleB创建的。
             * `moduleA/moduleB`
             * @example `moduleA/moduleB`
             */
            LogicalIdHierarchy: string;
            /**
             * 包含资源的一个或多个模块类型的串联列表。 模块类型从最外层开始列出，并以 `/` 分隔。
             * 在以下示例中，资源是从`MODULE::ROS::Child::Example`类型的模块创建的，该模块嵌套在`MODULE::ROS::Parent::Example`类型的父模块中。
             * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
             * @example `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
             */
            TypeHierarchy: string;
        };
    }[];
}
