import { DescribeAdvicesRequest } from "./DescribeAdvices/req";
import { DescribeAdvicesResponse } from "./DescribeAdvices/res";
import { DescribeAdvisorChecksRequest } from "./DescribeAdvisorChecks/req";
import { DescribeAdvisorChecksResponse } from "./DescribeAdvisorChecks/res";
import { DescribeAdvisorResourcesRequest } from "./DescribeAdvisorResources/req";
import { DescribeAdvisorResourcesResponse } from "./DescribeAdvisorResources/res";
import { RefreshAdvisorCheckRequest } from "./RefreshAdvisorCheck/req";
import { RefreshAdvisorCheckResponse } from "./RefreshAdvisorCheck/res";
import { RefreshAdvisorResourceRequest } from "./RefreshAdvisorResource/req";
import { RefreshAdvisorResourceResponse } from "./RefreshAdvisorResource/res";
import { GetTaskStatusByIdRequest } from "./GetTaskStatusById/req";
import { GetTaskStatusByIdResponse } from "./GetTaskStatusById/res";
import { DescribeAdvicesPageRequest } from "./DescribeAdvicesPage/req";
import { DescribeAdvicesPageResponse } from "./DescribeAdvicesPage/res";
import { GetHistoryAdvicesRequest } from "./GetHistoryAdvices/req";
import { GetHistoryAdvicesResponse } from "./GetHistoryAdvices/res";
import { DescribeAdvicesFlatPageRequest } from "./DescribeAdvicesFlatPage/req";
import { DescribeAdvicesFlatPageResponse } from "./DescribeAdvicesFlatPage/res";

interface ADVISOR {
    /**
     * 可根据多个维度获取用户最新的巡检结果，全量返回。
     */
    DescribeAdvices(query: DescribeAdvicesRequest): Promise<DescribeAdvicesResponse>;
    /**
     * 获取用户当前可用的巡检项。
     */
    DescribeAdvisorChecks(query: DescribeAdvisorChecksRequest): Promise<DescribeAdvisorChecksResponse>;
    /**
     * 拉取巡检资源列表（需要在触发资源信息同步后才能获取最新结果）。
     */
    DescribeAdvisorResources(query: DescribeAdvisorResourcesRequest): Promise<DescribeAdvisorResourcesResponse>;
    /**
     * 刷新诊断项，触发该巡检项的资源指标同步并重新巡检。
     * 该API会按照输入的多个维度（云产品、云资源、诊断项名称）创建巡检任务，都为空则默认按照该用户下所有资源为所有诊断项创建巡检任务。
     */
    RefreshAdvisorCheck(query: RefreshAdvisorCheckRequest): Promise<RefreshAdvisorCheckResponse>;
    /**
     * 根据具体的产品+资源ID，触发资源信息同步任务，返回创建的任务ID。
     */
    RefreshAdvisorResource(query: RefreshAdvisorResourceRequest): Promise<RefreshAdvisorResourceResponse>;
    /**
     * 根据任务ID查询任务执行状态。
     */
    GetTaskStatusById(query: GetTaskStatusByIdRequest): Promise<GetTaskStatusByIdResponse>;
    /**
     * 可根据多个维度获取用户最新的巡检结果，分页返回。
     */
    DescribeAdvicesPage(query: DescribeAdvicesPageRequest): Promise<DescribeAdvicesPageResponse>;
    /**
     * 分页获取历史巡检结果，按产品、日期、严重级别查询。
     */
    GetHistoryAdvices(query: GetHistoryAdvicesRequest): Promise<GetHistoryAdvicesResponse>;
    /**
     * 可根据多个维度获取用户最新的巡检结果，分页返回（部分字段展平）。
     */
    DescribeAdvicesFlatPage(query: DescribeAdvicesFlatPageRequest): Promise<DescribeAdvicesFlatPageResponse>;
}
export default ADVISOR;
