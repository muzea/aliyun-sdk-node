import { DeleteEnterpriseDingtalkGroupCustomerMemberRequest } from "./DeleteEnterpriseDingtalkGroupCustomerMember/req";
import { DeleteEnterpriseDingtalkGroupCustomerMemberResponse } from "./DeleteEnterpriseDingtalkGroupCustomerMember/res";
import { ListEnterpriseDingtalkGroupCustomerMembersRequest } from "./ListEnterpriseDingtalkGroupCustomerMembers/req";
import { ListEnterpriseDingtalkGroupCustomerMembersResponse } from "./ListEnterpriseDingtalkGroupCustomerMembers/res";
import { GetEnterpriseDingtalkGroupCustomerMemberRequest } from "./GetEnterpriseDingtalkGroupCustomerMember/req";
import { GetEnterpriseDingtalkGroupCustomerMemberResponse } from "./GetEnterpriseDingtalkGroupCustomerMember/res";
import { GetEnterpriseDingtalkGroupRequest } from "./GetEnterpriseDingtalkGroup/req";
import { GetEnterpriseDingtalkGroupResponse } from "./GetEnterpriseDingtalkGroup/res";
import { ListEnterpriseDingtalkGroupsRequest } from "./ListEnterpriseDingtalkGroups/req";
import { ListEnterpriseDingtalkGroupsResponse } from "./ListEnterpriseDingtalkGroups/res";
import { ListProductByGroupRequest } from "./ListProductByGroup/req";
import { ListProductByGroupResponse } from "./ListProductByGroup/res";
import { ReplyMessageApiRequest } from "./ReplyMessageApi/req";
import { ReplyMessageApiResponse } from "./ReplyMessageApi/res";
import { CreateTaskOrderRequest } from "./CreateTaskOrder/req";
import { CreateTaskOrderResponse } from "./CreateTaskOrder/res";
import { QueryTaskInfoRequest } from "./QueryTaskInfo/req";
import { QueryTaskInfoResponse } from "./QueryTaskInfo/res";
import { CloseTaskOrderRequest } from "./CloseTaskOrder/req";
import { CloseTaskOrderResponse } from "./CloseTaskOrder/res";
import { CreateTaskOrderByEventReportRequest } from "./CreateTaskOrderByEventReport/req";
import { CreateTaskOrderByEventReportResponse } from "./CreateTaskOrderByEventReport/res";
import { RestOpenTaskOrderRequest } from "./RestOpenTaskOrder/req";
import { RestOpenTaskOrderResponse } from "./RestOpenTaskOrder/res";
import { ListDdTaskOrderRequest } from "./ListDdTaskOrder/req";
import { ListDdTaskOrderResponse } from "./ListDdTaskOrder/res";

interface SUPPORT_PLAN {
    /**
     * 删除企业服务群中的成员（注：只能删除企业侧人员）。
     */
    DeleteEnterpriseDingtalkGroupCustomerMember(query: DeleteEnterpriseDingtalkGroupCustomerMemberRequest): Promise<DeleteEnterpriseDingtalkGroupCustomerMemberResponse>;
    /**
     * 获取企业服务群成员列表（注：只能获取企业侧成员）。
     */
    ListEnterpriseDingtalkGroupCustomerMembers(query: ListEnterpriseDingtalkGroupCustomerMembersRequest): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse>;
    /**
     * 获取企业服务群成员详情（注：只能获取到企业的成员）。
     */
    GetEnterpriseDingtalkGroupCustomerMember(query: GetEnterpriseDingtalkGroupCustomerMemberRequest): Promise<GetEnterpriseDingtalkGroupCustomerMemberResponse>;
    /**
     * 获取企业服务群的详细信息。
     */
    GetEnterpriseDingtalkGroup(query: GetEnterpriseDingtalkGroupRequest): Promise<GetEnterpriseDingtalkGroupResponse>;
    /**
     * 获取账户下关联的企业服务钉群列表。
     */
    ListEnterpriseDingtalkGroups(query: ListEnterpriseDingtalkGroupsRequest): Promise<ListEnterpriseDingtalkGroupsResponse>;
    /**
     * 根据产品组获取产品列表（主要是获取产品id）。
     */
    ListProductByGroup(query: ListProductByGroupRequest): Promise<ListProductByGroupResponse>;
    /**
     * 消息回复。
     */
    ReplyMessageApi(query: ReplyMessageApiRequest): Promise<ReplyMessageApiResponse>;
    /**
     * 创建任务订单。
     */
    CreateTaskOrder(query: CreateTaskOrderRequest): Promise<CreateTaskOrderResponse>;
    /**
     * 查询任务详情。
     */
    QueryTaskInfo(query: QueryTaskInfoRequest): Promise<QueryTaskInfoResponse>;
    /**
     * 关闭任务订单。
     */
    CloseTaskOrder(query: CloseTaskOrderRequest): Promise<CloseTaskOrderResponse>;
    /**
     * 告警建单。
     */
    CreateTaskOrderByEventReport(query: CreateTaskOrderByEventReportRequest): Promise<CreateTaskOrderByEventReportResponse>;
    /**
     * 任务单重开。
     */
    RestOpenTaskOrder(query: RestOpenTaskOrderRequest): Promise<RestOpenTaskOrderResponse>;
    /**
     * 获取获取任务订单列表。
     */
    ListDdTaskOrder(query: ListDdTaskOrderRequest): Promise<ListDdTaskOrderResponse>;
}
export default SUPPORT_PLAN;
