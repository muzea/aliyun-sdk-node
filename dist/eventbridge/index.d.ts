import { GetEventBusRequest } from "./GetEventBus/req";
import { GetEventBusResponse } from "./GetEventBus/res";
import { CreateEventBusRequest } from "./CreateEventBus/req";
import { CreateEventBusResponse } from "./CreateEventBus/res";
import { QueryEventTracesRequest } from "./QueryEventTraces/req";
import { QueryEventTracesResponse } from "./QueryEventTraces/res";
import { ListEventBusesRequest } from "./ListEventBuses/req";
import { ListEventBusesResponse } from "./ListEventBuses/res";
import { ListTargetsRequest } from "./ListTargets/req";
import { ListTargetsResponse } from "./ListTargets/res";
import { DeleteEventStreamingRequest } from "./DeleteEventStreaming/req";
import { DeleteEventStreamingResponse } from "./DeleteEventStreaming/res";
import { UpdateRuleRequest } from "./UpdateRule/req";
import { UpdateRuleResponse } from "./UpdateRule/res";
import { CreateEventSourceRequest } from "./CreateEventSource/req";
import { CreateEventSourceResponse } from "./CreateEventSource/res";
import { DeleteEventBusRequest } from "./DeleteEventBus/req";
import { DeleteEventBusResponse } from "./DeleteEventBus/res";
import { UpdateEventSourceRequest } from "./UpdateEventSource/req";
import { UpdateEventSourceResponse } from "./UpdateEventSource/res";
import { DeleteTargetsRequest } from "./DeleteTargets/req";
import { DeleteTargetsResponse } from "./DeleteTargets/res";
import { QueryTracedEventByEventIdRequest } from "./QueryTracedEventByEventId/req";
import { QueryTracedEventByEventIdResponse } from "./QueryTracedEventByEventId/res";
import { CreateServiceLinkedRoleForProductRequest } from "./CreateServiceLinkedRoleForProduct/req";
import { CreateServiceLinkedRoleForProductResponse } from "./CreateServiceLinkedRoleForProduct/res";
import { StartEventStreamingRequest } from "./StartEventStreaming/req";
import { StartEventStreamingResponse } from "./StartEventStreaming/res";
import { GetEventStreamingRequest } from "./GetEventStreaming/req";
import { GetEventStreamingResponse } from "./GetEventStreaming/res";
import { DisableRuleRequest } from "./DisableRule/req";
import { DisableRuleResponse } from "./DisableRule/res";
import { DeleteEventSourceRequest } from "./DeleteEventSource/req";
import { DeleteEventSourceResponse } from "./DeleteEventSource/res";
import { PauseEventStreamingRequest } from "./PauseEventStreaming/req";
import { PauseEventStreamingResponse } from "./PauseEventStreaming/res";
import { QueryTracedEventsRequest } from "./QueryTracedEvents/req";
import { QueryTracedEventsResponse } from "./QueryTracedEvents/res";
import { EnableRuleRequest } from "./EnableRule/req";
import { EnableRuleResponse } from "./EnableRule/res";
import { UpdateEventBusRequest } from "./UpdateEventBus/req";
import { UpdateEventBusResponse } from "./UpdateEventBus/res";
import { ListRulesRequest } from "./ListRules/req";
import { ListRulesResponse } from "./ListRules/res";
import { CreateRuleRequest } from "./CreateRule/req";
import { CreateRuleResponse } from "./CreateRule/res";
import { QueryEventRequest } from "./QueryEvent/req";
import { QueryEventResponse } from "./QueryEvent/res";
import { DeleteRuleRequest } from "./DeleteRule/req";
import { DeleteRuleResponse } from "./DeleteRule/res";
import { GetRuleRequest } from "./GetRule/req";
import { GetRuleResponse } from "./GetRule/res";
import { ListAliyunOfficialEventSourcesRequest } from "./ListAliyunOfficialEventSources/req";
import { ListAliyunOfficialEventSourcesResponse } from "./ListAliyunOfficialEventSources/res";
import { ListUserDefinedEventSourcesRequest } from "./ListUserDefinedEventSources/req";
import { ListUserDefinedEventSourcesResponse } from "./ListUserDefinedEventSources/res";
import { UpdateEventStreamingRequest } from "./UpdateEventStreaming/req";
import { UpdateEventStreamingResponse } from "./UpdateEventStreaming/res";
import { CreateEventStreamingRequest } from "./CreateEventStreaming/req";
import { CreateEventStreamingResponse } from "./CreateEventStreaming/res";
import { GetConnectionRequest } from "./GetConnection/req";
import { GetConnectionResponse } from "./GetConnection/res";
import { UpdateApiDestinationRequest } from "./UpdateApiDestination/req";
import { UpdateApiDestinationResponse } from "./UpdateApiDestination/res";
import { DeleteApiDestinationRequest } from "./DeleteApiDestination/req";
import { DeleteApiDestinationResponse } from "./DeleteApiDestination/res";
import { ListConnectionsRequest } from "./ListConnections/req";
import { ListConnectionsResponse } from "./ListConnections/res";
import { UpdateConnectionRequest } from "./UpdateConnection/req";
import { UpdateConnectionResponse } from "./UpdateConnection/res";
import { ListApiDestinationsRequest } from "./ListApiDestinations/req";
import { ListApiDestinationsResponse } from "./ListApiDestinations/res";
import { CreateConnectionRequest } from "./CreateConnection/req";
import { CreateConnectionResponse } from "./CreateConnection/res";
import { GetApiDestinationRequest } from "./GetApiDestination/req";
import { GetApiDestinationResponse } from "./GetApiDestination/res";
import { DeleteConnectionRequest } from "./DeleteConnection/req";
import { DeleteConnectionResponse } from "./DeleteConnection/res";
import { CreateApiDestinationRequest } from "./CreateApiDestination/req";
import { CreateApiDestinationResponse } from "./CreateApiDestination/res";
import { TestEventPatternRequest } from "./TestEventPattern/req";
import { TestEventPatternResponse } from "./TestEventPattern/res";
import { ListEventStreamingsRequest } from "./ListEventStreamings/req";
import { ListEventStreamingsResponse } from "./ListEventStreamings/res";
import { PutTargetsRequest } from "./PutTargets/req";
import { PutTargetsResponse } from "./PutTargets/res";
import { EventCenterCheckEnabledOnDefaultBusRequest } from "./EventCenterCheckEnabledOnDefaultBus/req";
import { EventCenterCheckEnabledOnDefaultBusResponse } from "./EventCenterCheckEnabledOnDefaultBus/res";
import { EventCenterDisableOnDefaultBusRequest } from "./EventCenterDisableOnDefaultBus/req";
import { EventCenterDisableOnDefaultBusResponse } from "./EventCenterDisableOnDefaultBus/res";
import { EventCenterEnableOnDefaultBusRequest } from "./EventCenterEnableOnDefaultBus/req";
import { EventCenterEnableOnDefaultBusResponse } from "./EventCenterEnableOnDefaultBus/res";
import { EventCenterQueryEventsRequest } from "./EventCenterQueryEvents/req";
import { EventCenterQueryEventsResponse } from "./EventCenterQueryEvents/res";

interface EVENTBRIDGE {
    /**
     * 获取一个事件总线的详细信息。
     */
    GetEventBus(query: GetEventBusRequest): Promise<GetEventBusResponse>;
    /**
     * 创建一个事件总线。
     */
    CreateEventBus(query: CreateEventBusRequest): Promise<CreateEventBusResponse>;
    /**
     * 查询事件轨迹。
     */
    QueryEventTraces(query: QueryEventTracesRequest): Promise<QueryEventTracesResponse>;
    /**
     * 查询所有事件总线。
     */
    ListEventBuses(query: ListEventBusesRequest): Promise<ListEventBusesResponse>;
    /**
     * 查询一个事件规则的所有投递目标。
     */
    ListTargets(query: ListTargetsRequest): Promise<ListTargetsResponse>;
    /**
     * 删除一个事件流。
     */
    DeleteEventStreaming(query: DeleteEventStreamingRequest): Promise<DeleteEventStreamingResponse>;
    /**
     * 更新一个事件规则的配置。
     */
    UpdateRule(query: UpdateRuleRequest): Promise<UpdateRuleResponse>;
    /**
     * 创建一个外部事件源。
     */
    CreateEventSource(query: CreateEventSourceRequest): Promise<CreateEventSourceResponse>;
    /**
     * 删除一个事件总线。
     */
    DeleteEventBus(query: DeleteEventBusRequest): Promise<DeleteEventBusResponse>;
    /**
     * 更新一个事件源的配置。
     */
    UpdateEventSource(query: UpdateEventSourceRequest): Promise<UpdateEventSourceResponse>;
    /**
     * 删除一个事件规则下的一个或多个投递目标。
     */
    DeleteTargets(query: DeleteTargetsRequest): Promise<DeleteTargetsResponse>;
    /**
     * 通过EventId查询事件轨迹。
     */
    QueryTracedEventByEventId(query: QueryTracedEventByEventIdRequest): Promise<QueryTracedEventByEventIdResponse>;
    /**
     * 根据产品关联的 SLR名称创建SLR。
     */
    CreateServiceLinkedRoleForProduct(query: CreateServiceLinkedRoleForProductRequest): Promise<CreateServiceLinkedRoleForProductResponse>;
    /**
     * 启用一个已创建或已停用的事件流。
     */
    StartEventStreaming(query: StartEventStreamingRequest): Promise<StartEventStreamingResponse>;
    /**
     * 获取一个事件流的详细信息。
     */
    GetEventStreaming(query: GetEventStreamingRequest): Promise<GetEventStreamingResponse>;
    /**
     * 禁用一个事件规则。
     */
    DisableRule(query: DisableRuleRequest): Promise<DisableRuleResponse>;
    /**
     * 删除一个事件源。
     */
    DeleteEventSource(query: DeleteEventSourceRequest): Promise<DeleteEventSourceResponse>;
    /**
     * 停用一个运行中的事件流。
     */
    PauseEventStreaming(query: PauseEventStreamingRequest): Promise<PauseEventStreamingResponse>;
    /**
     * 通过时间范围查询事件轨迹。
     */
    QueryTracedEvents(query: QueryTracedEventsRequest): Promise<QueryTracedEventsResponse>;
    /**
     * 启用一个事件规则。
     */
    EnableRule(query: EnableRuleRequest): Promise<EnableRuleResponse>;
    /**
     * 修改事件总线。
     */
    UpdateEventBus(query: UpdateEventBusRequest): Promise<UpdateEventBusResponse>;
    /**
     * 查询一个事件总线的所有规则。
     */
    ListRules(query: ListRulesRequest): Promise<ListRulesResponse>;
    /**
     * 创建一个事件规则。
     */
    CreateRule(query: CreateRuleRequest): Promise<CreateRuleResponse>;
    /**
     * 查询事件内容。
     */
    QueryEvent(query: QueryEventRequest): Promise<QueryEventResponse>;
    /**
     * 删除一个事件规则。
     */
    DeleteRule(query: DeleteRuleRequest): Promise<DeleteRuleResponse>;
    /**
     * 获取一个事件规则的详细信息。
     */
    GetRule(query: GetRuleRequest): Promise<GetRuleResponse>;
    /**
     * 查询所有阿里云官方事件源。
     */
    ListAliyunOfficialEventSources(query: ListAliyunOfficialEventSourcesRequest): Promise<ListAliyunOfficialEventSourcesResponse>;
    /**
     * 查询所有外部事件源。
     */
    ListUserDefinedEventSources(query: ListUserDefinedEventSourcesRequest): Promise<ListUserDefinedEventSourcesResponse>;
    /**
     * 修改一个事件流的基础信息、事件源信息、事件过滤模式或事件目标信息。
     */
    UpdateEventStreaming(query: UpdateEventStreamingRequest): Promise<UpdateEventStreamingResponse>;
    /**
     * 创建一个事件流。
     */
    CreateEventStreaming(query: CreateEventStreamingRequest): Promise<CreateEventStreamingResponse>;
    /**
     * 查询单个连接配置信息。
     */
    GetConnection(query: GetConnectionRequest): Promise<GetConnectionResponse>;
    /**
     * 更新API 端点。
     */
    UpdateApiDestination(query: UpdateApiDestinationRequest): Promise<UpdateApiDestinationResponse>;
    /**
     * 删除API 端点。
     */
    DeleteApiDestination(query: DeleteApiDestinationRequest): Promise<DeleteApiDestinationResponse>;
    /**
     * 获取连接配置列表。
     */
    ListConnections(query: ListConnectionsRequest): Promise<ListConnectionsResponse>;
    /**
     * 更新连接配置信息。
     */
    UpdateConnection(query: UpdateConnectionRequest): Promise<UpdateConnectionResponse>;
    /**
     * 获取API 端点列表信息。
     */
    ListApiDestinations(query: ListApiDestinationsRequest): Promise<ListApiDestinationsResponse>;
    /**
     * 创建连接配置信息。
     */
    CreateConnection(query: CreateConnectionRequest): Promise<CreateConnectionResponse>;
    /**
     * 查询单个API 端点信息。
     */
    GetApiDestination(query: GetApiDestinationRequest): Promise<GetApiDestinationResponse>;
    /**
     * 删除指定的连接配置信息。
     */
    DeleteConnection(query: DeleteConnectionRequest): Promise<DeleteConnectionResponse>;
    /**
     * 创建API端点信息。
     */
    CreateApiDestination(query: CreateApiDestinationRequest): Promise<CreateApiDestinationResponse>;
    /**
     * 测试事件模式是否与提供的 JSON 格式事件匹配。
     */
    TestEventPattern(query: TestEventPatternRequest): Promise<TestEventPatternResponse>;
    /**
     * 查询事件流。
     */
    ListEventStreamings(query: ListEventStreamingsRequest): Promise<ListEventStreamingsResponse>;
    /**
     * 在指定的规则下创建或更新事件目标。
     */
    PutTargets(query: PutTargetsRequest): Promise<PutTargetsResponse>;
    /**
     * EventCenterCheckEnabledOnDefaultBus
     */
    EventCenterCheckEnabledOnDefaultBus(query: EventCenterCheckEnabledOnDefaultBusRequest): Promise<EventCenterCheckEnabledOnDefaultBusResponse>;
    /**
     * EventCenterDisableOnDefaultBus
     */
    EventCenterDisableOnDefaultBus(query: EventCenterDisableOnDefaultBusRequest): Promise<EventCenterDisableOnDefaultBusResponse>;
    /**
     * EventCenterEnableOnDefaultBus
     */
    EventCenterEnableOnDefaultBus(query: EventCenterEnableOnDefaultBusRequest): Promise<EventCenterEnableOnDefaultBusResponse>;
    /**
     * EventCenterQueryEvents
     */
    EventCenterQueryEvents(query: EventCenterQueryEventsRequest): Promise<EventCenterQueryEventsResponse>;
}
export default EVENTBRIDGE;
