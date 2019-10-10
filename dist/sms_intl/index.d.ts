import { SendMessageToGlobeRequest } from "./SendMessageToGlobe/req";
import { SendMessageToGlobeResponse } from "./SendMessageToGlobe/res";
import { SmsConversionRequest } from "./SmsConversion/req";
import { SmsConversionResponse } from "./SmsConversion/res";
import { QueryMessageRequest } from "./QueryMessage/req";
import { QueryMessageResponse } from "./QueryMessage/res";
import { SendMessageWithTemplateRequest } from "./SendMessageWithTemplate/req";
import { SendMessageWithTemplateResponse } from "./SendMessageWithTemplate/res";
import { BatchSendMessageToGlobeRequest } from "./BatchSendMessageToGlobe/req";
import { BatchSendMessageToGlobeResponse } from "./BatchSendMessageToGlobe/res";

interface SMS_INTL {
    SendMessageToGlobe(query: SendMessageToGlobeRequest): Promise<SendMessageToGlobeResponse>;
    SmsConversion(query: SmsConversionRequest): Promise<SmsConversionResponse>;
    QueryMessage(query: QueryMessageRequest): Promise<QueryMessageResponse>;
    SendMessageWithTemplate(query: SendMessageWithTemplateRequest): Promise<SendMessageWithTemplateResponse>;
    BatchSendMessageToGlobe(query: BatchSendMessageToGlobeRequest): Promise<BatchSendMessageToGlobeResponse>;
}
export default SMS_INTL;
