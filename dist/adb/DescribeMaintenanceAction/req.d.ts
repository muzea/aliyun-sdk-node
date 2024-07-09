export interface DescribeMaintenanceActionRequest {
    /**
     * 地域。取值如下：
     * * 运维事件所在地域的地域ID，如`cn-hangzhou`。您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * * 您也可以输入`all`查看当前账号下所有地域下的所有运维事件，当`Region`设置为`all`时，`TaskType`也必须设置为`all`。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 运维事件的类型，取值如下：
     * * **rds_apsaradb_upgrade**：数据库软件升级。
     * * **all**：查看当前账号下所有地域下的所有运维事件，当`Region`设置为`all`时，`TaskType`也必须设置为`all`。
     * @example `rds_apsaradb_upgrade`
     */
    "TaskType": string;
    /**
     * 指定返回待处理或历史运维事件的详情，取值如下：
     * * **0**：返回待处理运维事件的详情。
     * * **1**：返回历史运维事件的详情。
     * 若该参数留空，默认返回待处理运维事件的详情。
     * @example `1`
     */
    "IsHistory"?: number;
    /**
     * 每页记录数，取值为**30**（默认值）、**50**或**100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 运维事件所在地域的地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
