export interface ListPermissionApplyOrdersRequest {
    /**
     * 申请单的状态。取值如下：
     * - 1：待审批。
     * - 2：审批通过，授权成功。
     * - 3：审批通过，授权失败。
     * - 4：审批拒绝。
     * @example `1`
     */
    "FlowStatus"?: number;
    /**
     * 申请单所属的工作空间ID，不输入则返回所有工作空间的申请单。您可以进入DataWorks工作空间配置页面，查询工作空间ID。
     * @example `12345`
     */
    "WorkspaceId"?: number;
    /**
     * 申请单类型。目前仅支持取值为1，表示对象ACL权限申请。
     * @example `1`
     */
    "OrderType": number;
    /**
     * 申请单所属的MaxCompute项目名称，不输入则返回所有MaxCompute项目的申请单。
     * @example `aMaxComputeProject`
     */
    "MaxComputeProjectName"?: string;
    /**
     * 申请单包含的表名称，不输入则返回所有表的申请单。
     * @example `aTableName`
     */
    "TableName"?: string;
    /**
     * 查询目标起始时间发起的申请单，配置为一个unix时间戳。不输入则表示查询所有的申请单。
     * @example `1616200471885`
     */
    "StartTime"?: number;
    /**
     * 查询目标截至时间的申请单，配置为一个unix时间戳。不输入则表示查询截至当前时间的申请单。
     * @example `1617200471885`
     */
    "EndTime"?: number;
    /**
     * 申请单的计算引擎类型。目前仅支持取值为odps，表示仅支持申请MaxCompute计算引擎的权限。
     * @example `odps`
     */
    "EngineType": string;
    /**
     * 分页查询页码。大于等于1的正整数，默认为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 申请单的查询类型。取值如下：
     * - 0：我提交的申请单。
     * - 1：由我审批的申请单。
     * @example `1`
     */
    "QueryType": number;
}
