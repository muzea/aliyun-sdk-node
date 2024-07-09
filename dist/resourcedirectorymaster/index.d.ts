import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListDelegatedAdministratorsRequest } from "./ListDelegatedAdministrators/req";
import { ListDelegatedAdministratorsResponse } from "./ListDelegatedAdministrators/res";
import { ListAccountsForParentRequest } from "./ListAccountsForParent/req";
import { ListAccountsForParentResponse } from "./ListAccountsForParent/res";
import { ListHandshakesForAccountRequest } from "./ListHandshakesForAccount/req";
import { ListHandshakesForAccountResponse } from "./ListHandshakesForAccount/res";
import { GetHandshakeRequest } from "./GetHandshake/req";
import { GetHandshakeResponse } from "./GetHandshake/res";
import { ListDelegatedServicesForAccountRequest } from "./ListDelegatedServicesForAccount/req";
import { ListDelegatedServicesForAccountResponse } from "./ListDelegatedServicesForAccount/res";
import { GetResourceDirectoryRequest } from "./GetResourceDirectory/req";
import { GetResourceDirectoryResponse } from "./GetResourceDirectory/res";
import { ListTrustedServiceStatusRequest } from "./ListTrustedServiceStatus/req";
import { ListTrustedServiceStatusResponse } from "./ListTrustedServiceStatus/res";
import { ListControlPoliciesRequest } from "./ListControlPolicies/req";
import { ListControlPoliciesResponse } from "./ListControlPolicies/res";
import { ListControlPolicyAttachmentsForTargetRequest } from "./ListControlPolicyAttachmentsForTarget/req";
import { ListControlPolicyAttachmentsForTargetResponse } from "./ListControlPolicyAttachmentsForTarget/res";
import { GetPayerForAccountRequest } from "./GetPayerForAccount/req";
import { GetPayerForAccountResponse } from "./GetPayerForAccount/res";
import { ListTargetAttachmentsForControlPolicyRequest } from "./ListTargetAttachmentsForControlPolicy/req";
import { ListTargetAttachmentsForControlPolicyResponse } from "./ListTargetAttachmentsForControlPolicy/res";
import { GetControlPolicyRequest } from "./GetControlPolicy/req";
import { GetControlPolicyResponse } from "./GetControlPolicy/res";
import { GetControlPolicyEnablementStatusRequest } from "./GetControlPolicyEnablementStatus/req";
import { GetControlPolicyEnablementStatusResponse } from "./GetControlPolicyEnablementStatus/res";
import { ListAccountsRequest } from "./ListAccounts/req";
import { ListAccountsResponse } from "./ListAccounts/res";
import { GetAccountRequest } from "./GetAccount/req";
import { GetAccountResponse } from "./GetAccount/res";
import { GetFolderRequest } from "./GetFolder/req";
import { GetFolderResponse } from "./GetFolder/res";
import { ListAncestorsRequest } from "./ListAncestors/req";
import { ListAncestorsResponse } from "./ListAncestors/res";
import { ListHandshakesForResourceDirectoryRequest } from "./ListHandshakesForResourceDirectory/req";
import { ListHandshakesForResourceDirectoryResponse } from "./ListHandshakesForResourceDirectory/res";
import { ListFoldersForParentRequest } from "./ListFoldersForParent/req";
import { ListFoldersForParentResponse } from "./ListFoldersForParent/res";
import { GetAccountDeletionCheckResultRequest } from "./GetAccountDeletionCheckResult/req";
import { GetAccountDeletionCheckResultResponse } from "./GetAccountDeletionCheckResult/res";
import { GetAccountDeletionStatusRequest } from "./GetAccountDeletionStatus/req";
import { GetAccountDeletionStatusResponse } from "./GetAccountDeletionStatus/res";
import { RemoveCloudAccountRequest } from "./RemoveCloudAccount/req";
import { RemoveCloudAccountResponse } from "./RemoveCloudAccount/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { UpdateAccountRequest } from "./UpdateAccount/req";
import { UpdateAccountResponse } from "./UpdateAccount/res";
import { MoveAccountRequest } from "./MoveAccount/req";
import { MoveAccountResponse } from "./MoveAccount/res";
import { InviteAccountToResourceDirectoryRequest } from "./InviteAccountToResourceDirectory/req";
import { InviteAccountToResourceDirectoryResponse } from "./InviteAccountToResourceDirectory/res";
import { CheckAccountDeleteRequest } from "./CheckAccountDelete/req";
import { CheckAccountDeleteResponse } from "./CheckAccountDelete/res";
import { SendVerificationCodeForEnableRDRequest } from "./SendVerificationCodeForEnableRD/req";
import { SendVerificationCodeForEnableRDResponse } from "./SendVerificationCodeForEnableRD/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { PrecheckForConsolidatedBillingAccountRequest } from "./PrecheckForConsolidatedBillingAccount/req";
import { PrecheckForConsolidatedBillingAccountResponse } from "./PrecheckForConsolidatedBillingAccount/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UpdateControlPolicyRequest } from "./UpdateControlPolicy/req";
import { UpdateControlPolicyResponse } from "./UpdateControlPolicy/res";
import { SendVerificationCodeForBindSecureMobilePhoneRequest } from "./SendVerificationCodeForBindSecureMobilePhone/req";
import { SendVerificationCodeForBindSecureMobilePhoneResponse } from "./SendVerificationCodeForBindSecureMobilePhone/res";
import { RegisterDelegatedAdministratorRequest } from "./RegisterDelegatedAdministrator/req";
import { RegisterDelegatedAdministratorResponse } from "./RegisterDelegatedAdministrator/res";
import { DisableControlPolicyRequest } from "./DisableControlPolicy/req";
import { DisableControlPolicyResponse } from "./DisableControlPolicy/res";
import { DeleteControlPolicyRequest } from "./DeleteControlPolicy/req";
import { DeleteControlPolicyResponse } from "./DeleteControlPolicy/res";
import { DeclineHandshakeRequest } from "./DeclineHandshake/req";
import { DeclineHandshakeResponse } from "./DeclineHandshake/res";
import { SetMemberDeletionPermissionRequest } from "./SetMemberDeletionPermission/req";
import { SetMemberDeletionPermissionResponse } from "./SetMemberDeletionPermission/res";
import { DestroyResourceDirectoryRequest } from "./DestroyResourceDirectory/req";
import { DestroyResourceDirectoryResponse } from "./DestroyResourceDirectory/res";
import { DeregisterDelegatedAdministratorRequest } from "./DeregisterDelegatedAdministrator/req";
import { DeregisterDelegatedAdministratorResponse } from "./DeregisterDelegatedAdministrator/res";
import { EnableResourceDirectoryRequest } from "./EnableResourceDirectory/req";
import { EnableResourceDirectoryResponse } from "./EnableResourceDirectory/res";
import { AttachControlPolicyRequest } from "./AttachControlPolicy/req";
import { AttachControlPolicyResponse } from "./AttachControlPolicy/res";
import { CancelHandshakeRequest } from "./CancelHandshake/req";
import { CancelHandshakeResponse } from "./CancelHandshake/res";
import { BindSecureMobilePhoneRequest } from "./BindSecureMobilePhone/req";
import { BindSecureMobilePhoneResponse } from "./BindSecureMobilePhone/res";
import { CreateControlPolicyRequest } from "./CreateControlPolicy/req";
import { CreateControlPolicyResponse } from "./CreateControlPolicy/res";
import { CreateResourceAccountRequest } from "./CreateResourceAccount/req";
import { CreateResourceAccountResponse } from "./CreateResourceAccount/res";
import { UpdateFolderRequest } from "./UpdateFolder/req";
import { UpdateFolderResponse } from "./UpdateFolder/res";
import { DetachControlPolicyRequest } from "./DetachControlPolicy/req";
import { DetachControlPolicyResponse } from "./DetachControlPolicy/res";
import { EnableControlPolicyRequest } from "./EnableControlPolicy/req";
import { EnableControlPolicyResponse } from "./EnableControlPolicy/res";
import { AcceptHandshakeRequest } from "./AcceptHandshake/req";
import { AcceptHandshakeResponse } from "./AcceptHandshake/res";
import { DeleteFolderRequest } from "./DeleteFolder/req";
import { DeleteFolderResponse } from "./DeleteFolder/res";
import { CreateFolderRequest } from "./CreateFolder/req";
import { CreateFolderResponse } from "./CreateFolder/res";
import { RetryChangeAccountEmailRequest } from "./RetryChangeAccountEmail/req";
import { RetryChangeAccountEmailResponse } from "./RetryChangeAccountEmail/res";
import { ChangeAccountEmailRequest } from "./ChangeAccountEmail/req";
import { ChangeAccountEmailResponse } from "./ChangeAccountEmail/res";
import { CancelChangeAccountEmailRequest } from "./CancelChangeAccountEmail/req";
import { CancelChangeAccountEmailResponse } from "./CancelChangeAccountEmail/res";
import { SendEmailVerificationForMessageContactRequest } from "./SendEmailVerificationForMessageContact/req";
import { SendEmailVerificationForMessageContactResponse } from "./SendEmailVerificationForMessageContact/res";
import { GetMessageContactDeletionStatusRequest } from "./GetMessageContactDeletionStatus/req";
import { GetMessageContactDeletionStatusResponse } from "./GetMessageContactDeletionStatus/res";
import { AddMessageContactRequest } from "./AddMessageContact/req";
import { AddMessageContactResponse } from "./AddMessageContact/res";
import { DeleteMessageContactRequest } from "./DeleteMessageContact/req";
import { DeleteMessageContactResponse } from "./DeleteMessageContact/res";
import { CancelMessageContactUpdateRequest } from "./CancelMessageContactUpdate/req";
import { CancelMessageContactUpdateResponse } from "./CancelMessageContactUpdate/res";
import { SendPhoneVerificationForMessageContactRequest } from "./SendPhoneVerificationForMessageContact/req";
import { SendPhoneVerificationForMessageContactResponse } from "./SendPhoneVerificationForMessageContact/res";
import { ListMessageContactVerificationsRequest } from "./ListMessageContactVerifications/req";
import { ListMessageContactVerificationsResponse } from "./ListMessageContactVerifications/res";
import { UpdateMessageContactRequest } from "./UpdateMessageContact/req";
import { UpdateMessageContactResponse } from "./UpdateMessageContact/res";
import { ListMessageContactsRequest } from "./ListMessageContacts/req";
import { ListMessageContactsResponse } from "./ListMessageContacts/res";
import { GetMessageContactRequest } from "./GetMessageContact/req";
import { GetMessageContactResponse } from "./GetMessageContact/res";
import { AssociateMembersRequest } from "./AssociateMembers/req";
import { AssociateMembersResponse } from "./AssociateMembers/res";
import { DisassociateMembersRequest } from "./DisassociateMembers/req";
import { DisassociateMembersResponse } from "./DisassociateMembers/res";

interface RESOURCEDIRECTORYMASTER {
    /**
     * 调用ListTagKeys查询标签键列表。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 调用ListTagValues查询指定标签键对应的标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 调用ListTagResources查询资源目录成员绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用ListDelegatedAdministrators查询可信服务的委派管理员账号列表。
     */
    ListDelegatedAdministrators(query: ListDelegatedAdministratorsRequest): Promise<ListDelegatedAdministratorsResponse>;
    /**
     * 调用ListAccountsForParent查询资源夹下的成员列表。
     */
    ListAccountsForParent(query: ListAccountsForParentRequest): Promise<ListAccountsForParentResponse>;
    /**
     * 调用ListHandshakesForAccount查询当前账号的邀请记录。
     */
    ListHandshakesForAccount(query: ListHandshakesForAccountRequest): Promise<ListHandshakesForAccountResponse>;
    /**
     * 调用GetHandshake获取邀请信息。
     */
    GetHandshake(query: GetHandshakeRequest): Promise<GetHandshakeResponse>;
    /**
     * 调用ListDelegatedServicesForAccount查询指定成员被设置为哪些可信服务的委派管理员账号。
     */
    ListDelegatedServicesForAccount(query: ListDelegatedServicesForAccountRequest): Promise<ListDelegatedServicesForAccountResponse>;
    /**
     * 调用GetResourceDirectory获取资源目录信息。管理账号调用时，返回管理账号开通的资源目录详情。成员调用时，返回成员所属的资源目录详情。
     */
    GetResourceDirectory(query: GetResourceDirectoryRequest): Promise<GetResourceDirectoryResponse>;
    /**
     * 调用ListTrustedServiceStatus查询企业管理账号或委派管理员账号已启用的可信服务列表。
     */
    ListTrustedServiceStatus(query: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse>;
    /**
     * 调用ListControlPolicies查询管控策略列表。
     */
    ListControlPolicies(query: ListControlPoliciesRequest): Promise<ListControlPoliciesResponse>;
    /**
     * 调用ListControlPolicyAttachmentsForTarget查询资源夹或成员绑定的管控策略列表。
     */
    ListControlPolicyAttachmentsForTarget(query: ListControlPolicyAttachmentsForTargetRequest): Promise<ListControlPolicyAttachmentsForTargetResponse>;
    /**
     * 调用GetPayerForAccount获取结算账号信息。
     */
    GetPayerForAccount(query: GetPayerForAccountRequest): Promise<GetPayerForAccountResponse>;
    /**
     * 调用ListTargetAttachmentsForControlPolicy查询管控策略绑定的目标节点。
     */
    ListTargetAttachmentsForControlPolicy(query: ListTargetAttachmentsForControlPolicyRequest): Promise<ListTargetAttachmentsForControlPolicyResponse>;
    /**
     * 调用GetControlPolicy查询管控策略的详情。
     */
    GetControlPolicy(query: GetControlPolicyRequest): Promise<GetControlPolicyResponse>;
    /**
     * 调用GetControlPolicyEnablementStatus查询管控策略功能的开启或关闭状态。
     */
    GetControlPolicyEnablementStatus(query: GetControlPolicyEnablementStatusRequest): Promise<GetControlPolicyEnablementStatusResponse>;
    /**
     * 调用ListAccounts查询整个资源目录下的所有成员列表。
     */
    ListAccounts(query: ListAccountsRequest): Promise<ListAccountsResponse>;
    /**
     * 调用GetAccount查询成员信息。
     */
    GetAccount(query: GetAccountRequest): Promise<GetAccountResponse>;
    /**
     * 调用GetFolder获取资源夹信息。
     */
    GetFolder(query: GetFolderRequest): Promise<GetFolderResponse>;
    /**
     * 调用ListAncestors查看指定资源夹的所有父资源夹信息。
     */
    ListAncestors(query: ListAncestorsRequest): Promise<ListAncestorsResponse>;
    /**
     * 调用ListHandshakesForResourceDirectory查看资源目录下的所有邀请列表。
     */
    ListHandshakesForResourceDirectory(query: ListHandshakesForResourceDirectoryRequest): Promise<ListHandshakesForResourceDirectoryResponse>;
    /**
     * 调用ListFoldersForParent查询指定资源夹的子资源夹列表。
     */
    ListFoldersForParent(query: ListFoldersForParentRequest): Promise<ListFoldersForParentResponse>;
    /**
     * 调用GetAccountDeletionCheckResult查询成员删除检查结果。
     */
    GetAccountDeletionCheckResult(query: GetAccountDeletionCheckResultRequest): Promise<GetAccountDeletionCheckResultResponse>;
    /**
     * 调用GetAccountDeletionStatus查询成员删除状态。
     */
    GetAccountDeletionStatus(query: GetAccountDeletionStatusRequest): Promise<GetAccountDeletionStatusResponse>;
    /**
     * 调用RemoveCloudAccount移除云账号类型的成员。
     */
    RemoveCloudAccount(query: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse>;
    /**
     * 调用DeleteAccount删除资源类型的成员。
     */
    DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * 调用UpdateAccount修改成员名称或切换成员类型。
     */
    UpdateAccount(query: UpdateAccountRequest): Promise<UpdateAccountResponse>;
    /**
     * 调用MoveAccount将成员移动到另一个资源夹。
     */
    MoveAccount(query: MoveAccountRequest): Promise<MoveAccountResponse>;
    /**
     * 调用InviteAccountToResourceDirectory邀请外部账号加入资源目录。
     */
    InviteAccountToResourceDirectory(query: InviteAccountToResourceDirectoryRequest): Promise<InviteAccountToResourceDirectoryResponse>;
    /**
     * 调用CheckAccountDelete执行成员删除检查任务。
     */
    CheckAccountDelete(query: CheckAccountDeleteRequest): Promise<CheckAccountDeleteResponse>;
    /**
     * 通过新创建的管理账号开通资源目录时，调用SendVerificationCodeForEnableRD向新管理账号的安全手机发送验证码。
     */
    SendVerificationCodeForEnableRD(query: SendVerificationCodeForEnableRDRequest): Promise<SendVerificationCodeForEnableRDResponse>;
    /**
     * 调用UntagResources解绑资源目成员的标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 检查管理账号或者成员是否可以作为财务托管主账号。
     */
    PrecheckForConsolidatedBillingAccount(query: PrecheckForConsolidatedBillingAccountRequest): Promise<PrecheckForConsolidatedBillingAccountResponse>;
    /**
     * 调用TagResources为资源目录的成员绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用UpdateControlPolicy修改自定义管控策略。
     */
    UpdateControlPolicy(query: UpdateControlPolicyRequest): Promise<UpdateControlPolicyResponse>;
    /**
     * 为资源账号类型的成员设置安全手机号码时，调用SendVerificationCodeForBindSecureMobilePhone向安全手机发送验证码。
     */
    SendVerificationCodeForBindSecureMobilePhone(query: SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<SendVerificationCodeForBindSecureMobilePhoneResponse>;
    /**
     * 调用RegisterDelegatedAdministrator将资源目录的成员设置为可信服务的委派管理员账号。
     */
    RegisterDelegatedAdministrator(query: RegisterDelegatedAdministratorRequest): Promise<RegisterDelegatedAdministratorResponse>;
    /**
     * 调用DisableControlPolicy关闭管控策略功能。
     */
    DisableControlPolicy(query: DisableControlPolicyRequest): Promise<DisableControlPolicyResponse>;
    /**
     * 调用DeleteControlPolicy删除自定义管控策略。
     */
    DeleteControlPolicy(query: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse>;
    /**
     * 调用DeclineHandshake拒绝邀请。
     */
    DeclineHandshake(query: DeclineHandshakeRequest): Promise<DeclineHandshakeResponse>;
    /**
     * 调用SetMemberDeletionPermission开启或关闭成员删除许可。
     */
    SetMemberDeletionPermission(query: SetMemberDeletionPermissionRequest): Promise<SetMemberDeletionPermissionResponse>;
    /**
     * 调用DestroyResourceDirectory关闭资源目录。此操作不可恢复，请您慎重操作。
     */
    DestroyResourceDirectory(query: DestroyResourceDirectoryRequest): Promise<DestroyResourceDirectoryResponse>;
    /**
     * 调用DeregisterDelegatedAdministrator移除可信服务的委派管理员账号。
     */
    DeregisterDelegatedAdministrator(query: DeregisterDelegatedAdministratorRequest): Promise<DeregisterDelegatedAdministratorResponse>;
    /**
     * 调用EnableResourceDirectory开通资源目录。
     */
    EnableResourceDirectory(query: EnableResourceDirectoryRequest): Promise<EnableResourceDirectoryResponse>;
    /**
     * 调用AttachControlPolicy绑定管控策略。
     */
    AttachControlPolicy(query: AttachControlPolicyRequest): Promise<AttachControlPolicyResponse>;
    /**
     * 调用CancelHandshake取消邀请。
     */
    CancelHandshake(query: CancelHandshakeRequest): Promise<CancelHandshakeResponse>;
    /**
     * 调用BindSecureMobilePhone为资源账号类型的成员设置安全手机号码。
     */
    BindSecureMobilePhone(query: BindSecureMobilePhoneRequest): Promise<BindSecureMobilePhoneResponse>;
    /**
     * 调用CreateControlPolicy创建自定义管控策略。
     */
    CreateControlPolicy(query: CreateControlPolicyRequest): Promise<CreateControlPolicyResponse>;
    /**
     * 调用CreateResourceAccount创建资源账号类型的成员。
     */
    CreateResourceAccount(query: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse>;
    /**
     * 调用UpdateFolder修改资源夹名称。
     */
    UpdateFolder(query: UpdateFolderRequest): Promise<UpdateFolderResponse>;
    /**
     * 调用DetachControlPolicy解绑管控策略。
     */
    DetachControlPolicy(query: DetachControlPolicyRequest): Promise<DetachControlPolicyResponse>;
    /**
     * 调用EnableControlPolicy开启管控策略功能。
     */
    EnableControlPolicy(query: EnableControlPolicyRequest): Promise<EnableControlPolicyResponse>;
    /**
     * 被邀请的阿里云账号调用AcceptHandshake接受邀请。
     */
    AcceptHandshake(query: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse>;
    /**
     * 调用DeleteFolder删除资源夹。
     */
    DeleteFolder(query: DeleteFolderRequest): Promise<DeleteFolderResponse>;
    /**
     * 调用CreateFolder创建资源夹。
     */
    CreateFolder(query: CreateFolderRequest): Promise<CreateFolderResponse>;
    /**
     * 调用RetryChangeAccountEmail重新发送修改成员邮箱的确认邮件。
     */
    RetryChangeAccountEmail(query: RetryChangeAccountEmailRequest): Promise<RetryChangeAccountEmailResponse>;
    /**
     * 调用ChangeAccountEmail修改成员邮箱。
     */
    ChangeAccountEmail(query: ChangeAccountEmailRequest): Promise<ChangeAccountEmailResponse>;
    /**
     * 调用CancelChangeAccountEmail取消修改成员邮箱。
     */
    CancelChangeAccountEmail(query: CancelChangeAccountEmailRequest): Promise<CancelChangeAccountEmailResponse>;
    /**
     * 向联系人的邮箱发送验证信息。
     */
    SendEmailVerificationForMessageContact(query: SendEmailVerificationForMessageContactRequest): Promise<SendEmailVerificationForMessageContactResponse>;
    /**
     * 查询联系人删除状态。
     */
    GetMessageContactDeletionStatus(query: GetMessageContactDeletionStatusRequest): Promise<GetMessageContactDeletionStatusResponse>;
    /**
     * 添加消息通知联系人。
     */
    AddMessageContact(query: AddMessageContactRequest): Promise<AddMessageContactResponse>;
    /**
     * 删除联系人。
     */
    DeleteMessageContact(query: DeleteMessageContactRequest): Promise<DeleteMessageContactResponse>;
    /**
     * 取消更新联系人手机或邮箱。
     */
    CancelMessageContactUpdate(query: CancelMessageContactUpdateRequest): Promise<CancelMessageContactUpdateResponse>;
    /**
     * 向联系人的手机号码发送验证信息。
     */
    SendPhoneVerificationForMessageContact(query: SendPhoneVerificationForMessageContactRequest): Promise<SendPhoneVerificationForMessageContactResponse>;
    /**
     * 查询联系人的手机或邮箱的待验证记录。
     */
    ListMessageContactVerifications(query: ListMessageContactVerificationsRequest): Promise<ListMessageContactVerificationsResponse>;
    /**
     * 更新联系人信息。
     */
    UpdateMessageContact(query: UpdateMessageContactRequest): Promise<UpdateMessageContactResponse>;
    /**
     * 查询联系人列表。
     */
    ListMessageContacts(query: ListMessageContactsRequest): Promise<ListMessageContactsResponse>;
    /**
     * 查询联系人信息。
     */
    GetMessageContact(query: GetMessageContactRequest): Promise<GetMessageContactResponse>;
    /**
     * 为资源目录、资源夹或成员绑定联系人。
     */
    AssociateMembers(query: AssociateMembersRequest): Promise<AssociateMembersResponse>;
    /**
     * 为资源目录、资源夹或成员解绑联系人。
     */
    DisassociateMembers(query: DisassociateMembersRequest): Promise<DisassociateMembersResponse>;
}
export default RESOURCEDIRECTORYMASTER;
