import { SyncCardInfoRequest } from "./SyncCardInfo/req";
import { SyncCardInfoResponse } from "./SyncCardInfo/res";
import { AddMemberBasicInfoRequest } from "./AddMemberBasicInfo/req";
import { AddMemberBasicInfoResponse } from "./AddMemberBasicInfo/res";
import { SyncMemberBehaviorInfoRequest } from "./SyncMemberBehaviorInfo/req";
import { SyncMemberBehaviorInfoResponse } from "./SyncMemberBehaviorInfo/res";
import { MemberPointChangeRequest } from "./MemberPointChange/req";
import { MemberPointChangeResponse } from "./MemberPointChange/res";
import { QueryMemberBasicInfoRequest } from "./QueryMemberBasicInfo/req";
import { QueryMemberBasicInfoResponse } from "./QueryMemberBasicInfo/res";
import { MemberAccountDetailPageQueryRequest } from "./MemberAccountDetailPageQuery/req";
import { MemberAccountDetailPageQueryResponse } from "./MemberAccountDetailPageQuery/res";
import { BatchSaveOrderPopRequest } from "./BatchSaveOrderPop/req";
import { BatchSaveOrderPopResponse } from "./BatchSaveOrderPop/res";
import { CalculateMemberLevelRequest } from "./CalculateMemberLevel/req";
import { CalculateMemberLevelResponse } from "./CalculateMemberLevel/res";
import { EditMemberBasicInfoRequest } from "./EditMemberBasicInfo/req";
import { EditMemberBasicInfoResponse } from "./EditMemberBasicInfo/res";

interface RETAILADVQA {
    /**
     * 卡券信息同步。
     */
    SyncCardInfo(query: SyncCardInfoRequest): Promise<SyncCardInfoResponse>;
    /**
     * 开放平台同步会员基础信息。
     */
    AddMemberBasicInfo(query: AddMemberBasicInfoRequest): Promise<AddMemberBasicInfoResponse>;
    /**
     * 保存会员行为信息。
     */
    SyncMemberBehaviorInfo(query: SyncMemberBehaviorInfoRequest): Promise<SyncMemberBehaviorInfoResponse>;
    /**
     * 会员积分变更。
     */
    MemberPointChange(query: MemberPointChangeRequest): Promise<MemberPointChangeResponse>;
    /**
     * 查询会员基础信息。
     */
    QueryMemberBasicInfo(query: QueryMemberBasicInfoRequest): Promise<QueryMemberBasicInfoResponse>;
    /**
     * 积分明细查询。
     */
    MemberAccountDetailPageQuery(query: MemberAccountDetailPageQueryRequest): Promise<MemberAccountDetailPageQueryResponse>;
    /**
     * null
     */
    BatchSaveOrderPop(query: BatchSaveOrderPopRequest): Promise<BatchSaveOrderPopResponse>;
    /**
     * 会员等级初始化计算。
     */
    CalculateMemberLevel(query: CalculateMemberLevelRequest): Promise<CalculateMemberLevelResponse>;
    /**
     * 会员信息编辑API。
     */
    EditMemberBasicInfo(query: EditMemberBasicInfoRequest): Promise<EditMemberBasicInfoResponse>;
}
export default RETAILADVQA;
