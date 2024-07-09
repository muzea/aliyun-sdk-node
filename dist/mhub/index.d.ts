import { CreateAppRequest } from "./CreateApp/req";
import { CreateAppResponse } from "./CreateApp/res";
import { CreateProductRequest } from "./CreateProduct/req";
import { CreateProductResponse } from "./CreateProduct/res";
import { DeleteAppRequest } from "./DeleteApp/req";
import { DeleteAppResponse } from "./DeleteApp/res";
import { DeleteProductRequest } from "./DeleteProduct/req";
import { DeleteProductResponse } from "./DeleteProduct/res";
import { ListAppsRequest } from "./ListApps/req";
import { ListAppsResponse } from "./ListApps/res";
import { ListProductsRequest } from "./ListProducts/req";
import { ListProductsResponse } from "./ListProducts/res";
import { ModifyAppRequest } from "./ModifyApp/req";
import { ModifyAppResponse } from "./ModifyApp/res";
import { ModifyProductRequest } from "./ModifyProduct/req";
import { ModifyProductResponse } from "./ModifyProduct/res";
import { OpenEmasServiceRequest } from "./OpenEmasService/req";
import { OpenEmasServiceResponse } from "./OpenEmasService/res";
import { QueryAppInfoRequest } from "./QueryAppInfo/req";
import { QueryAppInfoResponse } from "./QueryAppInfo/res";
import { QueryAppSecurityInfoRequest } from "./QueryAppSecurityInfo/req";
import { QueryAppSecurityInfoResponse } from "./QueryAppSecurityInfo/res";
import { QueryProductInfoRequest } from "./QueryProductInfo/req";
import { QueryProductInfoResponse } from "./QueryProductInfo/res";
import { DescribeDashboardRequest } from "./DescribeDashboard/req";
import { DescribeDashboardResponse } from "./DescribeDashboard/res";

interface MHUB {
    /**
     * 调用此接口在指定空间内创建一个新应用。
     */
    CreateApp(query: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * 创建工作空间。工作空间是应用的分组，用于管理一组相关应用。
     */
    CreateProduct(query: CreateProductRequest): Promise<CreateProductResponse>;
    /**
     * 此接口用于删除应用。应用删除后不可恢复，如果删除已经对外发布的应用，可能会影响正常业务。删除前请确保已知晓此风险。
     */
    DeleteApp(query: DeleteAppRequest): Promise<DeleteAppResponse>;
    /**
     * 调用DeleteProduct删除工作空间。
     */
    DeleteProduct(query: DeleteProductRequest): Promise<DeleteProductResponse>;
    /**
     * 此ListApps接口用于查询指定工作空间下的应用列表。
     */
    ListApps(query: ListAppsRequest): Promise<ListAppsResponse>;
    /**
     * 调用ListProducts查询工作空间列表。
     */
    ListProducts(query: ListProductsRequest): Promise<ListProductsResponse>;
    /**
     * 此接口用于修改应用信息。
     */
    ModifyApp(query: ModifyAppRequest): Promise<ModifyAppResponse>;
    /**
     * 此接口用于修改工作空间基本信息。
     */
    ModifyProduct(query: ModifyProductRequest): Promise<ModifyProductResponse>;
    /**
     * 开通EMAS服务。只有开通服务后，才能进行产品使用。
     */
    OpenEmasService(query: OpenEmasServiceRequest): Promise<OpenEmasServiceResponse>;
    /**
     * 调用QueryAppInfo查询应用详情。
     */
    QueryAppInfo(query: QueryAppInfoRequest): Promise<QueryAppInfoResponse>;
    /**
     * 查询指定应用的AppSecret。AppSecret为秘钥信息，用于接口请求权限校验。
     */
    QueryAppSecurityInfo(query: QueryAppSecurityInfoRequest): Promise<QueryAppSecurityInfoResponse>;
    /**
     * 查询工作空间的详细信息。
     */
    QueryProductInfo(query: QueryProductInfoRequest): Promise<QueryProductInfoResponse>;
    /**
     * 获取应用在各服务下的看板信息
     */
    DescribeDashboard(query: DescribeDashboardRequest): Promise<DescribeDashboardResponse>;
}
export default MHUB;
