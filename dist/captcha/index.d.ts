import { VerifyCaptchaRequest } from "./VerifyCaptcha/req";
import { VerifyCaptchaResponse } from "./VerifyCaptcha/res";
import { VerifyIntelligentCaptchaRequest } from "./VerifyIntelligentCaptcha/req";
import { VerifyIntelligentCaptchaResponse } from "./VerifyIntelligentCaptcha/res";

interface CAPTCHA {
    /**
     * 验证码验证接口。
     */
    VerifyCaptcha(query: VerifyCaptchaRequest): Promise<VerifyCaptchaResponse>;
    /**
     * 验证码智能验证接口
     */
    VerifyIntelligentCaptcha(query: VerifyIntelligentCaptchaRequest): Promise<VerifyIntelligentCaptchaResponse>;
}
export default CAPTCHA;
