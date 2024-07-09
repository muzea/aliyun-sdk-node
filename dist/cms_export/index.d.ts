import { BatchGetRequest } from "./BatchGet/req";
import { BatchGetResponse } from "./BatchGet/res";
import { CursorRequest } from "./Cursor/req";
import { CursorResponse } from "./Cursor/res";

interface CMS_EXPORT {
    /**
     * 导出在Cursor接口中定义的监控数据。
     */
    BatchGet(query: BatchGetRequest): Promise<BatchGetResponse>;
    /**
     * 定义导出监控数据的范围并返回用于初始调用BatchGet接口的Cursor参数。
     */
    Cursor(query: CursorRequest): Promise<CursorResponse>;
}
export default CMS_EXPORT;
