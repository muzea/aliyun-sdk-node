import { CreateCertificateRequestRequest } from "./CreateCertificateRequest/req";
import { CreateCertificateRequestResponse } from "./CreateCertificateRequest/res";
import { CreateCertificateWithCsrRequestRequest } from "./CreateCertificateWithCsrRequest/req";
import { CreateCertificateWithCsrRequestResponse } from "./CreateCertificateWithCsrRequest/res";
import { DeleteCertificateRequestRequest } from "./DeleteCertificateRequest/req";
import { DeleteCertificateRequestResponse } from "./DeleteCertificateRequest/res";
import { DescribePackageStateRequest } from "./DescribePackageState/req";
import { DescribePackageStateResponse } from "./DescribePackageState/res";
import { DescribeCertificateStateRequest } from "./DescribeCertificateState/req";
import { DescribeCertificateStateResponse } from "./DescribeCertificateState/res";
import { CancelCertificateForPackageRequestRequest } from "./CancelCertificateForPackageRequest/req";
import { CancelCertificateForPackageRequestResponse } from "./CancelCertificateForPackageRequest/res";
import { CreateCertificateForPackageRequestRequest } from "./CreateCertificateForPackageRequest/req";
import { CreateCertificateForPackageRequestResponse } from "./CreateCertificateForPackageRequest/res";
import { CancelOrderRequestRequest } from "./CancelOrderRequest/req";
import { CancelOrderRequestResponse } from "./CancelOrderRequest/res";
import { RenewCertificateOrderForPackageRequestRequest } from "./RenewCertificateOrderForPackageRequest/req";
import { RenewCertificateOrderForPackageRequestResponse } from "./RenewCertificateOrderForPackageRequest/res";
import { ListUserCertificateOrderRequest } from "./ListUserCertificateOrder/req";
import { ListUserCertificateOrderResponse } from "./ListUserCertificateOrder/res";
import { VerifyRequest } from "./Verify/req";
import { VerifyResponse } from "./Verify/res";
import { ListCertWarehouseRequest } from "./ListCertWarehouse/req";
import { ListCertWarehouseResponse } from "./ListCertWarehouse/res";
import { UploadPCACertRequest } from "./UploadPCACert/req";
import { UploadPCACertResponse } from "./UploadPCACert/res";
import { DeletePCACertRequest } from "./DeletePCACert/req";
import { DeletePCACertResponse } from "./DeletePCACert/res";
import { SignRequest } from "./Sign/req";
import { SignResponse } from "./Sign/res";
import { ListCertRequest } from "./ListCert/req";
import { ListCertResponse } from "./ListCert/res";
import { DecryptRequest } from "./Decrypt/req";
import { DecryptResponse } from "./Decrypt/res";
import { EncryptRequest } from "./Encrypt/req";
import { EncryptResponse } from "./Encrypt/res";
import { RevokeWHClientCertificateRequest } from "./RevokeWHClientCertificate/req";
import { RevokeWHClientCertificateResponse } from "./RevokeWHClientCertificate/res";
import { CreateWHClientCertificateRequest } from "./CreateWHClientCertificate/req";
import { CreateWHClientCertificateResponse } from "./CreateWHClientCertificate/res";
import { GetCertWarehouseQuotaRequest } from "./GetCertWarehouseQuota/req";
import { GetCertWarehouseQuotaResponse } from "./GetCertWarehouseQuota/res";
import { UploadUserCertificateRequest } from "./UploadUserCertificate/req";
import { UploadUserCertificateResponse } from "./UploadUserCertificate/res";
import { DeleteUserCertificateRequest } from "./DeleteUserCertificate/req";
import { DeleteUserCertificateResponse } from "./DeleteUserCertificate/res";
import { GetUserCertificateDetailRequest } from "./GetUserCertificateDetail/req";
import { GetUserCertificateDetailResponse } from "./GetUserCertificateDetail/res";
import { DeleteCsrRequest } from "./DeleteCsr/req";
import { DeleteCsrResponse } from "./DeleteCsr/res";
import { UpdateCsrRequest } from "./UpdateCsr/req";
import { UpdateCsrResponse } from "./UpdateCsr/res";
import { ListCsrRequest } from "./ListCsr/req";
import { ListCsrResponse } from "./ListCsr/res";
import { GetCsrDetailRequest } from "./GetCsrDetail/req";
import { GetCsrDetailResponse } from "./GetCsrDetail/res";
import { CreateCsrRequest } from "./CreateCsr/req";
import { CreateCsrResponse } from "./CreateCsr/res";
import { UploadCsrRequest } from "./UploadCsr/req";
import { UploadCsrResponse } from "./UploadCsr/res";
import { UpdateWorkerResourceStatusRequest } from "./UpdateWorkerResourceStatus/req";
import { UpdateWorkerResourceStatusResponse } from "./UpdateWorkerResourceStatus/res";
import { DeleteDeploymentJobRequest } from "./DeleteDeploymentJob/req";
import { DeleteDeploymentJobResponse } from "./DeleteDeploymentJob/res";
import { ListCloudAccessRequest } from "./ListCloudAccess/req";
import { ListCloudAccessResponse } from "./ListCloudAccess/res";
import { DeleteWorkerResourceRequest } from "./DeleteWorkerResource/req";
import { DeleteWorkerResourceResponse } from "./DeleteWorkerResource/res";
import { ListContactRequest } from "./ListContact/req";
import { ListContactResponse } from "./ListContact/res";
import { ListWorkerResourceRequest } from "./ListWorkerResource/req";
import { ListWorkerResourceResponse } from "./ListWorkerResource/res";
import { CreateDeploymentJobRequest } from "./CreateDeploymentJob/req";
import { CreateDeploymentJobResponse } from "./CreateDeploymentJob/res";
import { UpdateDeploymentJobStatusRequest } from "./UpdateDeploymentJobStatus/req";
import { UpdateDeploymentJobStatusResponse } from "./UpdateDeploymentJobStatus/res";
import { UpdateDeploymentJobRequest } from "./UpdateDeploymentJob/req";
import { UpdateDeploymentJobResponse } from "./UpdateDeploymentJob/res";
import { DescribeDeploymentJobRequest } from "./DescribeDeploymentJob/req";
import { DescribeDeploymentJobResponse } from "./DescribeDeploymentJob/res";
import { ListDeploymentJobRequest } from "./ListDeploymentJob/req";
import { ListDeploymentJobResponse } from "./ListDeploymentJob/res";
import { DescribeDeploymentJobStatusRequest } from "./DescribeDeploymentJobStatus/req";
import { DescribeDeploymentJobStatusResponse } from "./DescribeDeploymentJobStatus/res";
import { DescribeCloudResourceStatusRequest } from "./DescribeCloudResourceStatus/req";
import { DescribeCloudResourceStatusResponse } from "./DescribeCloudResourceStatus/res";
import { ListDeploymentJobCertRequest } from "./ListDeploymentJobCert/req";
import { ListDeploymentJobCertResponse } from "./ListDeploymentJobCert/res";
import { ListDeploymentJobResourceRequest } from "./ListDeploymentJobResource/req";
import { ListDeploymentJobResourceResponse } from "./ListDeploymentJobResource/res";
import { ListCloudResourcesRequest } from "./ListCloudResources/req";
import { ListCloudResourcesResponse } from "./ListCloudResources/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";

interface CAS {
    /**
     * 完成扩展服务DV证书的购买、申请和签发流程。
     */
    CreateCertificateRequest(query: CreateCertificateRequestRequest): Promise<CreateCertificateRequestResponse>;
    /**
     * 购买、申请和签发自带CSR文件的DV证书。证书扩展服务可通过一步完成DV证书的购买和申请。
     */
    CreateCertificateWithCsrRequest(query: CreateCertificateWithCsrRequestRequest): Promise<CreateCertificateWithCsrRequestResponse>;
    /**
     * 删除DV证书申请失败的订单。
     */
    DeleteCertificateRequest(query: DeleteCertificateRequestRequest): Promise<DeleteCertificateRequestResponse>;
    /**
     * 查询已经购买的DV证书总数和使用情况。
     */
    DescribePackageState(query: DescribePackageStateRequest): Promise<DescribePackageStateResponse>;
    /**
     * 查询指定的证书申请订单的状态。
     */
    DescribeCertificateState(query: DescribeCertificateStateRequest): Promise<DescribeCertificateStateResponse>;
    /**
     * 吊销已签发的证书（取消对应的证书申请订单）。
     */
    CancelCertificateForPackageRequest(query: CancelCertificateForPackageRequestRequest): Promise<CancelCertificateForPackageRequestResponse>;
    /**
     * 提交证书申请。
     */
    CreateCertificateForPackageRequest(query: CreateCertificateForPackageRequestRequest): Promise<CreateCertificateForPackageRequestResponse>;
    /**
     * 撤回待验证、审核中的证书申请订单。
     */
    CancelOrderRequest(query: CancelOrderRequestRequest): Promise<CancelOrderRequestResponse>;
    /**
     * 为已签发的证书申请订单续费。
     */
    RenewCertificateOrderForPackageRequest(query: RenewCertificateOrderForPackageRequestRequest): Promise<RenewCertificateOrderForPackageRequestResponse>;
    /**
     * 查询用户证书或者订单列表。
     */
    ListUserCertificateOrder(query: ListUserCertificateOrderRequest): Promise<ListUserCertificateOrderResponse>;
    /**
     * 本接口一般用于证书仓库中PCA证书的签名校验。
     */
    Verify(query: VerifyRequest): Promise<VerifyResponse>;
    /**
     * 本接口一般用于查询证书仓库列表。
     */
    ListCertWarehouse(query: ListCertWarehouseRequest): Promise<ListCertWarehouseResponse>;
    /**
     * 本接口一般用于在证书仓库中上传PCA证书。
     */
    UploadPCACert(query: UploadPCACertRequest): Promise<UploadPCACertResponse>;
    /**
     * 本接口一般用于删除证书仓库中PCA证书。
     */
    DeletePCACert(query: DeletePCACertRequest): Promise<DeletePCACertResponse>;
    /**
     * 本接口一般用于证书仓库中的PCA证书签名。
     */
    Sign(query: SignRequest): Promise<SignResponse>;
    /**
     * 本接口一般用于查询证书仓库中的证书。
     */
    ListCert(query: ListCertRequest): Promise<ListCertResponse>;
    /**
     * 本接口一般用于证书仓库中证书解密。
     */
    Decrypt(query: DecryptRequest): Promise<DecryptResponse>;
    /**
     * 本接口一般用于证书仓库中证书加密。
     */
    Encrypt(query: EncryptRequest): Promise<EncryptResponse>;
    /**
     * 一般用于吊销证书仓库中客户端证书。
     */
    RevokeWHClientCertificate(query: RevokeWHClientCertificateRequest): Promise<RevokeWHClientCertificateResponse>;
    /**
     * 一般用户证书仓库中，申请签发单个客户端证书。
     */
    CreateWHClientCertificate(query: CreateWHClientCertificateRequest): Promise<CreateWHClientCertificateResponse>;
    /**
     * 调用证书应用仓库签名、验签、加密和解密API时，会消耗API调用次数，API调用次数消耗完时，您将无法再调用相应的API。本接口一般用于查询证书仓库额度。
     */
    GetCertWarehouseQuota(query: GetCertWarehouseQuotaRequest): Promise<GetCertWarehouseQuotaResponse>;
    /**
     * 本接口一般用于上传证书，包括标准国密证书或非国密证书。
     */
    UploadUserCertificate(query: UploadUserCertificateRequest): Promise<UploadUserCertificateResponse>;
    /**
     * 删除已过期或上传的证书。
     */
    DeleteUserCertificate(query: DeleteUserCertificateRequest): Promise<DeleteUserCertificateResponse>;
    /**
     * 本接口一般用于获取证书详情。
     */
    GetUserCertificateDetail(query: GetUserCertificateDetailRequest): Promise<GetUserCertificateDetailResponse>;
    /**
     * 如果您不再需要某个CSR，可以将其删除。
     */
    DeleteCsr(query: DeleteCsrRequest): Promise<DeleteCsrResponse>;
    /**
     * 如果您在上传本地CSR时未传入CSR私钥，您可以通过该接口上传或更新CSR对应的私钥。
     */
    UpdateCsr(query: UpdateCsrRequest): Promise<UpdateCsrResponse>;
    /**
     * 查询CSR列表信息及CSR详细信息。
     */
    ListCsr(query: ListCsrRequest): Promise<ListCsrResponse>;
    /**
     * 通过CreateCsr接口创建CSR后会返回CsrId，您可以通过CsrId直接获取CSR内容。
     */
    GetCsrDetail(query: GetCsrDetailRequest): Promise<GetCsrDetailResponse>;
    /**
     * CSR是证书请求文件，包含您的SSL证书信息，例如，证书绑定的域名、证书持有主体的名称及地理位置信息等。您向CA中心提交证书申请时，必须提供CSR。CA中心审核通过您的证书申请后，将使用其根CA私钥为您提供的CSR签名，生成SSL证书公钥（即签发给您的SSL证书）。SSL证书的私钥即您在生成CSR时同时生成的私钥。
     */
    CreateCsr(query: CreateCsrRequest): Promise<CreateCsrResponse>;
    /**
     * 阿里云数字证书管理服务支持上传已有的CSR，以便申请证书时使用，同时也可对上传的CSR进行统一管理。
     */
    UploadCsr(query: UploadCsrRequest): Promise<UploadCsrResponse>;
    /**
     * 您可以通过该接口立即回滚或执行部署任务下的Worker任务。
     */
    UpdateWorkerResourceStatus(query: UpdateWorkerResourceStatusRequest): Promise<UpdateWorkerResourceStatusResponse>;
    /**
     * 删除部署任务。
     */
    DeleteDeploymentJob(query: DeleteDeploymentJobRequest): Promise<DeleteDeploymentJobResponse>;
    /**
     * 多云部署获取AK列表。
     */
    ListCloudAccess(query: ListCloudAccessRequest): Promise<ListCloudAccessResponse>;
    /**
     * 删除部署任务worker（预览）。
     */
    DeleteWorkerResource(query: DeleteWorkerResourceRequest): Promise<DeleteWorkerResourceResponse>;
    /**
     * 获取联系人列表。
     */
    ListContact(query: ListContactRequest): Promise<ListContactResponse>;
    /**
     * 阿里云支持批量部署证书，因此一个部署任务中可能对应多个云产品子任务（Worker），对应每个产品中的资源实例，您可通过该接口查看Worker任务详细信息。
     */
    ListWorkerResource(query: ListWorkerResourceRequest): Promise<ListWorkerResourceResponse>;
    /**
     * SSL证书签发完成后，您可以通过该接口创建不同类型的证书部署任务，立即或手动指定任务部署时间，将SSL证书部署到阿里云产品或三方云产品，为您的业务网站提供可信身份认证和安全数据传输。
     */
    CreateDeploymentJob(query: CreateDeploymentJobRequest): Promise<CreateDeploymentJobResponse>;
    /**
     * 更新部署任务状态。
     */
    UpdateDeploymentJobStatus(query: UpdateDeploymentJobStatusRequest): Promise<UpdateDeploymentJobStatusResponse>;
    /**
     * 更新部署任务。
     */
    UpdateDeploymentJob(query: UpdateDeploymentJobRequest): Promise<UpdateDeploymentJobResponse>;
    /**
     * 通过CreateDeploymentJob创建部署任务后会获取任务ID，您可以通过该任务ID调用本接口获取部署任务详情。
     */
    DescribeDeploymentJob(query: DescribeDeploymentJobRequest): Promise<DescribeDeploymentJobResponse>;
    /**
     * 创建部署任务后，您可以通过该接口获取部署任务列表。
     */
    ListDeploymentJob(query: ListDeploymentJobRequest): Promise<ListDeploymentJobResponse>;
    /**
     * 获取部署任务下的Worker任务数。
     */
    DescribeDeploymentJobStatus(query: DescribeDeploymentJobStatusRequest): Promise<DescribeDeploymentJobStatusResponse>;
    /**
     * 您可通过本接口获取通过多云部署任务，部署证书到三方云产品的资源数。
     */
    DescribeCloudResourceStatus(query: DescribeCloudResourceStatusRequest): Promise<DescribeCloudResourceStatusResponse>;
    /**
     * 创建部署任务后，可通过本接口获取部署到云产品的证书基本信息，例如证书实例ID、证书类型、证书名称等。
     */
    ListDeploymentJobCert(query: ListDeploymentJobCertRequest): Promise<ListDeploymentJobCertResponse>;
    /**
     * 获取部署任务的云产品资源列表。
     */
    ListDeploymentJobResource(query: ListDeploymentJobResourceRequest): Promise<ListDeploymentJobResourceResponse>;
    /**
     * 您可以通过本接口获取云厂商及对应云产品的证书资源列表。
     */
    ListCloudResources(query: ListCloudResourcesRequest): Promise<ListCloudResourcesResponse>;
    /**
     * 修改证书或证书订单资源所属的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
}
export default CAS;
