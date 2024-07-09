import { CloseTicketRequest } from "./CloseTicket/req";
import { CloseTicketResponse } from "./CloseTicket/res";
import { CreateTicketRequest } from "./CreateTicket/req";
import { CreateTicketResponse } from "./CreateTicket/res";
import { EvaluateTicketRequest } from "./EvaluateTicket/req";
import { EvaluateTicketResponse } from "./EvaluateTicket/res";
import { GetAttachmentUploadUrlRequest } from "./GetAttachmentUploadUrl/req";
import { GetAttachmentUploadUrlResponse } from "./GetAttachmentUploadUrl/res";
import { GetMqConsumerTagRequest } from "./GetMqConsumerTag/req";
import { GetMqConsumerTagResponse } from "./GetMqConsumerTag/res";
import { GetTicketRequest } from "./GetTicket/req";
import { GetTicketResponse } from "./GetTicket/res";
import { ListCategoriesRequest } from "./ListCategories/req";
import { ListCategoriesResponse } from "./ListCategories/res";
import { ListProductsRequest } from "./ListProducts/req";
import { ListProductsResponse } from "./ListProducts/res";
import { ListTicketNotesRequest } from "./ListTicketNotes/req";
import { ListTicketNotesResponse } from "./ListTicketNotes/res";
import { ListTicketsRequest } from "./ListTickets/req";
import { ListTicketsResponse } from "./ListTickets/res";
import { ReopenTicketRequest } from "./ReopenTicket/req";
import { ReopenTicketResponse } from "./ReopenTicket/res";
import { ReplyTicketRequest } from "./ReplyTicket/req";
import { ReplyTicketResponse } from "./ReplyTicket/res";

interface WORKORDER {
    /**
     * 关闭工单。
     */
    CloseTicket(query: CloseTicketRequest): Promise<CloseTicketResponse>;
    /**
     * 创建工单。
     */
    CreateTicket(query: CreateTicketRequest): Promise<CreateTicketResponse>;
    /**
     * 评价工单。
     */
    EvaluateTicket(query: EvaluateTicketRequest): Promise<EvaluateTicketResponse>;
    /**
     * 查询附件上传OSS地址。
     */
    GetAttachmentUploadUrl(query: GetAttachmentUploadUrlRequest): Promise<GetAttachmentUploadUrlResponse>;
    /**
     * 获取工单RocketMQ消息监听的TAG。
     */
    GetMqConsumerTag(query: GetMqConsumerTagRequest): Promise<GetMqConsumerTagResponse>;
    /**
     * 查询工单。
     */
    GetTicket(query: GetTicketRequest): Promise<GetTicketResponse>;
    /**
     * 获取工单问题分类列表数据。
     */
    ListCategories(query: ListCategoriesRequest): Promise<ListCategoriesResponse>;
    /**
     * 获取阿里云产品列表数据。
     */
    ListProducts(query: ListProductsRequest): Promise<ListProductsResponse>;
    /**
     * 获取工单沟通记录。
     */
    ListTicketNotes(query: ListTicketNotesRequest): Promise<ListTicketNotesResponse>;
    /**
     * 获取我的工单列表。
     */
    ListTickets(query: ListTicketsRequest): Promise<ListTicketsResponse>;
    /**
     * 重开工单。
     */
    ReopenTicket(query: ReopenTicketRequest): Promise<ReopenTicketResponse>;
    /**
     * 工单回复, 回复的内容可以通过ListTicketNotes接口获取。
     */
    ReplyTicket(query: ReplyTicketRequest): Promise<ReplyTicketResponse>;
}
export default WORKORDER;
