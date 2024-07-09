import { StopMeetingTransRequest } from "./StopMeetingTrans/req";
import { StopMeetingTransResponse } from "./StopMeetingTrans/res";
import { GetFileTransRequest } from "./GetFileTrans/req";
import { GetFileTransResponse } from "./GetFileTrans/res";
import { CreateFileTransRequest } from "./CreateFileTrans/req";
import { CreateFileTransResponse } from "./CreateFileTrans/res";
import { GetMeetingTransRequest } from "./GetMeetingTrans/req";
import { GetMeetingTransResponse } from "./GetMeetingTrans/res";
import { CreateMeetingTransRequest } from "./CreateMeetingTrans/req";
import { CreateMeetingTransResponse } from "./CreateMeetingTrans/res";

interface TINGWU {
    /**
     * 结束实时会议。
     */
    StopMeetingTrans(query: StopMeetingTransRequest): Promise<StopMeetingTransResponse>;
    /**
     * 查询音视频转写任务信息。
     */
    GetFileTrans(query: GetFileTransRequest): Promise<GetFileTransResponse>;
    /**
     * 创建音视频转写任务。
     */
    CreateFileTrans(query: CreateFileTransRequest): Promise<CreateFileTransResponse>;
    /**
     * 查询实时会议信息。
     */
    GetMeetingTrans(query: GetMeetingTransRequest): Promise<GetMeetingTransResponse>;
    /**
     * 创建实时会议。
     */
    CreateMeetingTrans(query: CreateMeetingTransRequest): Promise<CreateMeetingTransResponse>;
}
export default TINGWU;
