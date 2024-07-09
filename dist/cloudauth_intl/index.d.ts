import { InitializeRequest } from "./Initialize/req";
import { InitializeResponse } from "./Initialize/res";
import { CheckResultRequest } from "./CheckResult/req";
import { CheckResultResponse } from "./CheckResult/res";
import { FaceCompareRequest } from "./FaceCompare/req";
import { FaceCompareResponse } from "./FaceCompare/res";
import { FaceLivenessRequest } from "./FaceLiveness/req";
import { FaceLivenessResponse } from "./FaceLiveness/res";
import { DescribeRiskScoreRequest } from "./DescribeRiskScore/req";
import { DescribeRiskScoreResponse } from "./DescribeRiskScore/res";
import { DescribeAddressOverviewRequest } from "./DescribeAddressOverview/req";
import { DescribeAddressOverviewResponse } from "./DescribeAddressOverview/res";
import { DescribeAddressLabelsRequest } from "./DescribeAddressLabels/req";
import { DescribeAddressLabelsResponse } from "./DescribeAddressLabels/res";
import { DescribeMaliciousAddressRequest } from "./DescribeMaliciousAddress/req";
import { DescribeMaliciousAddressResponse } from "./DescribeMaliciousAddress/res";
import { DescribeTransactionsListRequest } from "./DescribeTransactionsList/req";
import { DescribeTransactionsListResponse } from "./DescribeTransactionsList/res";
import { CardOcrRequest } from "./CardOcr/req";
import { CardOcrResponse } from "./CardOcr/res";
import { DocOcrRequest } from "./DocOcr/req";
import { DocOcrResponse } from "./DocOcr/res";
import { FraudResultCallBackRequest } from "./FraudResultCallBack/req";
import { FraudResultCallBackResponse } from "./FraudResultCallBack/res";
import { DeleteVerifyResultRequest } from "./DeleteVerifyResult/req";
import { DeleteVerifyResultResponse } from "./DeleteVerifyResult/res";
import { EkycVerifyRequest } from "./EkycVerify/req";
import { EkycVerifyResponse } from "./EkycVerify/res";
import { DescribeWeb3AddressLabelsRequest } from "./DescribeWeb3AddressLabels/req";
import { DescribeWeb3AddressLabelsResponse } from "./DescribeWeb3AddressLabels/res";
import { DescribeWeb3RiskScoreRequest } from "./DescribeWeb3RiskScore/req";
import { DescribeWeb3RiskScoreResponse } from "./DescribeWeb3RiskScore/res";
import { DescribeWeb3TransactionLabelsRequest } from "./DescribeWeb3TransactionLabels/req";
import { DescribeWeb3TransactionLabelsResponse } from "./DescribeWeb3TransactionLabels/res";
import { Id2MetaVerifyIntlRequest } from "./Id2MetaVerifyIntl/req";
import { Id2MetaVerifyIntlResponse } from "./Id2MetaVerifyIntl/res";
import { Mobile3MetaVerifyIntlRequest } from "./Mobile3MetaVerifyIntl/req";
import { Mobile3MetaVerifyIntlResponse } from "./Mobile3MetaVerifyIntl/res";

interface CLOUDAUTH_INTL {
    /**
     * 初始化。
     */
    Initialize(query: InitializeRequest): Promise<InitializeResponse>;
    /**
     * 查询认证结果。
     */
    CheckResult(query: CheckResultRequest): Promise<CheckResultResponse>;
    /**
     * 通过人脸识别技术，可以对传入的两张人脸图片进行比对验证，返回人脸对比结果和相似度分值。
     */
    FaceCompare(query: FaceCompareRequest): Promise<FaceCompareResponse>;
    /**
     * 静默活体纯服务端能力Api
     */
    FaceLiveness(query: FaceLivenessRequest): Promise<FaceLivenessResponse>;
    /**
     * 查询地址风险。
     */
    DescribeRiskScore(query: DescribeRiskScoreRequest): Promise<DescribeRiskScoreResponse>;
    /**
     * 查询地址概览。
     */
    DescribeAddressOverview(query: DescribeAddressOverviewRequest): Promise<DescribeAddressOverviewResponse>;
    /**
     * 查询地址标签。
     */
    DescribeAddressLabels(query: DescribeAddressLabelsRequest): Promise<DescribeAddressLabelsResponse>;
    /**
     * 恶意钱包地址库接口。
     */
    DescribeMaliciousAddress(query: DescribeMaliciousAddressRequest): Promise<DescribeMaliciousAddressResponse>;
    /**
     * 查询交易列表。
     */
    DescribeTransactionsList(query: DescribeTransactionsListRequest): Promise<DescribeTransactionsListResponse>;
    /**
     * 卡证Ocr纯服务端能力Api。
     */
    CardOcr(query: CardOcrRequest): Promise<CardOcrResponse>;
    /**
     * 卡证OCR纯服务端能力Api
     */
    DocOcr(query: DocOcrRequest): Promise<DocOcrResponse>;
    /**
     * ekyc-global防伪回调接口
     */
    FraudResultCallBack(query: FraudResultCallBackRequest): Promise<FraudResultCallBackResponse>;
    /**
     * 删除用户认证记录相关数据
     */
    DeleteVerifyResult(query: DeleteVerifyResultRequest): Promise<DeleteVerifyResultResponse>;
    /**
     * ekyc方案纯服务端接口
     */
    EkycVerify(query: EkycVerifyRequest): Promise<EkycVerifyResponse>;
    /**
     * Query the Information of address.
     */
    DescribeWeb3AddressLabels(query: DescribeWeb3AddressLabelsRequest): Promise<DescribeWeb3AddressLabelsResponse>;
    /**
     * Query risk score, risk detail list for a given address
     */
    DescribeWeb3RiskScore(query: DescribeWeb3RiskScoreRequest): Promise<DescribeWeb3RiskScoreResponse>;
    /**
     * Query the Information of transaction.
     */
    DescribeWeb3TransactionLabels(query: DescribeWeb3TransactionLabelsRequest): Promise<DescribeWeb3TransactionLabelsResponse>;
    /**
     * 传入姓名和身份证号，通过权威数据源验证其真实性和一致性。
     */
    Id2MetaVerifyIntl(query: Id2MetaVerifyIntlRequest): Promise<Id2MetaVerifyIntlResponse>;
    /**
     * 传入手机号、姓名、身份证号，通过权威数据源验证其真实性和一致性，如果不一致，返回不一致的原因。
     */
    Mobile3MetaVerifyIntl(query: Mobile3MetaVerifyIntlRequest): Promise<Mobile3MetaVerifyIntlResponse>;
}
export default CLOUDAUTH_INTL;
