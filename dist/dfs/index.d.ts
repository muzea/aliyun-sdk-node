import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { CreateFileSystemRequest } from "./CreateFileSystem/req";
import { CreateFileSystemResponse } from "./CreateFileSystem/res";
import { DeleteFileSystemRequest } from "./DeleteFileSystem/req";
import { DeleteFileSystemResponse } from "./DeleteFileSystem/res";
import { ModifyFileSystemRequest } from "./ModifyFileSystem/req";
import { ModifyFileSystemResponse } from "./ModifyFileSystem/res";
import { GetFileSystemRequest } from "./GetFileSystem/req";
import { GetFileSystemResponse } from "./GetFileSystem/res";
import { ListFileSystemsRequest } from "./ListFileSystems/req";
import { ListFileSystemsResponse } from "./ListFileSystems/res";
import { CreateAccessGroupRequest } from "./CreateAccessGroup/req";
import { CreateAccessGroupResponse } from "./CreateAccessGroup/res";
import { DeleteAccessGroupRequest } from "./DeleteAccessGroup/req";
import { DeleteAccessGroupResponse } from "./DeleteAccessGroup/res";
import { ModifyAccessGroupRequest } from "./ModifyAccessGroup/req";
import { ModifyAccessGroupResponse } from "./ModifyAccessGroup/res";
import { GetAccessGroupRequest } from "./GetAccessGroup/req";
import { GetAccessGroupResponse } from "./GetAccessGroup/res";
import { ListAccessGroupsRequest } from "./ListAccessGroups/req";
import { ListAccessGroupsResponse } from "./ListAccessGroups/res";
import { CreateAccessRuleRequest } from "./CreateAccessRule/req";
import { CreateAccessRuleResponse } from "./CreateAccessRule/res";
import { DeleteAccessRuleRequest } from "./DeleteAccessRule/req";
import { DeleteAccessRuleResponse } from "./DeleteAccessRule/res";
import { ModifyAccessRuleRequest } from "./ModifyAccessRule/req";
import { ModifyAccessRuleResponse } from "./ModifyAccessRule/res";
import { GetAccessRuleRequest } from "./GetAccessRule/req";
import { GetAccessRuleResponse } from "./GetAccessRule/res";
import { ListAccessRulesRequest } from "./ListAccessRules/req";
import { ListAccessRulesResponse } from "./ListAccessRules/res";
import { CreateMountPointRequest } from "./CreateMountPoint/req";
import { CreateMountPointResponse } from "./CreateMountPoint/res";
import { DeleteMountPointRequest } from "./DeleteMountPoint/req";
import { DeleteMountPointResponse } from "./DeleteMountPoint/res";
import { ModifyMountPointRequest } from "./ModifyMountPoint/req";
import { ModifyMountPointResponse } from "./ModifyMountPoint/res";
import { ListMountPointsRequest } from "./ListMountPoints/req";
import { ListMountPointsResponse } from "./ListMountPoints/res";
import { GetMountPointRequest } from "./GetMountPoint/req";
import { GetMountPointResponse } from "./GetMountPoint/res";
import { AttachVscMountPointRequest } from "./AttachVscMountPoint/req";
import { AttachVscMountPointResponse } from "./AttachVscMountPoint/res";
import { BindVscMountPointAliasRequest } from "./BindVscMountPointAlias/req";
import { BindVscMountPointAliasResponse } from "./BindVscMountPointAlias/res";
import { CreateVscMountPointRequest } from "./CreateVscMountPoint/req";
import { CreateVscMountPointResponse } from "./CreateVscMountPoint/res";
import { DeleteVscMountPointRequest } from "./DeleteVscMountPoint/req";
import { DeleteVscMountPointResponse } from "./DeleteVscMountPoint/res";
import { DescribeVscMountPointsRequest } from "./DescribeVscMountPoints/req";
import { DescribeVscMountPointsResponse } from "./DescribeVscMountPoints/res";
import { DetachVscMountPointRequest } from "./DetachVscMountPoint/req";
import { DetachVscMountPointResponse } from "./DetachVscMountPoint/res";
import { GetRegionRequest } from "./GetRegion/req";
import { GetRegionResponse } from "./GetRegion/res";
import { CreateUserGroupsMappingRequest } from "./CreateUserGroupsMapping/req";
import { CreateUserGroupsMappingResponse } from "./CreateUserGroupsMapping/res";
import { DeleteUserGroupsMappingRequest } from "./DeleteUserGroupsMapping/req";
import { DeleteUserGroupsMappingResponse } from "./DeleteUserGroupsMapping/res";
import { ListUserGroupsMappingsRequest } from "./ListUserGroupsMappings/req";
import { ListUserGroupsMappingsResponse } from "./ListUserGroupsMappings/res";

interface DFS {
    /**
     * 查询您可以使用的阿里云地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 创建文件系统。
     */
    CreateFileSystem(query: CreateFileSystemRequest): Promise<CreateFileSystemResponse>;
    /**
     * 删除已有的文件系统。
     */
    DeleteFileSystem(query: DeleteFileSystemRequest): Promise<DeleteFileSystemResponse>;
    /**
     * 修改文件系统属性。
     */
    ModifyFileSystem(query: ModifyFileSystemRequest): Promise<ModifyFileSystemResponse>;
    /**
     * 查询文件系统信息。
     */
    GetFileSystem(query: GetFileSystemRequest): Promise<GetFileSystemResponse>;
    /**
     * 批量获取文件系统详细信息。
     */
    ListFileSystems(query: ListFileSystemsRequest): Promise<ListFileSystemsResponse>;
    /**
     * 创建一个权限组。
     */
    CreateAccessGroup(query: CreateAccessGroupRequest): Promise<CreateAccessGroupResponse>;
    /**
     * 删除一个权限组。
     */
    DeleteAccessGroup(query: DeleteAccessGroupRequest): Promise<DeleteAccessGroupResponse>;
    /**
     * 修改一个权限组信息。
     */
    ModifyAccessGroup(query: ModifyAccessGroupRequest): Promise<ModifyAccessGroupResponse>;
    /**
     * 获取权限组信息。
     */
    GetAccessGroup(query: GetAccessGroupRequest): Promise<GetAccessGroupResponse>;
    /**
     * 批量查询权限组详细信息。
     */
    ListAccessGroups(query: ListAccessGroupsRequest): Promise<ListAccessGroupsResponse>;
    /**
     * 创建权限组规则。
     */
    CreateAccessRule(query: CreateAccessRuleRequest): Promise<CreateAccessRuleResponse>;
    /**
     * 删除一个权限组规则。
     */
    DeleteAccessRule(query: DeleteAccessRuleRequest): Promise<DeleteAccessRuleResponse>;
    /**
     * 修改一个权限组规则。
     */
    ModifyAccessRule(query: ModifyAccessRuleRequest): Promise<ModifyAccessRuleResponse>;
    /**
     * 查询权限组规则信息。
     */
    GetAccessRule(query: GetAccessRuleRequest): Promise<GetAccessRuleResponse>;
    /**
     * 批量查询权限组规则。
     */
    ListAccessRules(query: ListAccessRulesRequest): Promise<ListAccessRulesResponse>;
    /**
     * 创建一个挂载点。
     */
    CreateMountPoint(query: CreateMountPointRequest): Promise<CreateMountPointResponse>;
    /**
     * 删除一个挂载点。
     */
    DeleteMountPoint(query: DeleteMountPointRequest): Promise<DeleteMountPointResponse>;
    /**
     * 修改一个挂载点信息。
     */
    ModifyMountPoint(query: ModifyMountPointRequest): Promise<ModifyMountPointResponse>;
    /**
     * 批量查询挂载点信息。
     */
    ListMountPoints(query: ListMountPointsRequest): Promise<ListMountPointsResponse>;
    /**
     * 查询一个挂载点信息。
     */
    GetMountPoint(query: GetMountPointRequest): Promise<GetMountPointResponse>;
    /**
     * 为挂载点添加计算实例。
     */
    AttachVscMountPoint(query: AttachVscMountPointRequest): Promise<AttachVscMountPointResponse>;
    /**
     * 为文件系统绑定VSC挂载点别名。
     */
    BindVscMountPointAlias(query: BindVscMountPointAliasRequest): Promise<BindVscMountPointAliasResponse>;
    /**
     * 创建一个VSC挂载点。
     */
    CreateVscMountPoint(query: CreateVscMountPointRequest): Promise<CreateVscMountPointResponse>;
    /**
     * 删除已存在的VSC挂载点。
     */
    DeleteVscMountPoint(query: DeleteVscMountPointRequest): Promise<DeleteVscMountPointResponse>;
    /**
     * 获取VSC挂载点信息列表。
     */
    DescribeVscMountPoints(query: DescribeVscMountPointsRequest): Promise<DescribeVscMountPointsResponse>;
    /**
     * 为挂载点解绑计算实例。
     */
    DetachVscMountPoint(query: DetachVscMountPointRequest): Promise<DetachVscMountPointResponse>;
    /**
     * 查询指定地域下每个可用区的配置信息。
     */
    GetRegion(query: GetRegionRequest): Promise<GetRegionResponse>;
    /**
     * 创建文件存储 HDFS 版文件系统实例的用户和组的映射关系。
     */
    CreateUserGroupsMapping(query: CreateUserGroupsMappingRequest): Promise<CreateUserGroupsMappingResponse>;
    /**
     * 删除文件存储 HDFS 版文件系统实例的用户和组的映射关系。
     */
    DeleteUserGroupsMapping(query: DeleteUserGroupsMappingRequest): Promise<DeleteUserGroupsMappingResponse>;
    /**
     * 查看文件存储 HDFS 版文件系统实例的用户和组的映射关系	。
     */
    ListUserGroupsMappings(query: ListUserGroupsMappingsRequest): Promise<ListUserGroupsMappingsResponse>;
}
export default DFS;
