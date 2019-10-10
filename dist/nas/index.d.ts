import { DescribeSnapshotsRequest } from "./DescribeSnapshots/req";
import { DescribeSnapshotsResponse } from "./DescribeSnapshots/res";
import { CreateAutoSnapshotPolicyRequest } from "./CreateAutoSnapshotPolicy/req";
import { CreateAutoSnapshotPolicyResponse } from "./CreateAutoSnapshotPolicy/res";
import { CreateAccessRuleRequest } from "./CreateAccessRule/req";
import { CreateAccessRuleResponse } from "./CreateAccessRule/res";
import { DeleteAccessRuleRequest } from "./DeleteAccessRule/req";
import { DeleteAccessRuleResponse } from "./DeleteAccessRule/res";
import { CreateAccessGroupRequest } from "./CreateAccessGroup/req";
import { CreateAccessGroupResponse } from "./CreateAccessGroup/res";
import { ModifyFileSystemRequest } from "./ModifyFileSystem/req";
import { ModifyFileSystemResponse } from "./ModifyFileSystem/res";
import { DeleteMountTargetRequest } from "./DeleteMountTarget/req";
import { DeleteMountTargetResponse } from "./DeleteMountTarget/res";
import { ModifyAccessGroupRequest } from "./ModifyAccessGroup/req";
import { ModifyAccessGroupResponse } from "./ModifyAccessGroup/res";
import { ModifyAccessRuleRequest } from "./ModifyAccessRule/req";
import { ModifyAccessRuleResponse } from "./ModifyAccessRule/res";
import { ApplyAutoSnapshotPolicyRequest } from "./ApplyAutoSnapshotPolicy/req";
import { ApplyAutoSnapshotPolicyResponse } from "./ApplyAutoSnapshotPolicy/res";
import { ResetFileSystemRequest } from "./ResetFileSystem/req";
import { ResetFileSystemResponse } from "./ResetFileSystem/res";
import { DescribeAccessGroupsRequest } from "./DescribeAccessGroups/req";
import { DescribeAccessGroupsResponse } from "./DescribeAccessGroups/res";
import { CreateSnapshotRequest } from "./CreateSnapshot/req";
import { CreateSnapshotResponse } from "./CreateSnapshot/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { DescribeAccessRulesRequest } from "./DescribeAccessRules/req";
import { DescribeAccessRulesResponse } from "./DescribeAccessRules/res";
import { DescribeMountTargetsRequest } from "./DescribeMountTargets/req";
import { DescribeMountTargetsResponse } from "./DescribeMountTargets/res";
import { ModifyMountTargetRequest } from "./ModifyMountTarget/req";
import { ModifyMountTargetResponse } from "./ModifyMountTarget/res";
import { CreateMountTargetRequest } from "./CreateMountTarget/req";
import { CreateMountTargetResponse } from "./CreateMountTarget/res";
import { CreateFileSystemRequest } from "./CreateFileSystem/req";
import { CreateFileSystemResponse } from "./CreateFileSystem/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { CancelAutoSnapshotPolicyRequest } from "./CancelAutoSnapshotPolicy/req";
import { CancelAutoSnapshotPolicyResponse } from "./CancelAutoSnapshotPolicy/res";
import { DeleteFileSystemRequest } from "./DeleteFileSystem/req";
import { DeleteFileSystemResponse } from "./DeleteFileSystem/res";
import { DescribeFileSystemsRequest } from "./DescribeFileSystems/req";
import { DescribeFileSystemsResponse } from "./DescribeFileSystems/res";
import { DeleteAutoSnapshotPolicyRequest } from "./DeleteAutoSnapshotPolicy/req";
import { DeleteAutoSnapshotPolicyResponse } from "./DeleteAutoSnapshotPolicy/res";
import { DeleteAccessGroupRequest } from "./DeleteAccessGroup/req";
import { DeleteAccessGroupResponse } from "./DeleteAccessGroup/res";
import { DeleteSnapshotRequest } from "./DeleteSnapshot/req";
import { DeleteSnapshotResponse } from "./DeleteSnapshot/res";
import { ModifyAutoSnapshotPolicyRequest } from "./ModifyAutoSnapshotPolicy/req";
import { ModifyAutoSnapshotPolicyResponse } from "./ModifyAutoSnapshotPolicy/res";
import { DescribeAutoSnapshotPoliciesRequest } from "./DescribeAutoSnapshotPolicies/req";
import { DescribeAutoSnapshotPoliciesResponse } from "./DescribeAutoSnapshotPolicies/res";
import { AddTagsRequest } from "./AddTags/req";
import { AddTagsResponse } from "./AddTags/res";
import { RemoveTagsRequest } from "./RemoveTags/req";
import { RemoveTagsResponse } from "./RemoveTags/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { AddClientToBlackListRequest } from "./AddClientToBlackList/req";
import { AddClientToBlackListResponse } from "./AddClientToBlackList/res";
import { DeleteLDAPConfigRequest } from "./DeleteLDAPConfig/req";
import { DeleteLDAPConfigResponse } from "./DeleteLDAPConfig/res";
import { DescribeBlackListClientsRequest } from "./DescribeBlackListClients/req";
import { DescribeBlackListClientsResponse } from "./DescribeBlackListClients/res";
import { DescribeLDAPConfigRequest } from "./DescribeLDAPConfig/req";
import { DescribeLDAPConfigResponse } from "./DescribeLDAPConfig/res";
import { RemoveClientFromBlackListRequest } from "./RemoveClientFromBlackList/req";
import { RemoveClientFromBlackListResponse } from "./RemoveClientFromBlackList/res";
import { CreateLDAPConfigRequest } from "./CreateLDAPConfig/req";
import { CreateLDAPConfigResponse } from "./CreateLDAPConfig/res";
import { ModifyLDAPConfigRequest } from "./ModifyLDAPConfig/req";
import { ModifyLDAPConfigResponse } from "./ModifyLDAPConfig/res";
import { DescribeAutoSnapshotTasksRequest } from "./DescribeAutoSnapshotTasks/req";
import { DescribeAutoSnapshotTasksResponse } from "./DescribeAutoSnapshotTasks/res";

interface NAS {
    /**
    * DescribeSnapshots 用于查询一个文件系统所有的快照列表。
    */ DescribeSnapshots(query: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse>;
    /**
    * CreateAutoSnapshotPolicy 用于创建一条自动快照策略。创建的自动快照策略可以应用到任一文件系统（ApplyAutoSnapshotPolicy），成功创建的自动快照策略可以后续修改策略内容（ModifyAutoSnapshotPolicies）。
    */ CreateAutoSnapshotPolicy(query: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse>;
    /**
    * CreateAccessRule用于创建权限规则。
    */ CreateAccessRule(query: CreateAccessRuleRequest): Promise<CreateAccessRuleResponse>;
    /**
    * DeleteAccessRule用于删除已有权限规则。
    */ DeleteAccessRule(query: DeleteAccessRuleRequest): Promise<DeleteAccessRuleResponse>;
    /**
    * CreateAccessGroup用于创建权限组。
    */ CreateAccessGroup(query: CreateAccessGroupRequest): Promise<CreateAccessGroupResponse>;
    /**
    * ModifyFileSystem用于修改文件系统的信息。
    */ ModifyFileSystem(query: ModifyFileSystemRequest): Promise<ModifyFileSystemResponse>;
    /**
    * DeleteMountTarget 用于删除已有挂载点。
    */ DeleteMountTarget(query: DeleteMountTargetRequest): Promise<DeleteMountTargetResponse>;
    /**
    * ModifyAccessGroup用于修改权限组。
    */ ModifyAccessGroup(query: ModifyAccessGroupRequest): Promise<ModifyAccessGroupResponse>;
    /**
    * ModifyAccessRule用于修改权限规则。
    */ ModifyAccessRule(query: ModifyAccessRuleRequest): Promise<ModifyAccessRuleResponse>;
    /**
    * ApplyAutoSnapshotPolicy 用于为一个或者多个文件系统应用自动快照策略。目标文件系统已经应用了自动快照策略时，调用 ApplyAutoSnapshotPolicy 可以更换文件系统当前应用的自动快照策略。
    */ ApplyAutoSnapshotPolicy(query: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse>;
    /**
    * 使用文件系统的历史快照回滚至某一阶段的文件系统状态。
    */ ResetFileSystem(query: ResetFileSystemRequest): Promise<ResetFileSystemResponse>;
    /**
    * DescribeAccessGroups用于返回权限组描述信息。
    */ DescribeAccessGroups(query: DescribeAccessGroupsRequest): Promise<DescribeAccessGroupsResponse>;
    /**
    * CreateSnapshot 用于创建快照。
    */ CreateSnapshot(query: CreateSnapshotRequest): Promise<CreateSnapshotResponse>;
    /**
    * DescribeZones用于查询某个 Region 下的所有可用区及可用区所支持的 NAS 类型。
    */ DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
    * DescribeAccessRules用于返回权限规则描述。
    */ DescribeAccessRules(query: DescribeAccessRulesRequest): Promise<DescribeAccessRulesResponse>;
    /**
    * DescribeMountTargets用于返回挂载点描述信息。
    */ DescribeMountTargets(query: DescribeMountTargetsRequest): Promise<DescribeMountTargetsResponse>;
    /**
    * ModifyMountTarget用于修改挂载点信息。
    */ ModifyMountTarget(query: ModifyMountTargetRequest): Promise<ModifyMountTargetResponse>;
    /**
    * CreateMountTarget用于创建挂载点。
    */ CreateMountTarget(query: CreateMountTargetRequest): Promise<CreateMountTargetResponse>;
    /**
    * CreateFileSystem用于创建新的文件系统。
    */ CreateFileSystem(query: CreateFileSystemRequest): Promise<CreateFileSystemResponse>;
    /**
    * DescribeRegions用于返回所有 RegionId。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * CancelAutoSnapshotPolicy 用于取消一个或者多个文件系统的自动快照策略。
    */ CancelAutoSnapshotPolicy(query: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse>;
    /**
    * DeleteFileSystem用于删除已有的文件系统。
    */ DeleteFileSystem(query: DeleteFileSystemRequest): Promise<DeleteFileSystemResponse>;
    /**
    * DescribeFileSystems用于返回文件系统的描述信息。
    */ DescribeFileSystems(query: DescribeFileSystemsRequest): Promise<DescribeFileSystemsResponse>;
    /**
    * DeleteAutoSnapshotPolicy 用于删除一条自动快照策略。如果目标自动快照策略已经被应用到文件系统上，删除自动快照策略后，这些文件系统不再执行该策略。
    */ DeleteAutoSnapshotPolicy(query: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse>;
    /**
    * DeleteAccessGroup用于删除已有权限组。
    */ DeleteAccessGroup(query: DeleteAccessGroupRequest): Promise<DeleteAccessGroupResponse>;
    /**
    * DeleteSnapshot用于删除指定的快照。如果需要取消正在创建的快照，也可以调用该接口删除快照，即取消创建快照任务。
    */ DeleteSnapshot(query: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse>;
    /**
    * ModifyAutoSnapshotPolicy 用于修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的文件系统随即执行修改后的自动快照策略。
    */ ModifyAutoSnapshotPolicy(query: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse>;
    /**
    * DescribeAutoSnapshotPolicies 用于查询您已创建的自动快照策略。
    */ DescribeAutoSnapshotPolicies(query: DescribeAutoSnapshotPoliciesRequest): Promise<DescribeAutoSnapshotPoliciesResponse>;
    /**
    * 添加或者覆盖一个或者多个标签到一个文件系统实例。
    */ AddTags(query: AddTagsRequest): Promise<AddTagsResponse>;
    /**
    * 从一个文件系统实例上解绑一个或多个标签。
    */ RemoveTags(query: RemoveTagsRequest): Promise<RemoveTagsResponse>;
    /**
    * 查询已有标签。
    */ DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    AddClientToBlackList(query: AddClientToBlackListRequest): Promise<AddClientToBlackListResponse>;
    DeleteLDAPConfig(query: DeleteLDAPConfigRequest): Promise<DeleteLDAPConfigResponse>;
    DescribeBlackListClients(query: DescribeBlackListClientsRequest): Promise<DescribeBlackListClientsResponse>;
    DescribeLDAPConfig(query: DescribeLDAPConfigRequest): Promise<DescribeLDAPConfigResponse>;
    RemoveClientFromBlackList(query: RemoveClientFromBlackListRequest): Promise<RemoveClientFromBlackListResponse>;
    CreateLDAPConfig(query: CreateLDAPConfigRequest): Promise<CreateLDAPConfigResponse>;
    ModifyLDAPConfig(query: ModifyLDAPConfigRequest): Promise<ModifyLDAPConfigResponse>;
    DescribeAutoSnapshotTasks(query: DescribeAutoSnapshotTasksRequest): Promise<DescribeAutoSnapshotTasksResponse>;
}
export default NAS;
