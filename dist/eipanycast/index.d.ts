import { AllocateAnycastEipAddressRequest } from "./AllocateAnycastEipAddress/req";
import { AllocateAnycastEipAddressResponse } from "./AllocateAnycastEipAddress/res";
import { AssociateAnycastEipAddressRequest } from "./AssociateAnycastEipAddress/req";
import { AssociateAnycastEipAddressResponse } from "./AssociateAnycastEipAddress/res";
import { DescribeAnycastPopLocationsRequest } from "./DescribeAnycastPopLocations/req";
import { DescribeAnycastPopLocationsResponse } from "./DescribeAnycastPopLocations/res";
import { DescribeAnycastEipAddressRequest } from "./DescribeAnycastEipAddress/req";
import { DescribeAnycastEipAddressResponse } from "./DescribeAnycastEipAddress/res";
import { DescribeAnycastServerRegionsRequest } from "./DescribeAnycastServerRegions/req";
import { DescribeAnycastServerRegionsResponse } from "./DescribeAnycastServerRegions/res";
import { ListAnycastEipAddressesRequest } from "./ListAnycastEipAddresses/req";
import { ListAnycastEipAddressesResponse } from "./ListAnycastEipAddresses/res";
import { ModifyAnycastEipAddressAttributeRequest } from "./ModifyAnycastEipAddressAttribute/req";
import { ModifyAnycastEipAddressAttributeResponse } from "./ModifyAnycastEipAddressAttribute/res";
import { ModifyAnycastEipAddressSpecRequest } from "./ModifyAnycastEipAddressSpec/req";
import { ModifyAnycastEipAddressSpecResponse } from "./ModifyAnycastEipAddressSpec/res";
import { ReleaseAnycastEipAddressRequest } from "./ReleaseAnycastEipAddress/req";
import { ReleaseAnycastEipAddressResponse } from "./ReleaseAnycastEipAddress/res";
import { UnassociateAnycastEipAddressRequest } from "./UnassociateAnycastEipAddress/req";
import { UnassociateAnycastEipAddressResponse } from "./UnassociateAnycastEipAddress/res";
import { UpdateAnycastEipAddressAssociationsRequest } from "./UpdateAnycastEipAddressAssociations/req";
import { UpdateAnycastEipAddressAssociationsResponse } from "./UpdateAnycastEipAddressAssociations/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";

interface EIPANYCAST {
    /**
     * 调用AllocateAnycastEipAddress接口创建Anycast EIP实例。
     */
    AllocateAnycastEipAddress(query: AllocateAnycastEipAddressRequest): Promise<AllocateAnycastEipAddressResponse>;
    /**
     * 调用AssociateAnycastEipAddress接口将Anycast EIP绑定到指定的后端云资源实例上。
     */
    AssociateAnycastEipAddress(query: AssociateAnycastEipAddressRequest): Promise<AssociateAnycastEipAddressResponse>;
    /**
     * 调用DescribeAnycastPopLocations接口查询指定接入区域的接入点信息。
     */
    DescribeAnycastPopLocations(query: DescribeAnycastPopLocationsRequest): Promise<DescribeAnycastPopLocationsResponse>;
    /**
     * 调用DescribeAnycastEipAddress接口查询指定Anycast EIP实例的具体信息，包括实例状态、带宽峰值和已绑定资源的信息等。
     */
    DescribeAnycastEipAddress(query: DescribeAnycastEipAddressRequest): Promise<DescribeAnycastEipAddressResponse>;
    /**
     * 调用DescribeAnycastServerRegions接口查询指定区域内Anycast EIP可绑定的后端服务地域。
     */
    DescribeAnycastServerRegions(query: DescribeAnycastServerRegionsRequest): Promise<DescribeAnycastServerRegionsResponse>;
    /**
     * 查询指定接入区域已创建Anycast EIP实例的具体信息，包括实例状态、带宽峰值和已绑定资源的信息等。
     */
    ListAnycastEipAddresses(query: ListAnycastEipAddressesRequest): Promise<ListAnycastEipAddressesResponse>;
    /**
     * 调用ModifyAnycastEipAddressAttribute接口修改Anycast EIP实例的名称和描述。
     */
    ModifyAnycastEipAddressAttribute(query: ModifyAnycastEipAddressAttributeRequest): Promise<ModifyAnycastEipAddressAttributeResponse>;
    /**
     * 调用ModifyAnycastEipAddressSpec接口修改Anycast EIP实例带宽值。
     */
    ModifyAnycastEipAddressSpec(query: ModifyAnycastEipAddressSpecRequest): Promise<ModifyAnycastEipAddressSpecResponse>;
    /**
     * 调用ReleaseAnycastEipAddress接口释放指定Anycast EIP实例。
     */
    ReleaseAnycastEipAddress(query: ReleaseAnycastEipAddressRequest): Promise<ReleaseAnycastEipAddressResponse>;
    /**
     * 调用UnassociateAnycastEipAddress接口来解除Anycast EIP与其绑定的后端云资源实例的关联。
     */
    UnassociateAnycastEipAddress(query: UnassociateAnycastEipAddressRequest): Promise<UnassociateAnycastEipAddressResponse>;
    /**
     * 当Anycast EIP实例绑定了多个地域源站的后端资源时，支持修改接入点与源站的映射关系。您可以通过调用UpdateAnycastEipAddressAssociations接口增加或删除指定源站（绑定的云资源实例）的接入点来修改接入点与源站的映射关系。
     */
    UpdateAnycastEipAddressAssociations(query: UpdateAnycastEipAddressAssociationsRequest): Promise<UpdateAnycastEipAddressAssociationsResponse>;
    /**
     * 调用TagResources接口为指定的资源统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用ListTagResources接口查询任播弹性公网IP已绑定的标签列表信息。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用UntagResources接口为指定的Anycast EIP资源批量解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
}
export default EIPANYCAST;
