import { DeleteChatappTemplateRequest } from "./DeleteChatappTemplate/req";
import { DeleteChatappTemplateResponse } from "./DeleteChatappTemplate/res";
import { GetChatappTemplateDetailRequest } from "./GetChatappTemplateDetail/req";
import { GetChatappTemplateDetailResponse } from "./GetChatappTemplateDetail/res";
import { CreateChatappTemplateRequest } from "./CreateChatappTemplate/req";
import { CreateChatappTemplateResponse } from "./CreateChatappTemplate/res";
import { ListChatappTemplateRequest } from "./ListChatappTemplate/req";
import { ListChatappTemplateResponse } from "./ListChatappTemplate/res";
import { SendChatappMessageRequest } from "./SendChatappMessage/req";
import { SendChatappMessageResponse } from "./SendChatappMessage/res";
import { SendChatappMassMessageRequest } from "./SendChatappMassMessage/req";
import { SendChatappMassMessageResponse } from "./SendChatappMassMessage/res";
import { BeeBotChatRequest } from "./BeeBotChat/req";
import { BeeBotChatResponse } from "./BeeBotChat/res";
import { BeeBotAssociateRequest } from "./BeeBotAssociate/req";
import { BeeBotAssociateResponse } from "./BeeBotAssociate/res";
import { ModifyChatappTemplateRequest } from "./ModifyChatappTemplate/req";
import { ModifyChatappTemplateResponse } from "./ModifyChatappTemplate/res";
import { QueryChatappBindWabaRequest } from "./QueryChatappBindWaba/req";
import { QueryChatappBindWabaResponse } from "./QueryChatappBindWaba/res";
import { QueryChatappPhoneNumbersRequest } from "./QueryChatappPhoneNumbers/req";
import { QueryChatappPhoneNumbersResponse } from "./QueryChatappPhoneNumbers/res";
import { ModifyPhoneBusinessProfileRequest } from "./ModifyPhoneBusinessProfile/req";
import { ModifyPhoneBusinessProfileResponse } from "./ModifyPhoneBusinessProfile/res";
import { QueryPhoneBusinessProfileRequest } from "./QueryPhoneBusinessProfile/req";
import { QueryPhoneBusinessProfileResponse } from "./QueryPhoneBusinessProfile/res";
import { CreateChatappMigrationInitiateRequest } from "./CreateChatappMigrationInitiate/req";
import { CreateChatappMigrationInitiateResponse } from "./CreateChatappMigrationInitiate/res";
import { UpdateAccountWebhookRequest } from "./UpdateAccountWebhook/req";
import { UpdateAccountWebhookResponse } from "./UpdateAccountWebhook/res";
import { ChatappSyncPhoneNumberRequest } from "./ChatappSyncPhoneNumber/req";
import { ChatappSyncPhoneNumberResponse } from "./ChatappSyncPhoneNumber/res";
import { QueryWabaBusinessInfoRequest } from "./QueryWabaBusinessInfo/req";
import { QueryWabaBusinessInfoResponse } from "./QueryWabaBusinessInfo/res";
import { GetPhoneNumberVerificationStatusRequest } from "./GetPhoneNumberVerificationStatus/req";
import { GetPhoneNumberVerificationStatusResponse } from "./GetPhoneNumberVerificationStatus/res";
import { UpdatePhoneWebhookRequest } from "./UpdatePhoneWebhook/req";
import { UpdatePhoneWebhookResponse } from "./UpdatePhoneWebhook/res";
import { ChatappVerifyAndRegisterRequest } from "./ChatappVerifyAndRegister/req";
import { ChatappVerifyAndRegisterResponse } from "./ChatappVerifyAndRegister/res";
import { ChatappPhoneNumberRegisterRequest } from "./ChatappPhoneNumberRegister/req";
import { ChatappPhoneNumberRegisterResponse } from "./ChatappPhoneNumberRegister/res";
import { ChatappEmbedSignUpRequest } from "./ChatappEmbedSignUp/req";
import { ChatappEmbedSignUpResponse } from "./ChatappEmbedSignUp/res";
import { GetChatappVerifyCodeRequest } from "./GetChatappVerifyCode/req";
import { GetChatappVerifyCodeResponse } from "./GetChatappVerifyCode/res";
import { ChatappBindWabaRequest } from "./ChatappBindWaba/req";
import { ChatappBindWabaResponse } from "./ChatappBindWaba/res";
import { IsvGetAppIdRequest } from "./IsvGetAppId/req";
import { IsvGetAppIdResponse } from "./IsvGetAppId/res";
import { ChatappMigrationRegisterRequest } from "./ChatappMigrationRegister/req";
import { ChatappMigrationRegisterResponse } from "./ChatappMigrationRegister/res";
import { ChatappMigrationVerifiedRequest } from "./ChatappMigrationVerified/req";
import { ChatappMigrationVerifiedResponse } from "./ChatappMigrationVerified/res";
import { GetMigrationVerifyCodeRequest } from "./GetMigrationVerifyCode/req";
import { GetMigrationVerifyCodeResponse } from "./GetMigrationVerifyCode/res";
import { SubmitIsvCustomerTermsRequest } from "./SubmitIsvCustomerTerms/req";
import { SubmitIsvCustomerTermsResponse } from "./SubmitIsvCustomerTerms/res";
import { GetChatappUploadAuthorizationRequest } from "./GetChatappUploadAuthorization/req";
import { GetChatappUploadAuthorizationResponse } from "./GetChatappUploadAuthorization/res";
import { UpdateCommerceSettingRequest } from "./UpdateCommerceSetting/req";
import { UpdateCommerceSettingResponse } from "./UpdateCommerceSetting/res";
import { GetCommerceSettingRequest } from "./GetCommerceSetting/req";
import { GetCommerceSettingResponse } from "./GetCommerceSetting/res";
import { GetPreValidatePhoneIdRequest } from "./GetPreValidatePhoneId/req";
import { GetPreValidatePhoneIdResponse } from "./GetPreValidatePhoneId/res";
import { ListProductCatalogRequest } from "./ListProductCatalog/req";
import { ListProductCatalogResponse } from "./ListProductCatalog/res";
import { ListProductRequest } from "./ListProduct/req";
import { ListProductResponse } from "./ListProduct/res";
import { GetWhatsappConnectionCatalogRequest } from "./GetWhatsappConnectionCatalog/req";
import { GetWhatsappConnectionCatalogResponse } from "./GetWhatsappConnectionCatalog/res";
import { ChatappPhoneNumberDeregisterRequest } from "./ChatappPhoneNumberDeregister/req";
import { ChatappPhoneNumberDeregisterResponse } from "./ChatappPhoneNumberDeregister/res";
import { AddChatappPhoneNumberRequest } from "./AddChatappPhoneNumber/req";
import { AddChatappPhoneNumberResponse } from "./AddChatappPhoneNumber/res";
import { GetChatappPhoneNumberMetricRequest } from "./GetChatappPhoneNumberMetric/req";
import { GetChatappPhoneNumberMetricResponse } from "./GetChatappPhoneNumberMetric/res";
import { EnableWhatsappROIMetricRequest } from "./EnableWhatsappROIMetric/req";
import { EnableWhatsappROIMetricResponse } from "./EnableWhatsappROIMetric/res";
import { GetChatappTemplateMetricRequest } from "./GetChatappTemplateMetric/req";
import { GetChatappTemplateMetricResponse } from "./GetChatappTemplateMetric/res";
import { GetFlowRequest } from "./GetFlow/req";
import { GetFlowResponse } from "./GetFlow/res";
import { GetFlowJSONAssestRequest } from "./GetFlowJSONAssest/req";
import { GetFlowJSONAssestResponse } from "./GetFlowJSONAssest/res";
import { GetFlowPreviewUrlRequest } from "./GetFlowPreviewUrl/req";
import { GetFlowPreviewUrlResponse } from "./GetFlowPreviewUrl/res";
import { PublishFlowRequest } from "./PublishFlow/req";
import { PublishFlowResponse } from "./PublishFlow/res";
import { DeprecateFlowRequest } from "./DeprecateFlow/req";
import { DeprecateFlowResponse } from "./DeprecateFlow/res";
import { UpdatePhoneEncryptionPublicKeyRequest } from "./UpdatePhoneEncryptionPublicKey/req";
import { UpdatePhoneEncryptionPublicKeyResponse } from "./UpdatePhoneEncryptionPublicKey/res";
import { GetPermissionByCodeRequest } from "./GetPermissionByCode/req";
import { GetPermissionByCodeResponse } from "./GetPermissionByCode/res";
import { UpdateFlowJSONAssetRequest } from "./UpdateFlowJSONAsset/req";
import { UpdateFlowJSONAssetResponse } from "./UpdateFlowJSONAsset/res";
import { GetPhoneEncryptionPublicKeyRequest } from "./GetPhoneEncryptionPublicKey/req";
import { GetPhoneEncryptionPublicKeyResponse } from "./GetPhoneEncryptionPublicKey/res";
import { DeleteFlowRequest } from "./DeleteFlow/req";
import { DeleteFlowResponse } from "./DeleteFlow/res";
import { ListFlowRequest } from "./ListFlow/req";
import { ListFlowResponse } from "./ListFlow/res";
import { ModifyFlowRequest } from "./ModifyFlow/req";
import { ModifyFlowResponse } from "./ModifyFlow/res";
import { CreateFlowRequest } from "./CreateFlow/req";
import { CreateFlowResponse } from "./CreateFlow/res";
import { DeletePhoneMessageQrdlRequest } from "./DeletePhoneMessageQrdl/req";
import { DeletePhoneMessageQrdlResponse } from "./DeletePhoneMessageQrdl/res";
import { ListPhoneMessageQrdlRequest } from "./ListPhoneMessageQrdl/req";
import { ListPhoneMessageQrdlResponse } from "./ListPhoneMessageQrdl/res";
import { CreatePhoneMessageQrdlRequest } from "./CreatePhoneMessageQrdl/req";
import { CreatePhoneMessageQrdlResponse } from "./CreatePhoneMessageQrdl/res";
import { UpdatePhoneMessageQrdlRequest } from "./UpdatePhoneMessageQrdl/req";
import { UpdatePhoneMessageQrdlResponse } from "./UpdatePhoneMessageQrdl/res";

interface CAMS {
    /**
     * 删除消息模板。
     */
    DeleteChatappTemplate(query: DeleteChatappTemplateRequest): Promise<DeleteChatappTemplateResponse>;
    /**
     * 获取消息模板的详细信息。
     */
    GetChatappTemplateDetail(query: GetChatappTemplateDetailRequest): Promise<GetChatappTemplateDetailResponse>;
    /**
     * 创建消息模板，模板审核通过后可以发送消息。
     */
    CreateChatappTemplate(query: CreateChatappTemplateRequest): Promise<CreateChatappTemplateResponse>;
    /**
     * 获取消息模板列表。
     */
    ListChatappTemplate(query: ListChatappTemplateRequest): Promise<ListChatappTemplateResponse>;
    /**
     * 发送ChatApp消息。
     */
    SendChatappMessage(query: SendChatappMessageRequest): Promise<SendChatappMessageResponse>;
    /**
     * 批量发送ChatApp消息。
     */
    SendChatappMassMessage(query: SendChatappMassMessageRequest): Promise<SendChatappMassMessageResponse>;
    /**
     * 根据机器人唯一标识（机器人Id）与其进行会话。
     */
    BeeBotChat(query: BeeBotChatRequest): Promise<BeeBotChatResponse>;
    /**
     * 根据用户请求，联想知识库中的FAQ。
     */
    BeeBotAssociate(query: BeeBotAssociateRequest): Promise<BeeBotAssociateResponse>;
    /**
     * 修改消息模板。只能修改未审核以及审核不通过的模板。
     */
    ModifyChatappTemplate(query: ModifyChatappTemplateRequest): Promise<ModifyChatappTemplateResponse>;
    /**
     * 查询客户绑定的WABA。
     */
    QueryChatappBindWaba(query: QueryChatappBindWabaRequest): Promise<QueryChatappBindWabaResponse>;
    /**
     * 查询客户下的所有发送号码及号码状态。
     */
    QueryChatappPhoneNumbers(query: QueryChatappPhoneNumbersRequest): Promise<QueryChatappPhoneNumbersResponse>;
    /**
     * 修改号码商业信息。
     */
    ModifyPhoneBusinessProfile(query: ModifyPhoneBusinessProfileRequest): Promise<ModifyPhoneBusinessProfileResponse>;
    /**
     * 查询号码商业信息。
     */
    QueryPhoneBusinessProfile(query: QueryPhoneBusinessProfileRequest): Promise<QueryPhoneBusinessProfileResponse>;
    /**
     * 新增迁移号码。
     */
    CreateChatappMigrationInitiate(query: CreateChatappMigrationInitiateRequest): Promise<CreateChatappMigrationInitiateResponse>;
    /**
     * 修改账号回调地址信息。
     */
    UpdateAccountWebhook(query: UpdateAccountWebhookRequest): Promise<UpdateAccountWebhookResponse>;
    /**
     * 同步号码信息。
     */
    ChatappSyncPhoneNumber(query: ChatappSyncPhoneNumberRequest): Promise<ChatappSyncPhoneNumberResponse>;
    /**
     * 获取Waba账号Business平台信息。
     */
    QueryWabaBusinessInfo(query: QueryWabaBusinessInfoRequest): Promise<QueryWabaBusinessInfoResponse>;
    /**
     * 获取号码验证状态。
     */
    GetPhoneNumberVerificationStatus(query: GetPhoneNumberVerificationStatusRequest): Promise<GetPhoneNumberVerificationStatusResponse>;
    /**
     * 修改号码回调地址信息。
     */
    UpdatePhoneWebhook(query: UpdatePhoneWebhookRequest): Promise<UpdatePhoneWebhookResponse>;
    /**
     * 北向接口校验验证码并注册。
     */
    ChatappVerifyAndRegister(query: ChatappVerifyAndRegisterRequest): Promise<ChatappVerifyAndRegisterResponse>;
    /**
     * 北向接口注册号码。
     */
    ChatappPhoneNumberRegister(query: ChatappPhoneNumberRegisterRequest): Promise<ChatappPhoneNumberRegisterResponse>;
    /**
     * 北向接口嵌入式。
     * 请在调用嵌入式SDK时使用v2版本，此接口即可忽略。
     */
    ChatappEmbedSignUp(query: ChatappEmbedSignUpRequest): Promise<ChatappEmbedSignUpResponse>;
    /**
     * 北向接口获取验证码。
     */
    GetChatappVerifyCode(query: GetChatappVerifyCodeRequest): Promise<GetChatappVerifyCodeResponse>;
    /**
     * 北向接口绑定Waba。
     */
    ChatappBindWaba(query: ChatappBindWabaRequest): Promise<ChatappBindWabaResponse>;
    /**
     * ISV获取App ID。
     */
    IsvGetAppId(query: IsvGetAppIdRequest): Promise<IsvGetAppIdResponse>;
    /**
     * 迁移号码注册。
     */
    ChatappMigrationRegister(query: ChatappMigrationRegisterRequest): Promise<ChatappMigrationRegisterResponse>;
    /**
     * 迁移号码校验。
     */
    ChatappMigrationVerified(query: ChatappMigrationVerifiedRequest): Promise<ChatappMigrationVerifiedResponse>;
    /**
     * 获取迁移号码的验证码。
     */
    GetMigrationVerifyCode(query: GetMigrationVerifyCodeRequest): Promise<GetMigrationVerifyCodeResponse>;
    /**
     * 提交Isv客户的协议信息。
     */
    SubmitIsvCustomerTerms(query: SubmitIsvCustomerTermsRequest): Promise<SubmitIsvCustomerTermsResponse>;
    /**
     * 获取上传文件的鉴权信息。
     */
    GetChatappUploadAuthorization(query: GetChatappUploadAuthorizationRequest): Promise<GetChatappUploadAuthorizationResponse>;
    /**
     * 修改号码商业设置状态。
     */
    UpdateCommerceSetting(query: UpdateCommerceSettingRequest): Promise<UpdateCommerceSettingResponse>;
    /**
     * 获取号码商业设置状态。
     */
    GetCommerceSetting(query: GetCommerceSettingRequest): Promise<GetCommerceSettingResponse>;
    /**
     * 预注册号码获取ID，用来在嵌入式中选择，不用重新获取验证码。
     */
    GetPreValidatePhoneId(query: GetPreValidatePhoneIdRequest): Promise<GetPreValidatePhoneIdResponse>;
    /**
     * 查询Meta Business平台的目录列表。
     */
    ListProductCatalog(query: ListProductCatalogRequest): Promise<ListProductCatalogResponse>;
    /**
     * 查询目录下的商品列表。
     */
    ListProduct(query: ListProductRequest): Promise<ListProductResponse>;
    /**
     * 获取Waba关联的目录。
     */
    GetWhatsappConnectionCatalog(query: GetWhatsappConnectionCatalogRequest): Promise<GetWhatsappConnectionCatalogResponse>;
    /**
     * 从Waba中取消注册号码。
     */
    ChatappPhoneNumberDeregister(query: ChatappPhoneNumberDeregisterRequest): Promise<ChatappPhoneNumberDeregisterResponse>;
    /**
     * 增加号码到Waba中。
     */
    AddChatappPhoneNumber(query: AddChatappPhoneNumberRequest): Promise<AddChatappPhoneNumberResponse>;
    /**
     * 查询号码的发送量指标。
     */
    GetChatappPhoneNumberMetric(query: GetChatappPhoneNumberMetricRequest): Promise<GetChatappPhoneNumberMetricResponse>;
    /**
     * 开启Whatsapp相关指标统计。
     */
    EnableWhatsappROIMetric(query: EnableWhatsappROIMetricRequest): Promise<EnableWhatsappROIMetricResponse>;
    /**
     * 获取Marketing类型模板的相关指标。
     */
    GetChatappTemplateMetric(query: GetChatappTemplateMetricRequest): Promise<GetChatappTemplateMetricResponse>;
    /**
     * 获取Flow详细信息。
     */
    GetFlow(query: GetFlowRequest): Promise<GetFlowResponse>;
    /**
     * 获取Flow的JSON格式的内容。
     */
    GetFlowJSONAssest(query: GetFlowJSONAssestRequest): Promise<GetFlowJSONAssestResponse>;
    /**
     * 获取Flow预览URL。
     */
    GetFlowPreviewUrl(query: GetFlowPreviewUrlRequest): Promise<GetFlowPreviewUrlResponse>;
    /**
     * 发布Flow。
     */
    PublishFlow(query: PublishFlowRequest): Promise<PublishFlowResponse>;
    /**
     * 弃用Flow。
     */
    DeprecateFlow(query: DeprecateFlowRequest): Promise<DeprecateFlowResponse>;
    /**
     * 更新号码的加密公钥。
     */
    UpdatePhoneEncryptionPublicKey(query: UpdatePhoneEncryptionPublicKeyRequest): Promise<UpdatePhoneEncryptionPublicKeyResponse>;
    /**
     * 根据嵌入式得到的Code获取授权权限。
     */
    GetPermissionByCode(query: GetPermissionByCodeRequest): Promise<GetPermissionByCodeResponse>;
    /**
     * 使用JSON更新Flow内容。
     */
    UpdateFlowJSONAsset(query: UpdateFlowJSONAssetRequest): Promise<UpdateFlowJSONAssetResponse>;
    /**
     * 获取号码的加密公钥。
     */
    GetPhoneEncryptionPublicKey(query: GetPhoneEncryptionPublicKeyRequest): Promise<GetPhoneEncryptionPublicKeyResponse>;
    /**
     * 删除Flow（只有在DRAFT状态的Flow才允许删除）。
     */
    DeleteFlow(query: DeleteFlowRequest): Promise<DeleteFlowResponse>;
    /**
     * 查询Flow列表。
     */
    ListFlow(query: ListFlowRequest): Promise<ListFlowResponse>;
    /**
     * 修改Flow基础信息。
     */
    ModifyFlow(query: ModifyFlowRequest): Promise<ModifyFlowResponse>;
    /**
     * 创建Flow。
     */
    CreateFlow(query: CreateFlowRequest): Promise<CreateFlowResponse>;
    /**
     * 删除消息二维码。
     */
    DeletePhoneMessageQrdl(query: DeletePhoneMessageQrdlRequest): Promise<DeletePhoneMessageQrdlResponse>;
    /**
     * 查询消息二维码列表数据。
     */
    ListPhoneMessageQrdl(query: ListPhoneMessageQrdlRequest): Promise<ListPhoneMessageQrdlResponse>;
    /**
     * 创建消息二维码。
     */
    CreatePhoneMessageQrdl(query: CreatePhoneMessageQrdlRequest): Promise<CreatePhoneMessageQrdlResponse>;
    /**
     * 修改消息二维码。
     */
    UpdatePhoneMessageQrdl(query: UpdatePhoneMessageQrdlRequest): Promise<UpdatePhoneMessageQrdlResponse>;
}
export default CAMS;
