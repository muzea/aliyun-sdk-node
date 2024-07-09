import { CreateImageOrderRequest } from "./CreateImageOrder/req";
import { CreateImageOrderResponse } from "./CreateImageOrder/res";
import { CreateInventoryLockRequest } from "./CreateInventoryLock/req";
import { CreateInventoryLockResponse } from "./CreateInventoryLock/res";
import { DeleteUserCollectionRequest } from "./DeleteUserCollection/req";
import { DeleteUserCollectionResponse } from "./DeleteUserCollection/res";
import { DescribeDownloadImageInfoRequest } from "./DescribeDownloadImageInfo/req";
import { DescribeDownloadImageInfoResponse } from "./DescribeDownloadImageInfo/res";
import { DescribeIndustryListRequest } from "./DescribeIndustryList/req";
import { DescribeIndustryListResponse } from "./DescribeIndustryList/res";
import { DescribeLogoRequest } from "./DescribeLogo/req";
import { DescribeLogoResponse } from "./DescribeLogo/res";
import { DescribeUserProduceRequest } from "./DescribeUserProduce/req";
import { DescribeUserProduceResponse } from "./DescribeUserProduce/res";
import { GetLogoFontListRequest } from "./GetLogoFontList/req";
import { GetLogoFontListResponse } from "./GetLogoFontList/res";
import { GetProduceInfoRequest } from "./GetProduceInfo/req";
import { GetProduceInfoResponse } from "./GetProduceInfo/res";
import { GetTextLogoListRequest } from "./GetTextLogoList/req";
import { GetTextLogoListResponse } from "./GetTextLogoList/res";
import { ListDesignRequest } from "./ListDesign/req";
import { ListDesignResponse } from "./ListDesign/res";
import { ListLogoSamplesRequest } from "./ListLogoSamples/req";
import { ListLogoSamplesResponse } from "./ListLogoSamples/res";
import { ListUserProduceOperateLogsRequest } from "./ListUserProduceOperateLogs/req";
import { ListUserProduceOperateLogsResponse } from "./ListUserProduceOperateLogs/res";
import { ListUserCollectionsRequest } from "./ListUserCollections/req";
import { ListUserCollectionsResponse } from "./ListUserCollections/res";
import { OperateProduceForUserRequest } from "./OperateProduceForUser/req";
import { OperateProduceForUserResponse } from "./OperateProduceForUser/res";
import { QueryBarrelImageListRequest } from "./QueryBarrelImageList/req";
import { QueryBarrelImageListResponse } from "./QueryBarrelImageList/res";
import { GetTemplateCategoriesRequest } from "./GetTemplateCategories/req";
import { GetTemplateCategoriesResponse } from "./GetTemplateCategories/res";
import { QueryConfigurationOrderRequest } from "./QueryConfigurationOrder/req";
import { QueryConfigurationOrderResponse } from "./QueryConfigurationOrder/res";
import { CreateConfigurationOrderRequest } from "./CreateConfigurationOrder/req";
import { CreateConfigurationOrderResponse } from "./CreateConfigurationOrder/res";

interface PREMIUMPICS {
    /**
     * 创建图片订单
     */
    CreateImageOrder(query: CreateImageOrderRequest): Promise<CreateImageOrderResponse>;
    /**
     * 创建锁
     */
    CreateInventoryLock(query: CreateInventoryLockRequest): Promise<CreateInventoryLockResponse>;
    /**
     * 删除收藏
     */
    DeleteUserCollection(query: DeleteUserCollectionRequest): Promise<DeleteUserCollectionResponse>;
    /**
     * 描述下载图片信息
     */
    DescribeDownloadImageInfo(query: DescribeDownloadImageInfoRequest): Promise<DescribeDownloadImageInfoResponse>;
    /**
     * 描述行业列表
     */
    DescribeIndustryList(query: DescribeIndustryListRequest): Promise<DescribeIndustryListResponse>;
    /**
     * 描述logo
     */
    DescribeLogo(query: DescribeLogoRequest): Promise<DescribeLogoResponse>;
    /**
     * 描述用户产品
     */
    DescribeUserProduce(query: DescribeUserProduceRequest): Promise<DescribeUserProduceResponse>;
    /**
     * 字体logo列表
     */
    GetLogoFontList(query: GetLogoFontListRequest): Promise<GetLogoFontListResponse>;
    /**
     * 产品信息
     */
    GetProduceInfo(query: GetProduceInfoRequest): Promise<GetProduceInfoResponse>;
    /**
     * 文字logo列表
     */
    GetTextLogoList(query: GetTextLogoListRequest): Promise<GetTextLogoListResponse>;
    /**
     * 设计列表
     */
    ListDesign(query: ListDesignRequest): Promise<ListDesignResponse>;
    /**
     * logo示例列表
     */
    ListLogoSamples(query: ListLogoSamplesRequest): Promise<ListLogoSamplesResponse>;
    /**
     * 查询服务单操作日志
     */
    ListUserProduceOperateLogs(query: ListUserProduceOperateLogsRequest): Promise<ListUserProduceOperateLogsResponse>;
    /**
     * 收藏列表
     */
    ListUserCollections(query: ListUserCollectionsRequest): Promise<ListUserCollectionsResponse>;
    /**
     * 操作服务单
     */
    OperateProduceForUser(query: OperateProduceForUserRequest): Promise<OperateProduceForUserResponse>;
    /**
     * 查询图片列表
     */
    QueryBarrelImageList(query: QueryBarrelImageListRequest): Promise<QueryBarrelImageListResponse>;
    /**
     * 模板标签
     */
    GetTemplateCategories(query: GetTemplateCategoriesRequest): Promise<GetTemplateCategoriesResponse>;
    /**
     * 查询配置订单
     */
    QueryConfigurationOrder(query: QueryConfigurationOrderRequest): Promise<QueryConfigurationOrderResponse>;
    /**
     * 创建配置订单
     */
    CreateConfigurationOrder(query: CreateConfigurationOrderRequest): Promise<CreateConfigurationOrderResponse>;
}
export default PREMIUMPICS;
