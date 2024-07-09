import { CancelTaskRequest } from "./CancelTask/req";
import { CancelTaskResponse } from "./CancelTask/res";
import { CreateResourceRequest } from "./CreateResource/req";
import { CreateResourceResponse } from "./CreateResource/res";
import { DeleteResourceRequest } from "./DeleteResource/req";
import { DeleteResourceResponse } from "./DeleteResource/res";
import { GetPriceRequest } from "./GetPrice/req";
import { GetPriceResponse } from "./GetPrice/res";
import { GetResourcesRequest } from "./GetResources/req";
import { GetResourcesResponse } from "./GetResources/res";
import { GetResourceTypeRequest } from "./GetResourceType/req";
import { GetResourceTypeResponse } from "./GetResourceType/res";
import { GetTaskRequest } from "./GetTask/req";
import { GetTaskResponse } from "./GetTask/res";
import { ListDataSourcesRequest } from "./ListDataSources/req";
import { ListDataSourcesResponse } from "./ListDataSources/res";
import { ListProductsRequest } from "./ListProducts/req";
import { ListProductsResponse } from "./ListProducts/res";
import { ListResourceTypesRequest } from "./ListResourceTypes/req";
import { ListResourceTypesResponse } from "./ListResourceTypes/res";
import { UpdateResourceRequest } from "./UpdateResource/req";
import { UpdateResourceResponse } from "./UpdateResource/res";

interface CLOUDCONTROL {
    /**
     * 用户通过此接口取消指定任务详情。
     */
    CancelTask(query: CancelTaskRequest): Promise<CancelTaskResponse>;
    /**
     * 用户通过此接口创建资源。
     */
    CreateResource(query: CreateResourceRequest): Promise<CreateResourceResponse>;
    /**
     * 用户通过此接口删除资源。
     */
    DeleteResource(query: DeleteResourceRequest): Promise<DeleteResourceResponse>;
    /**
     * 该接口为询价接口，用户可通过此接口查询资源价格。
     */
    GetPrice(query: GetPriceRequest): Promise<GetPriceResponse>;
    /**
     * 用户通过此接口查询资源。
     */
    GetResources(query: GetResourcesRequest): Promise<GetResourcesResponse>;
    /**
     * 用户通过此接口查询指定的资源元数据详情。
     */
    GetResourceType(query: GetResourceTypeRequest): Promise<GetResourceTypeResponse>;
    /**
     * 用户通过此接口查询指定任务详情。
     */
    GetTask(query: GetTaskRequest): Promise<GetTaskResponse>;
    /**
     * 用户通过此接口查询资源属性可选值（RegionID、ZoneId等）。
     */
    ListDataSources(query: ListDataSourcesRequest): Promise<ListDataSourcesResponse>;
    /**
     * 用户通过此接口查询Cloud Control API支持的产品列表。
     */
    ListProducts(query: ListProductsRequest): Promise<ListProductsResponse>;
    /**
     * 用户通过此接口查询Cloud Control API支持的资源列表。
     */
    ListResourceTypes(query: ListResourceTypesRequest): Promise<ListResourceTypesResponse>;
    /**
     * 用户通过此接口更新资源。
     */
    UpdateResource(query: UpdateResourceRequest): Promise<UpdateResourceResponse>;
}
export default CLOUDCONTROL;
