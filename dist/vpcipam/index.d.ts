import { AddIpamPoolCidrRequest } from "./AddIpamPoolCidr/req";
import { AddIpamPoolCidrResponse } from "./AddIpamPoolCidr/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { CreateIpamRequest } from "./CreateIpam/req";
import { CreateIpamResponse } from "./CreateIpam/res";
import { CreateIpamPoolRequest } from "./CreateIpamPool/req";
import { CreateIpamPoolResponse } from "./CreateIpamPool/res";
import { CreateIpamPoolAllocationRequest } from "./CreateIpamPoolAllocation/req";
import { CreateIpamPoolAllocationResponse } from "./CreateIpamPoolAllocation/res";
import { CreateIpamScopeRequest } from "./CreateIpamScope/req";
import { CreateIpamScopeResponse } from "./CreateIpamScope/res";
import { DeleteIpamRequest } from "./DeleteIpam/req";
import { DeleteIpamResponse } from "./DeleteIpam/res";
import { DeleteIpamPoolRequest } from "./DeleteIpamPool/req";
import { DeleteIpamPoolResponse } from "./DeleteIpamPool/res";
import { DeleteIpamPoolAllocationRequest } from "./DeleteIpamPoolAllocation/req";
import { DeleteIpamPoolAllocationResponse } from "./DeleteIpamPoolAllocation/res";
import { DeleteIpamPoolCidrRequest } from "./DeleteIpamPoolCidr/req";
import { DeleteIpamPoolCidrResponse } from "./DeleteIpamPoolCidr/res";
import { DeleteIpamScopeRequest } from "./DeleteIpamScope/req";
import { DeleteIpamScopeResponse } from "./DeleteIpamScope/res";
import { GetVpcIpamServiceStatusRequest } from "./GetVpcIpamServiceStatus/req";
import { GetVpcIpamServiceStatusResponse } from "./GetVpcIpamServiceStatus/res";
import { ListIpamPoolAllocationsRequest } from "./ListIpamPoolAllocations/req";
import { ListIpamPoolAllocationsResponse } from "./ListIpamPoolAllocations/res";
import { ListIpamPoolCidrsRequest } from "./ListIpamPoolCidrs/req";
import { ListIpamPoolCidrsResponse } from "./ListIpamPoolCidrs/res";
import { ListIpamPoolsRequest } from "./ListIpamPools/req";
import { ListIpamPoolsResponse } from "./ListIpamPools/res";
import { ListIpamResourceCidrsRequest } from "./ListIpamResourceCidrs/req";
import { ListIpamResourceCidrsResponse } from "./ListIpamResourceCidrs/res";
import { ListIpamsRequest } from "./ListIpams/req";
import { ListIpamsResponse } from "./ListIpams/res";
import { ListIpamScopesRequest } from "./ListIpamScopes/req";
import { ListIpamScopesResponse } from "./ListIpamScopes/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { OpenVpcIpamServiceRequest } from "./OpenVpcIpamService/req";
import { OpenVpcIpamServiceResponse } from "./OpenVpcIpamService/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { UpdateIpamRequest } from "./UpdateIpam/req";
import { UpdateIpamResponse } from "./UpdateIpam/res";
import { UpdateIpamPoolRequest } from "./UpdateIpamPool/req";
import { UpdateIpamPoolResponse } from "./UpdateIpamPool/res";
import { UpdateIpamScopeRequest } from "./UpdateIpamScope/req";
import { UpdateIpamScopeResponse } from "./UpdateIpamScope/res";

interface VPCIPAM {
    /**
     * 为IPAM地址池预置CIDR地址段。
     */
    AddIpamPoolCidr(query: AddIpamPoolCidrRequest): Promise<AddIpamPoolCidrResponse>;
    /**
     * 修改IPAM所属的资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 创建一个IPAM实例。
     */
    CreateIpam(query: CreateIpamRequest): Promise<CreateIpamResponse>;
    /**
     * 创建IPAM地址池。
     */
    CreateIpamPool(query: CreateIpamPoolRequest): Promise<CreateIpamPoolResponse>;
    /**
     * 从IPAM地址池创建自定义预留网段。
     */
    CreateIpamPoolAllocation(query: CreateIpamPoolAllocationRequest): Promise<CreateIpamPoolAllocationResponse>;
    /**
     * 创建私网和公网IPAM作用范围，分别用于管理私网和公网地址。
     */
    CreateIpamScope(query: CreateIpamScopeRequest): Promise<CreateIpamScopeResponse>;
    /**
     * 删除IPAM实例。
     */
    DeleteIpam(query: DeleteIpamRequest): Promise<DeleteIpamResponse>;
    /**
     * 删除IPAM地址池实例。
     */
    DeleteIpamPool(query: DeleteIpamPoolRequest): Promise<DeleteIpamPoolResponse>;
    /**
     * 删除IPAM地址池中的自定义预留网段。
     */
    DeleteIpamPoolAllocation(query: DeleteIpamPoolAllocationRequest): Promise<DeleteIpamPoolAllocationResponse>;
    /**
     * 删除IPAM地址池预置的CIDR地址段。
     */
    DeleteIpamPoolCidr(query: DeleteIpamPoolCidrRequest): Promise<DeleteIpamPoolCidrResponse>;
    /**
     * 删除IPAM作用范围。
     */
    DeleteIpamScope(query: DeleteIpamScopeRequest): Promise<DeleteIpamScopeResponse>;
    /**
     * 查询IPAM功能的开通状态。
     */
    GetVpcIpamServiceStatus(query: GetVpcIpamServiceStatusRequest): Promise<GetVpcIpamServiceStatusResponse>;
    /**
     * 查询IPAM地址池的CIDR分配信息。
     */
    ListIpamPoolAllocations(query: ListIpamPoolAllocationsRequest): Promise<ListIpamPoolAllocationsResponse>;
    /**
     * 查询IPAM地址池预置的CIDR地址段。
     */
    ListIpamPoolCidrs(query: ListIpamPoolCidrsRequest): Promise<ListIpamPoolCidrsResponse>;
    /**
     * 查询IPAM地址池信息。
     */
    ListIpamPools(query: ListIpamPoolsRequest): Promise<ListIpamPoolsResponse>;
    /**
     * 查询IPAM地址池中的资源。
     */
    ListIpamResourceCidrs(query: ListIpamResourceCidrsRequest): Promise<ListIpamResourceCidrsResponse>;
    /**
     * 查询ipam。
     */
    ListIpams(query: ListIpamsRequest): Promise<ListIpamsResponse>;
    /**
     * 查询IPAM作用范围的实例信息。
     */
    ListIpamScopes(query: ListIpamScopesRequest): Promise<ListIpamScopesResponse>;
    /**
     * 查询资源标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 开通IPAM功能。
     */
    OpenVpcIpamService(query: OpenVpcIpamServiceRequest): Promise<OpenVpcIpamServiceResponse>;
    /**
     * 为资源实例绑定资源标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 为资源解绑资源标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 更新ipam。
     */
    UpdateIpam(query: UpdateIpamRequest): Promise<UpdateIpamResponse>;
    /**
     * 修改IPAM地址池基本信息。
     */
    UpdateIpamPool(query: UpdateIpamPoolRequest): Promise<UpdateIpamPoolResponse>;
    /**
     * 修改IPAM作用范围的基本信息。
     */
    UpdateIpamScope(query: UpdateIpamScopeRequest): Promise<UpdateIpamScopeResponse>;
}
export default VPCIPAM;
