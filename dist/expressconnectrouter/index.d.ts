import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeExpressConnectRouterAllowedPrefixHistoryRequest } from "./DescribeExpressConnectRouterAllowedPrefixHistory/req";
import { DescribeExpressConnectRouterAllowedPrefixHistoryResponse } from "./DescribeExpressConnectRouterAllowedPrefixHistory/res";
import { DescribeExpressConnectRouterInterRegionTransitModeRequest } from "./DescribeExpressConnectRouterInterRegionTransitMode/req";
import { DescribeExpressConnectRouterInterRegionTransitModeResponse } from "./DescribeExpressConnectRouterInterRegionTransitMode/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { DescribeExpressConnectRouterAssociationRequest } from "./DescribeExpressConnectRouterAssociation/req";
import { DescribeExpressConnectRouterAssociationResponse } from "./DescribeExpressConnectRouterAssociation/res";
import { DescribeExpressConnectRouterRegionRequest } from "./DescribeExpressConnectRouterRegion/req";
import { DescribeExpressConnectRouterRegionResponse } from "./DescribeExpressConnectRouterRegion/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { DescribeExpressConnectRouterChildInstanceRequest } from "./DescribeExpressConnectRouterChildInstance/req";
import { DescribeExpressConnectRouterChildInstanceResponse } from "./DescribeExpressConnectRouterChildInstance/res";
import { DescribeExpressConnectRouterRequest } from "./DescribeExpressConnectRouter/req";
import { DescribeExpressConnectRouterResponse } from "./DescribeExpressConnectRouter/res";
import { RevokeInstanceFromExpressConnectRouterRequest } from "./RevokeInstanceFromExpressConnectRouter/req";
import { RevokeInstanceFromExpressConnectRouterResponse } from "./RevokeInstanceFromExpressConnectRouter/res";
import { DescribeDisabledExpressConnectRouterRouteEntriesRequest } from "./DescribeDisabledExpressConnectRouterRouteEntries/req";
import { DescribeDisabledExpressConnectRouterRouteEntriesResponse } from "./DescribeDisabledExpressConnectRouterRouteEntries/res";
import { SynchronizeExpressConnectRouterInterRegionBandwidthRequest } from "./SynchronizeExpressConnectRouterInterRegionBandwidth/req";
import { SynchronizeExpressConnectRouterInterRegionBandwidthResponse } from "./SynchronizeExpressConnectRouterInterRegionBandwidth/res";
import { DescribeInstanceGrantedToExpressConnectRouterRequest } from "./DescribeInstanceGrantedToExpressConnectRouter/req";
import { DescribeInstanceGrantedToExpressConnectRouterResponse } from "./DescribeInstanceGrantedToExpressConnectRouter/res";
import { ModifyExpressConnectRouterInterRegionTransitModeRequest } from "./ModifyExpressConnectRouterInterRegionTransitMode/req";
import { ModifyExpressConnectRouterInterRegionTransitModeResponse } from "./ModifyExpressConnectRouterInterRegionTransitMode/res";
import { DescribeExpressConnectRouterRouteEntriesRequest } from "./DescribeExpressConnectRouterRouteEntries/req";
import { DescribeExpressConnectRouterRouteEntriesResponse } from "./DescribeExpressConnectRouterRouteEntries/res";
import { CreateExpressConnectRouterRequest } from "./CreateExpressConnectRouter/req";
import { CreateExpressConnectRouterResponse } from "./CreateExpressConnectRouter/res";
import { DisableExpressConnectRouterRouteEntriesRequest } from "./DisableExpressConnectRouterRouteEntries/req";
import { DisableExpressConnectRouterRouteEntriesResponse } from "./DisableExpressConnectRouterRouteEntries/res";
import { CreateExpressConnectRouterAssociationRequest } from "./CreateExpressConnectRouterAssociation/req";
import { CreateExpressConnectRouterAssociationResponse } from "./CreateExpressConnectRouterAssociation/res";
import { DeleteExpressConnectRouterRequest } from "./DeleteExpressConnectRouter/req";
import { DeleteExpressConnectRouterResponse } from "./DeleteExpressConnectRouter/res";
import { ModifyExpressConnectRouterRequest } from "./ModifyExpressConnectRouter/req";
import { ModifyExpressConnectRouterResponse } from "./ModifyExpressConnectRouter/res";
import { ForceDeleteExpressConnectRouterRequest } from "./ForceDeleteExpressConnectRouter/req";
import { ForceDeleteExpressConnectRouterResponse } from "./ForceDeleteExpressConnectRouter/res";
import { EnableExpressConnectRouterRouteEntriesRequest } from "./EnableExpressConnectRouterRouteEntries/req";
import { EnableExpressConnectRouterRouteEntriesResponse } from "./EnableExpressConnectRouterRouteEntries/res";
import { CheckAddRegionToExpressConnectRouterRequest } from "./CheckAddRegionToExpressConnectRouter/req";
import { CheckAddRegionToExpressConnectRouterResponse } from "./CheckAddRegionToExpressConnectRouter/res";
import { GrantInstanceToExpressConnectRouterRequest } from "./GrantInstanceToExpressConnectRouter/req";
import { GrantInstanceToExpressConnectRouterResponse } from "./GrantInstanceToExpressConnectRouter/res";
import { DetachExpressConnectRouterChildInstanceRequest } from "./DetachExpressConnectRouterChildInstance/req";
import { DetachExpressConnectRouterChildInstanceResponse } from "./DetachExpressConnectRouterChildInstance/res";
import { DeleteExpressConnectRouterAssociationRequest } from "./DeleteExpressConnectRouterAssociation/req";
import { DeleteExpressConnectRouterAssociationResponse } from "./DeleteExpressConnectRouterAssociation/res";
import { ModifyExpressConnectRouterAssociationAllowedPrefixRequest } from "./ModifyExpressConnectRouterAssociationAllowedPrefix/req";
import { ModifyExpressConnectRouterAssociationAllowedPrefixResponse } from "./ModifyExpressConnectRouterAssociationAllowedPrefix/res";
import { AttachExpressConnectRouterChildInstanceRequest } from "./AttachExpressConnectRouterChildInstance/req";
import { AttachExpressConnectRouterChildInstanceResponse } from "./AttachExpressConnectRouterChildInstance/res";
import { ListExpressConnectRouterSupportedRegionRequest } from "./ListExpressConnectRouterSupportedRegion/req";
import { ListExpressConnectRouterSupportedRegionResponse } from "./ListExpressConnectRouterSupportedRegion/res";

interface EXPRESSCONNECTROUTER {
    /**
     * 专线网关绑定标签。每次调用该 API 只能为一个专线网关绑定标签，可一次绑定多个标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 解绑专线网关的标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）前缀路由的历史记录。
     */
    DescribeExpressConnectRouterAllowedPrefixHistory(query: DescribeExpressConnectRouterAllowedPrefixHistoryRequest): Promise<DescribeExpressConnectRouterAllowedPrefixHistoryResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）的跨地域转发模式。
     */
    DescribeExpressConnectRouterInterRegionTransitMode(query: DescribeExpressConnectRouterInterRegionTransitModeRequest): Promise<DescribeExpressConnectRouterInterRegionTransitModeResponse>;
    /**
     * 修改专线网关所属的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）关联的专有网络（VPC）和转发路由器（TR）。
     */
    DescribeExpressConnectRouterAssociation(query: DescribeExpressConnectRouterAssociationRequest): Promise<DescribeExpressConnectRouterAssociationResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）相关资源的所在地域列表。
     */
    DescribeExpressConnectRouterRegion(query: DescribeExpressConnectRouterRegionRequest): Promise<DescribeExpressConnectRouterRegionResponse>;
    /**
     * 查询专线网关绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）加载的边界路由器（VBR）。
     */
    DescribeExpressConnectRouterChildInstance(query: DescribeExpressConnectRouterChildInstanceRequest): Promise<DescribeExpressConnectRouterChildInstanceResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）列表。
     */
    DescribeExpressConnectRouter(query: DescribeExpressConnectRouterRequest): Promise<DescribeExpressConnectRouterResponse>;
    /**
     * 撤销专有网络（VPC）或者边界路由器（VBR）对跨账号的专线网关ECR（Express Connect Router）的授权。
     */
    RevokeInstanceFromExpressConnectRouter(query: RevokeInstanceFromExpressConnectRouterRequest): Promise<RevokeInstanceFromExpressConnectRouterResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）禁用的路由条目。
     */
    DescribeDisabledExpressConnectRouterRouteEntries(query: DescribeDisabledExpressConnectRouterRouteEntriesRequest): Promise<DescribeDisabledExpressConnectRouterRouteEntriesResponse>;
    /**
     * 同步专线网关ECR（Express Connect Router）的各地域之间的转发带宽限制。
     */
    SynchronizeExpressConnectRouterInterRegionBandwidth(query: SynchronizeExpressConnectRouterInterRegionBandwidthRequest): Promise<SynchronizeExpressConnectRouterInterRegionBandwidthResponse>;
    /**
     * 查询授权给专线网关ECR（Express Connect Router）的网络实例。
     */
    DescribeInstanceGrantedToExpressConnectRouter(query: DescribeInstanceGrantedToExpressConnectRouterRequest): Promise<DescribeInstanceGrantedToExpressConnectRouterResponse>;
    /**
     * 修改专线网关ECR（Express Connect Router）的跨地域转发模式。
     */
    ModifyExpressConnectRouterInterRegionTransitMode(query: ModifyExpressConnectRouterInterRegionTransitModeRequest): Promise<ModifyExpressConnectRouterInterRegionTransitModeResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）路由条目。
     */
    DescribeExpressConnectRouterRouteEntries(query: DescribeExpressConnectRouterRouteEntriesRequest): Promise<DescribeExpressConnectRouterRouteEntriesResponse>;
    /**
     * 新建专线网关ECR（Express Connect Router）。
     */
    CreateExpressConnectRouter(query: CreateExpressConnectRouterRequest): Promise<CreateExpressConnectRouterResponse>;
    /**
     * 禁用专线网关ECR（Express Connect Router）路由项。
     */
    DisableExpressConnectRouterRouteEntries(query: DisableExpressConnectRouterRouteEntriesRequest): Promise<DisableExpressConnectRouterRouteEntriesResponse>;
    /**
     * 专线网关ECR（Express Connect Router）关联专有网络（VPC）或者转发路由器（TR）。
     */
    CreateExpressConnectRouterAssociation(query: CreateExpressConnectRouterAssociationRequest): Promise<CreateExpressConnectRouterAssociationResponse>;
    /**
     * 删除专线网关ECR（Express Connect Router）。
     */
    DeleteExpressConnectRouter(query: DeleteExpressConnectRouterRequest): Promise<DeleteExpressConnectRouterResponse>;
    /**
     * 修改专线网关ECR（Express Connect Router）的名称等属性。
     */
    ModifyExpressConnectRouter(query: ModifyExpressConnectRouterRequest): Promise<ModifyExpressConnectRouterResponse>;
    /**
     * 删除专线网关ECR（Express Connect Router），并解绑相关联的专有网络（VPC），转发路由器（TR）和边界路由器（VBR）。
     */
    ForceDeleteExpressConnectRouter(query: ForceDeleteExpressConnectRouterRequest): Promise<ForceDeleteExpressConnectRouterResponse>;
    /**
     * 启用专线网关ECR（Express Connect Router）路由条目。
     */
    EnableExpressConnectRouterRouteEntries(query: EnableExpressConnectRouterRouteEntriesRequest): Promise<EnableExpressConnectRouterRouteEntriesResponse>;
    /**
     * 检查指定的地域加入专线网关ECR（Express Connect Router）所需的云数据传输（CDT）服务。
     */
    CheckAddRegionToExpressConnectRouter(query: CheckAddRegionToExpressConnectRouterRequest): Promise<CheckAddRegionToExpressConnectRouterResponse>;
    /**
     * 将的专有网络（VPC）或者边界路由器（VBR）授权给跨账号的专线网关ECR（Express Connect Router）。
     */
    GrantInstanceToExpressConnectRouter(query: GrantInstanceToExpressConnectRouterRequest): Promise<GrantInstanceToExpressConnectRouterResponse>;
    /**
     * 从专线网关ECR（Express Connect Router）卸载边界路由器（VBR）。
     */
    DetachExpressConnectRouterChildInstance(query: DetachExpressConnectRouterChildInstanceRequest): Promise<DetachExpressConnectRouterChildInstanceResponse>;
    /**
     * 解除专线网关ECR（Express Connect Router）与专有网络（VPC）或者转发路由器的关联关系。
     */
    DeleteExpressConnectRouterAssociation(query: DeleteExpressConnectRouterAssociationRequest): Promise<DeleteExpressConnectRouterAssociationResponse>;
    /**
     * 修改专线网关ECR（Express Connect Router）绑定的专有网络（VPC）或者转发路由器（TR）的前缀路由。
     */
    ModifyExpressConnectRouterAssociationAllowedPrefix(query: ModifyExpressConnectRouterAssociationAllowedPrefixRequest): Promise<ModifyExpressConnectRouterAssociationAllowedPrefixResponse>;
    /**
     * 加载子实例（VBR）至ECR。
     */
    AttachExpressConnectRouterChildInstance(query: AttachExpressConnectRouterChildInstanceRequest): Promise<AttachExpressConnectRouterChildInstanceResponse>;
    /**
     * 查询专线网关ECR（Express Connect Router）开服地域列表。
     */
    ListExpressConnectRouterSupportedRegion(query: ListExpressConnectRouterSupportedRegionRequest): Promise<ListExpressConnectRouterSupportedRegionResponse>;
}
export default EXPRESSCONNECTROUTER;
