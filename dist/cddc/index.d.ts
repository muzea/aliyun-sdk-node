import { ModifyDedicatedHostAccountRequest } from "./ModifyDedicatedHostAccount/req";
import { ModifyDedicatedHostAccountResponse } from "./ModifyDedicatedHostAccount/res";
import { CreateDedicatedHostAccountRequest } from "./CreateDedicatedHostAccount/req";
import { CreateDedicatedHostAccountResponse } from "./CreateDedicatedHostAccount/res";
import { CreateDedicatedHostRequest } from "./CreateDedicatedHost/req";
import { CreateDedicatedHostResponse } from "./CreateDedicatedHost/res";
import { CreateDedicatedHostGroupRequest } from "./CreateDedicatedHostGroup/req";
import { CreateDedicatedHostGroupResponse } from "./CreateDedicatedHostGroup/res";
import { DeleteDedicatedHostAccountRequest } from "./DeleteDedicatedHostAccount/req";
import { DeleteDedicatedHostAccountResponse } from "./DeleteDedicatedHostAccount/res";
import { DeleteDedicatedHostGroupRequest } from "./DeleteDedicatedHostGroup/req";
import { DeleteDedicatedHostGroupResponse } from "./DeleteDedicatedHostGroup/res";
import { DescribeDedicatedHostAttributeRequest } from "./DescribeDedicatedHostAttribute/req";
import { DescribeDedicatedHostAttributeResponse } from "./DescribeDedicatedHostAttribute/res";
import { DescribeDedicatedHostGroupsRequest } from "./DescribeDedicatedHostGroups/req";
import { DescribeDedicatedHostGroupsResponse } from "./DescribeDedicatedHostGroups/res";
import { DescribeDedicatedHostsRequest } from "./DescribeDedicatedHosts/req";
import { DescribeDedicatedHostsResponse } from "./DescribeDedicatedHosts/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ModifyDedicatedHostAttributeRequest } from "./ModifyDedicatedHostAttribute/req";
import { ModifyDedicatedHostAttributeResponse } from "./ModifyDedicatedHostAttribute/res";
import { ModifyDedicatedHostGroupAttributeRequest } from "./ModifyDedicatedHostGroupAttribute/req";
import { ModifyDedicatedHostGroupAttributeResponse } from "./ModifyDedicatedHostGroupAttribute/res";
import { QueryHostBaseInfoByInstanceRequest } from "./QueryHostBaseInfoByInstance/req";
import { QueryHostBaseInfoByInstanceResponse } from "./QueryHostBaseInfoByInstance/res";
import { ReplaceDedicatedHostRequest } from "./ReplaceDedicatedHost/req";
import { ReplaceDedicatedHostResponse } from "./ReplaceDedicatedHost/res";
import { QueryHostInstanceConsoleInfoRequest } from "./QueryHostInstanceConsoleInfo/req";
import { QueryHostInstanceConsoleInfoResponse } from "./QueryHostInstanceConsoleInfo/res";
import { RestartDedicatedHostRequest } from "./RestartDedicatedHost/req";
import { RestartDedicatedHostResponse } from "./RestartDedicatedHost/res";
import { DescribeDedicatedHostDisksRequest } from "./DescribeDedicatedHostDisks/req";
import { DescribeDedicatedHostDisksResponse } from "./DescribeDedicatedHostDisks/res";
import { DescribeHostEcsLevelInfoRequest } from "./DescribeHostEcsLevelInfo/req";
import { DescribeHostEcsLevelInfoResponse } from "./DescribeHostEcsLevelInfo/res";
import { DescribeHostWebShellRequest } from "./DescribeHostWebShell/req";
import { DescribeHostWebShellResponse } from "./DescribeHostWebShell/res";
import { ModifyDedicatedHostClassRequest } from "./ModifyDedicatedHostClass/req";
import { ModifyDedicatedHostClassResponse } from "./ModifyDedicatedHostClass/res";
import { ModifyDedicatedHostPasswordRequest } from "./ModifyDedicatedHostPassword/req";
import { ModifyDedicatedHostPasswordResponse } from "./ModifyDedicatedHostPassword/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { CreateMyBaseRequest } from "./CreateMyBase/req";
import { CreateMyBaseResponse } from "./CreateMyBase/res";

interface CDDC {
    /**
     * 调用ModifyDedicatedHostAccount接口修改主机账号和密码。
     */
    ModifyDedicatedHostAccount(query: ModifyDedicatedHostAccountRequest): Promise<ModifyDedicatedHostAccountResponse>;
    /**
     * 调用CreateDedicatedHostAccount接口创建主机账号。
     */
    CreateDedicatedHostAccount(query: CreateDedicatedHostAccountRequest): Promise<CreateDedicatedHostAccountResponse>;
    /**
     * 调用CreateDedicatedHost接口添加专属集群主机。
     */
    CreateDedicatedHost(query: CreateDedicatedHostRequest): Promise<CreateDedicatedHostResponse>;
    /**
     * 调用CreateDedicatedHostGroup接口创建专属集群。
     */
    CreateDedicatedHostGroup(query: CreateDedicatedHostGroupRequest): Promise<CreateDedicatedHostGroupResponse>;
    /**
     * 调用DeleteDedicatedHostAccount接口删除主机账号。
     */
    DeleteDedicatedHostAccount(query: DeleteDedicatedHostAccountRequest): Promise<DeleteDedicatedHostAccountResponse>;
    /**
     * 调用DeleteDedicatedHostGroup接口删除专属集群。
     */
    DeleteDedicatedHostGroup(query: DeleteDedicatedHostGroupRequest): Promise<DeleteDedicatedHostGroupResponse>;
    /**
     * 调用DescribeDedicatedHostAttribute接口查询专属集群某个主机的参数信息。
     */
    DescribeDedicatedHostAttribute(query: DescribeDedicatedHostAttributeRequest): Promise<DescribeDedicatedHostAttributeResponse>;
    /**
     * 查询专有集群主机组信息。
     */
    DescribeDedicatedHostGroups(query: DescribeDedicatedHostGroupsRequest): Promise<DescribeDedicatedHostGroupsResponse>;
    /**
     * 可以来查询专属集群的主机信息。
     */
    DescribeDedicatedHosts(query: DescribeDedicatedHostsRequest): Promise<DescribeDedicatedHostsResponse>;
    /**
     * 调用DescribeRegions接口查看地域ID。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用ModifyDedicatedHostAttribute接口设置专属集群的主机是否允许分配实例。
     */
    ModifyDedicatedHostAttribute(query: ModifyDedicatedHostAttributeRequest): Promise<ModifyDedicatedHostAttributeResponse>;
    /**
     * 可修改的配置包括 CPU 超配比、内存使用率、空间超配比、资源分布策略等。
     */
    ModifyDedicatedHostGroupAttribute(query: ModifyDedicatedHostGroupAttributeRequest): Promise<ModifyDedicatedHostGroupAttributeResponse>;
    /**
     * 调用QueryHostBaseInfoByInstance接口查询实例所在主机基本信息。
     */
    QueryHostBaseInfoByInstance(query: QueryHostBaseInfoByInstanceRequest): Promise<QueryHostBaseInfoByInstanceResponse>;
    /**
     * 调用ReplaceDedicatedHost接口替换专属集群的主机。
     */
    ReplaceDedicatedHost(query: ReplaceDedicatedHostRequest): Promise<ReplaceDedicatedHostResponse>;
    /**
     * 调用QueryHostInstanceConsoleInfo接口查询主机实例节点列表。
     */
    QueryHostInstanceConsoleInfo(query: QueryHostInstanceConsoleInfoRequest): Promise<QueryHostInstanceConsoleInfoResponse>;
    /**
     * 调用RestartDedicatedHost接口重启专属集群的主机。
     */
    RestartDedicatedHost(query: RestartDedicatedHostRequest): Promise<RestartDedicatedHostResponse>;
    /**
     * 调用DescribeDedicatedHostDisks接口查询主机上的磁盘信息。
     */
    DescribeDedicatedHostDisks(query: DescribeDedicatedHostDisksRequest): Promise<DescribeDedicatedHostDisksResponse>;
    /**
     * 调用DescribeHostEcsLevelInfo查询主机规格详细信息。
     */
    DescribeHostEcsLevelInfo(query: DescribeHostEcsLevelInfoRequest): Promise<DescribeHostEcsLevelInfoResponse>;
    /**
     * 调用DescribeHostWebShell接口获取专属集群主机Webshell登录地址。
     */
    DescribeHostWebShell(query: DescribeHostWebShellRequest): Promise<DescribeHostWebShellResponse>;
    /**
     * 调用ModifyDedicatedHostClass接口升配主机的规格。
     */
    ModifyDedicatedHostClass(query: ModifyDedicatedHostClassRequest): Promise<ModifyDedicatedHostClassResponse>;
    /**
     * 调用ModifyDedicatedHostPassword接口修改主机root密码。
     */
    ModifyDedicatedHostPassword(query: ModifyDedicatedHostPasswordRequest): Promise<ModifyDedicatedHostPasswordResponse>;
    /**
     * 将主机的标签解绑。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询主机和标签的绑定关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为一个或多个主机绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 创建MyBase专有版主机，如未提供集群信息会自动创建MyBase专有版集群。
     */
    CreateMyBase(query: CreateMyBaseRequest): Promise<CreateMyBaseResponse>;
}
export default CDDC;
