import { CalcCACSRequest } from "./CalcCACS/req";
import { CalcCACSResponse } from "./CalcCACS/res";
import { DetectCovid19CadRequest } from "./DetectCovid19Cad/req";
import { DetectCovid19CadResponse } from "./DetectCovid19Cad/res";
import { DetectLungNoduleRequest } from "./DetectLungNodule/req";
import { DetectLungNoduleResponse } from "./DetectLungNodule/res";
import { DetectRibFractureRequest } from "./DetectRibFracture/req";
import { DetectRibFractureResponse } from "./DetectRibFracture/res";
import { DetectSkinDiseaseRequest } from "./DetectSkinDisease/req";
import { DetectSkinDiseaseResponse } from "./DetectSkinDisease/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { RunCTRegistrationRequest } from "./RunCTRegistration/req";
import { RunCTRegistrationResponse } from "./RunCTRegistration/res";
import { RunMedQARequest } from "./RunMedQA/req";
import { RunMedQAResponse } from "./RunMedQA/res";
import { ScreenChestCTRequest } from "./ScreenChestCT/req";
import { ScreenChestCTResponse } from "./ScreenChestCT/res";
import { AnalyzeChestVesselRequest } from "./AnalyzeChestVessel/req";
import { AnalyzeChestVesselResponse } from "./AnalyzeChestVessel/res";
import { FeedbackSessionRequest } from "./FeedbackSession/req";
import { FeedbackSessionResponse } from "./FeedbackSession/res";
import { DetectPancRequest } from "./DetectPanc/req";
import { DetectPancResponse } from "./DetectPanc/res";
import { DetectLymphRequest } from "./DetectLymph/req";
import { DetectLymphResponse } from "./DetectLymph/res";
import { SegmentOARRequest } from "./SegmentOAR/req";
import { SegmentOARResponse } from "./SegmentOAR/res";
import { ScreenECRequest } from "./ScreenEC/req";
import { ScreenECResponse } from "./ScreenEC/res";
import { TargetVolumeSegmentRequest } from "./TargetVolumeSegment/req";
import { TargetVolumeSegmentResponse } from "./TargetVolumeSegment/res";
import { SegmentLymphNodeRequest } from "./SegmentLymphNode/req";
import { SegmentLymphNodeResponse } from "./SegmentLymphNode/res";
import { CalcBMDRequest } from "./CalcBMD/req";
import { CalcBMDResponse } from "./CalcBMD/res";
import { DetectLiverSteatosisRequest } from "./DetectLiverSteatosis/req";
import { DetectLiverSteatosisResponse } from "./DetectLiverSteatosis/res";
import { ScreenCRCRequest } from "./ScreenCRC/req";
import { ScreenCRCResponse } from "./ScreenCRC/res";
import { ScreenGCRequest } from "./ScreenGC/req";
import { ScreenGCResponse } from "./ScreenGC/res";
import { ScreenLCRequest } from "./ScreenLC/req";
import { ScreenLCResponse } from "./ScreenLC/res";
import { PredictCVDRequest } from "./PredictCVD/req";
import { PredictCVDResponse } from "./PredictCVD/res";

interface IMAGEPROCESS {
    /**
     * 本文介绍冠脉钙化积分测算CalcCACS的语法及示例。
     */
    CalcCACS(query: CalcCACSRequest): Promise<CalcCACSResponse>;
    /**
     * 本文介绍新冠病毒肺炎辅助诊断DetectCovid19Cad的语法及示例。
     */
    DetectCovid19Cad(query: DetectCovid19CadRequest): Promise<DetectCovid19CadResponse>;
    /**
     * 本文介绍胸部CT肺结节检测DetectLungNodule的语法及示例。
     */
    DetectLungNodule(query: DetectLungNoduleRequest): Promise<DetectLungNoduleResponse>;
    /**
     * 本文介绍肋骨骨折检测DetectRibFracture的语法及示例。
     */
    DetectRibFracture(query: DetectRibFractureRequest): Promise<DetectRibFractureResponse>;
    /**
     * 本文介绍皮肤病检测DetectSkinDisease的语法及示例。
     */
    DetectSkinDisease(query: DetectSkinDiseaseRequest): Promise<DetectSkinDiseaseResponse>;
    /**
     * 本文介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍胸部CT配准RunCTRegistration的语法及示例。
     */
    RunCTRegistration(query: RunCTRegistrationRequest): Promise<RunCTRegistrationResponse>;
    /**
     * 本文介绍医学智能问答RunMedQA的语法及示例。
     */
    RunMedQA(query: RunMedQARequest): Promise<RunMedQAResponse>;
    /**
     * 本文介绍胸部CT平扫筛查ScreenChestCT的语法及示例。
     */
    ScreenChestCT(query: ScreenChestCTRequest): Promise<ScreenChestCTResponse>;
    /**
     * 本文介绍主动脉瘤肺动脉高压检测AnalyzeChestVessel的语法及示例。
     */
    AnalyzeChestVessel(query: AnalyzeChestVesselRequest): Promise<AnalyzeChestVesselResponse>;
    /**
     * 本文介绍会话反馈FeedbackSession的语法及示例。
     */
    FeedbackSession(query: FeedbackSessionRequest): Promise<FeedbackSessionResponse>;
    /**
     * 本文介绍胰腺癌检测DetectPanc的语法及示例。
     */
    DetectPanc(query: DetectPancRequest): Promise<DetectPancResponse>;
    /**
     * 本文介绍淋巴结检测DetectLymph的语法及示例。
     */
    DetectLymph(query: DetectLymphRequest): Promise<DetectLymphResponse>;
    /**
     * 本文介绍多器官分割SegmentOAR的语法及示例。
     */
    SegmentOAR(query: SegmentOARRequest): Promise<SegmentOARResponse>;
    /**
     * 本文介绍食管癌检测ScreenEC的语法及示例。
     */
    ScreenEC(query: ScreenECRequest): Promise<ScreenECResponse>;
    /**
     * 本文介绍放疗靶区勾画TargetVolumeSegment的语法及示例。
     */
    TargetVolumeSegment(query: TargetVolumeSegmentRequest): Promise<TargetVolumeSegmentResponse>;
    /**
     * 本文介绍图像分析处理（imageprocess）类目下的放疗淋巴站分割SegmentLymphNode的语法及示例。
     */
    SegmentLymphNode(query: SegmentLymphNodeRequest): Promise<SegmentLymphNodeResponse>;
    /**
     * 本文介绍图像分析处理（imageprocess）类目下的骨密度估计CalcBMD的语法及示例。
     */
    CalcBMD(query: CalcBMDRequest): Promise<CalcBMDResponse>;
    /**
     * 本文介绍图像分析处理（imageprocess）类目下的脂肪肝检测DetectLiverSteatosis的语法及示例。
     */
    DetectLiverSteatosis(query: DetectLiverSteatosisRequest): Promise<DetectLiverSteatosisResponse>;
    /**
     * 本文介绍图像分析处理（imageprocess）类目下的结直肠癌检测ScreenCRC的语法及示例。
     */
    ScreenCRC(query: ScreenCRCRequest): Promise<ScreenCRCResponse>;
    /**
     * 本文介绍图像分析处理（imageprocess）类目下的胃癌检测ScreenGC的语法及示例。
     */
    ScreenGC(query: ScreenGCRequest): Promise<ScreenGCResponse>;
    /**
     * 本文介绍图像分析处理（imageprocess）类目下的肝癌检测ScreenLC的语法及示例。
     */
    ScreenLC(query: ScreenLCRequest): Promise<ScreenLCResponse>;
    /**
     * 本文介绍图像分析处理（imageprocess）类目下的CVD心血管不良事件检测PredictCVD的语法及示例。
     */
    PredictCVD(query: PredictCVDRequest): Promise<PredictCVDResponse>;
}
export default IMAGEPROCESS;
