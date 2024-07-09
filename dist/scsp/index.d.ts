import { AnswerCallRequest } from "./AnswerCall/req";
import { AnswerCallResponse } from "./AnswerCall/res";
import { AssignTicketRequest } from "./AssignTicket/req";
import { AssignTicketResponse } from "./AssignTicket/res";
import { CloseTicketRequest } from "./CloseTicket/req";
import { CloseTicketResponse } from "./CloseTicket/res";
import { CreateAgentRequest } from "./CreateAgent/req";
import { CreateAgentResponse } from "./CreateAgent/res";
import { CreateCustomerRequest } from "./CreateCustomer/req";
import { CreateCustomerResponse } from "./CreateCustomer/res";
import { CreateEntityIvrRouteRequest } from "./CreateEntityIvrRoute/req";
import { CreateEntityIvrRouteResponse } from "./CreateEntityIvrRoute/res";
import { CreateRoleRequest } from "./CreateRole/req";
import { CreateRoleResponse } from "./CreateRole/res";
import { CreateOuterCallCenterDataRequest } from "./CreateOuterCallCenterData/req";
import { CreateOuterCallCenterDataResponse } from "./CreateOuterCallCenterData/res";
import { CreateSkillGroupRequest } from "./CreateSkillGroup/req";
import { CreateSkillGroupResponse } from "./CreateSkillGroup/res";
import { CreateTicketRequest } from "./CreateTicket/req";
import { CreateTicketResponse } from "./CreateTicket/res";
import { DeleteAgentRequest } from "./DeleteAgent/req";
import { DeleteAgentResponse } from "./DeleteAgent/res";
import { DeleteEntityRouteRequest } from "./DeleteEntityRoute/req";
import { DeleteEntityRouteResponse } from "./DeleteEntityRoute/res";
import { DisableRoleRequest } from "./DisableRole/req";
import { DisableRoleResponse } from "./DisableRole/res";
import { EditEntityRouteRequest } from "./EditEntityRoute/req";
import { EditEntityRouteResponse } from "./EditEntityRoute/res";
import { EnableRoleRequest } from "./EnableRole/req";
import { EnableRoleResponse } from "./EnableRole/res";
import { ExecuteActivityRequest } from "./ExecuteActivity/req";
import { ExecuteActivityResponse } from "./ExecuteActivity/res";
import { FetchCallRequest } from "./FetchCall/req";
import { FetchCallResponse } from "./FetchCall/res";
import { FinishHotlineServiceRequest } from "./FinishHotlineService/req";
import { FinishHotlineServiceResponse } from "./FinishHotlineService/res";
import { GenerateWebSocketSignRequest } from "./GenerateWebSocketSign/req";
import { GenerateWebSocketSignResponse } from "./GenerateWebSocketSign/res";
import { GetAgentRequest } from "./GetAgent/req";
import { GetAgentResponse } from "./GetAgent/res";
import { GetEntityRouteRequest } from "./GetEntityRoute/req";
import { GetEntityRouteResponse } from "./GetEntityRoute/res";
import { GetEntityRouteListRequest } from "./GetEntityRouteList/req";
import { GetEntityRouteListResponse } from "./GetEntityRouteList/res";
import { GetGrantedRoleIdsRequest } from "./GetGrantedRoleIds/req";
import { GetGrantedRoleIdsResponse } from "./GetGrantedRoleIds/res";
import { GetHotlineAgentDetailRequest } from "./GetHotlineAgentDetail/req";
import { GetHotlineAgentDetailResponse } from "./GetHotlineAgentDetail/res";
import { GetHotlineAgentDetailReportRequest } from "./GetHotlineAgentDetailReport/req";
import { GetHotlineAgentDetailReportResponse } from "./GetHotlineAgentDetailReport/res";
import { GetHotlineAgentStatusRequest } from "./GetHotlineAgentStatus/req";
import { GetHotlineAgentStatusResponse } from "./GetHotlineAgentStatus/res";
import { GetHotlineGroupDetailReportRequest } from "./GetHotlineGroupDetailReport/req";
import { GetHotlineGroupDetailReportResponse } from "./GetHotlineGroupDetailReport/res";
import { GetHotlineWaitingNumberRequest } from "./GetHotlineWaitingNumber/req";
import { GetHotlineWaitingNumberResponse } from "./GetHotlineWaitingNumber/res";
import { GetNumLocationRequest } from "./GetNumLocation/req";
import { GetNumLocationResponse } from "./GetNumLocation/res";
import { GetOutbounNumListRequest } from "./GetOutbounNumList/req";
import { GetOutbounNumListResponse } from "./GetOutbounNumList/res";
import { GetTicketTemplateSchemaRequest } from "./GetTicketTemplateSchema/req";
import { GetTicketTemplateSchemaResponse } from "./GetTicketTemplateSchema/res";
import { GetUserTokenRequest } from "./GetUserToken/req";
import { GetUserTokenResponse } from "./GetUserToken/res";
import { GrantRolesRequest } from "./GrantRoles/req";
import { GrantRolesResponse } from "./GrantRoles/res";
import { HangupCallRequest } from "./HangupCall/req";
import { HangupCallResponse } from "./HangupCall/res";
import { HangupThirdCallRequest } from "./HangupThirdCall/req";
import { HangupThirdCallResponse } from "./HangupThirdCall/res";
import { HoldCallRequest } from "./HoldCall/req";
import { HoldCallResponse } from "./HoldCall/res";
import { JoinThirdCallRequest } from "./JoinThirdCall/req";
import { JoinThirdCallResponse } from "./JoinThirdCall/res";
import { ListAgentBySkillGroupIdRequest } from "./ListAgentBySkillGroupId/req";
import { ListAgentBySkillGroupIdResponse } from "./ListAgentBySkillGroupId/res";
import { ListOutboundPhoneNumberRequest } from "./ListOutboundPhoneNumber/req";
import { ListOutboundPhoneNumberResponse } from "./ListOutboundPhoneNumber/res";
import { ListHotlineRecordRequest } from "./ListHotlineRecord/req";
import { ListHotlineRecordResponse } from "./ListHotlineRecord/res";
import { ListSkillGroupRequest } from "./ListSkillGroup/req";
import { ListSkillGroupResponse } from "./ListSkillGroup/res";
import { QueryHotlineSessionRequest } from "./QueryHotlineSession/req";
import { QueryHotlineSessionResponse } from "./QueryHotlineSession/res";
import { QuerySkillGroupsRequest } from "./QuerySkillGroups/req";
import { QuerySkillGroupsResponse } from "./QuerySkillGroups/res";
import { QueryTicketActionsRequest } from "./QueryTicketActions/req";
import { QueryTicketActionsResponse } from "./QueryTicketActions/res";
import { QueryTicketsRequest } from "./QueryTickets/req";
import { QueryTicketsResponse } from "./QueryTickets/res";
import { RemoveSkillGroupRequest } from "./RemoveSkillGroup/req";
import { RemoveSkillGroupResponse } from "./RemoveSkillGroup/res";
import { SearchTicketByIdRequest } from "./SearchTicketById/req";
import { SearchTicketByIdResponse } from "./SearchTicketById/res";
import { SearchTicketByPhoneRequest } from "./SearchTicketByPhone/req";
import { SearchTicketByPhoneResponse } from "./SearchTicketByPhone/res";
import { SearchTicketListRequest } from "./SearchTicketList/req";
import { SearchTicketListResponse } from "./SearchTicketList/res";
import { SendHotlineHeartBeatRequest } from "./SendHotlineHeartBeat/req";
import { SendHotlineHeartBeatResponse } from "./SendHotlineHeartBeat/res";
import { SendOutboundCommandRequest } from "./SendOutboundCommand/req";
import { SendOutboundCommandResponse } from "./SendOutboundCommand/res";
import { StartCallRequest } from "./StartCall/req";
import { StartCallResponse } from "./StartCall/res";
import { StartCallV2Request } from "./StartCallV2/req";
import { StartCallV2Response } from "./StartCallV2/res";
import { StartHotlineServiceRequest } from "./StartHotlineService/req";
import { StartHotlineServiceResponse } from "./StartHotlineService/res";
import { SuspendHotlineServiceRequest } from "./SuspendHotlineService/req";
import { SuspendHotlineServiceResponse } from "./SuspendHotlineService/res";
import { TransferCallToAgentRequest } from "./TransferCallToAgent/req";
import { TransferCallToAgentResponse } from "./TransferCallToAgent/res";
import { TransferCallToPhoneRequest } from "./TransferCallToPhone/req";
import { TransferCallToPhoneResponse } from "./TransferCallToPhone/res";
import { TransferCallToSkillGroupRequest } from "./TransferCallToSkillGroup/req";
import { TransferCallToSkillGroupResponse } from "./TransferCallToSkillGroup/res";
import { TransferToThirdCallRequest } from "./TransferToThirdCall/req";
import { TransferToThirdCallResponse } from "./TransferToThirdCall/res";
import { UpdateAgentRequest } from "./UpdateAgent/req";
import { UpdateAgentResponse } from "./UpdateAgent/res";
import { UpdateCustomerRequest } from "./UpdateCustomer/req";
import { UpdateCustomerResponse } from "./UpdateCustomer/res";
import { UpdateRoleRequest } from "./UpdateRole/req";
import { UpdateRoleResponse } from "./UpdateRole/res";
import { UpdateSkillGroupRequest } from "./UpdateSkillGroup/req";
import { UpdateSkillGroupResponse } from "./UpdateSkillGroup/res";
import { UpdateTicketRequest } from "./UpdateTicket/req";
import { UpdateTicketResponse } from "./UpdateTicket/res";
import { GetOuterCallCenterDataListRequest } from "./GetOuterCallCenterDataList/req";
import { GetOuterCallCenterDataListResponse } from "./GetOuterCallCenterDataList/res";
import { QueryRingDetailListRequest } from "./QueryRingDetailList/req";
import { QueryRingDetailListResponse } from "./QueryRingDetailList/res";
import { UpdateRingStatusRequest } from "./UpdateRingStatus/req";
import { UpdateRingStatusResponse } from "./UpdateRingStatus/res";
import { GetAuthInfoRequest } from "./GetAuthInfo/req";
import { GetAuthInfoResponse } from "./GetAuthInfo/res";
import { GetEntityTagRelationRequest } from "./GetEntityTagRelation/req";
import { GetEntityTagRelationResponse } from "./GetEntityTagRelation/res";
import { GetTagListRequest } from "./GetTagList/req";
import { GetTagListResponse } from "./GetTagList/res";
import { UpdateEntityTagRelationRequest } from "./UpdateEntityTagRelation/req";
import { UpdateEntityTagRelationResponse } from "./UpdateEntityTagRelation/res";
import { GetCMSIdByForeignIdRequest } from "./GetCMSIdByForeignId/req";
import { GetCMSIdByForeignIdResponse } from "./GetCMSIdByForeignId/res";
import { QueryTicketCountRequest } from "./QueryTicketCount/req";
import { QueryTicketCountResponse } from "./QueryTicketCount/res";
import { QueryServiceConfigRequest } from "./QueryServiceConfig/req";
import { QueryServiceConfigResponse } from "./QueryServiceConfig/res";
import { AppMessagePushRequest } from "./AppMessagePush/req";
import { AppMessagePushResponse } from "./AppMessagePush/res";
import { GetCallsPerDayRequest } from "./GetCallsPerDay/req";
import { GetCallsPerDayResponse } from "./GetCallsPerDay/res";
import { createTicketWithBizDataRequest } from "./createTicketWithBizData/req";
import { createTicketWithBizDataResponse } from "./createTicketWithBizData/res";
import { ChangeChatAgentStatusRequest } from "./ChangeChatAgentStatus/req";
import { ChangeChatAgentStatusResponse } from "./ChangeChatAgentStatus/res";
import { StartChatWorkRequest } from "./StartChatWork/req";
import { StartChatWorkResponse } from "./StartChatWork/res";
import { CreateThirdSsoAgentRequest } from "./CreateThirdSsoAgent/req";
import { CreateThirdSsoAgentResponse } from "./CreateThirdSsoAgent/res";
import { CreateSubTicketRequest } from "./CreateSubTicket/req";
import { CreateSubTicketResponse } from "./CreateSubTicket/res";
import { GetByForeignIdRequest } from "./GetByForeignId/req";
import { GetByForeignIdResponse } from "./GetByForeignId/res";
import { QueryRelationTicketsRequest } from "./QueryRelationTickets/req";
import { QueryRelationTicketsResponse } from "./QueryRelationTickets/res";
import { GetTicketByCaseIdRequest } from "./GetTicketByCaseId/req";
import { GetTicketByCaseIdResponse } from "./GetTicketByCaseId/res";
import { ListAllHotLineSkillGroupsRequest } from "./ListAllHotLineSkillGroups/req";
import { ListAllHotLineSkillGroupsResponse } from "./ListAllHotLineSkillGroups/res";
import { GetAllDepartmentRequest } from "./GetAllDepartment/req";
import { GetAllDepartmentResponse } from "./GetAllDepartment/res";
import { QueryServicerByIdRequest } from "./QueryServicerById/req";
import { QueryServicerByIdResponse } from "./QueryServicerById/res";
import { QueryHotlineDashboardRequest } from "./QueryHotlineDashboard/req";
import { QueryHotlineDashboardResponse } from "./QueryHotlineDashboard/res";
import { QueryServicerByDepartmentAndMixNameRequest } from "./QueryServicerByDepartmentAndMixName/req";
import { QueryServicerByDepartmentAndMixNameResponse } from "./QueryServicerByDepartmentAndMixName/res";
import { StartAgentMonitorRequest } from "./StartAgentMonitor/req";
import { StartAgentMonitorResponse } from "./StartAgentMonitor/res";
import { HangUpAgentMonitorRequest } from "./HangUpAgentMonitor/req";
import { HangUpAgentMonitorResponse } from "./HangUpAgentMonitor/res";
import { AnwserAgentMonitorRequest } from "./AnwserAgentMonitor/req";
import { AnwserAgentMonitorResponse } from "./AnwserAgentMonitor/res";
import { GetForeignIdByCMSIdRequest } from "./GetForeignIdByCMSId/req";
import { GetForeignIdByCMSIdResponse } from "./GetForeignIdByCMSId/res";
import { BindAgentHotlinePhoneRequest } from "./BindAgentHotlinePhone/req";
import { BindAgentHotlinePhoneResponse } from "./BindAgentHotlinePhone/res";
import { GetHotlineAgentDetailWithChannelRequest } from "./GetHotlineAgentDetailWithChannel/req";
import { GetHotlineAgentDetailWithChannelResponse } from "./GetHotlineAgentDetailWithChannel/res";
import { GetAgentHotlinePhoneRequest } from "./GetAgentHotlinePhone/req";
import { GetAgentHotlinePhoneResponse } from "./GetAgentHotlinePhone/res";
import { GetAgentHotlineRequest } from "./GetAgentHotline/req";
import { GetAgentHotlineResponse } from "./GetAgentHotline/res";
import { UnbindAgentHotlinePhoneRequest } from "./UnbindAgentHotlinePhone/req";
import { UnbindAgentHotlinePhoneResponse } from "./UnbindAgentHotlinePhone/res";
import { GetAgentWorkStatusRequest } from "./GetAgentWorkStatus/req";
import { GetAgentWorkStatusResponse } from "./GetAgentWorkStatus/res";
import { SendVerificationCodeRequest } from "./SendVerificationCode/req";
import { SendVerificationCodeResponse } from "./SendVerificationCode/res";
import { StartHotlineWorkRequest } from "./StartHotlineWork/req";
import { StartHotlineWorkResponse } from "./StartHotlineWork/res";
import { FinishHotlineServiceNewRequest } from "./FinishHotlineServiceNew/req";
import { FinishHotlineServiceNewResponse } from "./FinishHotlineServiceNew/res";
import { GetOnlineTouchSessionListRequest } from "./GetOnlineTouchSessionList/req";
import { GetOnlineTouchSessionListResponse } from "./GetOnlineTouchSessionList/res";

interface SCSP {
    /**
     * 接听来电。
     */
    AnswerCall(query: AnswerCallRequest): Promise<AnswerCallResponse>;
    /**
     * 根据工单id分配工单。
     */
    AssignTicket(query: AssignTicketRequest): Promise<AssignTicketResponse>;
    /**
     * 根据工单id关闭工单，添加自定义动作记录。
     */
    CloseTicket(query: CloseTicketRequest): Promise<CloseTicketResponse>;
    /**
     * 创建悉犀客服工作台坐席账号，返回坐席ID。
     */
    CreateAgent(query: CreateAgentRequest): Promise<CreateAgentResponse>;
    /**
     * 创建客户。
     */
    CreateCustomer(query: CreateCustomerRequest): Promise<CreateCustomerResponse>;
    CreateEntityIvrRoute(query: CreateEntityIvrRouteRequest): Promise<CreateEntityIvrRouteResponse>;
    CreateRole(query: CreateRoleRequest): Promise<CreateRoleResponse>;
    /**
     * 热线数据同步。
     */
    CreateOuterCallCenterData(query: CreateOuterCallCenterDataRequest): Promise<CreateOuterCallCenterDataResponse>;
    /**
     * 根据技能组名称和渠道类型创建技能组，可定义技能组的对外显示名、描述信息。
     */
    CreateSkillGroup(query: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse>;
    /**
     * 创建工单。
     */
    CreateTicket(query: CreateTicketRequest): Promise<CreateTicketResponse>;
    /**
     * 根据坐席账号名称，删除悉犀客服工作台坐席账号，逻辑删除，删除后重新添加，坐席ID不变。
     */
    DeleteAgent(query: DeleteAgentRequest): Promise<DeleteAgentResponse>;
    DeleteEntityRoute(query: DeleteEntityRouteRequest): Promise<DeleteEntityRouteResponse>;
    /**
     * 根据角色id禁用悉犀客服工作台角色权限。
     */
    DisableRole(query: DisableRoleRequest): Promise<DisableRoleResponse>;
    EditEntityRoute(query: EditEntityRouteRequest): Promise<EditEntityRouteResponse>;
    /**
     * 根据角色id启用悉犀客服工作台角色权限。
     */
    EnableRole(query: EnableRoleRequest): Promise<EnableRoleResponse>;
    /**
     * 执行自定义活动。
     */
    ExecuteActivity(query: ExecuteActivityRequest): Promise<ExecuteActivityResponse>;
    /**
     * 取回\恢复通话。
     */
    FetchCall(query: FetchCallRequest): Promise<FetchCallResponse>;
    /**
     * 坐席签出，结束热线服务。
     */
    FinishHotlineService(query: FinishHotlineServiceRequest): Promise<FinishHotlineServiceResponse>;
    /**
     * 生成消息通道访问签名。
     */
    GenerateWebSocketSign(query: GenerateWebSocketSignRequest): Promise<GenerateWebSocketSignResponse>;
    /**
     * 根据坐席账号名称查询悉犀客服工作台坐席信息。
     */
    GetAgent(query: GetAgentRequest): Promise<GetAgentResponse>;
    GetEntityRoute(query: GetEntityRouteRequest): Promise<GetEntityRouteResponse>;
    GetEntityRouteList(query: GetEntityRouteListRequest): Promise<GetEntityRouteListResponse>;
    /**
     * 根据坐席账号名称查询悉犀客服工作台坐席的角色权限。
     */
    GetGrantedRoleIds(query: GetGrantedRoleIdsRequest): Promise<GetGrantedRoleIdsResponse>;
    /**
     * 根据坐席账号获取热线坐席当前服务详情。
     */
    GetHotlineAgentDetail(query: GetHotlineAgentDetailRequest): Promise<GetHotlineAgentDetailResponse>;
    GetHotlineAgentDetailReport(query: GetHotlineAgentDetailReportRequest): Promise<GetHotlineAgentDetailReportResponse>;
    /**
     * 根据坐席账号名称查询悉犀客服工作台热线坐席状态。
     */
    GetHotlineAgentStatus(query: GetHotlineAgentStatusRequest): Promise<GetHotlineAgentStatusResponse>;
    GetHotlineGroupDetailReport(query: GetHotlineGroupDetailReportRequest): Promise<GetHotlineGroupDetailReportResponse>;
    /**
     * 获取热线会员排队数。
     */
    GetHotlineWaitingNumber(query: GetHotlineWaitingNumberRequest): Promise<GetHotlineWaitingNumberResponse>;
    /**
     * 获取号码归属地。
     */
    GetNumLocation(query: GetNumLocationRequest): Promise<GetNumLocationResponse>;
    /**
     * 获取外部热线号码列表。
     */
    GetOutbounNumList(query: GetOutbounNumListRequest): Promise<GetOutbounNumListResponse>;
    /**
     * 根据工单模板id查询工单模板信息。
     */
    GetTicketTemplateSchema(query: GetTicketTemplateSchemaRequest): Promise<GetTicketTemplateSchemaResponse>;
    /**
     * 根据用户id获取访问悉犀客服工作台用户token信息。
     */
    GetUserToken(query: GetUserTokenRequest): Promise<GetUserTokenResponse>;
    GrantRoles(query: GrantRolesRequest): Promise<GrantRolesResponse>;
    /**
     * 坐席挂机。
     */
    HangupCall(query: HangupCallRequest): Promise<HangupCallResponse>;
    /**
     * 挂断第三方通话。
     */
    HangupThirdCall(query: HangupThirdCallRequest): Promise<HangupThirdCallResponse>;
    /**
     * 保持通话。
     */
    HoldCall(query: HoldCallRequest): Promise<HoldCallResponse>;
    /**
     * 将第三方加入到通话中。
     */
    JoinThirdCall(query: JoinThirdCallRequest): Promise<JoinThirdCallResponse>;
    /**
     * 根据技能组ID查询悉犀客服工作台坐席列表。
     */
    ListAgentBySkillGroupId(query: ListAgentBySkillGroupIdRequest): Promise<ListAgentBySkillGroupIdResponse>;
    /**
     * 获取指定坐席下的主叫外呼电话号码。
     */
    ListOutboundPhoneNumber(query: ListOutboundPhoneNumberRequest): Promise<ListOutboundPhoneNumberResponse>;
    /**
     * 根据热线会话ID查询热线录音列表。
     */
    ListHotlineRecord(query: ListHotlineRecordRequest): Promise<ListHotlineRecordResponse>;
    /**
     * 根据技能组渠道类型查询悉犀客服工作台技能组。
     */
    ListSkillGroup(query: ListSkillGroupRequest): Promise<ListSkillGroupResponse>;
    QueryHotlineSession(query: QueryHotlineSessionRequest): Promise<QueryHotlineSessionResponse>;
    /**
     * 通过技能组渠道类型、技能组名称、技能组id查询悉犀客服工作台技能组列表。
     */
    QuerySkillGroups(query: QuerySkillGroupsRequest): Promise<QuerySkillGroupsResponse>;
    QueryTicketActions(query: QueryTicketActionsRequest): Promise<QueryTicketActionsResponse>;
    /**
     * 查询工单
     */
    QueryTickets(query: QueryTicketsRequest): Promise<QueryTicketsResponse>;
    /**
     * 根据技能组id删除悉犀客服工作台技能组。
     */
    RemoveSkillGroup(query: RemoveSkillGroupRequest): Promise<RemoveSkillGroupResponse>;
    /**
     * 根据工单id查询工单详情。
     */
    SearchTicketById(query: SearchTicketByIdRequest): Promise<SearchTicketByIdResponse>;
    /**
     * 根据电话查询工单信息。
     */
    SearchTicketByPhone(query: SearchTicketByPhoneRequest): Promise<SearchTicketByPhoneResponse>;
    /**
     * 根据工单操作人id查询工单列表信息。
     */
    SearchTicketList(query: SearchTicketListRequest): Promise<SearchTicketListResponse>;
    /**
     * 发送热线心跳。
     */
    SendHotlineHeartBeat(query: SendHotlineHeartBeatRequest): Promise<SendHotlineHeartBeatResponse>;
    SendOutboundCommand(query: SendOutboundCommandRequest): Promise<SendOutboundCommandResponse>;
    /**
     * 发起外呼。
     */
    StartCall(query: StartCallRequest): Promise<StartCallResponse>;
    /**
     * 发起外呼V2。
     */
    StartCallV2(query: StartCallV2Request): Promise<StartCallV2Response>;
    /**
     * 坐席签入，开始热线服务。
     */
    StartHotlineService(query: StartHotlineServiceRequest): Promise<StartHotlineServiceResponse>;
    /**
     * 坐席小休，暂停热线服。
     */
    SuspendHotlineService(query: SuspendHotlineServiceRequest): Promise<SuspendHotlineServiceResponse>;
    /**
     * 通话单\双步转交到坐席。
     */
    TransferCallToAgent(query: TransferCallToAgentRequest): Promise<TransferCallToAgentResponse>;
    /**
     * 通话单\双步转交到电话。
     */
    TransferCallToPhone(query: TransferCallToPhoneRequest): Promise<TransferCallToPhoneResponse>;
    /**
     * 通话单\双步转交到技能组。
     */
    TransferCallToSkillGroup(query: TransferCallToSkillGroupRequest): Promise<TransferCallToSkillGroupResponse>;
    /**
     * 通话单步转交到第三方。
     */
    TransferToThirdCall(query: TransferToThirdCallRequest): Promise<TransferToThirdCallResponse>;
    UpdateAgent(query: UpdateAgentRequest): Promise<UpdateAgentResponse>;
    /**
     * 更新客户。
     */
    UpdateCustomer(query: UpdateCustomerRequest): Promise<UpdateCustomerResponse>;
    UpdateRole(query: UpdateRoleRequest): Promise<UpdateRoleResponse>;
    /**
     * 根据技能组id修改悉犀客服工作台技能组信息。
     */
    UpdateSkillGroup(query: UpdateSkillGroupRequest): Promise<UpdateSkillGroupResponse>;
    /**
     * 根据工单id更新工单。
     */
    UpdateTicket(query: UpdateTicketRequest): Promise<UpdateTicketResponse>;
    /**
     * 获取外部热线数据列表。
     */
    GetOuterCallCenterDataList(query: GetOuterCallCenterDataListRequest): Promise<GetOuterCallCenterDataListResponse>;
    /**
     * 查询呼损数据。
     */
    QueryRingDetailList(query: QueryRingDetailListRequest): Promise<QueryRingDetailListResponse>;
    /**
     * 更新回访状态。
     */
    UpdateRingStatus(query: UpdateRingStatusRequest): Promise<UpdateRingStatusResponse>;
    GetAuthInfo(query: GetAuthInfoRequest): Promise<GetAuthInfoResponse>;
    GetEntityTagRelation(query: GetEntityTagRelationRequest): Promise<GetEntityTagRelationResponse>;
    GetTagList(query: GetTagListRequest): Promise<GetTagListResponse>;
    UpdateEntityTagRelation(query: UpdateEntityTagRelationRequest): Promise<UpdateEntityTagRelationResponse>;
    /**
     * 根据外部id获取客户id。
     */
    GetCMSIdByForeignId(query: GetCMSIdByForeignIdRequest): Promise<GetCMSIdByForeignIdResponse>;
    /**
     * 根据操作人id查询其处理中的工单总数。
     */
    QueryTicketCount(query: QueryTicketCountRequest): Promise<QueryTicketCountResponse>;
    /**
     * 根据视图code获取服务摘要信息。
     */
    QueryServiceConfig(query: QueryServiceConfigRequest): Promise<QueryServiceConfigResponse>;
    /**
     * 客户App处在离线状态.但客服人员处在上班状态的工单信息推送给客户。由客户这面进行自行推送。
     */
    AppMessagePush(query: AppMessagePushRequest): Promise<AppMessagePushResponse>;
    /**
     * 获取热线日来电次数。
     */
    GetCallsPerDay(query: GetCallsPerDayRequest): Promise<GetCallsPerDayResponse>;
    /**
     * 创建工单加入BIZ字段。
     */
    createTicketWithBizData(query: createTicketWithBizDataRequest): Promise<createTicketWithBizDataResponse>;
    /**
     * 修改在线客服状态。
     */
    ChangeChatAgentStatus(query: ChangeChatAgentStatusRequest): Promise<ChangeChatAgentStatusResponse>;
    /**
     * 修改在线客服状态为上班。
     */
    StartChatWork(query: StartChatWorkRequest): Promise<StartChatWorkResponse>;
    /**
     * 根据用户账号创建免登到客服工作台的坐席。
     */
    CreateThirdSsoAgent(query: CreateThirdSsoAgentRequest): Promise<CreateThirdSsoAgentResponse>;
    /**
     * 创建工单
     */
    CreateSubTicket(query: CreateSubTicketRequest): Promise<CreateSubTicketResponse>;
    /**
     * 获取外部账号映射的会员账号关系信息
     */
    GetByForeignId(query: GetByForeignIdRequest): Promise<GetByForeignIdResponse>;
    /**
     * 查询相关工单
     */
    QueryRelationTickets(query: QueryRelationTicketsRequest): Promise<QueryRelationTicketsResponse>;
    /**
     * 查询工单信息-DB
     */
    GetTicketByCaseId(query: GetTicketByCaseIdRequest): Promise<GetTicketByCaseIdResponse>;
    /**
     * 查询某个租户下所有热线类型技能组及技能组分类
     */
    ListAllHotLineSkillGroups(query: ListAllHotLineSkillGroupsRequest): Promise<ListAllHotLineSkillGroupsResponse>;
    /**
     * 获取指定租户下的部门列表
     */
    GetAllDepartment(query: GetAllDepartmentRequest): Promise<GetAllDepartmentResponse>;
    /**
     * 根据坐席标识查询坐席详细信息
     */
    QueryServicerById(query: QueryServicerByIdRequest): Promise<QueryServicerByIdResponse>;
    /**
     * 调用QueryHotlineDashboard接口查询热线看板信息。
     */
    QueryHotlineDashboard(query: QueryHotlineDashboardRequest): Promise<QueryHotlineDashboardResponse>;
    /**
     * 分页查询客服信息通过部门和关键字
     */
    QueryServicerByDepartmentAndMixName(query: QueryServicerByDepartmentAndMixNameRequest): Promise<QueryServicerByDepartmentAndMixNameResponse>;
    /**
     * 发起坐席监听
     */
    StartAgentMonitor(query: StartAgentMonitorRequest): Promise<StartAgentMonitorResponse>;
    /**
     * 挂断坐席监听
     */
    HangUpAgentMonitor(query: HangUpAgentMonitorRequest): Promise<HangUpAgentMonitorResponse>;
    /**
     * 接通坐席监听
     */
    AnwserAgentMonitor(query: AnwserAgentMonitorRequest): Promise<AnwserAgentMonitorResponse>;
    /**
     * 通过CMSId获取ForeignId
     */
    GetForeignIdByCMSId(query: GetForeignIdByCMSIdRequest): Promise<GetForeignIdByCMSIdResponse>;
    /**
     * 更新小二扩展手机号信息。
     */
    BindAgentHotlinePhone(query: BindAgentHotlinePhoneRequest): Promise<BindAgentHotlinePhoneResponse>;
    /**
     * 同 GetHotlineAgentDetail，返回上班渠道
     */
    GetHotlineAgentDetailWithChannel(query: GetHotlineAgentDetailWithChannelRequest): Promise<GetHotlineAgentDetailWithChannelResponse>;
    /**
     * 获取小二扩展信息。
     */
    GetAgentHotlinePhone(query: GetAgentHotlinePhoneRequest): Promise<GetAgentHotlinePhoneResponse>;
    /**
     * 查询热线坐席信息与热线技能组
     */
    GetAgentHotline(query: GetAgentHotlineRequest): Promise<GetAgentHotlineResponse>;
    /**
     * 更新小二扩展手机号信息为空。
     */
    UnbindAgentHotlinePhone(query: UnbindAgentHotlinePhoneRequest): Promise<UnbindAgentHotlinePhoneResponse>;
    /**
     * 获取坐席签入签出状态查询。
     */
    GetAgentWorkStatus(query: GetAgentWorkStatusRequest): Promise<GetAgentWorkStatusResponse>;
    /**
     * 坐席绑定手机号，发送验证码短信。
     */
    SendVerificationCode(query: SendVerificationCodeRequest): Promise<SendVerificationCodeResponse>;
    /**
     * 热线坐席上班
     */
    StartHotlineWork(query: StartHotlineWorkRequest): Promise<StartHotlineWorkResponse>;
    /**
     * 热线下班接口，参考FinishHotlineService，坐席通话中下班失败
     */
    FinishHotlineServiceNew(query: FinishHotlineServiceNewRequest): Promise<FinishHotlineServiceNewResponse>;
    /**
     * 查询在线会话记录信息列表【以touch为维度】
     */
    GetOnlineTouchSessionList(query: GetOnlineTouchSessionListRequest): Promise<GetOnlineTouchSessionListResponse>;
}
export default SCSP;
