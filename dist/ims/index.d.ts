import { AddUserToGroupRequest } from "./AddUserToGroup/req";
import { AddUserToGroupResponse } from "./AddUserToGroup/res";
import { BindMFADeviceRequest } from "./BindMFADevice/req";
import { BindMFADeviceResponse } from "./BindMFADevice/res";
import { ChangePasswordRequest } from "./ChangePassword/req";
import { ChangePasswordResponse } from "./ChangePassword/res";
import { CreateAppSecretRequest } from "./CreateAppSecret/req";
import { CreateAppSecretResponse } from "./CreateAppSecret/res";
import { CreateAccessKeyRequest } from "./CreateAccessKey/req";
import { CreateAccessKeyResponse } from "./CreateAccessKey/res";
import { CreateApplicationRequest } from "./CreateApplication/req";
import { CreateApplicationResponse } from "./CreateApplication/res";
import { CreateLoginProfileRequest } from "./CreateLoginProfile/req";
import { CreateLoginProfileResponse } from "./CreateLoginProfile/res";
import { CreateGroupRequest } from "./CreateGroup/req";
import { CreateGroupResponse } from "./CreateGroup/res";
import { CreateSAMLProviderRequest } from "./CreateSAMLProvider/req";
import { CreateSAMLProviderResponse } from "./CreateSAMLProvider/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { CreateVirtualMFADeviceRequest } from "./CreateVirtualMFADevice/req";
import { CreateVirtualMFADeviceResponse } from "./CreateVirtualMFADevice/res";
import { DeleteAccessKeyRequest } from "./DeleteAccessKey/req";
import { DeleteAccessKeyResponse } from "./DeleteAccessKey/res";
import { DeleteAppSecretRequest } from "./DeleteAppSecret/req";
import { DeleteAppSecretResponse } from "./DeleteAppSecret/res";
import { DeleteApplicationRequest } from "./DeleteApplication/req";
import { DeleteApplicationResponse } from "./DeleteApplication/res";
import { DeleteGroupRequest } from "./DeleteGroup/req";
import { DeleteGroupResponse } from "./DeleteGroup/res";
import { DeleteLoginProfileRequest } from "./DeleteLoginProfile/req";
import { DeleteLoginProfileResponse } from "./DeleteLoginProfile/res";
import { DeleteSAMLProviderRequest } from "./DeleteSAMLProvider/req";
import { DeleteSAMLProviderResponse } from "./DeleteSAMLProvider/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DeleteVirtualMFADeviceRequest } from "./DeleteVirtualMFADevice/req";
import { DeleteVirtualMFADeviceResponse } from "./DeleteVirtualMFADevice/res";
import { DisableVirtualMFARequest } from "./DisableVirtualMFA/req";
import { DisableVirtualMFAResponse } from "./DisableVirtualMFA/res";
import { GenerateCredentialReportRequest } from "./GenerateCredentialReport/req";
import { GenerateCredentialReportResponse } from "./GenerateCredentialReport/res";
import { GetAccessKeyLastUsedRequest } from "./GetAccessKeyLastUsed/req";
import { GetAccessKeyLastUsedResponse } from "./GetAccessKeyLastUsed/res";
import { GetAccountMFAInfoRequest } from "./GetAccountMFAInfo/req";
import { GetAccountMFAInfoResponse } from "./GetAccountMFAInfo/res";
import { GetAccountSecurityPracticeReportRequest } from "./GetAccountSecurityPracticeReport/req";
import { GetAccountSecurityPracticeReportResponse } from "./GetAccountSecurityPracticeReport/res";
import { GetAccountSummaryRequest } from "./GetAccountSummary/req";
import { GetAccountSummaryResponse } from "./GetAccountSummary/res";
import { GetAppSecretRequest } from "./GetAppSecret/req";
import { GetAppSecretResponse } from "./GetAppSecret/res";
import { GetApplicationRequest } from "./GetApplication/req";
import { GetApplicationResponse } from "./GetApplication/res";
import { GetCredentialReportRequest } from "./GetCredentialReport/req";
import { GetCredentialReportResponse } from "./GetCredentialReport/res";
import { GetDefaultDomainRequest } from "./GetDefaultDomain/req";
import { GetDefaultDomainResponse } from "./GetDefaultDomain/res";
import { GetGroupRequest } from "./GetGroup/req";
import { GetGroupResponse } from "./GetGroup/res";
import { GetLoginProfileRequest } from "./GetLoginProfile/req";
import { GetLoginProfileResponse } from "./GetLoginProfile/res";
import { GetPasswordPolicyRequest } from "./GetPasswordPolicy/req";
import { GetPasswordPolicyResponse } from "./GetPasswordPolicy/res";
import { GetSAMLProviderRequest } from "./GetSAMLProvider/req";
import { GetSAMLProviderResponse } from "./GetSAMLProvider/res";
import { GetSecurityPreferenceRequest } from "./GetSecurityPreference/req";
import { GetSecurityPreferenceResponse } from "./GetSecurityPreference/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { GetUserMFAInfoRequest } from "./GetUserMFAInfo/req";
import { GetUserMFAInfoResponse } from "./GetUserMFAInfo/res";
import { GetUserSsoSettingsRequest } from "./GetUserSsoSettings/req";
import { GetUserSsoSettingsResponse } from "./GetUserSsoSettings/res";
import { ListAccessKeysRequest } from "./ListAccessKeys/req";
import { ListAccessKeysResponse } from "./ListAccessKeys/res";
import { ListAppSecretIdsRequest } from "./ListAppSecretIds/req";
import { ListAppSecretIdsResponse } from "./ListAppSecretIds/res";
import { ListApplicationsRequest } from "./ListApplications/req";
import { ListApplicationsResponse } from "./ListApplications/res";
import { ListGroupsRequest } from "./ListGroups/req";
import { ListGroupsResponse } from "./ListGroups/res";
import { ListGroupsForUserRequest } from "./ListGroupsForUser/req";
import { ListGroupsForUserResponse } from "./ListGroupsForUser/res";
import { ListPredefinedScopesRequest } from "./ListPredefinedScopes/req";
import { ListPredefinedScopesResponse } from "./ListPredefinedScopes/res";
import { ListSAMLProvidersRequest } from "./ListSAMLProviders/req";
import { ListSAMLProvidersResponse } from "./ListSAMLProviders/res";
import { ListUserBasicInfosRequest } from "./ListUserBasicInfos/req";
import { ListUserBasicInfosResponse } from "./ListUserBasicInfos/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { ListUsersForGroupRequest } from "./ListUsersForGroup/req";
import { ListUsersForGroupResponse } from "./ListUsersForGroup/res";
import { ListVirtualMFADevicesRequest } from "./ListVirtualMFADevices/req";
import { ListVirtualMFADevicesResponse } from "./ListVirtualMFADevices/res";
import { RemoveUserFromGroupRequest } from "./RemoveUserFromGroup/req";
import { RemoveUserFromGroupResponse } from "./RemoveUserFromGroup/res";
import { SetDefaultDomainRequest } from "./SetDefaultDomain/req";
import { SetDefaultDomainResponse } from "./SetDefaultDomain/res";
import { SetPasswordPolicyRequest } from "./SetPasswordPolicy/req";
import { SetPasswordPolicyResponse } from "./SetPasswordPolicy/res";
import { SetSecurityPreferenceRequest } from "./SetSecurityPreference/req";
import { SetSecurityPreferenceResponse } from "./SetSecurityPreference/res";
import { SetUserSsoSettingsRequest } from "./SetUserSsoSettings/req";
import { SetUserSsoSettingsResponse } from "./SetUserSsoSettings/res";
import { UnbindMFADeviceRequest } from "./UnbindMFADevice/req";
import { UnbindMFADeviceResponse } from "./UnbindMFADevice/res";
import { UpdateAccessKeyRequest } from "./UpdateAccessKey/req";
import { UpdateAccessKeyResponse } from "./UpdateAccessKey/res";
import { UpdateApplicationRequest } from "./UpdateApplication/req";
import { UpdateApplicationResponse } from "./UpdateApplication/res";
import { UpdateGroupRequest } from "./UpdateGroup/req";
import { UpdateGroupResponse } from "./UpdateGroup/res";
import { UpdateLoginProfileRequest } from "./UpdateLoginProfile/req";
import { UpdateLoginProfileResponse } from "./UpdateLoginProfile/res";
import { UpdateSAMLProviderRequest } from "./UpdateSAMLProvider/req";
import { UpdateSAMLProviderResponse } from "./UpdateSAMLProvider/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { RemoveClientIdFromOIDCProviderRequest } from "./RemoveClientIdFromOIDCProvider/req";
import { RemoveClientIdFromOIDCProviderResponse } from "./RemoveClientIdFromOIDCProvider/res";
import { UpdateOIDCProviderRequest } from "./UpdateOIDCProvider/req";
import { UpdateOIDCProviderResponse } from "./UpdateOIDCProvider/res";
import { CreateOIDCProviderRequest } from "./CreateOIDCProvider/req";
import { CreateOIDCProviderResponse } from "./CreateOIDCProvider/res";
import { AddClientIdToOIDCProviderRequest } from "./AddClientIdToOIDCProvider/req";
import { AddClientIdToOIDCProviderResponse } from "./AddClientIdToOIDCProvider/res";
import { GetOIDCProviderRequest } from "./GetOIDCProvider/req";
import { GetOIDCProviderResponse } from "./GetOIDCProvider/res";
import { RemoveFingerprintFromOIDCProviderRequest } from "./RemoveFingerprintFromOIDCProvider/req";
import { RemoveFingerprintFromOIDCProviderResponse } from "./RemoveFingerprintFromOIDCProvider/res";
import { AddFingerprintToOIDCProviderRequest } from "./AddFingerprintToOIDCProvider/req";
import { AddFingerprintToOIDCProviderResponse } from "./AddFingerprintToOIDCProvider/res";
import { DeleteOIDCProviderRequest } from "./DeleteOIDCProvider/req";
import { DeleteOIDCProviderResponse } from "./DeleteOIDCProvider/res";
import { ListOIDCProvidersRequest } from "./ListOIDCProviders/req";
import { ListOIDCProvidersResponse } from "./ListOIDCProviders/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { GetVerificationInfoRequest } from "./GetVerificationInfo/req";
import { GetVerificationInfoResponse } from "./GetVerificationInfo/res";

interface IMS {
    /**
     * 将指定的RAM用户添加到指定的用户组。
     */
    AddUserToGroup(query: AddUserToGroupRequest): Promise<AddUserToGroupResponse>;
    /**
     * 为RAM用户绑定指定的多因素认证设备。
     */
    BindMFADevice(query: BindMFADeviceRequest): Promise<BindMFADeviceResponse>;
    /**
     * RAM用户为自己修改控制台登录密码。
     */
    ChangePassword(query: ChangePasswordRequest): Promise<ChangePasswordResponse>;
    /**
     * 为指定的应用创建一个应用密钥。
     */
    CreateAppSecret(query: CreateAppSecretRequest): Promise<CreateAppSecretResponse>;
    /**
     * 创建阿里云账号（主账号）或RAM用户的访问密钥。
     */
    CreateAccessKey(query: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse>;
    /**
     * 创建一个应用。
     */
    CreateApplication(query: CreateApplicationRequest): Promise<CreateApplicationResponse>;
    /**
     * 为RAM用户创建登录配置。
     */
    CreateLoginProfile(query: CreateLoginProfileRequest): Promise<CreateLoginProfileResponse>;
    /**
     * 创建一个用户组。
     */
    CreateGroup(query: CreateGroupRequest): Promise<CreateGroupResponse>;
    /**
     * 创建一个角色SSO的身份提供商配置。
     */
    CreateSAMLProvider(query: CreateSAMLProviderRequest): Promise<CreateSAMLProviderResponse>;
    /**
     * 创建RAM用户。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 创建一个虚拟多因素认证设备。
     */
    CreateVirtualMFADevice(query: CreateVirtualMFADeviceRequest): Promise<CreateVirtualMFADeviceResponse>;
    /**
     * 删除阿里云账号（主账号）或RAM用户的访问密钥。
     */
    DeleteAccessKey(query: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse>;
    /**
     * 删除指定的应用密钥。
     */
    DeleteAppSecret(query: DeleteAppSecretRequest): Promise<DeleteAppSecretResponse>;
    /**
     * 删除指定的应用。
     */
    DeleteApplication(query: DeleteApplicationRequest): Promise<DeleteApplicationResponse>;
    /**
     * 删除一个指定的用户组。
     */
    DeleteGroup(query: DeleteGroupRequest): Promise<DeleteGroupResponse>;
    /**
     * 删除RAM用户的控制台登录配置。
     */
    DeleteLoginProfile(query: DeleteLoginProfileRequest): Promise<DeleteLoginProfileResponse>;
    /**
     * 删除一个角色SSO的身份提供商配置。
     */
    DeleteSAMLProvider(query: DeleteSAMLProviderRequest): Promise<DeleteSAMLProviderResponse>;
    /**
     * 删除指定的RAM用户。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 删除指定的多因素认证设备。
     */
    DeleteVirtualMFADevice(query: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse>;
    /**
     * 解绑并删除一个指定RAM用户的多因素认证设备。
     */
    DisableVirtualMFA(query: DisableVirtualMFARequest): Promise<DisableVirtualMFAResponse>;
    /**
     * 生成阿里云账号（主账号）下的用户凭证报告。
     */
    GenerateCredentialReport(query: GenerateCredentialReportRequest): Promise<GenerateCredentialReportResponse>;
    /**
     * 查询某个指定访问密钥的最后使用时间。
     */
    GetAccessKeyLastUsed(query: GetAccessKeyLastUsedRequest): Promise<GetAccessKeyLastUsedResponse>;
    /**
     * 查询阿里云账号（主账号）的多因素认证设备信息。
     */
    GetAccountMFAInfo(query: GetAccountMFAInfoRequest): Promise<GetAccountMFAInfoResponse>;
    /**
     * 获取阿里云账号（主账号）下的用户凭证报告。
     */
    GetAccountSecurityPracticeReport(query: GetAccountSecurityPracticeReportRequest): Promise<GetAccountSecurityPracticeReportResponse>;
    /**
     * 查询阿里云账号（主账号）的概览信息。
     */
    GetAccountSummary(query: GetAccountSummaryRequest): Promise<GetAccountSummaryResponse>;
    /**
     * 查询指定应用的密钥信息。
     */
    GetAppSecret(query: GetAppSecretRequest): Promise<GetAppSecretResponse>;
    /**
     * 查询指定应用的配置信息。
     */
    GetApplication(query: GetApplicationRequest): Promise<GetApplicationResponse>;
    /**
     * 查询阿里云账号（主账号）下的用户凭证报告。
     */
    GetCredentialReport(query: GetCredentialReportRequest): Promise<GetCredentialReportResponse>;
    /**
     * 查询阿里云账号（主账号）下的默认域名。
     */
    GetDefaultDomain(query: GetDefaultDomainRequest): Promise<GetDefaultDomainResponse>;
    /**
     * 查询指定的用户组信息。
     */
    GetGroup(query: GetGroupRequest): Promise<GetGroupResponse>;
    /**
     * 查询指定用户的控制台登录配置信息。
     */
    GetLoginProfile(query: GetLoginProfileRequest): Promise<GetLoginProfileResponse>;
    /**
     * 查询RAM用户的密码强度策略信息。
     */
    GetPasswordPolicy(query: GetPasswordPolicyRequest): Promise<GetPasswordPolicyResponse>;
    /**
     * 查询指定的角色SSO身份提供商信息。
     */
    GetSAMLProvider(query: GetSAMLProviderRequest): Promise<GetSAMLProviderResponse>;
    /**
     * 调用GetSecurityPreference查询RAM用户的全局安全首选项。
     */
    GetSecurityPreference(query: GetSecurityPreferenceRequest): Promise<GetSecurityPreferenceResponse>;
    /**
     * 查询指定的RAM用户的详细信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 查询指定RAM用户的多因素认证设备信息。
     */
    GetUserMFAInfo(query: GetUserMFAInfoRequest): Promise<GetUserMFAInfoResponse>;
    /**
     * 查询用户SSO身份提供商配置信息。
     */
    GetUserSsoSettings(query: GetUserSsoSettingsRequest): Promise<GetUserSsoSettingsResponse>;
    /**
     * 查询阿里云账号（主账号）或RAM用户的访问密钥列表。
     */
    ListAccessKeys(query: ListAccessKeysRequest): Promise<ListAccessKeysResponse>;
    /**
     * 列出指定应用的应用密钥信息列表。
     */
    ListAppSecretIds(query: ListAppSecretIdsRequest): Promise<ListAppSecretIdsResponse>;
    /**
     * 列出创建的应用列表。
     */
    ListApplications(query: ListApplicationsRequest): Promise<ListApplicationsResponse>;
    /**
     * 列出用户组的信息列表。
     */
    ListGroups(query: ListGroupsRequest): Promise<ListGroupsResponse>;
    /**
     * 查询指定的RAM用户加入的组的列表。
     */
    ListGroupsForUser(query: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse>;
    /**
     * 列出系统预定义的应用权限范围列表。
     */
    ListPredefinedScopes(query: ListPredefinedScopesRequest): Promise<ListPredefinedScopesResponse>;
    /**
     * 查询所有角色SSO身份提供商信息。
     */
    ListSAMLProviders(query: ListSAMLProvidersRequest): Promise<ListSAMLProvidersResponse>;
    /**
     * 调用ListUserBasicInfos查询所有RAM用户的基本信息。
     */
    ListUserBasicInfos(query: ListUserBasicInfosRequest): Promise<ListUserBasicInfosResponse>;
    /**
     * 调用ListUsers查询所有RAM用户的详细信息。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 查询指定用户组内的RAM用户列表。
     */
    ListUsersForGroup(query: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse>;
    /**
     * 查询多因素认证设备列表。
     */
    ListVirtualMFADevices(query: ListVirtualMFADevicesRequest): Promise<ListVirtualMFADevicesResponse>;
    /**
     * 将指定RAM用户从指定用户组中移除。
     */
    RemoveUserFromGroup(query: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse>;
    /**
     * 为阿里云账号（主账号）设置默认域名。
     */
    SetDefaultDomain(query: SetDefaultDomainRequest): Promise<SetDefaultDomainResponse>;
    /**
     * 设置RAM用户的密码强度策略。
     */
    SetPasswordPolicy(query: SetPasswordPolicyRequest): Promise<SetPasswordPolicyResponse>;
    /**
     * 设置RAM用户的全局安全首选项信息。
     */
    SetSecurityPreference(query: SetSecurityPreferenceRequest): Promise<SetSecurityPreferenceResponse>;
    /**
     * 设置用户SSO的身份提供商信息。
     */
    SetUserSsoSettings(query: SetUserSsoSettingsRequest): Promise<SetUserSsoSettingsResponse>;
    /**
     * 为RAM用户解绑定多因素认证设备。
     */
    UnbindMFADevice(query: UnbindMFADeviceRequest): Promise<UnbindMFADeviceResponse>;
    /**
     * 修改阿里云账号（主账号）或RAM用户的访问密钥状态。
     */
    UpdateAccessKey(query: UpdateAccessKeyRequest): Promise<UpdateAccessKeyResponse>;
    /**
     * 修改指定应用的配置信息。
     */
    UpdateApplication(query: UpdateApplicationRequest): Promise<UpdateApplicationResponse>;
    /**
     * 修改指定用户组的基础信息。
     */
    UpdateGroup(query: UpdateGroupRequest): Promise<UpdateGroupResponse>;
    /**
     * 修改指定RAM用户的控制台登录信息。
     */
    UpdateLoginProfile(query: UpdateLoginProfileRequest): Promise<UpdateLoginProfileResponse>;
    /**
     * 修改指定的角色SSO身份提供商信息。
     */
    UpdateSAMLProvider(query: UpdateSAMLProviderRequest): Promise<UpdateSAMLProviderResponse>;
    /**
     * 调用UpdateUser修改RAM用户信息。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 调用RemoveClientIdFromOIDCProvider移除OIDC身份提供商中的指定客户端ID。
     */
    RemoveClientIdFromOIDCProvider(query: RemoveClientIdFromOIDCProviderRequest): Promise<RemoveClientIdFromOIDCProviderResponse>;
    /**
     * 调用UpdateOIDCProvider修改OIDC身份提供商的描述和客户端ID。
     */
    UpdateOIDCProvider(query: UpdateOIDCProviderRequest): Promise<UpdateOIDCProviderResponse>;
    /**
     * 调用CreateOIDCProvider创建OIDC身份提供商，配置阿里云与外部身份提供商（IdP）的信任关系。
     */
    CreateOIDCProvider(query: CreateOIDCProviderRequest): Promise<CreateOIDCProviderResponse>;
    /**
     * 调用AddClientIdToOIDCProvider为OIDC身份提供商添加指定客户端ID。
     */
    AddClientIdToOIDCProvider(query: AddClientIdToOIDCProviderRequest): Promise<AddClientIdToOIDCProviderResponse>;
    /**
     * 调用GetOIDCProvider查询OIDC身份提供商信息。
     */
    GetOIDCProvider(query: GetOIDCProviderRequest): Promise<GetOIDCProviderResponse>;
    /**
     * 调用RemoveFingerprintFromOIDCProvider移除OIDC身份提供商中指定的验证指纹。
     */
    RemoveFingerprintFromOIDCProvider(query: RemoveFingerprintFromOIDCProviderRequest): Promise<RemoveFingerprintFromOIDCProviderResponse>;
    /**
     * 调用AddFingerprintToOIDCProvider为OIDC身份提供商添加验证指纹。
     */
    AddFingerprintToOIDCProvider(query: AddFingerprintToOIDCProviderRequest): Promise<AddFingerprintToOIDCProviderResponse>;
    /**
     * 调用DeleteOIDCProvider删除OIDC身份提供商。
     */
    DeleteOIDCProvider(query: DeleteOIDCProviderRequest): Promise<DeleteOIDCProviderResponse>;
    /**
     * 调用ListOIDCProviders查询OIDC身份提供商列表。
     */
    ListOIDCProviders(query: ListOIDCProvidersRequest): Promise<ListOIDCProvidersResponse>;
    /**
     * 调用UntagResources接口解绑资源的标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用TagResources接口给资源打上标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用ListTagResources查询资源与标签的关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询RAM用户的安全手机或安全邮箱状态。
     */
    GetVerificationInfo(query: GetVerificationInfoRequest): Promise<GetVerificationInfoResponse>;
}
export default IMS;
