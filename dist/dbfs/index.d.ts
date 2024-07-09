import { CreateDbfsRequest } from "./CreateDbfs/req";
import { CreateDbfsResponse } from "./CreateDbfs/res";
import { AttachDbfsRequest } from "./AttachDbfs/req";
import { AttachDbfsResponse } from "./AttachDbfs/res";
import { DetachDbfsRequest } from "./DetachDbfs/req";
import { DetachDbfsResponse } from "./DetachDbfs/res";
import { DeleteDbfsRequest } from "./DeleteDbfs/req";
import { DeleteDbfsResponse } from "./DeleteDbfs/res";
import { ListDbfsRequest } from "./ListDbfs/req";
import { ListDbfsResponse } from "./ListDbfs/res";
import { GetDbfsRequest } from "./GetDbfs/req";
import { GetDbfsResponse } from "./GetDbfs/res";
import { RenameDbfsRequest } from "./RenameDbfs/req";
import { RenameDbfsResponse } from "./RenameDbfs/res";
import { ResizeDbfsRequest } from "./ResizeDbfs/req";
import { ResizeDbfsResponse } from "./ResizeDbfs/res";
import { ListDbfsAttachableEcsInstancesRequest } from "./ListDbfsAttachableEcsInstances/req";
import { ListDbfsAttachableEcsInstancesResponse } from "./ListDbfsAttachableEcsInstances/res";
import { ListDbfsAttachedEcsInstancesRequest } from "./ListDbfsAttachedEcsInstances/req";
import { ListDbfsAttachedEcsInstancesResponse } from "./ListDbfsAttachedEcsInstances/res";
import { CreateSnapshotRequest } from "./CreateSnapshot/req";
import { CreateSnapshotResponse } from "./CreateSnapshot/res";
import { DeleteSnapshotRequest } from "./DeleteSnapshot/req";
import { DeleteSnapshotResponse } from "./DeleteSnapshot/res";
import { ListSnapshotRequest } from "./ListSnapshot/req";
import { ListSnapshotResponse } from "./ListSnapshot/res";
import { TagDbfsRequest } from "./TagDbfs/req";
import { TagDbfsResponse } from "./TagDbfs/res";
import { AddTagsBatchRequest } from "./AddTagsBatch/req";
import { AddTagsBatchResponse } from "./AddTagsBatch/res";
import { DeleteTagsBatchRequest } from "./DeleteTagsBatch/req";
import { DeleteTagsBatchResponse } from "./DeleteTagsBatch/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { CreateServiceLinkedRoleRequest } from "./CreateServiceLinkedRole/req";
import { CreateServiceLinkedRoleResponse } from "./CreateServiceLinkedRole/res";
import { GetServiceLinkedRoleRequest } from "./GetServiceLinkedRole/req";
import { GetServiceLinkedRoleResponse } from "./GetServiceLinkedRole/res";
import { OpreateConstantsRequest } from "./OpreateConstants/req";
import { OpreateConstantsResponse } from "./OpreateConstants/res";
import { GenerateUpgradeRecordRequest } from "./GenerateUpgradeRecord/req";
import { GenerateUpgradeRecordResponse } from "./GenerateUpgradeRecord/res";
import { PublishUpgradeTaskRequest } from "./PublishUpgradeTask/req";
import { PublishUpgradeTaskResponse } from "./PublishUpgradeTask/res";
import { DbfsRecordRequest } from "./DbfsRecord/req";
import { DbfsRecordResponse } from "./DbfsRecord/res";
import { StopUpgradeTaskRequest } from "./StopUpgradeTask/req";
import { StopUpgradeTaskResponse } from "./StopUpgradeTask/res";
import { CreateConstantsRequest } from "./CreateConstants/req";
import { CreateConstantsResponse } from "./CreateConstants/res";
import { InsertSynchronizConstantsRequest } from "./InsertSynchronizConstants/req";
import { InsertSynchronizConstantsResponse } from "./InsertSynchronizConstants/res";
import { GetSynchronizConstantsRequest } from "./GetSynchronizConstants/req";
import { GetSynchronizConstantsResponse } from "./GetSynchronizConstants/res";
import { ListConstantsRequest } from "./ListConstants/req";
import { ListConstantsResponse } from "./ListConstants/res";
import { DeleteConstantsRequest } from "./DeleteConstants/req";
import { DeleteConstantsResponse } from "./DeleteConstants/res";
import { UpdateConstantsRequest } from "./UpdateConstants/req";
import { UpdateConstantsResponse } from "./UpdateConstants/res";
import { DescribeDbfsSpecificationsRequest } from "./DescribeDbfsSpecifications/req";
import { DescribeDbfsSpecificationsResponse } from "./DescribeDbfsSpecifications/res";
import { DescribeInstanceTypesRequest } from "./DescribeInstanceTypes/req";
import { DescribeInstanceTypesResponse } from "./DescribeInstanceTypes/res";
import { UpdateDbfsRequest } from "./UpdateDbfs/req";
import { UpdateDbfsResponse } from "./UpdateDbfs/res";
import { ApplyAutoSnapshotPolicyRequest } from "./ApplyAutoSnapshotPolicy/req";
import { ApplyAutoSnapshotPolicyResponse } from "./ApplyAutoSnapshotPolicy/res";
import { DeleteAutoSnapshotPolicyRequest } from "./DeleteAutoSnapshotPolicy/req";
import { DeleteAutoSnapshotPolicyResponse } from "./DeleteAutoSnapshotPolicy/res";
import { ListAutoSnapshotPolicyUnappliedDbfsRequest } from "./ListAutoSnapshotPolicyUnappliedDbfs/req";
import { ListAutoSnapshotPolicyUnappliedDbfsResponse } from "./ListAutoSnapshotPolicyUnappliedDbfs/res";
import { CreateAutoSnapshotPolicyRequest } from "./CreateAutoSnapshotPolicy/req";
import { CreateAutoSnapshotPolicyResponse } from "./CreateAutoSnapshotPolicy/res";
import { GetAutoSnapshotPolicyRequest } from "./GetAutoSnapshotPolicy/req";
import { GetAutoSnapshotPolicyResponse } from "./GetAutoSnapshotPolicy/res";
import { ListAutoSnapshotPoliciesRequest } from "./ListAutoSnapshotPolicies/req";
import { ListAutoSnapshotPoliciesResponse } from "./ListAutoSnapshotPolicies/res";
import { ModifyAutoSnapshotPolicyRequest } from "./ModifyAutoSnapshotPolicy/req";
import { ModifyAutoSnapshotPolicyResponse } from "./ModifyAutoSnapshotPolicy/res";
import { ListAutoSnapshotPolicyAppliedDbfsRequest } from "./ListAutoSnapshotPolicyAppliedDbfs/req";
import { ListAutoSnapshotPolicyAppliedDbfsResponse } from "./ListAutoSnapshotPolicyAppliedDbfs/res";
import { ModifySnapshotAttributeRequest } from "./ModifySnapshotAttribute/req";
import { ModifySnapshotAttributeResponse } from "./ModifySnapshotAttribute/res";
import { CancelAutoSnapshotPolicyRequest } from "./CancelAutoSnapshotPolicy/req";
import { CancelAutoSnapshotPolicyResponse } from "./CancelAutoSnapshotPolicy/res";
import { GetSnapshotLinkRequest } from "./GetSnapshotLink/req";
import { GetSnapshotLinkResponse } from "./GetSnapshotLink/res";
import { ListSnapshotLinksRequest } from "./ListSnapshotLinks/req";
import { ListSnapshotLinksResponse } from "./ListSnapshotLinks/res";

interface DBFS {
    /**
     * 调用CreateDbfs创建一个按量付费的数据库文件系统。
     */
    CreateDbfs(query: CreateDbfsRequest): Promise<CreateDbfsResponse>;
    /**
     * 调用AttachDbfs为一台ECS实例挂载一个按量付费的数据库文件系统。ECS实例和数据库文件系统必须在同一个可用区内。
     */
    AttachDbfs(query: AttachDbfsRequest): Promise<AttachDbfsResponse>;
    /**
     * 调用DetachDbfs从一台ECS实例上卸载一个按量付费的数据库文件系统。
     */
    DetachDbfs(query: DetachDbfsRequest): Promise<DetachDbfsResponse>;
    /**
     * 调用DeleteDbfs释放一个按量付费的数据库文件系统。
     */
    DeleteDbfs(query: DeleteDbfsRequest): Promise<DeleteDbfsResponse>;
    /**
     * 调用ListDbfs查询您已经创建的数据库文件系统列表。
     */
    ListDbfs(query: ListDbfsRequest): Promise<ListDbfsResponse>;
    /**
     * 调用GetDbfs查询数据库文件系统详细信息。
     */
    GetDbfs(query: GetDbfsRequest): Promise<GetDbfsResponse>;
    /**
     * 调用RenameDbfs重命名一个数据库文件系统。
     */
    RenameDbfs(query: RenameDbfsRequest): Promise<RenameDbfsResponse>;
    /**
     * 调用ResizeDbfs扩容一个数据库文件系统。
     */
    ResizeDbfs(query: ResizeDbfsRequest): Promise<ResizeDbfsResponse>;
    /**
     * 调用ListDbfsAttachableEcsInstances查询数据库文件系统可挂载的ECS实例列表。
     */
    ListDbfsAttachableEcsInstances(query: ListDbfsAttachableEcsInstancesRequest): Promise<ListDbfsAttachableEcsInstancesResponse>;
    /**
     * 调用ListDbfsAttachedEcsInstances查询数据库文件系统已挂载的ECS实例列表。
     */
    ListDbfsAttachedEcsInstances(query: ListDbfsAttachedEcsInstancesRequest): Promise<ListDbfsAttachedEcsInstancesResponse>;
    /**
     * 调用CreateSnapshot给一个数据库文件系统创建快照。
     */
    CreateSnapshot(query: CreateSnapshotRequest): Promise<CreateSnapshotResponse>;
    /**
     * 调用DeleteSnapshot删除一个或多个数据库文件系统的快照。
     */
    DeleteSnapshot(query: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse>;
    /**
     * 调用ListSnapshot查询用户创建的数据库文件系统快照列表。
     */
    ListSnapshot(query: ListSnapshotRequest): Promise<ListSnapshotResponse>;
    /**
     * 调用TagDbfs为一个数据库文件系统设置标签。
     */
    TagDbfs(query: TagDbfsRequest): Promise<TagDbfsResponse>;
    /**
     * 调用AddTagsBatch为多个数据库文件系统实例批量添加标签，可能存在新增标签与替换标签。
     */
    AddTagsBatch(query: AddTagsBatchRequest): Promise<AddTagsBatchResponse>;
    /**
     * 调用DeleteTagsBatch批量删除多个数据库文件系统实例的标签。
     */
    DeleteTagsBatch(query: DeleteTagsBatchRequest): Promise<DeleteTagsBatchResponse>;
    /**
     * 调用ListTagKeys查询用户创建的所有标签键。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 调用ListTagValues查询标签键下的所有标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 调用CreateServiceLinkedRole创建服务关联角色，用于DBFS操作其它依赖的云资源。
     */
    CreateServiceLinkedRole(query: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 调用GetServiceLinkedRole查询用户是否已经创建过服务关联角色。
     */
    GetServiceLinkedRole(query: GetServiceLinkedRoleRequest): Promise<GetServiceLinkedRoleResponse>;
    /**
     * 常量管理
     */
    OpreateConstants(query: OpreateConstantsRequest): Promise<OpreateConstantsResponse>;
    /**
     * 生成升级记录
     */
    GenerateUpgradeRecord(query: GenerateUpgradeRecordRequest): Promise<GenerateUpgradeRecordResponse>;
    /**
     * 赤骥平台下发升级任务，dmc根据批次号生成升级任务
     */
    PublishUpgradeTask(query: PublishUpgradeTaskRequest): Promise<PublishUpgradeTaskResponse>;
    /**
     * 同步dmc升级记录到赤骥
     */
    DbfsRecord(query: DbfsRecordRequest): Promise<DbfsRecordResponse>;
    /**
     * 中止升级
     */
    StopUpgradeTask(query: StopUpgradeTaskRequest): Promise<StopUpgradeTaskResponse>;
    /**
     * 常量管理
     */
    CreateConstants(query: CreateConstantsRequest): Promise<CreateConstantsResponse>;
    /**
     * 常量管理
     */
    InsertSynchronizConstants(query: InsertSynchronizConstantsRequest): Promise<InsertSynchronizConstantsResponse>;
    /**
     * 常量管理
     */
    GetSynchronizConstants(query: GetSynchronizConstantsRequest): Promise<GetSynchronizConstantsResponse>;
    /**
     * 常量管理
     */
    ListConstants(query: ListConstantsRequest): Promise<ListConstantsResponse>;
    /**
     * 常量管理
     */
    DeleteConstants(query: DeleteConstantsRequest): Promise<DeleteConstantsResponse>;
    /**
     * 常量管理
     */
    UpdateConstants(query: UpdateConstantsRequest): Promise<UpdateConstantsResponse>;
    /**
     * 调用DescribeDbfsSpecifications查询DBFS的规格信息。
     */
    DescribeDbfsSpecifications(query: DescribeDbfsSpecificationsRequest): Promise<DescribeDbfsSpecificationsResponse>;
    /**
     * 调用DescribeInstanceTypes查询DBFS支持的实例规格列表。
     */
    DescribeInstanceTypes(query: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse>;
    /**
     * 修改一个数据库文件系统的实例规格和使用场景。
     */
    UpdateDbfs(query: UpdateDbfsRequest): Promise<UpdateDbfsResponse>;
    /**
     * 为一个或多个数据库文件系统设置自动快照策略。
     */
    ApplyAutoSnapshotPolicy(query: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse>;
    /**
     * 删除一条自动快照策略。删除后，已经设置了该自动快照策略的文件系统将自动取消策略。
     */
    DeleteAutoSnapshotPolicy(query: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse>;
    /**
     * 查询您在某个地域下，所有已创建的符合查询条件的未设置自动快照策略的数据库文件系统。
     */
    ListAutoSnapshotPolicyUnappliedDbfs(query: ListAutoSnapshotPolicyUnappliedDbfsRequest): Promise<ListAutoSnapshotPolicyUnappliedDbfsResponse>;
    /**
     * 在指定地域下创建一条自动快照策略。自动快照策略可以周期性地为数据库文件系统创建快照备份数据。
     */
    CreateAutoSnapshotPolicy(query: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse>;
    /**
     * 查询单个自动快照策略。
     */
    GetAutoSnapshotPolicy(query: GetAutoSnapshotPolicyRequest): Promise<GetAutoSnapshotPolicyResponse>;
    /**
     * 查询您在某个地域下，所有已创建的符合查询条件的自动快照策略。
     */
    ListAutoSnapshotPolicies(query: ListAutoSnapshotPoliciesRequest): Promise<ListAutoSnapshotPoliciesResponse>;
    /**
     * 修改一条自动快照策略。修改自动快照策略后，之前已设置该策略的数据库文件系统随即执行修改后的自动快照策略。
     */
    ModifyAutoSnapshotPolicy(query: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse>;
    /**
     * 查询所有已设置该自动快照策略的数据库文件系统列表。
     */
    ListAutoSnapshotPolicyAppliedDbfs(query: ListAutoSnapshotPolicyAppliedDbfsRequest): Promise<ListAutoSnapshotPolicyAppliedDbfsResponse>;
    /**
     * 修改一份快照的名称、描述。
     */
    ModifySnapshotAttribute(query: ModifySnapshotAttributeRequest): Promise<ModifySnapshotAttributeResponse>;
    /**
     * 取消一个或多个数据库文件系统的自动快照策略。
     */
    CancelAutoSnapshotPolicy(query: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse>;
    /**
     * 查询数据库文件系统快照链。快照链是一个数据库文件系统所有快照组成的关系链，一个文件系统对应一条快照链。
     */
    GetSnapshotLink(query: GetSnapshotLinkRequest): Promise<GetSnapshotLinkResponse>;
    /**
     * 查询某个地域下满足条件的快照链。
     */
    ListSnapshotLinks(query: ListSnapshotLinksRequest): Promise<ListSnapshotLinksResponse>;
}
export default DBFS;
