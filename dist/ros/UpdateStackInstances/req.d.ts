export interface UpdateStackInstancesRequest {
    /**
     * 资源栈组所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈组名称。名称在单个地域内唯一。
     * 长度不超过255个字符，必须以数字或英文字母开头，可以包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyStackGroup`
     */
    "StackGroupName": string;
    /**
     * 使用自助管理权限模式部署资源栈的目标账号ID列表。最多支持添加20个目标账号ID。
     * > 使用自助管理权限模式更新资源栈时，此参数必填。
     * @example `["151266687691****","141261387191****"]`
     */
    "AccountIds"?: string[];
    /**
     * 目标执行地域列表。最多支持添加20个地域。
     * @example `["cn-hangzhou", "cn-beijing"]`
     */
    "RegionIds": string[];
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 更新资源栈的操作描述。
     * 取值范围：1~256个字符。
     * @example `Update stack instances in hangzhou and beijing`
     */
    "OperationDescription"?: string;
    /**
     * 更新资源栈的操作设置。
     * 包含以下参数：
     * - {"FailureToleranceCount": N}
     *   容错数。每个地域中资源栈可以失败的账号数，超过该数字将停止该地域中的操作。如果停止了一个地域中的操作，此操作在其他地域中不继续执行。
     *   N的取值范围：0~20。
     *
     *   若不指定FailureToleranceCount，则默认为0。
     * - {"FailureTolerancePercentage": N}
     *     容错百分比。每个地域中资源栈可以失败的账号数占总账号数的百分比，超过该百分比将停止该地域中的操作。
     *
     *     N的取值范围：0~100。百分比不是整数时，ROS会向下取整。
     *     若不指定FailureTolerancePercentage，则默认为0。
     * - {"MaxConcurrentCount": N}
     *
     *   最大并发账号数。每个地域中可同时部署资源栈的账号数。
     *   N的取值范围：1~20。
     *   若不指定MaxConcurrentCount，则默认为1。
     * - {"MaxConcurrentPercentage": N}
     *
     *    最大并发账号百分比。每个地域中可同时部署资源栈的账号数占总账号数的百分比。
     *
     *    取值范围：1~100。百分比不是整数时，ROS会向下取整。
     *    若不指定MaxConcurrentPercentage，则默认为1。
     * - {"RegionConcurrencyType": N}
     * 部署资源栈的地域级别并发类型，取值：
     *
     *      - SEQUENTIAL （默认值）： 根据地域顺序依次在指定的每个地域部署，同一时间只在一个地域部署。
     *      - PARALLEL ：在所有指定的地域内并行部署。
     * 多个参数之间用半角逗号（,）分隔。
     * > - 不能同时指定MaxConcurrentCount和MaxConcurrentPercentage。
     * >- 不能同时指定FailureToleranceCount和FailureTolerancePercentage。
     * @example `{"FailureToleranceCount": 1,"MaxConcurrentCount": 2}`
     */
    "OperationPreferences"?: any;
    /**
     * 更新资源栈的超时时间。
     * - 默认值：60。
     *
     * - 单位：分钟。
     * @example `10`
     */
    "TimeoutInMinutes"?: number;
    /**
     * 覆盖参数列表。
     */
    "ParameterOverrides"?: {
        /**
         * 覆盖参数的名称。如果未指定参数名称，ROS将使用创建资源栈组时所指定的参数名称。
         * N最大值为200。
         * > - ParameterOverrides为可选参数。
         * >- 如果需要指定ParameterOverrides，则ParameterOverrides.N.ParameterKey和ParameterOverrides.N.ParameterValue必须同时指定。
         * @example `Amount`
         */
        ParameterKey: string;
        /**
         * 覆盖参数的值。如果未指定特定参数的名称和值，ROS将使用创建资源栈组时所指定的参数。
         * N最大值为200。
         * > - ParameterOverrides为可选参数。
         * >- 如果需要指定ParameterOverrides，则ParameterOverrides.N.ParameterKey和ParameterOverrides.N.ParameterValue必须同时指定。
         * @example `1`
         */
        ParameterValue: string;
    }[];
    /**
     * 使用服务管理权限模式部署资源栈的部署目标。
     * > 使用服务管理权限模式更新资源栈时，此参数必填。
     */
    "DeploymentTargets"?: {
        /**
         * 资源目录的资源夹ID列表。
         */
        RdFolderIds: string[];
        /**
         * 资源目录中的成员账号ID列表。最多支持添加20个成员账号ID。
         * >您可以在**资源管理**控制台的**概览**页面查看成员账号ID。具体操作，请参见[查看成员详情](~~111624~~)。
         */
        AccountIds: string[];
    };
}
