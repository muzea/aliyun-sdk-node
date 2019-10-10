import { QueryDSRecordRequest } from "./QueryDSRecord/req";
import { QueryDSRecordResponse } from "./QueryDSRecord/res";
import { SaveSingleTaskForDisassociatingEnsRequest } from "./SaveSingleTaskForDisassociatingEns/req";
import { SaveSingleTaskForDisassociatingEnsResponse } from "./SaveSingleTaskForDisassociatingEns/res";
import { QueryEnsAssociationRequest } from "./QueryEnsAssociation/req";
import { QueryEnsAssociationResponse } from "./QueryEnsAssociation/res";
import { QueryArtExtensionRequest } from "./QueryArtExtension/req";
import { QueryArtExtensionResponse } from "./QueryArtExtension/res";
import { SaveSingleTaskForSaveArtExtensionRequest } from "./SaveSingleTaskForSaveArtExtension/req";
import { SaveSingleTaskForSaveArtExtensionResponse } from "./SaveSingleTaskForSaveArtExtension/res";
import { SaveSingleTaskForAssociatingEnsRequest } from "./SaveSingleTaskForAssociatingEns/req";
import { SaveSingleTaskForAssociatingEnsResponse } from "./SaveSingleTaskForAssociatingEns/res";
import { SaveSingleTaskForModifyingDSRecordRequest } from "./SaveSingleTaskForModifyingDSRecord/req";
import { SaveSingleTaskForModifyingDSRecordResponse } from "./SaveSingleTaskForModifyingDSRecord/res";
import { QueryLocalEnsAssociationRequest } from "./QueryLocalEnsAssociation/req";
import { QueryLocalEnsAssociationResponse } from "./QueryLocalEnsAssociation/res";
import { SaveSingleTaskForSynchronizingDSRecordRequest } from "./SaveSingleTaskForSynchronizingDSRecord/req";
import { SaveSingleTaskForSynchronizingDSRecordResponse } from "./SaveSingleTaskForSynchronizingDSRecord/res";
import { SaveSingleTaskForDeletingDSRecordRequest } from "./SaveSingleTaskForDeletingDSRecord/req";
import { SaveSingleTaskForDeletingDSRecordResponse } from "./SaveSingleTaskForDeletingDSRecord/res";
import { UpdateDomainToDomainGroupRequest } from "./UpdateDomainToDomainGroup/req";
import { UpdateDomainToDomainGroupResponse } from "./UpdateDomainToDomainGroup/res";
import { SaveSingleTaskForAddingDSRecordRequest } from "./SaveSingleTaskForAddingDSRecord/req";
import { SaveSingleTaskForAddingDSRecordResponse } from "./SaveSingleTaskForAddingDSRecord/res";
import { TransferInResendMailTokenRequest } from "./TransferInResendMailToken/req";
import { TransferInResendMailTokenResponse } from "./TransferInResendMailToken/res";
import { ScrollDomainListRequest } from "./ScrollDomainList/req";
import { ScrollDomainListResponse } from "./ScrollDomainList/res";
import { SaveDomainGroupRequest } from "./SaveDomainGroup/req";
import { SaveDomainGroupResponse } from "./SaveDomainGroup/res";
import { QueryDomainGroupListRequest } from "./QueryDomainGroupList/req";
import { QueryDomainGroupListResponse } from "./QueryDomainGroupList/res";
import { TransferInReenterTransferAuthorizationCodeRequest } from "./TransferInReenterTransferAuthorizationCode/req";
import { TransferInReenterTransferAuthorizationCodeResponse } from "./TransferInReenterTransferAuthorizationCode/res";
import { VerifyContactFieldRequest } from "./VerifyContactField/req";
import { VerifyContactFieldResponse } from "./VerifyContactField/res";
import { SaveSingleTaskForQueryingTransferAuthorizationCodeRequest } from "./SaveSingleTaskForQueryingTransferAuthorizationCode/req";
import { SaveSingleTaskForQueryingTransferAuthorizationCodeResponse } from "./SaveSingleTaskForQueryingTransferAuthorizationCode/res";
import { DeleteDomainGroupRequest } from "./DeleteDomainGroup/req";
import { DeleteDomainGroupResponse } from "./DeleteDomainGroup/res";
import { TransferInRefetchWhoisEmailRequest } from "./TransferInRefetchWhoisEmail/req";
import { TransferInRefetchWhoisEmailResponse } from "./TransferInRefetchWhoisEmail/res";
import { TransferInCheckMailTokenRequest } from "./TransferInCheckMailToken/req";
import { TransferInCheckMailTokenResponse } from "./TransferInCheckMailToken/res";
import { SaveSingleTaskForCancelingTransferInRequest } from "./SaveSingleTaskForCancelingTransferIn/req";
import { SaveSingleTaskForCancelingTransferInResponse } from "./SaveSingleTaskForCancelingTransferIn/res";
import { SaveSingleTaskForCancelingTransferOutRequest } from "./SaveSingleTaskForCancelingTransferOut/req";
import { SaveSingleTaskForCancelingTransferOutResponse } from "./SaveSingleTaskForCancelingTransferOut/res";
import { SaveSingleTaskForCreatingOrderTransferRequest } from "./SaveSingleTaskForCreatingOrderTransfer/req";
import { SaveSingleTaskForCreatingOrderTransferResponse } from "./SaveSingleTaskForCreatingOrderTransfer/res";
import { QueryTransferOutInfoRequest } from "./QueryTransferOutInfo/req";
import { QueryTransferOutInfoResponse } from "./QueryTransferOutInfo/res";
import { CheckTransferInFeasibilityRequest } from "./CheckTransferInFeasibility/req";
import { CheckTransferInFeasibilityResponse } from "./CheckTransferInFeasibility/res";
import { SaveBatchTaskForCreatingOrderTransferRequest } from "./SaveBatchTaskForCreatingOrderTransfer/req";
import { SaveBatchTaskForCreatingOrderTransferResponse } from "./SaveBatchTaskForCreatingOrderTransfer/res";
import { QueryRegistrantProfileRealNameVerificationInfoRequest } from "./QueryRegistrantProfileRealNameVerificationInfo/req";
import { QueryRegistrantProfileRealNameVerificationInfoResponse } from "./QueryRegistrantProfileRealNameVerificationInfo/res";
import { SaveSingleTaskForApprovingTransferOutRequest } from "./SaveSingleTaskForApprovingTransferOut/req";
import { SaveSingleTaskForApprovingTransferOutResponse } from "./SaveSingleTaskForApprovingTransferOut/res";
import { QueryTransferInByInstanceIdRequest } from "./QueryTransferInByInstanceId/req";
import { QueryTransferInByInstanceIdResponse } from "./QueryTransferInByInstanceId/res";
import { ConfirmTransferInEmailRequest } from "./ConfirmTransferInEmail/req";
import { ConfirmTransferInEmailResponse } from "./ConfirmTransferInEmail/res";
import { PollTaskResultRequest } from "./PollTaskResult/req";
import { PollTaskResultResponse } from "./PollTaskResult/res";
import { AcknowledgeTaskResultRequest } from "./AcknowledgeTaskResult/req";
import { AcknowledgeTaskResultResponse } from "./AcknowledgeTaskResult/res";
import { QueryTransferInListRequest } from "./QueryTransferInList/req";
import { QueryTransferInListResponse } from "./QueryTransferInList/res";
import { BatchFuzzyMatchDomainSensitiveWordRequest } from "./BatchFuzzyMatchDomainSensitiveWord/req";
import { BatchFuzzyMatchDomainSensitiveWordResponse } from "./BatchFuzzyMatchDomainSensitiveWord/res";
import { CancelDomainVerificationRequest } from "./CancelDomainVerification/req";
import { CancelDomainVerificationResponse } from "./CancelDomainVerification/res";
import { CancelQualificationVerificationRequest } from "./CancelQualificationVerification/req";
import { CancelQualificationVerificationResponse } from "./CancelQualificationVerification/res";
import { CheckMaxYearOfServerLockRequest } from "./CheckMaxYearOfServerLock/req";
import { CheckMaxYearOfServerLockResponse } from "./CheckMaxYearOfServerLock/res";
import { CheckProcessingServerLockApplyRequest } from "./CheckProcessingServerLockApply/req";
import { CheckProcessingServerLockApplyResponse } from "./CheckProcessingServerLockApply/res";
import { DeleteEmailVerificationRequest } from "./DeleteEmailVerification/req";
import { DeleteEmailVerificationResponse } from "./DeleteEmailVerification/res";
import { DeleteRegistrantProfileRequest } from "./DeleteRegistrantProfile/req";
import { DeleteRegistrantProfileResponse } from "./DeleteRegistrantProfile/res";
import { EmailVerifiedRequest } from "./EmailVerified/req";
import { EmailVerifiedResponse } from "./EmailVerified/res";
import { ListEmailVerificationRequest } from "./ListEmailVerification/req";
import { ListEmailVerificationResponse } from "./ListEmailVerification/res";
import { LookupTmchNoticeRequest } from "./LookupTmchNotice/req";
import { LookupTmchNoticeResponse } from "./LookupTmchNotice/res";
import { QueryDomainAdminDivisionRequest } from "./QueryDomainAdminDivision/req";
import { QueryDomainAdminDivisionResponse } from "./QueryDomainAdminDivision/res";
import { QueryDomainByInstanceIdRequest } from "./QueryDomainByInstanceId/req";
import { QueryDomainByInstanceIdResponse } from "./QueryDomainByInstanceId/res";
import { QueryDomainSuffixRequest } from "./QueryDomainSuffix/req";
import { QueryDomainSuffixResponse } from "./QueryDomainSuffix/res";
import { QueryEmailVerificationRequest } from "./QueryEmailVerification/req";
import { QueryEmailVerificationResponse } from "./QueryEmailVerification/res";
import { QueryFailingReasonListForQualificationRequest } from "./QueryFailingReasonListForQualification/req";
import { QueryFailingReasonListForQualificationResponse } from "./QueryFailingReasonListForQualification/res";
import { QueryQualificationDetailRequest } from "./QueryQualificationDetail/req";
import { QueryQualificationDetailResponse } from "./QueryQualificationDetail/res";
import { QueryRegistrantProfilesRequest } from "./QueryRegistrantProfiles/req";
import { QueryRegistrantProfilesResponse } from "./QueryRegistrantProfiles/res";
import { QueryServerLockRequest } from "./QueryServerLock/req";
import { QueryServerLockResponse } from "./QueryServerLock/res";
import { QueryTaskDetailHistoryRequest } from "./QueryTaskDetailHistory/req";
import { QueryTaskDetailHistoryResponse } from "./QueryTaskDetailHistory/res";
import { QueryTaskDetailListRequest } from "./QueryTaskDetailList/req";
import { QueryTaskDetailListResponse } from "./QueryTaskDetailList/res";
import { QueryTaskListRequest } from "./QueryTaskList/req";
import { QueryTaskListResponse } from "./QueryTaskList/res";
import { RegistrantProfileRealNameVerificationRequest } from "./RegistrantProfileRealNameVerification/req";
import { RegistrantProfileRealNameVerificationResponse } from "./RegistrantProfileRealNameVerification/res";
import { ResetQualificationVerificationRequest } from "./ResetQualificationVerification/req";
import { ResetQualificationVerificationResponse } from "./ResetQualificationVerification/res";
import { SaveBatchDomainRemarkRequest } from "./SaveBatchDomainRemark/req";
import { SaveBatchDomainRemarkResponse } from "./SaveBatchDomainRemark/res";
import { SaveBatchTaskForCreatingOrderActivateRequest } from "./SaveBatchTaskForCreatingOrderActivate/req";
import { SaveBatchTaskForCreatingOrderActivateResponse } from "./SaveBatchTaskForCreatingOrderActivate/res";
import { SaveBatchTaskForCreatingOrderRedeemRequest } from "./SaveBatchTaskForCreatingOrderRedeem/req";
import { SaveBatchTaskForCreatingOrderRedeemResponse } from "./SaveBatchTaskForCreatingOrderRedeem/res";
import { SaveBatchTaskForCreatingOrderRenewRequest } from "./SaveBatchTaskForCreatingOrderRenew/req";
import { SaveBatchTaskForCreatingOrderRenewResponse } from "./SaveBatchTaskForCreatingOrderRenew/res";
import { SaveBatchTaskForDomainNameProxyServiceRequest } from "./SaveBatchTaskForDomainNameProxyService/req";
import { SaveBatchTaskForDomainNameProxyServiceResponse } from "./SaveBatchTaskForDomainNameProxyService/res";
import { SaveBatchTaskForUpdateProhibitionLockRequest } from "./SaveBatchTaskForUpdateProhibitionLock/req";
import { SaveBatchTaskForUpdateProhibitionLockResponse } from "./SaveBatchTaskForUpdateProhibitionLock/res";
import { SaveBatchTaskForUpdatingContactInfoByNewContactRequest } from "./SaveBatchTaskForUpdatingContactInfoByNewContact/req";
import { SaveBatchTaskForUpdatingContactInfoByNewContactResponse } from "./SaveBatchTaskForUpdatingContactInfoByNewContact/res";
import { SaveRegistrantProfileRequest } from "./SaveRegistrantProfile/req";
import { SaveRegistrantProfileResponse } from "./SaveRegistrantProfile/res";
import { SaveSingleTaskForCreatingOrderActivateRequest } from "./SaveSingleTaskForCreatingOrderActivate/req";
import { SaveSingleTaskForCreatingOrderActivateResponse } from "./SaveSingleTaskForCreatingOrderActivate/res";
import { SaveSingleTaskForCreatingOrderRenewRequest } from "./SaveSingleTaskForCreatingOrderRenew/req";
import { SaveSingleTaskForCreatingOrderRenewResponse } from "./SaveSingleTaskForCreatingOrderRenew/res";
import { SaveSingleTaskForDeletingDnsHostRequest } from "./SaveSingleTaskForDeletingDnsHost/req";
import { SaveSingleTaskForDeletingDnsHostResponse } from "./SaveSingleTaskForDeletingDnsHost/res";
import { SaveSingleTaskForDomainNameProxyServiceRequest } from "./SaveSingleTaskForDomainNameProxyService/req";
import { SaveSingleTaskForDomainNameProxyServiceResponse } from "./SaveSingleTaskForDomainNameProxyService/res";
import { SaveSingleTaskForModifyingDnsHostRequest } from "./SaveSingleTaskForModifyingDnsHost/req";
import { SaveSingleTaskForModifyingDnsHostResponse } from "./SaveSingleTaskForModifyingDnsHost/res";
import { SaveSingleTaskForSynchronizingDnsHostRequest } from "./SaveSingleTaskForSynchronizingDnsHost/req";
import { SaveSingleTaskForSynchronizingDnsHostResponse } from "./SaveSingleTaskForSynchronizingDnsHost/res";
import { SaveSingleTaskForUpdateProhibitionLockRequest } from "./SaveSingleTaskForUpdateProhibitionLock/req";
import { SaveSingleTaskForUpdateProhibitionLockResponse } from "./SaveSingleTaskForUpdateProhibitionLock/res";
import { SaveSingleTaskForUpdatingContactInfoRequest } from "./SaveSingleTaskForUpdatingContactInfo/req";
import { SaveSingleTaskForUpdatingContactInfoResponse } from "./SaveSingleTaskForUpdatingContactInfo/res";
import { SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest } from "./SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential/req";
import { SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse } from "./SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential/res";
import { SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest } from "./SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID/req";
import { SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse } from "./SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID/res";
import { SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest } from "./SaveTaskForUpdatingRegistrantInfoByIdentityCredential/req";
import { SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse } from "./SaveTaskForUpdatingRegistrantInfoByIdentityCredential/res";
import { SubmitEmailVerificationRequest } from "./SubmitEmailVerification/req";
import { SubmitEmailVerificationResponse } from "./SubmitEmailVerification/res";
import { QueryDomainByDomainNameRequest } from "./QueryDomainByDomainName/req";
import { QueryDomainByDomainNameResponse } from "./QueryDomainByDomainName/res";
import { FuzzyMatchDomainSensitiveWordRequest } from "./FuzzyMatchDomainSensitiveWord/req";
import { FuzzyMatchDomainSensitiveWordResponse } from "./FuzzyMatchDomainSensitiveWord/res";
import { GetQualificationUploadPolicyRequest } from "./GetQualificationUploadPolicy/req";
import { GetQualificationUploadPolicyResponse } from "./GetQualificationUploadPolicy/res";
import { QueryContactInfoRequest } from "./QueryContactInfo/req";
import { QueryContactInfoResponse } from "./QueryContactInfo/res";
import { QueryDnsHostRequest } from "./QueryDnsHost/req";
import { QueryDnsHostResponse } from "./QueryDnsHost/res";
import { QueryFailReasonForDomainRealNameVerificationRequest } from "./QueryFailReasonForDomainRealNameVerification/req";
import { QueryFailReasonForDomainRealNameVerificationResponse } from "./QueryFailReasonForDomainRealNameVerification/res";
import { QueryTaskInfoHistoryRequest } from "./QueryTaskInfoHistory/req";
import { QueryTaskInfoHistoryResponse } from "./QueryTaskInfoHistory/res";
import { SaveBatchTaskForTransferProhibitionLockRequest } from "./SaveBatchTaskForTransferProhibitionLock/req";
import { SaveBatchTaskForTransferProhibitionLockResponse } from "./SaveBatchTaskForTransferProhibitionLock/res";
import { SaveSingleTaskForCreatingOrderRedeemRequest } from "./SaveSingleTaskForCreatingOrderRedeem/req";
import { SaveSingleTaskForCreatingOrderRedeemResponse } from "./SaveSingleTaskForCreatingOrderRedeem/res";
import { SaveSingleTaskForTransferProhibitionLockRequest } from "./SaveSingleTaskForTransferProhibitionLock/req";
import { SaveSingleTaskForTransferProhibitionLockResponse } from "./SaveSingleTaskForTransferProhibitionLock/res";
import { SaveTaskForSubmittingDomainDeleteRequest } from "./SaveTaskForSubmittingDomainDelete/req";
import { SaveTaskForSubmittingDomainDeleteResponse } from "./SaveTaskForSubmittingDomainDelete/res";
import { SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest } from "./SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID/req";
import { SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse } from "./SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID/res";
import { VerifyEmailRequest } from "./VerifyEmail/req";
import { VerifyEmailResponse } from "./VerifyEmail/res";
import { CheckDomainRequest } from "./CheckDomain/req";
import { CheckDomainResponse } from "./CheckDomain/res";
import { CheckDomainSunriseClaimRequest } from "./CheckDomainSunriseClaim/req";
import { CheckDomainSunriseClaimResponse } from "./CheckDomainSunriseClaim/res";
import { ListServerLockRequest } from "./ListServerLock/req";
import { ListServerLockResponse } from "./ListServerLock/res";
import { QueryAdvancedDomainListRequest } from "./QueryAdvancedDomainList/req";
import { QueryAdvancedDomainListResponse } from "./QueryAdvancedDomainList/res";
import { QueryChangeLogListRequest } from "./QueryChangeLogList/req";
import { QueryChangeLogListResponse } from "./QueryChangeLogList/res";
import { QueryDomainListRequest } from "./QueryDomainList/req";
import { QueryDomainListResponse } from "./QueryDomainList/res";
import { QueryDomainRealNameVerificationInfoRequest } from "./QueryDomainRealNameVerificationInfo/req";
import { QueryDomainRealNameVerificationInfoResponse } from "./QueryDomainRealNameVerificationInfo/res";
import { QueryFailReasonForRegistrantProfileRealNameVerificationRequest } from "./QueryFailReasonForRegistrantProfileRealNameVerification/req";
import { QueryFailReasonForRegistrantProfileRealNameVerificationResponse } from "./QueryFailReasonForRegistrantProfileRealNameVerification/res";
import { ResendEmailVerificationRequest } from "./ResendEmailVerification/req";
import { ResendEmailVerificationResponse } from "./ResendEmailVerification/res";
import { SaveBatchTaskForModifyingDomainDnsRequest } from "./SaveBatchTaskForModifyingDomainDns/req";
import { SaveBatchTaskForModifyingDomainDnsResponse } from "./SaveBatchTaskForModifyingDomainDns/res";
import { SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest } from "./SaveBatchTaskForUpdatingContactInfoByRegistrantProfileId/req";
import { SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse } from "./SaveBatchTaskForUpdatingContactInfoByRegistrantProfileId/res";
import { SaveSingleTaskForCreatingDnsHostRequest } from "./SaveSingleTaskForCreatingDnsHost/req";
import { SaveSingleTaskForCreatingDnsHostResponse } from "./SaveSingleTaskForCreatingDnsHost/res";
import { CancelTaskRequest } from "./CancelTask/req";
import { CancelTaskResponse } from "./CancelTask/res";

interface DOMAIN {
    /**
    * 查询域名DS记录
    */ QueryDSRecord(query: QueryDSRecordRequest): Promise<QueryDSRecordResponse>;
    /**
    * 提交解绑Ens地址任务
    */ SaveSingleTaskForDisassociatingEns(query: SaveSingleTaskForDisassociatingEnsRequest): Promise<SaveSingleTaskForDisassociatingEnsResponse>;
    /**
    * 查询Ens绑定地址
    */ QueryEnsAssociation(query: QueryEnsAssociationRequest): Promise<QueryEnsAssociationResponse>;
    /**
    * 查询Art扩展信息
    */ QueryArtExtension(query: QueryArtExtensionRequest): Promise<QueryArtExtensionResponse>;
    /**
    * 提交创建Art扩展信息任务
    */ SaveSingleTaskForSaveArtExtension(query: SaveSingleTaskForSaveArtExtensionRequest): Promise<SaveSingleTaskForSaveArtExtensionResponse>;
    /**
    * 提交绑定Ens地址任务
    */ SaveSingleTaskForAssociatingEns(query: SaveSingleTaskForAssociatingEnsRequest): Promise<SaveSingleTaskForAssociatingEnsResponse>;
    /**
    * 提交修改DS记录任务
    */ SaveSingleTaskForModifyingDSRecord(query: SaveSingleTaskForModifyingDSRecordRequest): Promise<SaveSingleTaskForModifyingDSRecordResponse>;
    /**
    * 查询本地Ens绑定地址
    */ QueryLocalEnsAssociation(query: QueryLocalEnsAssociationRequest): Promise<QueryLocalEnsAssociationResponse>;
    /**
    * 提交同步DS记录任务
    */ SaveSingleTaskForSynchronizingDSRecord(query: SaveSingleTaskForSynchronizingDSRecordRequest): Promise<SaveSingleTaskForSynchronizingDSRecordResponse>;
    /**
    * 提交删除DS记录任务
    */ SaveSingleTaskForDeletingDSRecord(query: SaveSingleTaskForDeletingDSRecordRequest): Promise<SaveSingleTaskForDeletingDSRecordResponse>;
    /**
    * 向分组中设置域名
    */ UpdateDomainToDomainGroup(query: UpdateDomainToDomainGroupRequest): Promise<UpdateDomainToDomainGroupResponse>;
    /**
    * 提交创建DS记录任务
    */ SaveSingleTaskForAddingDSRecord(query: SaveSingleTaskForAddingDSRecordRequest): Promise<SaveSingleTaskForAddingDSRecordResponse>;
    TransferInResendMailToken(query: TransferInResendMailTokenRequest): Promise<TransferInResendMailTokenResponse>;
    /**
    * 翻页遍历域名列表
    */ ScrollDomainList(query: ScrollDomainListRequest): Promise<ScrollDomainListResponse>;
    /**
    * 保存域名分组
    */ SaveDomainGroup(query: SaveDomainGroupRequest): Promise<SaveDomainGroupResponse>;
    /**
    * 查询域名分组列表
    */ QueryDomainGroupList(query: QueryDomainGroupListRequest): Promise<QueryDomainGroupListResponse>;
    TransferInReenterTransferAuthorizationCode(query: TransferInReenterTransferAuthorizationCodeRequest): Promise<TransferInReenterTransferAuthorizationCodeResponse>;
    VerifyContactField(query: VerifyContactFieldRequest): Promise<VerifyContactFieldResponse>;
    SaveSingleTaskForQueryingTransferAuthorizationCode(query: SaveSingleTaskForQueryingTransferAuthorizationCodeRequest): Promise<SaveSingleTaskForQueryingTransferAuthorizationCodeResponse>;
    /**
    * 删除域名分组
    */ DeleteDomainGroup(query: DeleteDomainGroupRequest): Promise<DeleteDomainGroupResponse>;
    TransferInRefetchWhoisEmail(query: TransferInRefetchWhoisEmailRequest): Promise<TransferInRefetchWhoisEmailResponse>;
    TransferInCheckMailToken(query: TransferInCheckMailTokenRequest): Promise<TransferInCheckMailTokenResponse>;
    SaveSingleTaskForCancelingTransferIn(query: SaveSingleTaskForCancelingTransferInRequest): Promise<SaveSingleTaskForCancelingTransferInResponse>;
    SaveSingleTaskForCancelingTransferOut(query: SaveSingleTaskForCancelingTransferOutRequest): Promise<SaveSingleTaskForCancelingTransferOutResponse>;
    SaveSingleTaskForCreatingOrderTransfer(query: SaveSingleTaskForCreatingOrderTransferRequest): Promise<SaveSingleTaskForCreatingOrderTransferResponse>;
    QueryTransferOutInfo(query: QueryTransferOutInfoRequest): Promise<QueryTransferOutInfoResponse>;
    CheckTransferInFeasibility(query: CheckTransferInFeasibilityRequest): Promise<CheckTransferInFeasibilityResponse>;
    SaveBatchTaskForCreatingOrderTransfer(query: SaveBatchTaskForCreatingOrderTransferRequest): Promise<SaveBatchTaskForCreatingOrderTransferResponse>;
    QueryRegistrantProfileRealNameVerificationInfo(query: QueryRegistrantProfileRealNameVerificationInfoRequest): Promise<QueryRegistrantProfileRealNameVerificationInfoResponse>;
    SaveSingleTaskForApprovingTransferOut(query: SaveSingleTaskForApprovingTransferOutRequest): Promise<SaveSingleTaskForApprovingTransferOutResponse>;
    QueryTransferInByInstanceId(query: QueryTransferInByInstanceIdRequest): Promise<QueryTransferInByInstanceIdResponse>;
    ConfirmTransferInEmail(query: ConfirmTransferInEmailRequest): Promise<ConfirmTransferInEmailResponse>;
    PollTaskResult(query: PollTaskResultRequest): Promise<PollTaskResultResponse>;
    AcknowledgeTaskResult(query: AcknowledgeTaskResultRequest): Promise<AcknowledgeTaskResultResponse>;
    QueryTransferInList(query: QueryTransferInListRequest): Promise<QueryTransferInListResponse>;
    BatchFuzzyMatchDomainSensitiveWord(query: BatchFuzzyMatchDomainSensitiveWordRequest): Promise<BatchFuzzyMatchDomainSensitiveWordResponse>;
    CancelDomainVerification(query: CancelDomainVerificationRequest): Promise<CancelDomainVerificationResponse>;
    CancelQualificationVerification(query: CancelQualificationVerificationRequest): Promise<CancelQualificationVerificationResponse>;
    CheckMaxYearOfServerLock(query: CheckMaxYearOfServerLockRequest): Promise<CheckMaxYearOfServerLockResponse>;
    CheckProcessingServerLockApply(query: CheckProcessingServerLockApplyRequest): Promise<CheckProcessingServerLockApplyResponse>;
    DeleteEmailVerification(query: DeleteEmailVerificationRequest): Promise<DeleteEmailVerificationResponse>;
    DeleteRegistrantProfile(query: DeleteRegistrantProfileRequest): Promise<DeleteRegistrantProfileResponse>;
    EmailVerified(query: EmailVerifiedRequest): Promise<EmailVerifiedResponse>;
    ListEmailVerification(query: ListEmailVerificationRequest): Promise<ListEmailVerificationResponse>;
    LookupTmchNotice(query: LookupTmchNoticeRequest): Promise<LookupTmchNoticeResponse>;
    QueryDomainAdminDivision(query: QueryDomainAdminDivisionRequest): Promise<QueryDomainAdminDivisionResponse>;
    QueryDomainByInstanceId(query: QueryDomainByInstanceIdRequest): Promise<QueryDomainByInstanceIdResponse>;
    QueryDomainSuffix(query: QueryDomainSuffixRequest): Promise<QueryDomainSuffixResponse>;
    QueryEmailVerification(query: QueryEmailVerificationRequest): Promise<QueryEmailVerificationResponse>;
    QueryFailingReasonListForQualification(query: QueryFailingReasonListForQualificationRequest): Promise<QueryFailingReasonListForQualificationResponse>;
    QueryQualificationDetail(query: QueryQualificationDetailRequest): Promise<QueryQualificationDetailResponse>;
    QueryRegistrantProfiles(query: QueryRegistrantProfilesRequest): Promise<QueryRegistrantProfilesResponse>;
    QueryServerLock(query: QueryServerLockRequest): Promise<QueryServerLockResponse>;
    QueryTaskDetailHistory(query: QueryTaskDetailHistoryRequest): Promise<QueryTaskDetailHistoryResponse>;
    QueryTaskDetailList(query: QueryTaskDetailListRequest): Promise<QueryTaskDetailListResponse>;
    QueryTaskList(query: QueryTaskListRequest): Promise<QueryTaskListResponse>;
    RegistrantProfileRealNameVerification(query: RegistrantProfileRealNameVerificationRequest): Promise<RegistrantProfileRealNameVerificationResponse>;
    ResetQualificationVerification(query: ResetQualificationVerificationRequest): Promise<ResetQualificationVerificationResponse>;
    SaveBatchDomainRemark(query: SaveBatchDomainRemarkRequest): Promise<SaveBatchDomainRemarkResponse>;
    SaveBatchTaskForCreatingOrderActivate(query: SaveBatchTaskForCreatingOrderActivateRequest): Promise<SaveBatchTaskForCreatingOrderActivateResponse>;
    SaveBatchTaskForCreatingOrderRedeem(query: SaveBatchTaskForCreatingOrderRedeemRequest): Promise<SaveBatchTaskForCreatingOrderRedeemResponse>;
    SaveBatchTaskForCreatingOrderRenew(query: SaveBatchTaskForCreatingOrderRenewRequest): Promise<SaveBatchTaskForCreatingOrderRenewResponse>;
    SaveBatchTaskForDomainNameProxyService(query: SaveBatchTaskForDomainNameProxyServiceRequest): Promise<SaveBatchTaskForDomainNameProxyServiceResponse>;
    SaveBatchTaskForUpdateProhibitionLock(query: SaveBatchTaskForUpdateProhibitionLockRequest): Promise<SaveBatchTaskForUpdateProhibitionLockResponse>;
    SaveBatchTaskForUpdatingContactInfoByNewContact(query: SaveBatchTaskForUpdatingContactInfoByNewContactRequest): Promise<SaveBatchTaskForUpdatingContactInfoByNewContactResponse>;
    SaveRegistrantProfile(query: SaveRegistrantProfileRequest): Promise<SaveRegistrantProfileResponse>;
    SaveSingleTaskForCreatingOrderActivate(query: SaveSingleTaskForCreatingOrderActivateRequest): Promise<SaveSingleTaskForCreatingOrderActivateResponse>;
    SaveSingleTaskForCreatingOrderRenew(query: SaveSingleTaskForCreatingOrderRenewRequest): Promise<SaveSingleTaskForCreatingOrderRenewResponse>;
    SaveSingleTaskForDeletingDnsHost(query: SaveSingleTaskForDeletingDnsHostRequest): Promise<SaveSingleTaskForDeletingDnsHostResponse>;
    SaveSingleTaskForDomainNameProxyService(query: SaveSingleTaskForDomainNameProxyServiceRequest): Promise<SaveSingleTaskForDomainNameProxyServiceResponse>;
    SaveSingleTaskForModifyingDnsHost(query: SaveSingleTaskForModifyingDnsHostRequest): Promise<SaveSingleTaskForModifyingDnsHostResponse>;
    SaveSingleTaskForSynchronizingDnsHost(query: SaveSingleTaskForSynchronizingDnsHostRequest): Promise<SaveSingleTaskForSynchronizingDnsHostResponse>;
    SaveSingleTaskForUpdateProhibitionLock(query: SaveSingleTaskForUpdateProhibitionLockRequest): Promise<SaveSingleTaskForUpdateProhibitionLockResponse>;
    SaveSingleTaskForUpdatingContactInfo(query: SaveSingleTaskForUpdatingContactInfoRequest): Promise<SaveSingleTaskForUpdatingContactInfoResponse>;
    SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(query: SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialResponse>;
    SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(query: SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest): Promise<SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponse>;
    SaveTaskForUpdatingRegistrantInfoByIdentityCredential(query: SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest): Promise<SaveTaskForUpdatingRegistrantInfoByIdentityCredentialResponse>;
    SubmitEmailVerification(query: SubmitEmailVerificationRequest): Promise<SubmitEmailVerificationResponse>;
    QueryDomainByDomainName(query: QueryDomainByDomainNameRequest): Promise<QueryDomainByDomainNameResponse>;
    FuzzyMatchDomainSensitiveWord(query: FuzzyMatchDomainSensitiveWordRequest): Promise<FuzzyMatchDomainSensitiveWordResponse>;
    GetQualificationUploadPolicy(query: GetQualificationUploadPolicyRequest): Promise<GetQualificationUploadPolicyResponse>;
    QueryContactInfo(query: QueryContactInfoRequest): Promise<QueryContactInfoResponse>;
    QueryDnsHost(query: QueryDnsHostRequest): Promise<QueryDnsHostResponse>;
    QueryFailReasonForDomainRealNameVerification(query: QueryFailReasonForDomainRealNameVerificationRequest): Promise<QueryFailReasonForDomainRealNameVerificationResponse>;
    QueryTaskInfoHistory(query: QueryTaskInfoHistoryRequest): Promise<QueryTaskInfoHistoryResponse>;
    SaveBatchTaskForTransferProhibitionLock(query: SaveBatchTaskForTransferProhibitionLockRequest): Promise<SaveBatchTaskForTransferProhibitionLockResponse>;
    SaveSingleTaskForCreatingOrderRedeem(query: SaveSingleTaskForCreatingOrderRedeemRequest): Promise<SaveSingleTaskForCreatingOrderRedeemResponse>;
    SaveSingleTaskForTransferProhibitionLock(query: SaveSingleTaskForTransferProhibitionLockRequest): Promise<SaveSingleTaskForTransferProhibitionLockResponse>;
    SaveTaskForSubmittingDomainDelete(query: SaveTaskForSubmittingDomainDeleteRequest): Promise<SaveTaskForSubmittingDomainDeleteResponse>;
    SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID(query: SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest): Promise<SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDResponse>;
    VerifyEmail(query: VerifyEmailRequest): Promise<VerifyEmailResponse>;
    CheckDomain(query: CheckDomainRequest): Promise<CheckDomainResponse>;
    CheckDomainSunriseClaim(query: CheckDomainSunriseClaimRequest): Promise<CheckDomainSunriseClaimResponse>;
    ListServerLock(query: ListServerLockRequest): Promise<ListServerLockResponse>;
    QueryAdvancedDomainList(query: QueryAdvancedDomainListRequest): Promise<QueryAdvancedDomainListResponse>;
    QueryChangeLogList(query: QueryChangeLogListRequest): Promise<QueryChangeLogListResponse>;
    QueryDomainList(query: QueryDomainListRequest): Promise<QueryDomainListResponse>;
    QueryDomainRealNameVerificationInfo(query: QueryDomainRealNameVerificationInfoRequest): Promise<QueryDomainRealNameVerificationInfoResponse>;
    QueryFailReasonForRegistrantProfileRealNameVerification(query: QueryFailReasonForRegistrantProfileRealNameVerificationRequest): Promise<QueryFailReasonForRegistrantProfileRealNameVerificationResponse>;
    ResendEmailVerification(query: ResendEmailVerificationRequest): Promise<ResendEmailVerificationResponse>;
    SaveBatchTaskForModifyingDomainDns(query: SaveBatchTaskForModifyingDomainDnsRequest): Promise<SaveBatchTaskForModifyingDomainDnsResponse>;
    SaveBatchTaskForUpdatingContactInfoByRegistrantProfileId(query: SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest): Promise<SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponse>;
    SaveSingleTaskForCreatingDnsHost(query: SaveSingleTaskForCreatingDnsHostRequest): Promise<SaveSingleTaskForCreatingDnsHostResponse>;
    CancelTask(query: CancelTaskRequest): Promise<CancelTaskResponse>;
}
export default DOMAIN;
