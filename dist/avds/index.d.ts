import { DescribeDomainsRequest } from "./DescribeDomains/req";
import { DescribeDomainsResponse } from "./DescribeDomains/res";
import { AddAssetTagsRequest } from "./AddAssetTags/req";
import { AddAssetTagsResponse } from "./AddAssetTags/res";
import { AddAssetsRequest } from "./AddAssets/req";
import { AddAssetsResponse } from "./AddAssets/res";
import { DescribePortsRequest } from "./DescribePorts/req";
import { DescribePortsResponse } from "./DescribePorts/res";
import { DeleteAssetsRequest } from "./DeleteAssets/req";
import { DeleteAssetsResponse } from "./DeleteAssets/res";
import { CreateScanRequest } from "./CreateScan/req";
import { CreateScanResponse } from "./CreateScan/res";
import { DescribeAllVulnerabilitiesRequest } from "./DescribeAllVulnerabilities/req";
import { DescribeAllVulnerabilitiesResponse } from "./DescribeAllVulnerabilities/res";
import { DescribeWebTechsRequest } from "./DescribeWebTechs/req";
import { DescribeWebTechsResponse } from "./DescribeWebTechs/res";
import { DescribeAssetsRequest } from "./DescribeAssets/req";
import { DescribeAssetsResponse } from "./DescribeAssets/res";
import { DescribeDNSMapRequest } from "./DescribeDNSMap/req";
import { DescribeDNSMapResponse } from "./DescribeDNSMap/res";
import { DescribeVulnerabilityRequest } from "./DescribeVulnerability/req";
import { DescribeVulnerabilityResponse } from "./DescribeVulnerability/res";
import { DescribeUserTagsRequest } from "./DescribeUserTags/req";
import { DescribeUserTagsResponse } from "./DescribeUserTags/res";
import { DescribeWebPathsRequest } from "./DescribeWebPaths/req";
import { DescribeWebPathsResponse } from "./DescribeWebPaths/res";
import { DescribeHostsRequest } from "./DescribeHosts/req";
import { DescribeHostsResponse } from "./DescribeHosts/res";
import { DescribeAttackSurfacesFacetsRequest } from "./DescribeAttackSurfacesFacets/req";
import { DescribeAttackSurfacesFacetsResponse } from "./DescribeAttackSurfacesFacets/res";
import { DescribeDomainAttackSurfacesFacetsRequest } from "./DescribeDomainAttackSurfacesFacets/req";
import { DescribeDomainAttackSurfacesFacetsResponse } from "./DescribeDomainAttackSurfacesFacets/res";
import { GenerateVulReportRequest } from "./GenerateVulReport/req";
import { GenerateVulReportResponse } from "./GenerateVulReport/res";
import { DescribeSubdomainsRequest } from "./DescribeSubdomains/req";
import { DescribeSubdomainsResponse } from "./DescribeSubdomains/res";
import { DescribeWebServersRequest } from "./DescribeWebServers/req";
import { DescribeWebServersResponse } from "./DescribeWebServers/res";
import { DescribeCrawlerRequestsRequest } from "./DescribeCrawlerRequests/req";
import { DescribeCrawlerRequestsResponse } from "./DescribeCrawlerRequests/res";
import { DescribeHostAttackSurfacesFacetsRequest } from "./DescribeHostAttackSurfacesFacets/req";
import { DescribeHostAttackSurfacesFacetsResponse } from "./DescribeHostAttackSurfacesFacets/res";
import { DescribeScansRequest } from "./DescribeScans/req";
import { DescribeScansResponse } from "./DescribeScans/res";
import { DeleteScansRequest } from "./DeleteScans/req";
import { DeleteScansResponse } from "./DeleteScans/res";
import { DescribeCountRequest } from "./DescribeCount/req";
import { DescribeCountResponse } from "./DescribeCount/res";
import { DescribeVulnerabilityStatusViewRequest } from "./DescribeVulnerabilityStatusView/req";
import { DescribeVulnerabilityStatusViewResponse } from "./DescribeVulnerabilityStatusView/res";
import { DescribeVulnerabilityViewRequest } from "./DescribeVulnerabilityView/req";
import { DescribeVulnerabilityViewResponse } from "./DescribeVulnerabilityView/res";

interface AVDS {
    /**
    * 调用DescribeDomains接口，查询任务实例对应攻击面数据项中的域名信息。
    */ DescribeDomains(query: DescribeDomainsRequest): Promise<DescribeDomainsResponse>;
    /**
    * 调用本接口为资产添加标签。
    */ AddAssetTags(query: AddAssetTagsRequest): Promise<AddAssetTagsResponse>;
    /**
    * 调用本接口添加用户资产。
    */ AddAssets(query: AddAssetsRequest): Promise<AddAssetsResponse>;
    /**
    * 调用DescribePorts接口，查询任务实例对应攻击面数据项中的端口服务信息。
    */ DescribePorts(query: DescribePortsRequest): Promise<DescribePortsResponse>;
    /**
    * 调用本接口删除用户资产。
    */ DeleteAssets(query: DeleteAssetsRequest): Promise<DeleteAssetsResponse>;
    /**
    * 调用本接口创建扫描任务。
    */ CreateScan(query: CreateScanRequest): Promise<CreateScanResponse>;
    /**
    * 调用本接口获取扫描任务结果，包含检测出的漏洞数量和漏洞严重等级分布。
    */ DescribeAllVulnerabilities(query: DescribeAllVulnerabilitiesRequest): Promise<DescribeAllVulnerabilitiesResponse>;
    /**
    * 调用DescribeWebTechs接口，查询任务实例对应攻击面数据项中的Web应用信息。
    */ DescribeWebTechs(query: DescribeWebTechsRequest): Promise<DescribeWebTechsResponse>;
    /**
    * 调用本接口查询资产列表。
    */ DescribeAssets(query: DescribeAssetsRequest): Promise<DescribeAssetsResponse>;
    /**
    * 调用DescribeDNSMap接口，查询任务实例对应攻击面数据项中的DNS解析记录信息。
    */ DescribeDNSMap(query: DescribeDNSMapRequest): Promise<DescribeDNSMapResponse>;
    /**
    * 调用本接口获取漏洞详情。
    */ DescribeVulnerability(query: DescribeVulnerabilityRequest): Promise<DescribeVulnerabilityResponse>;
    /**
    * 调用本接口查询用户所有标签列表。
    */ DescribeUserTags(query: DescribeUserTagsRequest): Promise<DescribeUserTagsResponse>;
    /**
    * 调用DescribeWebPaths接口，查询任务实例对应攻击面数据项中的Web路径信息。
    */ DescribeWebPaths(query: DescribeWebPathsRequest): Promise<DescribeWebPathsResponse>;
    /**
    * 调用DescribeHosts接口，查询任务实例对应攻击面数据项中的主机列表信息。
    */ DescribeHosts(query: DescribeHostsRequest): Promise<DescribeHostsResponse>;
    /**
    * 调用DescribeAttackSurfacesFacets查询任务实例攻击面数据统计信息。
    */ DescribeAttackSurfacesFacets(query: DescribeAttackSurfacesFacetsRequest): Promise<DescribeAttackSurfacesFacetsResponse>;
    /**
    * 调用DescribeDomainAttackSurfacesFacets接口，查询任务实例对应攻击面数据项中的域名攻击面统计信息。
    */ DescribeDomainAttackSurfacesFacets(query: DescribeDomainAttackSurfacesFacetsRequest): Promise<DescribeDomainAttackSurfacesFacetsResponse>;
    /**
    * 调用本接口生成任务实例报表。
    */ GenerateVulReport(query: GenerateVulReportRequest): Promise<GenerateVulReportResponse>;
    /**
    * 调用DescribeSubdomains接口，查询任务实例对应攻击面数据项中的子域名信息。
    */ DescribeSubdomains(query: DescribeSubdomainsRequest): Promise<DescribeSubdomainsResponse>;
    /**
    * 调用DescribeWebServers接口，查询任务实例对应攻击面数据项中的Web服务器信息。
    */ DescribeWebServers(query: DescribeWebServersRequest): Promise<DescribeWebServersResponse>;
    /**
    * 调用DescribeCrawlerRequests接口，查询任务实例对应攻击面数据项中的爬虫流量信息。
    */ DescribeCrawlerRequests(query: DescribeCrawlerRequestsRequest): Promise<DescribeCrawlerRequestsResponse>;
    /**
    * 调用DescribeHostAttackSurfacesFacets接口，查询任务实例对应攻击面数据项中的主机攻击面统计信息。
    */ DescribeHostAttackSurfacesFacets(query: DescribeHostAttackSurfacesFacetsRequest): Promise<DescribeHostAttackSurfacesFacetsResponse>;
    /**
    * 调用本接口获取扫描任务列表。
    */ DescribeScans(query: DescribeScansRequest): Promise<DescribeScansResponse>;
    DeleteScans(query: DeleteScansRequest): Promise<DeleteScansResponse>;
    DescribeCount(query: DescribeCountRequest): Promise<DescribeCountResponse>;
    DescribeVulnerabilityStatusView(query: DescribeVulnerabilityStatusViewRequest): Promise<DescribeVulnerabilityStatusViewResponse>;
    DescribeVulnerabilityView(query: DescribeVulnerabilityViewRequest): Promise<DescribeVulnerabilityViewResponse>;
}
export default AVDS;
