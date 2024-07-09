import { CloseIntentionForPartnerRequest } from "./CloseIntentionForPartner/req";
import { CloseIntentionForPartnerResponse } from "./CloseIntentionForPartner/res";
import { CloseUserIntentionRequest } from "./CloseUserIntention/req";
import { CloseUserIntentionResponse } from "./CloseUserIntention/res";
import { CreateBusinessOpportunityRequest } from "./CreateBusinessOpportunity/req";
import { CreateBusinessOpportunityResponse } from "./CreateBusinessOpportunity/res";
import { CreateProduceForPartnerRequest } from "./CreateProduceForPartner/req";
import { CreateProduceForPartnerResponse } from "./CreateProduceForPartner/res";
import { DescribePartnerConfigRequest } from "./DescribePartnerConfig/req";
import { DescribePartnerConfigResponse } from "./DescribePartnerConfig/res";
import { GenerateUploadFilePolicyRequest } from "./GenerateUploadFilePolicy/req";
import { GenerateUploadFilePolicyResponse } from "./GenerateUploadFilePolicy/res";
import { GetAlipayUrlRequest } from "./GetAlipayUrl/req";
import { GetAlipayUrlResponse } from "./GetAlipayUrl/res";
import { ListIntentionNoteRequest } from "./ListIntentionNote/req";
import { ListIntentionNoteResponse } from "./ListIntentionNote/res";
import { ListUserDetailSolutionsRequest } from "./ListUserDetailSolutions/req";
import { ListUserDetailSolutionsResponse } from "./ListUserDetailSolutions/res";
import { ListUserIntentionNotesRequest } from "./ListUserIntentionNotes/req";
import { ListUserIntentionNotesResponse } from "./ListUserIntentionNotes/res";
import { ListUserIntentionsRequest } from "./ListUserIntentions/req";
import { ListUserIntentionsResponse } from "./ListUserIntentions/res";
import { ListUserProduceOperateLogsRequest } from "./ListUserProduceOperateLogs/req";
import { ListUserProduceOperateLogsResponse } from "./ListUserProduceOperateLogs/res";
import { ListUserSolutionsRequest } from "./ListUserSolutions/req";
import { ListUserSolutionsResponse } from "./ListUserSolutions/res";
import { OperateProduceForPartnerRequest } from "./OperateProduceForPartner/req";
import { OperateProduceForPartnerResponse } from "./OperateProduceForPartner/res";
import { PutMeasureDataRequest } from "./PutMeasureData/req";
import { PutMeasureDataResponse } from "./PutMeasureData/res";
import { PutMeasureReadyFlagRequest } from "./PutMeasureReadyFlag/req";
import { PutMeasureReadyFlagResponse } from "./PutMeasureReadyFlag/res";
import { QueryBagRemainingRequest } from "./QueryBagRemaining/req";
import { QueryBagRemainingResponse } from "./QueryBagRemaining/res";
import { QueryInstanceRequest } from "./QueryInstance/req";
import { QueryInstanceResponse } from "./QueryInstance/res";
import { QueryUserNeedAuthRequest } from "./QueryUserNeedAuth/req";
import { QueryUserNeedAuthResponse } from "./QueryUserNeedAuth/res";
import { RejectUserSolutionRequest } from "./RejectUserSolution/req";
import { RejectUserSolutionResponse } from "./RejectUserSolution/res";
import { RejectSolutionRequest } from "./RejectSolution/req";
import { RejectSolutionResponse } from "./RejectSolution/res";
import { SubmitIntentionNoteRequest } from "./SubmitIntentionNote/req";
import { SubmitIntentionNoteResponse } from "./SubmitIntentionNote/res";
import { SubmitSolutionRequest } from "./SubmitSolution/req";
import { SubmitSolutionResponse } from "./SubmitSolution/res";
import { BindProduceAuthorizationRequest } from "./BindProduceAuthorization/req";
import { BindProduceAuthorizationResponse } from "./BindProduceAuthorization/res";
import { ListProduceAuthorizationRequest } from "./ListProduceAuthorization/req";
import { ListProduceAuthorizationResponse } from "./ListProduceAuthorization/res";
import { ReleaseProduceAuthorizationRequest } from "./ReleaseProduceAuthorization/req";
import { ReleaseProduceAuthorizationResponse } from "./ReleaseProduceAuthorization/res";
import { StartBackToBackCallRequest } from "./StartBackToBackCall/req";
import { StartBackToBackCallResponse } from "./StartBackToBackCall/res";
import { QueryAvailableNumbersRequest } from "./QueryAvailableNumbers/req";
import { QueryAvailableNumbersResponse } from "./QueryAvailableNumbers/res";
import { QueryPartnerIntentionListRequest } from "./QueryPartnerIntentionList/req";
import { QueryPartnerIntentionListResponse } from "./QueryPartnerIntentionList/res";
import { QueryPartnerProduceListRequest } from "./QueryPartnerProduceList/req";
import { QueryPartnerProduceListResponse } from "./QueryPartnerProduceList/res";
import { TransferIntentionOwnerRequest } from "./TransferIntentionOwner/req";
import { TransferIntentionOwnerResponse } from "./TransferIntentionOwner/res";
import { TransferProduceOwnerRequest } from "./TransferProduceOwner/req";
import { TransferProduceOwnerResponse } from "./TransferProduceOwner/res";
import { RecordPostBackRequest } from "./RecordPostBack/req";
import { RecordPostBackResponse } from "./RecordPostBack/res";

interface COMPANYREG {
    /**
     * 服务商关闭需求。
     */
    CloseIntentionForPartner(query: CloseIntentionForPartnerRequest): Promise<CloseIntentionForPartnerResponse>;
    /**
     * 用户关闭需求。
     */
    CloseUserIntention(query: CloseUserIntentionRequest): Promise<CloseUserIntentionResponse>;
    /**
     * 新建商机。
     */
    CreateBusinessOpportunity(query: CreateBusinessOpportunityRequest): Promise<CreateBusinessOpportunityResponse>;
    /**
     * 服务商创建交付单。
     */
    CreateProduceForPartner(query: CreateProduceForPartnerRequest): Promise<CreateProduceForPartnerResponse>;
    /**
     * 用户查询服务商配置信息。
     */
    DescribePartnerConfig(query: DescribePartnerConfigRequest): Promise<DescribePartnerConfigResponse>;
    /**
     * 获取上传文件临时链接。
     */
    GenerateUploadFilePolicy(query: GenerateUploadFilePolicyRequest): Promise<GenerateUploadFilePolicyResponse>;
    /**
     * 获取订单的支付宝支付链接。
     */
    GetAlipayUrl(query: GetAlipayUrlRequest): Promise<GetAlipayUrlResponse>;
    /**
     * 查询需求小记。
     */
    ListIntentionNote(query: ListIntentionNoteRequest): Promise<ListIntentionNoteResponse>;
    /**
     * 用户查询方案详情。
     */
    ListUserDetailSolutions(query: ListUserDetailSolutionsRequest): Promise<ListUserDetailSolutionsResponse>;
    /**
     * 用户查询需求小记。
     */
    ListUserIntentionNotes(query: ListUserIntentionNotesRequest): Promise<ListUserIntentionNotesResponse>;
    /**
     * 查询用户需求单列表。
     */
    ListUserIntentions(query: ListUserIntentionsRequest): Promise<ListUserIntentionsResponse>;
    /**
     * 用户查询交付单操作日志。
     */
    ListUserProduceOperateLogs(query: ListUserProduceOperateLogsRequest): Promise<ListUserProduceOperateLogsResponse>;
    /**
     * 查询方案列表。
     */
    ListUserSolutions(query: ListUserSolutionsRequest): Promise<ListUserSolutionsResponse>;
    /**
     * 服务商操作交付单。
     */
    OperateProduceForPartner(query: OperateProduceForPartnerRequest): Promise<OperateProduceForPartnerResponse>;
    /**
     * 推送计量数据。
     */
    PutMeasureData(query: PutMeasureDataRequest): Promise<PutMeasureDataResponse>;
    /**
     * 推送计量标记。
     */
    PutMeasureReadyFlag(query: PutMeasureReadyFlagRequest): Promise<PutMeasureReadyFlagResponse>;
    /**
     * 查询资源包剩余量。
     */
    QueryBagRemaining(query: QueryBagRemainingRequest): Promise<QueryBagRemainingResponse>;
    /**
     * 查询凌霄订单实例。
     */
    QueryInstance(query: QueryInstanceRequest): Promise<QueryInstanceResponse>;
    /**
     * 是否需要实名认证。
     */
    QueryUserNeedAuth(query: QueryUserNeedAuthRequest): Promise<QueryUserNeedAuthResponse>;
    /**
     * 用户驳回方案。
     */
    RejectUserSolution(query: RejectUserSolutionRequest): Promise<RejectUserSolutionResponse>;
    /**
     * 驳回方案。
     */
    RejectSolution(query: RejectSolutionRequest): Promise<RejectSolutionResponse>;
    /**
     * 提交需求小记。
     */
    SubmitIntentionNote(query: SubmitIntentionNoteRequest): Promise<SubmitIntentionNoteResponse>;
    /**
     * 提交方案。
     */
    SubmitSolution(query: SubmitSolutionRequest): Promise<SubmitSolutionResponse>;
    /**
     * 交付单新增授权（批量）。
     */
    BindProduceAuthorization(query: BindProduceAuthorizationRequest): Promise<BindProduceAuthorizationResponse>;
    /**
     * 交付单授权记录列表。
     */
    ListProduceAuthorization(query: ListProduceAuthorizationRequest): Promise<ListProduceAuthorizationResponse>;
    /**
     * 交付单解绑授权。
     */
    ReleaseProduceAuthorization(query: ReleaseProduceAuthorizationRequest): Promise<ReleaseProduceAuthorizationResponse>;
    /**
     * 发起双呼。
     */
    StartBackToBackCall(query: StartBackToBackCallRequest): Promise<StartBackToBackCallResponse>;
    /**
     * 查询可用的外呼号码列表。
     */
    QueryAvailableNumbers(query: QueryAvailableNumbersRequest): Promise<QueryAvailableNumbersResponse>;
    /**
     * 服务商查询需求单列表。
     */
    QueryPartnerIntentionList(query: QueryPartnerIntentionListRequest): Promise<QueryPartnerIntentionListResponse>;
    /**
     * 服务商查询交付单列表。
     */
    QueryPartnerProduceList(query: QueryPartnerProduceListRequest): Promise<QueryPartnerProduceListResponse>;
    /**
     * 需求单转派小二。
     */
    TransferIntentionOwner(query: TransferIntentionOwnerRequest): Promise<TransferIntentionOwnerResponse>;
    /**
     * 服务单转派小二。
     */
    TransferProduceOwner(query: TransferProduceOwnerRequest): Promise<TransferProduceOwnerResponse>;
    /**
     * 调用该接口，可将玄坛服务单或需求单的沟通记录回传至玄坛，可在玄坛进行查看，未跟进状态的订单会转为跟进中。
     */
    RecordPostBack(query: RecordPostBackRequest): Promise<RecordPostBackResponse>;
}
export default COMPANYREG;
