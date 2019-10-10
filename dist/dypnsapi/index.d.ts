import { CreateVerifySchemeRequest } from "./CreateVerifyScheme/req";
import { CreateVerifySchemeResponse } from "./CreateVerifyScheme/res";
import { GetMobileRequest } from "./GetMobile/req";
import { GetMobileResponse } from "./GetMobile/res";
import { TwiceTelVerifyRequest } from "./TwiceTelVerify/req";
import { TwiceTelVerifyResponse } from "./TwiceTelVerify/res";
import { VerifyMobileRequest } from "./VerifyMobile/req";
import { VerifyMobileResponse } from "./VerifyMobile/res";

interface DYPNSAPI {
    CreateVerifyScheme(query: CreateVerifySchemeRequest): Promise<CreateVerifySchemeResponse>;
    GetMobile(query: GetMobileRequest): Promise<GetMobileResponse>;
    TwiceTelVerify(query: TwiceTelVerifyRequest): Promise<TwiceTelVerifyResponse>;
    VerifyMobile(query: VerifyMobileRequest): Promise<VerifyMobileResponse>;
}
export default DYPNSAPI;
