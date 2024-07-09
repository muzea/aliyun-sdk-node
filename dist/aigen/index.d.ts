import { GenerateCosplayImageRequest } from "./GenerateCosplayImage/req";
import { GenerateCosplayImageResponse } from "./GenerateCosplayImage/res";
import { InteractiveFullSegmentationRequest } from "./InteractiveFullSegmentation/req";
import { InteractiveFullSegmentationResponse } from "./InteractiveFullSegmentation/res";
import { InteractiveScribbleSegmentationRequest } from "./InteractiveScribbleSegmentation/req";
import { InteractiveScribbleSegmentationResponse } from "./InteractiveScribbleSegmentation/res";
import { GenerateTextDeformationRequest } from "./GenerateTextDeformation/req";
import { GenerateTextDeformationResponse } from "./GenerateTextDeformation/res";
import { GenerateTextTextureRequest } from "./GenerateTextTexture/req";
import { GenerateTextTextureResponse } from "./GenerateTextTexture/res";

interface AIGEN {
    /**
     * 本文介绍生成专区（aigen）类目下的Cosplay-动漫人物生成GenerateCosplayImage的语法及示例。
     */
    GenerateCosplayImage(query: GenerateCosplayImageRequest): Promise<GenerateCosplayImageResponse>;
    /**
     * 本文介绍生成专区（aigen）类目下的全图分割InteractiveFullSegmentation的语法及示例。
     */
    InteractiveFullSegmentation(query: InteractiveFullSegmentationRequest): Promise<InteractiveFullSegmentationResponse>;
    /**
     * 本文介绍生成专区（aigen）类目下的交互式涂抹分割InteractiveScribbleSegmentation的语法及示例。
     */
    InteractiveScribbleSegmentation(query: InteractiveScribbleSegmentationRequest): Promise<InteractiveScribbleSegmentationResponse>;
    /**
     * 本文介绍生成专区（aigen）类目下的锦书-文字变形生成GenerateTextDeformation的语法及示例。
     */
    GenerateTextDeformation(query: GenerateTextDeformationRequest): Promise<GenerateTextDeformationResponse>;
    /**
     * 本文介绍生成专区（aigen）类目下的锦书-文字纹理生成GenerateTextTexture的语法及示例。
     */
    GenerateTextTexture(query: GenerateTextTextureRequest): Promise<GenerateTextTextureResponse>;
}
export default AIGEN;
