import { GetResourceCenterServiceStatusRequest } from "./GetResourceCenterServiceStatus/req";
import { GetResourceCenterServiceStatusResponse } from "./GetResourceCenterServiceStatus/res";
import { GetMultiAccountResourceConfigurationRequest } from "./GetMultiAccountResourceConfiguration/req";
import { GetMultiAccountResourceConfigurationResponse } from "./GetMultiAccountResourceConfiguration/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { DisableResourceCenterRequest } from "./DisableResourceCenter/req";
import { DisableResourceCenterResponse } from "./DisableResourceCenter/res";
import { DisableMultiAccountResourceCenterRequest } from "./DisableMultiAccountResourceCenter/req";
import { DisableMultiAccountResourceCenterResponse } from "./DisableMultiAccountResourceCenter/res";
import { ListMultiAccountResourceGroupsRequest } from "./ListMultiAccountResourceGroups/req";
import { ListMultiAccountResourceGroupsResponse } from "./ListMultiAccountResourceGroups/res";
import { ListMultiAccountTagKeysRequest } from "./ListMultiAccountTagKeys/req";
import { ListMultiAccountTagKeysResponse } from "./ListMultiAccountTagKeys/res";
import { ListMultiAccountTagValuesRequest } from "./ListMultiAccountTagValues/req";
import { ListMultiAccountTagValuesResponse } from "./ListMultiAccountTagValues/res";
import { SearchMultiAccountResourcesRequest } from "./SearchMultiAccountResources/req";
import { SearchMultiAccountResourcesResponse } from "./SearchMultiAccountResources/res";
import { ListResourceTypesRequest } from "./ListResourceTypes/req";
import { ListResourceTypesResponse } from "./ListResourceTypes/res";
import { GetMultiAccountResourceCenterServiceStatusRequest } from "./GetMultiAccountResourceCenterServiceStatus/req";
import { GetMultiAccountResourceCenterServiceStatusResponse } from "./GetMultiAccountResourceCenterServiceStatus/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { EnableMultiAccountResourceCenterRequest } from "./EnableMultiAccountResourceCenter/req";
import { EnableMultiAccountResourceCenterResponse } from "./EnableMultiAccountResourceCenter/res";
import { EnableResourceCenterRequest } from "./EnableResourceCenter/req";
import { EnableResourceCenterResponse } from "./EnableResourceCenter/res";
import { DisassociateDefaultFilterRequest } from "./DisassociateDefaultFilter/req";
import { DisassociateDefaultFilterResponse } from "./DisassociateDefaultFilter/res";
import { GetResourceConfigurationRequest } from "./GetResourceConfiguration/req";
import { GetResourceConfigurationResponse } from "./GetResourceConfiguration/res";
import { AssociateDefaultFilterRequest } from "./AssociateDefaultFilter/req";
import { AssociateDefaultFilterResponse } from "./AssociateDefaultFilter/res";
import { DeleteFilterRequest } from "./DeleteFilter/req";
import { DeleteFilterResponse } from "./DeleteFilter/res";
import { SearchResourcesRequest } from "./SearchResources/req";
import { SearchResourcesResponse } from "./SearchResources/res";
import { ListFiltersRequest } from "./ListFilters/req";
import { ListFiltersResponse } from "./ListFilters/res";
import { CreateFilterRequest } from "./CreateFilter/req";
import { CreateFilterResponse } from "./CreateFilter/res";
import { UpdateFilterRequest } from "./UpdateFilter/req";
import { UpdateFilterResponse } from "./UpdateFilter/res";
import { GetResourceCountsRequest } from "./GetResourceCounts/req";
import { GetResourceCountsResponse } from "./GetResourceCounts/res";
import { ListExampleQueriesRequest } from "./ListExampleQueries/req";
import { ListExampleQueriesResponse } from "./ListExampleQueries/res";
import { GetExampleQueryRequest } from "./GetExampleQuery/req";
import { GetExampleQueryResponse } from "./GetExampleQuery/res";
import { GetSavedQueryRequest } from "./GetSavedQuery/req";
import { GetSavedQueryResponse } from "./GetSavedQuery/res";
import { UpdateSavedQueryRequest } from "./UpdateSavedQuery/req";
import { UpdateSavedQueryResponse } from "./UpdateSavedQuery/res";
import { ListSavedQueriesRequest } from "./ListSavedQueries/req";
import { ListSavedQueriesResponse } from "./ListSavedQueries/res";
import { CreateSavedQueryRequest } from "./CreateSavedQuery/req";
import { CreateSavedQueryResponse } from "./CreateSavedQuery/res";
import { DeleteSavedQueryRequest } from "./DeleteSavedQuery/req";
import { DeleteSavedQueryResponse } from "./DeleteSavedQuery/res";
import { ExecuteMultiAccountSQLQueryRequest } from "./ExecuteMultiAccountSQLQuery/req";
import { ExecuteMultiAccountSQLQueryResponse } from "./ExecuteMultiAccountSQLQuery/res";
import { ExecuteSQLQueryRequest } from "./ExecuteSQLQuery/req";
import { ExecuteSQLQueryResponse } from "./ExecuteSQLQuery/res";

interface RESOURCECENTER {
    /**
     * 查询资源中心服务状态。
     */
    GetResourceCenterServiceStatus(query: GetResourceCenterServiceStatusRequest): Promise<GetResourceCenterServiceStatusResponse>;
    /**
     * 查询资源目录管理账号或成员的资源配置。
     */
    GetMultiAccountResourceConfiguration(query: GetMultiAccountResourceConfigurationRequest): Promise<GetMultiAccountResourceConfigurationResponse>;
    /**
     * 查询当前账号下的标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 关闭资源中心。
     */
    DisableResourceCenter(query: DisableResourceCenterRequest): Promise<DisableResourceCenterResponse>;
    /**
     * 关闭跨账号资源搜索。
     */
    DisableMultiAccountResourceCenter(query: DisableMultiAccountResourceCenterRequest): Promise<DisableMultiAccountResourceCenterResponse>;
    /**
     * 查询资源目录管理账号或成员的资源组。
     */
    ListMultiAccountResourceGroups(query: ListMultiAccountResourceGroupsRequest): Promise<ListMultiAccountResourceGroupsResponse>;
    /**
     * 查询资源目录管理账号或成员中的标签键。
     */
    ListMultiAccountTagKeys(query: ListMultiAccountTagKeysRequest): Promise<ListMultiAccountTagKeysResponse>;
    /**
     * 查询资源目录管理账号或成员中的标签值。
     */
    ListMultiAccountTagValues(query: ListMultiAccountTagValuesRequest): Promise<ListMultiAccountTagValuesResponse>;
    /**
     * 搜索资源目录管理账号和多个成员中的资源。
     */
    SearchMultiAccountResources(query: SearchMultiAccountResourcesRequest): Promise<SearchMultiAccountResourcesResponse>;
    /**
     * 查询资源中心支持的资源类型。
     */
    ListResourceTypes(query: ListResourceTypesRequest): Promise<ListResourceTypesResponse>;
    /**
     * 查询跨账号资源搜索开通状态。
     */
    GetMultiAccountResourceCenterServiceStatus(query: GetMultiAccountResourceCenterServiceStatusRequest): Promise<GetMultiAccountResourceCenterServiceStatusResponse>;
    /**
     * 查询当前账号下的标签键。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 开通跨账号资源搜索。
     */
    EnableMultiAccountResourceCenter(query: EnableMultiAccountResourceCenterRequest): Promise<EnableMultiAccountResourceCenterResponse>;
    /**
     * 开通资源中心。
     */
    EnableResourceCenter(query: EnableResourceCenterRequest): Promise<EnableResourceCenterResponse>;
    /**
     * 取消默认筛选条件。
     */
    DisassociateDefaultFilter(query: DisassociateDefaultFilterRequest): Promise<DisassociateDefaultFilterResponse>;
    /**
     * 查询当前账号的资源配置。
     */
    GetResourceConfiguration(query: GetResourceConfigurationRequest): Promise<GetResourceConfigurationResponse>;
    /**
     * 设置默认筛选条件。
     */
    AssociateDefaultFilter(query: AssociateDefaultFilterRequest): Promise<AssociateDefaultFilterResponse>;
    /**
     * 删除筛选条件。
     */
    DeleteFilter(query: DeleteFilterRequest): Promise<DeleteFilterResponse>;
    /**
     * 搜索当前账号下有权限访问的资源。
     */
    SearchResources(query: SearchResourcesRequest): Promise<SearchResourcesResponse>;
    /**
     * 获取筛选条件列表。
     */
    ListFilters(query: ListFiltersRequest): Promise<ListFiltersResponse>;
    /**
     * 创建筛选条件。
     */
    CreateFilter(query: CreateFilterRequest): Promise<CreateFilterResponse>;
    /**
     * 更新筛选条件。
     */
    UpdateFilter(query: UpdateFilterRequest): Promise<UpdateFilterResponse>;
    /**
     * 查询当前账号下有权限访问的资源数量。
     */
    GetResourceCounts(query: GetResourceCountsRequest): Promise<GetResourceCountsResponse>;
    /**
     * 列出所有的系统查询模板。
     */
    ListExampleQueries(query: ListExampleQueriesRequest): Promise<ListExampleQueriesResponse>;
    /**
     * 获取系统查询模板。
     */
    GetExampleQuery(query: GetExampleQueryRequest): Promise<GetExampleQueryResponse>;
    /**
     * 获取自定义查询模板。
     */
    GetSavedQuery(query: GetSavedQueryRequest): Promise<GetSavedQueryResponse>;
    /**
     * 更新自定义查询模板。
     */
    UpdateSavedQuery(query: UpdateSavedQueryRequest): Promise<UpdateSavedQueryResponse>;
    /**
     * 列出所有的自定义查询模板。
     */
    ListSavedQueries(query: ListSavedQueriesRequest): Promise<ListSavedQueriesResponse>;
    /**
     * 创建自定义查询模板。
     */
    CreateSavedQuery(query: CreateSavedQueryRequest): Promise<CreateSavedQueryResponse>;
    /**
     * 删除自定义查询模板。
     */
    DeleteSavedQuery(query: DeleteSavedQueryRequest): Promise<DeleteSavedQueryResponse>;
    /**
     * 使用SQL查询跨账号的资源。
     */
    ExecuteMultiAccountSQLQuery(query: ExecuteMultiAccountSQLQueryRequest): Promise<ExecuteMultiAccountSQLQueryResponse>;
    /**
     * 使用SQL查询当前账号下有权限访问的资源。
     */
    ExecuteSQLQuery(query: ExecuteSQLQueryRequest): Promise<ExecuteSQLQueryResponse>;
}
export default RESOURCECENTER;
