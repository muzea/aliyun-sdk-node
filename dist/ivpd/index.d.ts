import { ChangeImageSizeRequest } from "./ChangeImageSize/req";
import { ChangeImageSizeResponse } from "./ChangeImageSize/res";
import { DetectImageElementsRequest } from "./DetectImageElements/req";
import { DetectImageElementsResponse } from "./DetectImageElements/res";
import { ExtendImageStyleRequest } from "./ExtendImageStyle/req";
import { ExtendImageStyleResponse } from "./ExtendImageStyle/res";
import { MakeSuperResolutionImageRequest } from "./MakeSuperResolutionImage/req";
import { MakeSuperResolutionImageResponse } from "./MakeSuperResolutionImage/res";
import { RecognizeImageColorRequest } from "./RecognizeImageColor/req";
import { RecognizeImageColorResponse } from "./RecognizeImageColor/res";
import { RecognizeImageStyleRequest } from "./RecognizeImageStyle/req";
import { RecognizeImageStyleResponse } from "./RecognizeImageStyle/res";
import { RecolorImageRequest } from "./RecolorImage/req";
import { RecolorImageResponse } from "./RecolorImage/res";
import { SegmentBodyRequest } from "./SegmentBody/req";
import { SegmentBodyResponse } from "./SegmentBody/res";
import { SegmentImageRequest } from "./SegmentImage/req";
import { SegmentImageResponse } from "./SegmentImage/res";

interface IVPD {
    /**
     * 智能调节图像尺寸，支持自动裁剪、补全等多种方案。
     */
    ChangeImageSize(query: ChangeImageSizeRequest): Promise<ChangeImageSizeResponse>;
    /**
     * 识别输入图中所包含的元素，用矩形框标注出其位置，并区分其对应的基本类型（人/物、修饰、文案）。
     */
    DetectImageElements(query: DetectImageElementsRequest): Promise<DetectImageElementsResponse>;
    /**
     * 将输入图按照指定的风格图像进行风格的迁移，使得图像的色彩、笔触等视觉风格发生转化。
     */
    ExtendImageStyle(query: ExtendImageStyleRequest): Promise<ExtendImageStyleResponse>;
    /**
     * 将小图放大四倍，基于推断出的细节使得结果图像不显得模糊。
     */
    MakeSuperResolutionImage(query: MakeSuperResolutionImageRequest): Promise<MakeSuperResolutionImageResponse>;
    /**
     * 对输入图的颜色信息进行分析，给出颜色值（RGB形式和HEX格式）与对应的占比信息。
     */
    RecognizeImageColor(query: RecognizeImageColorRequest): Promise<RecognizeImageColorResponse>;
    /**
     * 对输入图的风格类型进行分析，给出可能的风格标签。
     */
    RecognizeImageStyle(query: RecognizeImageStyleRequest): Promise<RecognizeImageStyleResponse>;
    /**
     * 将输入图自动或根据指定色板进行色彩转换，同时保证视觉热点区域避免不正常拓色。
     */
    RecolorImage(query: RecolorImageRequest): Promise<RecolorImageResponse>;
    SegmentBody(query: SegmentBodyRequest): Promise<SegmentBodyResponse>;
    /**
     * 对输入图中主体进行通用分割，输出对应的png透明图，支持包括人体、动物、物品等。
     */
    SegmentImage(query: SegmentImageRequest): Promise<SegmentImageResponse>;
}
export default IVPD;
