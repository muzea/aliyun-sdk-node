import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { RecognizeBankCardRequest } from "./RecognizeBankCard/req";
import { RecognizeBankCardResponse } from "./RecognizeBankCard/res";
import { RecognizeBusinessLicenseRequest } from "./RecognizeBusinessLicense/req";
import { RecognizeBusinessLicenseResponse } from "./RecognizeBusinessLicense/res";
import { RecognizeCharacterRequest } from "./RecognizeCharacter/req";
import { RecognizeCharacterResponse } from "./RecognizeCharacter/res";
import { RecognizeDriverLicenseRequest } from "./RecognizeDriverLicense/req";
import { RecognizeDriverLicenseResponse } from "./RecognizeDriverLicense/res";
import { RecognizeDrivingLicenseRequest } from "./RecognizeDrivingLicense/req";
import { RecognizeDrivingLicenseResponse } from "./RecognizeDrivingLicense/res";
import { RecognizeIdentityCardRequest } from "./RecognizeIdentityCard/req";
import { RecognizeIdentityCardResponse } from "./RecognizeIdentityCard/res";
import { RecognizeLicensePlateRequest } from "./RecognizeLicensePlate/req";
import { RecognizeLicensePlateResponse } from "./RecognizeLicensePlate/res";
import { RecognizeQrCodeRequest } from "./RecognizeQrCode/req";
import { RecognizeQrCodeResponse } from "./RecognizeQrCode/res";
import { RecognizeTableRequest } from "./RecognizeTable/req";
import { RecognizeTableResponse } from "./RecognizeTable/res";
import { RecognizeTaxiInvoiceRequest } from "./RecognizeTaxiInvoice/req";
import { RecognizeTaxiInvoiceResponse } from "./RecognizeTaxiInvoice/res";
import { RecognizeTrainTicketRequest } from "./RecognizeTrainTicket/req";
import { RecognizeTrainTicketResponse } from "./RecognizeTrainTicket/res";
import { RecognizeVINCodeRequest } from "./RecognizeVINCode/req";
import { RecognizeVINCodeResponse } from "./RecognizeVINCode/res";
import { RecognizeVATInvoiceRequest } from "./RecognizeVATInvoice/req";
import { RecognizeVATInvoiceResponse } from "./RecognizeVATInvoice/res";
import { RecognizePdfRequest } from "./RecognizePdf/req";
import { RecognizePdfResponse } from "./RecognizePdf/res";
import { RecognizeTicketInvoiceRequest } from "./RecognizeTicketInvoice/req";
import { RecognizeTicketInvoiceResponse } from "./RecognizeTicketInvoice/res";
import { RecognizeQuotaInvoiceRequest } from "./RecognizeQuotaInvoice/req";
import { RecognizeQuotaInvoiceResponse } from "./RecognizeQuotaInvoice/res";
import { RecognizeVideoCharacterRequest } from "./RecognizeVideoCharacter/req";
import { RecognizeVideoCharacterResponse } from "./RecognizeVideoCharacter/res";

interface OCR {
    /**
     * 本文介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍银行卡识别RecognizeBankCard的语法及示例。
     */
    RecognizeBankCard(query: RecognizeBankCardRequest): Promise<RecognizeBankCardResponse>;
    /**
     * 本文介绍营业执照识别RecognizeBusinessLicense的语法及示例。
     */
    RecognizeBusinessLicense(query: RecognizeBusinessLicenseRequest): Promise<RecognizeBusinessLicenseResponse>;
    /**
     * 本文介绍通用文字识别RecognizeCharacter的语法及示例。
     */
    RecognizeCharacter(query: RecognizeCharacterRequest): Promise<RecognizeCharacterResponse>;
    /**
     * 本文介绍驾驶证识别RecognizeDriverLicense的语法及示例。
     */
    RecognizeDriverLicense(query: RecognizeDriverLicenseRequest): Promise<RecognizeDriverLicenseResponse>;
    /**
     * 本文介绍行驶证识别RecognizeDrivingLicense的语法及示例。
     */
    RecognizeDrivingLicense(query: RecognizeDrivingLicenseRequest): Promise<RecognizeDrivingLicenseResponse>;
    /**
     * 本文介绍身份证识别RecognizeIdentityCard的语法及示例。
     */
    RecognizeIdentityCard(query: RecognizeIdentityCardRequest): Promise<RecognizeIdentityCardResponse>;
    /**
     * 本文介绍车牌识别RecognizeLicensePlate的语法及示例。
     */
    RecognizeLicensePlate(query: RecognizeLicensePlateRequest): Promise<RecognizeLicensePlateResponse>;
    /**
     * 本文介绍二维码识别RecognizeQrCode的语法及示例。
     */
    RecognizeQrCode(query: RecognizeQrCodeRequest): Promise<RecognizeQrCodeResponse>;
    /**
     * 本文介绍表格识别RecognizeTable的语法及示例。
     */
    RecognizeTable(query: RecognizeTableRequest): Promise<RecognizeTableResponse>;
    /**
     * 本文介绍出租车发票识别RecognizeTaxiInvoice的语法及示例。
     */
    RecognizeTaxiInvoice(query: RecognizeTaxiInvoiceRequest): Promise<RecognizeTaxiInvoiceResponse>;
    /**
     * 本文介绍火车票识别RecognizeTrainTicket的语法及示例。
     */
    RecognizeTrainTicket(query: RecognizeTrainTicketRequest): Promise<RecognizeTrainTicketResponse>;
    /**
     * 本文介绍VIN码识别RecognizeVINCode的语法及示例。
     */
    RecognizeVINCode(query: RecognizeVINCodeRequest): Promise<RecognizeVINCodeResponse>;
    /**
     * 本文为您介绍增值税发票识别RecognizeVATInvoice的语法及示例。
     */
    RecognizeVATInvoice(query: RecognizeVATInvoiceRequest): Promise<RecognizeVATInvoiceResponse>;
    /**
     * 本文介绍PDF识别RecognizePdf的语法及示例。
     */
    RecognizePdf(query: RecognizePdfRequest): Promise<RecognizePdfResponse>;
    /**
     * 本文介绍增值税发票卷票识别RecognizeTicketInvoice的语法及示例。
     */
    RecognizeTicketInvoice(query: RecognizeTicketInvoiceRequest): Promise<RecognizeTicketInvoiceResponse>;
    /**
     * 本文介绍定额发票识别RecognizeQuotaInvoice的语法及示例。
     */
    RecognizeQuotaInvoice(query: RecognizeQuotaInvoiceRequest): Promise<RecognizeQuotaInvoiceResponse>;
    /**
     * 本文介绍RecognizeVideoCharacter视频文字识别的语法及示例。
     */
    RecognizeVideoCharacter(query: RecognizeVideoCharacterRequest): Promise<RecognizeVideoCharacterResponse>;
}
export default OCR;
