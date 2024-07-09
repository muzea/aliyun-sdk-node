export interface ValidateTemplateResponse {
    /**
     * 描述此资源栈模板的相关信息。
     * @example `No description`
     */
    Description: string;
    /**
     * 输入参数列表。
     */
    Parameters: any[];
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 模板输出列表。
     */
    Outputs: {
        /**
         * 模板输出名称。
         * @example `instance_id`
         */
        OutputKey: string;
        /**
         * 模板输出描述。
         * @example `The instance ID of my ECS.`
         */
        Description: string;
        /**
         * 模板输出别名。
         * @example `Instance ID`
         */
        Label: string;
    }[];
    /**
     * 模板中用到的资源类型信息。
     */
    ResourceTypes: {
        /**
         * 普通资源类型列表（已去重）。
         */
        Resources: string[];
        /**
         * 数据源资源类型列表（已去重）。
         */
        DataSources: string[];
    };
    /**
     * 模板中定义的普通资源列表。
     * > - 对于ROS模板，资源定义中包含`Count`字段的资源不会展开。
     * >- 对于Terraform模板，资源定义中包含`count`或`for_each`的资源不会展开。
     */
    Resources: {
        /**
         * 普通资源类型。
         * @example `ALIYUN::ECS::InstanceGroup`
         */
        ResourceType: string;
        /**
         * 普通资源路径。通常与资源名称相同。
         * @example `server`
         */
        ResourcePath: string;
        /**
         * 普通资源逻辑ID的字符串匹配模式。
         * 对于ROS模板，存在如下两种情况：
         * - 资源定义中不包含`Count`字段：假定模板中定义的资源名称为`server`，则该字段取值为`server`，对应的`ResourcePath`为`server`。
         * - 资源定义中包含`Count`字段：假定模板中定义的资源名称为`server`，则该字段取值为`server[*]`，对应的`ResourcePath`为`server`。
         * 对于Terraform模板中的资源和[模块](https://www.terraform.io/language/modules)，存在如下两种情况：
         * - 定义中不包含[`count`](https://www.terraform.io/language/meta-arguments/count)和[`for_each`](https://www.terraform.io/language/meta-arguments/for_each)：假定名称为`server`，则该字段取值为`server`，对应的`ResourcePath`为`server`。
         * - 定义中包含[`count`](https://www.terraform.io/language/meta-arguments/count)或[`for_each`](https://www.terraform.io/language/meta-arguments/for_each)：假定名称为`server`，则该字段取值为`server[*]`，对应的`ResourcePath`为`server`。
         * Terraform模板示例如下：
         * - 顶层模块中的资源：
         *     - `server`：未使用`count`和`for_each`，对应的`ResourcePath`为`server`。
         *     - `server[*]`：使用了`count`或`for_each`，对应的`ResourcePath`为`server`。
         * - 子模块中的资源：
         *     - `app.server`：`app`模块未使用`count`和`for_each`，`server`资源未使用`count`和`for_each`，对应的`ResourcePath`为`app.server`。
         *     - `app.server[*]`：`app`模块未使用`count`和`for_each`，`server`资源使用了`count`或`for_each`，对应的`ResourcePath`为`app.server`。
         *     - `app[*].server`：`app`模块使用了`count`或`for_each`，`server`资源未使用`count`和`for_each`，对应的`ResourcePath`为`app.server`。
         *     - `app[*].server[*]`：`app`模块使用了`count`或`for_each`，`server`资源使用了`count`或`for_each`，对应的`ResourcePath`为`app.server`。
         *     - `app.app_group[*].server`：`app`模块未使用`count`和`for_each`，`app_group`模块使用了`count`或`for_each`（`app_group`模块是`app`模块的子模块），`server`资源未使用`count`和`for_each`，对应的`ResourcePath`为`app.app_group.server`。
         * @example `server`
         */
        LogicalResourceIdPattern: string;
    }[];
    /**
     * 资源栈更新的相关信息。若UpdateInfoOptions包含Disabled，则不返回。
     */
    UpdateInfo: {
        /**
         * 允许修改的参数的列表。
         */
        ParametersAllowedToBeModified: string[];
        /**
         * 一定会引发资源中断的参数的列表。
         * > - 目前仅支持少量资源类型。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersCauseInterruptionIfModified: string[];
        /**
         * 可能允许修改的参数的列表。
         */
        ParametersConditionallyAllowedToBeModified: string[];
        /**
         * 可能会引发资源中断的参数的列表。
         * > - 目前仅支持少量资源类型。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersConditionallyCauseInterruptionIfModified: string[];
        /**
         * 不允许修改的参数的列表。
         */
        ParametersNotAllowedToBeModified: string[];
        /**
         * 不确定是否允许修改的参数的列表。
         */
        ParametersUncertainlyAllowedToBeModified: string[];
        /**
         * 不确定是否会引发资源中断的参数的列表。
         * > - 目前仅支持少量资源类型。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersUncertainlyCauseInterruptionIfModified: string[];
        /**
         * 一定会引发资源替换更新的参数的列表。
         * > - 仅在UpdateInfoOptions包含EnableReplacement时返回。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersCauseReplacementIfModified: string[];
        /**
         * 可能会引发资源替换更新的参数的列表。
         * > - 仅在UpdateInfoOptions包含EnableReplacement时返回。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersConditionallyCauseReplacementIfModified: string[];
        /**
         * 不确定是否会引发资源替换更新的参数的列表。
         * > - 仅在UpdateInfoOptions包含EnableReplacement时返回。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersUncertainlyCauseReplacementIfModified: string[];
    };
}
