import { AddShortUrlRequest } from "./AddShortUrl/req";
import { AddShortUrlResponse } from "./AddShortUrl/res";
import { AddSmsSignRequest } from "./AddSmsSign/req";
import { AddSmsSignResponse } from "./AddSmsSign/res";
import { AddSmsTemplateRequest } from "./AddSmsTemplate/req";
import { AddSmsTemplateResponse } from "./AddSmsTemplate/res";
import { DeleteShortUrlRequest } from "./DeleteShortUrl/req";
import { DeleteShortUrlResponse } from "./DeleteShortUrl/res";
import { DeleteSmsSignRequest } from "./DeleteSmsSign/req";
import { DeleteSmsSignResponse } from "./DeleteSmsSign/res";
import { DeleteSmsTemplateRequest } from "./DeleteSmsTemplate/req";
import { DeleteSmsTemplateResponse } from "./DeleteSmsTemplate/res";
import { ModifySmsSignRequest } from "./ModifySmsSign/req";
import { ModifySmsSignResponse } from "./ModifySmsSign/res";
import { QuerySendDetailsRequest } from "./QuerySendDetails/req";
import { QuerySendDetailsResponse } from "./QuerySendDetails/res";
import { ModifySmsTemplateRequest } from "./ModifySmsTemplate/req";
import { ModifySmsTemplateResponse } from "./ModifySmsTemplate/res";
import { QueryShortUrlRequest } from "./QueryShortUrl/req";
import { QueryShortUrlResponse } from "./QueryShortUrl/res";
import { QuerySmsSignRequest } from "./QuerySmsSign/req";
import { QuerySmsSignResponse } from "./QuerySmsSign/res";
import { QuerySmsTemplateRequest } from "./QuerySmsTemplate/req";
import { QuerySmsTemplateResponse } from "./QuerySmsTemplate/res";
import { SendBatchSmsRequest } from "./SendBatchSms/req";
import { SendBatchSmsResponse } from "./SendBatchSms/res";
import { SendSmsRequest } from "./SendSms/req";
import { SendSmsResponse } from "./SendSms/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { CreateCardSmsTemplateRequest } from "./CreateCardSmsTemplate/req";
import { CreateCardSmsTemplateResponse } from "./CreateCardSmsTemplate/res";
import { GetMediaResourceIdRequest } from "./GetMediaResourceId/req";
import { GetMediaResourceIdResponse } from "./GetMediaResourceId/res";
import { GetOSSInfoForCardTemplateRequest } from "./GetOSSInfoForCardTemplate/req";
import { GetOSSInfoForCardTemplateResponse } from "./GetOSSInfoForCardTemplate/res";
import { QueryCardSmsTemplateRequest } from "./QueryCardSmsTemplate/req";
import { QueryCardSmsTemplateResponse } from "./QueryCardSmsTemplate/res";
import { SendCardSmsRequest } from "./SendCardSms/req";
import { SendCardSmsResponse } from "./SendCardSms/res";
import { QueryCardSmsTemplateReportRequest } from "./QueryCardSmsTemplateReport/req";
import { QueryCardSmsTemplateReportResponse } from "./QueryCardSmsTemplateReport/res";
import { QuerySendStatisticsRequest } from "./QuerySendStatistics/req";
import { QuerySendStatisticsResponse } from "./QuerySendStatistics/res";
import { QuerySmsSignListRequest } from "./QuerySmsSignList/req";
import { QuerySmsSignListResponse } from "./QuerySmsSignList/res";
import { QuerySmsTemplateListRequest } from "./QuerySmsTemplateList/req";
import { QuerySmsTemplateListResponse } from "./QuerySmsTemplateList/res";
import { GetCardSmsLinkRequest } from "./GetCardSmsLink/req";
import { GetCardSmsLinkResponse } from "./GetCardSmsLink/res";
import { CheckMobilesCardSupportRequest } from "./CheckMobilesCardSupport/req";
import { CheckMobilesCardSupportResponse } from "./CheckMobilesCardSupport/res";
import { SendBatchCardSmsRequest } from "./SendBatchCardSms/req";
import { SendBatchCardSmsResponse } from "./SendBatchCardSms/res";
import { QueryMobilesCardSupportRequest } from "./QueryMobilesCardSupport/req";
import { QueryMobilesCardSupportResponse } from "./QueryMobilesCardSupport/res";
import { SmsConversionIntlRequest } from "./SmsConversionIntl/req";
import { SmsConversionIntlResponse } from "./SmsConversionIntl/res";
import { ConversionDataIntlRequest } from "./ConversionDataIntl/req";
import { ConversionDataIntlResponse } from "./ConversionDataIntl/res";
import { GetSmsSignRequest } from "./GetSmsSign/req";
import { GetSmsSignResponse } from "./GetSmsSign/res";
import { CreateSmsSignRequest } from "./CreateSmsSign/req";
import { CreateSmsSignResponse } from "./CreateSmsSign/res";
import { UpdateSmsSignRequest } from "./UpdateSmsSign/req";
import { UpdateSmsSignResponse } from "./UpdateSmsSign/res";
import { GetSmsTemplateRequest } from "./GetSmsTemplate/req";
import { GetSmsTemplateResponse } from "./GetSmsTemplate/res";
import { CreateSmsTemplateRequest } from "./CreateSmsTemplate/req";
import { CreateSmsTemplateResponse } from "./CreateSmsTemplate/res";
import { UpdateSmsTemplateRequest } from "./UpdateSmsTemplate/req";
import { UpdateSmsTemplateResponse } from "./UpdateSmsTemplate/res";
import { GetOSSInfoForUploadFileRequest } from "./GetOSSInfoForUploadFile/req";
import { GetOSSInfoForUploadFileResponse } from "./GetOSSInfoForUploadFile/res";

interface DYSMSAPI {
    /**
     * 创建短链。
     */
    AddShortUrl(query: AddShortUrlRequest): Promise<AddShortUrlResponse>;
    /**
     * 短信签名作为短信发送方的一种标识，发送短信前，您需要先申请签名和模板，系统会将已审核通过的短信签名添加到短信内容的开头，并与短信内容一起发送给接收方。
     */
    AddSmsSign(query: AddSmsSignRequest): Promise<AddSmsSignResponse>;
    /**
     * 短信模板即接收方收到短信的详细内容，包括变量和模板内容。您可以根据业务需要，申请验证码、通知短信或推广短信，模板审核通过后才可以发送短信。
     */
    AddSmsTemplate(query: AddSmsTemplateRequest): Promise<AddSmsTemplateResponse>;
    /**
     * 删除短链，删除后短链将无法使用，无法还原为原链。
     */
    DeleteShortUrl(query: DeleteShortUrlRequest): Promise<DeleteShortUrlResponse>;
    /**
     * 删除签名后您将不能使用此签名继续发送短信。
     */
    DeleteSmsSign(query: DeleteSmsSignRequest): Promise<DeleteSmsSignResponse>;
    /**
     * 如果您不再使用某个短信模板，需要删除模板时，调用此接口或在短信服务控制台删除短信模板。
     */
    DeleteSmsTemplate(query: DeleteSmsTemplateRequest): Promise<DeleteSmsTemplateResponse>;
    /**
     * 修改短信签名后需要重新提交审核，审核中的签名不支持修改。
     */
    ModifySmsSign(query: ModifySmsSignRequest): Promise<ModifySmsSignResponse>;
    /**
     * 查询单个号码的短信发送记录和发送状态等信息。
     */
    QuerySendDetails(query: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse>;
    /**
     * 修改未通过审核的模板，修改后请重新提交审核。
     */
    ModifySmsTemplate(query: ModifySmsTemplateRequest): Promise<ModifySmsTemplateResponse>;
    /**
     * 查询短链状态，可判断短链是否可用。
     */
    QueryShortUrl(query: QueryShortUrlRequest): Promise<QueryShortUrlResponse>;
    /**
     * 查询短信签名审核进度。一般情况下，签名提交后，阿里云预计在2个小时内审核完成（审核工作时间：周一至周日9:00~21:00，法定节假日顺延），建议您尽量在18:00前提交申请。
     */
    QuerySmsSign(query: QuerySmsSignRequest): Promise<QuerySmsSignResponse>;
    /**
     * 申请模板后，通过此接口查询模板审核详情。
     */
    QuerySmsTemplate(query: QuerySmsTemplateRequest): Promise<QuerySmsTemplateResponse>;
    /**
     * 批量发送短信，支持多个号码，多个签名，模板只能用一个。
     */
    SendBatchSms(query: SendBatchSmsRequest): Promise<SendBatchSmsResponse>;
    /**
     * 发送前请申请短信签名和短信模板，并确保签名和模板已审核通过。
     */
    SendSms(query: SendSmsRequest): Promise<SendSmsResponse>;
    /**
     * 查询模板标签。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 给模板添加标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 删除模板标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 创建卡片短信模板。
     */
    CreateCardSmsTemplate(query: CreateCardSmsTemplateRequest): Promise<CreateCardSmsTemplateResponse>;
    /**
     * 将用户上传到卡片短信OSS存储的图片、视频转换成（生成）资源数据统一管理，并返回资源ID，用户可以对返回的资源ID自行管理。
     */
    GetMediaResourceId(query: GetMediaResourceIdRequest): Promise<GetMediaResourceIdResponse>;
    /**
     * 获取卡片短信所属OSS资源配置信息，此配置信息将用于后续OSS文件上传操作。
     */
    GetOSSInfoForCardTemplate(query: GetOSSInfoForCardTemplateRequest): Promise<GetOSSInfoForCardTemplateResponse>;
    /**
     * 查询模板审核状态。
     */
    QueryCardSmsTemplate(query: QueryCardSmsTemplateRequest): Promise<QueryCardSmsTemplateResponse>;
    /**
     * 发送卡片短信。
     */
    SendCardSms(query: SendCardSmsRequest): Promise<SendCardSmsResponse>;
    /**
     * 查询卡片短信发送详情。
     */
    QueryCardSmsTemplateReport(query: QueryCardSmsTemplateReportRequest): Promise<QueryCardSmsTemplateReportResponse>;
    /**
     * 查询短信发送统计详情，包括短信发送时间、短信发送成功条数、接收回执条数等。
     */
    QuerySendStatistics(query: QuerySendStatisticsRequest): Promise<QuerySendStatisticsResponse>;
    /**
     * 查询短信签名列表详情，分页获取短信签名列表。
     */
    QuerySmsSignList(query: QuerySmsSignListRequest): Promise<QuerySmsSignListResponse>;
    /**
     * 可以通过此接口可以查询您账号下的所有模板，方便您查看模板详情，包括模板审核状态、模板类型、模板内容等。
     */
    QuerySmsTemplateList(query: QuerySmsTemplateListRequest): Promise<QuerySmsTemplateListResponse>;
    /**
     * 获取卡片短信短链。
     */
    GetCardSmsLink(query: GetCardSmsLinkRequest): Promise<GetCardSmsLinkResponse>;
    /**
     * 检查手机号码是否支持卡片短信。
     */
    CheckMobilesCardSupport(query: CheckMobilesCardSupportRequest): Promise<CheckMobilesCardSupportResponse>;
    /**
     * 批量发送卡片短信。
     */
    SendBatchCardSms(query: SendBatchCardSmsRequest): Promise<SendBatchCardSmsResponse>;
    /**
     * 查询手机号是否支持卡片短信。
     */
    QueryMobilesCardSupport(query: QueryMobilesCardSupportRequest): Promise<QueryMobilesCardSupportResponse>;
    /**
     * 将每一条消息ID(MessageId) 对应短信的接收情况反馈给阿里云国际短信平台。
     */
    SmsConversionIntl(query: SmsConversionIntlRequest): Promise<SmsConversionIntlResponse>;
    /**
     * 将短信转化率统计数据反馈给阿里云短信平台。
     */
    ConversionDataIntl(query: ConversionDataIntlRequest): Promise<ConversionDataIntlResponse>;
    /**
     * 申请签名后，通过此接口查询签名审核详情。
     */
    GetSmsSign(query: GetSmsSignRequest): Promise<GetSmsSignResponse>;
    /**
     * 短信签名作为短信发送方的一种标识，发送短信前，您需要先申请签名和模板，系统会将已审核通过的短信签名添加到短信内容的开头，并与短信内容一起发送给接收方。
     */
    CreateSmsSign(query: CreateSmsSignRequest): Promise<CreateSmsSignResponse>;
    /**
     * 修改未通过审核的签名，修改后请重新提交审核。
     */
    UpdateSmsSign(query: UpdateSmsSignRequest): Promise<UpdateSmsSignResponse>;
    /**
     * 申请模板后，通过此接口查询模板审核详情，可查看模板审核状态。
     */
    GetSmsTemplate(query: GetSmsTemplateRequest): Promise<GetSmsTemplateResponse>;
    /**
     * 短信模板即接收方收到短信的详细内容，包括变量和模板内容。您可以根据业务需要，申请验证码、通知短信或推广短信，模板审核通过后才可以发送短信。
     */
    CreateSmsTemplate(query: CreateSmsTemplateRequest): Promise<CreateSmsTemplateResponse>;
    /**
     * 修改未通过审核的模板，修改后请重新提交审核。
     */
    UpdateSmsTemplate(query: UpdateSmsTemplateRequest): Promise<UpdateSmsTemplateResponse>;
    /**
     * 获取OSS资源配置信息，此配置信息将用于后续OSS文件上传操作。
     */
    GetOSSInfoForUploadFile(query: GetOSSInfoForUploadFileRequest): Promise<GetOSSInfoForUploadFileResponse>;
}
export default DYSMSAPI;
