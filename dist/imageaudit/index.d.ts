import { ScanImageRequest } from "./ScanImage/req";
import { ScanImageResponse } from "./ScanImage/res";
import { ScanTextRequest } from "./ScanText/req";
import { ScanTextResponse } from "./ScanText/res";

interface IMAGEAUDIT {
    /**
     * 本文介绍图片内容安全ScanImage的语法及示例。
     */
    ScanImage(query: ScanImageRequest): Promise<ScanImageResponse>;
    /**
     * 本文为您介绍文本内容安全ScanText的语法及示例。
     */
    ScanText(query: ScanTextRequest): Promise<ScanTextResponse>;
}
export default IMAGEAUDIT;
