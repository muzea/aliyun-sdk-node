import { AcceptHandshakeRequest } from "./AcceptHandshake/req";
import { AcceptHandshakeResponse } from "./AcceptHandshake/res";
import { AttachPolicyRequest } from "./AttachPolicy/req";
import { AttachPolicyResponse } from "./AttachPolicy/res";
import { CancelHandshakeRequest } from "./CancelHandshake/req";
import { CancelHandshakeResponse } from "./CancelHandshake/res";
import { CancelCreateCloudAccountRequest } from "./CancelCreateCloudAccount/req";
import { CancelCreateCloudAccountResponse } from "./CancelCreateCloudAccount/res";
import { CancelPromoteResourceAccountRequest } from "./CancelPromoteResourceAccount/req";
import { CancelPromoteResourceAccountResponse } from "./CancelPromoteResourceAccount/res";
import { CreateFolderRequest } from "./CreateFolder/req";
import { CreateFolderResponse } from "./CreateFolder/res";
import { CreateCloudAccountRequest } from "./CreateCloudAccount/req";
import { CreateCloudAccountResponse } from "./CreateCloudAccount/res";
import { CreatePolicyRequest } from "./CreatePolicy/req";
import { CreatePolicyResponse } from "./CreatePolicy/res";
import { CreatePolicyVersionRequest } from "./CreatePolicyVersion/req";
import { CreatePolicyVersionResponse } from "./CreatePolicyVersion/res";
import { CreateResourceAccountRequest } from "./CreateResourceAccount/req";
import { CreateResourceAccountResponse } from "./CreateResourceAccount/res";
import { CreateResourceGroupRequest } from "./CreateResourceGroup/req";
import { CreateResourceGroupResponse } from "./CreateResourceGroup/res";
import { CreateRoleRequest } from "./CreateRole/req";
import { CreateRoleResponse } from "./CreateRole/res";
import { CreateServiceLinkedRoleRequest } from "./CreateServiceLinkedRole/req";
import { CreateServiceLinkedRoleResponse } from "./CreateServiceLinkedRole/res";
import { DeclineHandshakeRequest } from "./DeclineHandshake/req";
import { DeclineHandshakeResponse } from "./DeclineHandshake/res";
import { DeleteFolderRequest } from "./DeleteFolder/req";
import { DeleteFolderResponse } from "./DeleteFolder/res";
import { DeletePolicyRequest } from "./DeletePolicy/req";
import { DeletePolicyResponse } from "./DeletePolicy/res";
import { DeletePolicyVersionRequest } from "./DeletePolicyVersion/req";
import { DeletePolicyVersionResponse } from "./DeletePolicyVersion/res";
import { DeleteResourceGroupRequest } from "./DeleteResourceGroup/req";
import { DeleteResourceGroupResponse } from "./DeleteResourceGroup/res";
import { DeleteRoleRequest } from "./DeleteRole/req";
import { DeleteRoleResponse } from "./DeleteRole/res";
import { DeleteServiceLinkedRoleRequest } from "./DeleteServiceLinkedRole/req";
import { DeleteServiceLinkedRoleResponse } from "./DeleteServiceLinkedRole/res";
import { DestroyResourceDirectoryRequest } from "./DestroyResourceDirectory/req";
import { DestroyResourceDirectoryResponse } from "./DestroyResourceDirectory/res";
import { DetachPolicyRequest } from "./DetachPolicy/req";
import { DetachPolicyResponse } from "./DetachPolicy/res";
import { GetAccountRequest } from "./GetAccount/req";
import { GetAccountResponse } from "./GetAccount/res";
import { GetFolderRequest } from "./GetFolder/req";
import { GetFolderResponse } from "./GetFolder/res";
import { GetHandshakeRequest } from "./GetHandshake/req";
import { GetHandshakeResponse } from "./GetHandshake/res";
import { GetPayerForAccountRequest } from "./GetPayerForAccount/req";
import { GetPayerForAccountResponse } from "./GetPayerForAccount/res";
import { GetPolicyRequest } from "./GetPolicy/req";
import { GetPolicyResponse } from "./GetPolicy/res";
import { GetPolicyVersionRequest } from "./GetPolicyVersion/req";
import { GetPolicyVersionResponse } from "./GetPolicyVersion/res";
import { GetResourceDirectoryRequest } from "./GetResourceDirectory/req";
import { GetResourceDirectoryResponse } from "./GetResourceDirectory/res";
import { GetResourceGroupRequest } from "./GetResourceGroup/req";
import { GetResourceGroupResponse } from "./GetResourceGroup/res";
import { GetRoleRequest } from "./GetRole/req";
import { GetRoleResponse } from "./GetRole/res";
import { GetServiceLinkedRoleDeletionStatusRequest } from "./GetServiceLinkedRoleDeletionStatus/req";
import { GetServiceLinkedRoleDeletionStatusResponse } from "./GetServiceLinkedRoleDeletionStatus/res";
import { InitResourceDirectoryRequest } from "./InitResourceDirectory/req";
import { InitResourceDirectoryResponse } from "./InitResourceDirectory/res";
import { InviteAccountToResourceDirectoryRequest } from "./InviteAccountToResourceDirectory/req";
import { InviteAccountToResourceDirectoryResponse } from "./InviteAccountToResourceDirectory/res";
import { ListAccountsRequest } from "./ListAccounts/req";
import { ListAccountsResponse } from "./ListAccounts/res";
import { ListAccountsForParentRequest } from "./ListAccountsForParent/req";
import { ListAccountsForParentResponse } from "./ListAccountsForParent/res";
import { ListAncestorsRequest } from "./ListAncestors/req";
import { ListAncestorsResponse } from "./ListAncestors/res";
import { ListFoldersForParentRequest } from "./ListFoldersForParent/req";
import { ListFoldersForParentResponse } from "./ListFoldersForParent/res";
import { ListHandshakesForAccountRequest } from "./ListHandshakesForAccount/req";
import { ListHandshakesForAccountResponse } from "./ListHandshakesForAccount/res";
import { ListHandshakesForResourceDirectoryRequest } from "./ListHandshakesForResourceDirectory/req";
import { ListHandshakesForResourceDirectoryResponse } from "./ListHandshakesForResourceDirectory/res";
import { ListPoliciesRequest } from "./ListPolicies/req";
import { ListPoliciesResponse } from "./ListPolicies/res";
import { ListPolicyAttachmentsRequest } from "./ListPolicyAttachments/req";
import { ListPolicyAttachmentsResponse } from "./ListPolicyAttachments/res";
import { ListPolicyVersionsRequest } from "./ListPolicyVersions/req";
import { ListPolicyVersionsResponse } from "./ListPolicyVersions/res";
import { ListResourceGroupsRequest } from "./ListResourceGroups/req";
import { ListResourceGroupsResponse } from "./ListResourceGroups/res";
import { ListResourcesRequest } from "./ListResources/req";
import { ListResourcesResponse } from "./ListResources/res";
import { ListRolesRequest } from "./ListRoles/req";
import { ListRolesResponse } from "./ListRoles/res";
import { ListTrustedServiceStatusRequest } from "./ListTrustedServiceStatus/req";
import { ListTrustedServiceStatusResponse } from "./ListTrustedServiceStatus/res";
import { MoveAccountRequest } from "./MoveAccount/req";
import { MoveAccountResponse } from "./MoveAccount/res";
import { PromoteResourceAccountRequest } from "./PromoteResourceAccount/req";
import { PromoteResourceAccountResponse } from "./PromoteResourceAccount/res";
import { RemoveCloudAccountRequest } from "./RemoveCloudAccount/req";
import { RemoveCloudAccountResponse } from "./RemoveCloudAccount/res";
import { ResendCreateCloudAccountEmailRequest } from "./ResendCreateCloudAccountEmail/req";
import { ResendCreateCloudAccountEmailResponse } from "./ResendCreateCloudAccountEmail/res";
import { ResendPromoteResourceAccountEmailRequest } from "./ResendPromoteResourceAccountEmail/req";
import { ResendPromoteResourceAccountEmailResponse } from "./ResendPromoteResourceAccountEmail/res";
import { SetDefaultPolicyVersionRequest } from "./SetDefaultPolicyVersion/req";
import { SetDefaultPolicyVersionResponse } from "./SetDefaultPolicyVersion/res";
import { UpdateAccountRequest } from "./UpdateAccount/req";
import { UpdateAccountResponse } from "./UpdateAccount/res";
import { UpdateFolderRequest } from "./UpdateFolder/req";
import { UpdateFolderResponse } from "./UpdateFolder/res";
import { UpdateResourceGroupRequest } from "./UpdateResourceGroup/req";
import { UpdateResourceGroupResponse } from "./UpdateResourceGroup/res";
import { UpdateRoleRequest } from "./UpdateRole/req";
import { UpdateRoleResponse } from "./UpdateRole/res";
import { GetControlPolicyEnablementStatusRequest } from "./GetControlPolicyEnablementStatus/req";
import { GetControlPolicyEnablementStatusResponse } from "./GetControlPolicyEnablementStatus/res";
import { DeleteControlPolicyRequest } from "./DeleteControlPolicy/req";
import { DeleteControlPolicyResponse } from "./DeleteControlPolicy/res";
import { DetachControlPolicyRequest } from "./DetachControlPolicy/req";
import { DetachControlPolicyResponse } from "./DetachControlPolicy/res";
import { UpdateControlPolicyRequest } from "./UpdateControlPolicy/req";
import { UpdateControlPolicyResponse } from "./UpdateControlPolicy/res";
import { ListControlPoliciesRequest } from "./ListControlPolicies/req";
import { ListControlPoliciesResponse } from "./ListControlPolicies/res";
import { ListControlPolicyAttachmentsForTargetRequest } from "./ListControlPolicyAttachmentsForTarget/req";
import { ListControlPolicyAttachmentsForTargetResponse } from "./ListControlPolicyAttachmentsForTarget/res";
import { CreateControlPolicyRequest } from "./CreateControlPolicy/req";
import { CreateControlPolicyResponse } from "./CreateControlPolicy/res";
import { ListTargetAttachmentsForControlPolicyRequest } from "./ListTargetAttachmentsForControlPolicy/req";
import { ListTargetAttachmentsForControlPolicyResponse } from "./ListTargetAttachmentsForControlPolicy/res";
import { AttachControlPolicyRequest } from "./AttachControlPolicy/req";
import { AttachControlPolicyResponse } from "./AttachControlPolicy/res";
import { GetControlPolicyRequest } from "./GetControlPolicy/req";
import { GetControlPolicyResponse } from "./GetControlPolicy/res";
import { DisableControlPolicyRequest } from "./DisableControlPolicy/req";
import { DisableControlPolicyResponse } from "./DisableControlPolicy/res";
import { EnableControlPolicyRequest } from "./EnableControlPolicy/req";
import { EnableControlPolicyResponse } from "./EnableControlPolicy/res";
import { RegisterDelegatedAdministratorRequest } from "./RegisterDelegatedAdministrator/req";
import { RegisterDelegatedAdministratorResponse } from "./RegisterDelegatedAdministrator/res";
import { DeregisterDelegatedAdministratorRequest } from "./DeregisterDelegatedAdministrator/req";
import { DeregisterDelegatedAdministratorResponse } from "./DeregisterDelegatedAdministrator/res";
import { ListDelegatedServicesForAccountRequest } from "./ListDelegatedServicesForAccount/req";
import { ListDelegatedServicesForAccountResponse } from "./ListDelegatedServicesForAccount/res";
import { ListDelegatedAdministratorsRequest } from "./ListDelegatedAdministrators/req";
import { ListDelegatedAdministratorsResponse } from "./ListDelegatedAdministrators/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { MoveResourcesRequest } from "./MoveResources/req";
import { MoveResourcesResponse } from "./MoveResources/res";
import { SendVerificationCodeForEnableRDRequest } from "./SendVerificationCodeForEnableRD/req";
import { SendVerificationCodeForEnableRDResponse } from "./SendVerificationCodeForEnableRD/res";
import { EnableResourceDirectoryRequest } from "./EnableResourceDirectory/req";
import { EnableResourceDirectoryResponse } from "./EnableResourceDirectory/res";
import { BindSecureMobilePhoneRequest } from "./BindSecureMobilePhone/req";
import { BindSecureMobilePhoneResponse } from "./BindSecureMobilePhone/res";
import { SendVerificationCodeForBindSecureMobilePhoneRequest } from "./SendVerificationCodeForBindSecureMobilePhone/req";
import { SendVerificationCodeForBindSecureMobilePhoneResponse } from "./SendVerificationCodeForBindSecureMobilePhone/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { SetMemberDeletionPermissionRequest } from "./SetMemberDeletionPermission/req";
import { SetMemberDeletionPermissionResponse } from "./SetMemberDeletionPermission/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { GetAccountDeletionCheckResultRequest } from "./GetAccountDeletionCheckResult/req";
import { GetAccountDeletionCheckResultResponse } from "./GetAccountDeletionCheckResult/res";
import { CheckAccountDeleteRequest } from "./CheckAccountDelete/req";
import { CheckAccountDeleteResponse } from "./CheckAccountDelete/res";
import { GetAccountDeletionStatusRequest } from "./GetAccountDeletionStatus/req";
import { GetAccountDeletionStatusResponse } from "./GetAccountDeletionStatus/res";
import { ChangeAccountEmailRequest } from "./ChangeAccountEmail/req";
import { ChangeAccountEmailResponse } from "./ChangeAccountEmail/res";
import { CancelChangeAccountEmailRequest } from "./CancelChangeAccountEmail/req";
import { CancelChangeAccountEmailResponse } from "./CancelChangeAccountEmail/res";
import { RetryChangeAccountEmailRequest } from "./RetryChangeAccountEmail/req";
import { RetryChangeAccountEmailResponse } from "./RetryChangeAccountEmail/res";
import { UpdateAssociatedTransferSettingRequest } from "./UpdateAssociatedTransferSetting/req";
import { UpdateAssociatedTransferSettingResponse } from "./UpdateAssociatedTransferSetting/res";
import { DisableAssociatedTransferRequest } from "./DisableAssociatedTransfer/req";
import { DisableAssociatedTransferResponse } from "./DisableAssociatedTransfer/res";
import { EnableAssociatedTransferRequest } from "./EnableAssociatedTransfer/req";
import { EnableAssociatedTransferResponse } from "./EnableAssociatedTransfer/res";
import { ListAssociatedTransferSettingRequest } from "./ListAssociatedTransferSetting/req";
import { ListAssociatedTransferSettingResponse } from "./ListAssociatedTransferSetting/res";

interface RESOURCEMANAGER {
    /**
     * 被邀请的阿里云账号调用AcceptHandshake接受邀请。
     */
    AcceptHandshake(query: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse>;
    /**
     * 调用AttachPolicy为授权对象（RAM用户、RAM用户组或RAM角色）添加权限策略，即授权。完成授权后，被授权对象将获得指定资源组或阿里云账号内资源的访问权限。
     */
    AttachPolicy(query: AttachPolicyRequest): Promise<AttachPolicyResponse>;
    /**
     * 调用CancelHandshake取消邀请。
     */
    CancelHandshake(query: CancelHandshakeRequest): Promise<CancelHandshakeResponse>;
    /**
     * 取消创建资源目录云账号类型的成员。
     */
    CancelCreateCloudAccount(query: CancelCreateCloudAccountRequest): Promise<CancelCreateCloudAccountResponse>;
    /**
     * 取消升级资源目录资源账号为云账号。
     */
    CancelPromoteResourceAccount(query: CancelPromoteResourceAccountRequest): Promise<CancelPromoteResourceAccountResponse>;
    /**
     * 调用CreateFolder创建资源夹。
     */
    CreateFolder(query: CreateFolderRequest): Promise<CreateFolderResponse>;
    /**
     * 创建资源目录云账号类型的成员。
     */
    CreateCloudAccount(query: CreateCloudAccountRequest): Promise<CreateCloudAccountResponse>;
    /**
     * 调用CreatePolicy创建一个权限策略。
     */
    CreatePolicy(query: CreatePolicyRequest): Promise<CreatePolicyResponse>;
    /**
     * 调用CreatePolicyVersion创建权限策略版本。
     */
    CreatePolicyVersion(query: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse>;
    /**
     * 调用CreateResourceAccount创建资源账号类型的成员。
     */
    CreateResourceAccount(query: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse>;
    /**
     * 调用CreateResourceGroup创建资源组。
     */
    CreateResourceGroup(query: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse>;
    /**
     * 调用CreateRole创建角色。
     */
    CreateRole(query: CreateRoleRequest): Promise<CreateRoleResponse>;
    /**
     * 调用CreateServiceLinkedRole创建服务关联角色。
     */
    CreateServiceLinkedRole(query: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 被邀请的阿里云账号调用DeclineHandshake拒绝邀请。
     */
    DeclineHandshake(query: DeclineHandshakeRequest): Promise<DeclineHandshakeResponse>;
    /**
     * 调用DeleteFolder删除资源夹。
     */
    DeleteFolder(query: DeleteFolderRequest): Promise<DeleteFolderResponse>;
    /**
     * 调用DeletePolicy删除指定的权限策略。
     */
    DeletePolicy(query: DeletePolicyRequest): Promise<DeletePolicyResponse>;
    /**
     * 调用DeletePolicyVersion删除权限策略版本。
     */
    DeletePolicyVersion(query: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse>;
    /**
     * 调用DeleteResourceGroup删除资源组。
     */
    DeleteResourceGroup(query: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse>;
    /**
     * 调用DeleteRole删除角色。
     */
    DeleteRole(query: DeleteRoleRequest): Promise<DeleteRoleResponse>;
    /**
     * 调用DeleteServiceLinkedRole删除服务关联角色。
     */
    DeleteServiceLinkedRole(query: DeleteServiceLinkedRoleRequest): Promise<DeleteServiceLinkedRoleResponse>;
    /**
     * 调用DestroyResourceDirectory关闭资源目录。此操作不可恢复，请您慎重操作。
     */
    DestroyResourceDirectory(query: DestroyResourceDirectoryRequest): Promise<DestroyResourceDirectoryResponse>;
    /**
     * 调用DetachPolicy移除指定对象的权限策略。移除授权后，该对象将失去对当前资源组或账号中资源的操作权限。
     */
    DetachPolicy(query: DetachPolicyRequest): Promise<DetachPolicyResponse>;
    /**
     * 调用GetAccount获取成员信息。
     */
    GetAccount(query: GetAccountRequest): Promise<GetAccountResponse>;
    /**
     * 调用GetFolder获取资源夹信息。
     */
    GetFolder(query: GetFolderRequest): Promise<GetFolderResponse>;
    /**
     * 调用GetHandshake获取邀请信息。
     */
    GetHandshake(query: GetHandshakeRequest): Promise<GetHandshakeResponse>;
    /**
     * 调用GetPayerForAccount获取成员的结算账号信息。
     */
    GetPayerForAccount(query: GetPayerForAccountRequest): Promise<GetPayerForAccountResponse>;
    /**
     * 调用GetPolicy获取指定的权限策略信息。
     */
    GetPolicy(query: GetPolicyRequest): Promise<GetPolicyResponse>;
    /**
     * 调用GetPolicyVersion获取某个权限策略的版本。
     */
    GetPolicyVersion(query: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse>;
    /**
     * 调用GetResourceDirectory获取资源目录信息。管理账号调用时，返回管理账号开通的资源目录详情。成员调用时，返回成员所属的资源目录详情。
     */
    GetResourceDirectory(query: GetResourceDirectoryRequest): Promise<GetResourceDirectoryResponse>;
    /**
     * 调用GetResourceGroup查询资源组信息。
     */
    GetResourceGroup(query: GetResourceGroupRequest): Promise<GetResourceGroupResponse>;
    /**
     * 调用GetRole获取角色信息。
     */
    GetRole(query: GetRoleRequest): Promise<GetRoleResponse>;
    /**
     * 调用GetServiceLinkedRoleDeletionStatus获取删除服务关联角色的任务状态。
     */
    GetServiceLinkedRoleDeletionStatus(query: GetServiceLinkedRoleDeletionStatusRequest): Promise<GetServiceLinkedRoleDeletionStatusResponse>;
    /**
     * 调用InitResourceDirectory开通资源目录。开通资源目录后，系统会为您创建一个Root资源夹，并将当前账号设置为企业管理账号。该企业管理账号具有管理资源目录的所有权限。
     */
    InitResourceDirectory(query: InitResourceDirectoryRequest): Promise<InitResourceDirectoryResponse>;
    /**
     * 调用InviteAccountToResourceDirectory邀请外部账号加入资源目录。
     */
    InviteAccountToResourceDirectory(query: InviteAccountToResourceDirectoryRequest): Promise<InviteAccountToResourceDirectoryResponse>;
    /**
     * 调用ListAccounts查询整个资源目录下的所有成员列表。
     */
    ListAccounts(query: ListAccountsRequest): Promise<ListAccountsResponse>;
    /**
     * 调用ListAccountsForParent查询资源夹下的成员列表。
     */
    ListAccountsForParent(query: ListAccountsForParentRequest): Promise<ListAccountsForParentResponse>;
    /**
     * 调用ListAncestors查看指定资源夹的所有父资源夹信息。返回结果将按照从上到下的顺序展示资源夹信息。
     */
    ListAncestors(query: ListAncestorsRequest): Promise<ListAncestorsResponse>;
    /**
     * 调用ListFoldersForParent查询指定资源夹的子资源夹列表。
     */
    ListFoldersForParent(query: ListFoldersForParentRequest): Promise<ListFoldersForParentResponse>;
    /**
     * 调用ListHandshakesForAccount查询当前账号下的邀请记录。
     */
    ListHandshakesForAccount(query: ListHandshakesForAccountRequest): Promise<ListHandshakesForAccountResponse>;
    /**
     * 调用ListHandshakesForResourceDirectory查看资源目录下的所有邀请列表。
     */
    ListHandshakesForResourceDirectory(query: ListHandshakesForResourceDirectoryRequest): Promise<ListHandshakesForResourceDirectoryResponse>;
    /**
     * 调用ListPolicies查看权限策略列表。
     */
    ListPolicies(query: ListPoliciesRequest): Promise<ListPoliciesResponse>;
    /**
     * 调用ListPolicyAttachments查看授权列表。
     */
    ListPolicyAttachments(query: ListPolicyAttachmentsRequest): Promise<ListPolicyAttachmentsResponse>;
    /**
     * 调用ListPolicyVersions查看权限策略版本列表。
     */
    ListPolicyVersions(query: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse>;
    /**
     * 调用ListResourceGroups查询资源组列表。
     */
    ListResourceGroups(query: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse>;
    /**
     * 调用ListResources查询当前账号可以访问的资源组中的资源列表。
     */
    ListResources(query: ListResourcesRequest): Promise<ListResourcesResponse>;
    /**
     * 调用ListRoles查看角色列表。
     */
    ListRoles(query: ListRolesRequest): Promise<ListRolesResponse>;
    /**
     * 调用ListTrustedServiceStatus查询管理账号或委派管理员账号已启用的可信服务列表。
     */
    ListTrustedServiceStatus(query: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse>;
    /**
     * 调用MoveAccount将成员移动到另一个资源夹。
     */
    MoveAccount(query: MoveAccountRequest): Promise<MoveAccountResponse>;
    /**
     * 将资源账号升级为云账号，异步操作。
     */
    PromoteResourceAccount(query: PromoteResourceAccountRequest): Promise<PromoteResourceAccountResponse>;
    /**
     * 调用RemoveCloudAccount移除云账号类型的成员。移除后，该成员将作为独立的阿里云账号存在，不再被资源目录的管理账号管控。
     */
    RemoveCloudAccount(query: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse>;
    /**
     * 重新发送创建云账号的确认邮件。
     */
    ResendCreateCloudAccountEmail(query: ResendCreateCloudAccountEmailRequest): Promise<ResendCreateCloudAccountEmailResponse>;
    /**
     * 重新发送资源账号升级为云账号的确认邮件。
     */
    ResendPromoteResourceAccountEmail(query: ResendPromoteResourceAccountEmailRequest): Promise<ResendPromoteResourceAccountEmailResponse>;
    /**
     * 调用SetDefaultPolicyVersion设置权限策略默认版本。
     */
    SetDefaultPolicyVersion(query: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse>;
    /**
     * 调用UpdateAccount修改成员名称或切换成员类型。
     */
    UpdateAccount(query: UpdateAccountRequest): Promise<UpdateAccountResponse>;
    /**
     * 调用UpdateFolder修改资源夹名称。
     */
    UpdateFolder(query: UpdateFolderRequest): Promise<UpdateFolderResponse>;
    /**
     * 调用UpdateResourceGroup修改资源组的显示名称。
     */
    UpdateResourceGroup(query: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse>;
    /**
     * 调用UpdateRole更新RAM角色信息。
     */
    UpdateRole(query: UpdateRoleRequest): Promise<UpdateRoleResponse>;
    /**
     * 调用GetControlPolicyEnablementStatus查询管控策略功能的开启或关闭状态。
     */
    GetControlPolicyEnablementStatus(query: GetControlPolicyEnablementStatusRequest): Promise<GetControlPolicyEnablementStatusResponse>;
    /**
     * 调用DeleteControlPolicy删除自定义管控策略。
     */
    DeleteControlPolicy(query: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse>;
    /**
     * 调用DetachControlPolicy解绑管控策略。
     */
    DetachControlPolicy(query: DetachControlPolicyRequest): Promise<DetachControlPolicyResponse>;
    /**
     * 调用UpdateControlPolicy修改自定义管控策略。
     */
    UpdateControlPolicy(query: UpdateControlPolicyRequest): Promise<UpdateControlPolicyResponse>;
    /**
     * 调用ListControlPolicies查询管控策略列表。
     */
    ListControlPolicies(query: ListControlPoliciesRequest): Promise<ListControlPoliciesResponse>;
    /**
     * 调用ListControlPolicyAttachmentsForTarget查询资源夹或成员账号绑定的管控策略列表。
     */
    ListControlPolicyAttachmentsForTarget(query: ListControlPolicyAttachmentsForTargetRequest): Promise<ListControlPolicyAttachmentsForTargetResponse>;
    /**
     * 调用CreateControlPolicy创建自定义管控策略。
     */
    CreateControlPolicy(query: CreateControlPolicyRequest): Promise<CreateControlPolicyResponse>;
    /**
     * 调用ListTargetAttachmentsForControlPolicy查询管控策略绑定的节点。
     */
    ListTargetAttachmentsForControlPolicy(query: ListTargetAttachmentsForControlPolicyRequest): Promise<ListTargetAttachmentsForControlPolicyResponse>;
    /**
     * 调用AttachControlPolicy绑定管控策略。
     */
    AttachControlPolicy(query: AttachControlPolicyRequest): Promise<AttachControlPolicyResponse>;
    /**
     * 调用GetControlPolicy查询管控策略的详情。
     */
    GetControlPolicy(query: GetControlPolicyRequest): Promise<GetControlPolicyResponse>;
    /**
     * 调用DisableControlPolicy关闭管控策略功能。
     */
    DisableControlPolicy(query: DisableControlPolicyRequest): Promise<DisableControlPolicyResponse>;
    /**
     * 调用EnableControlPolicy开启管控策略功能。
     */
    EnableControlPolicy(query: EnableControlPolicyRequest): Promise<EnableControlPolicyResponse>;
    /**
     * 调用RegisterDelegatedAdministrator将资源目录的成员账号设置为可信服务的委派管理员账号。
     */
    RegisterDelegatedAdministrator(query: RegisterDelegatedAdministratorRequest): Promise<RegisterDelegatedAdministratorResponse>;
    /**
     * 调用DeregisterDelegatedAdministrator移除可信服务的委派管理员账号。
     */
    DeregisterDelegatedAdministrator(query: DeregisterDelegatedAdministratorRequest): Promise<DeregisterDelegatedAdministratorResponse>;
    /**
     * 调用ListDelegatedServicesForAccount查询指定成员被设置为哪些可信服务的委派管理员账号。
     */
    ListDelegatedServicesForAccount(query: ListDelegatedServicesForAccountRequest): Promise<ListDelegatedServicesForAccountResponse>;
    /**
     * 调用ListDelegatedAdministrators查询可信服务的委派管理员账号列表。
     */
    ListDelegatedAdministrators(query: ListDelegatedAdministratorsRequest): Promise<ListDelegatedAdministratorsResponse>;
    /**
     * 调用DeleteAccount删除资源类型的成员。
     */
    DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * 调用MoveResources将资源从一个资源组转移到另一个资源组。
     */
    MoveResources(query: MoveResourcesRequest): Promise<MoveResourcesResponse>;
    /**
     * 通过创建新管理账号开通资源目录时，调用SendVerificationCodeForEnableRD向新管理账号的安全手机号码发送验证码。
     */
    SendVerificationCodeForEnableRD(query: SendVerificationCodeForEnableRDRequest): Promise<SendVerificationCodeForEnableRDResponse>;
    /**
     * 调用EnableResourceDirectory开通资源目录。
     */
    EnableResourceDirectory(query: EnableResourceDirectoryRequest): Promise<EnableResourceDirectoryResponse>;
    /**
     * 调用BindSecureMobilePhone为资源账号类型的成员设置安全手机号码。
     */
    BindSecureMobilePhone(query: BindSecureMobilePhoneRequest): Promise<BindSecureMobilePhoneResponse>;
    /**
     * 为资源账号类型的成员设置安全手机号码时，调用SendVerificationCodeForBindSecureMobilePhone向安全手机发送验证码。
     */
    SendVerificationCodeForBindSecureMobilePhone(query: SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<SendVerificationCodeForBindSecureMobilePhoneResponse>;
    /**
     * 调用ListTagResources查询资源组或资源目录成员绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用UntagResources解绑资源组或资源目成员的标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用TagResources为资源组或资源目录的成员绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用SetMemberDeletionPermission开启或关闭成员删除许可。
     */
    SetMemberDeletionPermission(query: SetMemberDeletionPermissionRequest): Promise<SetMemberDeletionPermissionResponse>;
    /**
     * 调用ListTagValues查询指定标签键对应的标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 调用ListTagKeys查询资源目录成员的标签键列表。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 调用GetAccountDeletionCheckResult查询成员删除检查结果。
     */
    GetAccountDeletionCheckResult(query: GetAccountDeletionCheckResultRequest): Promise<GetAccountDeletionCheckResultResponse>;
    /**
     * 调用CheckAccountDelete执行成员删除检查任务。
     */
    CheckAccountDelete(query: CheckAccountDeleteRequest): Promise<CheckAccountDeleteResponse>;
    /**
     * 调用GetAccountDeletionStatus查询成员删除状态。
     */
    GetAccountDeletionStatus(query: GetAccountDeletionStatusRequest): Promise<GetAccountDeletionStatusResponse>;
    /**
     * 调用ChangeAccountEmail修改成员邮箱。
     */
    ChangeAccountEmail(query: ChangeAccountEmailRequest): Promise<ChangeAccountEmailResponse>;
    /**
     * 调用CancelChangeAccountEmail取消修改成员邮箱。
     */
    CancelChangeAccountEmail(query: CancelChangeAccountEmailRequest): Promise<CancelChangeAccountEmailResponse>;
    /**
     * 调用RetryChangeAccountEmail重新发送修改成员邮箱的确认邮件。
     */
    RetryChangeAccountEmail(query: RetryChangeAccountEmailRequest): Promise<RetryChangeAccountEmailResponse>;
    /**
     * 调用UpdateAssociatedTransferSetting更新关联转组功能设置。
     */
    UpdateAssociatedTransferSetting(query: UpdateAssociatedTransferSettingRequest): Promise<UpdateAssociatedTransferSettingResponse>;
    /**
     * 调用DisableAssociatedTransfer关闭关联资源跟随转组功能。
     */
    DisableAssociatedTransfer(query: DisableAssociatedTransferRequest): Promise<DisableAssociatedTransferResponse>;
    /**
     * 调用EnableAssociatedTransfer开通关联资源跟随转组功能。
     */
    EnableAssociatedTransfer(query: EnableAssociatedTransferRequest): Promise<EnableAssociatedTransferResponse>;
    /**
     * 调用ListAssociatedTransferSetting获取关联转组功能设置。
     */
    ListAssociatedTransferSetting(query: ListAssociatedTransferSettingRequest): Promise<ListAssociatedTransferSettingResponse>;
}
export default RESOURCEMANAGER;
