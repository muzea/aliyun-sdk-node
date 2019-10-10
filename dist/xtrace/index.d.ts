import { GetTagKeyRequest } from "./GetTagKey/req";
import { GetTagKeyResponse } from "./GetTagKey/res";
import { GetTagValRequest } from "./GetTagVal/req";
import { GetTagValResponse } from "./GetTagVal/res";
import { GetTokenRequest } from "./GetToken/req";
import { GetTokenResponse } from "./GetToken/res";
import { GetTraceRequest } from "./GetTrace/req";
import { GetTraceResponse } from "./GetTrace/res";
import { ListIpOrHostsRequest } from "./ListIpOrHosts/req";
import { ListIpOrHostsResponse } from "./ListIpOrHosts/res";
import { ListServicesRequest } from "./ListServices/req";
import { ListServicesResponse } from "./ListServices/res";
import { ListSpanNamesRequest } from "./ListSpanNames/req";
import { ListSpanNamesResponse } from "./ListSpanNames/res";
import { SearchTracesRequest } from "./SearchTraces/req";
import { SearchTracesResponse } from "./SearchTraces/res";

interface XTRACE {
    GetTagKey(query: GetTagKeyRequest): Promise<GetTagKeyResponse>;
    GetTagVal(query: GetTagValRequest): Promise<GetTagValResponse>;
    GetToken(query: GetTokenRequest): Promise<GetTokenResponse>;
    GetTrace(query: GetTraceRequest): Promise<GetTraceResponse>;
    ListIpOrHosts(query: ListIpOrHostsRequest): Promise<ListIpOrHostsResponse>;
    ListServices(query: ListServicesRequest): Promise<ListServicesResponse>;
    ListSpanNames(query: ListSpanNamesRequest): Promise<ListSpanNamesResponse>;
    SearchTraces(query: SearchTracesRequest): Promise<SearchTracesResponse>;
}
export default XTRACE;
