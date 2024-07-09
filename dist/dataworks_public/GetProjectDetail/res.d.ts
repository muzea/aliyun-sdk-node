export interface GetProjectDetailResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 是否成功查询工作空间的信息。
     * @example `true`
     */
    Success: boolean;
    /**
     * 工作空间的描述信息。
     */
    Data: {
        /**
         * 工作空间的状态。
         * @example `0`
         */
        Status: number;
        /**
         * 工作空间的类型：private为私有区，swap为交换区。
         * @example `private`
         */
        ResidentArea: string;
        /**
         * 工作空间的ID。
         * @example `27`
         */
        ProjectId: number;
        /**
         * 工作空间的标识。
         * @example `abc`
         */
        ProjectIdentifier: string;
        /**
         * 工作空间的显示名称。
         * @example `abc`
         */
        ProjectName: string;
        /**
         * 是否允许下载。
         * @example `1`
         */
        IsAllowDownload: number;
        /**
         * 工作空间模式：简单工作空间模式为2，标准工作空间模式为3。
         * @example `1`
         */
        ProjectMode: number;
        /**
         * 工作空间的描述。
         * @example `abc`
         */
        ProjectDescription: string;
        /**
         * 修改工作空间的时间。
         * @example `Dec 3, 2019 9:12:20 PM`
         */
        GmtModified: string;
        /**
         * 工作空间所有者的阿里云ID。
         * @example `18229311****`
         */
        ProjectOwnerBaseId: string;
        /**
         * 项目开发类型，目前均为4。
         * @example `4`
         */
        DevelopmentType: number;
        /**
         * 默认节点的数据集成资源组标识。
         * @example `group_280749521****`
         */
        DefaultDiResourceGroupIdentifier: string;
        /**
         * 创建工作空间的时间。
         * @example `Oct 10, 2019 3:42:53 PM`
         */
        GmtCreate: string;
        /**
         * 默认出错自动重跑的次数。
         * @example `3`
         */
        SchedulerMaxRetryTimes: number;
        /**
         * 工作空间是否开启了保护模式。
         * @example `1`
         */
        ProtectedMode: number;
        /**
         * 租户ID。
         * @example `280749521950784`
         */
        TenantId: number;
        /**
         * 默认出错自动重跑的时间间隔。
         * @example `120000`
         */
        SchedulerRetryInterval: number;
        /**
         * 工作空间包含的环境：简单模式只有生产环境（PROD），标准模式包含开发环境（DEV）和生产环境（PROD）。
         */
        EnvTypes: string[];
        /**
         * 资源组ID。
         * @example `rg-acfmzbn7pti3zfa`
         */
        ResourceManagerResourceGroupId: string;
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `Env`
             */
            Key: string;
            /**
             * 标签值。
             * @example `Test`
             */
            Value: string;
        }[];
        /**
         * 是否禁用开发角色，取值如下：
         *  - **false**：默认值，开启开发角色。
         *  -  **true**：禁用开发角色。
         * @example `true`
         */
        DisableDevelopment: boolean;
        /**
         * 访问MaxCompute引擎是否使用代理账号。
         * @example `true`
         */
        UseProxyOdpsAccount: boolean;
        /**
         * MaxCompute表的可见性权限，取值如下：
         * - 0，租户内用户不可见MaxCompute表。
         * - 1，租户内用户可见MaxCompute表。
         * @example `1`
         */
        TablePrivacyMode: number;
        /**
         * 是否为默认工作空间，取值如下：
         * - 1，是。
         * - 0，否。
         * @example `1`
         */
        IsDefault: number;
    };
}
