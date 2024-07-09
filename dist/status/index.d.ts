import { ListEventInProgressRequest } from "./ListEventInProgress/req";
import { ListEventInProgressResponse } from "./ListEventInProgress/res";

interface STATUS {
    /**
     * 查询阿里云当前正在发生且未结束的事件。
     */
    ListEventInProgress(query: ListEventInProgressRequest): Promise<ListEventInProgressResponse>;
}
export default STATUS;
