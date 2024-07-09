export interface CreateFlowRequest {
    /**
     * 地域ID。您可以调用DescribeRegions查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 项目ID。您可以调用ListFlowProject查看项目的ID。
     * @example `FP-ED2F3E844FE3****`
     */
    "ProjectId": string;
    /**
     * 目录名称。您可以调用ListFlowProject查看
     * @example `myFlow`
     */
    "Name": string;
    /**
     * 项目描述。
     * @example `这是一个项目描述`
     */
    "Description": string;
    /**
     * 开始调度时间，长整型时间戳.。例如：System.currentTimeMillis()。
     * - 必须小于EndSchedule。
     * - 当CronExpr不为空时，此项必填。
     * @example `1538017814000`
     */
    "StartSchedule"?: number;
    /**
     * 调度失效时间，长整型时间戳，例如System.currentTimeMillis()。
     * @example `1538018814000`
     */
    "EndSchedule"?: number;
    /**
     * 时间周期调度的cron表达式。
     * @example `0 0 0-23/1 * * ?`
     */
    "CronExpression"?: string;
    /**
     * 是否通过集群模板创建集群，true表示通过集群模板创建集群，ClusterId应设置为集群模板 ID(CT-xxx)，否则为已有集群 ID（C-xxx）。
     * @example `false`
     */
    "CreateCluster"?: boolean;
    /**
     * 集群ID。您可以调用ListClusters查看集群的ID。
     * @example `C-A23BD131A862****`
     */
    "ClusterId"?: string;
    /**
     * 节点实例运行所在主机的名称。您可以调用ListFlow或登录主机使用hostname命令查看。
     * @example `emr-header-1.cluster-123456`
     */
    "HostName"?: string;
    /**
     * 保留字段。
     * @example `无`
     */
    "Namespace"?: string;
    /**
     * APP
     * @example `无`
     */
    "Application"?: string;
    /**
     * 报警通知配置，eventId目前支持以下告警：
     * - EMR-210401001（工作流失败报警）。
     * - EMR-110401002（工作流成功通知）。
     * - EMR-110401015（工作流节点失败报警）。
     * @example `{"items":[{"enable":true,"eventId":"EMR-210401001","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401015","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401002","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]}]}`
     */
    "AlertConf"?: string;
    /**
     * 报警用户组信息。
     * @example `ADG-0a00d00abb7743ff9f812f1a997f3d87`
     */
    "AlertUserGroupBizId"?: string;
    /**
     * 报警钉钉群信息。
     * @example `已过期`
     */
    "AlertDingDingGroupBizId"?: string;
    /**
     * 依赖的上游工作流列表，以逗号分隔。您可以调用ListFlowInstance查看工作流ID。
     * @example `F-62ECFC6E1BF6EAD2,F-1E6528634E67B615,F-7E0A84332E9D9A89`
     */
    "ParentFlowList"?: string;
    /**
     * F-62ECFC6E1BF6EAD2,F-1E6528634E67B615,F-7E0A84332E9D9A89
     * @example `F-62ECFC6E1BF6EAD2,F-1E6528634E67B615,F-7E0A84332E9D9A89`
     */
    "ParentCategory"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
