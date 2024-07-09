import { AddImageRequest } from "./AddImage/req";
import { AddImageResponse } from "./AddImage/res";
import { CreateImageDbRequest } from "./CreateImageDb/req";
import { CreateImageDbResponse } from "./CreateImageDb/res";
import { DeleteImageRequest } from "./DeleteImage/req";
import { DeleteImageResponse } from "./DeleteImage/res";
import { DeleteImageDbRequest } from "./DeleteImageDb/req";
import { DeleteImageDbResponse } from "./DeleteImageDb/res";
import { ListImageDbsRequest } from "./ListImageDbs/req";
import { ListImageDbsResponse } from "./ListImageDbs/res";
import { ListImagesRequest } from "./ListImages/req";
import { ListImagesResponse } from "./ListImages/res";
import { SearchImageRequest } from "./SearchImage/req";
import { SearchImageResponse } from "./SearchImage/res";

interface IMGSEARCH {
    /**
     * 本文档介绍添加图片数据AddImage的语法及示例。
     */
    AddImage(query: AddImageRequest): Promise<AddImageResponse>;
    /**
     * 本文档介绍创建数据库CreateImageDb的语法及示例。
     */
    CreateImageDb(query: CreateImageDbRequest): Promise<CreateImageDbResponse>;
    /**
     * 本文介绍删除图片DeleteImage的语法及示例。
     */
    DeleteImage(query: DeleteImageRequest): Promise<DeleteImageResponse>;
    /**
     * 本文档介绍删除数据库DeleteImageDb的语法及示例。
     */
    DeleteImageDb(query: DeleteImageDbRequest): Promise<DeleteImageDbResponse>;
    /**
     * 本文档介绍查看数据库列表ListImageDbs的语法及示例。
     */
    ListImageDbs(query: ListImageDbsRequest): Promise<ListImageDbsResponse>;
    /**
     * 本文档介绍查看图片数据列表ListImages的语法及示例。
     */
    ListImages(query: ListImagesRequest): Promise<ListImagesResponse>;
    /**
     * 本文介绍搜索图片SearchImage的语法及示例。
     */
    SearchImage(query: SearchImageRequest): Promise<SearchImageResponse>;
}
export default IMGSEARCH;
