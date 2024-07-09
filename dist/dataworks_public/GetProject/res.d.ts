export interface GetProjectResponse {
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    RequestId: string;
    /**
     * 请求是否成功，取值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 工作空间的详细信息。
     */
    Data: {
        /**
         * 工作空间的状态，取值如下：
         * - **0**：AVAILABLE，工作空间运行正常。
         * - **1**：DELETED，工作空间已被删除。
         * - **2**：INITIALIZING，初始化工作空间。
         * - **3**：INIT_FAILED，工作空间初始化失败。
         * - **4**：FORBIDDEN，手动禁用工作空间。
         * - **5**：DELETING，正在删除工作空间。
         * - **6**：DEL_FAILED，工作空间删除失败。
         * - **7**：FROZEN，工作空间欠费冻结。
         * - **8**：UPDATING，更新工作空间（为工作空间添加并初始化计算引擎）。
         * - **9**：UPDATE_FAILED，更新工作空间（为工作空间添加并初始化计算引擎）失败。
         * @example `0`
         */
        Status: number;
        /**
         * 该参数已废弃。
         * @example `1`
         */
        MaxFlowNode: number;
        /**
         * 工作空间的ID。
         * @example `466230`
         */
        ProjectId: number;
        /**
         * 是否允许下载ide上查询的结果，取值如下：
         * - **1**：允许下载。
         * - **0**：不允许下载。
         * @example `1`
         */
        IsAllowDownload: number;
        /**
         * 工作空间的模式，取值如下：
         * - **2**：表示简单工作空间模式。
         * - **3**：表示标准工作空间模式。
         * @example `2`
         */
        ProjectMode: number;
        /**
         * 修改工作空间的时间，示例格式为`Dec 3, 2019 9:12:20 PM`。
         * @example `Dec 3, 2019 9:12:20 PM`
         */
        GmtModified: string;
        /**
         * 该参数已废弃。
         * @example ` 1`
         */
        ProdStorageQuota: string;
        /**
         * 工作空间的详细描述信息。
         * @example `test_describe`
         */
        ProjectDescription: string;
        /**
         * 该参数已废弃。
         * @example `4`
         */
        DevelopmentType: number;
        /**
         * MaxCompute表的可见性权限，取值如下：
         * - **0**：租户内用户不可见MaxCompute表。
         * - **1**：租户内用户可见MaxCompute表。
         * @example `1`
         */
        TablePrivacyMode: number;
        /**
         * 购买MaxCompute独享资源组时，默认分配的资源组的标识。
         * @example `group_280749521****`
         */
        DefaultDiResourceGroupIdentifier: string;
        /**
         * 默认出错自动重跑的次数。
         * @example `3`
         */
        SchedulerMaxRetryTimes: number;
        /**
         * 工作空间是否开启了保护模式，取值如下：
         * - **1**：开启保护模式。
         * - **0**：未开启保护模式。
         * @example `1`
         */
        ProtectedMode: number;
        /**
         * 默认出错自动重跑的时间间隔，单位为ms。取值最大为30分钟，注意单位转换。
         * @example `120000`
         */
        SchedulerRetryInterval: number;
        /**
         * 该参数已废弃。
         * @example `0`
         */
        Appkey: string;
        /**
         * 该参数已废弃。
         * @example `0`
         */
        DevStorageQuota: string;
        /**
         * 工作空间的类型。
         * - **private**：私有区
         * - **swap**：交换区。
         * @example `private`
         */
        ResidentArea: string;
        /**
         * 是否为默认工作空间，取值如下：
         * - **1**：是。
         * - **0**：否。
         * @example `1`
         */
        IsDefault: number;
        /**
         * 该参数已废弃。
         * @example `0`
         */
        Destination: number;
        /**
         * 工作空间的显示名称。
         * @example `test_project`
         */
        ProjectName: string;
        /**
         * 工作空间的名称。
         * @example `test_project`
         */
        ProjectIdentifier: string;
        /**
         * 是否禁用开发角色，取值如下：
         *  - **false**：默认值，开启开发角色。
         *  -  **true**：禁用开发角色。
         * @example `true`
         */
        DisableDevelopment: boolean;
        /**
         * 工作空间所有者的阿里云ID。
         * @example `18229311****`
         */
        ProjectOwnerBaseId: string;
        /**
         * 该参数已废弃。
         * @example `false`
         */
        BaseProject: boolean;
        /**
         * 访问MaxCompute引擎是否使用代理账号。
         * @example `true`
         */
        UseProxyOdpsAccount: boolean;
        /**
         * 创建工作空间时间，示例格式`Dec 3, 2019 9:12:20 PM`。
         * @example `Oct 10, 2019 3:42:53 PM`
         */
        GmtCreate: string;
        /**
         * 租户ID。
         * @example `280749521`
         */
        TenantId: number;
        /**
         * 工作空间包含的环境信息。
         */
        EnvTypes: string[];
        /**
         * 资源组ID。
         * @example `rg-acfmzbn7****`
         */
        ResourceManagerResourceGroupId: string;
        /**
         * 工作空间绑定的标签信息列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `key`
             */
            Key: string;
            /**
             * 标签值。
             * @example `value`
             */
            Value: string;
        }[];
    };
}
