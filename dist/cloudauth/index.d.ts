import { DescribeSmartVerifyRequest } from "./DescribeSmartVerify/req";
import { DescribeSmartVerifyResponse } from "./DescribeSmartVerify/res";
import { ElementSmartVerifyRequest } from "./ElementSmartVerify/req";
import { ElementSmartVerifyResponse } from "./ElementSmartVerify/res";
import { InitSmartVerifyRequest } from "./InitSmartVerify/req";
import { InitSmartVerifyResponse } from "./InitSmartVerify/res";
import { ContrastSmartVerifyRequest } from "./ContrastSmartVerify/req";
import { ContrastSmartVerifyResponse } from "./ContrastSmartVerify/res";
import { VerifyBankElementRequest } from "./VerifyBankElement/req";
import { VerifyBankElementResponse } from "./VerifyBankElement/res";
import { DescribeSmsDetailRequest } from "./DescribeSmsDetail/req";
import { DescribeSmsDetailResponse } from "./DescribeSmsDetail/res";
import { SendSmsRequest } from "./SendSms/req";
import { SendSmsResponse } from "./SendSms/res";

interface CLOUDAUTH {
    /**
     * 查询增强版认证结果
     */
    DescribeSmartVerify(query: DescribeSmartVerifyRequest): Promise<DescribeSmartVerifyResponse>;
    ElementSmartVerify(query: ElementSmartVerifyRequest): Promise<ElementSmartVerifyResponse>;
    /**
     * 发起增强版认证请求
     */
    InitSmartVerify(query: InitSmartVerifyRequest): Promise<InitSmartVerifyResponse>;
    ContrastSmartVerify(query: ContrastSmartVerifyRequest): Promise<ContrastSmartVerifyResponse>;
    VerifyBankElement(query: VerifyBankElementRequest): Promise<VerifyBankElementResponse>;
    /**
     * 查询闪信发送明细
     */
    DescribeSmsDetail(query: DescribeSmsDetailRequest): Promise<DescribeSmsDetailResponse>;
    /**
     * 发起发送闪信请求。单次请求最多可向1000个手机号码发送同样内容的闪信
     */
    SendSms(query: SendSmsRequest): Promise<SendSmsResponse>;
}
export default CLOUDAUTH;
