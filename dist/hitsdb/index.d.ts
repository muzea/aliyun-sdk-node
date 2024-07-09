import { GetLindormInstanceEngineListRequest } from "./GetLindormInstanceEngineList/req";
import { GetLindormInstanceEngineListResponse } from "./GetLindormInstanceEngineList/res";
import { GetLindormInstanceListRequest } from "./GetLindormInstanceList/req";
import { GetLindormInstanceListResponse } from "./GetLindormInstanceList/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { GetInstanceIpWhiteListRequest } from "./GetInstanceIpWhiteList/req";
import { GetInstanceIpWhiteListResponse } from "./GetInstanceIpWhiteList/res";
import { UpdateInstanceIpWhiteListRequest } from "./UpdateInstanceIpWhiteList/req";
import { UpdateInstanceIpWhiteListResponse } from "./UpdateInstanceIpWhiteList/res";
import { GetLindormInstanceRequest } from "./GetLindormInstance/req";
import { GetLindormInstanceResponse } from "./GetLindormInstance/res";
import { CreateLindormInstanceRequest } from "./CreateLindormInstance/req";
import { CreateLindormInstanceResponse } from "./CreateLindormInstance/res";
import { ReleaseLindormInstanceRequest } from "./ReleaseLindormInstance/req";
import { ReleaseLindormInstanceResponse } from "./ReleaseLindormInstance/res";
import { UpgradeLindormInstanceRequest } from "./UpgradeLindormInstance/req";
import { UpgradeLindormInstanceResponse } from "./UpgradeLindormInstance/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { RenewLindormInstanceRequest } from "./RenewLindormInstance/req";
import { RenewLindormInstanceResponse } from "./RenewLindormInstance/res";
import { ModifyInstancePayTypeRequest } from "./ModifyInstancePayType/req";
import { ModifyInstancePayTypeResponse } from "./ModifyInstancePayType/res";
import { SwitchLSQLV3MySQLServiceRequest } from "./SwitchLSQLV3MySQLService/req";
import { SwitchLSQLV3MySQLServiceResponse } from "./SwitchLSQLV3MySQLService/res";

interface HITSDB {
    /**
     * 获取Lindorm实例支持的引擎类型。
     */
    GetLindormInstanceEngineList(query: GetLindormInstanceEngineListRequest): Promise<GetLindormInstanceEngineListResponse>;
    /**
     * 获取Lindorm实例列表。
     */
    GetLindormInstanceList(query: GetLindormInstanceListRequest): Promise<GetLindormInstanceListResponse>;
    /**
     * 获取Lindorm产品支持的所有地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 获取Lindorm实例的访问白名单。
     */
    GetInstanceIpWhiteList(query: GetInstanceIpWhiteListRequest): Promise<GetInstanceIpWhiteListResponse>;
    /**
     * 设置Lindorm实例的访问白名单。
     */
    UpdateInstanceIpWhiteList(query: UpdateInstanceIpWhiteListRequest): Promise<UpdateInstanceIpWhiteListResponse>;
    /**
     * 获取Lindorm实例的详细信息，包括实例类型、付费类型、所属专有网络等。
     */
    GetLindormInstance(query: GetLindormInstanceRequest): Promise<GetLindormInstanceResponse>;
    /**
     * 创建Lindorm实例。
     */
    CreateLindormInstance(query: CreateLindormInstanceRequest): Promise<CreateLindormInstanceResponse>;
    /**
     * 释放Lindorm实例。
     */
    ReleaseLindormInstance(query: ReleaseLindormInstanceRequest): Promise<ReleaseLindormInstanceResponse>;
    /**
     * 为Lindorm实例开通冷存储，变更节点规格或节点数量，变更存储空间。
     */
    UpgradeLindormInstance(query: UpgradeLindormInstanceRequest): Promise<UpgradeLindormInstanceResponse>;
    /**
     * 获取Lindorm实例和标签的绑定关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为Lindorm实例解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 为一个或多个Lindorm实例绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * Lindorm包年包月类型实例续费。
     */
    RenewLindormInstance(query: RenewLindormInstanceRequest): Promise<RenewLindormInstanceResponse>;
    /**
     * 变更Lindorm实例的计费方式。
     */
    ModifyInstancePayType(query: ModifyInstancePayTypeRequest): Promise<ModifyInstancePayTypeResponse>;
    /**
     * 开通与关闭Lindorm MySQL兼容协议。
     */
    SwitchLSQLV3MySQLService(query: SwitchLSQLV3MySQLServiceRequest): Promise<SwitchLSQLV3MySQLServiceResponse>;
}
export default HITSDB;
