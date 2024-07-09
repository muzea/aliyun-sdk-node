import { GetTagValRequest } from "./GetTagVal/req";
import { GetTagValResponse } from "./GetTagVal/res";
import { GetTagKeyRequest } from "./GetTagKey/req";
import { GetTagKeyResponse } from "./GetTagKey/res";
import { GetTraceRequest } from "./GetTrace/req";
import { GetTraceResponse } from "./GetTrace/res";
import { ListIpOrHostsRequest } from "./ListIpOrHosts/req";
import { ListIpOrHostsResponse } from "./ListIpOrHosts/res";
import { OpenXtraceServiceRequest } from "./OpenXtraceService/req";
import { OpenXtraceServiceResponse } from "./OpenXtraceService/res";
import { ListServicesRequest } from "./ListServices/req";
import { ListServicesResponse } from "./ListServices/res";
import { ListSpanNamesRequest } from "./ListSpanNames/req";
import { ListSpanNamesResponse } from "./ListSpanNames/res";
import { QueryMetricRequest } from "./QueryMetric/req";
import { QueryMetricResponse } from "./QueryMetric/res";
import { SearchTracesRequest } from "./SearchTraces/req";
import { SearchTracesResponse } from "./SearchTraces/res";
import { CheckCommercialStatusRequest } from "./CheckCommercialStatus/req";
import { CheckCommercialStatusResponse } from "./CheckCommercialStatus/res";

interface XTRACE {
    /**
     * 获取上报的链路数据中指定Tag Key对应的Tag Value。
     */
    GetTagVal(query: GetTagValRequest): Promise<GetTagValResponse>;
    /**
     * 调用GetTagKey接口获取标签键。
     */
    GetTagKey(query: GetTagKeyRequest): Promise<GetTagKeyResponse>;
    /**
     * 调用GetTrace接口获取调用链路详情。
     */
    GetTrace(query: GetTraceRequest): Promise<GetTraceResponse>;
    /**
     * 获取链路数据中的IP地址或者机器名称，可获取整个地域或某个应用下的所有IP地址。
     */
    ListIpOrHosts(query: ListIpOrHostsRequest): Promise<ListIpOrHostsResponse>;
    /**
     * 开通可观测链路 OpenTelemetry 版。
     */
    OpenXtraceService(query: OpenXtraceServiceRequest): Promise<OpenXtraceServiceResponse>;
    /**
     * 调用ListServices获取应用列表。
     */
    ListServices(query: ListServicesRequest): Promise<ListServicesResponse>;
    /**
     * 获取指定地域下所有的Span名称，也可获取某个微服务的所有Span名称。
     */
    ListSpanNames(query: ListSpanNamesRequest): Promise<ListSpanNamesResponse>;
    /**
     * 调用QueryMetric查询相关监控指标。
     */
    QueryMetric(query: QueryMetricRequest): Promise<QueryMetricResponse>;
    /**
     * 调用SearchTraces查询调用链列表，可根据时间、应用名称、IP地址、Span名称、Tag等信息对调用链进行过滤查询。
     */
    SearchTraces(query: SearchTracesRequest): Promise<SearchTracesResponse>;
    /**
     * 检查商业化状态。
     */
    CheckCommercialStatus(query: CheckCommercialStatusRequest): Promise<CheckCommercialStatusResponse>;
}
export default XTRACE;
