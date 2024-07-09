import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { SegmentVideoBodyRequest } from "./SegmentVideoBody/req";
import { SegmentVideoBodyResponse } from "./SegmentVideoBody/res";

interface VIDEOSEG {
    /**
     * 本文介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 本文介绍视频人像分割SegmentVideoBody的语法及示例。
     */
    SegmentVideoBody(query: SegmentVideoBodyRequest): Promise<SegmentVideoBodyResponse>;
}
export default VIDEOSEG;
