import { DescribePhoneNumberAnalysisRequest } from "./DescribePhoneNumberAnalysis/req";
import { DescribePhoneNumberAnalysisResponse } from "./DescribePhoneNumberAnalysis/res";
import { DescribePhoneNumberOnlineTimeRequest } from "./DescribePhoneNumberOnlineTime/req";
import { DescribePhoneNumberOnlineTimeResponse } from "./DescribePhoneNumberOnlineTime/res";
import { InvalidPhoneNumberFilterRequest } from "./InvalidPhoneNumberFilter/req";
import { InvalidPhoneNumberFilterResponse } from "./InvalidPhoneNumberFilter/res";
import { PhoneNumberEncryptRequest } from "./PhoneNumberEncrypt/req";
import { PhoneNumberEncryptResponse } from "./PhoneNumberEncrypt/res";
import { ThreeElementsVerificationRequest } from "./ThreeElementsVerification/req";
import { ThreeElementsVerificationResponse } from "./ThreeElementsVerification/res";
import { TwoElementsVerificationRequest } from "./TwoElementsVerification/req";
import { TwoElementsVerificationResponse } from "./TwoElementsVerification/res";
import { DescribePhoneNumberOperatorAttributeRequest } from "./DescribePhoneNumberOperatorAttribute/req";
import { DescribePhoneNumberOperatorAttributeResponse } from "./DescribePhoneNumberOperatorAttribute/res";
import { PhoneNumberStatusForVoiceRequest } from "./PhoneNumberStatusForVoice/req";
import { PhoneNumberStatusForVoiceResponse } from "./PhoneNumberStatusForVoice/res";
import { PhoneNumberStatusForVirtualRequest } from "./PhoneNumberStatusForVirtual/req";
import { PhoneNumberStatusForVirtualResponse } from "./PhoneNumberStatusForVirtual/res";
import { PhoneNumberStatusForRealRequest } from "./PhoneNumberStatusForReal/req";
import { PhoneNumberStatusForRealResponse } from "./PhoneNumberStatusForReal/res";
import { PhoneNumberStatusForAccountRequest } from "./PhoneNumberStatusForAccount/req";
import { PhoneNumberStatusForAccountResponse } from "./PhoneNumberStatusForAccount/res";
import { PhoneNumberStatusForSmsRequest } from "./PhoneNumberStatusForSms/req";
import { PhoneNumberStatusForSmsResponse } from "./PhoneNumberStatusForSms/res";
import { DescribePhoneTwiceTelVerifyRequest } from "./DescribePhoneTwiceTelVerify/req";
import { DescribePhoneTwiceTelVerifyResponse } from "./DescribePhoneTwiceTelVerify/res";
import { PhoneNumberStatusForPublicRequest } from "./PhoneNumberStatusForPublic/req";
import { PhoneNumberStatusForPublicResponse } from "./PhoneNumberStatusForPublic/res";
import { DescribeEmptyNumberRequest } from "./DescribeEmptyNumber/req";
import { DescribeEmptyNumberResponse } from "./DescribeEmptyNumber/res";
import { QueryTagApplyRuleRequest } from "./QueryTagApplyRule/req";
import { QueryTagApplyRuleResponse } from "./QueryTagApplyRule/res";
import { QueryUsageStatisticsByTagIdRequest } from "./QueryUsageStatisticsByTagId/req";
import { QueryUsageStatisticsByTagIdResponse } from "./QueryUsageStatisticsByTagId/res";
import { QueryTagInfoBySelectionRequest } from "./QueryTagInfoBySelection/req";
import { QueryTagInfoBySelectionResponse } from "./QueryTagInfoBySelection/res";
import { QueryAvailableAuthCodeRequest } from "./QueryAvailableAuthCode/req";
import { QueryAvailableAuthCodeResponse } from "./QueryAvailableAuthCode/res";
import { QueryTagListPageRequest } from "./QueryTagListPage/req";
import { QueryTagListPageResponse } from "./QueryTagListPage/res";
import { DescribePhoneNumberAnalysisAIRequest } from "./DescribePhoneNumberAnalysisAI/req";
import { DescribePhoneNumberAnalysisAIResponse } from "./DescribePhoneNumberAnalysisAI/res";
import { CompanyThreeElementsVerificationRequest } from "./CompanyThreeElementsVerification/req";
import { CompanyThreeElementsVerificationResponse } from "./CompanyThreeElementsVerification/res";
import { CompanyFourElementsVerificationRequest } from "./CompanyFourElementsVerification/req";
import { CompanyFourElementsVerificationResponse } from "./CompanyFourElementsVerification/res";
import { CompanyTwoElementsVerificationRequest } from "./CompanyTwoElementsVerification/req";
import { CompanyTwoElementsVerificationResponse } from "./CompanyTwoElementsVerification/res";
import { UAIDVerificationRequest } from "./UAIDVerification/req";
import { UAIDVerificationResponse } from "./UAIDVerification/res";
import { GetUAIDApplyTokenSignRequest } from "./GetUAIDApplyTokenSign/req";
import { GetUAIDApplyTokenSignResponse } from "./GetUAIDApplyTokenSign/res";
import { CertNoTwoElementVerificationRequest } from "./CertNoTwoElementVerification/req";
import { CertNoTwoElementVerificationResponse } from "./CertNoTwoElementVerification/res";

interface DYTNSAPI {
    /**
     * 获取号码分析返回结果。
     */
    DescribePhoneNumberAnalysis(query: DescribePhoneNumberAnalysisRequest): Promise<DescribePhoneNumberAnalysisResponse>;
    /**
     * 查询手机用户在运营商侧的在网时长。
     */
    DescribePhoneNumberOnlineTime(query: DescribePhoneNumberOnlineTimeRequest): Promise<DescribePhoneNumberOnlineTimeResponse>;
    /**
     * 进行无效号码过滤操作。
     */
    InvalidPhoneNumberFilter(query: InvalidPhoneNumberFilterRequest): Promise<InvalidPhoneNumberFilterResponse>;
    /**
     * 将原始号码加密为一个140开头的虚拟号码。通过结合阿里云的通信服务，可以使用加密后的140号码发起语音呼叫。实现虚拟号码呼叫的效果。
     */
    PhoneNumberEncrypt(query: PhoneNumberEncryptRequest): Promise<PhoneNumberEncryptResponse>;
    /**
     * 三要素（姓名、手机号和身份证号）核验。用于比对用户填写的姓名、手机号、身份证号三个信息是否属于同一用户。
     */
    ThreeElementsVerification(query: ThreeElementsVerificationRequest): Promise<ThreeElementsVerificationResponse>;
    /**
     * 二要素（姓名和手机号）核验。用于比对用户填写的姓名、手机号两项信息是否属于同一用户。
     */
    TwoElementsVerification(query: TwoElementsVerificationRequest): Promise<TwoElementsVerificationResponse>;
    /**
     * 查询手机号码的归属信息，包括：所属省份、所属城市、所属基础运营商（中国移动、中国联通、中国电信、中国广电）、移动转售企业（阿里通信等）、是否携号转网、归属号码段等。
     */
    DescribePhoneNumberOperatorAttribute(query: DescribePhoneNumberOperatorAttributeRequest): Promise<DescribePhoneNumberOperatorAttributeResponse>;
    /**
     * 获取手机号码实时在网状态，例如正常、停机、空号等状态。支持明文、MD5/SHA256加密方式的号码查询。
     */
    PhoneNumberStatusForVoice(query: PhoneNumberStatusForVoiceRequest): Promise<PhoneNumberStatusForVoiceResponse>;
    /**
     * 获取手机号码虚拟号码（俗称小号）状态。支持明文、MD5/SHA256加密方式的号码查询。
     */
    PhoneNumberStatusForVirtual(query: PhoneNumberStatusForVirtualRequest): Promise<PhoneNumberStatusForVirtualResponse>;
    /**
     * 获取手机号码实时在网状态，例如正常、停机、空号等状态。支持明文、MD5/SHA256加密方式的号码查询。
     */
    PhoneNumberStatusForReal(query: PhoneNumberStatusForRealRequest): Promise<PhoneNumberStatusForRealResponse>;
    /**
     * 获取手机号码实时在网状态，例如正常、停机、空号等状态。支持明文、MD5/SHA256加密方式的号码查询。
     */
    PhoneNumberStatusForAccount(query: PhoneNumberStatusForAccountRequest): Promise<PhoneNumberStatusForAccountResponse>;
    /**
     * 获取手机号码实时在网状态，例如正常、停机、空号等状态。支持明文、MD5/SHA256加密方式的号码查询。
     */
    PhoneNumberStatusForSms(query: PhoneNumberStatusForSmsRequest): Promise<PhoneNumberStatusForSmsResponse>;
    /**
     * 验证手机号是否为运营商二次放号的号码，支持在一次请求中快速检验号码是否为二次放号。
     */
    DescribePhoneTwiceTelVerify(query: DescribePhoneTwiceTelVerifyRequest): Promise<DescribePhoneTwiceTelVerifyResponse>;
    /**
     * 获取手机号码实时在网状态，例如正常、停机、空号等状态。支持明文、MD5/SHA256加密方式的号码查询。
     */
    PhoneNumberStatusForPublic(query: PhoneNumberStatusForPublicRequest): Promise<PhoneNumberStatusForPublicResponse>;
    /**
     * 通过AI算法，预测手机号是否为空号。
     */
    DescribeEmptyNumber(query: DescribeEmptyNumberRequest): Promise<DescribeEmptyNumberResponse>;
    /**
     * 查询标签申请规则。
     */
    QueryTagApplyRule(query: QueryTagApplyRuleRequest): Promise<QueryTagApplyRuleResponse>;
    /**
     * 根据标签ID查询用量统计。
     */
    QueryUsageStatisticsByTagId(query: QueryUsageStatisticsByTagIdRequest): Promise<QueryUsageStatisticsByTagIdResponse>;
    /**
     * 查询标签信息。
     */
    QueryTagInfoBySelection(query: QueryTagInfoBySelectionRequest): Promise<QueryTagInfoBySelectionResponse>;
    /**
     * 查询可用的授权码。
     */
    QueryAvailableAuthCode(query: QueryAvailableAuthCodeRequest): Promise<QueryAvailableAuthCodeResponse>;
    /**
     * 分页查询标签列表。
     */
    QueryTagListPage(query: QueryTagListPageRequest): Promise<QueryTagListPageResponse>;
    /**
     * 获取号码分析返回结果。
     */
    DescribePhoneNumberAnalysisAI(query: DescribePhoneNumberAnalysisAIRequest): Promise<DescribePhoneNumberAnalysisAIResponse>;
    /**
     * 用于核验企业名称、企业证件号和企业法人姓名，必须全部一致且企业经营状态为在营才会判定核验通过。
     */
    CompanyThreeElementsVerification(query: CompanyThreeElementsVerificationRequest): Promise<CompanyThreeElementsVerificationResponse>;
    /**
     * 用于核验企业名称、企业证件号、企业法人姓名和企业法人身份证号，必须全部一致且企业经营状态为在营才会判定核验通过。
     */
    CompanyFourElementsVerification(query: CompanyFourElementsVerificationRequest): Promise<CompanyFourElementsVerificationResponse>;
    /**
     * 用于核验企业名称和企业证件号，名称和证件必须全部一致且企业经营状态为在营才会判定核验通过。
     */
    CompanyTwoElementsVerification(query: CompanyTwoElementsVerificationRequest): Promise<CompanyTwoElementsVerificationResponse>;
    /**
     * 根据运营商授权Token获取UAID。
     * 获取授权Token及其签名值请参考GetUAIDApplyTokenSign API文档。
     * UAID为64个长度，前32个长度描述设备信息，后32个长度描述号码信息。
     */
    UAIDVerification(query: UAIDVerificationRequest): Promise<UAIDVerificationResponse>;
    /**
     * 该API仅提供三网运营商获取UAID能力中，获取授权Token环节的签名功能。
     */
    GetUAIDApplyTokenSign(query: GetUAIDApplyTokenSignRequest): Promise<GetUAIDApplyTokenSignResponse>;
    /**
     * 二要素（姓名和身份证）核验。用于比对用户填写的姓名、身份证两项信息是否属于同一用户。
     */
    CertNoTwoElementVerification(query: CertNoTwoElementVerificationRequest): Promise<CertNoTwoElementVerificationResponse>;
}
export default DYTNSAPI;
