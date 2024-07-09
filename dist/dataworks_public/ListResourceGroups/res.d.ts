export interface ListResourceGroupsResponse {
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 资源组列表。
     */
    Data: {
        /**
         * 资源组的状态。取值如下：
         * - NORMAL(0)，表示资源组状态正常，处于运行中或服务中。
         * - STOP(1)，表示资源组已到期，处于冻结状态。
         * - DELETED(2)，表示资源组已被释放或销毁。
         * - CREATING(3)，表示资源组正在创建或启动。
         * - CREATE_FAILED(4)，表示资源组创建或启动失败。
         * - UPDATING(5)，表示资源组正在扩容或升级。
         * - UPDATE_FAILED(6)，表示资源组扩容或升级失败。
         * - DELETING(7)，表示资源组正在被释放或销毁。
         * - DELETE_FAILED(8)，表示资源组释放或销毁失败。
         * - TIMEOUT(9)，表示对资源组执行的操作超时。所有变更操作均可能会超时，该枚举值暂时仅提供给数据服务使用。
         * @example `0`
         */
        Status: number;
        /**
         * 最近一次更新资源组的时间。
         * @example `Jul 9, 2018 2:43:37 PM`
         */
        UpdateTime: string;
        /**
         * 是否为默认资源组。取值如下：
         * - true：是默认资源组。
         * - false：非默认资源组。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 集群的名称。该参数仅对于MaxCompute和PAI资源组类型生效。
         * @example `AY18G`
         */
        Cluster: string;
        /**
         * 是否使用Kp（关键人）访问。取值如下：
         * - true：表示MaxCompute引擎使用阿里云账号UID作为访问账户的显示名称。
         * - false：表示MaxCompute引擎使用阿里云账号名称作为访问账户的显示名称。
         * 其余类型无意义。该参数仅对MaxCompute引擎生效。
         * @example `false`
         */
        EnableKp: boolean;
        /**
         * 资源组的类型。取值如下：
         * - 0（DataWorks）
         * - 2（MaxCompute）
         * - 3（PAI）
         * - 4（数据集成）
         * - 7（调度）
         * - 9 （dataService）
         * @example `3`
         */
        ResourceGroupType: string;
        /**
         * 创建集群的时间。格式示例为Jul 9, 2018 2:43:37 PM。
         * @example `Jul 9, 2018 2:43:37 PM`
         */
        CreateTime: string;
        /**
         * 资源组的标识。
         * @example `e1815577-2f4e-4c5e-b29****`
         */
        Identifier: string;
        /**
         * 资源组的类型。取值如下：
         * - ISOLATE：表示预付费的独享资源组。
         * - SHARE：表示后付费的公共资源组。
         * - DEVELOP：表示开发者版本。
         * @example `SHARE`
         */
        Mode: string;
        /**
         * 资源组的类别。取值如下：
         * - default，公共资源组。
         * - single，独享资源组。
         * @example `default`
         */
        BizExtKey: string;
        /**
         * 序列字段。用于将已创建的资源组按照创建的序号从小到大升序排序。
         * @example `300`
         */
        Sequence: number;
        /**
         * 资源组的详细信息。{}中显示的内容为资源组的详细信息。
         * @example `{}`
         */
        Specs: any;
        /**
         * 资源组的名称。
         * @example `abc`
         */
        Name: string;
        /**
         * 资源组的ID。
         * @example `1234567`
         */
        Id: number;
        /**
         * 租户ID。
         * @example `1234567`
         */
        TenantId: number;
        /**
         * 资源组ID。
         * @example `rg-acfmzbn7pti3zfa`
         */
        ResourceManagerResourceGroupId: string;
        /**
         * 标签列表。
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
    }[];
}
