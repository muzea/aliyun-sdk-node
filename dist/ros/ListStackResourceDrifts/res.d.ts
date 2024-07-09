export interface ListStackResourceDriftsResponse {
    /**
     * 资源偏差。
     */
    ResourceDrifts: {
        /**
         * 资源逻辑ID，即模板中资源的名称。
         * @example `ScalingRule`
         */
        LogicalResourceId: string;
        /**
         * 资源栈ID。
         * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
         */
        StackId: string;
        /**
         * 资源物理ID，即实际资源ID。
         * @example `asr-2ze4zzc3kf9yz1kd****`
         */
        PhysicalResourceId: string;
        /**
         * 资源偏差检测时间。
         * @example `2020-02-27T07:47:47`
         */
        DriftDetectionTime: string;
        /**
         * 资源类型。
         * @example `ALIYUN::ESS::ScalingRule`
         */
        ResourceType: string;
        /**
         * 模板中定义的资源属性，以JSON格式表示。
         * @example `{"ScalingRuleName": "test2"}`
         */
        ExpectedProperties: string;
        /**
         * 资源偏差状态。取值：
         * - DELETED：资源与预期的模板配置不同，因为资源已被删除。
         * - MODIFIED：资源与预期的模板配置不同。
         * - NOT_CHECKED：ROS没有检查资源是否与预期的模板配置不同。
         * - IN_SYNC：资源的当前配置与其预期的模板配置相匹配。
         * @example `MODIFIED`
         */
        ResourceDriftStatus: string;
        /**
         * 资源属性偏差。
         */
        PropertyDifferences: {
            /**
             * 资源属性的实际取值。
             * @example `test1`
             */
            ActualValue: string;
            /**
             * 资源属性的偏差类型。取值：
             * - ADD：已将值添加到数据类型为数组或列表的资源属性。
             * - REMOVE：属性已从当前资源配置中删除。
             * - NOT_EQUAL：当前属性值与堆栈模板中定义的预期值不同。
             * @example `NOT_EQUAL`
             */
            DifferenceType: string;
            /**
             * 资源属性的路径。
             * @example `/ScalingRuleName`
             */
            PropertyPath: string;
            /**
             * 资源属性模板定义值。
             * @example `test2`
             */
            ExpectedValue: string;
        }[];
        /**
         * 实际的资源属性，以JSON格式表示。
         * @example `{"ScalingRuleName": "test1"}`
         */
        ActualProperties: string;
        /**
         * 资源来源模块的信息。如果资源来自于模块，才返回该字段。
         */
        ModuleInfo: {
            /**
             * 包含资源的一个或多个模块的逻辑ID的串联列表。 模块从最外层开始列出，并以 `/`分隔。
             * 在以下示例中，资源是从嵌套在父模块moduleA中的模块moduleB创建的。
             * `moduleA/moduleB`
             * @example `moduleA/moduleB`
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
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****w==`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
}
