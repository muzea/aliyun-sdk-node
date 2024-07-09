import { AssociateResourceShareRequest } from "./AssociateResourceShare/req";
import { AssociateResourceShareResponse } from "./AssociateResourceShare/res";
import { DeleteResourceShareRequest } from "./DeleteResourceShare/req";
import { DeleteResourceShareResponse } from "./DeleteResourceShare/res";
import { CreateResourceShareRequest } from "./CreateResourceShare/req";
import { CreateResourceShareResponse } from "./CreateResourceShare/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DisassociateResourceShareRequest } from "./DisassociateResourceShare/req";
import { DisassociateResourceShareResponse } from "./DisassociateResourceShare/res";
import { ListResourceShareAssociationsRequest } from "./ListResourceShareAssociations/req";
import { ListResourceShareAssociationsResponse } from "./ListResourceShareAssociations/res";
import { ListResourceSharesRequest } from "./ListResourceShares/req";
import { ListResourceSharesResponse } from "./ListResourceShares/res";
import { ListSharedResourcesRequest } from "./ListSharedResources/req";
import { ListSharedResourcesResponse } from "./ListSharedResources/res";
import { ListSharedTargetsRequest } from "./ListSharedTargets/req";
import { ListSharedTargetsResponse } from "./ListSharedTargets/res";
import { UpdateResourceShareRequest } from "./UpdateResourceShare/req";
import { UpdateResourceShareResponse } from "./UpdateResourceShare/res";
import { EnableSharingWithResourceDirectoryRequest } from "./EnableSharingWithResourceDirectory/req";
import { EnableSharingWithResourceDirectoryResponse } from "./EnableSharingWithResourceDirectory/res";
import { CheckSharingWithResourceDirectoryStatusRequest } from "./CheckSharingWithResourceDirectoryStatus/req";
import { CheckSharingWithResourceDirectoryStatusResponse } from "./CheckSharingWithResourceDirectoryStatus/res";
import { ListResourceShareInvitationsRequest } from "./ListResourceShareInvitations/req";
import { ListResourceShareInvitationsResponse } from "./ListResourceShareInvitations/res";
import { RejectResourceShareInvitationRequest } from "./RejectResourceShareInvitation/req";
import { RejectResourceShareInvitationResponse } from "./RejectResourceShareInvitation/res";
import { AcceptResourceShareInvitationRequest } from "./AcceptResourceShareInvitation/req";
import { AcceptResourceShareInvitationResponse } from "./AcceptResourceShareInvitation/res";
import { ListPermissionsRequest } from "./ListPermissions/req";
import { ListPermissionsResponse } from "./ListPermissions/res";
import { ListPermissionVersionsRequest } from "./ListPermissionVersions/req";
import { ListPermissionVersionsResponse } from "./ListPermissionVersions/res";
import { DisassociateResourceSharePermissionRequest } from "./DisassociateResourceSharePermission/req";
import { DisassociateResourceSharePermissionResponse } from "./DisassociateResourceSharePermission/res";
import { AssociateResourceSharePermissionRequest } from "./AssociateResourceSharePermission/req";
import { AssociateResourceSharePermissionResponse } from "./AssociateResourceSharePermission/res";
import { ListResourceSharePermissionsRequest } from "./ListResourceSharePermissions/req";
import { ListResourceSharePermissionsResponse } from "./ListResourceSharePermissions/res";
import { GetPermissionRequest } from "./GetPermission/req";
import { GetPermissionResponse } from "./GetPermission/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";

interface RESOURCESHARING {
    /**
     * 为共享单元关联共享资源或资源使用者。
     */
    AssociateResourceShare(query: AssociateResourceShareRequest): Promise<AssociateResourceShareResponse>;
    /**
     * 删除共享单元。
     */
    DeleteResourceShare(query: DeleteResourceShareRequest): Promise<DeleteResourceShareResponse>;
    /**
     * 创建共享单元。
     */
    CreateResourceShare(query: CreateResourceShareRequest): Promise<CreateResourceShareResponse>;
    /**
     * 查询支持资源共享的地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 为共享单元移除共享资源或资源使用者。
     */
    DisassociateResourceShare(query: DisassociateResourceShareRequest): Promise<DisassociateResourceShareResponse>;
    /**
     * 查询共享单元中关联资源或资源使用者的记录。
     */
    ListResourceShareAssociations(query: ListResourceShareAssociationsRequest): Promise<ListResourceShareAssociationsResponse>;
    /**
     * 查询共享单元列表。
     */
    ListResourceShares(query: ListResourceSharesRequest): Promise<ListResourceSharesResponse>;
    /**
     * 查询共享的资源列表或者其他账号共享的资源列表。
     */
    ListSharedResources(query: ListSharedResourcesRequest): Promise<ListSharedResourcesResponse>;
    /**
     * 查询资源使用者列表。
     */
    ListSharedTargets(query: ListSharedTargetsRequest): Promise<ListSharedTargetsResponse>;
    /**
     * 修改共享单元名称。
     */
    UpdateResourceShare(query: UpdateResourceShareRequest): Promise<UpdateResourceShareResponse>;
    /**
     * 启用资源目录组织共享。
     */
    EnableSharingWithResourceDirectory(query: EnableSharingWithResourceDirectoryRequest): Promise<EnableSharingWithResourceDirectoryResponse>;
    /**
     * 检查基于组织共享的状态。
     */
    CheckSharingWithResourceDirectoryStatus(query: CheckSharingWithResourceDirectoryStatusRequest): Promise<CheckSharingWithResourceDirectoryStatusResponse>;
    /**
     * 资源使用者调用ListResourceShareInvitations查询自己收到的资源共享邀请信息。
     */
    ListResourceShareInvitations(query: ListResourceShareInvitationsRequest): Promise<ListResourceShareInvitationsResponse>;
    /**
     * 资源使用者调用RejectResourceShareInvitation拒绝资源共享邀请。
     */
    RejectResourceShareInvitation(query: RejectResourceShareInvitationRequest): Promise<RejectResourceShareInvitationResponse>;
    /**
     * 资源使用者调用AcceptResourceShareInvitation接受资源共享邀请。
     */
    AcceptResourceShareInvitation(query: AcceptResourceShareInvitationRequest): Promise<AcceptResourceShareInvitationResponse>;
    /**
     * 调用ListPermissions查询默认共享权限信息。
     */
    ListPermissions(query: ListPermissionsRequest): Promise<ListPermissionsResponse>;
    /**
     * 调用ListPermissionVersions查询指定共享权限名称的版本信息。
     */
    ListPermissionVersions(query: ListPermissionVersionsRequest): Promise<ListPermissionVersionsResponse>;
    /**
     * 调用DisassociateResourceSharePermission为共享单元解除共享权限。当共享单元下权限对应的资源类型没有关联具体资源时，才允许从共享单元中删除权限。
     */
    DisassociateResourceSharePermission(query: DisassociateResourceSharePermissionRequest): Promise<DisassociateResourceSharePermissionResponse>;
    /**
     * 调用AssociateResourceSharePermission为共享单元关联共享权限。
     */
    AssociateResourceSharePermission(query: AssociateResourceSharePermissionRequest): Promise<AssociateResourceSharePermissionResponse>;
    /**
     * 调用ListResourceSharePermissions查询共享单元中关联权限的记录。
     */
    ListResourceSharePermissions(query: ListResourceSharePermissionsRequest): Promise<ListResourceSharePermissionsResponse>;
    /**
     * 调用GetPermission查询共享权限信息。
     */
    GetPermission(query: GetPermissionRequest): Promise<GetPermissionResponse>;
    /**
     * 将共享单元从一个资源组转移到另外一个资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
}
export default RESOURCESHARING;
