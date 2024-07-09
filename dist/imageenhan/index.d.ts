import { AssessCompositionRequest } from "./AssessComposition/req";
import { AssessCompositionResponse } from "./AssessComposition/res";
import { AssessExposureRequest } from "./AssessExposure/req";
import { AssessExposureResponse } from "./AssessExposure/res";
import { AssessSharpnessRequest } from "./AssessSharpness/req";
import { AssessSharpnessResponse } from "./AssessSharpness/res";
import { ChangeImageSizeRequest } from "./ChangeImageSize/req";
import { ChangeImageSizeResponse } from "./ChangeImageSize/res";
import { ColorizeImageRequest } from "./ColorizeImage/req";
import { ColorizeImageResponse } from "./ColorizeImage/res";
import { EnhanceImageColorRequest } from "./EnhanceImageColor/req";
import { EnhanceImageColorResponse } from "./EnhanceImageColor/res";
import { ErasePersonRequest } from "./ErasePerson/req";
import { ErasePersonResponse } from "./ErasePerson/res";
import { ExtendImageStyleRequest } from "./ExtendImageStyle/req";
import { ExtendImageStyleResponse } from "./ExtendImageStyle/res";
import { GenerateCartoonizedImageRequest } from "./GenerateCartoonizedImage/req";
import { GenerateCartoonizedImageResponse } from "./GenerateCartoonizedImage/res";
import { GenerateDynamicImageRequest } from "./GenerateDynamicImage/req";
import { GenerateDynamicImageResponse } from "./GenerateDynamicImage/res";
import { GenerateImageWithTextRequest } from "./GenerateImageWithText/req";
import { GenerateImageWithTextResponse } from "./GenerateImageWithText/res";
import { GenerateImageWithTextAndImageRequest } from "./GenerateImageWithTextAndImage/req";
import { GenerateImageWithTextAndImageResponse } from "./GenerateImageWithTextAndImage/res";
import { GenerateSuperResolutionImageRequest } from "./GenerateSuperResolutionImage/req";
import { GenerateSuperResolutionImageResponse } from "./GenerateSuperResolutionImage/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { ImageBlindCharacterWatermarkRequest } from "./ImageBlindCharacterWatermark/req";
import { ImageBlindCharacterWatermarkResponse } from "./ImageBlindCharacterWatermark/res";
import { ImageBlindPicWatermarkRequest } from "./ImageBlindPicWatermark/req";
import { ImageBlindPicWatermarkResponse } from "./ImageBlindPicWatermark/res";
import { ImitatePhotoStyleRequest } from "./ImitatePhotoStyle/req";
import { ImitatePhotoStyleResponse } from "./ImitatePhotoStyle/res";
import { IntelligentCompositionRequest } from "./IntelligentComposition/req";
import { IntelligentCompositionResponse } from "./IntelligentComposition/res";
import { MakeSuperResolutionImageRequest } from "./MakeSuperResolutionImage/req";
import { MakeSuperResolutionImageResponse } from "./MakeSuperResolutionImage/res";
import { RecolorHDImageRequest } from "./RecolorHDImage/req";
import { RecolorHDImageResponse } from "./RecolorHDImage/res";
import { RecolorImageRequest } from "./RecolorImage/req";
import { RecolorImageResponse } from "./RecolorImage/res";
import { RemoveImageSubtitlesRequest } from "./RemoveImageSubtitles/req";
import { RemoveImageSubtitlesResponse } from "./RemoveImageSubtitles/res";
import { RemoveImageWatermarkRequest } from "./RemoveImageWatermark/req";
import { RemoveImageWatermarkResponse } from "./RemoveImageWatermark/res";

interface IMAGEENHAN {
    /**
     * 本文介绍图像构图美学评分AssessComposition的语法及示例。
     */
    AssessComposition(query: AssessCompositionRequest): Promise<AssessCompositionResponse>;
    /**
     * 本文介绍图像曝光度评分AssessExposure的语法及示例。
     */
    AssessExposure(query: AssessExposureRequest): Promise<AssessExposureResponse>;
    /**
     * 本文介绍图像清晰度评分AssessSharpness的语法及示例。
     */
    AssessSharpness(query: AssessSharpnessRequest): Promise<AssessSharpnessResponse>;
    /**
     * 本文为您介绍图像裁剪ChangeImageSize的语法及示例。
     */
    ChangeImageSize(query: ChangeImageSizeRequest): Promise<ChangeImageSizeResponse>;
    /**
     * 本文介绍图片上色ColorizeImage的语法及示例。
     */
    ColorizeImage(query: ColorizeImageRequest): Promise<ColorizeImageResponse>;
    /**
     * 本文介绍图像色彩增强EnhanceImageColor的语法及示例。
     */
    EnhanceImageColor(query: EnhanceImageColorRequest): Promise<EnhanceImageColorResponse>;
    /**
     * 本文介绍图像人体擦除ErasePerson的语法及示例。
     */
    ErasePerson(query: ErasePersonRequest): Promise<ErasePersonResponse>;
    /**
     * 本文介绍风格迁移ExtendImageStyle的语法及示例。
     */
    ExtendImageStyle(query: ExtendImageStyleRequest): Promise<ExtendImageStyleResponse>;
    /**
     * 本文介绍图像生产（imageenhan）类目下的生成式图像卡通化GenerateCartoonizedImage的语法及示例。
     */
    GenerateCartoonizedImage(query: GenerateCartoonizedImageRequest): Promise<GenerateCartoonizedImageResponse>;
    /**
     * 本文介绍图像微动GenerateDynamicImage的语法及示例。
     */
    GenerateDynamicImage(query: GenerateDynamicImageRequest): Promise<GenerateDynamicImageResponse>;
    /**
     * 本文介绍文本到图像生成GenerateImageWithText的语法及示例。
     */
    GenerateImageWithText(query: GenerateImageWithTextRequest): Promise<GenerateImageWithTextResponse>;
    /**
     * 本文介绍文本和参考图到图像生成GenerateImageWithTextAndImage的语法及示例。
     */
    GenerateImageWithTextAndImage(query: GenerateImageWithTextAndImageRequest): Promise<GenerateImageWithTextAndImageResponse>;
    /**
     * 本文介绍图像生产（imageenhan）类目下的生成式图像超分GenerateSuperResolutionImage的语法及示例。
     */
    GenerateSuperResolutionImage(query: GenerateSuperResolutionImageRequest): Promise<GenerateSuperResolutionImageResponse>;
    /**
     * 本文档介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍图像隐形文字水印ImageBlindCharacterWatermark语法及示例。
     */
    ImageBlindCharacterWatermark(query: ImageBlindCharacterWatermarkRequest): Promise<ImageBlindCharacterWatermarkResponse>;
    /**
     * 本文介绍图像隐形图片水印ImageBlindPicWatermark的语法及示例。
     */
    ImageBlindPicWatermark(query: ImageBlindPicWatermarkRequest): Promise<ImageBlindPicWatermarkResponse>;
    /**
     * 本文介绍照图修图ImitatePhotoStyle的语法及示例。
     */
    ImitatePhotoStyle(query: ImitatePhotoStyleRequest): Promise<ImitatePhotoStyleResponse>;
    /**
     * 智能构图，对图像进行美学评估，智能输出bounding box，可以将原图裁剪成更好的图像。
     */
    IntelligentComposition(query: IntelligentCompositionRequest): Promise<IntelligentCompositionResponse>;
    /**
     * 图像超分辨/清晰化。
     */
    MakeSuperResolutionImage(query: MakeSuperResolutionImageRequest): Promise<MakeSuperResolutionImageResponse>;
    /**
     * 对高清图像进行颜色拓色，并能够保证人像部分颜色不发生变化。
     */
    RecolorHDImage(query: RecolorHDImageRequest): Promise<RecolorHDImageResponse>;
    /**
     * 本文介绍色彩迁移RecolorImage的语法及示例。
     */
    RecolorImage(query: RecolorImageRequest): Promise<RecolorImageResponse>;
    /**
     * 本文介绍字幕擦除RemoveImageSubtitles的语法及示例。
     */
    RemoveImageSubtitles(query: RemoveImageSubtitlesRequest): Promise<RemoveImageSubtitlesResponse>;
    /**
     * 本文介绍图像标志擦除RemoveImageWatermark的语法及示例。
     */
    RemoveImageWatermark(query: RemoveImageWatermarkRequest): Promise<RemoveImageWatermarkResponse>;
}
export default IMAGEENHAN;
