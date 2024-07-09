import { AcceptVpcPeerConnectionRequest } from "./AcceptVpcPeerConnection/req";
import { AcceptVpcPeerConnectionResponse } from "./AcceptVpcPeerConnection/res";
import { CreateVpcPeerConnectionRequest } from "./CreateVpcPeerConnection/req";
import { CreateVpcPeerConnectionResponse } from "./CreateVpcPeerConnection/res";
import { DeleteVpcPeerConnectionRequest } from "./DeleteVpcPeerConnection/req";
import { DeleteVpcPeerConnectionResponse } from "./DeleteVpcPeerConnection/res";
import { GetVpcPeerConnectionAttributeRequest } from "./GetVpcPeerConnectionAttribute/req";
import { GetVpcPeerConnectionAttributeResponse } from "./GetVpcPeerConnectionAttribute/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListVpcPeerConnectionsRequest } from "./ListVpcPeerConnections/req";
import { ListVpcPeerConnectionsResponse } from "./ListVpcPeerConnections/res";
import { ModifyVpcPeerConnectionRequest } from "./ModifyVpcPeerConnection/req";
import { ModifyVpcPeerConnectionResponse } from "./ModifyVpcPeerConnection/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { RejectVpcPeerConnectionRequest } from "./RejectVpcPeerConnection/req";
import { RejectVpcPeerConnectionResponse } from "./RejectVpcPeerConnection/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UnTagResourcesRequest } from "./UnTagResources/req";
import { UnTagResourcesResponse } from "./UnTagResources/res";

interface VPCPEER {
    /**
     * 调用AcceptVpcPeerConnection接口接收VPC对等连接实例的请求。
     */
    AcceptVpcPeerConnection(query: AcceptVpcPeerConnectionRequest): Promise<AcceptVpcPeerConnectionResponse>;
    /**
     * 调用CreateVpcPeerConnection接口创建VPC对等连接。
     */
    CreateVpcPeerConnection(query: CreateVpcPeerConnectionRequest): Promise<CreateVpcPeerConnectionResponse>;
    /**
     * 调用DeleteVpcPeerConnection接口删除VPC对等连接实例。
     */
    DeleteVpcPeerConnection(query: DeleteVpcPeerConnectionRequest): Promise<DeleteVpcPeerConnectionResponse>;
    /**
     * 调用GetVpcPeerConnectionAttribute接口查询指定VPC对等连接的详细信息。
     */
    GetVpcPeerConnectionAttribute(query: GetVpcPeerConnectionAttributeRequest): Promise<GetVpcPeerConnectionAttributeResponse>;
    /**
     * 调用ListTagResources接口查询对等连接已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用ListVpcPeerConnections接口查询VPC对等连接的详细信息。
     */
    ListVpcPeerConnections(query: ListVpcPeerConnectionsRequest): Promise<ListVpcPeerConnectionsResponse>;
    /**
     * 调用ModifyVpcPeerConnection接口修改VPC对等连接实例的名称或者描述信息。
     */
    ModifyVpcPeerConnection(query: ModifyVpcPeerConnectionRequest): Promise<ModifyVpcPeerConnectionResponse>;
    /**
     * 调用MoveResourceGroup接口修改对等连接所属的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 调用RejectVpcPeerConnection接口拒绝VPC对等连接实例的请求。
     */
    RejectVpcPeerConnection(query: RejectVpcPeerConnectionRequest): Promise<RejectVpcPeerConnectionResponse>;
    /**
     * 调用TagResources接口为指定的VPC对等连接统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用UnTagResources接口为指定的VPC对等连接统一解绑标签。
     */
    UnTagResources(query: UnTagResourcesRequest): Promise<UnTagResourcesResponse>;
}
export default VPCPEER;
