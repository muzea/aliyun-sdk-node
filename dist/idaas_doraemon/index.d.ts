import { ServiceInvokeRequest } from "./ServiceInvoke/req";
import { ServiceInvokeResponse } from "./ServiceInvoke/res";
import { CreateAuthenticatorRegistrationRequest } from "./CreateAuthenticatorRegistration/req";
import { CreateAuthenticatorRegistrationResponse } from "./CreateAuthenticatorRegistration/res";
import { CreateUserAuthenticateOptionsRequest } from "./CreateUserAuthenticateOptions/req";
import { CreateUserAuthenticateOptionsResponse } from "./CreateUserAuthenticateOptions/res";
import { DeregisterAuthenticatorRequest } from "./DeregisterAuthenticator/req";
import { DeregisterAuthenticatorResponse } from "./DeregisterAuthenticator/res";
import { FetchAccessTokenRequest } from "./FetchAccessToken/req";
import { FetchAccessTokenResponse } from "./FetchAccessToken/res";
import { GetAuthenticatorRequest } from "./GetAuthenticator/req";
import { GetAuthenticatorResponse } from "./GetAuthenticator/res";
import { ListAuthenticationLogsRequest } from "./ListAuthenticationLogs/req";
import { ListAuthenticationLogsResponse } from "./ListAuthenticationLogs/res";
import { ListAuthenticatorsRequest } from "./ListAuthenticators/req";
import { ListAuthenticatorsResponse } from "./ListAuthenticators/res";
import { ListAuthenticatorOpsLogsRequest } from "./ListAuthenticatorOpsLogs/req";
import { ListAuthenticatorOpsLogsResponse } from "./ListAuthenticatorOpsLogs/res";
import { ListPwnedPasswordsRequest } from "./ListPwnedPasswords/req";
import { ListPwnedPasswordsResponse } from "./ListPwnedPasswords/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { RegisterAuthenticatorRequest } from "./RegisterAuthenticator/req";
import { RegisterAuthenticatorResponse } from "./RegisterAuthenticator/res";
import { UpdateAuthenticatorAttributeRequest } from "./UpdateAuthenticatorAttribute/req";
import { UpdateAuthenticatorAttributeResponse } from "./UpdateAuthenticatorAttribute/res";
import { VerifyUserAuthenticationRequest } from "./VerifyUserAuthentication/req";
import { VerifyUserAuthenticationResponse } from "./VerifyUserAuthentication/res";
import { VerifyIdTokenRequest } from "./VerifyIdToken/req";
import { VerifyIdTokenResponse } from "./VerifyIdToken/res";
import { ListCostUnitOrdersRequest } from "./ListCostUnitOrders/req";
import { ListCostUnitOrdersResponse } from "./ListCostUnitOrders/res";
import { ListOrderConsumeStatisticRecordsRequest } from "./ListOrderConsumeStatisticRecords/req";
import { ListOrderConsumeStatisticRecordsResponse } from "./ListOrderConsumeStatisticRecords/res";
import { QuerySmsReportsRequest } from "./QuerySmsReports/req";
import { QuerySmsReportsResponse } from "./QuerySmsReports/res";

interface IDAAS_DORAEMON {
    /**
     * 根据 ServiceCode 和 Action 决定是使用哪种认证方式认证。
     */
    ServiceInvoke(query: ServiceInvokeRequest): Promise<ServiceInvokeResponse>;
    /**
     * 创建认证器初始化。
     */
    CreateAuthenticatorRegistration(query: CreateAuthenticatorRegistrationRequest): Promise<CreateAuthenticatorRegistrationResponse>;
    /**
     * 认证器-验证初始化。
     */
    CreateUserAuthenticateOptions(query: CreateUserAuthenticateOptionsRequest): Promise<CreateUserAuthenticateOptionsResponse>;
    /**
     * 注销认证器。
     */
    DeregisterAuthenticator(query: DeregisterAuthenticatorRequest): Promise<DeregisterAuthenticatorResponse>;
    /**
     * 获取一个应用API授权访问的token, 用于后续认证器相关接口调用。
     */
    FetchAccessToken(query: FetchAccessTokenRequest): Promise<FetchAccessTokenResponse>;
    /**
     * 获取认证器详情。
     */
    GetAuthenticator(query: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    /**
     * 查询认证日志。
     */
    ListAuthenticationLogs(query: ListAuthenticationLogsRequest): Promise<ListAuthenticationLogsResponse>;
    /**
     * 获取所有的认证器。
     */
    ListAuthenticators(query: ListAuthenticatorsRequest): Promise<ListAuthenticatorsResponse>;
    /**
     * 查询认证器操作日志。
     */
    ListAuthenticatorOpsLogs(query: ListAuthenticatorOpsLogsRequest): Promise<ListAuthenticatorOpsLogsResponse>;
    /**
     * 检测密码泄露。
     */
    ListPwnedPasswords(query: ListPwnedPasswordsRequest): Promise<ListPwnedPasswordsResponse>;
    /**
     * 查询指定应用下的用户信息。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 注册认证器。
     */
    RegisterAuthenticator(query: RegisterAuthenticatorRequest): Promise<RegisterAuthenticatorResponse>;
    /**
     * 更新认证器名字。
     */
    UpdateAuthenticatorAttribute(query: UpdateAuthenticatorAttributeRequest): Promise<UpdateAuthenticatorAttributeResponse>;
    /**
     * 认证器-验证。
     */
    VerifyUserAuthentication(query: VerifyUserAuthenticationRequest): Promise<VerifyUserAuthenticationResponse>;
    /**
     * 用于验证 IdToken。号码认证或者 IFAA 认证通过后，获得的 IdToken 需要通过此接口验证。
     */
    VerifyIdToken(query: VerifyIdTokenRequest): Promise<VerifyIdTokenResponse>;
    /**
     * 分页查询订单及其 CU 用量信息，按创建时间倒序排列。
     */
    ListCostUnitOrders(query: ListCostUnitOrdersRequest): Promise<ListCostUnitOrdersResponse>;
    /**
     * 分页查询订单每日用量统计记录，按统计日期正序排列。统计日期最大区间范围为 31 天，如果超过从最大值向前推 31 天。T+1 出统计记录，当天12点前统计出昨天的用量。
     */
    ListOrderConsumeStatisticRecords(query: ListOrderConsumeStatisticRecordsRequest): Promise<ListOrderConsumeStatisticRecordsResponse>;
    /**
     * 短信回执查询。
     */
    QuerySmsReports(query: QuerySmsReportsRequest): Promise<QuerySmsReportsResponse>;
}
export default IDAAS_DORAEMON;
