import { ClassifyCommodityRequest } from "./ClassifyCommodity/req";
import { ClassifyCommodityResponse } from "./ClassifyCommodity/res";

interface GOODSTECH {
    /**
     * 本文介绍商品分类ClassifyCommodity的语法及示例。
     */
    ClassifyCommodity(query: ClassifyCommodityRequest): Promise<ClassifyCommodityResponse>;
}
export default GOODSTECH;
