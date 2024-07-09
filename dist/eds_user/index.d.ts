import { UnlockMfaDeviceRequest } from "./UnlockMfaDevice/req";
import { UnlockMfaDeviceResponse } from "./UnlockMfaDevice/res";
import { RemoveUsersRequest } from "./RemoveUsers/req";
import { RemoveUsersResponse } from "./RemoveUsers/res";
import { UnlockUsersRequest } from "./UnlockUsers/req";
import { UnlockUsersResponse } from "./UnlockUsers/res";
import { LockMfaDeviceRequest } from "./LockMfaDevice/req";
import { LockMfaDeviceResponse } from "./LockMfaDevice/res";
import { RemoveMfaDeviceRequest } from "./RemoveMfaDevice/req";
import { RemoveMfaDeviceResponse } from "./RemoveMfaDevice/res";
import { LockUsersRequest } from "./LockUsers/req";
import { LockUsersResponse } from "./LockUsers/res";
import { ResetUserPasswordRequest } from "./ResetUserPassword/req";
import { ResetUserPasswordResponse } from "./ResetUserPassword/res";
import { DescribeMfaDevicesRequest } from "./DescribeMfaDevices/req";
import { DescribeMfaDevicesResponse } from "./DescribeMfaDevices/res";
import { DescribeUsersRequest } from "./DescribeUsers/req";
import { DescribeUsersResponse } from "./DescribeUsers/res";
import { CreateUsersRequest } from "./CreateUsers/req";
import { CreateUsersResponse } from "./CreateUsers/res";
import { CheckUsedPropertyValueRequest } from "./CheckUsedPropertyValue/req";
import { CheckUsedPropertyValueResponse } from "./CheckUsedPropertyValue/res";
import { ListPropertyRequest } from "./ListProperty/req";
import { ListPropertyResponse } from "./ListProperty/res";
import { ListPropertyValueRequest } from "./ListPropertyValue/req";
import { ListPropertyValueResponse } from "./ListPropertyValue/res";
import { UpdatePropertyRequest } from "./UpdateProperty/req";
import { UpdatePropertyResponse } from "./UpdateProperty/res";
import { CreatePropertyRequest } from "./CreateProperty/req";
import { CreatePropertyResponse } from "./CreateProperty/res";
import { RemovePropertyRequest } from "./RemoveProperty/req";
import { RemovePropertyResponse } from "./RemoveProperty/res";
import { SetUserPropertyValueRequest } from "./SetUserPropertyValue/req";
import { SetUserPropertyValueResponse } from "./SetUserPropertyValue/res";
import { FilterUsersRequest } from "./FilterUsers/req";
import { FilterUsersResponse } from "./FilterUsers/res";
import { CheckUsedPropertyRequest } from "./CheckUsedProperty/req";
import { CheckUsedPropertyResponse } from "./CheckUsedProperty/res";
import { DeleteUserPropertyValueRequest } from "./DeleteUserPropertyValue/req";
import { DeleteUserPropertyValueResponse } from "./DeleteUserPropertyValue/res";
import { SyncAllEduInfoRequest } from "./SyncAllEduInfo/req";
import { SyncAllEduInfoResponse } from "./SyncAllEduInfo/res";
import { QuerySyncStatusByAliUidRequest } from "./QuerySyncStatusByAliUid/req";
import { QuerySyncStatusByAliUidResponse } from "./QuerySyncStatusByAliUid/res";
import { ModifyUserRequest } from "./ModifyUser/req";
import { ModifyUserResponse } from "./ModifyUser/res";
import { DescribeOrgsRequest } from "./DescribeOrgs/req";
import { DescribeOrgsResponse } from "./DescribeOrgs/res";
import { GetManagerInfoByAuthCodeRequest } from "./GetManagerInfoByAuthCode/req";
import { GetManagerInfoByAuthCodeResponse } from "./GetManagerInfoByAuthCode/res";

interface EDS_USER {
    /**
     * 调用UnlockMfaDevice解锁便捷用户绑定的虚拟MFA设备。
     */
    UnlockMfaDevice(query: UnlockMfaDeviceRequest): Promise<UnlockMfaDeviceResponse>;
    /**
     * 删除一个或者多个便捷账号。
     */
    RemoveUsers(query: RemoveUsersRequest): Promise<RemoveUsersResponse>;
    /**
     * 解锁一个或者多个便捷用户。
     */
    UnlockUsers(query: UnlockUsersRequest): Promise<UnlockUsersResponse>;
    /**
     * 调用LockMfaDevice锁定便捷用户绑定的虚拟MFA设备。
     */
    LockMfaDevice(query: LockMfaDeviceRequest): Promise<LockMfaDeviceResponse>;
    /**
     * 调用RemoveMfaDevice删除便捷用户绑定的虚拟MFA设备。
     */
    RemoveMfaDevice(query: RemoveMfaDeviceRequest): Promise<RemoveMfaDeviceResponse>;
    /**
     * 锁定一个或者多个便捷用户。
     */
    LockUsers(query: LockUsersRequest): Promise<LockUsersResponse>;
    /**
     * 调用ResetUserPassword重置便捷用户的密码，包括生成重置密码Token，并发送重置密码邮件到便捷用户的邮箱。
     */
    ResetUserPassword(query: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse>;
    /**
     * 查询便捷用户绑定的虚拟MFA设备。
     */
    DescribeMfaDevices(query: DescribeMfaDevicesRequest): Promise<DescribeMfaDevicesResponse>;
    /**
     * 查询便捷用户信息，例如便捷用户的用户名、邮箱地址、备注名称等等。
     */
    DescribeUsers(query: DescribeUsersRequest): Promise<DescribeUsersResponse>;
    /**
     * 为终端用户创建便捷账号。
     */
    CreateUsers(query: CreateUsersRequest): Promise<CreateUsersResponse>;
    /**
     * 校验自定义属性值是否有关联用户。
     */
    CheckUsedPropertyValue(query: CheckUsedPropertyValueRequest): Promise<CheckUsedPropertyValueResponse>;
    /**
     * 查询当前账号下已有的用户属性列表。
     */
    ListProperty(query: ListPropertyRequest): Promise<ListPropertyResponse>;
    /**
     * 查询某一用户属性包含的属性值列表。
     */
    ListPropertyValue(query: ListPropertyValueRequest): Promise<ListPropertyValueResponse>;
    /**
     * 修改用户属性。
     */
    UpdateProperty(query: UpdatePropertyRequest): Promise<UpdatePropertyResponse>;
    /**
     * 创建一个用户属性。
     */
    CreateProperty(query: CreatePropertyRequest): Promise<CreatePropertyResponse>;
    /**
     * 删除一组用户属性。
     */
    RemoveProperty(query: RemovePropertyRequest): Promise<RemovePropertyResponse>;
    /**
     * 为某个用户关联一个用户属性。
     */
    SetUserPropertyValue(query: SetUserPropertyValueRequest): Promise<SetUserPropertyValueResponse>;
    /**
     * 按用户属性筛选查询便捷账号信息。
     */
    FilterUsers(query: FilterUsersRequest): Promise<FilterUsersResponse>;
    /**
     * 校验某一用户属性是否已关联便捷用户。
     */
    CheckUsedProperty(query: CheckUsedPropertyRequest): Promise<CheckUsedPropertyResponse>;
    /**
     * 解除一个用户与某个用户属性的绑定关系。
     */
    DeleteUserPropertyValue(query: DeleteUserPropertyValueRequest): Promise<DeleteUserPropertyValueResponse>;
    /**
     * 同步所有教育信息。
     */
    SyncAllEduInfo(query: SyncAllEduInfoRequest): Promise<SyncAllEduInfoResponse>;
    /**
     * 查询用户同步状态。
     */
    QuerySyncStatusByAliUid(query: QuerySyncStatusByAliUidRequest): Promise<QuerySyncStatusByAliUidResponse>;
    /**
     * 修改用户信息。
     */
    ModifyUser(query: ModifyUserRequest): Promise<ModifyUserResponse>;
    /**
     * 查询组织列表。
     */
    DescribeOrgs(query: DescribeOrgsRequest): Promise<DescribeOrgsResponse>;
    /**
     * 根据authcode获取当前登录的管理员信息。
     */
    GetManagerInfoByAuthCode(query: GetManagerInfoByAuthCodeRequest): Promise<GetManagerInfoByAuthCodeResponse>;
}
export default EDS_USER;
