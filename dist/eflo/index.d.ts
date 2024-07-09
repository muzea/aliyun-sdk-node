import { DeleteSubnetRequest } from "./DeleteSubnet/req";
import { DeleteSubnetResponse } from "./DeleteSubnet/res";
import { CreateSubnetRequest } from "./CreateSubnet/req";
import { CreateSubnetResponse } from "./CreateSubnet/res";
import { ListSubnetsRequest } from "./ListSubnets/req";
import { ListSubnetsResponse } from "./ListSubnets/res";
import { GetVpdRequest } from "./GetVpd/req";
import { GetVpdResponse } from "./GetVpd/res";
import { CreateVpdRequest } from "./CreateVpd/req";
import { CreateVpdResponse } from "./CreateVpd/res";
import { GetSubnetRequest } from "./GetSubnet/req";
import { GetSubnetResponse } from "./GetSubnet/res";
import { DeleteVpdRequest } from "./DeleteVpd/req";
import { DeleteVpdResponse } from "./DeleteVpd/res";
import { UpdateSubnetRequest } from "./UpdateSubnet/req";
import { UpdateSubnetResponse } from "./UpdateSubnet/res";
import { UpdateVpdRequest } from "./UpdateVpd/req";
import { UpdateVpdResponse } from "./UpdateVpd/res";
import { GetVccRequest } from "./GetVcc/req";
import { GetVccResponse } from "./GetVcc/res";
import { InitializeVccRequest } from "./InitializeVcc/req";
import { InitializeVccResponse } from "./InitializeVcc/res";
import { ListVccsRequest } from "./ListVccs/req";
import { ListVccsResponse } from "./ListVccs/res";
import { CreateVccRequest } from "./CreateVcc/req";
import { CreateVccResponse } from "./CreateVcc/res";
import { ListVpdsRequest } from "./ListVpds/req";
import { ListVpdsResponse } from "./ListVpds/res";
import { UpdateVccRequest } from "./UpdateVcc/req";
import { UpdateVccResponse } from "./UpdateVcc/res";
import { GetNetworkInterfaceRequest } from "./GetNetworkInterface/req";
import { GetNetworkInterfaceResponse } from "./GetNetworkInterface/res";
import { ListLniPrivateIpAddressRequest } from "./ListLniPrivateIpAddress/req";
import { ListLniPrivateIpAddressResponse } from "./ListLniPrivateIpAddress/res";
import { UnAssignPrivateIpAddressRequest } from "./UnAssignPrivateIpAddress/req";
import { UnAssignPrivateIpAddressResponse } from "./UnAssignPrivateIpAddress/res";
import { GetLniPrivateIpAddressRequest } from "./GetLniPrivateIpAddress/req";
import { GetLniPrivateIpAddressResponse } from "./GetLniPrivateIpAddress/res";
import { AssignPrivateIpAddressRequest } from "./AssignPrivateIpAddress/req";
import { AssignPrivateIpAddressResponse } from "./AssignPrivateIpAddress/res";
import { ListNetworkInterfacesRequest } from "./ListNetworkInterfaces/req";
import { ListNetworkInterfacesResponse } from "./ListNetworkInterfaces/res";
import { DescribeSlrRequest } from "./DescribeSlr/req";
import { DescribeSlrResponse } from "./DescribeSlr/res";
import { DeleteErRequest } from "./DeleteEr/req";
import { DeleteErResponse } from "./DeleteEr/res";
import { ListErsRequest } from "./ListErs/req";
import { ListErsResponse } from "./ListErs/res";
import { UpdateErRequest } from "./UpdateEr/req";
import { UpdateErResponse } from "./UpdateEr/res";
import { GetErRequest } from "./GetEr/req";
import { GetErResponse } from "./GetEr/res";
import { CreateErRequest } from "./CreateEr/req";
import { CreateErResponse } from "./CreateEr/res";
import { GetVpdGrantRuleRequest } from "./GetVpdGrantRule/req";
import { GetVpdGrantRuleResponse } from "./GetVpdGrantRule/res";
import { CreateVpdGrantRuleRequest } from "./CreateVpdGrantRule/req";
import { CreateVpdGrantRuleResponse } from "./CreateVpdGrantRule/res";
import { DeleteVccGrantRuleRequest } from "./DeleteVccGrantRule/req";
import { DeleteVccGrantRuleResponse } from "./DeleteVccGrantRule/res";
import { CreateVccGrantRuleRequest } from "./CreateVccGrantRule/req";
import { CreateVccGrantRuleResponse } from "./CreateVccGrantRule/res";
import { ListVpdGrantRulesRequest } from "./ListVpdGrantRules/req";
import { ListVpdGrantRulesResponse } from "./ListVpdGrantRules/res";
import { DeleteVpdGrantRuleRequest } from "./DeleteVpdGrantRule/req";
import { DeleteVpdGrantRuleResponse } from "./DeleteVpdGrantRule/res";
import { GetVccGrantRuleRequest } from "./GetVccGrantRule/req";
import { GetVccGrantRuleResponse } from "./GetVccGrantRule/res";
import { ListVccGrantRulesRequest } from "./ListVccGrantRules/req";
import { ListVccGrantRulesResponse } from "./ListVccGrantRules/res";
import { GetErRouteMapRequest } from "./GetErRouteMap/req";
import { GetErRouteMapResponse } from "./GetErRouteMap/res";
import { GetVpdRouteEntryRequest } from "./GetVpdRouteEntry/req";
import { GetVpdRouteEntryResponse } from "./GetVpdRouteEntry/res";
import { ListErRouteMapsRequest } from "./ListErRouteMaps/req";
import { ListErRouteMapsResponse } from "./ListErRouteMaps/res";
import { GetVccRouteEntryRequest } from "./GetVccRouteEntry/req";
import { GetVccRouteEntryResponse } from "./GetVccRouteEntry/res";
import { ListErRouteEntriesRequest } from "./ListErRouteEntries/req";
import { ListErRouteEntriesResponse } from "./ListErRouteEntries/res";
import { GetErRouteEntryRequest } from "./GetErRouteEntry/req";
import { GetErRouteEntryResponse } from "./GetErRouteEntry/res";
import { ListVccRouteEntriesRequest } from "./ListVccRouteEntries/req";
import { ListVccRouteEntriesResponse } from "./ListVccRouteEntries/res";
import { ListVpdRouteEntriesRequest } from "./ListVpdRouteEntries/req";
import { ListVpdRouteEntriesResponse } from "./ListVpdRouteEntries/res";
import { ListErAttachmentsRequest } from "./ListErAttachments/req";
import { ListErAttachmentsResponse } from "./ListErAttachments/res";
import { GetErAttachmentRequest } from "./GetErAttachment/req";
import { GetErAttachmentResponse } from "./GetErAttachment/res";
import { DeleteErAttachmentRequest } from "./DeleteErAttachment/req";
import { DeleteErAttachmentResponse } from "./DeleteErAttachment/res";
import { UpdateErAttachmentRequest } from "./UpdateErAttachment/req";
import { UpdateErAttachmentResponse } from "./UpdateErAttachment/res";
import { UpdateErRouteMapRequest } from "./UpdateErRouteMap/req";
import { UpdateErRouteMapResponse } from "./UpdateErRouteMap/res";
import { CreateErRouteMapRequest } from "./CreateErRouteMap/req";
import { CreateErRouteMapResponse } from "./CreateErRouteMap/res";
import { DeleteErRouteMapRequest } from "./DeleteErRouteMap/req";
import { DeleteErRouteMapResponse } from "./DeleteErRouteMap/res";
import { CreateErAttachmentRequest } from "./CreateErAttachment/req";
import { CreateErAttachmentResponse } from "./CreateErAttachment/res";
import { DeleteVccRouteEntryRequest } from "./DeleteVccRouteEntry/req";
import { DeleteVccRouteEntryResponse } from "./DeleteVccRouteEntry/res";
import { CreateVccRouteEntryRequest } from "./CreateVccRouteEntry/req";
import { CreateVccRouteEntryResponse } from "./CreateVccRouteEntry/res";
import { UnAssociateVpdCidrBlockRequest } from "./UnAssociateVpdCidrBlock/req";
import { UnAssociateVpdCidrBlockResponse } from "./UnAssociateVpdCidrBlock/res";
import { AssociateVpdCidrBlockRequest } from "./AssociateVpdCidrBlock/req";
import { AssociateVpdCidrBlockResponse } from "./AssociateVpdCidrBlock/res";
import { GetFabricTopologyRequest } from "./GetFabricTopology/req";
import { GetFabricTopologyResponse } from "./GetFabricTopology/res";
import { ListInstancesByNcdRequest } from "./ListInstancesByNcd/req";
import { ListInstancesByNcdResponse } from "./ListInstancesByNcd/res";
import { QueryInstanceNcdRequest } from "./QueryInstanceNcd/req";
import { QueryInstanceNcdResponse } from "./QueryInstanceNcd/res";
import { CreateElasticNetworkInterfaceRequest } from "./CreateElasticNetworkInterface/req";
import { CreateElasticNetworkInterfaceResponse } from "./CreateElasticNetworkInterface/res";
import { GetElasticNetworkInterfaceRequest } from "./GetElasticNetworkInterface/req";
import { GetElasticNetworkInterfaceResponse } from "./GetElasticNetworkInterface/res";
import { UpdateElasticNetworkInterfaceRequest } from "./UpdateElasticNetworkInterface/req";
import { UpdateElasticNetworkInterfaceResponse } from "./UpdateElasticNetworkInterface/res";
import { ListElasticNetworkInterfacesRequest } from "./ListElasticNetworkInterfaces/req";
import { ListElasticNetworkInterfacesResponse } from "./ListElasticNetworkInterfaces/res";
import { DeleteElasticNetworkInterfaceRequest } from "./DeleteElasticNetworkInterface/req";
import { DeleteElasticNetworkInterfaceResponse } from "./DeleteElasticNetworkInterface/res";
import { GetNodeInfoForPodRequest } from "./GetNodeInfoForPod/req";
import { GetNodeInfoForPodResponse } from "./GetNodeInfoForPod/res";
import { ListNodeInfosForPodRequest } from "./ListNodeInfosForPod/req";
import { ListNodeInfosForPodResponse } from "./ListNodeInfosForPod/res";
import { UnassignLeniPrivateIpAddressRequest } from "./UnassignLeniPrivateIpAddress/req";
import { UnassignLeniPrivateIpAddressResponse } from "./UnassignLeniPrivateIpAddress/res";
import { AssignLeniPrivateIpAddressRequest } from "./AssignLeniPrivateIpAddress/req";
import { AssignLeniPrivateIpAddressResponse } from "./AssignLeniPrivateIpAddress/res";
import { GetLeniPrivateIpAddressRequest } from "./GetLeniPrivateIpAddress/req";
import { GetLeniPrivateIpAddressResponse } from "./GetLeniPrivateIpAddress/res";
import { UpdateLeniPrivateIpAddressRequest } from "./UpdateLeniPrivateIpAddress/req";
import { UpdateLeniPrivateIpAddressResponse } from "./UpdateLeniPrivateIpAddress/res";
import { ListLeniPrivateIpAddressesRequest } from "./ListLeniPrivateIpAddresses/req";
import { ListLeniPrivateIpAddressesResponse } from "./ListLeniPrivateIpAddresses/res";

interface EFLO {
    /**
     * 删除某个灵骏子网实例，删除后相关数据丢失且不可恢复。
     */
    DeleteSubnet(query: DeleteSubnetRequest): Promise<DeleteSubnetResponse>;
    /**
     * 用户可以使用该API在灵骏网段下创建一个灵骏子网。
     */
    CreateSubnet(query: CreateSubnetRequest): Promise<CreateSubnetResponse>;
    /**
     * 查询一个或多个灵骏子网的详细信息，包括灵骏子网类型，网络地址段，所属灵骏网段实例ID等。
     */
    ListSubnets(query: ListSubnetsRequest): Promise<ListSubnetsResponse>;
    /**
     * 查询某个灵骏网段的详细信息，包括灵骏网段状态，Cidr地址，服务网段，Subnet及NC的数量等。
     */
    GetVpd(query: GetVpdRequest): Promise<GetVpdResponse>;
    /**
     * 创建用户私有的灵骏网段，该网段拥有独立的网络环境。
     */
    CreateVpd(query: CreateVpdRequest): Promise<CreateVpdResponse>;
    /**
     * 查询某个灵骏子网的详细信息，包括灵骏子网类型，网络地址段，所属灵骏网段实例ID，实例状态，NC数量等。
     */
    GetSubnet(query: GetSubnetRequest): Promise<GetSubnetResponse>;
    /**
     * 删除某个灵骏网段实例，删除后相关数据丢失且不可恢复。
     */
    DeleteVpd(query: DeleteVpdRequest): Promise<DeleteVpdResponse>;
    /**
     * 更新灵骏子网实例的部分信息，包括灵骏子网实例名称。
     */
    UpdateSubnet(query: UpdateSubnetRequest): Promise<UpdateSubnetResponse>;
    /**
     * 更新灵骏网段实例的部分信息，包括灵骏网段实例的名称。
     */
    UpdateVpd(query: UpdateVpdRequest): Promise<UpdateVpdResponse>;
    /**
     * 查询某个灵骏连接的详细信息，包括规格，物理专线接入端口类型，实例状态，带宽，BGP网段等。
     */
    GetVcc(query: GetVccRequest): Promise<GetVccResponse>;
    /**
     * 初始化灵骏连接，授权智能计算灵骏在您的账号创建SLR。
     */
    InitializeVcc(query: InitializeVccRequest): Promise<InitializeVccResponse>;
    /**
     * 查询一个或多个灵骏连接的详细信息，包括规格，物理专线接入端口类型，实例状态，带宽，bgp网段等。
     */
    ListVccs(query: ListVccsRequest): Promise<ListVccsResponse>;
    /**
     * 用户可创建灵骏连接，用于连通灵骏网络环境和阿里云网络环境。
     */
    CreateVcc(query: CreateVccRequest): Promise<CreateVccResponse>;
    /**
     * 查询一个或多个灵骏网段的详细信息，包括灵骏网段状态，Cidr地址，服务网段，Subnet等。
     */
    ListVpds(query: ListVpdsRequest): Promise<ListVpdsResponse>;
    /**
     * 更新灵骏连接实例的部分信息，包括灵骏连接实例的带宽峰值和名称。
     */
    UpdateVcc(query: UpdateVccRequest): Promise<UpdateVccResponse>;
    /**
     * 查询某张网卡实例信息。
     */
    GetNetworkInterface(query: GetNetworkInterfaceRequest): Promise<GetNetworkInterfaceResponse>;
    /**
     * 查询当前灵骏网卡辅助私网IP的列表信息。
     */
    ListLniPrivateIpAddress(query: ListLniPrivateIpAddressRequest): Promise<ListLniPrivateIpAddressResponse>;
    /**
     * 将分配的辅助私网IP地址删除。
     */
    UnAssignPrivateIpAddress(query: UnAssignPrivateIpAddressRequest): Promise<UnAssignPrivateIpAddressResponse>;
    /**
     * 获取辅助私网IP详情信息。
     */
    GetLniPrivateIpAddress(query: GetLniPrivateIpAddressRequest): Promise<GetLniPrivateIpAddressResponse>;
    /**
     * 为当前的灵骏网卡申请辅助私网IP，以及可选自动分配辅助Mac地址。
     */
    AssignPrivateIpAddress(query: AssignPrivateIpAddressRequest): Promise<AssignPrivateIpAddressResponse>;
    /**
     * 查询灵骏网卡列表信息。
     */
    ListNetworkInterfaces(query: ListNetworkInterfacesRequest): Promise<ListNetworkInterfacesResponse>;
    /**
     * 查询用户是否存在灵骏连接需要的SLR角色-AliyunServiceRoleForEfloVcc。
     */
    DescribeSlr(query: DescribeSlrRequest): Promise<DescribeSlrResponse>;
    /**
     * 删除某个灵骏HUB实例，删除后相关数据丢失且不可恢复。
     */
    DeleteEr(query: DeleteErRequest): Promise<DeleteErResponse>;
    /**
     * 查询灵骏HUB。
     */
    ListErs(query: ListErsRequest): Promise<ListErsResponse>;
    /**
     * 更新灵骏HUB。
     */
    UpdateEr(query: UpdateErRequest): Promise<UpdateErResponse>;
    /**
     * 查询灵骏HUB。
     */
    GetEr(query: GetErRequest): Promise<GetErResponse>;
    /**
     * 创建灵骏HUB。
     */
    CreateEr(query: CreateErRequest): Promise<CreateErResponse>;
    /**
     * 查询灵骏网段跨账号资源授权详情，包括授权租户ID，灵骏HUB实例ID，网络实例ID等。
     */
    GetVpdGrantRule(query: GetVpdGrantRuleRequest): Promise<GetVpdGrantRuleResponse>;
    /**
     * 用户可通过此API，将灵骏网段实例对目标账号的灵骏HUB实例授权。授权后，目标账号即可用被授权的灵骏HUB实例关联到您的灵骏网段。
     */
    CreateVpdGrantRule(query: CreateVpdGrantRuleRequest): Promise<CreateVpdGrantRuleResponse>;
    /**
     * 删除某个灵骏连接的灵骏HUB跨账号授权，删除后相关数据丢失且不可恢复。
     */
    DeleteVccGrantRule(query: DeleteVccGrantRuleRequest): Promise<DeleteVccGrantRuleResponse>;
    /**
     * 用户可通过此API，将灵骏连接实例对目标账号的灵骏HUB实例授权。授权后，目标账号即可用被授权的灵骏HUB实例关联到您的灵骏连接。
     */
    CreateVccGrantRule(query: CreateVccGrantRuleRequest): Promise<CreateVccGrantRuleResponse>;
    /**
     * 查询一个或多个灵骏网段路由条目的详细信息，包括路由类型，路由条目状态，目的网段，下一条的实例信息等。
     */
    ListVpdGrantRules(query: ListVpdGrantRulesRequest): Promise<ListVpdGrantRulesResponse>;
    /**
     * 删除某个灵骏网段的灵骏HUB跨账号授权，删除后相关数据丢失且不可恢复。
     */
    DeleteVpdGrantRule(query: DeleteVpdGrantRuleRequest): Promise<DeleteVpdGrantRuleResponse>;
    /**
     * 查询灵骏连接跨账号资源授权详情，包括授权租户ID，灵骏HUB实例ID，网络实例ID等。
     */
    GetVccGrantRule(query: GetVccGrantRuleRequest): Promise<GetVccGrantRuleResponse>;
    /**
     * 查询某个灵骏连接授权的详细信息，包括授权租户ID，地域，灵骏HUB实例信息等。
     */
    ListVccGrantRules(query: ListVccGrantRulesRequest): Promise<ListVccGrantRulesResponse>;
    /**
     * 查询灵骏HUB路由策略详情信息。
     */
    GetErRouteMap(query: GetErRouteMapRequest): Promise<GetErRouteMapResponse>;
    /**
     * 查询路由条目。
     */
    GetVpdRouteEntry(query: GetVpdRouteEntryRequest): Promise<GetVpdRouteEntryResponse>;
    /**
     * 查询路由策略。
     */
    ListErRouteMaps(query: ListErRouteMapsRequest): Promise<ListErRouteMapsResponse>;
    /**
     * 查询路由条目。
     */
    GetVccRouteEntry(query: GetVccRouteEntryRequest): Promise<GetVccRouteEntryResponse>;
    /**
     * 查询灵骏HUB路由条目。
     */
    ListErRouteEntries(query: ListErRouteEntriesRequest): Promise<ListErRouteEntriesResponse>;
    /**
     * 查询灵骏HUB路由条目详情。
     */
    GetErRouteEntry(query: GetErRouteEntryRequest): Promise<GetErRouteEntryResponse>;
    /**
     * 查询灵骏连接路由条目。
     */
    ListVccRouteEntries(query: ListVccRouteEntriesRequest): Promise<ListVccRouteEntriesResponse>;
    /**
     * 查询灵骏网段路由条目。
     */
    ListVpdRouteEntries(query: ListVpdRouteEntriesRequest): Promise<ListVpdRouteEntriesResponse>;
    /**
     * 查询网络实例连接。
     */
    ListErAttachments(query: ListErAttachmentsRequest): Promise<ListErAttachmentsResponse>;
    /**
     * 查询网络实例连接。
     */
    GetErAttachment(query: GetErAttachmentRequest): Promise<GetErAttachmentResponse>;
    /**
     * 删除某个网络实例连接实例，删除后相关数据丢失且不可恢复。
     */
    DeleteErAttachment(query: DeleteErAttachmentRequest): Promise<DeleteErAttachmentResponse>;
    /**
     * 更新网络实例连接。
     */
    UpdateErAttachment(query: UpdateErAttachmentRequest): Promise<UpdateErAttachmentResponse>;
    /**
     * 更新路由策略的部分信息，包括路由策略的描述和名称。
     */
    UpdateErRouteMap(query: UpdateErRouteMapRequest): Promise<UpdateErRouteMapResponse>;
    /**
     * 用户可以使用该API，通过指定灵骏HUB下的网络实例连接，创建路由策略。
     */
    CreateErRouteMap(query: CreateErRouteMapRequest): Promise<CreateErRouteMapResponse>;
    /**
     * 删除某个路由策略实例，删除后相关数据丢失且不可恢复。
     */
    DeleteErRouteMap(query: DeleteErRouteMapRequest): Promise<DeleteErRouteMapResponse>;
    /**
     * 创建网络实例连接。
     */
    CreateErAttachment(query: CreateErAttachmentRequest): Promise<CreateErAttachmentResponse>;
    /**
     * 删除灵骏连接路由条目。
     */
    DeleteVccRouteEntry(query: DeleteVccRouteEntryRequest): Promise<DeleteVccRouteEntryResponse>;
    /**
     * 创建灵骏连接路由条目。
     */
    CreateVccRouteEntry(query: CreateVccRouteEntryRequest): Promise<CreateVccRouteEntryResponse>;
    /**
     * 可通过此功能对VPD的附加网段进行删除。
     */
    UnAssociateVpdCidrBlock(query: UnAssociateVpdCidrBlockRequest): Promise<UnAssociateVpdCidrBlockResponse>;
    /**
     * 当VPD主网段地址不够分配的时候，可以选择创建额外的附加网段作为VPD主网段的附加网段。
     */
    AssociateVpdCidrBlock(query: AssociateVpdCidrBlockRequest): Promise<AssociateVpdCidrBlockResponse>;
    /**
     * 查询VPD下灵骏网卡和灵骏节点的物理拓扑信息。
     */
    GetFabricTopology(query: GetFabricTopologyRequest): Promise<GetFabricTopologyResponse>;
    /**
     * 查询与指定GPU节点，通信距离不超过指定NCD的GPU节点列表。
     */
    ListInstancesByNcd(query: ListInstancesByNcdRequest): Promise<ListInstancesByNcdResponse>;
    /**
     * 查询实例（灵骏节点、灵骏网卡）之间的网络通信距离（Network Communication Distance，NCD）。
     */
    QueryInstanceNcd(query: QueryInstanceNcdRequest): Promise<QueryInstanceNcdResponse>;
    /**
     * 创建灵骏弹性网卡。
     */
    CreateElasticNetworkInterface(query: CreateElasticNetworkInterfaceRequest): Promise<CreateElasticNetworkInterfaceResponse>;
    /**
     * 获取灵骏弹性网卡详情。
     */
    GetElasticNetworkInterface(query: GetElasticNetworkInterfaceRequest): Promise<GetElasticNetworkInterfaceResponse>;
    /**
     * 更新灵骏弹性网卡信息。
     */
    UpdateElasticNetworkInterface(query: UpdateElasticNetworkInterfaceRequest): Promise<UpdateElasticNetworkInterfaceResponse>;
    /**
     * 查询灵骏弹性网卡列表。
     */
    ListElasticNetworkInterfaces(query: ListElasticNetworkInterfacesRequest): Promise<ListElasticNetworkInterfacesResponse>;
    /**
     * 删除灵骏弹性网卡，删除后，相关数据全部丢失且不可恢复，请谨慎操作。
     */
    DeleteElasticNetworkInterface(query: DeleteElasticNetworkInterfaceRequest): Promise<DeleteElasticNetworkInterfaceResponse>;
    /**
     * 查询节点网络信息详情。
     */
    GetNodeInfoForPod(query: GetNodeInfoForPodRequest): Promise<GetNodeInfoForPodResponse>;
    /**
     * 查询节点网络信息。
     */
    ListNodeInfosForPod(query: ListNodeInfosForPodRequest): Promise<ListNodeInfosForPodResponse>;
    /**
     * 将分配的灵骏弹性网卡辅助私网IP删除。
     */
    UnassignLeniPrivateIpAddress(query: UnassignLeniPrivateIpAddressRequest): Promise<UnassignLeniPrivateIpAddressResponse>;
    /**
     * 为当前的灵骏弹性网卡申请辅助私网IP（可选自动分配辅助私网IP）。
     */
    AssignLeniPrivateIpAddress(query: AssignLeniPrivateIpAddressRequest): Promise<AssignLeniPrivateIpAddressResponse>;
    /**
     * 获取指定灵骏弹性网卡辅助私网IP的详细信息。
     */
    GetLeniPrivateIpAddress(query: GetLeniPrivateIpAddressRequest): Promise<GetLeniPrivateIpAddressResponse>;
    /**
     * 更新灵骏弹性网卡分配的辅助私网描述。
     */
    UpdateLeniPrivateIpAddress(query: UpdateLeniPrivateIpAddressRequest): Promise<UpdateLeniPrivateIpAddressResponse>;
    /**
     * 查询当前灵骏弹性网卡辅助私网IP的列表信息。
     */
    ListLeniPrivateIpAddresses(query: ListLeniPrivateIpAddressesRequest): Promise<ListLeniPrivateIpAddressesResponse>;
}
export default EFLO;
