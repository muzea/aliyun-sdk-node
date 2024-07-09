import { AddZoneRequest } from "./AddZone/req";
import { AddZoneResponse } from "./AddZone/res";
import { AddZoneRecordRequest } from "./AddZoneRecord/req";
import { AddZoneRecordResponse } from "./AddZoneRecord/res";
import { BindZoneVpcRequest } from "./BindZoneVpc/req";
import { BindZoneVpcResponse } from "./BindZoneVpc/res";
import { CheckZoneNameRequest } from "./CheckZoneName/req";
import { CheckZoneNameResponse } from "./CheckZoneName/res";
import { DeleteZoneRequest } from "./DeleteZone/req";
import { DeleteZoneResponse } from "./DeleteZone/res";
import { DeleteZoneRecordRequest } from "./DeleteZoneRecord/req";
import { DeleteZoneRecordResponse } from "./DeleteZoneRecord/res";
import { DescribeChangeLogsRequest } from "./DescribeChangeLogs/req";
import { DescribeChangeLogsResponse } from "./DescribeChangeLogs/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeRequestGraphRequest } from "./DescribeRequestGraph/req";
import { DescribeRequestGraphResponse } from "./DescribeRequestGraph/res";
import { DescribeStatisticSummaryRequest } from "./DescribeStatisticSummary/req";
import { DescribeStatisticSummaryResponse } from "./DescribeStatisticSummary/res";
import { DescribeZoneInfoRequest } from "./DescribeZoneInfo/req";
import { DescribeZoneInfoResponse } from "./DescribeZoneInfo/res";
import { DescribeZoneRecordsRequest } from "./DescribeZoneRecords/req";
import { DescribeZoneRecordsResponse } from "./DescribeZoneRecords/res";
import { DescribeZoneVpcTreeRequest } from "./DescribeZoneVpcTree/req";
import { DescribeZoneVpcTreeResponse } from "./DescribeZoneVpcTree/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { SetProxyPatternRequest } from "./SetProxyPattern/req";
import { SetProxyPatternResponse } from "./SetProxyPattern/res";
import { SetZoneRecordStatusRequest } from "./SetZoneRecordStatus/req";
import { SetZoneRecordStatusResponse } from "./SetZoneRecordStatus/res";
import { UpdateRecordRemarkRequest } from "./UpdateRecordRemark/req";
import { UpdateRecordRemarkResponse } from "./UpdateRecordRemark/res";
import { UpdateZoneRecordRequest } from "./UpdateZoneRecord/req";
import { UpdateZoneRecordResponse } from "./UpdateZoneRecord/res";
import { UpdateZoneRemarkRequest } from "./UpdateZoneRemark/req";
import { UpdateZoneRemarkResponse } from "./UpdateZoneRemark/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { AddUserVpcAuthorizationRequest } from "./AddUserVpcAuthorization/req";
import { AddUserVpcAuthorizationResponse } from "./AddUserVpcAuthorization/res";
import { AddResolverEndpointRequest } from "./AddResolverEndpoint/req";
import { AddResolverEndpointResponse } from "./AddResolverEndpoint/res";
import { AddResolverRuleRequest } from "./AddResolverRule/req";
import { AddResolverRuleResponse } from "./AddResolverRule/res";
import { BindResolverRuleVpcRequest } from "./BindResolverRuleVpc/req";
import { BindResolverRuleVpcResponse } from "./BindResolverRuleVpc/res";
import { DeleteResolverEndpointRequest } from "./DeleteResolverEndpoint/req";
import { DeleteResolverEndpointResponse } from "./DeleteResolverEndpoint/res";
import { DeleteResolverRuleRequest } from "./DeleteResolverRule/req";
import { DeleteResolverRuleResponse } from "./DeleteResolverRule/res";
import { DeleteUserVpcAuthorizationRequest } from "./DeleteUserVpcAuthorization/req";
import { DeleteUserVpcAuthorizationResponse } from "./DeleteUserVpcAuthorization/res";
import { DescribeResolverAvailableZonesRequest } from "./DescribeResolverAvailableZones/req";
import { DescribeResolverAvailableZonesResponse } from "./DescribeResolverAvailableZones/res";
import { DescribeResolverEndpointRequest } from "./DescribeResolverEndpoint/req";
import { DescribeResolverEndpointResponse } from "./DescribeResolverEndpoint/res";
import { DescribeResolverEndpointsRequest } from "./DescribeResolverEndpoints/req";
import { DescribeResolverEndpointsResponse } from "./DescribeResolverEndpoints/res";
import { DescribeResolverRuleRequest } from "./DescribeResolverRule/req";
import { DescribeResolverRuleResponse } from "./DescribeResolverRule/res";
import { DescribeResolverRulesRequest } from "./DescribeResolverRules/req";
import { DescribeResolverRulesResponse } from "./DescribeResolverRules/res";
import { DescribeSyncEcsHostTaskRequest } from "./DescribeSyncEcsHostTask/req";
import { DescribeSyncEcsHostTaskResponse } from "./DescribeSyncEcsHostTask/res";
import { DescribeUserVpcAuthorizationsRequest } from "./DescribeUserVpcAuthorizations/req";
import { DescribeUserVpcAuthorizationsResponse } from "./DescribeUserVpcAuthorizations/res";
import { UpdateResolverEndpointRequest } from "./UpdateResolverEndpoint/req";
import { UpdateResolverEndpointResponse } from "./UpdateResolverEndpoint/res";
import { UpdateResolverRuleRequest } from "./UpdateResolverRule/req";
import { UpdateResolverRuleResponse } from "./UpdateResolverRule/res";
import { UpdateSyncEcsHostTaskRequest } from "./UpdateSyncEcsHostTask/req";
import { UpdateSyncEcsHostTaskResponse } from "./UpdateSyncEcsHostTask/res";

interface PVTZ {
    /**
     * 创建private zone。
     */
    AddZone(query: AddZoneRequest): Promise<AddZoneResponse>;
    /**
     * 添加prviate zone的解析记录。
     */
    AddZoneRecord(query: AddZoneRecordRequest): Promise<AddZoneRecordResponse>;
    /**
     * 绑定或者解绑zone与VPC列表两者之间的关系。
     */
    BindZoneVpc(query: BindZoneVpcRequest): Promise<BindZoneVpcResponse>;
    /**
     * 调用CheckZoneName根据规则校验zone是否可添加。
     */
    CheckZoneName(query: CheckZoneNameRequest): Promise<CheckZoneNameResponse>;
    /**
     * 删除private zone。
     */
    DeleteZone(query: DeleteZoneRequest): Promise<DeleteZoneResponse>;
    /**
     * 删除prviate zone的解析记录。
     */
    DeleteZoneRecord(query: DeleteZoneRecordRequest): Promise<DeleteZoneRecordResponse>;
    /**
     * 获取操作日志。
     */
    DescribeChangeLogs(query: DescribeChangeLogsRequest): Promise<DescribeChangeLogsResponse>;
    /**
     * 获取可用地域列表供用户选择。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用DescribeRequestGraph获取请求量详情。
     */
    DescribeRequestGraph(query: DescribeRequestGraphRequest): Promise<DescribeRequestGraphResponse>;
    /**
     * 获取昨日请求量概要。
     */
    DescribeStatisticSummary(query: DescribeStatisticSummaryRequest): Promise<DescribeStatisticSummaryResponse>;
    /**
     * 获取指定zone的详细信息。
     */
    DescribeZoneInfo(query: DescribeZoneInfoRequest): Promise<DescribeZoneInfoResponse>;
    /**
     * 查询prviate zone的解析记录列表。
     */
    DescribeZoneRecords(query: DescribeZoneRecordsRequest): Promise<DescribeZoneRecordsResponse>;
    /**
     * 获取 Zone 列表及其绑定的 VPC 列表。
     */
    DescribeZoneVpcTree(query: DescribeZoneVpcTreeRequest): Promise<DescribeZoneVpcTreeResponse>;
    /**
     * 查询用户的Zone列表。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 更换资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 设置递归解析代理。
     */
    SetProxyPattern(query: SetProxyPatternRequest): Promise<SetProxyPatternResponse>;
    /**
     * 设置prviate zone的解析记录状态。
     */
    SetZoneRecordStatus(query: SetZoneRecordStatusRequest): Promise<SetZoneRecordStatusResponse>;
    /**
     * 对于已添加的 private zone 的解析记录，修改其备注信息。
     */
    UpdateRecordRemark(query: UpdateRecordRemarkRequest): Promise<UpdateRecordRemarkResponse>;
    /**
     * 修改prviate zone的解析记录。
     */
    UpdateZoneRecord(query: UpdateZoneRecordRequest): Promise<UpdateZoneRecordResponse>;
    /**
     * 修改zone的备注信息。
     */
    UpdateZoneRemark(query: UpdateZoneRemarkRequest): Promise<UpdateZoneRemarkResponse>;
    /**
     * 调用DescribeTags查询已有的标签列表。
     */
    DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
     * 调用ListTagResources查询资源标签关系列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用TagResources标记资源。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用UntagResources取消标记资源。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 添加跨账号VPC授权。
     */
    AddUserVpcAuthorization(query: AddUserVpcAuthorizationRequest): Promise<AddUserVpcAuthorizationResponse>;
    /**
     * 调用AddResolverEndpoint新增终端节点。
     */
    AddResolverEndpoint(query: AddResolverEndpointRequest): Promise<AddResolverEndpointResponse>;
    /**
     * 调用AddResolverRule新增转发规则。
     */
    AddResolverRule(query: AddResolverRuleRequest): Promise<AddResolverRuleResponse>;
    /**
     * 进行转发规则关联VPC。
     */
    BindResolverRuleVpc(query: BindResolverRuleVpcRequest): Promise<BindResolverRuleVpcResponse>;
    /**
     * 调用DeleteResolverEndpoint删除终端节点。
     */
    DeleteResolverEndpoint(query: DeleteResolverEndpointRequest): Promise<DeleteResolverEndpointResponse>;
    /**
     * 调用DeleteResolverRule删除转发规则。
     */
    DeleteResolverRule(query: DeleteResolverRuleRequest): Promise<DeleteResolverRuleResponse>;
    /**
     * 删除跨账号授权。
     */
    DeleteUserVpcAuthorization(query: DeleteUserVpcAuthorizationRequest): Promise<DeleteUserVpcAuthorizationResponse>;
    /**
     * 调用DescribeResolverAvailableZones获取可用区域列表。
     */
    DescribeResolverAvailableZones(query: DescribeResolverAvailableZonesRequest): Promise<DescribeResolverAvailableZonesResponse>;
    /**
     * 调用DescribeResolverEndpoint获取终端节点详情。
     */
    DescribeResolverEndpoint(query: DescribeResolverEndpointRequest): Promise<DescribeResolverEndpointResponse>;
    /**
     * 调用DescribeResolverEndpoints获取终端节点列表。
     */
    DescribeResolverEndpoints(query: DescribeResolverEndpointsRequest): Promise<DescribeResolverEndpointsResponse>;
    /**
     * 获取转发规则详情。
     */
    DescribeResolverRule(query: DescribeResolverRuleRequest): Promise<DescribeResolverRuleResponse>;
    /**
     * 获取转发规则列表。
     */
    DescribeResolverRules(query: DescribeResolverRulesRequest): Promise<DescribeResolverRulesResponse>;
    /**
     * 通过获取主机名同步任务详情。
     */
    DescribeSyncEcsHostTask(query: DescribeSyncEcsHostTaskRequest): Promise<DescribeSyncEcsHostTaskResponse>;
    /**
     * 调用DescribeUserVpcAuthorizations获取跨账号授权列表。
     */
    DescribeUserVpcAuthorizations(query: DescribeUserVpcAuthorizationsRequest): Promise<DescribeUserVpcAuthorizationsResponse>;
    /**
     * 调用UpdateResolverEndpoint修改终端节点。
     */
    UpdateResolverEndpoint(query: UpdateResolverEndpointRequest): Promise<UpdateResolverEndpointResponse>;
    /**
     * 调用UpdateResolverRule修改转发规则。
     */
    UpdateResolverRule(query: UpdateResolverRuleRequest): Promise<UpdateResolverRuleResponse>;
    /**
     * 通过进行新增和更新主机名同步任务。
     */
    UpdateSyncEcsHostTask(query: UpdateSyncEcsHostTaskRequest): Promise<UpdateSyncEcsHostTaskResponse>;
}
export default PVTZ;
