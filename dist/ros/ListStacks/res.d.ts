export interface ListStacksResponse {
    /**
     * 资源栈总个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     *
     * 默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `FBAC80B4-9C27-529D-BC9C-4155FA5CD7A7`
     */
    RequestId: string;
    /**
     * 资源栈列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 资源栈列表。
     */
    Stacks: {
        /**
         * 资源栈状态。
         * @example `CREATE_COMPLETE`
         */
        Status: string;
        /**
         * 资源栈更新时间。按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2022-03-10T07:44:36`
         */
        UpdateTime: string;
        /**
         * 资源栈最近一次成功的偏差检测的时间。
         * @example `2022-03-10T06:46:36`
         */
        DriftDetectionTime: string;
        /**
         * 资源栈状态原因。
         * @example `Stack CREATE completed successfully`
         */
        StatusReason: string;
        /**
         * 创建时间。按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2022-03-10T06:44:36`
         */
        CreateTime: string;
        /**
         * 当创建资源栈失败时，是否禁用回滚策略。取值：
         * - true：禁用回滚，即当创建资源栈失败时不进行回滚。
         * - false（默认值）：不禁用回滚，即当创建资源栈失败时进行回滚。
         * @example `false`
         */
        DisableRollback: boolean;
        /**
         * 资源栈的标签。
         */
        Tags: {
            /**
             * 资源栈的标签键。
             * @example `acs:rm:rgId`
             */
            Key: string;
            /**
             * 资源栈的标签值。
             * @example `rg-aek2frunvw7****`
             */
            Value: string;
        }[];
        /**
         * 资源栈名称。
         * @example `MyStack`
         */
        StackName: string;
        /**
         * 创建资源栈的超时时间。单位：分钟。
         * @example `60`
         */
        TimeoutInMinutes: number;
        /**
         * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 父资源栈ID。
         * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf692****`
         */
        ParentStackId: string;
        /**
         * 资源栈ID。
         * @example `67805444-a605-45ee-a57f-83908ff6****`
         */
        StackId: string;
        /**
         * 资源栈最近一次成功的偏差检测中的资源栈状态，取值：
         * - DRIFTED：资源栈处于检测状态。
         * - NOT_CHECKED：资源栈未进行过成功的偏差检测。
         * - IN_SYNC：资源栈处于同步状态。
         * @example `IN_SYNC`
         */
        StackDriftStatus: string;
        /**
         * 资源栈类型，取值：
         * - ROS：使用ROS模板的资源栈。
         * - Terraform：使用Terraform模板的资源栈。
         * @example `ROS`
         */
        StackType: string;
        /**
         * 资源组ID。
         * @example `rg-aek2frunvw7****`
         */
        ResourceGroupId: string;
        /**
         * 是否为托管资源栈。取值：
         * - true：是托管资源栈。
         * - false：不是托管资源栈。
         * @example `false`
         */
        ServiceManaged: boolean;
        /**
         * 托管资源栈所属的服务名称。
         * @example `ACVS`
         */
        ServiceName: string;
        /**
         * 资源栈操作发生错误时的补充信息。
         * > 该返回属性仅在特定情况下返回，且至少返回一个子属性。例如：调用其他云服务API报错。
         */
        OperationInfo: {
            /**
             * 错误码。
             * @example `DependencyViolation`
             */
            Code: string;
            /**
             * 错误内容。
             * @example `There is still instance(s) in the specified security group.`
             */
            Message: string;
            /**
             * 调用其他云服务API的请求ID。
             * @example `071D6166-3F6B-5C7B-A1F0-0113FBB643A8`
             */
            RequestId: string;
            /**
             * 调用其他云服务API的名称。
             * @example `DeleteSecurityGroup`
             */
            Action: string;
            /**
             * 发生操作错误的资源类型。
             * @example `ALIYUN::ECS::SecurityGroup`
             */
            ResourceType: string;
            /**
             * 发生操作错误的资源逻辑ID。
             * @example `EcsSecurityGroup`
             */
            LogicalResourceId: string;
        };
        /**
         * 是否开启资源栈删除保护。取值：
         * - Enabled：开启资源栈删除保护。
         * - Disabled：关闭资源栈删除保护。此时支持通过控制台或[DeleteStack](~~610812~~)接口释放资源栈。
         * > 嵌套资源栈的删除保护机制与根资源栈一致。
         * @example `Disabled`
         */
        DeletionProtection: string;
    }[];
}
