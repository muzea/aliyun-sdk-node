import { CreateVerifySchemeRequest } from "./CreateVerifyScheme/req";
import { CreateVerifySchemeResponse } from "./CreateVerifyScheme/res";
import { DeleteVerifySchemeRequest } from "./DeleteVerifyScheme/req";
import { DeleteVerifySchemeResponse } from "./DeleteVerifyScheme/res";
import { DescribeVerifySchemeRequest } from "./DescribeVerifyScheme/req";
import { DescribeVerifySchemeResponse } from "./DescribeVerifyScheme/res";
import { GetAuthTokenRequest } from "./GetAuthToken/req";
import { GetAuthTokenResponse } from "./GetAuthToken/res";
import { GetMobileRequest } from "./GetMobile/req";
import { GetMobileResponse } from "./GetMobile/res";
import { VerifyMobileRequest } from "./VerifyMobile/req";
import { VerifyMobileResponse } from "./VerifyMobile/res";
import { VerifyPhoneWithTokenRequest } from "./VerifyPhoneWithToken/req";
import { VerifyPhoneWithTokenResponse } from "./VerifyPhoneWithToken/res";
import { GetAuthorizationUrlRequest } from "./GetAuthorizationUrl/req";
import { GetAuthorizationUrlResponse } from "./GetAuthorizationUrl/res";
import { GetSmsAuthTokensRequest } from "./GetSmsAuthTokens/req";
import { GetSmsAuthTokensResponse } from "./GetSmsAuthTokens/res";
import { VerifySmsCodeRequest } from "./VerifySmsCode/req";
import { VerifySmsCodeResponse } from "./VerifySmsCode/res";
import { QueryGateVerifyBillingPublicRequest } from "./QueryGateVerifyBillingPublic/req";
import { QueryGateVerifyBillingPublicResponse } from "./QueryGateVerifyBillingPublic/res";
import { QueryGateVerifyStatisticPublicRequest } from "./QueryGateVerifyStatisticPublic/req";
import { QueryGateVerifyStatisticPublicResponse } from "./QueryGateVerifyStatisticPublic/res";
import { GetPhoneWithTokenRequest } from "./GetPhoneWithToken/req";
import { GetPhoneWithTokenResponse } from "./GetPhoneWithToken/res";
import { VerifyWithFusionAuthTokenRequest } from "./VerifyWithFusionAuthToken/req";
import { VerifyWithFusionAuthTokenResponse } from "./VerifyWithFusionAuthToken/res";
import { GetFusionAuthTokenRequest } from "./GetFusionAuthToken/req";
import { GetFusionAuthTokenResponse } from "./GetFusionAuthToken/res";
import { CreateSchemeConfigRequest } from "./CreateSchemeConfig/req";
import { CreateSchemeConfigResponse } from "./CreateSchemeConfig/res";
import { CheckSmsVerifyCodeRequest } from "./CheckSmsVerifyCode/req";
import { CheckSmsVerifyCodeResponse } from "./CheckSmsVerifyCode/res";
import { QuerySendDetailsRequest } from "./QuerySendDetails/req";
import { QuerySendDetailsResponse } from "./QuerySendDetails/res";
import { SendSmsVerifyCodeRequest } from "./SendSmsVerifyCode/req";
import { SendSmsVerifyCodeResponse } from "./SendSmsVerifyCode/res";

interface DYPNSAPI {
    /**
     * 调用CreateVerifyScheme创建认证方案。
     */
    CreateVerifyScheme(query: CreateVerifySchemeRequest): Promise<CreateVerifySchemeResponse>;
    /**
     * 调用DeleteVerifyScheme接口删除认证方案。
     */
    DeleteVerifyScheme(query: DeleteVerifySchemeRequest): Promise<DeleteVerifySchemeResponse>;
    /**
     * 调用DescribeVerifyScheme接口获取认证方案详细信息。
     */
    DescribeVerifyScheme(query: DescribeVerifySchemeRequest): Promise<DescribeVerifySchemeResponse>;
    /**
     * 获取授权token用于H5本机号码校验的鉴权，返回结果包括AccessToken和JwtToken。
     */
    GetAuthToken(query: GetAuthTokenRequest): Promise<GetAuthTokenResponse>;
    /**
     * 调用GetMobile接口完成一键登录取号。
     */
    GetMobile(query: GetMobileRequest): Promise<GetMobileResponse>;
    /**
     * 调用VerifyMobile接口完成本机号码校验认证。
     */
    VerifyMobile(query: VerifyMobileRequest): Promise<VerifyMobileResponse>;
    /**
     * 完成H5本机号码校验。
     */
    VerifyPhoneWithToken(query: VerifyPhoneWithTokenRequest): Promise<VerifyPhoneWithTokenResponse>;
    /**
     * 获取支付宝授权链接。
     */
    GetAuthorizationUrl(query: GetAuthorizationUrlRequest): Promise<GetAuthorizationUrlResponse>;
    /**
     * 调用GetSmsAuthTokens接口获取短信验证码授权Token。
     */
    GetSmsAuthTokens(query: GetSmsAuthTokensRequest): Promise<GetSmsAuthTokensResponse>;
    /**
     * 调用VerifySmsCode接口完成短信验证码校验。
     */
    VerifySmsCode(query: VerifySmsCodeRequest): Promise<VerifySmsCodeResponse>;
    /**
     * 调用QueryGateVerifyBillingPublic接口查看费用情况。
     */
    QueryGateVerifyBillingPublic(query: QueryGateVerifyBillingPublicRequest): Promise<QueryGateVerifyBillingPublicResponse>;
    /**
     * 调用QueryGateVerifyStatisticPublic接口查看用量情况。
     */
    QueryGateVerifyStatisticPublic(query: QueryGateVerifyStatisticPublicRequest): Promise<QueryGateVerifyStatisticPublicResponse>;
    /**
     * 调用本接口完成一键登录取号（H5能力专用）。
     */
    GetPhoneWithToken(query: GetPhoneWithTokenRequest): Promise<GetPhoneWithTokenResponse>;
    /**
     * 融合认证客户端发起认证时，由开发者服务器向阿里云发起本次调用，通过鉴权token换取的认证token发起本次调用。获取认证结果。
     */
    VerifyWithFusionAuthToken(query: VerifyWithFusionAuthTokenRequest): Promise<VerifyWithFusionAuthTokenResponse>;
    /**
     * 融合认证客户端发起认证后，由开发者服务器向阿里云发起本次调用，使用从客户端SDK获取到的认证Token发起本次调用。获取认证结果。
     */
    GetFusionAuthToken(query: GetFusionAuthTokenRequest): Promise<GetFusionAuthTokenResponse>;
    /**
     * 创建融合认证方案号。
     */
    CreateSchemeConfig(query: CreateSchemeConfigRequest): Promise<CreateSchemeConfigResponse>;
    /**
     * 核验短信验证码。
     */
    CheckSmsVerifyCode(query: CheckSmsVerifyCodeRequest): Promise<CheckSmsVerifyCodeResponse>;
    /**
     * 查询短信验证码发送状态（仅能查询短信认证API版本的发送记录）。
     */
    QuerySendDetails(query: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse>;
    /**
     * 发送短信验证码。
     */
    SendSmsVerifyCode(query: SendSmsVerifyCodeRequest): Promise<SendSmsVerifyCodeResponse>;
}
export default DYPNSAPI;
