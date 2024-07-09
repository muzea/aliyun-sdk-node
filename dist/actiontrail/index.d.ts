import { CreateDeliveryHistoryJobRequest } from "./CreateDeliveryHistoryJob/req";
import { CreateDeliveryHistoryJobResponse } from "./CreateDeliveryHistoryJob/res";
import { DeleteDeliveryHistoryJobRequest } from "./DeleteDeliveryHistoryJob/req";
import { DeleteDeliveryHistoryJobResponse } from "./DeleteDeliveryHistoryJob/res";
import { ListDeliveryHistoryJobsRequest } from "./ListDeliveryHistoryJobs/req";
import { ListDeliveryHistoryJobsResponse } from "./ListDeliveryHistoryJobs/res";
import { LookupEventsRequest } from "./LookupEvents/req";
import { LookupEventsResponse } from "./LookupEvents/res";
import { CreateTrailRequest } from "./CreateTrail/req";
import { CreateTrailResponse } from "./CreateTrail/res";
import { DeleteTrailRequest } from "./DeleteTrail/req";
import { DeleteTrailResponse } from "./DeleteTrail/res";
import { StopLoggingRequest } from "./StopLogging/req";
import { StopLoggingResponse } from "./StopLogging/res";
import { UpdateTrailRequest } from "./UpdateTrail/req";
import { UpdateTrailResponse } from "./UpdateTrail/res";
import { DescribeTrailsRequest } from "./DescribeTrails/req";
import { DescribeTrailsResponse } from "./DescribeTrails/res";
import { StartLoggingRequest } from "./StartLogging/req";
import { StartLoggingResponse } from "./StartLogging/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { GetTrailStatusRequest } from "./GetTrailStatus/req";
import { GetTrailStatusResponse } from "./GetTrailStatus/res";
import { GetDeliveryHistoryJobRequest } from "./GetDeliveryHistoryJob/req";
import { GetDeliveryHistoryJobResponse } from "./GetDeliveryHistoryJob/res";
import { GetAccessKeyLastUsedProductsRequest } from "./GetAccessKeyLastUsedProducts/req";
import { GetAccessKeyLastUsedProductsResponse } from "./GetAccessKeyLastUsedProducts/res";
import { GetAccessKeyLastUsedInfoRequest } from "./GetAccessKeyLastUsedInfo/req";
import { GetAccessKeyLastUsedInfoResponse } from "./GetAccessKeyLastUsedInfo/res";
import { GetAccessKeyLastUsedResourcesRequest } from "./GetAccessKeyLastUsedResources/req";
import { GetAccessKeyLastUsedResourcesResponse } from "./GetAccessKeyLastUsedResources/res";
import { GetAccessKeyLastUsedEventsRequest } from "./GetAccessKeyLastUsedEvents/req";
import { GetAccessKeyLastUsedEventsResponse } from "./GetAccessKeyLastUsedEvents/res";
import { GetAccessKeyLastUsedIpsRequest } from "./GetAccessKeyLastUsedIps/req";
import { GetAccessKeyLastUsedIpsResponse } from "./GetAccessKeyLastUsedIps/res";
import { GetGlobalEventsStorageRegionRequest } from "./GetGlobalEventsStorageRegion/req";
import { GetGlobalEventsStorageRegionResponse } from "./GetGlobalEventsStorageRegion/res";
import { UpdateGlobalEventsStorageRegionRequest } from "./UpdateGlobalEventsStorageRegion/req";
import { UpdateGlobalEventsStorageRegionResponse } from "./UpdateGlobalEventsStorageRegion/res";
import { EnableInsightRequest } from "./EnableInsight/req";
import { EnableInsightResponse } from "./EnableInsight/res";

interface ACTIONTRAIL {
    /**
     * 创建数据回补投递任务。
     */
    CreateDeliveryHistoryJob(query: CreateDeliveryHistoryJobRequest): Promise<CreateDeliveryHistoryJobResponse>;
    /**
     * 删除数据回补投递任务。
     */
    DeleteDeliveryHistoryJob(query: DeleteDeliveryHistoryJobRequest): Promise<DeleteDeliveryHistoryJobResponse>;
    /**
     * 查询数据回补投递任务列表。
     */
    ListDeliveryHistoryJobs(query: ListDeliveryHistoryJobsRequest): Promise<ListDeliveryHistoryJobsResponse>;
    /**
     * 检索详细历史事件。
     */
    LookupEvents(query: LookupEventsRequest): Promise<LookupEventsResponse>;
    /**
     * 操作审计默认为每个阿里云账号记录最近90天的事件。为了能够追溯90天以前的事件，您可以创建跟踪，将操作事件投递到对象存储OSS、日志服务SLS或大数据计算服务MaxCompute，以便对事件进行分析。
     */
    CreateTrail(query: CreateTrailRequest): Promise<CreateTrailResponse>;
    /**
     * 删除操作审计跟踪。
     */
    DeleteTrail(query: DeleteTrailRequest): Promise<DeleteTrailResponse>;
    /**
     * 停止跟踪，停止将操作审计事件投递到 OSS 或 SLS。
     */
    StopLogging(query: StopLoggingRequest): Promise<StopLoggingResponse>;
    /**
     * 调整操作审计跟踪的配置信息。
     */
    UpdateTrail(query: UpdateTrailRequest): Promise<UpdateTrailResponse>;
    /**
     * 查看已创建的跟踪列表。
     */
    DescribeTrails(query: DescribeTrailsRequest): Promise<DescribeTrailsResponse>;
    /**
     * 启用跟踪，开始将操作审计事件投递到 OSS 或 SLS。
     */
    StartLogging(query: StartLoggingRequest): Promise<StartLoggingResponse>;
    /**
     * 查询操作审计支持的阿里云地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询跟踪的状态。
     */
    GetTrailStatus(query: GetTrailStatusRequest): Promise<GetTrailStatusResponse>;
    /**
     * 查询数据回补投递任务详情。
     */
    GetDeliveryHistoryJob(query: GetDeliveryHistoryJobRequest): Promise<GetDeliveryHistoryJobResponse>;
    /**
     * 查询指定AccessKey的最后使用的云服务记录。
     */
    GetAccessKeyLastUsedProducts(query: GetAccessKeyLastUsedProductsRequest): Promise<GetAccessKeyLastUsedProductsResponse>;
    /**
     * 查询指定AccessKey的最后使用记录。
     */
    GetAccessKeyLastUsedInfo(query: GetAccessKeyLastUsedInfoRequest): Promise<GetAccessKeyLastUsedInfoResponse>;
    /**
     * 查询指定AccessKey的最后使用的资源记录。
     */
    GetAccessKeyLastUsedResources(query: GetAccessKeyLastUsedResourcesRequest): Promise<GetAccessKeyLastUsedResourcesResponse>;
    /**
     * 查询指定AccessKey的最后使用的事件记录。
     */
    GetAccessKeyLastUsedEvents(query: GetAccessKeyLastUsedEventsRequest): Promise<GetAccessKeyLastUsedEventsResponse>;
    /**
     * 查询指定AccessKey的最后使用的IP记录。
     */
    GetAccessKeyLastUsedIps(query: GetAccessKeyLastUsedIpsRequest): Promise<GetAccessKeyLastUsedIpsResponse>;
    /**
     * 查询全局事件存储地域。
     */
    GetGlobalEventsStorageRegion(query: GetGlobalEventsStorageRegionRequest): Promise<GetGlobalEventsStorageRegionResponse>;
    /**
     * 设置全局事件存储地域。
     */
    UpdateGlobalEventsStorageRegion(query: UpdateGlobalEventsStorageRegionRequest): Promise<UpdateGlobalEventsStorageRegionResponse>;
    /**
     * 开启审计事件洞察。
     */
    EnableInsight(query: EnableInsightRequest): Promise<EnableInsightResponse>;
}
export default ACTIONTRAIL;
