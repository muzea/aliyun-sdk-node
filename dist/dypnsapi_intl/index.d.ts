import { SearchVerificationRequest } from "./SearchVerification/req";
import { SearchVerificationResponse } from "./SearchVerification/res";
import { StartVerificationRequest } from "./StartVerification/req";
import { StartVerificationResponse } from "./StartVerification/res";
import { CheckVerificationRequest } from "./CheckVerification/req";
import { CheckVerificationResponse } from "./CheckVerification/res";

interface DYPNSAPI_INTL {
    /**
     * 查询验证结果详情。
     */
    SearchVerification(query: SearchVerificationRequest): Promise<SearchVerificationResponse>;
    /**
     * 通过指定的通道向最终用户发送验证码，支持的通道有短信、语音、和whatsapp。
     */
    StartVerification(query: StartVerificationRequest): Promise<StartVerificationResponse>;
    /**
     * 调用CheckVerification接口完成验证码校验。
     */
    CheckVerification(query: CheckVerificationRequest): Promise<CheckVerificationResponse>;
}
export default DYPNSAPI_INTL;
