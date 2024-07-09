import { CreateOrganizationalUnitRequest } from "./CreateOrganizationalUnit/req";
import { CreateOrganizationalUnitResponse } from "./CreateOrganizationalUnit/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DeleteOrganizationalUnitRequest } from "./DeleteOrganizationalUnit/req";
import { DeleteOrganizationalUnitResponse } from "./DeleteOrganizationalUnit/res";
import { GenerateDeviceCodeRequest } from "./GenerateDeviceCode/req";
import { GenerateDeviceCodeResponse } from "./GenerateDeviceCode/res";
import { GenerateTokenRequest } from "./GenerateToken/req";
import { GenerateTokenResponse } from "./GenerateToken/res";
import { GetOrganizationalUnitRequest } from "./GetOrganizationalUnit/req";
import { GetOrganizationalUnitResponse } from "./GetOrganizationalUnit/res";
import { GetOrganizationalUnitIdByExternalIdRequest } from "./GetOrganizationalUnitIdByExternalId/req";
import { GetOrganizationalUnitIdByExternalIdResponse } from "./GetOrganizationalUnitIdByExternalId/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { GetUserInfoRequest } from "./GetUserInfo/req";
import { GetUserInfoResponse } from "./GetUserInfo/res";
import { ListOrganizationalUnitParentIdsRequest } from "./ListOrganizationalUnitParentIds/req";
import { ListOrganizationalUnitParentIdsResponse } from "./ListOrganizationalUnitParentIds/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { RevokeTokenRequest } from "./RevokeToken/req";
import { RevokeTokenResponse } from "./RevokeToken/res";
import { GetApplicationProvisioningScopeRequest } from "./GetApplicationProvisioningScope/req";
import { GetApplicationProvisioningScopeResponse } from "./GetApplicationProvisioningScope/res";
import { PatchOrganizationalUnitRequest } from "./PatchOrganizationalUnit/req";
import { PatchOrganizationalUnitResponse } from "./PatchOrganizationalUnit/res";
import { PatchUserRequest } from "./PatchUser/req";
import { PatchUserResponse } from "./PatchUser/res";
import { ListOrganizationalUnitsRequest } from "./ListOrganizationalUnits/req";
import { ListOrganizationalUnitsResponse } from "./ListOrganizationalUnits/res";
import { GetUserIdByUserExternalIdRequest } from "./GetUserIdByUserExternalId/req";
import { GetUserIdByUserExternalIdResponse } from "./GetUserIdByUserExternalId/res";
import { GetUserIdByPhoneNumberRequest } from "./GetUserIdByPhoneNumber/req";
import { GetUserIdByPhoneNumberResponse } from "./GetUserIdByPhoneNumber/res";
import { GetUserIdByEmailRequest } from "./GetUserIdByEmail/req";
import { GetUserIdByEmailResponse } from "./GetUserIdByEmail/res";
import { GetUserIdByUsernameRequest } from "./GetUserIdByUsername/req";
import { GetUserIdByUsernameResponse } from "./GetUserIdByUsername/res";
import { DisableUserRequest } from "./DisableUser/req";
import { DisableUserResponse } from "./DisableUser/res";
import { EnableUserRequest } from "./EnableUser/req";
import { EnableUserResponse } from "./EnableUser/res";
import { SetUserPrimaryOrganizationalUnitRequest } from "./SetUserPrimaryOrganizationalUnit/req";
import { SetUserPrimaryOrganizationalUnitResponse } from "./SetUserPrimaryOrganizationalUnit/res";
import { UpdateUserPasswordRequest } from "./UpdateUserPassword/req";
import { UpdateUserPasswordResponse } from "./UpdateUserPassword/res";
import { RemoveUserFromOrganizationalUnitsRequest } from "./RemoveUserFromOrganizationalUnits/req";
import { RemoveUserFromOrganizationalUnitsResponse } from "./RemoveUserFromOrganizationalUnits/res";
import { AddUserToOrganizationalUnitsRequest } from "./AddUserToOrganizationalUnits/req";
import { AddUserToOrganizationalUnitsResponse } from "./AddUserToOrganizationalUnits/res";

interface EIAM_DEVELOPERAPI {
    /**
     * 调用CreateOrganizationalUnit接口，在指定组织下创建新组织资源。
     */
    CreateOrganizationalUnit(query: CreateOrganizationalUnitRequest): Promise<CreateOrganizationalUnitResponse>;
    /**
     * 调用CreateUser接口在指定组织下，创建新的EIAM的账户资源。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 调用DeleteUser接口，删除一个EIAM账户信息。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 调用DeleteOrganizationalUnit接口，删除指定组织。
     */
    DeleteOrganizationalUnit(query: DeleteOrganizationalUnitRequest): Promise<DeleteOrganizationalUnitResponse>;
    /**
     * 调用GenerateDeviceCode接口，生成设备流code。
     */
    GenerateDeviceCode(query: GenerateDeviceCodeRequest): Promise<GenerateDeviceCodeResponse>;
    /**
     * 调用GenerateToken接口，生成指定实例下的访问应用的access token。
     */
    GenerateToken(query: GenerateTokenRequest): Promise<GenerateTokenResponse>;
    /**
     * 调用GetOrganizationalUnit接口，获取指定组织的详细信息。
     */
    GetOrganizationalUnit(query: GetOrganizationalUnitRequest): Promise<GetOrganizationalUnitResponse>;
    /**
     * 调用GetOrganizationalUnitIdByExternalId接口，通过组织外部ID获取组织内部ID。
     */
    GetOrganizationalUnitIdByExternalId(query: GetOrganizationalUnitIdByExternalIdRequest): Promise<GetOrganizationalUnitIdByExternalIdResponse>;
    /**
     * 调用GetUser接口，查询一个EIAM账户详细信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 调用GetUserInfo接口，通过用户token获取账户信息。
     */
    GetUserInfo(query: GetUserInfoRequest): Promise<GetUserInfoResponse>;
    /**
     * 调用ListOrganizationalUnitParentIds接口，查询指定组织所有先代节点信息。
     */
    ListOrganizationalUnitParentIds(query: ListOrganizationalUnitParentIdsRequest): Promise<ListOrganizationalUnitParentIdsResponse>;
    /**
     * 调用ListUsers接口，分页查询EIAM账户信息。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 调用RevokeToken接口，吊销指定的access_token或refresh_token。
     */
    RevokeToken(query: RevokeTokenRequest): Promise<RevokeTokenResponse>;
    /**
     * 调用GetApplicationProvisioningScope接口，获取指定实例下对应应用的同步范围信息。
     */
    GetApplicationProvisioningScope(query: GetApplicationProvisioningScopeRequest): Promise<GetApplicationProvisioningScopeResponse>;
    /**
     * 调用PatchOrganizationalUnit接口，更新一个EIAM组织信息。
     */
    PatchOrganizationalUnit(query: PatchOrganizationalUnitRequest): Promise<PatchOrganizationalUnitResponse>;
    /**
     * 调用PatchUser接口，更新一个EIAM账户信息。
     */
    PatchUser(query: PatchUserRequest): Promise<PatchUserResponse>;
    /**
     * 调用ListOrganizationalUnits接口，分页查询EIAM组织信息。
     */
    ListOrganizationalUnits(query: ListOrganizationalUnitsRequest): Promise<ListOrganizationalUnitsResponse>;
    /**
     * 调用GetUserIdByUserExternalId接口，通过账户外部ID获取EIAM账户ID。
     */
    GetUserIdByUserExternalId(query: GetUserIdByUserExternalIdRequest): Promise<GetUserIdByUserExternalIdResponse>;
    /**
     * 调用GetUserIdByPhoneNumber接口，通过手机号获取EIAM对应账户ID。
     */
    GetUserIdByPhoneNumber(query: GetUserIdByPhoneNumberRequest): Promise<GetUserIdByPhoneNumberResponse>;
    /**
     * 调用GetUserIdByEmail接口，通过邮箱获取EIAM对应账户ID。
     */
    GetUserIdByEmail(query: GetUserIdByEmailRequest): Promise<GetUserIdByEmailResponse>;
    /**
     * 调用GetUserIdByUsername接口，通过账户名获取EIAM对应账户ID。
     */
    GetUserIdByUsername(query: GetUserIdByUsernameRequest): Promise<GetUserIdByUsernameResponse>;
    /**
     * 调用DisableUser接口，禁用指定的EIAM账户。
     */
    DisableUser(query: DisableUserRequest): Promise<DisableUserResponse>;
    /**
     * 调用EnableUser接口，启用指定的EIAM账户。
     */
    EnableUser(query: EnableUserRequest): Promise<EnableUserResponse>;
    /**
     * 设置一个EIAM账户的所属主组织，账户会从旧主组织移除，并加入到新的组织下。
     */
    SetUserPrimaryOrganizationalUnit(query: SetUserPrimaryOrganizationalUnitRequest): Promise<SetUserPrimaryOrganizationalUnitResponse>;
    /**
     * 更新指定EIAM账户的密码信息。
     */
    UpdateUserPassword(query: UpdateUserPasswordRequest): Promise<UpdateUserPasswordResponse>;
    /**
     * 将一个EIAM账户从多个EIAM组织中移除，如果账户已不属于这些组织，则默认成功。
     */
    RemoveUserFromOrganizationalUnits(query: RemoveUserFromOrganizationalUnitsRequest): Promise<RemoveUserFromOrganizationalUnitsResponse>;
    /**
     * 将一个EIAM账户加入到多个EIAM组织中，这些组织作为账户的从属组织，如果账户已属于相关组织，则不做更新。
     */
    AddUserToOrganizationalUnits(query: AddUserToOrganizationalUnitsRequest): Promise<AddUserToOrganizationalUnitsResponse>;
}
export default EIAM_DEVELOPERAPI;
