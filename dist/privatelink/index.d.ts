import { OpenPrivateLinkServiceRequest } from "./OpenPrivateLinkService/req";
import { OpenPrivateLinkServiceResponse } from "./OpenPrivateLinkService/res";
import { CheckProductOpenRequest } from "./CheckProductOpen/req";
import { CheckProductOpenResponse } from "./CheckProductOpen/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { CreateVpcEndpointServiceRequest } from "./CreateVpcEndpointService/req";
import { CreateVpcEndpointServiceResponse } from "./CreateVpcEndpointService/res";
import { UpdateVpcEndpointServiceAttributeRequest } from "./UpdateVpcEndpointServiceAttribute/req";
import { UpdateVpcEndpointServiceAttributeResponse } from "./UpdateVpcEndpointServiceAttribute/res";
import { GetVpcEndpointServiceAttributeRequest } from "./GetVpcEndpointServiceAttribute/req";
import { GetVpcEndpointServiceAttributeResponse } from "./GetVpcEndpointServiceAttribute/res";
import { ListVpcEndpointServicesRequest } from "./ListVpcEndpointServices/req";
import { ListVpcEndpointServicesResponse } from "./ListVpcEndpointServices/res";
import { DeleteVpcEndpointServiceRequest } from "./DeleteVpcEndpointService/req";
import { DeleteVpcEndpointServiceResponse } from "./DeleteVpcEndpointService/res";
import { AddUserToVpcEndpointServiceRequest } from "./AddUserToVpcEndpointService/req";
import { AddUserToVpcEndpointServiceResponse } from "./AddUserToVpcEndpointService/res";
import { ListVpcEndpointServiceUsersRequest } from "./ListVpcEndpointServiceUsers/req";
import { ListVpcEndpointServiceUsersResponse } from "./ListVpcEndpointServiceUsers/res";
import { RemoveUserFromVpcEndpointServiceRequest } from "./RemoveUserFromVpcEndpointService/req";
import { RemoveUserFromVpcEndpointServiceResponse } from "./RemoveUserFromVpcEndpointService/res";
import { AttachResourceToVpcEndpointServiceRequest } from "./AttachResourceToVpcEndpointService/req";
import { AttachResourceToVpcEndpointServiceResponse } from "./AttachResourceToVpcEndpointService/res";
import { UpdateVpcEndpointServiceResourceAttributeRequest } from "./UpdateVpcEndpointServiceResourceAttribute/req";
import { UpdateVpcEndpointServiceResourceAttributeResponse } from "./UpdateVpcEndpointServiceResourceAttribute/res";
import { ListVpcEndpointServiceResourcesRequest } from "./ListVpcEndpointServiceResources/req";
import { ListVpcEndpointServiceResourcesResponse } from "./ListVpcEndpointServiceResources/res";
import { DetachResourceFromVpcEndpointServiceRequest } from "./DetachResourceFromVpcEndpointService/req";
import { DetachResourceFromVpcEndpointServiceResponse } from "./DetachResourceFromVpcEndpointService/res";
import { CreateVpcEndpointRequest } from "./CreateVpcEndpoint/req";
import { CreateVpcEndpointResponse } from "./CreateVpcEndpoint/res";
import { UpdateVpcEndpointAttributeRequest } from "./UpdateVpcEndpointAttribute/req";
import { UpdateVpcEndpointAttributeResponse } from "./UpdateVpcEndpointAttribute/res";
import { GetVpcEndpointAttributeRequest } from "./GetVpcEndpointAttribute/req";
import { GetVpcEndpointAttributeResponse } from "./GetVpcEndpointAttribute/res";
import { ListVpcEndpointsRequest } from "./ListVpcEndpoints/req";
import { ListVpcEndpointsResponse } from "./ListVpcEndpoints/res";
import { ListVpcEndpointServicesByEndUserRequest } from "./ListVpcEndpointServicesByEndUser/req";
import { ListVpcEndpointServicesByEndUserResponse } from "./ListVpcEndpointServicesByEndUser/res";
import { DeleteVpcEndpointRequest } from "./DeleteVpcEndpoint/req";
import { DeleteVpcEndpointResponse } from "./DeleteVpcEndpoint/res";
import { EnableVpcEndpointConnectionRequest } from "./EnableVpcEndpointConnection/req";
import { EnableVpcEndpointConnectionResponse } from "./EnableVpcEndpointConnection/res";
import { UpdateVpcEndpointConnectionAttributeRequest } from "./UpdateVpcEndpointConnectionAttribute/req";
import { UpdateVpcEndpointConnectionAttributeResponse } from "./UpdateVpcEndpointConnectionAttribute/res";
import { ListVpcEndpointConnectionsRequest } from "./ListVpcEndpointConnections/req";
import { ListVpcEndpointConnectionsResponse } from "./ListVpcEndpointConnections/res";
import { DisableVpcEndpointConnectionRequest } from "./DisableVpcEndpointConnection/req";
import { DisableVpcEndpointConnectionResponse } from "./DisableVpcEndpointConnection/res";
import { AddZoneToVpcEndpointRequest } from "./AddZoneToVpcEndpoint/req";
import { AddZoneToVpcEndpointResponse } from "./AddZoneToVpcEndpoint/res";
import { ListVpcEndpointZonesRequest } from "./ListVpcEndpointZones/req";
import { ListVpcEndpointZonesResponse } from "./ListVpcEndpointZones/res";
import { RemoveZoneFromVpcEndpointRequest } from "./RemoveZoneFromVpcEndpoint/req";
import { RemoveZoneFromVpcEndpointResponse } from "./RemoveZoneFromVpcEndpoint/res";
import { EnableVpcEndpointZoneConnectionRequest } from "./EnableVpcEndpointZoneConnection/req";
import { EnableVpcEndpointZoneConnectionResponse } from "./EnableVpcEndpointZoneConnection/res";
import { UpdateVpcEndpointZoneConnectionResourceAttributeRequest } from "./UpdateVpcEndpointZoneConnectionResourceAttribute/req";
import { UpdateVpcEndpointZoneConnectionResourceAttributeResponse } from "./UpdateVpcEndpointZoneConnectionResourceAttribute/res";
import { DisableVpcEndpointZoneConnectionRequest } from "./DisableVpcEndpointZoneConnection/req";
import { DisableVpcEndpointZoneConnectionResponse } from "./DisableVpcEndpointZoneConnection/res";
import { AttachSecurityGroupToVpcEndpointRequest } from "./AttachSecurityGroupToVpcEndpoint/req";
import { AttachSecurityGroupToVpcEndpointResponse } from "./AttachSecurityGroupToVpcEndpoint/res";
import { ListVpcEndpointSecurityGroupsRequest } from "./ListVpcEndpointSecurityGroups/req";
import { ListVpcEndpointSecurityGroupsResponse } from "./ListVpcEndpointSecurityGroups/res";
import { DetachSecurityGroupFromVpcEndpointRequest } from "./DetachSecurityGroupFromVpcEndpoint/req";
import { DetachSecurityGroupFromVpcEndpointResponse } from "./DetachSecurityGroupFromVpcEndpoint/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";

interface PRIVATELINK {
    /**
     * 开启私网连接服务。
     */
    OpenPrivateLinkService(query: OpenPrivateLinkServiceRequest): Promise<OpenPrivateLinkServiceResponse>;
    /**
     * 调用CheckProductOpen接口，查询是否已开通私网连接。
     */
    CheckProductOpen(query: CheckProductOpenRequest): Promise<CheckProductOpenResponse>;
    /**
     * 调用DescribeRegions接口，查看私网连接可选的地域和可用区。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用DescribeZones接口，查询指定地域中可用区的列表。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 调用CreateVpcEndpointService接口，创建终端节点服务。
     */
    CreateVpcEndpointService(query: CreateVpcEndpointServiceRequest): Promise<CreateVpcEndpointServiceResponse>;
    /**
     * 调用UpdateVpcEndpointServiceAttribute接口，修改终端节点服务的属性。
     */
    UpdateVpcEndpointServiceAttribute(query: UpdateVpcEndpointServiceAttributeRequest): Promise<UpdateVpcEndpointServiceAttributeResponse>;
    /**
     * 调用GetVpcEndpointServiceAttribute接口，获取终端节点服务属性信息。
     */
    GetVpcEndpointServiceAttribute(query: GetVpcEndpointServiceAttributeRequest): Promise<GetVpcEndpointServiceAttributeResponse>;
    /**
     * 调用ListVpcEndpointServices接口，查询终端节点服务列表。
     */
    ListVpcEndpointServices(query: ListVpcEndpointServicesRequest): Promise<ListVpcEndpointServicesResponse>;
    /**
     * 调用DeleteVpcEndpointService接口，删除终端节点服务。
     */
    DeleteVpcEndpointService(query: DeleteVpcEndpointServiceRequest): Promise<DeleteVpcEndpointServiceResponse>;
    /**
     * 调用AddUserToVpcEndpointService接口，为终端节点服务添加服务白名单。
     */
    AddUserToVpcEndpointService(query: AddUserToVpcEndpointServiceRequest): Promise<AddUserToVpcEndpointServiceResponse>;
    /**
     * 调用ListVpcEndpointServiceUsers接口，查询终端节点服务的服务白名单。
     */
    ListVpcEndpointServiceUsers(query: ListVpcEndpointServiceUsersRequest): Promise<ListVpcEndpointServiceUsersResponse>;
    /**
     * 调用RemoveUserFromVpcEndpointService接口，移除终端节点服务的服务白名单。
     */
    RemoveUserFromVpcEndpointService(query: RemoveUserFromVpcEndpointServiceRequest): Promise<RemoveUserFromVpcEndpointServiceResponse>;
    /**
     * 调用AttachResourceToVpcEndpointService接口，为终端节点服务添加服务资源。
     */
    AttachResourceToVpcEndpointService(query: AttachResourceToVpcEndpointServiceRequest): Promise<AttachResourceToVpcEndpointServiceResponse>;
    /**
     * 调用UpdateVpcEndpointServiceResourceAttribute接口，修改终端节点服务资源是否自动分配。
     */
    UpdateVpcEndpointServiceResourceAttribute(query: UpdateVpcEndpointServiceResourceAttributeRequest): Promise<UpdateVpcEndpointServiceResourceAttributeResponse>;
    /**
     * 调用ListVpcEndpointServiceResources接口查询终端节点服务中的服务资源。
     */
    ListVpcEndpointServiceResources(query: ListVpcEndpointServiceResourcesRequest): Promise<ListVpcEndpointServiceResourcesResponse>;
    /**
     * 调用DetachResourceFromVpcEndpointService接口，移除终端节点服务中的服务资源。
     */
    DetachResourceFromVpcEndpointService(query: DetachResourceFromVpcEndpointServiceRequest): Promise<DetachResourceFromVpcEndpointServiceResponse>;
    /**
     * 调用CreateVpcEndpoint接口，创建终端节点。
     */
    CreateVpcEndpoint(query: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse>;
    /**
     * 调用UpdateVpcEndpointAttribute接口，修改终端节点的属性。
     */
    UpdateVpcEndpointAttribute(query: UpdateVpcEndpointAttributeRequest): Promise<UpdateVpcEndpointAttributeResponse>;
    /**
     * 调用GetVpcEndpointAttribute接口，获取终端节点属性信息。
     */
    GetVpcEndpointAttribute(query: GetVpcEndpointAttributeRequest): Promise<GetVpcEndpointAttributeResponse>;
    /**
     * 调用ListVpcEndpoints接口，查询终端节点列表。
     */
    ListVpcEndpoints(query: ListVpcEndpointsRequest): Promise<ListVpcEndpointsResponse>;
    /**
     * 调用ListVpcEndpointServicesByEndUser接口，查询已授权本账号创建终端节点时可以关联的终端节点服务。
     */
    ListVpcEndpointServicesByEndUser(query: ListVpcEndpointServicesByEndUserRequest): Promise<ListVpcEndpointServicesByEndUserResponse>;
    /**
     * 调用DeleteVpcEndpoint接口，删除终端节点。
     */
    DeleteVpcEndpoint(query: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse>;
    /**
     * 调用EnableVpcEndpointConnection接口，终端节点服务接受终端节点的连接请求。
     */
    EnableVpcEndpointConnection(query: EnableVpcEndpointConnectionRequest): Promise<EnableVpcEndpointConnectionResponse>;
    /**
     * 调用UpdateVpcEndpointConnectionAttribute接口，修改终端节点连接的属性。
     */
    UpdateVpcEndpointConnectionAttribute(query: UpdateVpcEndpointConnectionAttributeRequest): Promise<UpdateVpcEndpointConnectionAttributeResponse>;
    /**
     * 调用ListVpcEndpointConnections接口，查询终端节点连接。
     */
    ListVpcEndpointConnections(query: ListVpcEndpointConnectionsRequest): Promise<ListVpcEndpointConnectionsResponse>;
    /**
     * 调用DisableVpcEndpointConnection接口，拒绝终端节点的连接请求。
     */
    DisableVpcEndpointConnection(query: DisableVpcEndpointConnectionRequest): Promise<DisableVpcEndpointConnectionResponse>;
    /**
     * 调用AddZoneToVpcEndpoint接口，为终端节点添加可用区。
     */
    AddZoneToVpcEndpoint(query: AddZoneToVpcEndpointRequest): Promise<AddZoneToVpcEndpointResponse>;
    /**
     * 调用ListVpcEndpointZones接口，查询终端节点可用区列表。
     */
    ListVpcEndpointZones(query: ListVpcEndpointZonesRequest): Promise<ListVpcEndpointZonesResponse>;
    /**
     * 调用RemoveZoneFromVpcEndpoint接口，删除终端节点的可用区。
     */
    RemoveZoneFromVpcEndpoint(query: RemoveZoneFromVpcEndpointRequest): Promise<RemoveZoneFromVpcEndpointResponse>;
    /**
     * 调用EnableVpcEndpointZoneConnection接口，允许终端节点可用区连接。
     */
    EnableVpcEndpointZoneConnection(query: EnableVpcEndpointZoneConnectionRequest): Promise<EnableVpcEndpointZoneConnectionResponse>;
    /**
     * 调用UpdateVpcEndpointZoneConnectionResourceAttribute接口，替换终端节点可用区连接服务资源。
     */
    UpdateVpcEndpointZoneConnectionResourceAttribute(query: UpdateVpcEndpointZoneConnectionResourceAttributeRequest): Promise<UpdateVpcEndpointZoneConnectionResourceAttributeResponse>;
    /**
     * 调用DisableVpcEndpointZoneConnection接口，断开终端节点可用区连接。
     */
    DisableVpcEndpointZoneConnection(query: DisableVpcEndpointZoneConnectionRequest): Promise<DisableVpcEndpointZoneConnectionResponse>;
    /**
     * 调用AttachSecurityGroupToVpcEndpoint接口，将终端节点加入安全组。
     */
    AttachSecurityGroupToVpcEndpoint(query: AttachSecurityGroupToVpcEndpointRequest): Promise<AttachSecurityGroupToVpcEndpointResponse>;
    /**
     * 调用ListVpcEndpointSecurityGroups接口，查询终端节点已加入的安全组。
     */
    ListVpcEndpointSecurityGroups(query: ListVpcEndpointSecurityGroupsRequest): Promise<ListVpcEndpointSecurityGroupsResponse>;
    /**
     * 调用DetachSecurityGroupFromVpcEndpoint接口，将终端节点移除安全组。
     */
    DetachSecurityGroupFromVpcEndpoint(query: DetachSecurityGroupFromVpcEndpointRequest): Promise<DetachSecurityGroupFromVpcEndpointResponse>;
    /**
     * 当您需要查询资源标签时，可调用ListTagResources接口，查询资源已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 当您不需要标识一个或多个终端节点或终端节点服务时，可调用UntagResources接口，为指定的资源列表统一解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 当您需要标识一个或多个终端节点或终端节点服务时，可调用TagResources接口，为指定的资源列表统一绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 更改资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
}
export default PRIVATELINK;
