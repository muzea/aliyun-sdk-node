export interface ContinueCreateStackRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * RAM角色名称。ROS会扮演该角色创建资源栈，使用角色的凭证代表用户进行接口调用。
     * ROS始终将此角色用于资源栈上将进行的操作。只要用户有权在资源栈上进行操作，即使用户无权使用角色，ROS也会使用此角色，确保角色授予最少的权限。
     * 如果用户未指定该值，ROS将使用以前与资源栈关联的角色。如果没有可用角色，ROS将使用从您的用户凭证中生成的临时凭证。
     * RAM角色名称最大长度为64个字节。
     * @example `test-role`
     */
    "RamRoleName"?: string;
    /**
     * 继续创建模式，取值：
     * - Recreate（默认值）：
     *
     *   您仅需继续创建如下4类资源，其它资源无需继续创建：
     *     - 创建失败的资源。
     *     - 指定继续创建的资源（RecreatingResources.N）。
     *     - 依赖于指定继续创建的资源（RecreatingResources.N）的资源。
     *     - 未创建的资源。
     * >RecreatingResources.N、TemplateBody、TemplateURL、Parameters参数仅在此模式下生效。
     * - Ignore：
     *   - 忽略并丢弃所有创建失败的资源、未创建的资源，直接把资源栈标记为成功。
     *   - 模板内容会发生变化。
     * >该模式仅ROS类型资源栈可用。
     * @example `Recreate`
     */
    "Mode"?: string;
    /**
     * 模板的结构。长度为1~524288个字节。
     * 如果长度较大，建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免URL过长而导致请求失败。
     * ROS模板限制如下：
     * - 只能修改模板的Description、Metadata、Resources、Outputs、Rules部分。
     * - 不能增加或删除Section（模板内容的第一层）。
     * - 模板的Resources部分限制如下：
     *   - 对于不继续创建的资源，既不能删除，也不能修改其模板内容。
     *   - 对于继续创建的资源，既可以删除，也可以修改其模板内容。
     *   - 可以增加新资源。
     * > - 该参数仅在Mode为Recreate时生效。
     * > - 您仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。若都不指定，则使用原有模板。
     * @example `{"ROSTemplateFormatVersion": "2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储桶（例如：oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板最大为524288个字节。
     * 如果OSS地域未指定，默认与接口参数RegionId相同。
     *
     * > - 该参数仅在Mode为Recreate时生效，模板限制与TemplateBody相同。
     * > - 您仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。若都不指定，则使用原有模板。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 此次请求是否只进行检验。取值：
     * - true：只做校验，不会实际执行。
     * - false（默认）：会实际执行，继续创建资源栈。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 模板ID。支持共享模板和私有模板。
     * > - 当`Mode`取值为`Recreate`时，本参数生效。模板限制与`TemplateBody`相同。
     * > - 您仅能指定`TemplateBody`、`TemplateURL`或`TemplateId`其中一个参数。若都不指定，则使用原有模板。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 创建失败的资源将会被继续创建。您可以指定额外需要继续创建的资源列表，ROS会继续创建所有依赖于其的资源。
     * >该参数仅ROS类型资源栈可用。
     * @example `WebServer`
     */
    "RecreatingResources"?: string[];
    /**
     * 覆盖的模板参数。
     */
    "Parameters"?: {
        /**
         * 覆盖的模板参数的名称。如果未指定特定参数的名称和值，ROS将使用上一次创建时的取值。N的最大值为200。
         * > 该参数仅在Mode为Recreate时生效。
         * @example `Amount`
         */
        ParameterKey: string;
        /**
         * 覆盖的模板参数的值。N的最大值为200。
         * 对于ROS类型资源栈，覆盖的模板参数限制如下：
         * - 不能引发模板Conditions部分中任何Condition的值的变化，由true变false，或由false变true。
         * - 覆盖参数不能被不继续创建的资源引用。
         * >该参数仅在Mode为Recreate时生效。
         * @example `12`
         */
        ParameterValue: string;
    }[];
    /**
     * 资源最大并发数。
     * 默认为空，用户可以输入大于等于零的整数。
     * > - 若设置为大于零的整数，则使用该整数。
     * > - 若设置为零，对于ROS类型资源栈则不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * > - 若不设置，则使用上次操作时的设置；若上次操作时未设置，对于ROS类型资源栈则不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * > - 若设置了该值，将与资源栈进行关联，影响资源栈的后续操作。
     * @example `1`
     */
    "Parallelism"?: number;
    /**
     * 重新创建选项。
     */
    "RecreatingOptions"?: string[];
}
