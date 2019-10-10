import { QuerySendDetailsRequest } from "./QuerySendDetails/req";
import { QuerySendDetailsResponse } from "./QuerySendDetails/res";
import { SendBatchSmsRequest } from "./SendBatchSms/req";
import { SendBatchSmsResponse } from "./SendBatchSms/res";
import { SendSmsRequest } from "./SendSms/req";
import { SendSmsResponse } from "./SendSms/res";
import { AddSmsSignRequest } from "./AddSmsSign/req";
import { AddSmsSignResponse } from "./AddSmsSign/res";
import { DeleteSmsSignRequest } from "./DeleteSmsSign/req";
import { DeleteSmsSignResponse } from "./DeleteSmsSign/res";
import { AddSmsTemplateRequest } from "./AddSmsTemplate/req";
import { AddSmsTemplateResponse } from "./AddSmsTemplate/res";
import { DeleteSmsTemplateRequest } from "./DeleteSmsTemplate/req";
import { DeleteSmsTemplateResponse } from "./DeleteSmsTemplate/res";
import { ModifySmsSignRequest } from "./ModifySmsSign/req";
import { ModifySmsSignResponse } from "./ModifySmsSign/res";
import { ModifySmsTemplateRequest } from "./ModifySmsTemplate/req";
import { ModifySmsTemplateResponse } from "./ModifySmsTemplate/res";
import { QuerySmsSignRequest } from "./QuerySmsSign/req";
import { QuerySmsSignResponse } from "./QuerySmsSign/res";
import { QuerySmsTemplateRequest } from "./QuerySmsTemplate/req";
import { QuerySmsTemplateResponse } from "./QuerySmsTemplate/res";

interface DYSMSAPI {
    /**
    * 调用QuerySendDetails接口查看短信发送记录和发送状态。
    */ QuerySendDetails(query: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse>;
    /**
    * 调用SendBatchSms接口批量发送短信。
    */ SendBatchSms(query: SendBatchSmsRequest): Promise<SendBatchSmsResponse>;
    /**
    * 调用SendSms发送短信。
    */ SendSms(query: SendSmsRequest): Promise<SendSmsResponse>;
    /**
    * 调用短信AddSmsSign申请短信签名。
    */ AddSmsSign(query: AddSmsSignRequest): Promise<AddSmsSignResponse>;
    /**
    * 调用接口DeleteSmsSign删除短信签名。
    */ DeleteSmsSign(query: DeleteSmsSignRequest): Promise<DeleteSmsSignResponse>;
    AddSmsTemplate(query: AddSmsTemplateRequest): Promise<AddSmsTemplateResponse>;
    DeleteSmsTemplate(query: DeleteSmsTemplateRequest): Promise<DeleteSmsTemplateResponse>;
    ModifySmsSign(query: ModifySmsSignRequest): Promise<ModifySmsSignResponse>;
    ModifySmsTemplate(query: ModifySmsTemplateRequest): Promise<ModifySmsTemplateResponse>;
    QuerySmsSign(query: QuerySmsSignRequest): Promise<QuerySmsSignResponse>;
    QuerySmsTemplate(query: QuerySmsTemplateRequest): Promise<QuerySmsTemplateResponse>;
}
export default DYSMSAPI;
