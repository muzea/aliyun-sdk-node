import { CheckDomainRequest } from "./CheckDomain/req";
import { CheckDomainResponse } from "./CheckDomain/res";
import { CreateDomainRequest } from "./CreateDomain/req";
import { CreateDomainResponse } from "./CreateDomain/res";
import { ApproveReplyMailAddressRequest } from "./ApproveReplyMailAddress/req";
import { ApproveReplyMailAddressResponse } from "./ApproveReplyMailAddress/res";
import { CreateMailAddressRequest } from "./CreateMailAddress/req";
import { CreateMailAddressResponse } from "./CreateMailAddress/res";
import { DeleteMailAddressRequest } from "./DeleteMailAddress/req";
import { DeleteMailAddressResponse } from "./DeleteMailAddress/res";
import { CreateReceiverRequest } from "./CreateReceiver/req";
import { CreateReceiverResponse } from "./CreateReceiver/res";
import { DeleteReceiverDetailRequest } from "./DeleteReceiverDetail/req";
import { DeleteReceiverDetailResponse } from "./DeleteReceiverDetail/res";
import { DeleteReceiverRequest } from "./DeleteReceiver/req";
import { DeleteReceiverResponse } from "./DeleteReceiver/res";
import { DeleteTagRequest } from "./DeleteTag/req";
import { DeleteTagResponse } from "./DeleteTag/res";
import { AddIpfilterRequest } from "./AddIpfilter/req";
import { AddIpfilterResponse } from "./AddIpfilter/res";
import { BatchSendMailRequest } from "./BatchSendMail/req";
import { BatchSendMailResponse } from "./BatchSendMail/res";
import { CheckReplyToMailAddressRequest } from "./CheckReplyToMailAddress/req";
import { CheckReplyToMailAddressResponse } from "./CheckReplyToMailAddress/res";
import { CreateTagRequest } from "./CreateTag/req";
import { CreateTagResponse } from "./CreateTag/res";
import { DeleteDomainRequest } from "./DeleteDomain/req";
import { DeleteDomainResponse } from "./DeleteDomain/res";
import { DeleteInvalidAddressRequest } from "./DeleteInvalidAddress/req";
import { DeleteInvalidAddressResponse } from "./DeleteInvalidAddress/res";
import { DeleteIpfilterByEdmIdRequest } from "./DeleteIpfilterByEdmId/req";
import { DeleteIpfilterByEdmIdResponse } from "./DeleteIpfilterByEdmId/res";
import { DescAccountSummaryRequest } from "./DescAccountSummary/req";
import { DescAccountSummaryResponse } from "./DescAccountSummary/res";
import { DescDomainRequest } from "./DescDomain/req";
import { DescDomainResponse } from "./DescDomain/res";
import { GetIpProtectionRequest } from "./GetIpProtection/req";
import { GetIpProtectionResponse } from "./GetIpProtection/res";
import { GetIpfilterListRequest } from "./GetIpfilterList/req";
import { GetIpfilterListResponse } from "./GetIpfilterList/res";
import { GetTrackListRequest } from "./GetTrackList/req";
import { GetTrackListResponse } from "./GetTrackList/res";
import { GetTrackListByMailFromAndTagNameRequest } from "./GetTrackListByMailFromAndTagName/req";
import { GetTrackListByMailFromAndTagNameResponse } from "./GetTrackListByMailFromAndTagName/res";
import { ModifyMailAddressRequest } from "./ModifyMailAddress/req";
import { ModifyMailAddressResponse } from "./ModifyMailAddress/res";
import { ModifyPWByDomainRequest } from "./ModifyPWByDomain/req";
import { ModifyPWByDomainResponse } from "./ModifyPWByDomain/res";
import { ModifyTagRequest } from "./ModifyTag/req";
import { ModifyTagResponse } from "./ModifyTag/res";
import { QueryDomainByParamRequest } from "./QueryDomainByParam/req";
import { QueryDomainByParamResponse } from "./QueryDomainByParam/res";
import { QueryInvalidAddressRequest } from "./QueryInvalidAddress/req";
import { QueryInvalidAddressResponse } from "./QueryInvalidAddress/res";
import { QueryReceiverByParamRequest } from "./QueryReceiverByParam/req";
import { QueryReceiverByParamResponse } from "./QueryReceiverByParam/res";
import { QueryReceiverDetailRequest } from "./QueryReceiverDetail/req";
import { QueryReceiverDetailResponse } from "./QueryReceiverDetail/res";
import { QueryTagByParamRequest } from "./QueryTagByParam/req";
import { QueryTagByParamResponse } from "./QueryTagByParam/res";
import { QueryTaskByParamRequest } from "./QueryTaskByParam/req";
import { QueryTaskByParamResponse } from "./QueryTaskByParam/res";
import { SaveReceiverDetailRequest } from "./SaveReceiverDetail/req";
import { SaveReceiverDetailResponse } from "./SaveReceiverDetail/res";
import { SendTestByTemplateRequest } from "./SendTestByTemplate/req";
import { SendTestByTemplateResponse } from "./SendTestByTemplate/res";
import { SenderStatisticsByTagNameAndBatchIDRequest } from "./SenderStatisticsByTagNameAndBatchID/req";
import { SenderStatisticsByTagNameAndBatchIDResponse } from "./SenderStatisticsByTagNameAndBatchID/res";
import { SenderStatisticsDetailByParamRequest } from "./SenderStatisticsDetailByParam/req";
import { SenderStatisticsDetailByParamResponse } from "./SenderStatisticsDetailByParam/res";
import { SingleSendMailRequest } from "./SingleSendMail/req";
import { SingleSendMailResponse } from "./SingleSendMail/res";
import { UpdateIpProtectionRequest } from "./UpdateIpProtection/req";
import { UpdateIpProtectionResponse } from "./UpdateIpProtection/res";
import { QueryMailAddressByParamRequest } from "./QueryMailAddressByParam/req";
import { QueryMailAddressByParamResponse } from "./QueryMailAddressByParam/res";
import { ListUserSuppressionRequest } from "./ListUserSuppression/req";
import { ListUserSuppressionResponse } from "./ListUserSuppression/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";

interface DM {
    /**
     * 调用CheckDomain验证域名。
     */
    CheckDomain(query: CheckDomainRequest): Promise<CheckDomainResponse>;
    /**
     * 调用CreateDomain创建域名。
     */
    CreateDomain(query: CreateDomainRequest): Promise<CreateDomainResponse>;
    /**
     * 调用ApproveReplyMailAddress验证回信地址。
     */
    ApproveReplyMailAddress(query: ApproveReplyMailAddressRequest): Promise<ApproveReplyMailAddressResponse>;
    /**
     * 调用CreateMailAddress创建发信地址。
     */
    CreateMailAddress(query: CreateMailAddressRequest): Promise<CreateMailAddressResponse>;
    /**
     * 调用DeleteMailAddress删除发信地址。
     */
    DeleteMailAddress(query: DeleteMailAddressRequest): Promise<DeleteMailAddressResponse>;
    /**
     * 调用CreateReceiver创建收件人列表。
     */
    CreateReceiver(query: CreateReceiverRequest): Promise<CreateReceiverResponse>;
    /**
     * 删除单个收件人。
     */
    DeleteReceiverDetail(query: DeleteReceiverDetailRequest): Promise<DeleteReceiverDetailResponse>;
    /**
     * 调用DeleteReceiver删除收件人列表。
     */
    DeleteReceiver(query: DeleteReceiverRequest): Promise<DeleteReceiverResponse>;
    /**
     * 调用DeleteTag删除标签。
     */
    DeleteTag(query: DeleteTagRequest): Promise<DeleteTagResponse>;
    /**
     * 添加IP白名单。
     */
    AddIpfilter(query: AddIpfilterRequest): Promise<AddIpfilterResponse>;
    /**
     * 批量发送邮件。
     */
    BatchSendMail(query: BatchSendMailRequest): Promise<BatchSendMailResponse>;
    /**
     * 调用CheckReplyToMailAddress验证回信地址发送邮件。
     */
    CheckReplyToMailAddress(query: CheckReplyToMailAddressRequest): Promise<CheckReplyToMailAddressResponse>;
    /**
     * 创建标签。
     */
    CreateTag(query: CreateTagRequest): Promise<CreateTagResponse>;
    /**
     * 删除域名。
     */
    DeleteDomain(query: DeleteDomainRequest): Promise<DeleteDomainResponse>;
    /**
     * 从全局无效地址库移除无效地址
     */
    DeleteInvalidAddress(query: DeleteInvalidAddressRequest): Promise<DeleteInvalidAddressResponse>;
    /**
     * 删除IP保护信息。
     */
    DeleteIpfilterByEdmId(query: DeleteIpfilterByEdmIdRequest): Promise<DeleteIpfilterByEdmIdResponse>;
    /**
     * 获取账户信息。
     */
    DescAccountSummary(query: DescAccountSummaryRequest): Promise<DescAccountSummaryResponse>;
    /**
     * 调用DescDomain配置域名。
     */
    DescDomain(query: DescDomainRequest): Promise<DescDomainResponse>;
    /**
     * 调用GetIpProtection获取IP防护功能是否开启。
     */
    GetIpProtection(query: GetIpProtectionRequest): Promise<GetIpProtectionResponse>;
    /**
     * 调用GetIpfilterList获取 IP 筛选器列表。
     */
    GetIpfilterList(query: GetIpfilterListRequest): Promise<GetIpfilterListResponse>;
    /**
     * 邮件跟踪获取发送数据。
     */
    GetTrackList(query: GetTrackListRequest): Promise<GetTrackListResponse>;
    /**
     * 调用GetTrackListByMailFromAndTagName邮件跟踪获取指定条件下的发送数据。
     */
    GetTrackListByMailFromAndTagName(query: GetTrackListByMailFromAndTagNameRequest): Promise<GetTrackListByMailFromAndTagNameResponse>;
    /**
     * 调用ModifyMailAddress设置发信地址smtp密码。
     */
    ModifyMailAddress(query: ModifyMailAddressRequest): Promise<ModifyMailAddressResponse>;
    /**
     * 设置域名的SMTP的密码。
     */
    ModifyPWByDomain(query: ModifyPWByDomainRequest): Promise<ModifyPWByDomainResponse>;
    /**
     * 调用ModifyTag修改标签。
     */
    ModifyTag(query: ModifyTagRequest): Promise<ModifyTagResponse>;
    /**
     * 调用QueryDomainByParam查询域名列表信息。
     */
    QueryDomainByParam(query: QueryDomainByParamRequest): Promise<QueryDomainByParamResponse>;
    /**
     * 调用QueryInvalidAddress获取无效地址信息。
     */
    QueryInvalidAddress(query: QueryInvalidAddressRequest): Promise<QueryInvalidAddressResponse>;
    /**
     * 调用QueryReceiverByParam查询收件人列表。
     */
    QueryReceiverByParam(query: QueryReceiverByParamRequest): Promise<QueryReceiverByParamResponse>;
    /**
     * 调用QueryReceiverDetail查询某个收件人列表详情。
     */
    QueryReceiverDetail(query: QueryReceiverDetailRequest): Promise<QueryReceiverDetailResponse>;
    /**
     * 调用QueryTagByParam获取标签。
     */
    QueryTagByParam(query: QueryTagByParamRequest): Promise<QueryTagByParamResponse>;
    /**
     * 查询任务。
     */
    QueryTaskByParam(query: QueryTaskByParamRequest): Promise<QueryTaskByParamResponse>;
    /**
     * 调用SaveReceiverDetail创建单个收件人。
     */
    SaveReceiverDetail(query: SaveReceiverDetailRequest): Promise<SaveReceiverDetailResponse>;
    /**
     * 调用SendTestByTemplate发送测试邮件。
     */
    SendTestByTemplate(query: SendTestByTemplateRequest): Promise<SendTestByTemplateResponse>;
    /**
     * 调用SenderStatisticsByTagNameAndBatchID获取指定条件下的发送数据。
     */
    SenderStatisticsByTagNameAndBatchID(query: SenderStatisticsByTagNameAndBatchIDRequest): Promise<SenderStatisticsByTagNameAndBatchIDResponse>;
    /**
     * 调用SenderStatisticsDetailByParam获取发送详情。
     */
    SenderStatisticsDetailByParam(query: SenderStatisticsDetailByParamRequest): Promise<SenderStatisticsDetailByParamResponse>;
    /**
     * 发送单条邮件。
     */
    SingleSendMail(query: SingleSendMailRequest): Promise<SingleSendMailResponse>;
    /**
     * 开启或者关闭IP保护功能。
     */
    UpdateIpProtection(query: UpdateIpProtectionRequest): Promise<UpdateIpProtectionResponse>;
    /**
     * 调用QueryMailAddressByParam查询发信地址列表。
     */
    QueryMailAddressByParam(query: QueryMailAddressByParamRequest): Promise<QueryMailAddressByParamResponse>;
    /**
     * 列出用户手动录入和系统判别的无效地址
     */
    ListUserSuppression(query: ListUserSuppressionRequest): Promise<ListUserSuppressionResponse>;
    /**
     * 更新用户相关的信息，包括设置等信息。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 获取用户相关的信息，包含设置等信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
}
export default DM;
