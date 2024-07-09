import { AddIpRequest } from "./AddIp/req";
import { AddIpResponse } from "./AddIp/res";
import { CheckGrantRequest } from "./CheckGrant/req";
import { CheckGrantResponse } from "./CheckGrant/res";
import { ConfigSchedruleOnDemandRequest } from "./ConfigSchedruleOnDemand/req";
import { ConfigSchedruleOnDemandResponse } from "./ConfigSchedruleOnDemand/res";
import { DeleteBlackholeRequest } from "./DeleteBlackhole/req";
import { DeleteBlackholeResponse } from "./DeleteBlackhole/res";
import { CreateSchedruleOnDemandRequest } from "./CreateSchedruleOnDemand/req";
import { CreateSchedruleOnDemandResponse } from "./CreateSchedruleOnDemand/res";
import { DeleteIpRequest } from "./DeleteIp/req";
import { DeleteIpResponse } from "./DeleteIp/res";
import { DeleteSchedruleOnDemandRequest } from "./DeleteSchedruleOnDemand/req";
import { DeleteSchedruleOnDemandResponse } from "./DeleteSchedruleOnDemand/res";
import { DescribeExcpetionCountRequest } from "./DescribeExcpetionCount/req";
import { DescribeExcpetionCountResponse } from "./DescribeExcpetionCount/res";
import { DescribeDdosEventRequest } from "./DescribeDdosEvent/req";
import { DescribeDdosEventResponse } from "./DescribeDdosEvent/res";
import { DescribeInstanceListRequest } from "./DescribeInstanceList/req";
import { DescribeInstanceListResponse } from "./DescribeInstanceList/res";
import { DescribeInstanceSpecsRequest } from "./DescribeInstanceSpecs/req";
import { DescribeInstanceSpecsResponse } from "./DescribeInstanceSpecs/res";
import { DescribeOnDemandDdosEventRequest } from "./DescribeOnDemandDdosEvent/req";
import { DescribeOnDemandDdosEventResponse } from "./DescribeOnDemandDdosEvent/res";
import { DescribeOnDemandInstanceStatusRequest } from "./DescribeOnDemandInstanceStatus/req";
import { DescribeOnDemandInstanceStatusResponse } from "./DescribeOnDemandInstanceStatus/res";
import { DescribeOpEntitiesRequest } from "./DescribeOpEntities/req";
import { DescribeOpEntitiesResponse } from "./DescribeOpEntities/res";
import { DescribePackIpListRequest } from "./DescribePackIpList/req";
import { DescribePackIpListResponse } from "./DescribePackIpList/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeTrafficRequest } from "./DescribeTraffic/req";
import { DescribeTrafficResponse } from "./DescribeTraffic/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ModifyRemarkRequest } from "./ModifyRemark/req";
import { ModifyRemarkResponse } from "./ModifyRemark/res";
import { QuerySchedruleOnDemandRequest } from "./QuerySchedruleOnDemand/req";
import { QuerySchedruleOnDemandResponse } from "./QuerySchedruleOnDemand/res";
import { SetInstanceModeOnDemandRequest } from "./SetInstanceModeOnDemand/req";
import { SetInstanceModeOnDemandResponse } from "./SetInstanceModeOnDemand/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { CheckAccessLogAuthRequest } from "./CheckAccessLogAuth/req";
import { CheckAccessLogAuthResponse } from "./CheckAccessLogAuth/res";
import { GetSlsOpenStatusRequest } from "./GetSlsOpenStatus/req";
import { GetSlsOpenStatusResponse } from "./GetSlsOpenStatus/res";
import { ListOpenedAccessLogInstancesRequest } from "./ListOpenedAccessLogInstances/req";
import { ListOpenedAccessLogInstancesResponse } from "./ListOpenedAccessLogInstances/res";
import { ReleaseDdosOriginInstanceRequest } from "./ReleaseDdosOriginInstance/req";
import { ReleaseDdosOriginInstanceResponse } from "./ReleaseDdosOriginInstance/res";
import { DescribeDdosOriginInstanceBillRequest } from "./DescribeDdosOriginInstanceBill/req";
import { DescribeDdosOriginInstanceBillResponse } from "./DescribeDdosOriginInstanceBill/res";
import { DescribeAssetGroupRequest } from "./DescribeAssetGroup/req";
import { DescribeAssetGroupResponse } from "./DescribeAssetGroup/res";
import { AttachAssetGroupToInstanceRequest } from "./AttachAssetGroupToInstance/req";
import { AttachAssetGroupToInstanceResponse } from "./AttachAssetGroupToInstance/res";
import { DescribeAssetGroupToInstanceRequest } from "./DescribeAssetGroupToInstance/req";
import { DescribeAssetGroupToInstanceResponse } from "./DescribeAssetGroupToInstance/res";
import { DettachAssetGroupToInstanceRequest } from "./DettachAssetGroupToInstance/req";
import { DettachAssetGroupToInstanceResponse } from "./DettachAssetGroupToInstance/res";
import { DescribeRdStatusRequest } from "./DescribeRdStatus/req";
import { DescribeRdStatusResponse } from "./DescribeRdStatus/res";
import { AddRdMemberListRequest } from "./AddRdMemberList/req";
import { AddRdMemberListResponse } from "./AddRdMemberList/res";
import { DeleteRdMemberListRequest } from "./DeleteRdMemberList/req";
import { DeleteRdMemberListResponse } from "./DeleteRdMemberList/res";
import { DescribeRdMemberListRequest } from "./DescribeRdMemberList/req";
import { DescribeRdMemberListResponse } from "./DescribeRdMemberList/res";
import { AttachToPolicyRequest } from "./AttachToPolicy/req";
import { AttachToPolicyResponse } from "./AttachToPolicy/res";
import { ListPolicyRequest } from "./ListPolicy/req";
import { ListPolicyResponse } from "./ListPolicy/res";
import { CreatePolicyRequest } from "./CreatePolicy/req";
import { CreatePolicyResponse } from "./CreatePolicy/res";
import { DetachFromPolicyRequest } from "./DetachFromPolicy/req";
import { DetachFromPolicyResponse } from "./DetachFromPolicy/res";
import { ListPolicyAttachmentRequest } from "./ListPolicyAttachment/req";
import { ListPolicyAttachmentResponse } from "./ListPolicyAttachment/res";
import { DeletePolicyRequest } from "./DeletePolicy/req";
import { DeletePolicyResponse } from "./DeletePolicy/res";
import { ModifyPolicyRequest } from "./ModifyPolicy/req";
import { ModifyPolicyResponse } from "./ModifyPolicy/res";
import { ModifyPolicyContentRequest } from "./ModifyPolicyContent/req";
import { ModifyPolicyContentResponse } from "./ModifyPolicyContent/res";

interface DDOSBGP {
    /**
     * 为DDoS原生防护企业版实例添加防护对象IP。
     */
    AddIp(query: AddIpRequest): Promise<AddIpResponse>;
    /**
     * 检查防护包服务的授权状态，即是否授权防护包查询ECS服务器信息。
     */
    CheckGrant(query: CheckGrantRequest): Promise<CheckGrantResponse>;
    /**
     * 修改代播实例的调度规则。
     */
    ConfigSchedruleOnDemand(query: ConfigSchedruleOnDemandRequest): Promise<ConfigSchedruleOnDemandResponse>;
    /**
     * 为单个受保护IP解除黑洞状态。
     */
    DeleteBlackhole(query: DeleteBlackholeRequest): Promise<DeleteBlackholeResponse>;
    /**
     * 为代播实例创建一条调度规则。
     */
    CreateSchedruleOnDemand(query: CreateSchedruleOnDemandRequest): Promise<CreateSchedruleOnDemandResponse>;
    /**
     * 将被防护IP从防护包中移除，取消防护。
     */
    DeleteIp(query: DeleteIpRequest): Promise<DeleteIpResponse>;
    /**
     * 删除代播实例的调度规则。
     */
    DeleteSchedruleOnDemand(query: DeleteSchedruleOnDemandRequest): Promise<DeleteSchedruleOnDemandResponse>;
    /**
     * 查询指定地域下，状态异常的公网IP资产的数量和即将过期的DDoS原生防护实例的数量。
     */
    DescribeExcpetionCount(query: DescribeExcpetionCountRequest): Promise<DescribeExcpetionCountResponse>;
    /**
     * 查询单个DDoS原生防护实例上发生的DDoS攻击事件详情。
     */
    DescribeDdosEvent(query: DescribeDdosEventRequest): Promise<DescribeDdosEventResponse>;
    /**
     * 查询DDoS原生防护实例的详情。
     */
    DescribeInstanceList(query: DescribeInstanceListRequest): Promise<DescribeInstanceListResponse>;
    /**
     * 查询指定的DDoS原生防护企业版实例的规格信息。
     */
    DescribeInstanceSpecs(query: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse>;
    /**
     * 查询DDoS防护代播IP上的DDoS事件记录。
     */
    DescribeOnDemandDdosEvent(query: DescribeOnDemandDdosEventRequest): Promise<DescribeOnDemandDdosEventResponse>;
    /**
     * 查询代播实例的详细信息。
     */
    DescribeOnDemandInstanceStatus(query: DescribeOnDemandInstanceStatusRequest): Promise<DescribeOnDemandInstanceStatusResponse>;
    /**
     * 查询DDoS原生防护的操作日志。
     */
    DescribeOpEntities(query: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse>;
    /**
     * 查询单个DDoS原生防护实例的防护IP列表。
     */
    DescribePackIpList(query: DescribePackIpListRequest): Promise<DescribePackIpListResponse>;
    /**
     * 查询DDoS原生防护企业版支持的所有地域信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询指定时间段内某个DDoS原生防护实例的流量统计数据。
     */
    DescribeTraffic(query: DescribeTrafficRequest): Promise<DescribeTrafficResponse>;
    /**
     * 查询所有标签。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 查询资源（DDoS原生防护实例）和标签的对应关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为单个DDoS原生防护实例设置备注。
     */
    ModifyRemark(query: ModifyRemarkRequest): Promise<ModifyRemarkResponse>;
    /**
     * 查询代播实例的调度规则。
     */
    QuerySchedruleOnDemand(query: QuerySchedruleOnDemandRequest): Promise<QuerySchedruleOnDemandResponse>;
    /**
     * 设置代播实例的调度模式。
     */
    SetInstanceModeOnDemand(query: SetInstanceModeOnDemandRequest): Promise<SetInstanceModeOnDemandResponse>;
    /**
     * 为指定资源（DDoS原生防护实例）绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 移除指定资源（DDoS原生防护实例）的标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询DDoS原生防护是否被授权访问阿里云日志服务。
     */
    CheckAccessLogAuth(query: CheckAccessLogAuthRequest): Promise<CheckAccessLogAuthResponse>;
    /**
     * 查询阿里云日志服务的开通状态。
     */
    GetSlsOpenStatus(query: GetSlsOpenStatusRequest): Promise<GetSlsOpenStatusResponse>;
    /**
     * 查询已开启日志分析的DDoS原生防护实例。
     */
    ListOpenedAccessLogInstances(query: ListOpenedAccessLogInstancesRequest): Promise<ListOpenedAccessLogInstancesResponse>;
    /**
     * 手动释放DDos防护包后付费全局实例。
     */
    ReleaseDdosOriginInstance(query: ReleaseDdosOriginInstanceRequest): Promise<ReleaseDdosOriginInstanceResponse>;
    /**
     * 查询DDos防护包后付费账单信息。
     */
    DescribeDdosOriginInstanceBill(query: DescribeDdosOriginInstanceBillRequest): Promise<DescribeDdosOriginInstanceBillResponse>;
    /**
     * 查询资产组和防护包实例绑定关系。
     */
    DescribeAssetGroup(query: DescribeAssetGroupRequest): Promise<DescribeAssetGroupResponse>;
    /**
     * 创建资产组和防护包实例绑定关系。
     */
    AttachAssetGroupToInstance(query: AttachAssetGroupToInstanceRequest): Promise<AttachAssetGroupToInstanceResponse>;
    /**
     * 查询资产组和防护包实例绑定关系。
     */
    DescribeAssetGroupToInstance(query: DescribeAssetGroupToInstanceRequest): Promise<DescribeAssetGroupToInstanceResponse>;
    /**
     * 删除资产组和防护包实例绑定关系。
     */
    DettachAssetGroupToInstance(query: DettachAssetGroupToInstanceRequest): Promise<DettachAssetGroupToInstanceResponse>;
    /**
     * 查询多账号管理状态。
     */
    DescribeRdStatus(query: DescribeRdStatusRequest): Promise<DescribeRdStatusResponse>;
    /**
     * 添加成员账号。
     */
    AddRdMemberList(query: AddRdMemberListRequest): Promise<AddRdMemberListResponse>;
    /**
     * 删除成员账号。
     */
    DeleteRdMemberList(query: DeleteRdMemberListRequest): Promise<DeleteRdMemberListResponse>;
    /**
     * 查询已添加的成员账号。
     */
    DescribeRdMemberList(query: DescribeRdMemberListRequest): Promise<DescribeRdMemberListResponse>;
    /**
     * 防护对象关联防护策略。
     */
    AttachToPolicy(query: AttachToPolicyRequest): Promise<AttachToPolicyResponse>;
    /**
     * 查询防护策略。
     */
    ListPolicy(query: ListPolicyRequest): Promise<ListPolicyResponse>;
    /**
     * 创建防护策略。
     */
    CreatePolicy(query: CreatePolicyRequest): Promise<CreatePolicyResponse>;
    /**
     * 防护对象取消关联防护策略。
     */
    DetachFromPolicy(query: DetachFromPolicyRequest): Promise<DetachFromPolicyResponse>;
    /**
     * 查询防护策略关联关系。
     */
    ListPolicyAttachment(query: ListPolicyAttachmentRequest): Promise<ListPolicyAttachmentResponse>;
    /**
     * 删除防护策略。
     */
    DeletePolicy(query: DeletePolicyRequest): Promise<DeletePolicyResponse>;
    /**
     * 修改防护策略。
     */
    ModifyPolicy(query: ModifyPolicyRequest): Promise<ModifyPolicyResponse>;
    /**
     * 修改防护策略内容。
     */
    ModifyPolicyContent(query: ModifyPolicyContentRequest): Promise<ModifyPolicyContentResponse>;
}
export default DDOSBGP;
