import { AddImageRequest } from "./AddImage/req";
import { AddImageResponse } from "./AddImage/res";
import { DeleteImageRequest } from "./DeleteImage/req";
import { DeleteImageResponse } from "./DeleteImage/res";
import { SearchImageRequest } from "./SearchImage/req";
import { SearchImageResponse } from "./SearchImage/res";

interface IMAGESEARCH {
    /**
     * 本文为您介绍AddImage接口的语法及示例，用于向图像搜索实例中添加图片信息。
     */
    AddImage(query: AddImageRequest): Promise<AddImageResponse>;
    /**
     * 本文为您介绍DeleteImage接口的语法及示例，用于向图像搜索实例中删除图片信息。
     */
    DeleteImage(query: DeleteImageRequest): Promise<DeleteImageResponse>;
    /**
     * 本文为您介绍searchbyimage接口的语法及示例，用于向淘宝联盟版在线调用。
     */
    SearchImage(query: SearchImageRequest): Promise<SearchImageResponse>;
}
export default IMAGESEARCH;
