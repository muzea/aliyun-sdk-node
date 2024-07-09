import { AddUserToGroupRequest } from "./AddUserToGroup/req";
import { AddUserToGroupResponse } from "./AddUserToGroup/res";
import { AttachPolicyToGroupRequest } from "./AttachPolicyToGroup/req";
import { AttachPolicyToGroupResponse } from "./AttachPolicyToGroup/res";
import { AttachPolicyToRoleRequest } from "./AttachPolicyToRole/req";
import { AttachPolicyToRoleResponse } from "./AttachPolicyToRole/res";
import { AttachPolicyToUserRequest } from "./AttachPolicyToUser/req";
import { AttachPolicyToUserResponse } from "./AttachPolicyToUser/res";
import { BindMFADeviceRequest } from "./BindMFADevice/req";
import { BindMFADeviceResponse } from "./BindMFADevice/res";
import { ChangePasswordRequest } from "./ChangePassword/req";
import { ChangePasswordResponse } from "./ChangePassword/res";
import { ClearAccountAliasRequest } from "./ClearAccountAlias/req";
import { ClearAccountAliasResponse } from "./ClearAccountAlias/res";
import { CreateAccessKeyRequest } from "./CreateAccessKey/req";
import { CreateAccessKeyResponse } from "./CreateAccessKey/res";
import { CreateGroupRequest } from "./CreateGroup/req";
import { CreateGroupResponse } from "./CreateGroup/res";
import { CreateLoginProfileRequest } from "./CreateLoginProfile/req";
import { CreateLoginProfileResponse } from "./CreateLoginProfile/res";
import { CreatePolicyRequest } from "./CreatePolicy/req";
import { CreatePolicyResponse } from "./CreatePolicy/res";
import { CreatePolicyVersionRequest } from "./CreatePolicyVersion/req";
import { CreatePolicyVersionResponse } from "./CreatePolicyVersion/res";
import { CreateRoleRequest } from "./CreateRole/req";
import { CreateRoleResponse } from "./CreateRole/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { CreateVirtualMFADeviceRequest } from "./CreateVirtualMFADevice/req";
import { CreateVirtualMFADeviceResponse } from "./CreateVirtualMFADevice/res";
import { DeleteAccessKeyRequest } from "./DeleteAccessKey/req";
import { DeleteAccessKeyResponse } from "./DeleteAccessKey/res";
import { DeleteGroupRequest } from "./DeleteGroup/req";
import { DeleteGroupResponse } from "./DeleteGroup/res";
import { DeleteLoginProfileRequest } from "./DeleteLoginProfile/req";
import { DeleteLoginProfileResponse } from "./DeleteLoginProfile/res";
import { DeletePolicyRequest } from "./DeletePolicy/req";
import { DeletePolicyResponse } from "./DeletePolicy/res";
import { DeletePolicyVersionRequest } from "./DeletePolicyVersion/req";
import { DeletePolicyVersionResponse } from "./DeletePolicyVersion/res";
import { DeleteRoleRequest } from "./DeleteRole/req";
import { DeleteRoleResponse } from "./DeleteRole/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DeleteVirtualMFADeviceRequest } from "./DeleteVirtualMFADevice/req";
import { DeleteVirtualMFADeviceResponse } from "./DeleteVirtualMFADevice/res";
import { DetachPolicyFromGroupRequest } from "./DetachPolicyFromGroup/req";
import { DetachPolicyFromGroupResponse } from "./DetachPolicyFromGroup/res";
import { DetachPolicyFromRoleRequest } from "./DetachPolicyFromRole/req";
import { DetachPolicyFromRoleResponse } from "./DetachPolicyFromRole/res";
import { DetachPolicyFromUserRequest } from "./DetachPolicyFromUser/req";
import { DetachPolicyFromUserResponse } from "./DetachPolicyFromUser/res";
import { GetAccessKeyLastUsedRequest } from "./GetAccessKeyLastUsed/req";
import { GetAccessKeyLastUsedResponse } from "./GetAccessKeyLastUsed/res";
import { GetAccountAliasRequest } from "./GetAccountAlias/req";
import { GetAccountAliasResponse } from "./GetAccountAlias/res";
import { GetGroupRequest } from "./GetGroup/req";
import { GetGroupResponse } from "./GetGroup/res";
import { GetLoginProfileRequest } from "./GetLoginProfile/req";
import { GetLoginProfileResponse } from "./GetLoginProfile/res";
import { GetPasswordPolicyRequest } from "./GetPasswordPolicy/req";
import { GetPasswordPolicyResponse } from "./GetPasswordPolicy/res";
import { GetPolicyRequest } from "./GetPolicy/req";
import { GetPolicyResponse } from "./GetPolicy/res";
import { GetPolicyVersionRequest } from "./GetPolicyVersion/req";
import { GetPolicyVersionResponse } from "./GetPolicyVersion/res";
import { GetRoleRequest } from "./GetRole/req";
import { GetRoleResponse } from "./GetRole/res";
import { GetSecurityPreferenceRequest } from "./GetSecurityPreference/req";
import { GetSecurityPreferenceResponse } from "./GetSecurityPreference/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { GetUserMFAInfoRequest } from "./GetUserMFAInfo/req";
import { GetUserMFAInfoResponse } from "./GetUserMFAInfo/res";
import { ListAccessKeysRequest } from "./ListAccessKeys/req";
import { ListAccessKeysResponse } from "./ListAccessKeys/res";
import { ListEntitiesForPolicyRequest } from "./ListEntitiesForPolicy/req";
import { ListEntitiesForPolicyResponse } from "./ListEntitiesForPolicy/res";
import { ListGroupsRequest } from "./ListGroups/req";
import { ListGroupsResponse } from "./ListGroups/res";
import { ListGroupsForUserRequest } from "./ListGroupsForUser/req";
import { ListGroupsForUserResponse } from "./ListGroupsForUser/res";
import { ListPoliciesRequest } from "./ListPolicies/req";
import { ListPoliciesResponse } from "./ListPolicies/res";
import { ListPoliciesForGroupRequest } from "./ListPoliciesForGroup/req";
import { ListPoliciesForGroupResponse } from "./ListPoliciesForGroup/res";
import { ListPoliciesForRoleRequest } from "./ListPoliciesForRole/req";
import { ListPoliciesForRoleResponse } from "./ListPoliciesForRole/res";
import { ListPoliciesForUserRequest } from "./ListPoliciesForUser/req";
import { ListPoliciesForUserResponse } from "./ListPoliciesForUser/res";
import { ListPolicyVersionsRequest } from "./ListPolicyVersions/req";
import { ListPolicyVersionsResponse } from "./ListPolicyVersions/res";
import { ListRolesRequest } from "./ListRoles/req";
import { ListRolesResponse } from "./ListRoles/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { ListUsersForGroupRequest } from "./ListUsersForGroup/req";
import { ListUsersForGroupResponse } from "./ListUsersForGroup/res";
import { ListVirtualMFADevicesRequest } from "./ListVirtualMFADevices/req";
import { ListVirtualMFADevicesResponse } from "./ListVirtualMFADevices/res";
import { RemoveUserFromGroupRequest } from "./RemoveUserFromGroup/req";
import { RemoveUserFromGroupResponse } from "./RemoveUserFromGroup/res";
import { SetAccountAliasRequest } from "./SetAccountAlias/req";
import { SetAccountAliasResponse } from "./SetAccountAlias/res";
import { SetDefaultPolicyVersionRequest } from "./SetDefaultPolicyVersion/req";
import { SetDefaultPolicyVersionResponse } from "./SetDefaultPolicyVersion/res";
import { SetPasswordPolicyRequest } from "./SetPasswordPolicy/req";
import { SetPasswordPolicyResponse } from "./SetPasswordPolicy/res";
import { SetSecurityPreferenceRequest } from "./SetSecurityPreference/req";
import { SetSecurityPreferenceResponse } from "./SetSecurityPreference/res";
import { UnbindMFADeviceRequest } from "./UnbindMFADevice/req";
import { UnbindMFADeviceResponse } from "./UnbindMFADevice/res";
import { UpdateAccessKeyRequest } from "./UpdateAccessKey/req";
import { UpdateAccessKeyResponse } from "./UpdateAccessKey/res";
import { UpdateGroupRequest } from "./UpdateGroup/req";
import { UpdateGroupResponse } from "./UpdateGroup/res";
import { UpdateLoginProfileRequest } from "./UpdateLoginProfile/req";
import { UpdateLoginProfileResponse } from "./UpdateLoginProfile/res";
import { UpdateRoleRequest } from "./UpdateRole/req";
import { UpdateRoleResponse } from "./UpdateRole/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { UpdatePolicyDescriptionRequest } from "./UpdatePolicyDescription/req";
import { UpdatePolicyDescriptionResponse } from "./UpdatePolicyDescription/res";
import { DecodeDiagnosticMessageRequest } from "./DecodeDiagnosticMessage/req";
import { DecodeDiagnosticMessageResponse } from "./DecodeDiagnosticMessage/res";

interface RAM {
    /**
     * 调用AddUserToGroup接口将RAM用户添加到指定的用户组。
     */
    AddUserToGroup(query: AddUserToGroupRequest): Promise<AddUserToGroupResponse>;
    /**
     * 调用AttachPolicyToGroup接口为指定用户组添加权限。
     */
    AttachPolicyToGroup(query: AttachPolicyToGroupRequest): Promise<AttachPolicyToGroupResponse>;
    /**
     * 调用AttachPolicyToRole接口为指定角色添加权限。
     */
    AttachPolicyToRole(query: AttachPolicyToRoleRequest): Promise<AttachPolicyToRoleResponse>;
    /**
     * 调用AttachPolicyToUser接口为指定用户添加权限。
     */
    AttachPolicyToUser(query: AttachPolicyToUserRequest): Promise<AttachPolicyToUserResponse>;
    /**
     * 调用BindMFADevice接口绑定多因素认证设备。
     */
    BindMFADevice(query: BindMFADeviceRequest): Promise<BindMFADeviceResponse>;
    /**
     * RAM用户调用ChangePassword修改自己的控制台登录密码。
     */
    ChangePassword(query: ChangePasswordRequest): Promise<ChangePasswordResponse>;
    /**
     * 调用ClearAccountAlias接口清除云账号别名。
     */
    ClearAccountAlias(query: ClearAccountAliasRequest): Promise<ClearAccountAliasResponse>;
    /**
     * 调用CreateAccessKey接口为RAM用户创建访问密钥。
     */
    CreateAccessKey(query: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse>;
    /**
     * 调用CreateGroup接口创建用户组。
     */
    CreateGroup(query: CreateGroupRequest): Promise<CreateGroupResponse>;
    /**
     * 调用CreateLoginProfile接口为一个RAM用户启用Web控制台登录。
     */
    CreateLoginProfile(query: CreateLoginProfileRequest): Promise<CreateLoginProfileResponse>;
    /**
     * 调用CreatePolicy接口创建一个自定义权限策略。
     */
    CreatePolicy(query: CreatePolicyRequest): Promise<CreatePolicyResponse>;
    /**
     * 调用CreatePolicyVersion接口为权限策略创建新的版本。
     */
    CreatePolicyVersion(query: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse>;
    /**
     * 调用CreateRole接口创建RAM角色。
     */
    CreateRole(query: CreateRoleRequest): Promise<CreateRoleResponse>;
    /**
     * 调用CreateUser接口创建RAM用户。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 调用CreateVirtualMFADevice接口创建多因素认证设备。
     */
    CreateVirtualMFADevice(query: CreateVirtualMFADeviceRequest): Promise<CreateVirtualMFADeviceResponse>;
    /**
     * 调用DeleteAccessKey接口删除RAM用户的访问密钥。
     */
    DeleteAccessKey(query: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse>;
    /**
     * 调用DeleteGroup接口删除指定的用户组。
     */
    DeleteGroup(query: DeleteGroupRequest): Promise<DeleteGroupResponse>;
    /**
     * 关闭指定RAM用户登录Web控制台的功能。
     */
    DeleteLoginProfile(query: DeleteLoginProfileRequest): Promise<DeleteLoginProfileResponse>;
    /**
     * 调用DeletePolicy接口删除指定的权限策略。
     */
    DeletePolicy(query: DeletePolicyRequest): Promise<DeletePolicyResponse>;
    /**
     * 调用DeletePolicyVersion接口删除指定的权限策略的某个版本。
     */
    DeletePolicyVersion(query: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse>;
    /**
     * 调用DeleteRole接口删除指定的角色。
     */
    DeleteRole(query: DeleteRoleRequest): Promise<DeleteRoleResponse>;
    /**
     * 调用DeleteUser接口删除一个RAM用户。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 调用DeleteVirtualMFADevice接口删除多因素认证设备。
     */
    DeleteVirtualMFADevice(query: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse>;
    /**
     * 调用DetachPolicyFromGroup接口为用户组撤销指定的权限。
     */
    DetachPolicyFromGroup(query: DetachPolicyFromGroupRequest): Promise<DetachPolicyFromGroupResponse>;
    /**
     * 调用DetachPolicyFromRole接口为角色撤销指定的权限。
     */
    DetachPolicyFromRole(query: DetachPolicyFromRoleRequest): Promise<DetachPolicyFromRoleResponse>;
    /**
     * 调用DetachPolicyFromUser接口为用户撤销指定的权限。
     */
    DetachPolicyFromUser(query: DetachPolicyFromUserRequest): Promise<DetachPolicyFromUserResponse>;
    /**
     * 调用GetAccessKeyLastUsed查询指定访问密钥的最后使用时间。
     */
    GetAccessKeyLastUsed(query: GetAccessKeyLastUsedRequest): Promise<GetAccessKeyLastUsedResponse>;
    /**
     * 调用GetAccountAlias接口查看云账号别名。
     */
    GetAccountAlias(query: GetAccountAliasRequest): Promise<GetAccountAliasResponse>;
    /**
     * 调用GetGroup接口查询用户组信息。
     */
    GetGroup(query: GetGroupRequest): Promise<GetGroupResponse>;
    /**
     * 调用GetLoginProfile接口查看一个RAM用户的登录配置。
     */
    GetLoginProfile(query: GetLoginProfileRequest): Promise<GetLoginProfileResponse>;
    /**
     * 调用GetPasswordPolicy接口获取RAM用户密码强度等策略信息。
     */
    GetPasswordPolicy(query: GetPasswordPolicyRequest): Promise<GetPasswordPolicyResponse>;
    /**
     * 调用GetPolicy接口获取指定的权限策略信息。
     */
    GetPolicy(query: GetPolicyRequest): Promise<GetPolicyResponse>;
    /**
     * 调用GetPolicyVersion接口获取某个权限策略的版本。
     */
    GetPolicyVersion(query: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse>;
    /**
     * 调用GetRole接口获取角色信息。
     */
    GetRole(query: GetRoleRequest): Promise<GetRoleResponse>;
    /**
     * 调用GetSecurityPreference接口获取全局安全首选项详情。
     */
    GetSecurityPreference(query: GetSecurityPreferenceRequest): Promise<GetSecurityPreferenceResponse>;
    /**
     * 调用GetUser接口查询RAM用户的详细信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 获取指定RAM用户的多因素认证设备信息。
     */
    GetUserMFAInfo(query: GetUserMFAInfoRequest): Promise<GetUserMFAInfoResponse>;
    /**
     * 调用ListAccessKeys接口列出指定用户的访问密钥。
     */
    ListAccessKeys(query: ListAccessKeysRequest): Promise<ListAccessKeysResponse>;
    /**
     * 调用ListEntitiesForPolicy接口列出引用权限策略的实体。
     */
    ListEntitiesForPolicy(query: ListEntitiesForPolicyRequest): Promise<ListEntitiesForPolicyResponse>;
    /**
     * 查询用户组列表。
     */
    ListGroups(query: ListGroupsRequest): Promise<ListGroupsResponse>;
    /**
     * 调用ListGroupsForUser接口查询指定RAM用户所加入的用户组信息。
     */
    ListGroupsForUser(query: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse>;
    /**
     * 调用ListPolicies接口列出权限策略。
     */
    ListPolicies(query: ListPoliciesRequest): Promise<ListPoliciesResponse>;
    /**
     * 调用ListPoliciesForGroup接口列出用户组的权限策略。
     */
    ListPoliciesForGroup(query: ListPoliciesForGroupRequest): Promise<ListPoliciesForGroupResponse>;
    /**
     * 调用ListPoliciesForRole接口列出角色的权限策略。
     */
    ListPoliciesForRole(query: ListPoliciesForRoleRequest): Promise<ListPoliciesForRoleResponse>;
    /**
     * 调用ListPoliciesForUser接口查询RAM用户的授权列表。
     */
    ListPoliciesForUser(query: ListPoliciesForUserRequest): Promise<ListPoliciesForUserResponse>;
    /**
     * 调用ListPolicyVersions接口列出权限策略版本。
     */
    ListPolicyVersions(query: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse>;
    /**
     * 列出角色。
     */
    ListRoles(query: ListRolesRequest): Promise<ListRolesResponse>;
    /**
     * 查询所有RAM用户的详细信息。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 调用ListUsersForGroup接口列出指定用户组所包含的RAM用户。
     */
    ListUsersForGroup(query: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse>;
    /**
     * 调用ListVirtualMFADevices接口列出多因素认证设备。
     */
    ListVirtualMFADevices(query: ListVirtualMFADevicesRequest): Promise<ListVirtualMFADevicesResponse>;
    /**
     * 调用RemoveUserFromGroup接口将RAM用户从用户组中移除。
     */
    RemoveUserFromGroup(query: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse>;
    /**
     * 调用SetAccountAlias接口设置云账号别名。
     */
    SetAccountAlias(query: SetAccountAliasRequest): Promise<SetAccountAliasResponse>;
    /**
     * 调用SetDefaultPolicyVersion接口设置权限策略默认版本。
     */
    SetDefaultPolicyVersion(query: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse>;
    /**
     * 调用SetPasswordPolicy接口设置RAM用户密码强度等策略信息。
     */
    SetPasswordPolicy(query: SetPasswordPolicyRequest): Promise<SetPasswordPolicyResponse>;
    /**
     * 调用SetSecurityPreference接口设置全局安全首选项。
     */
    SetSecurityPreference(query: SetSecurityPreferenceRequest): Promise<SetSecurityPreferenceResponse>;
    /**
     * 调用UnbindMFADevice接口解绑多因素认证设备。
     */
    UnbindMFADevice(query: UnbindMFADeviceRequest): Promise<UnbindMFADeviceResponse>;
    /**
     * 调用UpdateAccessKey接口更新RAM用户访问密钥的状态。
     */
    UpdateAccessKey(query: UpdateAccessKeyRequest): Promise<UpdateAccessKeyResponse>;
    /**
     * 调用UpdateGroup接口修改用户组信息。
     */
    UpdateGroup(query: UpdateGroupRequest): Promise<UpdateGroupResponse>;
    /**
     * 调用UpdateLoginProfile接口修改用户的登录配置。
     */
    UpdateLoginProfile(query: UpdateLoginProfileRequest): Promise<UpdateLoginProfileResponse>;
    /**
     * 调用UpdateRole接口更新RAM角色信息。
     */
    UpdateRole(query: UpdateRoleRequest): Promise<UpdateRoleResponse>;
    /**
     * 调用UpdateUser接口更新RAM用户的基本信息。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 调用UpdatePolicyDescription更新自定义策略的描述信息。
     */
    UpdatePolicyDescription(query: UpdatePolicyDescriptionRequest): Promise<UpdatePolicyDescriptionResponse>;
    /**
     * 从因无RAM权限导致的请求被拒绝访问的响应体中解码无权限诊断信息。
     */
    DecodeDiagnosticMessage(query: DecodeDiagnosticMessageRequest): Promise<DecodeDiagnosticMessageResponse>;
}
export default RAM;
