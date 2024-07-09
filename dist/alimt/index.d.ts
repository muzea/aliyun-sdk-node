import { CreateDocTranslateTaskRequest } from "./CreateDocTranslateTask/req";
import { CreateDocTranslateTaskResponse } from "./CreateDocTranslateTask/res";
import { CreateImageTranslateTaskRequest } from "./CreateImageTranslateTask/req";
import { CreateImageTranslateTaskResponse } from "./CreateImageTranslateTask/res";
import { GetDetectLanguageRequest } from "./GetDetectLanguage/req";
import { GetDetectLanguageResponse } from "./GetDetectLanguage/res";
import { GetImageDiagnoseRequest } from "./GetImageDiagnose/req";
import { GetImageDiagnoseResponse } from "./GetImageDiagnose/res";
import { GetDocTranslateTaskRequest } from "./GetDocTranslateTask/req";
import { GetDocTranslateTaskResponse } from "./GetDocTranslateTask/res";
import { GetImageTranslateRequest } from "./GetImageTranslate/req";
import { GetImageTranslateResponse } from "./GetImageTranslate/res";
import { GetImageTranslateTaskRequest } from "./GetImageTranslateTask/req";
import { GetImageTranslateTaskResponse } from "./GetImageTranslateTask/res";
import { GetTitleDiagnoseRequest } from "./GetTitleDiagnose/req";
import { GetTitleDiagnoseResponse } from "./GetTitleDiagnose/res";
import { GetTitleGenerateRequest } from "./GetTitleGenerate/req";
import { GetTitleGenerateResponse } from "./GetTitleGenerate/res";
import { GetTitleIntelligenceRequest } from "./GetTitleIntelligence/req";
import { GetTitleIntelligenceResponse } from "./GetTitleIntelligence/res";
import { OpenAlimtServiceRequest } from "./OpenAlimtService/req";
import { OpenAlimtServiceResponse } from "./OpenAlimtService/res";
import { TranslateRequest } from "./Translate/req";
import { TranslateResponse } from "./Translate/res";
import { TranslateCertificateRequest } from "./TranslateCertificate/req";
import { TranslateCertificateResponse } from "./TranslateCertificate/res";
import { TranslateECommerceRequest } from "./TranslateECommerce/req";
import { TranslateECommerceResponse } from "./TranslateECommerce/res";
import { TranslateGeneralRequest } from "./TranslateGeneral/req";
import { TranslateGeneralResponse } from "./TranslateGeneral/res";
import { GetBatchTranslateRequest } from "./GetBatchTranslate/req";
import { GetBatchTranslateResponse } from "./GetBatchTranslate/res";
import { GetTranslateReportRequest } from "./GetTranslateReport/req";
import { GetTranslateReportResponse } from "./GetTranslateReport/res";
import { TranslateImageRequest } from "./TranslateImage/req";
import { TranslateImageResponse } from "./TranslateImage/res";
import { TranslateImageBatchRequest } from "./TranslateImageBatch/req";
import { TranslateImageBatchResponse } from "./TranslateImageBatch/res";
import { GetTranslateImageBatchResultRequest } from "./GetTranslateImageBatchResult/req";
import { GetTranslateImageBatchResultResponse } from "./GetTranslateImageBatchResult/res";
import { GetAsyncTranslateRequest } from "./GetAsyncTranslate/req";
import { GetAsyncTranslateResponse } from "./GetAsyncTranslate/res";
import { CreateAsyncTranslateRequest } from "./CreateAsyncTranslate/req";
import { CreateAsyncTranslateResponse } from "./CreateAsyncTranslate/res";

interface ALIMT {
    /**
     * 创建文档翻译任务。
     */
    CreateDocTranslateTask(query: CreateDocTranslateTaskRequest): Promise<CreateDocTranslateTaskResponse>;
    /**
     * 创建异步图片翻译，图片翻译包含文字识别、文本翻译、文字回填等能力。
     */
    CreateImageTranslateTask(query: CreateImageTranslateTaskRequest): Promise<CreateImageTranslateTaskResponse>;
    /**
     * 语种识别API说明文档。
     */
    GetDetectLanguage(query: GetDetectLanguageRequest): Promise<GetDetectLanguageResponse>;
    /**
     * 能够识别图片中的文字的语种。
     */
    GetImageDiagnose(query: GetImageDiagnoseRequest): Promise<GetImageDiagnoseResponse>;
    /**
     * 查询文档翻译任务。
     */
    GetDocTranslateTask(query: GetDocTranslateTaskRequest): Promise<GetDocTranslateTaskResponse>;
    /**
     * 包含文字识别、文本翻译、文字回填等能力。
     */
    GetImageTranslate(query: GetImageTranslateRequest): Promise<GetImageTranslateResponse>;
    /**
     * 通过任务ID获取异步图片翻译结果。
     */
    GetImageTranslateTask(query: GetImageTranslateTaskRequest): Promise<GetImageTranslateTaskResponse>;
    /**
     * 通过商品标题质量诊断服务，产出可视化的标题质量分，便于卖家对现有的商品标题质量有实际体感。
     */
    GetTitleDiagnose(query: GetTitleDiagnoseRequest): Promise<GetTitleDiagnoseResponse>;
    /**
     * 基于电商大数据，自动优化商品标题。
     */
    GetTitleGenerate(query: GetTitleGenerateRequest): Promise<GetTitleGenerateResponse>;
    /**
     * 通过类目、平台、关键词，自动生成商品标题。
     */
    GetTitleIntelligence(query: GetTitleIntelligenceRequest): Promise<GetTitleIntelligenceResponse>;
    /**
     * 商品服务开通。
     */
    OpenAlimtService(query: OpenAlimtServiceRequest): Promise<OpenAlimtServiceResponse>;
    /**
     * 调用机器翻译专业版获取翻译结果。
     */
    Translate(query: TranslateRequest): Promise<TranslateResponse>;
    /**
     * 进行证件翻译。
     */
    TranslateCertificate(query: TranslateCertificateRequest): Promise<TranslateCertificateResponse>;
    /**
     * 调用机器翻译专业版获取翻译结果。
     */
    TranslateECommerce(query: TranslateECommerceRequest): Promise<TranslateECommerceResponse>;
    /**
     * 通用翻译接口调用说明。
     */
    TranslateGeneral(query: TranslateGeneralRequest): Promise<TranslateGeneralResponse>;
    /**
     * 机器批量翻译，支持多段文本进行翻译。
     */
    GetBatchTranslate(query: GetBatchTranslateRequest): Promise<GetBatchTranslateResponse>;
    /**
     * 根据API名及开始结束时间获取API调用报表，并根据传入的group按照天或者小时聚合计算后返回。
     */
    GetTranslateReport(query: GetTranslateReportRequest): Promise<GetTranslateReportResponse>;
    /**
     * 将图片上的文字从一种语言翻译成另一种语言，并输出一张尽可能忠于原图的新图片。
     */
    TranslateImage(query: TranslateImageRequest): Promise<TranslateImageResponse>;
    /**
     * 异步将一批图片上的文字从一种语言翻译成另一种语言，并分别输出新的图片。
     */
    TranslateImageBatch(query: TranslateImageBatchRequest): Promise<TranslateImageBatchResponse>;
    /**
     * 获取图片异步批量翻译的结果。
     */
    GetTranslateImageBatchResult(query: GetTranslateImageBatchResultRequest): Promise<GetTranslateImageBatchResultResponse>;
    /**
     * 获取文本异步翻译任务内容。
     */
    GetAsyncTranslate(query: GetAsyncTranslateRequest): Promise<GetAsyncTranslateResponse>;
    /**
     * 机器异步翻译创建任务接口，支持100万以下字符翻译。
     */
    CreateAsyncTranslate(query: CreateAsyncTranslateRequest): Promise<CreateAsyncTranslateResponse>;
}
export default ALIMT;
