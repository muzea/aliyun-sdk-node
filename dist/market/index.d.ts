import { ActivateLicenseRequest } from "./ActivateLicense/req";
import { ActivateLicenseResponse } from "./ActivateLicense/res";
import { CreateOrderRequest } from "./CreateOrder/req";
import { CreateOrderResponse } from "./CreateOrder/res";
import { DescribeCurrentNodeInfoRequest } from "./DescribeCurrentNodeInfo/req";
import { DescribeCurrentNodeInfoResponse } from "./DescribeCurrentNodeInfo/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { DescribeLicenseRequest } from "./DescribeLicense/req";
import { DescribeLicenseResponse } from "./DescribeLicense/res";
import { DescribeOrderRequest } from "./DescribeOrder/req";
import { DescribeOrderResponse } from "./DescribeOrder/res";
import { DescribePriceRequest } from "./DescribePrice/req";
import { DescribePriceResponse } from "./DescribePrice/res";
import { DescribeProductRequest } from "./DescribeProduct/req";
import { DescribeProductResponse } from "./DescribeProduct/res";
import { DescribeProductsRequest } from "./DescribeProducts/req";
import { DescribeProductsResponse } from "./DescribeProducts/res";
import { DescribeProjectAttachmentsRequest } from "./DescribeProjectAttachments/req";
import { DescribeProjectAttachmentsResponse } from "./DescribeProjectAttachments/res";
import { DescribeProjectInfoRequest } from "./DescribeProjectInfo/req";
import { DescribeProjectInfoResponse } from "./DescribeProjectInfo/res";
import { DescribeProjectMessagesRequest } from "./DescribeProjectMessages/req";
import { DescribeProjectMessagesResponse } from "./DescribeProjectMessages/res";
import { DescribeProjectNodesRequest } from "./DescribeProjectNodes/req";
import { DescribeProjectNodesResponse } from "./DescribeProjectNodes/res";
import { DescribeProjectOperateLogsRequest } from "./DescribeProjectOperateLogs/req";
import { DescribeProjectOperateLogsResponse } from "./DescribeProjectOperateLogs/res";
import { FinishCurrentProjectNodeRequest } from "./FinishCurrentProjectNode/req";
import { FinishCurrentProjectNodeResponse } from "./FinishCurrentProjectNode/res";
import { PauseProjectRequest } from "./PauseProject/req";
import { PauseProjectResponse } from "./PauseProject/res";
import { PushMeteringDataRequest } from "./PushMeteringData/req";
import { PushMeteringDataResponse } from "./PushMeteringData/res";
import { ResumeProjectRequest } from "./ResumeProject/req";
import { ResumeProjectResponse } from "./ResumeProject/res";
import { RollbackCurrentProjectNodeRequest } from "./RollbackCurrentProjectNode/req";
import { RollbackCurrentProjectNodeResponse } from "./RollbackCurrentProjectNode/res";
import { DescribeApiMeteringRequest } from "./DescribeApiMetering/req";
import { DescribeApiMeteringResponse } from "./DescribeApiMetering/res";
import { AutoRenewInstanceRequest } from "./AutoRenewInstance/req";
import { AutoRenewInstanceResponse } from "./AutoRenewInstance/res";
import { CrossAccountVerifyTokenRequest } from "./CrossAccountVerifyToken/req";
import { CrossAccountVerifyTokenResponse } from "./CrossAccountVerifyToken/res";
import { DescribeDistributionProductsLinkRequest } from "./DescribeDistributionProductsLink/req";
import { DescribeDistributionProductsLinkResponse } from "./DescribeDistributionProductsLink/res";
import { DescribeDistributionProductsRequest } from "./DescribeDistributionProducts/req";
import { DescribeDistributionProductsResponse } from "./DescribeDistributionProducts/res";

interface MARKET {
    /**
     * 调用 ActivateLicense 激活授权码。
     */
    ActivateLicense(query: ActivateLicenseRequest): Promise<ActivateLicenseResponse>;
    /**
     * 调用 CreateOrder 创建订单。
     */
    CreateOrder(query: CreateOrderRequest): Promise<CreateOrderResponse>;
    /**
     * 调用DescribeCurrentNodeInfo获取当前节点的流程信息。
     */
    DescribeCurrentNodeInfo(query: DescribeCurrentNodeInfoRequest): Promise<DescribeCurrentNodeInfoResponse>;
    /**
     * 调用 DescribeInstance 查询实例信息。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 查询用户已购买的服务列表。
     */
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
     * 调用 DescribeLicense 查询授权信息。
     */
    DescribeLicense(query: DescribeLicenseRequest): Promise<DescribeLicenseResponse>;
    /**
     * 调用 DescribeOrder 用于查询对应订单的详细信息。
     */
    DescribeOrder(query: DescribeOrderRequest): Promise<DescribeOrderResponse>;
    /**
     * 调用 DescribePrice 查询对应商品的价格信息。
     */
    DescribePrice(query: DescribePriceRequest): Promise<DescribePriceResponse>;
    /**
     * 调用 DescribeProduct 用于查询指定商品的详细信息。
     */
    DescribeProduct(query: DescribeProductRequest): Promise<DescribeProductResponse>;
    /**
     * 调用 DescribeProducts 拉取符合条件的商品列表及详细信息。
     */
    DescribeProducts(query: DescribeProductsRequest): Promise<DescribeProductsResponse>;
    /**
     * 调用DescribeProjectAttachments获取项目附件列表。
     */
    DescribeProjectAttachments(query: DescribeProjectAttachmentsRequest): Promise<DescribeProjectAttachmentsResponse>;
    /**
     * 调用DescribeProjectInfo获取项目信息。
     */
    DescribeProjectInfo(query: DescribeProjectInfoRequest): Promise<DescribeProjectInfoResponse>;
    /**
     * 调用DescribeProjectMessages获取项目流程留言信息列表。
     */
    DescribeProjectMessages(query: DescribeProjectMessagesRequest): Promise<DescribeProjectMessagesResponse>;
    /**
     * 调用DescribeProjectNodes获取项目流程节点列表。
     */
    DescribeProjectNodes(query: DescribeProjectNodesRequest): Promise<DescribeProjectNodesResponse>;
    /**
     * 调用DescribeProjectOperateLogs获取项目流程操作日志。
     */
    DescribeProjectOperateLogs(query: DescribeProjectOperateLogsRequest): Promise<DescribeProjectOperateLogsResponse>;
    /**
     * 调用FinishCurrentProjectNode完成当前流程。
     */
    FinishCurrentProjectNode(query: FinishCurrentProjectNodeRequest): Promise<FinishCurrentProjectNodeResponse>;
    /**
     * 调用PauseProject暂停项目。
     */
    PauseProject(query: PauseProjectRequest): Promise<PauseProjectResponse>;
    /**
     * 调用PushMeteringData推送计量数据。
     */
    PushMeteringData(query: PushMeteringDataRequest): Promise<PushMeteringDataResponse>;
    /**
     * 调用ResumeProject恢复暂停项目。
     */
    ResumeProject(query: ResumeProjectRequest): Promise<ResumeProjectResponse>;
    /**
     * 调用RollbackCurrentProjectNode触发当前流程驳回。
     */
    RollbackCurrentProjectNode(query: RollbackCurrentProjectNodeRequest): Promise<RollbackCurrentProjectNodeResponse>;
    /**
     * 获取用户的API余量、总量、使用量等数据。
     */
    DescribeApiMetering(query: DescribeApiMeteringRequest): Promise<DescribeApiMeteringResponse>;
    AutoRenewInstance(query: AutoRenewInstanceRequest): Promise<AutoRenewInstanceResponse>;
    /**
     * 查询跨账号角色授权信息，包含授权人阿里云账号UID、名称、授权时间、授权角色名称。
     */
    CrossAccountVerifyToken(query: CrossAccountVerifyTokenRequest): Promise<CrossAccountVerifyTokenResponse>;
    /**
     * 获取推广商品的推广链接。
     */
    DescribeDistributionProductsLink(query: DescribeDistributionProductsLinkRequest): Promise<DescribeDistributionProductsLinkResponse>;
    /**
     * 分页获取推广商品列表及详细信息。
     */
    DescribeDistributionProducts(query: DescribeDistributionProductsRequest): Promise<DescribeDistributionProductsResponse>;
}
export default MARKET;
