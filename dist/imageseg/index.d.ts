import { ChangeSkyRequest } from "./ChangeSky/req";
import { ChangeSkyResponse } from "./ChangeSky/res";
import { ParseFaceRequest } from "./ParseFace/req";
import { ParseFaceResponse } from "./ParseFace/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { RefineMaskRequest } from "./RefineMask/req";
import { RefineMaskResponse } from "./RefineMask/res";
import { SegmentBodyRequest } from "./SegmentBody/req";
import { SegmentBodyResponse } from "./SegmentBody/res";
import { SegmentClothRequest } from "./SegmentCloth/req";
import { SegmentClothResponse } from "./SegmentCloth/res";
import { SegmentCommonImageRequest } from "./SegmentCommonImage/req";
import { SegmentCommonImageResponse } from "./SegmentCommonImage/res";
import { SegmentCommodityRequest } from "./SegmentCommodity/req";
import { SegmentCommodityResponse } from "./SegmentCommodity/res";
import { SegmentFoodRequest } from "./SegmentFood/req";
import { SegmentFoodResponse } from "./SegmentFood/res";
import { SegmentHDBodyRequest } from "./SegmentHDBody/req";
import { SegmentHDBodyResponse } from "./SegmentHDBody/res";
import { SegmentHDCommonImageRequest } from "./SegmentHDCommonImage/req";
import { SegmentHDCommonImageResponse } from "./SegmentHDCommonImage/res";
import { SegmentHDSkyRequest } from "./SegmentHDSky/req";
import { SegmentHDSkyResponse } from "./SegmentHDSky/res";
import { SegmentHairRequest } from "./SegmentHair/req";
import { SegmentHairResponse } from "./SegmentHair/res";
import { SegmentHeadRequest } from "./SegmentHead/req";
import { SegmentHeadResponse } from "./SegmentHead/res";
import { SegmentSceneRequest } from "./SegmentScene/req";
import { SegmentSceneResponse } from "./SegmentScene/res";
import { SegmentSkinRequest } from "./SegmentSkin/req";
import { SegmentSkinResponse } from "./SegmentSkin/res";
import { SegmentSkyRequest } from "./SegmentSky/req";
import { SegmentSkyResponse } from "./SegmentSky/res";

interface IMAGESEG {
    /**
     * 本文档介绍天空替换ChangeSky的语法及示例。
     */
    ChangeSky(query: ChangeSkyRequest): Promise<ChangeSkyResponse>;
    /**
     * 本文档为您介绍五官分割ParseFace的语法及示例。
     */
    ParseFace(query: ParseFaceRequest): Promise<ParseFaceResponse>;
    /**
     * 本文介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍Mask精细化分割RefineMask的语法及示例。
     */
    RefineMask(query: RefineMaskRequest): Promise<RefineMaskResponse>;
    /**
     * 本文介绍人体分割SegmentBody的语法及示例。
     */
    SegmentBody(query: SegmentBodyRequest): Promise<SegmentBodyResponse>;
    /**
     * 本文介绍服饰分割SegmentCloth的语法及示例。
     */
    SegmentCloth(query: SegmentClothRequest): Promise<SegmentClothResponse>;
    /**
     * 本文为您介绍通用分割SegmentCommonImage的语法及示例。
     */
    SegmentCommonImage(query: SegmentCommonImageRequest): Promise<SegmentCommonImageResponse>;
    /**
     * 本文介绍商品分割SegmentCommodity的语法及示例。
     */
    SegmentCommodity(query: SegmentCommodityRequest): Promise<SegmentCommodityResponse>;
    /**
     * 本文介绍食品分割SegmentFood的语法及示例。
     */
    SegmentFood(query: SegmentFoodRequest): Promise<SegmentFoodResponse>;
    /**
     * 本文介绍高清人体分割SegmentHDBody的语法及示例。
     */
    SegmentHDBody(query: SegmentHDBodyRequest): Promise<SegmentHDBodyResponse>;
    /**
     * 本文介绍通用高清分割SegmentHDCommonImage的语法及示例。
     */
    SegmentHDCommonImage(query: SegmentHDCommonImageRequest): Promise<SegmentHDCommonImageResponse>;
    /**
     * 本文介绍天空高清分割SegmentHDSky的语法及示例。
     */
    SegmentHDSky(query: SegmentHDSkyRequest): Promise<SegmentHDSkyResponse>;
    /**
     * 本文档介绍头发分割SegmentHair的语法及示例。
     */
    SegmentHair(query: SegmentHairRequest): Promise<SegmentHairResponse>;
    /**
     * 本文介绍头像分割SegmentHead的语法及示例。
     */
    SegmentHead(query: SegmentHeadRequest): Promise<SegmentHeadResponse>;
    /**
     * 本文档介绍室外场景分割SegmentScene的语法及示例。
     */
    SegmentScene(query: SegmentSceneRequest): Promise<SegmentSceneResponse>;
    /**
     * 本文介绍皮肤分割SegmentSkin的语法及示例。
     */
    SegmentSkin(query: SegmentSkinRequest): Promise<SegmentSkinResponse>;
    /**
     * 本文档介绍天空分割SegmentSky的语法及示例。
     */
    SegmentSky(query: SegmentSkyRequest): Promise<SegmentSkyResponse>;
}
export default IMAGESEG;
