import { AddDomainRequest } from "./AddDomain/req";
import { AddDomainResponse } from "./AddDomain/res";
import { DeleteDomainRequest } from "./DeleteDomain/req";
import { DeleteDomainResponse } from "./DeleteDomain/res";
import { DescribeDomainsRequest } from "./DescribeDomains/req";
import { DescribeDomainsResponse } from "./DescribeDomains/res";
import { GetAccountInfoRequest } from "./GetAccountInfo/req";
import { GetAccountInfoResponse } from "./GetAccountInfo/res";
import { GetResolveCountSummaryRequest } from "./GetResolveCountSummary/req";
import { GetResolveCountSummaryResponse } from "./GetResolveCountSummary/res";
import { GetResolveStatisticsRequest } from "./GetResolveStatistics/req";
import { GetResolveStatisticsResponse } from "./GetResolveStatistics/res";
import { ListDomainsRequest } from "./ListDomains/req";
import { ListDomainsResponse } from "./ListDomains/res";

interface HTTPDNS {
    /**
     * 根据传入参数添加域名。
     */
    AddDomain(query: AddDomainRequest): Promise<AddDomainResponse>;
    /**
     * 根据传入参数删除域名。
     */
    DeleteDomain(query: DeleteDomainRequest): Promise<DeleteDomainResponse>;
    /**
     * 根据传入参数列出用户的域名。
     */
    DescribeDomains(query: DescribeDomainsRequest): Promise<DescribeDomainsResponse>;
    /**
     * 获取当前HTTPDNS账户信息。
     */
    GetAccountInfo(query: GetAccountInfoRequest): Promise<GetAccountInfoResponse>;
    /**
     * 获取解析及计费统计信息，对应控制台中“计费相关”的页面功能。
     */
    GetResolveCountSummary(query: GetResolveCountSummaryRequest): Promise<GetResolveCountSummaryResponse>;
    /**
     * 获取某个域名解析请求的统计信息。
     */
    GetResolveStatistics(query: GetResolveStatisticsRequest): Promise<GetResolveStatisticsResponse>;
    /**
     * 根据传入参数列出用户的域名及解析次数。
     */
    ListDomains(query: ListDomainsRequest): Promise<ListDomainsResponse>;
}
export default HTTPDNS;
