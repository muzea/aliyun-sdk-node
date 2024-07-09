import { DescribeInstanceAttributeRequest } from "./DescribeInstanceAttribute/req";
import { DescribeInstanceAttributeResponse } from "./DescribeInstanceAttribute/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { ConfigInstanceSecurityGroupsRequest } from "./ConfigInstanceSecurityGroups/req";
import { ConfigInstanceSecurityGroupsResponse } from "./ConfigInstanceSecurityGroups/res";
import { ConfigInstanceWhiteListRequest } from "./ConfigInstanceWhiteList/req";
import { ConfigInstanceWhiteListResponse } from "./ConfigInstanceWhiteList/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { EnableInstancePublicAccessRequest } from "./EnableInstancePublicAccess/req";
import { EnableInstancePublicAccessResponse } from "./EnableInstancePublicAccess/res";
import { DisableInstancePublicAccessRequest } from "./DisableInstancePublicAccess/req";
import { DisableInstancePublicAccessResponse } from "./DisableInstancePublicAccess/res";
import { ModifyInstanceAttributeRequest } from "./ModifyInstanceAttribute/req";
import { ModifyInstanceAttributeResponse } from "./ModifyInstanceAttribute/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { CreateHostRequest } from "./CreateHost/req";
import { CreateHostResponse } from "./CreateHost/res";
import { GetHostRequest } from "./GetHost/req";
import { GetHostResponse } from "./GetHost/res";
import { ListHostsRequest } from "./ListHosts/req";
import { ListHostsResponse } from "./ListHosts/res";
import { DeleteHostRequest } from "./DeleteHost/req";
import { DeleteHostResponse } from "./DeleteHost/res";
import { ModifyHostsPortRequest } from "./ModifyHostsPort/req";
import { ModifyHostsPortResponse } from "./ModifyHostsPort/res";
import { ModifyHostsActiveAddressTypeRequest } from "./ModifyHostsActiveAddressType/req";
import { ModifyHostsActiveAddressTypeResponse } from "./ModifyHostsActiveAddressType/res";
import { ModifyHostRequest } from "./ModifyHost/req";
import { ModifyHostResponse } from "./ModifyHost/res";
import { CreateHostGroupRequest } from "./CreateHostGroup/req";
import { CreateHostGroupResponse } from "./CreateHostGroup/res";
import { GetHostGroupRequest } from "./GetHostGroup/req";
import { GetHostGroupResponse } from "./GetHostGroup/res";
import { ListHostGroupsRequest } from "./ListHostGroups/req";
import { ListHostGroupsResponse } from "./ListHostGroups/res";
import { ModifyHostGroupRequest } from "./ModifyHostGroup/req";
import { ModifyHostGroupResponse } from "./ModifyHostGroup/res";
import { DeleteHostGroupRequest } from "./DeleteHostGroup/req";
import { DeleteHostGroupResponse } from "./DeleteHostGroup/res";
import { AddHostsToGroupRequest } from "./AddHostsToGroup/req";
import { AddHostsToGroupResponse } from "./AddHostsToGroup/res";
import { RemoveHostsFromGroupRequest } from "./RemoveHostsFromGroup/req";
import { RemoveHostsFromGroupResponse } from "./RemoveHostsFromGroup/res";
import { CreateHostAccountRequest } from "./CreateHostAccount/req";
import { CreateHostAccountResponse } from "./CreateHostAccount/res";
import { GetHostAccountRequest } from "./GetHostAccount/req";
import { GetHostAccountResponse } from "./GetHostAccount/res";
import { ListHostAccountsRequest } from "./ListHostAccounts/req";
import { ListHostAccountsResponse } from "./ListHostAccounts/res";
import { ModifyHostAccountRequest } from "./ModifyHostAccount/req";
import { ModifyHostAccountResponse } from "./ModifyHostAccount/res";
import { DeleteHostAccountRequest } from "./DeleteHostAccount/req";
import { DeleteHostAccountResponse } from "./DeleteHostAccount/res";
import { ResetHostAccountCredentialRequest } from "./ResetHostAccountCredential/req";
import { ResetHostAccountCredentialResponse } from "./ResetHostAccountCredential/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { ModifyUserRequest } from "./ModifyUser/req";
import { ModifyUserResponse } from "./ModifyUser/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { LockUsersRequest } from "./LockUsers/req";
import { LockUsersResponse } from "./LockUsers/res";
import { UnlockUsersRequest } from "./UnlockUsers/req";
import { UnlockUsersResponse } from "./UnlockUsers/res";
import { CreateUserGroupRequest } from "./CreateUserGroup/req";
import { CreateUserGroupResponse } from "./CreateUserGroup/res";
import { GetUserGroupRequest } from "./GetUserGroup/req";
import { GetUserGroupResponse } from "./GetUserGroup/res";
import { ListUserGroupsRequest } from "./ListUserGroups/req";
import { ListUserGroupsResponse } from "./ListUserGroups/res";
import { ModifyUserGroupRequest } from "./ModifyUserGroup/req";
import { ModifyUserGroupResponse } from "./ModifyUserGroup/res";
import { DeleteUserGroupRequest } from "./DeleteUserGroup/req";
import { DeleteUserGroupResponse } from "./DeleteUserGroup/res";
import { AddUsersToGroupRequest } from "./AddUsersToGroup/req";
import { AddUsersToGroupResponse } from "./AddUsersToGroup/res";
import { RemoveUsersFromGroupRequest } from "./RemoveUsersFromGroup/req";
import { RemoveUsersFromGroupResponse } from "./RemoveUsersFromGroup/res";
import { AttachHostAccountsToUserRequest } from "./AttachHostAccountsToUser/req";
import { AttachHostAccountsToUserResponse } from "./AttachHostAccountsToUser/res";
import { ListHostsForUserRequest } from "./ListHostsForUser/req";
import { ListHostsForUserResponse } from "./ListHostsForUser/res";
import { ListHostAccountsForUserRequest } from "./ListHostAccountsForUser/req";
import { ListHostAccountsForUserResponse } from "./ListHostAccountsForUser/res";
import { DetachHostAccountsFromUserRequest } from "./DetachHostAccountsFromUser/req";
import { DetachHostAccountsFromUserResponse } from "./DetachHostAccountsFromUser/res";
import { AttachHostAccountsToUserGroupRequest } from "./AttachHostAccountsToUserGroup/req";
import { AttachHostAccountsToUserGroupResponse } from "./AttachHostAccountsToUserGroup/res";
import { ListHostsForUserGroupRequest } from "./ListHostsForUserGroup/req";
import { ListHostsForUserGroupResponse } from "./ListHostsForUserGroup/res";
import { ListHostAccountsForUserGroupRequest } from "./ListHostAccountsForUserGroup/req";
import { ListHostAccountsForUserGroupResponse } from "./ListHostAccountsForUserGroup/res";
import { DetachHostAccountsFromUserGroupRequest } from "./DetachHostAccountsFromUserGroup/req";
import { DetachHostAccountsFromUserGroupResponse } from "./DetachHostAccountsFromUserGroup/res";
import { AttachHostGroupAccountsToUserRequest } from "./AttachHostGroupAccountsToUser/req";
import { AttachHostGroupAccountsToUserResponse } from "./AttachHostGroupAccountsToUser/res";
import { ListHostGroupsForUserRequest } from "./ListHostGroupsForUser/req";
import { ListHostGroupsForUserResponse } from "./ListHostGroupsForUser/res";
import { ListHostGroupAccountNamesForUserRequest } from "./ListHostGroupAccountNamesForUser/req";
import { ListHostGroupAccountNamesForUserResponse } from "./ListHostGroupAccountNamesForUser/res";
import { DetachHostGroupAccountsFromUserRequest } from "./DetachHostGroupAccountsFromUser/req";
import { DetachHostGroupAccountsFromUserResponse } from "./DetachHostGroupAccountsFromUser/res";
import { AttachHostGroupAccountsToUserGroupRequest } from "./AttachHostGroupAccountsToUserGroup/req";
import { AttachHostGroupAccountsToUserGroupResponse } from "./AttachHostGroupAccountsToUserGroup/res";
import { ListHostGroupsForUserGroupRequest } from "./ListHostGroupsForUserGroup/req";
import { ListHostGroupsForUserGroupResponse } from "./ListHostGroupsForUserGroup/res";
import { ListHostGroupAccountNamesForUserGroupRequest } from "./ListHostGroupAccountNamesForUserGroup/req";
import { ListHostGroupAccountNamesForUserGroupResponse } from "./ListHostGroupAccountNamesForUserGroup/res";
import { DetachHostGroupAccountsFromUserGroupRequest } from "./DetachHostGroupAccountsFromUserGroup/req";
import { DetachHostGroupAccountsFromUserGroupResponse } from "./DetachHostGroupAccountsFromUserGroup/res";
import { CreateHostShareKeyRequest } from "./CreateHostShareKey/req";
import { CreateHostShareKeyResponse } from "./CreateHostShareKey/res";
import { ListHostShareKeysRequest } from "./ListHostShareKeys/req";
import { ListHostShareKeysResponse } from "./ListHostShareKeys/res";
import { ModifyHostShareKeyRequest } from "./ModifyHostShareKey/req";
import { ModifyHostShareKeyResponse } from "./ModifyHostShareKey/res";
import { ListHostAccountsForHostShareKeyRequest } from "./ListHostAccountsForHostShareKey/req";
import { ListHostAccountsForHostShareKeyResponse } from "./ListHostAccountsForHostShareKey/res";
import { GetHostShareKeyRequest } from "./GetHostShareKey/req";
import { GetHostShareKeyResponse } from "./GetHostShareKey/res";
import { DeleteHostShareKeyRequest } from "./DeleteHostShareKey/req";
import { DeleteHostShareKeyResponse } from "./DeleteHostShareKey/res";
import { AttachHostAccountsToHostShareKeyRequest } from "./AttachHostAccountsToHostShareKey/req";
import { AttachHostAccountsToHostShareKeyResponse } from "./AttachHostAccountsToHostShareKey/res";
import { DetachHostAccountsFromHostShareKeyRequest } from "./DetachHostAccountsFromHostShareKey/req";
import { DetachHostAccountsFromHostShareKeyResponse } from "./DetachHostAccountsFromHostShareKey/res";
import { GetInstanceADAuthServerRequest } from "./GetInstanceADAuthServer/req";
import { GetInstanceADAuthServerResponse } from "./GetInstanceADAuthServer/res";
import { GetInstanceTwoFactorRequest } from "./GetInstanceTwoFactor/req";
import { GetInstanceTwoFactorResponse } from "./GetInstanceTwoFactor/res";
import { ModifyInstanceTwoFactorRequest } from "./ModifyInstanceTwoFactor/req";
import { ModifyInstanceTwoFactorResponse } from "./ModifyInstanceTwoFactor/res";
import { GetInstanceLDAPAuthServerRequest } from "./GetInstanceLDAPAuthServer/req";
import { GetInstanceLDAPAuthServerResponse } from "./GetInstanceLDAPAuthServer/res";
import { ModifyInstanceADAuthServerRequest } from "./ModifyInstanceADAuthServer/req";
import { ModifyInstanceADAuthServerResponse } from "./ModifyInstanceADAuthServer/res";
import { ModifyInstanceLDAPAuthServerRequest } from "./ModifyInstanceLDAPAuthServer/req";
import { ModifyInstanceLDAPAuthServerResponse } from "./ModifyInstanceLDAPAuthServer/res";
import { VerifyInstanceLDAPAuthServerRequest } from "./VerifyInstanceLDAPAuthServer/req";
import { VerifyInstanceLDAPAuthServerResponse } from "./VerifyInstanceLDAPAuthServer/res";
import { VerifyInstanceADAuthServerRequest } from "./VerifyInstanceADAuthServer/req";
import { VerifyInstanceADAuthServerResponse } from "./VerifyInstanceADAuthServer/res";
import { ListUserPublicKeysRequest } from "./ListUserPublicKeys/req";
import { ListUserPublicKeysResponse } from "./ListUserPublicKeys/res";
import { CreateUserPublicKeyRequest } from "./CreateUserPublicKey/req";
import { CreateUserPublicKeyResponse } from "./CreateUserPublicKey/res";
import { DeleteUserPublicKeyRequest } from "./DeleteUserPublicKey/req";
import { DeleteUserPublicKeyResponse } from "./DeleteUserPublicKey/res";
import { ModifyUserPublicKeyRequest } from "./ModifyUserPublicKey/req";
import { ModifyUserPublicKeyResponse } from "./ModifyUserPublicKey/res";
import { AcceptApproveCommandRequest } from "./AcceptApproveCommand/req";
import { AcceptApproveCommandResponse } from "./AcceptApproveCommand/res";
import { ListOperationTicketsRequest } from "./ListOperationTickets/req";
import { ListOperationTicketsResponse } from "./ListOperationTickets/res";
import { RejectApproveCommandRequest } from "./RejectApproveCommand/req";
import { RejectApproveCommandResponse } from "./RejectApproveCommand/res";
import { AcceptOperationTicketRequest } from "./AcceptOperationTicket/req";
import { AcceptOperationTicketResponse } from "./AcceptOperationTicket/res";
import { ListApproveCommandsRequest } from "./ListApproveCommands/req";
import { ListApproveCommandsResponse } from "./ListApproveCommands/res";
import { RejectOperationTicketRequest } from "./RejectOperationTicket/req";
import { RejectOperationTicketResponse } from "./RejectOperationTicket/res";
import { ListOperationDatabaseAccountsRequest } from "./ListOperationDatabaseAccounts/req";
import { ListOperationDatabaseAccountsResponse } from "./ListOperationDatabaseAccounts/res";
import { GenerateAssetOperationTokenRequest } from "./GenerateAssetOperationToken/req";
import { GenerateAssetOperationTokenResponse } from "./GenerateAssetOperationToken/res";
import { ListOperationHostAccountsRequest } from "./ListOperationHostAccounts/req";
import { ListOperationHostAccountsResponse } from "./ListOperationHostAccounts/res";
import { ListOperationDatabasesRequest } from "./ListOperationDatabases/req";
import { ListOperationDatabasesResponse } from "./ListOperationDatabases/res";
import { ListOperationHostsRequest } from "./ListOperationHosts/req";
import { ListOperationHostsResponse } from "./ListOperationHosts/res";
import { RenewAssetOperationTokenRequest } from "./RenewAssetOperationToken/req";
import { RenewAssetOperationTokenResponse } from "./RenewAssetOperationToken/res";
import { GetPolicyUserScopeRequest } from "./GetPolicyUserScope/req";
import { GetPolicyUserScopeResponse } from "./GetPolicyUserScope/res";
import { DeletePolicyRequest } from "./DeletePolicy/req";
import { DeletePolicyResponse } from "./DeletePolicy/res";
import { GetPolicyRequest } from "./GetPolicy/req";
import { GetPolicyResponse } from "./GetPolicy/res";
import { SetPolicyAccessTimeRangeConfigRequest } from "./SetPolicyAccessTimeRangeConfig/req";
import { SetPolicyAccessTimeRangeConfigResponse } from "./SetPolicyAccessTimeRangeConfig/res";
import { SetPolicyAssetScopeRequest } from "./SetPolicyAssetScope/req";
import { SetPolicyAssetScopeResponse } from "./SetPolicyAssetScope/res";
import { SetPolicyUserScopeRequest } from "./SetPolicyUserScope/req";
import { SetPolicyUserScopeResponse } from "./SetPolicyUserScope/res";
import { SetPolicyApprovalConfigRequest } from "./SetPolicyApprovalConfig/req";
import { SetPolicyApprovalConfigResponse } from "./SetPolicyApprovalConfig/res";
import { GetPolicyAssetScopeRequest } from "./GetPolicyAssetScope/req";
import { GetPolicyAssetScopeResponse } from "./GetPolicyAssetScope/res";
import { ModifyPolicyRequest } from "./ModifyPolicy/req";
import { ModifyPolicyResponse } from "./ModifyPolicy/res";
import { ListPoliciesRequest } from "./ListPolicies/req";
import { ListPoliciesResponse } from "./ListPolicies/res";
import { DeleteRuleRequest } from "./DeleteRule/req";
import { DeleteRuleResponse } from "./DeleteRule/res";
import { DisableRuleRequest } from "./DisableRule/req";
import { DisableRuleResponse } from "./DisableRule/res";
import { SetPolicyIPAclConfigRequest } from "./SetPolicyIPAclConfig/req";
import { SetPolicyIPAclConfigResponse } from "./SetPolicyIPAclConfig/res";
import { SetPolicyCommandConfigRequest } from "./SetPolicyCommandConfig/req";
import { SetPolicyCommandConfigResponse } from "./SetPolicyCommandConfig/res";
import { GetRuleRequest } from "./GetRule/req";
import { GetRuleResponse } from "./GetRule/res";
import { CreatePolicyRequest } from "./CreatePolicy/req";
import { CreatePolicyResponse } from "./CreatePolicy/res";
import { EnableRuleRequest } from "./EnableRule/req";
import { EnableRuleResponse } from "./EnableRule/res";
import { SetPolicyProtocolConfigRequest } from "./SetPolicyProtocolConfig/req";
import { SetPolicyProtocolConfigResponse } from "./SetPolicyProtocolConfig/res";
import { ListRulesRequest } from "./ListRules/req";
import { ListRulesResponse } from "./ListRules/res";
import { ModifyRuleRequest } from "./ModifyRule/req";
import { ModifyRuleResponse } from "./ModifyRule/res";
import { CreateRuleRequest } from "./CreateRule/req";
import { CreateRuleResponse } from "./CreateRule/res";
import { DeleteNetworkDomainRequest } from "./DeleteNetworkDomain/req";
import { DeleteNetworkDomainResponse } from "./DeleteNetworkDomain/res";
import { ModifyNetworkDomainRequest } from "./ModifyNetworkDomain/req";
import { ModifyNetworkDomainResponse } from "./ModifyNetworkDomain/res";
import { CreateNetworkDomainRequest } from "./CreateNetworkDomain/req";
import { CreateNetworkDomainResponse } from "./CreateNetworkDomain/res";
import { MoveDatabasesToNetworkDomainRequest } from "./MoveDatabasesToNetworkDomain/req";
import { MoveDatabasesToNetworkDomainResponse } from "./MoveDatabasesToNetworkDomain/res";
import { ListDatabaseAccountsForUserGroupRequest } from "./ListDatabaseAccountsForUserGroup/req";
import { ListDatabaseAccountsForUserGroupResponse } from "./ListDatabaseAccountsForUserGroup/res";
import { ListNetworkDomainsRequest } from "./ListNetworkDomains/req";
import { ListNetworkDomainsResponse } from "./ListNetworkDomains/res";
import { MoveHostsToNetworkDomainRequest } from "./MoveHostsToNetworkDomain/req";
import { MoveHostsToNetworkDomainResponse } from "./MoveHostsToNetworkDomain/res";
import { ListDatabasesForUserGroupRequest } from "./ListDatabasesForUserGroup/req";
import { ListDatabasesForUserGroupResponse } from "./ListDatabasesForUserGroup/res";
import { GetNetworkDomainRequest } from "./GetNetworkDomain/req";
import { GetNetworkDomainResponse } from "./GetNetworkDomain/res";
import { ListDatabaseAccountsForUserRequest } from "./ListDatabaseAccountsForUser/req";
import { ListDatabaseAccountsForUserResponse } from "./ListDatabaseAccountsForUser/res";
import { ListDatabasesForUserRequest } from "./ListDatabasesForUser/req";
import { ListDatabasesForUserResponse } from "./ListDatabasesForUser/res";
import { AttachDatabaseAccountsToUserRequest } from "./AttachDatabaseAccountsToUser/req";
import { AttachDatabaseAccountsToUserResponse } from "./AttachDatabaseAccountsToUser/res";
import { DetachDatabaseAccountsFromUserGroupRequest } from "./DetachDatabaseAccountsFromUserGroup/req";
import { DetachDatabaseAccountsFromUserGroupResponse } from "./DetachDatabaseAccountsFromUserGroup/res";
import { GetDatabaseAccountRequest } from "./GetDatabaseAccount/req";
import { GetDatabaseAccountResponse } from "./GetDatabaseAccount/res";
import { AttachDatabaseAccountsToUserGroupRequest } from "./AttachDatabaseAccountsToUserGroup/req";
import { AttachDatabaseAccountsToUserGroupResponse } from "./AttachDatabaseAccountsToUserGroup/res";
import { ModifyDatabaseAccountRequest } from "./ModifyDatabaseAccount/req";
import { ModifyDatabaseAccountResponse } from "./ModifyDatabaseAccount/res";
import { ListDatabaseAccountsRequest } from "./ListDatabaseAccounts/req";
import { ListDatabaseAccountsResponse } from "./ListDatabaseAccounts/res";
import { CreateDatabaseAccountRequest } from "./CreateDatabaseAccount/req";
import { CreateDatabaseAccountResponse } from "./CreateDatabaseAccount/res";
import { GetDatabaseRequest } from "./GetDatabase/req";
import { GetDatabaseResponse } from "./GetDatabase/res";
import { AddDatabasesToGroupRequest } from "./AddDatabasesToGroup/req";
import { AddDatabasesToGroupResponse } from "./AddDatabasesToGroup/res";
import { RemoveDatabasesFromGroupRequest } from "./RemoveDatabasesFromGroup/req";
import { RemoveDatabasesFromGroupResponse } from "./RemoveDatabasesFromGroup/res";
import { ModifyDatabaseRequest } from "./ModifyDatabase/req";
import { ModifyDatabaseResponse } from "./ModifyDatabase/res";
import { ListDatabasesRequest } from "./ListDatabases/req";
import { ListDatabasesResponse } from "./ListDatabases/res";
import { DeleteDatabaseRequest } from "./DeleteDatabase/req";
import { DeleteDatabaseResponse } from "./DeleteDatabase/res";
import { CreateDatabaseRequest } from "./CreateDatabase/req";
import { CreateDatabaseResponse } from "./CreateDatabase/res";
import { DetachDatabaseAccountsFromUserRequest } from "./DetachDatabaseAccountsFromUser/req";
import { DetachDatabaseAccountsFromUserResponse } from "./DetachDatabaseAccountsFromUser/res";
import { DeleteDatabaseAccountRequest } from "./DeleteDatabaseAccount/req";
import { DeleteDatabaseAccountResponse } from "./DeleteDatabaseAccount/res";

interface YUNDUN_BASTIONHOST {
    /**
     * 查询实例所有的属性信息，例如：实例ID、实例的备注信息。
     */
    DescribeInstanceAttribute(query: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse>;
    /**
     * 查询实例的列表信息。
     */
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
     * 为指定的堡垒机实例配置安全组。
     */
    ConfigInstanceSecurityGroups(query: ConfigInstanceSecurityGroupsRequest): Promise<ConfigInstanceSecurityGroupsResponse>;
    /**
     * 堡垒机实例开启公网访问后，可以将指定公网IP地址加入白名单，允许公网流量访问堡垒机实例。
     */
    ConfigInstanceWhiteList(query: ConfigInstanceWhiteListRequest): Promise<ConfigInstanceWhiteListResponse>;
    /**
     * 启动指定堡垒机实例。
     */
    StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    /**
     * 打开指定堡垒机实例公网访问开关。
     */
    EnableInstancePublicAccess(query: EnableInstancePublicAccessRequest): Promise<EnableInstancePublicAccessResponse>;
    /**
     * 关闭实例的公网访问开关。
     */
    DisableInstancePublicAccess(query: DisableInstancePublicAccessRequest): Promise<DisableInstancePublicAccessResponse>;
    /**
     * 修改指定堡垒机实例的信息。
     */
    ModifyInstanceAttribute(query: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse>;
    /**
     * 移动堡垒机实例至指定资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 为指定的堡垒机实例统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 为指定堡垒机实例批量解绑并删除标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询一个资源已经绑定的标签列表。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 查询一个或多个堡垒机实例已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询堡垒机实例支持的阿里云地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 堡垒机支持运维阿里云ECS服务器、线下IDC服务器以及其他云上服务器等不同来源的主机。在通过堡垒机运维主机之前，首先需要在堡垒机中导入主机。您可以参考本接口在堡垒机中创建需要运维的主机。
     */
    CreateHost(query: CreateHostRequest): Promise<CreateHostResponse>;
    /**
     * 包括主机名称、来源、主机地址、协议端口等信息。
     */
    GetHost(query: GetHostRequest): Promise<GetHostResponse>;
    /**
     * 查询指定堡垒机实例下的主机列表。
     */
    ListHosts(query: ListHostsRequest): Promise<ListHostsResponse>;
    /**
     * 删除单个主机。
     */
    DeleteHost(query: DeleteHostRequest): Promise<DeleteHostResponse>;
    /**
     * 堡垒机对于服务器的RDP和SSH协议使用的是默认端口（RDP协议默认使用3389端口，SSH协议默认使用22端口），如果您在主机中自定义了端口，可通过本接口进行修改。
     */
    ModifyHostsPort(query: ModifyHostsPortRequest): Promise<ModifyHostsPortResponse>;
    /**
     * 堡垒机支持公网运维和私网运维，您可以通过本接口修改运维主机时使用的连接地址类型。
     */
    ModifyHostsActiveAddressType(query: ModifyHostsActiveAddressTypeRequest): Promise<ModifyHostsActiveAddressTypeResponse>;
    /**
     * 支持修改主机的地址、名称、操作系统类型和备注信息。
     */
    ModifyHost(query: ModifyHostRequest): Promise<ModifyHostResponse>;
    /**
     * 您可以按照业务需要创建不同的资产组，然后将同一类型的资产添加到资产组，实现对资产的分类管理和批量操作。
     */
    CreateHostGroup(query: CreateHostGroupRequest): Promise<CreateHostGroupResponse>;
    /**
     * 获取指定资产组详情。
     */
    GetHostGroup(query: GetHostGroupRequest): Promise<GetHostGroupResponse>;
    /**
     * 获取指定堡垒机下的资产组列表。
     */
    ListHostGroups(query: ListHostGroupsRequest): Promise<ListHostGroupsResponse>;
    /**
     * 修改资产组名称或备注信息。
     */
    ModifyHostGroup(query: ModifyHostGroupRequest): Promise<ModifyHostGroupResponse>;
    /**
     * 删除单个资产组。
     */
    DeleteHostGroup(query: DeleteHostGroupRequest): Promise<DeleteHostGroupResponse>;
    /**
     * 批量将主机加入指定资产组。
     */
    AddHostsToGroup(query: AddHostsToGroupRequest): Promise<AddHostsToGroupResponse>;
    /**
     * 从指定资产组中批量移除主机。
     */
    RemoveHostsFromGroup(query: RemoveHostsFromGroupRequest): Promise<RemoveHostsFromGroupResponse>;
    /**
     * 在堡垒机中新建主机后，您可以为其创建相应的主机账户，即将您主机已有的账户托管至堡垒机。创建主机账户后，运维人员即可使用该账户通过堡垒机登录主机进行运维。
     */
    CreateHostAccount(query: CreateHostAccountRequest): Promise<CreateHostAccountResponse>;
    /**
     * 获取指定主机账户详情。
     */
    GetHostAccount(query: GetHostAccountRequest): Promise<GetHostAccountResponse>;
    /**
     * 获取主机账户列表。
     */
    ListHostAccounts(query: ListHostAccountsRequest): Promise<ListHostAccountsResponse>;
    /**
     * 修改主机账户信息，支持修改主机账户的名称、密码和私钥信息。
     */
    ModifyHostAccount(query: ModifyHostAccountRequest): Promise<ModifyHostAccountResponse>;
    /**
     * 删除单个主机账户。
     */
    DeleteHostAccount(query: DeleteHostAccountRequest): Promise<DeleteHostAccountResponse>;
    /**
     * 清除指定主机账户登录凭据（密码或SSH私钥）。
     */
    ResetHostAccountCredential(query: ResetHostAccountCredentialRequest): Promise<ResetHostAccountCredentialResponse>;
    /**
     * 创建用户。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 获取指定堡垒机用户的详细信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 获取指定堡垒机的用户列表。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 修改堡垒机用户信息。
     */
    ModifyUser(query: ModifyUserRequest): Promise<ModifyUserResponse>;
    /**
     * 删除单个堡垒机用户。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 批量锁定堡垒机用户。
     */
    LockUsers(query: LockUsersRequest): Promise<LockUsersResponse>;
    /**
     * 批量解锁堡垒机用户。
     */
    UnlockUsers(query: UnlockUsersRequest): Promise<UnlockUsersResponse>;
    /**
     * 创建堡垒机用户组。
     */
    CreateUserGroup(query: CreateUserGroupRequest): Promise<CreateUserGroupResponse>;
    /**
     * 获取指定堡垒机用户组的详细信息。
     */
    GetUserGroup(query: GetUserGroupRequest): Promise<GetUserGroupResponse>;
    /**
     * 获取指定堡垒机下的用户组列表。
     */
    ListUserGroups(query: ListUserGroupsRequest): Promise<ListUserGroupsResponse>;
    /**
     * 修改用户组信息。
     */
    ModifyUserGroup(query: ModifyUserGroupRequest): Promise<ModifyUserGroupResponse>;
    /**
     * 删除单个堡垒机用户组。
     */
    DeleteUserGroup(query: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse>;
    /**
     * 将用户批量添加到用户组。
     */
    AddUsersToGroup(query: AddUsersToGroupRequest): Promise<AddUsersToGroupResponse>;
    /**
     * 批量移除用户组内用户。
     */
    RemoveUsersFromGroup(query: RemoveUsersFromGroupRequest): Promise<RemoveUsersFromGroupResponse>;
    /**
     * 当您新建用户之后，您需要为该用户授权资产。授权后该用户才可以使用堡垒机运维已授权的资产。
     */
    AttachHostAccountsToUser(query: AttachHostAccountsToUserRequest): Promise<AttachHostAccountsToUserResponse>;
    /**
     * 查询指定堡垒机用户已授权或未授权的主机列表。
     */
    ListHostsForUser(query: ListHostsForUserRequest): Promise<ListHostsForUserResponse>;
    /**
     * 查询指定用户在指定主机下已授权和未授权的主机账户列表。
     */
    ListHostAccountsForUser(query: ListHostAccountsForUserRequest): Promise<ListHostAccountsForUserResponse>;
    /**
     * 移除给用户授权的主机及主机账户。
     */
    DetachHostAccountsFromUser(query: DetachHostAccountsFromUserRequest): Promise<DetachHostAccountsFromUserResponse>;
    /**
     * 为用户组授权主机及主机账户。
     */
    AttachHostAccountsToUserGroup(query: AttachHostAccountsToUserGroupRequest): Promise<AttachHostAccountsToUserGroupResponse>;
    /**
     * 查询指定堡垒机用户组已授权或未授权的主机列表。
     */
    ListHostsForUserGroup(query: ListHostsForUserGroupRequest): Promise<ListHostsForUserGroupResponse>;
    /**
     * 查询指定用户组在指定主机下已授权和未授权的主机账户列表。
     */
    ListHostAccountsForUserGroup(query: ListHostAccountsForUserGroupRequest): Promise<ListHostAccountsForUserGroupResponse>;
    /**
     * 移除给用户组授权的主机及主机账户。
     */
    DetachHostAccountsFromUserGroup(query: DetachHostAccountsFromUserGroupRequest): Promise<DetachHostAccountsFromUserGroupResponse>;
    /**
     * 为用户授权主机组和主机账号。
     */
    AttachHostGroupAccountsToUser(query: AttachHostGroupAccountsToUserRequest): Promise<AttachHostGroupAccountsToUserResponse>;
    /**
     * 查询指定堡垒机用户已授权或未授权的主机组列表。
     */
    ListHostGroupsForUser(query: ListHostGroupsForUserRequest): Promise<ListHostGroupsForUserResponse>;
    /**
     * 查询指定用户在指定主机组中已授权的主机账户名称。
     */
    ListHostGroupAccountNamesForUser(query: ListHostGroupAccountNamesForUserRequest): Promise<ListHostGroupAccountNamesForUserResponse>;
    /**
     * 移除用户已授权的主机组及主机账户。
     */
    DetachHostGroupAccountsFromUser(query: DetachHostGroupAccountsFromUserRequest): Promise<DetachHostGroupAccountsFromUserResponse>;
    /**
     * 为用户组授权主机组和主机账号。
     */
    AttachHostGroupAccountsToUserGroup(query: AttachHostGroupAccountsToUserGroupRequest): Promise<AttachHostGroupAccountsToUserGroupResponse>;
    /**
     * 查询指定堡垒机用户组已授权或未授权的主机组列表。
     */
    ListHostGroupsForUserGroup(query: ListHostGroupsForUserGroupRequest): Promise<ListHostGroupsForUserGroupResponse>;
    /**
     * 查询指定用户组在指定主机组中已授权的主机账户名称。
     */
    ListHostGroupAccountNamesForUserGroup(query: ListHostGroupAccountNamesForUserGroupRequest): Promise<ListHostGroupAccountNamesForUserGroupResponse>;
    /**
     * 移除用户组已授权的主机组及主机账户。
     */
    DetachHostGroupAccountsFromUserGroup(query: DetachHostGroupAccountsFromUserGroupRequest): Promise<DetachHostGroupAccountsFromUserGroupResponse>;
    /**
     * 堡垒机的共享密钥功能可以将用于登录主机的私钥托管在堡垒机中。托管后的私钥可以被共享到多个主机账户中，从而提高主机账户的管理效率。
     */
    CreateHostShareKey(query: CreateHostShareKeyRequest): Promise<CreateHostShareKeyResponse>;
    /**
     * 查询主机共享密钥的列表。
     */
    ListHostShareKeys(query: ListHostShareKeysRequest): Promise<ListHostShareKeysResponse>;
    /**
     * 修改主机共享密钥。
     */
    ModifyHostShareKey(query: ModifyHostShareKeyRequest): Promise<ModifyHostShareKeyResponse>;
    /**
     * 获取主机共享密钥关联的主机账号。
     */
    ListHostAccountsForHostShareKey(query: ListHostAccountsForHostShareKeyRequest): Promise<ListHostAccountsForHostShareKeyResponse>;
    /**
     * 查询主机共享密钥的详情。
     */
    GetHostShareKey(query: GetHostShareKeyRequest): Promise<GetHostShareKeyResponse>;
    /**
     * 删除主机共享密钥。
     */
    DeleteHostShareKey(query: DeleteHostShareKeyRequest): Promise<DeleteHostShareKeyResponse>;
    /**
     * 关联主机账号到主机共享密钥。
     */
    AttachHostAccountsToHostShareKey(query: AttachHostAccountsToHostShareKeyRequest): Promise<AttachHostAccountsToHostShareKeyResponse>;
    /**
     * 移除主机账号和主机共享密钥的关联。
     */
    DetachHostAccountsFromHostShareKey(query: DetachHostAccountsFromHostShareKeyRequest): Promise<DetachHostAccountsFromHostShareKeyResponse>;
    /**
     * 查询堡垒机实例上AD认证的配置信息。
     */
    GetInstanceADAuthServer(query: GetInstanceADAuthServerRequest): Promise<GetInstanceADAuthServerResponse>;
    /**
     * 查询堡垒机实例的双因子认证的配置信息。
     */
    GetInstanceTwoFactor(query: GetInstanceTwoFactorRequest): Promise<GetInstanceTwoFactorResponse>;
    /**
     * 修改堡垒机实例的双因子配置。
     */
    ModifyInstanceTwoFactor(query: ModifyInstanceTwoFactorRequest): Promise<ModifyInstanceTwoFactorResponse>;
    /**
     * 获取堡垒机实例LDAP认证的配置。
     */
    GetInstanceLDAPAuthServer(query: GetInstanceLDAPAuthServerRequest): Promise<GetInstanceLDAPAuthServerResponse>;
    /**
     * 修改堡垒机实例的AD认证服务器的配置。
     */
    ModifyInstanceADAuthServer(query: ModifyInstanceADAuthServerRequest): Promise<ModifyInstanceADAuthServerResponse>;
    /**
     * 修改堡垒机实例LDAP认证服务器的配置。
     */
    ModifyInstanceLDAPAuthServer(query: ModifyInstanceLDAPAuthServerRequest): Promise<ModifyInstanceLDAPAuthServerResponse>;
    /**
     * 验证实例LDAP服务配置。
     */
    VerifyInstanceLDAPAuthServer(query: VerifyInstanceLDAPAuthServerRequest): Promise<VerifyInstanceLDAPAuthServerResponse>;
    /**
     * 验证实例AD服务配置。
     */
    VerifyInstanceADAuthServer(query: VerifyInstanceADAuthServerRequest): Promise<VerifyInstanceADAuthServerResponse>;
    /**
     * 查询用户名下所有的公钥列表。
     */
    ListUserPublicKeys(query: ListUserPublicKeysRequest): Promise<ListUserPublicKeysResponse>;
    /**
     * 您可以创建用户公钥后将公钥托管至堡垒机，运维员即可使用私钥通过运维客户端登录堡垒机。
     */
    CreateUserPublicKey(query: CreateUserPublicKeyRequest): Promise<CreateUserPublicKeyResponse>;
    /**
     * 删除用户公钥。
     */
    DeleteUserPublicKey(query: DeleteUserPublicKeyRequest): Promise<DeleteUserPublicKeyResponse>;
    /**
     * 修改用户公钥信息。
     */
    ModifyUserPublicKey(query: ModifyUserPublicKeyRequest): Promise<ModifyUserPublicKeyResponse>;
    /**
     * 如果运维员执行了配置在命令审批控制策略中的命令，管理员会在堡垒机控制台收到该命令的审批，只有管理员审批允许后该命令才能正常执行，审批拒绝后该命令不可执行。
     */
    AcceptApproveCommand(query: AcceptApproveCommandRequest): Promise<AcceptApproveCommandResponse>;
    /**
     * 获取需要审批的运维申请列表。
     */
    ListOperationTickets(query: ListOperationTicketsRequest): Promise<ListOperationTicketsResponse>;
    /**
     * 如果运维员执行了配置在命令审批控制策略中的命令，管理员会在堡垒机控制台收到该命令的审批，只有管理员审批允许后该命令才能正常执行，审批拒绝后该命令不可执行。
     */
    RejectApproveCommand(query: RejectApproveCommandRequest): Promise<RejectApproveCommandResponse>;
    /**
     * 如果管理员配置控制策略时开启了运维审批，则运维员登录资产时，需要申请运维且管理员审批通过后才能进行运维。
     */
    AcceptOperationTicket(query: AcceptOperationTicketRequest): Promise<AcceptOperationTicketResponse>;
    /**
     * 获取需要审批的命令列表。
     */
    ListApproveCommands(query: ListApproveCommandsRequest): Promise<ListApproveCommandsResponse>;
    /**
     * 如果管理员配置控制策略时开启了运维审批，则运维员登录资产时，需要申请运维且管理员审批通过后才能进行运维。
     */
    RejectOperationTicket(query: RejectOperationTicketRequest): Promise<RejectOperationTicketResponse>;
    /**
     * 获取当前RAM用户已授权的数据库账户列表。
     */
    ListOperationDatabaseAccounts(query: ListOperationDatabaseAccountsRequest): Promise<ListOperationDatabaseAccountsResponse>;
    /**
     * 您可以通过该接口申请主机或数据库运维令牌，并通过运维令牌运维资产。
     */
    GenerateAssetOperationToken(query: GenerateAssetOperationTokenRequest): Promise<GenerateAssetOperationTokenResponse>;
    /**
     * 获取当前RAM用户已授权的主机账户列表。
     */
    ListOperationHostAccounts(query: ListOperationHostAccountsRequest): Promise<ListOperationHostAccountsResponse>;
    /**
     * 获取当前RAM用户已授权的数据库列表。
     */
    ListOperationDatabases(query: ListOperationDatabasesRequest): Promise<ListOperationDatabasesResponse>;
    /**
     * 获取当前RAM用户已授权的主机列表。
     */
    ListOperationHosts(query: ListOperationHostsRequest): Promise<ListOperationHostsResponse>;
    /**
     * 您可以通过该接口续期运维令牌，单次可将运维令牌续期1小时。
     */
    RenewAssetOperationToken(query: RenewAssetOperationTokenRequest): Promise<RenewAssetOperationTokenResponse>;
    /**
     * 获取指定控制策略生效用户范围。
     */
    GetPolicyUserScope(query: GetPolicyUserScopeRequest): Promise<GetPolicyUserScopeResponse>;
    /**
     * 删除单个控制策略。
     */
    DeletePolicy(query: DeletePolicyRequest): Promise<DeletePolicyResponse>;
    /**
     * 获取指定控制策略详情。
     */
    GetPolicy(query: GetPolicyRequest): Promise<GetPolicyResponse>;
    /**
     * 设置指定控制策略的登录时段限制配置。
     */
    SetPolicyAccessTimeRangeConfig(query: SetPolicyAccessTimeRangeConfigRequest): Promise<SetPolicyAccessTimeRangeConfigResponse>;
    /**
     * 设置指定控制策略的资产生效范围。
     */
    SetPolicyAssetScope(query: SetPolicyAssetScopeRequest): Promise<SetPolicyAssetScopeResponse>;
    /**
     * 设置指定控制策略的用户生效范围。
     */
    SetPolicyUserScope(query: SetPolicyUserScopeRequest): Promise<SetPolicyUserScopeResponse>;
    /**
     * 设置指定控制策略的运维审批配置。
     */
    SetPolicyApprovalConfig(query: SetPolicyApprovalConfigRequest): Promise<SetPolicyApprovalConfigResponse>;
    /**
     * 获取指定控制策略生效资产范围。
     */
    GetPolicyAssetScope(query: GetPolicyAssetScopeRequest): Promise<GetPolicyAssetScopeResponse>;
    /**
     * 修改控制策略基本信息。
     */
    ModifyPolicy(query: ModifyPolicyRequest): Promise<ModifyPolicyResponse>;
    /**
     * 获取控制策略列表。
     */
    ListPolicies(query: ListPoliciesRequest): Promise<ListPoliciesResponse>;
    /**
     * 删除单个授权规则。
     */
    DeleteRule(query: DeleteRuleRequest): Promise<DeleteRuleResponse>;
    /**
     * 禁用授权规则。
     */
    DisableRule(query: DisableRuleRequest): Promise<DisableRuleResponse>;
    /**
     * 配置来源IP是否可以访问当前策略生效的主机。
     */
    SetPolicyIPAclConfig(query: SetPolicyIPAclConfigRequest): Promise<SetPolicyIPAclConfigResponse>;
    /**
     * 配置在指定策略生效用户和主机中，允许或禁止执行的命令，以及需要审批的命令。
     */
    SetPolicyCommandConfig(query: SetPolicyCommandConfigRequest): Promise<SetPolicyCommandConfigResponse>;
    /**
     * 获取指定授权规则详情。
     */
    GetRule(query: GetRuleRequest): Promise<GetRuleResponse>;
    /**
     * 通过设置命令控制、命令审批、协议控制、访问控制策略等，对运维行为进行管控，有效防止用户进行高危命令操作或误操作，以保障运维安全。
     */
    CreatePolicy(query: CreatePolicyRequest): Promise<CreatePolicyResponse>;
    /**
     * 启用授权规则。
     */
    EnableRule(query: EnableRuleRequest): Promise<EnableRuleResponse>;
    /**
     * 配置控制策略的RDP选项、SSH选项以及SFTP选项。
     */
    SetPolicyProtocolConfig(query: SetPolicyProtocolConfigRequest): Promise<SetPolicyProtocolConfigResponse>;
    /**
     * 获取指定堡垒机下授权规则列表。
     */
    ListRules(query: ListRulesRequest): Promise<ListRulesResponse>;
    /**
     * 修改授权规则基本信息。
     */
    ModifyRule(query: ModifyRuleRequest): Promise<ModifyRuleResponse>;
    /**
     * 通过创建授权规则，按需求为多个用户批量授权资产，以及设置这些用户访问资产的有效期。授权规则功能不仅可以提升管理用户和资产的效率，还可以对用户访问资产的时间加以控制。
     */
    CreateRule(query: CreateRuleRequest): Promise<CreateRuleResponse>;
    /**
     * 删除单个网络域。
     */
    DeleteNetworkDomain(query: DeleteNetworkDomainRequest): Promise<DeleteNetworkDomainResponse>;
    /**
     * 修改网络域基本信息。
     */
    ModifyNetworkDomain(query: ModifyNetworkDomainRequest): Promise<ModifyNetworkDomainResponse>;
    /**
     * 如果您想统一运维分布在不同网络环境中或与堡垒机所在专有网络（VPC）网络不互通的资产，推荐使用堡垒机的网络域功能。您可以为这些资产配置一台代理服务器，然后在堡垒机中创建网络域并添加代理服务器，将资产加入该网络域后即可通过堡垒机运维资产。
     */
    CreateNetworkDomain(query: CreateNetworkDomainRequest): Promise<CreateNetworkDomainResponse>;
    /**
     * 批量将数据库移入指定网络域。
     */
    MoveDatabasesToNetworkDomain(query: MoveDatabasesToNetworkDomainRequest): Promise<MoveDatabasesToNetworkDomainResponse>;
    /**
     * 查询用户组已授权和未授权的数据库账户列表。
     */
    ListDatabaseAccountsForUserGroup(query: ListDatabaseAccountsForUserGroupRequest): Promise<ListDatabaseAccountsForUserGroupResponse>;
    /**
     * 获取指定堡垒机下的网络域列表。
     */
    ListNetworkDomains(query: ListNetworkDomainsRequest): Promise<ListNetworkDomainsResponse>;
    /**
     * 批量将主机移入指定网络域。
     */
    MoveHostsToNetworkDomain(query: MoveHostsToNetworkDomainRequest): Promise<MoveHostsToNetworkDomainResponse>;
    /**
     * 查询用户组已授权的数据库列表。
     */
    ListDatabasesForUserGroup(query: ListDatabasesForUserGroupRequest): Promise<ListDatabasesForUserGroupResponse>;
    /**
     * 获取指定网络域详情。
     */
    GetNetworkDomain(query: GetNetworkDomainRequest): Promise<GetNetworkDomainResponse>;
    /**
     * 查询用户已授权和未授权的数据库账户列表。
     */
    ListDatabaseAccountsForUser(query: ListDatabaseAccountsForUserRequest): Promise<ListDatabaseAccountsForUserResponse>;
    /**
     * 查询用户已授权的数据库列表。
     */
    ListDatabasesForUser(query: ListDatabasesForUserRequest): Promise<ListDatabasesForUserResponse>;
    /**
     * 为用户授权数据库及数据库账户。
     */
    AttachDatabaseAccountsToUser(query: AttachDatabaseAccountsToUserRequest): Promise<AttachDatabaseAccountsToUserResponse>;
    /**
     * 移除给用户组授权的数据库及数据库账户。
     */
    DetachDatabaseAccountsFromUserGroup(query: DetachDatabaseAccountsFromUserGroupRequest): Promise<DetachDatabaseAccountsFromUserGroupResponse>;
    /**
     * 获取指定数据库账户详情。
     */
    GetDatabaseAccount(query: GetDatabaseAccountRequest): Promise<GetDatabaseAccountResponse>;
    /**
     * 为用户组授权数据库及数据库账户。
     */
    AttachDatabaseAccountsToUserGroup(query: AttachDatabaseAccountsToUserGroupRequest): Promise<AttachDatabaseAccountsToUserGroupResponse>;
    /**
     * 修改数据库账户基本信息。
     */
    ModifyDatabaseAccount(query: ModifyDatabaseAccountRequest): Promise<ModifyDatabaseAccountResponse>;
    /**
     * 获取数据库账户列表。
     */
    ListDatabaseAccounts(query: ListDatabaseAccountsRequest): Promise<ListDatabaseAccountsResponse>;
    /**
     * 数据库创建成功后，您可以为其新建数据库账户。创建成功后，运维员可以使用该账号登录并运维数据库。
     */
    CreateDatabaseAccount(query: CreateDatabaseAccountRequest): Promise<CreateDatabaseAccountResponse>;
    /**
     * 获取指定数据库的详细信息。
     */
    GetDatabase(query: GetDatabaseRequest): Promise<GetDatabaseResponse>;
    /**
     * 批量将数据库实例加入指定资产组。
     */
    AddDatabasesToGroup(query: AddDatabasesToGroupRequest): Promise<AddDatabasesToGroupResponse>;
    /**
     * 从指定资产组中批量移除数据库。
     */
    RemoveDatabasesFromGroup(query: RemoveDatabasesFromGroupRequest): Promise<RemoveDatabasesFromGroupResponse>;
    /**
     * 修改数据库基本信息。
     */
    ModifyDatabase(query: ModifyDatabaseRequest): Promise<ModifyDatabaseResponse>;
    /**
     * 查询指定堡垒机实例下的数据库列表。
     */
    ListDatabases(query: ListDatabasesRequest): Promise<ListDatabasesResponse>;
    /**
     * 删除单个数据库实例。
     */
    DeleteDatabase(query: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse>;
    /**
     * 您可以通过本接口，将MySQL、SQL Server、PostgreSQL类型的RDS和MySQL、PostgreSQL、PostgreSQL（兼容Oracle）的PolarDB以及MySQL、SQL Server、PostgreSQL、Oracle类型的自建数据库资产导入至堡垒机。
     */
    CreateDatabase(query: CreateDatabaseRequest): Promise<CreateDatabaseResponse>;
    /**
     * 移除给用户授权的数据库及数据库账户。
     */
    DetachDatabaseAccountsFromUser(query: DetachDatabaseAccountsFromUserRequest): Promise<DetachDatabaseAccountsFromUserResponse>;
    /**
     * 删除单个数据库账户。
     */
    DeleteDatabaseAccount(query: DeleteDatabaseAccountRequest): Promise<DeleteDatabaseAccountResponse>;
}
export default YUNDUN_BASTIONHOST;
