export interface DescribeGroupedInstancesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `52A3AEE6-114A-499D-8990-4BA9B27FE0AA`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `5`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的资产信息的数量。  默认值为**20**，表示每页显示20条资产信息。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的资产信息的总数量。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页面显示的资产的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 查询到的资产信息的列表。
     */
    Instances: {
        /**
         * 存在高危漏洞的资产的数量。
         * @example `11`
         */
        AsapVulInstanceCount: number;
        /**
         * 未受到云安全中心防护的资产的数量。
         * @example `32`
         */
        UnProtectedInstanceCount: string;
        /**
         * 服务器分组的名称。
         * @example `testA`
         */
        FieldAliasName: string;
        /**
         * 查询时指定的资产类型下所有资产的数量。
         * > 如果未设置请求参数**MachineTypes**，则该参数返回值为您所有类型的资产的总数量。
         * @example `205`
         */
        InstanceCount: string;
        /**
         * 存在安全风险的资产数量。
         * @example `172`
         */
        RiskInstanceCount: string;
        /**
         * 服务器分组类型。取值：
         * - **0**：默认分组
         * - **1**：其他分组
         * @example `1`
         */
        GroupFlag: number;
        /**
         * 符合售卖条件的的资产数量。
         * @example `205`
         */
        AuthVersionCheckCount: number;
        /**
         * 资产系统类型。取值：
         * - **windows**
         * - **linux**
         * ><notice>该字段仅在**Lang**为**zh**时返回。></notice>
         * @example `windows`
         */
        Os: string;
        /**
         * 查询时指定的资产类型下所有资产的计算核数。
         * > 如果未设置请求参数**MachineTypes**，则该参数返回值为您所有类型的资产的计算核数。
         * @example `610`
         */
        InstanceCoreCount: number;
    }[];
}
