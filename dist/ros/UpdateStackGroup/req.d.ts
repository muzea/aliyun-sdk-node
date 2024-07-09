export interface UpdateStackGroupRequest {
    /**
     * 资源栈组所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈组名称。名称在单个地域内唯一。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyStackGroup`
     */
    "StackGroupName": string;
    /**
     * 资源栈组描述。
     * 长度为1~256个字符。
     * @example `My Stack Group`
     */
    "Description"?: string;
    /**
     * 使用自助管理权限模式部署资源栈的目标账号ID列表。最多支持添加20个目标账号ID。
     * @example `["12****"]`
     */
    "AccountIds"?: string[];
    /**
     * 目标执行地域列表。最多支持添加20个地域。
     * @example `["cn-hangzhou", "cn-beijing"]`
     */
    "RegionIds"?: string[];
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较大，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * >您必须且仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `{"ROSTemplateFormatVersion": "2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于HTTP Web服务器（HTTP或HTTPS）或阿里云OSS存储桶中的模板（1~524,288个字节）。OSS存储桶的URL，例如oss://ros/template/demo或oss://ros/template/demo?RegionId=cn-hangzhou。如未指定OSS地域，默认与接口参数RegionId相同。
     * > 您必须且仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 更新资源栈组的操作描述。
     * @example `Update stack instances in hangzhou`
     */
    "OperationDescription"?: string;
    /**
     * 更新资源栈组的操作设置。
     * 包含以下参数：
     * - {"FailureToleranceCount": N}
     *   容错数。每个地域中资源栈可以失败的账号数，超过该数字将停止该地域中的操作。如果停止了一个地域中的操作，此操作在其他地域中不继续执行。
     *
     *    N的取值范围：0~20。
     *    若不指定FailureToleranceCount，则默认为0。
     * - {"FailureTolerancePercentage": N}
     *    容错百分比。每个地域中资源栈可以失败的账号数占总账号数的百分比，超过该百分比将停止该地域中的操作。
     *    N的取值范围：0~100。百分比不是整数时，ROS会向下取整。
     *    若不指定FailureTolerancePercentage，则默认为0。
     * - {"MaxConcurrentCount": N}
     *    最大并发账号数。每个地域中可同时部署资源栈的账号数。
     *    N的取值范围：1~20。
     *    若不指定MaxConcurrentCount，则默认为1。
     * - {"MaxConcurrentPercentage": N}最大并发账号百分比。
     *    每个地域中可同时部署资源栈的账号数占总账号数的百分比。
     *    N的取值范围：1~100。百分比不是整数时，ROS会向下取整。
     *    若不指定MaxConcurrentPercentage，则默认为1。
     * - {"RegionConcurrencyType": N}
     * 部署资源栈实例的地域级别并发类型，取值：
     *      - SEQUENTIAL （默认值）： 根据地域顺序依次在指定的每个地域部署，同一时间只在一个地域部署。
     *      - PARALLEL ：在所有指定的地域内并行部署。
     * 多个参数之间用半角逗号（,）分隔。
     * > - 不能同时指定MaxConcurrentCount和MaxConcurrentPercentage。
     * >- 不能同时指定FailureToleranceCount和FailureTolerancePercentage。
     * @example `{"FailureToleranceCount": 1,"MaxConcurrentCount": 2}`
     */
    "OperationPreferences"?: any;
    /**
     * 创建具有自助管理权限的资源栈组时，需指定的供ROS扮演的RAM管理员角色名称。若不指定，则使用AliyunROSStackGroupAdministrationRole作为默认值。ROS以该角色身份进一步扮演执行角色（AliyunROSStackGroupExecutionRole）来操作资源栈组中资源栈实例所对应的资源栈。
     * 长度为1~64个字符，可包含英文字母、数字和短划线（-）。
     * @example `AliyunROSStackGroupAdministrationRole`
     */
    "AdministrationRoleName"?: string;
    /**
     * 创建具有自助管理权限的资源栈组时，需指定的供管理员角色（AliyunROSStackGroupAdministrationRole）扮演的RAM执行角色名称。若不指定，则使用AliyunROSStackGroupExecutionRole作为默认值。ROS以该角色身份来操作资源栈组中资源栈实例所对应的资源栈。
     * 长度为1~64个字符，可包含英文字母、数字和短划线（-）。
     * @example `AliyunROSStackGroupExecutionRole`
     */
    "ExecutionRoleName"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * > 您必须且仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。若不指定，默认取最新版本。
     * >TemplateVersion仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 资源栈组参数列表。
     */
    "Parameters"?: {
        /**
         * 参数的名称。若未指定参数的名称和值，则ROS将使用模板中指定的默认值。
         * N最大值为200。
         * > Parameters为可选参数。若指定了Parameters，则Parameters.N.ParameterKey为必选参数。
         * @example `Amount`
         */
        ParameterKey: string;
        /**
         * 参数的值。
         * N最大值为200。
         * > Parameters为可选参数。若指定了Parameters，则Parameters.N.ParameterValue为必选参数。
         * @example `1`
         */
        ParameterValue: string;
    }[];
    /**
     * 授权模式。
     * 取值：
     * - SELF_MANAGED（默认值）：自助管理权限模式。使用该模式时，您需要事先在管理员账号和目标账号中手动创建RAM角色，建立二者的信任关系，然后在目标账号中部署资源栈。
     * - SERVICE_MANAGED：服务管理权限模式。使用该模式时，ROS会为管理员账号和目标账号自动创建服务关联角色，管理员账号通过服务关联角色在目标账号中部署资源栈。
     * > - 如果当前资源栈组下已有资源栈实例，则不允许更换授权模式。
     * >- 当您使用服务管理权限模式部署资源栈时，当前账号必须是资源目录的企业管理账号或委派管理员账号，且已开启可信访问。更多信息，请参见[设置委派管理员账号](~~308253~~)和[开启可信访问](~~298229~~)。
     * @example `SELF_MANAGED`
     */
    "PermissionModel"?: string;
    /**
     * 自动部署设置信息。
     * >仅当PermissionModel为SERVICE_MANAGED时，需要指定该参数。
     * @example `{"Enabled": true, "RetainStacksOnAccountRemoval": true}`
     */
    "AutoDeployment"?: {
        /**
         * 启用或者禁用自动部署。
         * 取值：
         * - true：启用自动部署。启用自动部署后，如果目标资源夹中新增了成员账号，资源栈组会自动将资源栈实例部署到该账号。如果目标资源夹中删除了成员账号，则资源栈组会自动删除该账号中的资源栈实例。
         * - false：禁用自动部署。禁用自动部署后，目标资源夹中成员账号变动时资源栈实例不会发生变化。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 目标资源夹中删除成员账号时，是否保留成员账号中的资源栈。
         * 取值：
         * - true：保留资源栈。
         * - false：删除资源栈。
         * >当Enabled为true时，RetainStacksOnAccountRemoval必选。
         * @example `true`
         */
        RetainStacksOnAccountRemoval: boolean;
    };
    /**
     * 使用服务管理权限模式更新资源栈的部署目标。
     * @example `{"RdFolderIds": ["fd-4PvlVLOL8v"]}`
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
    /**
     * 资源栈组选项列表，最大长度为1。
     */
    "Capabilities"?: string[];
}
